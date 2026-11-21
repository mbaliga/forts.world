// Merge the global Wikidata + OpenStreetMap extracts (data/world-raw/) into one site table, link it to the
// existing fort programme (data/sites.csv + docs/fort-fidelity/ledger.csv) and write what the search page needs.
//
//   node build-world.mjs [--raw data/world-raw] [--out data/world] [--web web/fort-search/data]
//
// Outputs
//   <out>/sites.csv.gz        every merged site (notable Wikidata items + OSM castle/fort/ruin objects)
//   <out>/summary.json        counts by source, kind and country; dedupe statistics
//   <web>/search.json         notable sites only, column-oriented, for the search box
//   <web>/tiles/<la>_<lo>.json  every site (notable + OSM markers) in 5 degree tiles, for the map
//
// Rules: nothing is invented. A site is "notable" if Wikidata gave it a sitelink, a heritage designation or a
// World Heritage id (that is what the fetcher filtered on). OSM-only objects are markers, not notable sites.
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const ROOT = path.resolve(new URL('../..', import.meta.url).pathname);
const arg = (k, d) => { const i = process.argv.indexOf('--' + k); return i > 0 ? process.argv[i + 1] : d; };
const RAW = path.resolve(ROOT, arg('raw', 'data/world-raw'));
const OUT = path.resolve(ROOT, arg('out', 'data/world'));
const WEB = path.resolve(ROOT, arg('web', 'web/fort-search/data'));
const TILE = 5;

const readGz = (p) => JSON.parse(zlib.gunzipSync(fs.readFileSync(p)).toString('utf8'));
const listGz = (d) => (fs.existsSync(d) ? fs.readdirSync(d).filter((f) => f.endsWith('.json.gz')).sort() : []);

// ---- text helpers
export const fold = (s) => (s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/ß/g, 'ss').replace(/[øœæ]/g, (c) => ({ 'ø': 'o', 'œ': 'oe', 'æ': 'ae' })[c]);
const STOP = new Set(['fort', 'fortress', 'castle', 'castello', 'castillo', 'chateau', 'schloss', 'burg', 'kasteel', 'the', 'of', 'de', 'la', 'le', 'di', 'del', 'der', 'von', 'and', 'ruins', 'ruin', 'old', 'new', 'qila', 'kila', 'gad', 'durg', 'kota', 'fortaleza', 'forte', 'fortress']);
export const tokens = (s) => fold(s).split(/[^\p{L}\p{N}]+/u).filter((t) => t.length >= 3 && !STOP.has(t));
const hav = (a, b, c, d) => { const R = 6371000, r = Math.PI / 180, dl = (c - a) * r, dn = (d - b) * r; const x = Math.sin(dl / 2) ** 2 + Math.cos(a * r) * Math.cos(c * r) * Math.sin(dn / 2) ** 2; return 2 * R * Math.asin(Math.sqrt(x)); };

// ---- kinds: 1 castle, 2 fort, 3 ruin, 4 other fortification
export const KIND = { castle: 1, fort: 2, ruin: 3, fortification: 4 };
export const KIND_NAME = ['', 'castle', 'fort', 'ruin', 'fortification'];
export function wdKind(classes) {
  const s = classes.join(' ').toLowerCase();
  if (/castle|ch[aâ]teau|schloss|burg\b|palace-fortress|kasbah|alcazar|alc[aá]zar/.test(s) && !/ruin/.test(s)) return KIND.castle;
  if (/fort|citadel|bastion|redoubt|blockhouse|stronghold|kremlin|alcazaba|hillfort/.test(s) && !/ruin/.test(s)) return KIND.fort;
  if (/ruin/.test(s)) return KIND.ruin;
  if (/castle|ch[aâ]teau/.test(s)) return KIND.castle;
  if (/fort/.test(s)) return KIND.fort;
  return KIND.fortification;
}
export function osmKind(tags) {
  const h = tags.historic;
  if (h === 'castle') return KIND.castle;
  if (h === 'fort' || h === 'fortress') return KIND.fort;
  if (h === 'ruins') return KIND.ruin;
  return KIND.fortification;
}

// flags
const F = { WHS: 1, HERITAGE: 2, OSM: 4, PROGRAMME: 8, WIKIPEDIA: 16 };

// ---- load
const sites = [];
const byQid = new Map();
const stats = { wikidata: 0, osm: 0, osmDupIds: 0, osmToWd: { byQid: 0, byProximity: 0 }, osmOsmMerged: 0, countries: {}, files: { wikidata: 0, osm: 0 } };

// wikidata/: the fortification/castle/fort pull; wikidata-extra*/: classes outside that tree (brochs and ringforts; underground
// cities, cliff dwellings and talaiots), same format
const WD_DIRS = fs.readdirSync(RAW).filter((d) => /^wikidata(-extra\d*)?$/.test(d)).sort();
for (const [dir, f] of WD_DIRS.flatMap((d) => listGz(path.join(RAW, d)).map((f) => [d, f]))) {
  const cc = f.replace('.json.gz', '');
  stats.files.wikidata++;
  for (const r of readGz(path.join(RAW, dir, f))) {
    if (!r.qid || r.lat == null || r.lon == null) continue;
    if (byQid.has(r.qid)) continue; // an item with several countries appears once, first country wins
    const flags = (r.whs ? F.WHS : 0) | (r.designations?.length ? F.HERITAGE : 0) | (r.sl > 0 ? F.WIKIPEDIA : 0);
    const s = { id: 'wd:' + r.qid, qid: r.qid, name: r.name && !/^Q\d+$/.test(r.name) ? r.name : (r.native || ''), native: r.native || '', cc, lat: r.lat, lon: r.lon, kind: wdKind(r.classes || []), sl: r.sl || 0, flags, admin: r.admin || '', inc: (String(r.inc || '').match(/^-?\d{1,4}/) || [''])[0], classes: (r.classes || []).join('|'), designations: (r.designations || []).join('|'), whs: r.whs || '', osm: '', notable: 1, programme: '', status: '', tier: '' };
    sites.push(s); byQid.set(r.qid, s); stats.wikidata++;
  }
}

// grid for proximity matching (cells of 0.01 degree, ~1.1 km)
const CELL = 0.01;
const cellKey = (lat, lon) => Math.floor(lat / CELL) + ':' + Math.floor(lon / CELL);
const grid = new Map();
const addGrid = (s) => { const k = cellKey(s.lat, s.lon); (grid.get(k) || grid.set(k, []).get(k)).push(s); };
for (const s of sites) addGrid(s);
const near = (lat, lon) => { const out = []; const a = Math.floor(lat / CELL), b = Math.floor(lon / CELL); for (let i = -1; i <= 1; i++) for (let j = -1; j <= 1; j++) { const g = grid.get((a + i) + ':' + (b + j)); if (g) out.push(...g); } return out; };

const seenOsm = new Set();
const osmSites = [];
for (const f of listGz(path.join(RAW, 'osm'))) {
  const cc = f.split('-')[0];
  stats.files.osm++;
  for (const e of readGz(path.join(RAW, 'osm', f))) {
    const key = e.t + e.id;
    if (seenOsm.has(key)) { stats.osmDupIds++; continue; } // the same object can match two groups (castle + ruin)
    seenOsm.add(key);
    const tg = e.tags || {};
    const qid = /^Q\d+$/.test(tg.wikidata || '') ? tg.wikidata : '';
    const name = tg['name:en'] || tg.name || '';
    const s = { id: 'osm:' + key, qid, name, native: tg.name && tg.name !== name ? tg.name : '', cc, lat: e.lat, lon: e.lon, kind: osmKind(tg), sl: 0, flags: F.OSM | (tg.heritage || tg['ref:whc'] ? F.HERITAGE : 0), admin: '', inc: (tg.start_date || '').slice(0, 5), classes: [tg.historic, tg.castle_type, tg.ruins, tg.fortification_type].filter(Boolean).join('|'), designations: '', whs: tg['ref:whc'] || '', osm: key, notable: 0, programme: '', status: '', tier: '' };
    stats.osm++;
    // 1) matched by its own wikidata tag
    const w = qid && byQid.get(qid);
    if (w) { w.osm = w.osm ? w.osm + ' ' + key : key; w.flags |= F.OSM; stats.osmToWd.byQid++; continue; }
    // 2) matched by proximity and a shared name token (or no name on either side within 40 m)
    let hit = null, hd = 1e9;
    const st = tokens(name).concat(tokens(s.native));
    for (const c of near(s.lat, s.lon)) {
      if (!c.notable) continue;
      const d = hav(s.lat, s.lon, c.lat, c.lon);
      if (d > 300) continue;
      const ct = new Set(tokens(c.name).concat(tokens(c.native)));
      const share = st.some((t) => ct.has(t));
      const ok = share || (d < 40 && (!st.length || !ct.size));
      if (ok && d < hd) { hit = c; hd = d; }
    }
    if (hit) { hit.osm = hit.osm ? hit.osm + ' ' + key : key; hit.flags |= F.OSM; stats.osmToWd.byProximity++; continue; }
    if (qid) { s.qid = qid; } // Wikidata item that the notability filter did not include: still carries its id
    osmSites.push(s);
  }
}

// OSM-vs-OSM: a node and a way for one castle. Keep the way/relation (richer), drop a same-named node within 150 m.
{
  const g = new Map();
  const key = (s) => Math.floor(s.lat / CELL) + ':' + Math.floor(s.lon / CELL);
  const pri = (s) => ({ r: 3, w: 2, n: 1 })[s.osm[0]] || 0;
  osmSites.sort((a, b) => pri(b) - pri(a) || (a.osm < b.osm ? -1 : 1));
  const kept = [];
  for (const s of osmSites) {
    const a = Math.floor(s.lat / CELL), b = Math.floor(s.lon / CELL);
    let dup = null;
    const st = tokens(s.name);
    if (st.length) for (let i = -1; i <= 1 && !dup; i++) for (let j = -1; j <= 1 && !dup; j++) for (const k of g.get((a + i) + ':' + (b + j)) || []) {
      if (hav(s.lat, s.lon, k.lat, k.lon) < 150 && tokens(k.name).some((t) => st.includes(t))) { dup = k; break; }
    }
    if (dup) { dup.osm += ' ' + s.osm; if (!dup.qid && s.qid) dup.qid = s.qid; stats.osmOsmMerged++; continue; }
    kept.push(s); (g.get(key(s)) || g.set(key(s), []).get(key(s))).push(s);
  }
  for (const s of kept) sites.push(s); // (a spread of 100k+ arguments overflows the stack)
}

// ---- enrichment: OSM-only markers whose wikidata tag is known to Wikidata with a sitelink, heritage designation or World Heritage id
{
  const E = new Map();
  for (const f of listGz(path.join(RAW, 'enrich'))) for (const r of readGz(path.join(RAW, 'enrich', f))) E.set(r.qid, r);
  let up = 0;
  for (const s of sites) {
    if (s.notable || !s.qid) continue;
    const r = E.get(s.qid); if (!r) continue;
    if (!(r.sl > 0 || r.designations?.length || r.whs)) continue;
    // keep the object's own English OSM name (s.native is set only when name:en differed from name): mappers sometimes tag the
    // wikidata of the town around a site (Kaymakli's underground city carries the town's item); otherwise use the Wikidata label
    s.notable = 1; s.sl = r.sl || 0;
    if (!(s.native && s.name)) { const own = s.name; s.name = (r.name && !/^Q\d+$/.test(r.name)) ? r.name : s.name; s.native = r.native || (own !== s.name ? own : '') || s.native; }
    s.admin = r.admin || ''; s.inc = (String(r.inc || '').match(/^-?\d{1,4}/) || [s.inc])[0] || ''; s.designations = (r.designations || []).join('|'); s.whs = r.whs || s.whs;
    s.classes = [s.classes, ...(r.classes || [])].filter(Boolean).join('|');
    s.flags = (s.flags & ~F.OSM) | F.OSM | (r.whs ? F.WHS : 0) | (r.designations?.length ? F.HERITAGE : 0) | (r.sl > 0 ? F.WIKIPEDIA : 0);
    byQid.set(s.qid, s); up++;
  }
  stats.enriched = { loaded: E.size, promoted: up };
}
// optional: write the qids the enrichment pass should look up (OSM markers with a wikidata tag we do not already hold as notable)
if (arg('write-qids', '')) {
  const qs = [...new Set(sites.filter((s) => !s.notable && s.qid).map((s) => s.qid))].sort((a, b) => +a.slice(1) - +b.slice(1));
  fs.writeFileSync(path.resolve(ROOT, arg('write-qids', '')), qs.join('\n') + '\n');
  console.log(`wrote ${qs.length} qids to look up`);
}

// ---- link to the existing fort programme by qid, then by id
function readCsv(p) {
  if (!fs.existsSync(p)) return [];
  const t = fs.readFileSync(p, 'utf8'); const rows = []; let row = [], f = '', q = false;
  for (let i = 0; i < t.length; i++) { const c = t[i]; if (q) { if (c === '"') { if (t[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += c; } else if (c === '"') q = true; else if (c === ',') { row.push(f); f = ''; } else if (c === '\n') { row.push(f); rows.push(row); row = []; f = ''; } else if (c !== '\r') f += c; }
  if (f || row.length) { row.push(f); rows.push(row); }
  const h = rows.shift(); return rows.filter((r) => r.length === h.length).map((r) => Object.fromEntries(h.map((k, i) => [k, r[i]])));
}
const progSites = readCsv(path.join(ROOT, 'data/sites.csv')).filter((r) => !r.duplicate_of);
const ledger = new Map(readCsv(path.join(ROOT, 'docs/fort-fidelity/ledger.csv')).map((r) => [r.site_id, r]));
const byId = new Map(sites.map((s) => [s.id, s]));
const progQids = new Map();
for (const p of progSites) for (const m of (p.sources || '').matchAll(/wikidata:(Q\d+)/g)) if (!progQids.has(m[1])) progQids.set(m[1], p);
let linked = 0;
for (const [q, p] of progQids) {
  const s = byQid.get(q) || sites.find((x) => x.qid === q && !x.notable);
  if (!s) continue;
  s.programme = p.id; s.flags |= F.PROGRAMME; linked++;
  const L = ledger.get(p.id); if (L) { s.status = L.status || ''; s.tier = L.tier_reached || ''; }
}
stats.programmeLinked = linked; stats.programmeSites = progSites.length;

// ---- among ruins, keep fortifications only. OSM's ruin group takes every named historic=ruins object, which brings in ruined
// churches, mills and farmsteads (and their Wikidata records through the enrichment). A ruin stays when its ruins tag, name or
// classes say fortification in one of the languages below, or when the programme holds it; the rest go to dropped-ruins.csv.gz.
const FORTISH = new RegExp([
  'castle', 'fort', 'citadel', 'tower', '\\bwalls?\\b', '\\bkeep\\b', 'motte', 'bailey', 'redoubt', 'bastion', 'battery', 'bunker', 'blockhouse', 'stronghold', 'rampart', 'palisade', 'stockade', 'gatehouse', '\\bgate\\b', 'hillfort', 'ringfort', 'broch', '\\bd[uú]n\\b', '\\brath\\b', 'caher', 'cathair', 'oppidum', 'kreml', 'krepost',
  'burg', 'schlo(ss|ß)', 'festung', 'schanze', 'turm', 'mauer', '\\bveste\\b', '\\bwarte\\b', 'bergfried', 'ringwall', 'wallburg',
  'ch[aâ]teau', 'forteresse', 'citadelle', '\\btour\\b', 'donjon', 'rempart', 'enceinte', 'castrum', 'castellum',
  'castill', 'castell', 'castelo', 'castello', 'castro', 'fortaleza', 'fortezza', 'rocca', 'torre', 'muralla', 'muralha', '\\bmura\\b', 'atalaya', 'alcazaba', 'alc[aá]zar', 'presidio', 'baluarte', 'bastione',
  'zamek', 'z[aá]mek', '\\bhrad', 'hradisk', 'hradi[sš]t', 'gr[oó]d', 'gradina', '\\bgrad\\b', 'tvr[dđ]', 'utvrd', '\\bkula\\b',
  '\\bv[aá]r\\b', 'v[aá]rrom', 'er[oő]d', 'torony',
  '\\bkale', 'hisar', 'qal', 'kalaa', 'ksar', 'qasr', 'kasbah', 'qasba', 'ribat', '\\bburj', '\\bbor?dj', '\\bhisn', '\\bdezh', '\\barg\\b',
  '\\bborg\\b', 'slott', 'skans', 'f[aä]stning', 'festning', 'voldsted', 'kasteel', 'burcht', 'vesting', 'schans', 'toren',
  'kastro', 'frouri', 'pyrgos', 'qila', 'quila', 'killa', '\\bkila\\b', 'garh', '\\bgad\\b', 'durg', '\\bkot\\b', 'cetat', 'kala(ja|si)', 'k[eë]shtjell',
  'casemate', 'kasemat', 'tobruk', 'pillbox', 'bunkier', 'schron', 'stellung', '\\bflak', 'maginot', 'westwall', 'pā', 'cit[aâ]nia', 'cividade', 'kastel', 'tvrz', 'gradi[sš]t', 'gorodishch', '\\blimes\\b', 'bater[ií]a', 'reduta', 'wie[zż]a', '\\bporta\\b',
  '城', '堡', '寨', '砦', '塞', '성', '要塞', 'крепост', 'замок', 'кремль', 'городище', 'фортеця', 'форт', 'бастион', 'башн', 'укрепл', 'бункер', '\\bдот\\b', 'قلعة', 'قصر', 'برج', 'حصن', 'قلعه', 'מבצר', 'κάστρο', 'φρούριο', 'किला', 'क़िला', 'गढ़',
].join('|'), 'i');
// a ruin the programme holds stays only when that programme row is a fort: the gazetteer also lists temples, tombs and caves for the game
const NONFORT = /\((temple|tomb|palace|stepwell|monastery-university|other-heritage|archaeological-site|ancient-city|port)\)/;
const progFort = (id) => !NONFORT.test(ledger.get(id)?.current_scene_kind || '');
{
  let j = 0; const dropped = [];
  for (const s of sites) {
    const keep = s.kind !== KIND.ruin || (s.programme && progFort(s.programme)) || FORTISH.test(`${s.name} ${s.native} ${s.classes}`);
    if (keep) sites[j++] = s; else dropped.push(s);
  }
  sites.length = j; stats.droppedRuins = dropped.length;
  const e2 = (v) => { v = String(v ?? ''); return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; };
  fs.mkdirSync(OUT, { recursive: true });
  fs.writeFileSync(path.join(OUT, 'dropped-ruins.csv.gz'), zlib.gzipSync(['id,qid,name,cc,lat,lon,notable,classes'].concat(dropped.map((s) => [s.id, s.qid, s.name, s.cc, s.lat, s.lon, s.notable ? 1 : 0, s.classes].map(e2).join(','))).join('\n') + '\n'));
}

// ---- outputs
for (const s of sites) { stats.countries[s.cc] ||= { notable: 0, osm: 0 }; if (s.notable) stats.countries[s.cc].notable++; else stats.countries[s.cc].osm++; }
const kinds = {}; for (const s of sites) { const k = KIND_NAME[s.kind]; kinds[k] = (kinds[k] || 0) + 1; }
const r5 = (v) => Math.round(v * 1e5) / 1e5;
sites.sort((a, b) => b.sl - a.sl || (a.id < b.id ? -1 : 1));

fs.mkdirSync(OUT, { recursive: true }); fs.mkdirSync(path.join(WEB, 'tiles'), { recursive: true });
for (const f of fs.readdirSync(path.join(WEB, 'tiles'))) fs.unlinkSync(path.join(WEB, 'tiles', f));

const esc = (v) => { v = String(v ?? ''); return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; };
const cols = ['id', 'qid', 'name', 'native', 'cc', 'lat', 'lon', 'kind', 'sitelinks', 'flags', 'admin', 'inception', 'classes', 'designations', 'whc_id', 'osm', 'notable', 'programme_id', 'ledger_status', 'tier_reached'];
fs.writeFileSync(path.join(OUT, 'sites.csv.gz'), zlib.gzipSync([cols.join(',')].concat(sites.map((s) => [s.id, s.qid, s.name, s.native, s.cc, r5(s.lat), r5(s.lon), KIND_NAME[s.kind], s.sl, s.flags, s.admin, s.inc, s.classes, s.designations, s.whs, s.osm, s.notable, s.programme, s.status, s.tier].map(esc).join(','))).join('\n') + '\n'));

// search.json: notable sites only (plus unnamed-free), column oriented to keep it small
const notable = sites.filter((s) => s.notable);
const S = { v: 1, n: notable.length, id: [], name: [], native: [], cc: [], lat: [], lon: [], kind: [], sl: [], flags: [], admin: [], prog: [], status: [] };
for (const s of notable) { S.id.push(s.id); S.name.push(s.name); S.native.push(s.native); S.cc.push(s.cc); S.lat.push(r5(s.lat)); S.lon.push(r5(s.lon)); S.kind.push(s.kind); S.sl.push(s.sl); S.flags.push(s.flags); S.admin.push(s.admin); S.prog.push(s.programme); S.status.push(s.status); }
fs.writeFileSync(path.join(WEB, 'search.json'), JSON.stringify(S));

// named OSM markers can also be searched (separate, lazy-loaded file)
const osmNamed = sites.filter((s) => !s.notable && s.name);
const O = { v: 1, n: osmNamed.length, id: [], name: [], cc: [], lat: [], lon: [], kind: [] };
for (const s of osmNamed) { O.id.push(s.id); O.name.push(s.name); O.cc.push(s.cc); O.lat.push(r5(s.lat)); O.lon.push(r5(s.lon)); O.kind.push(s.kind); }
fs.writeFileSync(path.join(WEB, 'search-osm.json'), JSON.stringify(O));

// tiles: [id, lat, lon, kind, flags, name]
const tiles = new Map();
for (const s of sites) { const k = Math.floor(s.lat / TILE) * TILE + '_' + Math.floor(s.lon / TILE) * TILE; (tiles.get(k) || tiles.set(k, []).get(k)).push([s.id, r5(s.lat), r5(s.lon), s.kind, s.flags, s.name]); }
for (const [k, v] of tiles) fs.writeFileSync(path.join(WEB, 'tiles', k + '.json'), JSON.stringify(v));
fs.writeFileSync(path.join(WEB, 'tiles.json'), JSON.stringify({ tile: TILE, tiles: [...tiles.keys()].sort(), kinds: KIND_NAME, counts: { notable: notable.length, total: sites.length } }));

const summary = { built: new Date().toISOString(), total: sites.length, notable: notable.length, osmMarkers: sites.length - notable.length, osmNamed: osmNamed.length, kinds, ...stats, tiles: tiles.size };
fs.writeFileSync(path.join(OUT, 'summary.json'), JSON.stringify(summary, null, 1));
console.log(`world: ${summary.total} sites (${summary.notable} notable, ${summary.osmMarkers} osm markers), ${tiles.size} tiles; programme linked ${linked}/${progQids.size}`);
