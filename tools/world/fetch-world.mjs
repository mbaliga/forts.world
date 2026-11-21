// Global fort/castle universe fetcher. Runs where the internet is available (GitHub Actions or your machine), never in the sandbox.
// Usage: node tools/world/fetch-world.mjs <sources=all> <countries=all> [shard=0/1]
//   sources:   comma list of wikidata,osm   (default all)
//   countries: ISO2 codes, comma list, or "all" (every Wikidata item with an ISO 3166-1 alpha-2 code and no end date)
//   shard:     "i/n": take every n-th country of the sorted list, starting at i, so several jobs can split the world
// Writes gzipped, tag-reduced extracts to data/world-raw/{wikidata,osm}/ and data/world-raw/manifest-<shard>.json.
// What counts as "notable" (Wikidata): a fortification/castle/fort (any subclass) with coordinates AND (a Wikipedia/Commons sitelink OR a heritage designation OR a World Heritage id).
// What counts as an OSM marker: historic=castle; historic=fort|fortress; historic=ruins that is named or tagged ruins=castle|fort|fortress|fortification|tower.
// Data: Wikidata (CC0), OpenStreetMap contributors (ODbL).
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const root = path.resolve(new URL('../..', import.meta.url).pathname);
const OUT = path.join(root, 'data/world-raw');
const UA = 'forts.world-world-universe/1.0 (https://github.com/mbaliga/forts.world)';

const want = new Set(((process.argv[2] || 'all').trim() || 'all').split(',').map(s => s.trim().toLowerCase()));
const wantSrc = s => (s !== 'enrich' && want.has('all')) || want.has(s);
const ccArg = (process.argv[3] || 'all').trim() || 'all';
const [shardI, shardN] = (process.argv[4] || '0/1').split('/').map(Number);
const redo = new Set((process.argv[5] || '').split(',').map(x => x.trim().toUpperCase()).filter(Boolean)); // countries to fetch again even if a file exists
const haveFile = (rel, cc) => !redo.has(cc) && fs.existsSync(path.join(OUT, rel)); // resume: a finished country/group is not fetched twice
const sleep = ms => new Promise(r => setTimeout(r, ms));
const manifest = { fetched: new Date().toISOString(), shard: `${shardI}/${shardN}`, sources: {}, warnings: [], failed: [] };
const warn = m => { console.error('WARN', m); manifest.warnings.push(m); };
const saveGz = (rel, obj) => {
  const p = path.join(OUT, rel); fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, zlib.gzipSync(typeof obj === 'string' ? obj : JSON.stringify(obj)));
};

async function http(url, opts = {}, tries = 4) {
  let last;
  for (let i = 0; i < tries; i++) {
    try {
      const r = await fetch(url, { ...opts, headers: { 'user-agent': UA, ...(opts.headers || {}) }, signal: AbortSignal.timeout(opts.timeout || 280000) });
      if (r.ok) return r;
      last = `${r.status} ${url.slice(0, 90)}`;
      if (![429, 500, 502, 503, 504].includes(r.status)) break;
      const ra = +r.headers.get('retry-after'); if (ra) await sleep(Math.min(ra, 120) * 1000);
    } catch (e) { last = `${e.message} ${url.slice(0, 90)}`; }
    await sleep(15000 * (i + 1));
  }
  throw new Error(last);
}

// ---------------------------------------------------------------- countries
const WD_SPARQL = 'https://query.wikidata.org/sparql';
async function sparql(query, timeout = 130000, tries = 3) {
  const r = await http(`${WD_SPARQL}?format=json&query=${encodeURIComponent(query)}`, { headers: { accept: 'application/sparql-results+json' }, timeout }, tries);
  return (await r.json()).results.bindings;
}

async function countryList() {
  const rows = await sparql(`SELECT ?c ?iso ?label WHERE { ?c wdt:P297 ?iso . FILTER NOT EXISTS { ?c wdt:P576 ?end }
    SERVICE wikibase:label { bd:serviceParam wikibase:language "en" . ?c rdfs:label ?label . } }`);
  const m = new Map();
  for (const b of rows) m.set(b.iso.value, { cc: b.iso.value, q: b.c.value.split('/').pop(), name: b.label.value });
  return [...m.values()].sort((a, b) => a.cc.localeCompare(b.cc));
}

// ---------------------------------------------------------------- Wikidata
const CLASSES = process.env.WD_CLASSES ? process.env.WD_CLASSES.split(/[\s,]+/).filter(Boolean) : ['wd:Q57821', 'wd:Q23413', 'wd:Q1785071']; // fortification, castle, fort (their subclasses are followed)
const WD_DIR = process.env.WD_DIR || 'wikidata'; // WD_CLASSES + WD_DIR=wikidata-extra: a supplementary pull of classes outside the fortification tree (brochs, ringforts)
// Notability bands over the sitelink count; each band is its own query so no single query is large enough to time out.
const BANDS = [[30, 9999, ''], [10, 29, ''], [5, 9, ''], [3, 4, ''], [2, 2, ''], [1, 1, ''],
  [0, 0, 'FILTER(EXISTS { ?item wdt:P1435 ?dd } || EXISTS { ?item wdt:P757 ?ww })']];


// One detail query for a list of qids (indexed VALUES lookups): labels, sitelinks, classes, heritage designations.
const detailQuery = (chunk) => `SELECT ?item ?name ?coord ?sl ?whs ?inc (SAMPLE(?adm) AS ?admin) (GROUP_CONCAT(DISTINCT ?cl; separator="|") AS ?classes) (GROUP_CONCAT(DISTINCT ?dl; separator="|") AS ?designations) (SAMPLE(?nat) AS ?native) WHERE {
          VALUES ?item { ${chunk.map(q => 'wd:' + q).join(' ')} }
          ?item wdt:P625 ?coord ; wikibase:sitelinks ?sl .
          OPTIONAL { ?item wdt:P757 ?whs } OPTIONAL { ?item wdt:P571 ?inc } OPTIONAL { ?item wdt:P1705 ?nat }
          OPTIONAL { ?item wdt:P31 ?c . ?c rdfs:label ?cl . FILTER(LANG(?cl)="en") }
          OPTIONAL { ?item wdt:P1435 ?d . ?d rdfs:label ?dl . FILTER(LANG(?dl)="en") }
          OPTIONAL { ?item wdt:P131 ?a . ?a rdfs:label ?adm . FILTER(LANG(?adm)="en") }
          SERVICE wikibase:label { bd:serviceParam wikibase:language "en,mul,fr,de,es,it,ru,zh,ja,ar,hi" . ?item rdfs:label ?name . }
        } GROUP BY ?item ?name ?coord ?sl ?whs ?inc`;
const parseDetail = (r) => r.map(b => {
  const v = k => b[k]?.value;
  const m = /Point\(([-\d.eE]+) ([-\d.eE]+)\)/.exec(v('coord') || '');
  const q = v('item')?.split('/').pop(); if (!q || !m) return null;
  return { qid: q, name: v('name'), native: v('native') || null, lon: +m[1], lat: +m[2], sl: +v('sl') || 0, whs: v('whs') || null, inc: (v('inc') || '').slice(0, 5) || null,
    admin: v('admin') || null, classes: (v('classes') || '').split('|').filter(Boolean), designations: (v('designations') || '').split('|').filter(Boolean) };
}).filter(Boolean);

// Enrichment: qids that OSM tags on castles/forts but the class-filtered pull did not return (e.g. a palace-fortress).
async function fetchEnrich() {
  const stat = { queries: 0, rows: 0 };
  const file = path.join(OUT, 'enrich-qids.txt');
  const qids = fs.existsSync(file) ? fs.readFileSync(file, 'utf8').split(/\s+/).filter(x => /^Q\d+$/.test(x)) : [];
  const chunks = []; for (let i = 0; i < qids.length; i += 250) chunks.push(qids.slice(i, i + 250));
  const rows = [];
  for (let k = 0; k < chunks.length; k++) {
    if (k % shardN !== shardI) continue;
    try { const r = parseDetail(await sparql(detailQuery(chunks[k]))); stat.queries++; rows.push(...r); }
    catch (e) { manifest.failed.push(`enrich:chunk${k}:${e.message.slice(0, 100)}`); warn(`enrich chunk ${k}: ${e.message.slice(0, 80)}`); }
    await sleep(2500);
  }
  saveGz(`enrich/enrich-${shardI}of${shardN}.json.gz`, rows); stat.rows = rows.length;
  return stat;
}

const QLEVER = 'https://qlever.cs.uni-freiburg.de/api/wikidata';
async function qleverIds(C, lo, hi, extra) {
  const q = `PREFIX wd: <http://www.wikidata.org/entity/> PREFIX wdt: <http://www.wikidata.org/prop/direct/> PREFIX wikibase: <http://wikiba.se/ontology#>
    SELECT DISTINCT ?item WHERE { VALUES ?cls { ${CLASSES.join(' ')} } ?item wdt:P31/wdt:P279* ?cls ; wdt:P17 wd:${C.q} ; wdt:P625 ?c ; wikibase:sitelinks ?sl . FILTER(?sl >= ${lo} && ?sl <= ${hi}) ${extra} }`;
  const r = await http(`${QLEVER}?query=${encodeURIComponent(q)}`, { headers: { accept: 'application/sparql-results+json' }, timeout: 200000 }, 3);
  return (await r.json()).results.bindings.map((b) => b.item.value.split('/').pop());
}

async function wikidataCountry(C, stat) {
  const rows = new Map();
  for (const [lo, hi, extra] of BANDS) {
    // 1) ids only (cheap), 2) details in VALUES chunks (indexed lookups)
    let ids = [];
    // ids for one band, optionally restricted to a latitude strip (used only when the whole band times out)
    const bandIds = async (strip) => {
      const out = [];
      const geo = strip ? `?item p:P625/psv:P625 [ wikibase:geoLatitude ?lat ] . FILTER(?lat >= ${strip[0]} && ?lat < ${strip[1]})` : '';
      for (let off = 0; ; off += 4000) {
        const r = await sparql(`SELECT DISTINCT ?item WHERE { VALUES ?cls { ${CLASSES.join(' ')} } ?item wdt:P31/wdt:P279* ?cls ; wdt:P17 wd:${C.q} ; wdt:P625 ?c ; wikibase:sitelinks ?sl . ${geo} FILTER(?sl >= ${lo} && ?sl <= ${hi}) ${extra} } ORDER BY ?item LIMIT 4000 OFFSET ${off}`);
        stat.queries++; out.push(...r.map(b => b.item.value.split('/').pop()));
        await sleep(2500);
        if (r.length < 4000) break;
      }
      return out;
    };
    // ids: QLever (University of Freiburg; the same Wikidata, refreshed about weekly) answers the subclass-closure query that
    // times out on WDQS for large countries; WDQS is the fallback, then WDQS in latitude strips. Details always come from WDQS.
    try { ids = process.env.WD_IDS === 'wdqs' ? await bandIds(null) : await qleverIds(C, lo, hi, extra); stat.queries++; }
    catch (e0) {
      try { ids = await bandIds(null); warn(`wikidata ${C.cc} band ${lo}-${hi}: QLever ${e0.message.slice(0, 40)}; ids from WDQS (${ids.length})`); }
      catch (e) {
      warn(`wikidata ${C.cc} band ${lo}-${hi}: ${e.message.slice(0, 80)}; retrying in latitude strips`);
      const STRIPS = [[-91, 0], [0, 35], [35, 45], [45, 50], [50, 52], [52, 54], [54, 56], [56, 58], [58, 91]];
      ids = [];
      for (const st of STRIPS) {
        try { ids.push(...await bandIds(st)); }
        catch (e2) { manifest.failed.push(`wikidata:${C.cc}:band${lo}-${hi}:strip${st[0]}..${st[1]}:${e2.message.slice(0, 100)}`); warn(`wikidata ${C.cc} band ${lo}-${hi} strip ${st}: ${e2.message.slice(0, 80)}`); }
      }
      ids = [...new Set(ids)];
      }
    }
    for (let i = 0; i < ids.length; i += 250) {
      const chunk = ids.slice(i, i + 250);
      try {
        const r = await sparql(`SELECT ?item ?name ?coord ?sl ?whs ?inc (SAMPLE(?adm) AS ?admin) (GROUP_CONCAT(DISTINCT ?cl; separator="|") AS ?classes) (GROUP_CONCAT(DISTINCT ?dl; separator="|") AS ?designations) (SAMPLE(?nat) AS ?native) WHERE {
          VALUES ?item { ${chunk.map(q => 'wd:' + q).join(' ')} }
          ?item wdt:P625 ?coord ; wikibase:sitelinks ?sl .
          OPTIONAL { ?item wdt:P757 ?whs } OPTIONAL { ?item wdt:P571 ?inc } OPTIONAL { ?item wdt:P1705 ?nat }
          OPTIONAL { ?item wdt:P31 ?c . ?c rdfs:label ?cl . FILTER(LANG(?cl)="en") }
          OPTIONAL { ?item wdt:P1435 ?d . ?d rdfs:label ?dl . FILTER(LANG(?dl)="en") }
          OPTIONAL { ?item wdt:P131 ?a . ?a rdfs:label ?adm . FILTER(LANG(?adm)="en") }
          SERVICE wikibase:label { bd:serviceParam wikibase:language "en,mul,fr,de,es,it,ru,zh,ja,ar,hi" . ?item rdfs:label ?name . }
        } GROUP BY ?item ?name ?coord ?sl ?whs ?inc`);
        stat.queries++;
        for (const b of r) {
          const v = k => b[k]?.value;
          const m = /Point\(([-\d.eE]+) ([-\d.eE]+)\)/.exec(v('coord') || '');
          const q = v('item')?.split('/').pop(); if (!q || !m) continue;
          const prev = rows.get(q);
          const rec = { qid: q, name: v('name'), native: v('native') || null, lon: +m[1], lat: +m[2], sl: +v('sl') || 0, whs: v('whs') || null, inc: (v('inc') || '').slice(0, 5) || null,
            admin: v('admin') || null, classes: (v('classes') || '').split('|').filter(Boolean), designations: (v('designations') || '').split('|').filter(Boolean) };
          if (!prev || rec.designations.length > prev.designations.length) rows.set(q, rec);
        }
      } catch (e) { manifest.failed.push(`wikidata:${C.cc}:detail${lo}-${hi}:${i}:${e.message}`); warn(`wikidata ${C.cc} detail ${i}: ${e.message}`); }
      await sleep(2500);
    }
  }
  return [...rows.values()];
}

async function fetchWikidata(countries) {
  const stat = { queries: 0, rows: 0, countries: {} };
  for (const C of countries) {
    if (haveFile(`${WD_DIR}/${C.cc}.json.gz`, C.cc)) { console.log('wikidata', C.cc, 'already fetched, skipping'); continue; }
    const rows = await wikidataCountry(C, stat);
    saveGz(`${WD_DIR}/${C.cc}.json.gz`, rows);
    stat.rows += rows.length; stat.countries[C.cc] = rows.length;
    console.log('wikidata', C.cc, C.name, rows.length);
  }
  return stat;
}

// ---------------------------------------------------------------- OSM / Overpass
const OVERPASS = process.env.OVERPASS ? process.env.OVERPASS.split(',') : ['https://overpass-api.de/api/interpreter', 'https://overpass.private.coffee/api/interpreter', 'https://overpass.openstreetmap.fr/api/interpreter', 'https://overpass.kumi.systems/api/interpreter']; // OVERPASS env: mirrors that answer from where this runs
const KEEP = ['name', 'name:en', 'historic', 'castle_type', 'ruins', 'wikidata', 'wikipedia', 'start_date', 'heritage', 'heritage:operator', 'ref:whc', 'ruins:castle_type', 'ruins:ruins', 'site_type', 'archaeological_site', 'fortification_type', 'historic:civilization'];
const OSM_GROUPS_ALL = {
  // archaeological fortifications: hillforts, ringforts, brochs, oppida (OSM maps them as archaeological sites, not as historic=fort)
  // (OSM moved from site_type=* to archaeological_site=* around 2021; the old key is kept for anything not yet retagged)
  fortsite: `nwr(area.a)["historic"="archaeological_site"]["archaeological_site"="fortification"]; nwr(area.a)["historic"="archaeological_site"]["site_type"="fortification"];`,
};
const OSM_GROUPS_DEFAULT = {
  castle: `nwr(area.a)["historic"="castle"];`,
  fort: `nwr(area.a)["historic"~"^(fort|fortress)$"];`,
  ruin: `nwr(area.a)["historic"="ruins"]["name"]; nwr(area.a)["historic"="ruins"]["ruins"~"^(castle|fort|fortress|fortification|tower)$"];`,
};

async function overpass(q) {
  const errs = [];
  for (let round = 0; round < 2; round++) {
    for (const ep of OVERPASS) {
      const host = new URL(ep).host;
      try {
        const r = await http(ep, { method: 'POST', body: 'data=' + encodeURIComponent(q), headers: { 'content-type': 'application/x-www-form-urlencoded' }, timeout: 590000 }, 1);
        const j = await r.json();
        // Overpass answers 200 with a remark when it ran out of time or memory: that is a failure, not an empty country
        if (j.remark && /error|timed out|out of memory/i.test(j.remark)) throw new Error('remark: ' + String(j.remark).slice(0, 120));
        return j;
      } catch (e) { errs.push(`${host}: ${e.message.replace(/https?:\/\/\S+/, '').trim()}`); await sleep(20000); }
    }
    await sleep(60000);
  }
  throw new Error(errs.join(' | '));
}

const OSM_GROUPS = process.env.OSM_GROUPS ? Object.fromEntries(process.env.OSM_GROUPS.split(',').map((g) => [g, OSM_GROUPS_ALL[g] || OSM_GROUPS_DEFAULT[g]]).filter(([, v]) => v)) : OSM_GROUPS_DEFAULT; // OSM_GROUPS=fortsite: only that group
async function fetchOsm(countries) {
  const stat = { queries: 0, elements: 0, countries: {} };
  for (const C of countries) {
    let fails = 0;
    for (const [grp, body] of Object.entries(OSM_GROUPS)) {
      if (haveFile(`osm/${C.cc}-${grp}.json.gz`, C.cc)) { console.log('osm', C.cc, grp, 'already fetched, skipping'); continue; }
      if (fails >= 2) { manifest.failed.push(`osm:${C.cc}:${grp}:skipped (mirrors failing)`); continue; }
      stat.queries++;
      const q = `[out:json][timeout:540][maxsize:1073741824];area["ISO3166-1"="${C.cc}"][admin_level=2]->.a;(${body});out tags center;`;
      try {
        const j = await overpass(q);
        const els = (j.elements || []).map(e => {
          const tags = {}; for (const k of KEEP) if (e.tags?.[k] != null) tags[k] = e.tags[k];
          return { t: e.type[0], id: e.id, lat: e.lat ?? e.center?.lat ?? null, lon: e.lon ?? e.center?.lon ?? null, tags };
        }).filter(e => e.lat != null);
        saveGz(`osm/${C.cc}-${grp}.json.gz`, els);
        stat.elements += els.length; (stat.countries[C.cc] ||= {})[grp] = els.length;
        console.log('osm', C.cc, grp, els.length); fails = 0;
      } catch (e) { fails++; manifest.failed.push(`osm:${C.cc}:${grp}:${e.message}`); warn(`osm ${C.cc} ${grp}: ${e.message}`); }
      await sleep(8000);
    }
  }
  return stat;
}

// ---------------------------------------------------------------- main
fs.mkdirSync(OUT, { recursive: true });
let all = (want.size === 1 && want.has('enrich')) ? [] : await countryList(); // enrich needs no country list
if (ccArg !== 'all') { const w = new Set(ccArg.split(',').map(s => s.trim().toUpperCase())); all = all.filter(c => w.has(c.cc)); }
const mine = all.filter((_, i) => i % shardN === shardI);
manifest.countries = mine.map(c => c.cc);
console.log(`world fetch: ${all.length} countries, this shard ${mine.length}`);
let ok = 0;
for (const [src, fn] of [['wikidata', fetchWikidata], ['osm', fetchOsm], ['enrich', async () => fetchEnrich()]]) {
  if (!wantSrc(src)) continue;
  try { manifest.sources[src] = { ok: true, ...(await fn(mine)) }; ok++; }
  catch (e) { manifest.sources[src] = { ok: false, error: e.message }; warn(`${src} failed: ${e.message}`); }
  fs.writeFileSync(path.join(OUT, `manifest-${shardI}of${shardN}.json`), JSON.stringify(manifest, null, 1));
}
fs.writeFileSync(path.join(OUT, `manifest-${shardI}of${shardN}.json`), JSON.stringify(manifest, null, 1));
process.exit(ok ? 0 : 1);
