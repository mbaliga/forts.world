// Phase 0 site-universe fetcher. Runs where the internet is available (GitHub Actions or your machine).
// Usage: node tools/fetch-sites.mjs [sources=all] [countries=all]
//   sources:   comma list of wikidata,osm,unesco,asi   (default all)
//   countries: comma list of ISO2 codes IN,PK,BD,NP,LK,AF,BT (default all)
// Writes gzipped, tag-reduced extracts to data/sites-raw/<source>/ and data/sites-raw/manifest.json.
// A failing source is recorded in the manifest and skipped; the process only exits non-zero if nothing succeeded.
// Data: Wikidata (CC0), OpenStreetMap contributors (ODbL), UNESCO WHC list, Wikipedia lists of ASI monuments (CC BY-SA).
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const root = path.resolve(new URL('..', import.meta.url).pathname);
const OUT = path.join(root, 'data/sites-raw');
const UA = 'forts.world-site-universe/1.0 (https://github.com/mbaliga/forts.world)';

const COUNTRIES = {
  IN: { q: 'Q668', name: 'India' }, PK: { q: 'Q843', name: 'Pakistan' }, BD: { q: 'Q902', name: 'Bangladesh' },
  NP: { q: 'Q837', name: 'Nepal' }, LK: { q: 'Q854', name: 'Sri Lanka' }, AF: { q: 'Q889', name: 'Afghanistan' },
  BT: { q: 'Q917', name: 'Bhutan' },
};
const wantSources = new Set(((process.argv[2] || 'all').trim() || 'all').split(',').map(s => s.trim().toLowerCase()));
const all = wantSources.has('all');
const want = s => all || wantSources.has(s);
const ccArg = (process.argv[3] || 'all').trim();
const ccs = (ccArg === 'all' || !ccArg ? Object.keys(COUNTRIES) : ccArg.split(',').map(s => s.trim().toUpperCase())).filter(c => COUNTRIES[c]);

const sleep = ms => new Promise(r => setTimeout(r, ms));
const manifest = { fetched: new Date().toISOString(), countries: ccs, sources: {}, warnings: [] };
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
    } catch (e) { last = `${e.message} ${url.slice(0, 90)}`; }
    await sleep(15000 * (i + 1));
  }
  throw new Error(last);
}

// ---------------------------------------------------------------- Wikidata
const WD_API = 'https://www.wikidata.org/w/api.php';
const WD_SPARQL = 'https://query.wikidata.org/sparql';

// Class table. Each class names the Q-id we expect plus the English label we expect it to carry;
// a mismatch is looked up by label instead, and skipped (with a warning) if that fails too. Guards against a wrong Q-id silently mis-querying.
const CLASSES = {
  fort: [['Q57821', 'fortification'], ['Q23413', 'castle'], ['Q1785071', 'fort']],
  palace: [['Q16560', 'palace']],
  ancient: [['Q15661340', 'ancient city'], ['Q839954', 'archaeological site']],
  monastery: [['Q44613', 'monastery'], [null, 'vihara']],
  temple: [['Q44539', 'temple'], [null, 'stupa']],
  stepwell: [[null, 'stepwell']],
  tomb: [['Q44377', 'tomb'], [null, 'mausoleum']],
  port: [['Q44782', 'port'], [null, 'harbor']],
};

async function resolveClass(q, label) {
  if (q) {
    const r = await (await http(`${WD_API}?action=wbgetentities&ids=${q}&props=labels&languages=en&format=json`)).json();
    const got = r.entities?.[q]?.labels?.en?.value?.toLowerCase();
    if (got === label.toLowerCase()) return q;
    warn(`class ${q} expected "${label}" but is "${got}"; searching by label`);
  }
  const s = await (await http(`${WD_API}?action=wbsearchentities&search=${encodeURIComponent(label)}&language=en&type=item&limit=8&format=json`)).json();
  const hit = (s.search || []).find(x => (x.label || '').toLowerCase() === label.toLowerCase());
  if (!hit) { warn(`class "${label}" not resolved; skipped`); return null; }
  return hit.id;
}

async function sparql(query) {
  const r = await http(`${WD_SPARQL}?format=json&query=${encodeURIComponent(query)}`, { headers: { accept: 'application/sparql-results+json' }, timeout: 120000 }, 4);
  return (await r.json()).results.bindings;
}

const SELECT = `SELECT ?item ?name ?coord ?sl ?whs
  (SAMPLE(?adm) AS ?admin)
  (GROUP_CONCAT(DISTINCT ?cl; separator="|") AS ?classes)
  (GROUP_CONCAT(DISTINCT ?dl; separator="|") AS ?designations)`;
const COMMON = `
  ?item wdt:P625 ?coord ; wikibase:sitelinks ?sl .
  OPTIONAL { ?item wdt:P757 ?whs }
  OPTIONAL { ?item wdt:P31 ?c . ?c rdfs:label ?cl . FILTER(LANG(?cl)="en") }
  OPTIONAL { ?item wdt:P1435 ?d . ?d rdfs:label ?dl . FILTER(LANG(?dl)="en") }
  OPTIONAL { ?item wdt:P131 ?a . ?a rdfs:label ?adm . FILTER(LANG(?adm)="en") }
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en,hi,ur,bn,ne,si,ps,dz,mul" . ?item rdfs:label ?name . }`;
const GROUP = `GROUP BY ?item ?name ?coord ?sl ?whs`;

function slim(b) {
  const v = k => b[k]?.value;
  const m = /Point\(([-\d.eE]+) ([-\d.eE]+)\)/.exec(v('coord') || '');
  return {
    qid: v('item')?.split('/').pop(), name: v('name'), lon: m ? +m[1] : null, lat: m ? +m[2] : null,
    sl: +v('sl') || 0, whs: v('whs') || null, admin: v('admin') || null,
    classes: (v('classes') || '').split('|').filter(Boolean), designations: (v('designations') || '').split('|').filter(Boolean),
  };
}

async function fetchWikidata() {
  const stat = { queries: 0, rows: 0, failed: [] };
  const resolved = {};
  for (const [grp, list] of Object.entries(CLASSES)) {
    resolved[grp] = [];
    for (const [q, label] of list) { const id = await resolveClass(q, label); if (id) resolved[grp].push(id); await sleep(500); }
  }
  manifest.wikidataClasses = resolved;
  for (const cc of ccs) {
    const C = COUNTRIES[cc];
    const rows = new Map();
    const run = async (tag, body) => {
      stat.queries++;
      try {
        for (const b of await sparql(`${SELECT} WHERE { ${body} ${COMMON} } ${GROUP}`)) { const r = slim(b); if (r.qid && r.lat != null) rows.set(r.qid, r); }
      } catch (e) { stat.failed.push(`${cc}:${tag}:${e.message}`); warn(`wikidata ${cc} ${tag}: ${e.message}`); }
      await sleep(4000);
    };
    for (const [grp, ids] of Object.entries(resolved)) {
      if (!ids.length) continue;
      const extra = grp === 'port' ? 'FILTER(EXISTS { ?item wdt:P1435 ?dd } || EXISTS { ?item wdt:P571 ?inc . FILTER(YEAR(?inc) < 1900) })' : '';
      await run(grp, `VALUES ?cls { ${ids.map(i => 'wd:' + i).join(' ')} } ?item wdt:P31/wdt:P279* ?cls ; wdt:P17 wd:${C.q} . ${extra}`);
    }
    // everything carrying a heritage designation, whatever its class (the build step classifies and drops out-of-scope types)
    await run('designated', `?item wdt:P1435 ?desg ; wdt:P17 wd:${C.q} .`);
    await run('whs', `?item wdt:P757 ?wid ; wdt:P17 wd:${C.q} .`);
    saveGz(`wikidata/${cc}.json.gz`, [...rows.values()]);
    stat.rows += rows.size; stat[cc] = rows.size;
    console.log('wikidata', cc, rows.size);
  }
  return stat;
}

// ---------------------------------------------------------------- OSM / Overpass
const OVERPASS = ['https://overpass-api.de/api/interpreter', 'https://overpass.private.coffee/api/interpreter', 'https://overpass.kumi.systems/api/interpreter'];
const OSM_BUDGET_MS = 100 * 60 * 1000; // wall-clock cap so a flaky mirror can never eat the whole job
const KEEP = ['name', 'name:en', 'alt_name', 'historic', 'building', 'amenity', 'tourism', 'man_made', 'landuse', 'harbour', 'heritage', 'heritage:operator',
  'castle_type', 'site_type', 'tomb', 'religion', 'denomination', 'start_date', 'wikidata', 'wikipedia', 'ref:whc', 'addr:state', 'is_in:state', 'ruins'];
const OSM_GROUPS = {
  historic: `nwr(area.a)["historic"~"^(castle|fort|city_gate|city_walls|citywalls|palace|manor|ruins|archaeological_site|tomb|monastery|temple|stupa)$"]["name"];`,
  heritage: `nwr(area.a)["heritage"]["name"]; nwr(area.a)["heritage:operator"]["name"];`,
  worship: `nwr(area.a)["amenity"="place_of_worship"]["name"]["wikidata"]; nwr(area.a)["building"~"^(temple|mausoleum|shrine|monastery|palace|castle|fort)$"]["name"]["wikidata"];`,
  water: `nwr(area.a)["name"~"(vav|baoli|bawdi|baori|stepwell|step well|pushkarani)",i][~"^(man_made|historic|tourism|building|water|amenity|natural)$"~"."];`,
  port: `nwr(area.a)["name"]["wikidata"]["harbour"]; nwr(area.a)["landuse"="harbour"]["name"]["wikidata"]; nwr(area.a)["historic"~"port|harbour"]["name"];`,
};

async function overpass(q) {
  let last;
  for (const ep of OVERPASS) {
    try {
      const r = await http(ep, { method: 'POST', body: 'data=' + encodeURIComponent(q), headers: { 'content-type': 'application/x-www-form-urlencoded' }, timeout: 200000 }, 1);
      return await r.json();
    } catch (e) { last = e; }
  }
  throw last;
}

async function fetchOsm() {
  const stat = { queries: 0, elements: 0, failed: [] };
  const t0 = Date.now();
  for (const cc of ccs) {
    let fails = 0;
    for (const [grp, body] of Object.entries(OSM_GROUPS)) {
      if (Date.now() - t0 > OSM_BUDGET_MS) { stat.failed.push(`${cc}:${grp}:skipped (time budget)`); continue; }
      if (fails >= 2) { stat.failed.push(`${cc}:${grp}:skipped (mirrors failing)`); continue; }
      stat.queries++;
      const q = `[out:json][timeout:300];area["ISO3166-1"="${cc}"][admin_level=2]->.a;(${body});out tags center;`;
      try {
        const j = await overpass(q);
        const els = (j.elements || []).map(e => {
          const tags = {}; for (const k of KEEP) if (e.tags?.[k] != null) tags[k] = e.tags[k];
          return { t: e.type[0], id: e.id, lat: e.lat ?? e.center?.lat ?? null, lon: e.lon ?? e.center?.lon ?? null, tags };
        }).filter(e => e.lat != null);
        saveGz(`osm/${cc}-${grp}.json.gz`, els);
        stat.elements += els.length; stat[`${cc}-${grp}`] = els.length;
        console.log('osm', cc, grp, els.length); fails = 0;
      } catch (e) { fails++; stat.failed.push(`${cc}:${grp}:${e.message}`); warn(`osm ${cc} ${grp}: ${e.message}`); }
      await sleep(12000);
    }
  }
  return stat;
}

// ---------------------------------------------------------------- UNESCO
async function fetchUnesco() {
  const stat = { files: [] };
  const urls = ['https://whc.unesco.org/en/list/xml/', 'https://whc.unesco.org/en/list/xml', 'https://whc.unesco.org/en/list/?action=list&mode=xml'];
  let xml = null;
  for (const u of urls) { try { const t = await (await http(u, {}, 2)).text(); if (/<row>|<site>/i.test(t)) { xml = t; stat.url = u; break; } } catch (e) { warn(`unesco ${u}: ${e.message}`); } }
  if (!xml) throw new Error('UNESCO list not reachable in XML form');
  saveGz('unesco/list.xml.gz', xml);
  const tag = (s, t) => (new RegExp(`<${t}[^>]*>([\\s\\S]*?)</${t}>`, 'i').exec(s)?.[1] || '').replace(/<!\[CDATA\[|\]\]>/g, '').trim();
  const rows = [...xml.matchAll(/<row>([\s\S]*?)<\/row>/gi)].map(m => m[1]);
  const keep = new Set(['in', 'pk', 'bd', 'np', 'lk', 'af', 'bt']);
  const out = [];
  for (const r of rows) {
    const iso = tag(r, 'iso_code').toLowerCase().split(',').map(s => s.trim());
    if (!iso.some(i => keep.has(i))) continue;
    out.push({ id: tag(r, 'id_number'), name: tag(r, 'site'), iso, lat: parseFloat(tag(r, 'latitude')), lon: parseFloat(tag(r, 'longitude')), category: tag(r, 'category'), year: tag(r, 'date_inscribed'), states: tag(r, 'states'), region: tag(r, 'location') });
  }
  saveGz('unesco/in-region.json.gz', out);
  stat.rows = rows.length; stat.region = out.length;
  console.log('unesco', rows.length, 'total,', out.length, 'in region');
  // tentative list: best effort
  try {
    const t = await (await http('https://whc.unesco.org/en/tentativelists/?action=list&mode=xml', {}, 2)).text();
    if (/<row>|<site>/i.test(t)) { saveGz('unesco/tentative.xml.gz', t); stat.tentative = true; }
  } catch (e) { warn(`unesco tentative: ${e.message}`); }
  return stat;
}

// ---------------------------------------------------------------- ASI (Wikipedia lists of Monuments of National Importance)
function wikiCoord(txt) {
  const m = /\{\{\s*coord\s*\|([^}]*)\}\}/i.exec(txt); if (!m) return null;
  const p = m[1].split('|').map(s => s.trim()).filter(s => s && !/^(display|type|region|name|format|scale|dim|source)\b/i.test(s) && !s.includes('='));
  const nums = []; let hemi = [];
  for (const s of p) { if (/^[NSEW]$/i.test(s)) hemi.push(s.toUpperCase()); else if (!isNaN(+s)) nums.push(+s); }
  if (hemi.length === 2) {
    const nLat = hemi.indexOf('N') >= 0 || hemi.indexOf('S') >= 0 ? hemi.findIndex(h => h === 'N' || h === 'S') : 0;
    const per = nums.length / 2; if (![1, 2, 3].includes(per)) return null;
    const conv = a => a.reduce((s, v, i) => s + v / 60 ** i, 0);
    let lat = conv(nums.slice(0, per)), lon = conv(nums.slice(per));
    if (hemi[0] === 'S') lat = -lat; if (hemi[1] === 'W') lon = -lon;
    return { lat, lon };
  }
  if (nums.length >= 2) return { lat: nums[0], lon: nums[1] };
  return null;
}

async function fetchAsi() {
  const stat = { lists: 0, rows: 0 };
  const titles = new Set();
  for (const cont of ['', '&sroffset=50']) {
    const s = await (await http(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent('intitle:"monuments of national importance" list')}&srlimit=50${cont}&format=json`)).json();
    for (const h of s.query?.search || []) if (/^List of (monuments|Monuments)/.test(h.title) || /monuments of national importance/i.test(h.title)) titles.add(h.title);
  }
  const all = [];
  for (const title of titles) {
    try {
      const j = await (await http(`https://en.wikipedia.org/w/api.php?action=parse&page=${encodeURIComponent(title)}&prop=wikitext&format=json`)).json();
      const wt = j.parse?.wikitext?.['*'] || '';
      stat.lists++;
      for (const chunk of wt.split(/\n\|-/)) {
        const link = [...chunk.matchAll(/\[\[([^\]|#:]+)(?:\|([^\]]+))?\]\]/g)].find(m => !/^(File|Image|Category)/i.test(m[1]));
        const c = wikiCoord(chunk);
        if (link && c) all.push({ list: title, name: (link[2] || link[1]).trim(), page: link[1].trim(), lat: c.lat, lon: c.lon });
      }
    } catch (e) { warn(`asi ${title}: ${e.message}`); }
    await sleep(1500);
  }
  if (!all.length) throw new Error('no ASI rows parsed from Wikipedia lists');
  saveGz('asi/wikipedia-lists.json.gz', all);
  stat.rows = all.length; stat.titles = [...titles];
  console.log('asi', stat.lists, 'lists', all.length, 'rows');
  return stat;
}

// ---------------------------------------------------------------- main
fs.mkdirSync(OUT, { recursive: true });
let ok = 0;
for (const [src, fn] of [['unesco', fetchUnesco], ['asi', fetchAsi], ['wikidata', fetchWikidata], ['osm', fetchOsm]]) {
  if (!want(src)) continue;
  try { manifest.sources[src] = { ok: true, ...(await fn()) }; ok++; }
  catch (e) { manifest.sources[src] = { ok: false, error: e.message }; warn(`${src} failed: ${e.message}`); }
  fs.writeFileSync(path.join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 1));
}
fs.writeFileSync(path.join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 1));
console.log(JSON.stringify(Object.fromEntries(Object.entries(manifest.sources).map(([k, v]) => [k, v.ok])), null, 0));
process.exit(ok ? 0 : 1);
