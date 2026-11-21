// Builds the data bundle for the "Forts of the World" page: every site in the world table plus every programme site,
// lazy-loadable map cells, and a compact 3D model for every site that has a trace.
//   node tools/world/build-atlas.mjs <outDir> [--basemap <dir with world-atlas land-50m.json, land-110m.json, countries-50m.json>]
// Output (all relative to outDir): data/core.json, data/cells/<cell>.json (map-only markers), data/detail/<cell>.json,
//   data/models/m<k>.txt (model shards: gzipped JSON as base64 text, unpacked in the page), data/base.json (land + borders), data/meta.json (counts, sources, build date).
// Reads: data/world/sites.csv.gz, docs/fort-fidelity/ledger.csv, data/traces/*.trace.json. Writes nothing in the repo.
// Licences carried through: Wikidata CC0, OpenStreetMap ODbL (attribution shown on the page), Natural Earth public domain,
// Terrarium tiles (Mapzen/AWS Open Data, SRTM-derived). The bundle mixes CC0 and ODbL data and is labelled so.
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { createRequire } from 'node:module';
import { wrapKumbhalgarh, wrapJanjira, SCHEMA } from '../trace/schema.mjs';

const root = path.resolve(new URL('../..', import.meta.url).pathname);
const OUT = path.resolve(process.argv[2] || 'atlas-out');
const arg = (k, d) => { const i = process.argv.indexOf('--' + k); return i > 0 ? process.argv[i + 1] : d; };
const BASE = arg('basemap', path.join(root, 'node_modules/world-atlas'));   // world-atlas 2.0.2 (Natural Earth, public domain), a devDependency
const TOPO = arg('topojson', '/tmp/gt/na/topojson-client-3.1.0/package');
const mk = (p) => fs.mkdirSync(p, { recursive: true });
for (const d of ['data/cells', 'data/models']) { fs.rmSync(path.join(OUT, d), { recursive: true, force: true }); mk(path.join(OUT, d)); }
mk(path.join(OUT, 'data')); for (const f of fs.readdirSync(path.join(OUT, 'data'))) if (/^(core(-\d+)?|base|base10)\.(json|txt)$/.test(f)) fs.rmSync(path.join(OUT, 'data', f));
// every data file except meta.json is stored as base64 of gzipped JSON (.txt): the page unpacks it; this keeps the bundle inside one artifact version
const pack = (rel, obj) => fs.writeFileSync(path.join(OUT, rel), zlib.gzipSync(typeof obj === 'string' ? obj : JSON.stringify(obj), { level: 9 }).toString('base64'));

const parseCsv = (t) => { const rows = []; let row = [], f = '', q = false; for (let i = 0; i < t.length; i++) { const c = t[i]; if (q) { if (c === '"') { if (t[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += c; } else if (c === '"') q = true; else if (c === ',') { row.push(f); f = ''; } else if (c === '\n') { row.push(f); rows.push(row); row = []; f = ''; } else if (c !== '\r') f += c; } if (f || row.length) { row.push(f); rows.push(row); } return rows; };
const objs = (rows) => { const h = rows[0]; return rows.slice(1).filter((r) => r.length === h.length).map((r) => Object.fromEntries(h.map((k, i) => [k, r[i]]))); };

// ---------------------------------------------------------------- sources
const W = objs(parseCsv(zlib.gunzipSync(fs.readFileSync(path.join(root, 'data/world/sites.csv.gz'))).toString('utf8')));
const L = objs(parseCsv(fs.readFileSync(path.join(root, 'docs/fort-fidelity/ledger.csv'), 'utf8')));
const TRDIR = path.join(root, 'data/traces');
const traceIds = fs.readdirSync(TRDIR).filter((f) => f.endsWith('.trace.json')).map((f) => f.slice(0, -11));
const KIND = { castle: 1, fort: 2, ruin: 3, fortification: 4 };
const ISO = {}; { const dn = new Intl.DisplayNames(['en'], { type: 'region' }); for (let a = 65; a <= 90; a++) for (let b = 65; b <= 90; b++) { const cc = String.fromCharCode(a, b); try { const n = dn.of(cc); if (n && n !== cc) ISO[n.toLowerCase()] = cc; } catch {} } }
Object.assign(ISO, { 'india': 'IN', 'pakistan': 'PK', 'bangladesh': 'BD', 'sri lanka': 'LK', 'nepal': 'NP', 'myanmar': 'MM', 'burma': 'MM', 'afghanistan': 'AF', 'bhutan': 'BT', 'maldives': 'MV', 'iran': 'IR', 'oman': 'OM', 'united arab emirates': 'AE', 'turkey': 'TR', 'türkiye': 'TR', 'czech republic': 'CZ', 'czechia': 'CZ', 'russia': 'RU', 'south korea': 'KR', 'north korea': 'KP', 'vietnam': 'VN', 'laos': 'LA', 'syria': 'SY', 'tanzania': 'TZ', 'bolivia': 'BO', 'venezuela': 'VE', 'moldova': 'MD', 'palestine': 'PS', 'macau': 'MO', 'hong kong': 'HK', 'taiwan': 'TW', 'brunei': 'BN', 'cape verde': 'CV', 'ivory coast': 'CI', "côte d’ivoire": 'CI', 'congo - kinshasa': 'CD', 'congo - brazzaville': 'CG' });
const ccOf = (country) => ISO[(country || '').toLowerCase().trim()] || '';

// ---------------------------------------------------------------- one point list
// flags: 1 World Heritage, 2 heritage designation, 4 OSM-only, 8 programme (ledger) site, 16 has Wikipedia sitelink, 32 has 3D model
const P = []; const byQ = new Map(), byProg = new Map();
for (const r of W) {
  const p = { id: r.id, qid: r.qid, name: r.name || '', native: r.native || '', cc: r.cc, lat: +r.lat, lon: +r.lon, kind: KIND[r.kind] || 4, sl: +r.sitelinks || 0, flags: (+r.flags || 0) & ~32,
    admin: r.admin || '', inc: r.inception || '', classes: r.classes || '', des: r.designations || '', whc: r.whc_id || '', osm: r.osm || '', notable: r.notable === '1', prog: '', status: '', tier: '' };
  if (!isFinite(p.lat) || !isFinite(p.lon)) continue;
  P.push(p); if (p.qid) byQ.set(p.qid.toUpperCase(), p);
  // a programme row can cite several Wikidata items (Amer cites Amber Fort and the rampart of the old town): it stands for the best-known one
  if (r.programme_id) { const o = byProg.get(r.programme_id); if (!o || p.sl > o.sl) byProg.set(r.programme_id, p); }
}
let addedProg = 0, skippedNonFort = 0;
const NONFORT = /\((temple|tomb|palace|stepwell|monastery-university|other-heritage|archaeological-site|ancient-city|port)\)/;
// a programme row with no Wikidata id is the same place as a world row within 2 km whose name shares its main word
const STOP = new Set(['fort', 'fortress', 'castle', 'qila', 'killa', 'kila', 'garh', 'durg', 'durga', 'the', 'of', 'old', 'new', 'palace', 'ruins', 'gadh', 'kot']);
const words = (s) => (s || '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length > 2 && !STOP.has(w));
const grid = new Map(); const gk = (la, lo) => `${Math.round(la * 20)}_${Math.round(lo * 20)}`;
for (const p of P) { const k2 = gk(p.lat, p.lon); if (!grid.has(k2)) grid.set(k2, []); grid.get(k2).push(p); }
const used = new Set();
const byOsm = new Map(); for (const p of P) for (const o of [p.id.startsWith('osm:') ? p.id.slice(4) : '', ...p.osm.split(/\s+/)]) if (/^[nwr]\d+$/.test(o) && !byOsm.has(o)) byOsm.set(o, p); // OSM ids, own or merged into a Wikidata row
function nearSame(name, lat, lon) {
  const w = new Set(words((name || '').split(',')[0])); if (!w.size) return null; let best = null, bd = 2000;
  for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) for (const p of grid.get(`${Math.round(lat * 20) + a}_${Math.round(lon * 20) + b}`) || []) {
    if (p.prog || used.has(p)) continue; const d = Math.hypot((p.lat - lat) * 111320, (p.lon - lon) * 111320 * Math.cos(lat * Math.PI / 180));
    if (d < bd && words(p.name).some((x) => w.has(x) || [...w].some((y) => (y.length > 4 && x.startsWith(y)) || (x.length > 4 && y.startsWith(x))))) { bd = d; best = p; }
  }
  if (best) used.add(best); return best;
}
for (const r of L) {
  const lat = +r.lat, lon = +r.lon; if (!r.lat || !isFinite(lat) || !isFinite(lon) || r.status === 'excluded') continue; // excluded: not a fortification (see the row's note)
  // match order: the world row already linked to this programme id, the Wikidata id in the slug, the OSM id in the slug, and
  // only for the original programme rows (batch < 5000, ids without either) a same-name point within 2 km. World rows added
  // by world-to-ledger carry their id in the slug or are hand rows that must stand alone (Matmata village vs Bordj Matmata).
  const m = /-(q\d+)$/i.exec(r.site_id), mo = /-([nwr]\d+)$/.exec(r.site_id);
  let p = byProg.get(r.site_id) || (m && byQ.get(m[1].toUpperCase())) || (mo && byOsm.get(mo[1])) || (!m && !mo && +r.batch < 5000 ? nearSame(r.name, lat, lon) : null);
  // the programme gazetteer also lists temples, tombs, palaces, stepwells and monasteries for the game; one that no world row
  // (a Wikidata or OSM fortification) stands for is not a fort, so it stays out of this map
  if (!p && NONFORT.test(r.current_scene_kind || '')) { skippedNonFort++; continue; }
  if (!p) {
    const note = r.notes || r.note || '';
    const ty = /type=(castle|fort|ruin|fortification)/.exec(note);
    p = { id: 'prog:' + r.site_id, qid: m ? m[1].toUpperCase() : '', name: (r.name || '').split(',')[0], native: '', cc: ccOf(r.country), lat, lon, kind: ty ? KIND[ty[1]] : +r.batch < 5000 ? 2 : 4, // programme gazetteer rows are forts; a hand row of another type (Matmata village) is a fortification-type site sl: 0, flags: 0,
      admin: r.region || '', inc: '', classes: '', des: '', whc: '', osm: '', notable: true };
    P.push(p); addedProg++;
  }
  p.prog = r.site_id; p.status = r.status || ''; p.tier = r.tier_reached || ''; p.flags |= 8; p.flags &= ~4;
  byProg.set(r.site_id, p);
}

// ---------------------------------------------------------------- compact 3D models
const KC = { outline: 1, wall: 2, building: 3, road: 4, waterway: 5, water: 6, zone: 7, marker: 8, 'retaining-wall': 9, coastline: 10, cliff: 11, pit: 12 };
function dp(pts, tol) { // Douglas-Peucker on [[x,y],...]
  if (pts.length < 3) return pts;
  const keep = new Uint8Array(pts.length); keep[0] = keep[pts.length - 1] = 1; const st = [[0, pts.length - 1]];
  while (st.length) { const [a, b] = st.pop(); let md = 0, mi = -1; const [ax, ay] = pts[a], [bx, by] = pts[b], dx = bx - ax, dy = by - ay, L2 = dx * dx + dy * dy || 1e-9;
    for (let i = a + 1; i < b; i++) { const [px, py] = pts[i]; const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / L2)); const ex = ax + t * dx - px, ey = ay + t * dy - py; const d = ex * ex + ey * ey; if (d > md) { md = d; mi = i; } }
    if (md > tol * tol) { keep[mi] = 1; st.push([a, mi], [mi, b]); } }
  return pts.filter((_, i) => keep[i]);
}
const flat = (pts) => { const o = []; let px = 0, py = 0; for (const [x, y] of pts) { const X = Math.round(x), Y = Math.round(y); o.push(X - px, Y - py); px = X; py = Y; } return o; };
const len = (P2) => { let s = 0; for (let i = 1; i < P2.length; i++) s += Math.hypot(P2[i][0] - P2[i - 1][0], P2[i][1] - P2[i - 1][1]); return s; };
// elements as one zigzag-varint stream (base64): per element kind, flags, height (dm), point count, then x,y deltas in whole metres
function encodeEls(list) {
  const out = []; const put = (v) => { let u = ((v << 1) ^ (v >> 31)) >>> 0; while (u >= 0x80) { out.push((u & 0x7f) | 0x80); u >>>= 7; } out.push(u); };
  for (const [k, f, hm, pts] of list) { put(k); put(f); put(hm); put(pts.length); let px = 0, py = 0; for (const [x, y] of pts) { const X = Math.round(x), Y = Math.round(y); put(X - px); put(Y - py); px = X; py = Y; } }
  return Buffer.from(out).toString('base64');
}
const SRC = new Map(); const srcKey = (s) => { const k = [s.title, s.licence, (s.url || '').replace(/#map=.*/, '')].join('|'); if (!SRC.has(k)) SRC.set(k, SRC.size); return SRC.get(k); };
function model(T) {
  const H = T.heights; let g = null;
  if (H && H.data) {
    const buf = Buffer.from(H.data, 'base64'), h = new Float32Array(H.nx * H.ny);
    for (let q = 0; q < h.length; q++) { const v = buf.readInt16LE(q * 2); h[q] = v === -32768 ? NaN : v / 20; }
    const f = Math.max(1, Math.ceil((Math.max(H.nx, H.ny) - 1) / 32)), nx = Math.floor((H.nx - 1) / f) + 1, ny = Math.floor((H.ny - 1) / f) + 1;
    let lo = Infinity, hi = -Infinity; const s = new Float32Array(nx * ny);
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) { const v = h[(j * f) * H.nx + i * f]; s[j * nx + i] = v; if (v === v) { lo = Math.min(lo, v); hi = Math.max(hi, v); } }
    if (lo <= hi) {
      const step = Math.max(0.25, (hi - lo) / 254), u = Buffer.alloc(nx * ny);
      for (let q = 0; q < u.length; q++) u[q] = s[q] === s[q] ? Math.round((s[q] - lo) / step) : 255;
      g = { nx, ny, x0: H.x0, y0: H.y0, s: H.stride * f, lo: Math.round(lo * 10) / 10, st: Math.round(step * 1000) / 1000, d: u.toString('base64') };
    }
  }
  const els = T.elements || [];
  const ol = els.find((e) => e.kind === 'outline'); const c = ol ? ol.poly.reduce((a, p) => [a[0] + p[0] / ol.poly.length, a[1] + p[1] / ol.poly.length], [0, 0]) : [0, 0];
  const dist = (e) => { const P2 = e.poly || e.path || [e.at || [0, 0]]; const q = P2[0]; return Math.hypot(q[0] - c[0], q[1] - c[1]); };
  const bl = els.filter((e) => e.kind === 'building').sort((a, b) => dist(a) - dist(b)).slice(0, 180);
  const rd = els.filter((e) => e.kind === 'road').sort((a, b) => len(b.path) - len(a.path)).slice(0, 80);
  const ww = els.filter((e) => e.kind === 'waterway').sort((a, b) => len(b.path) - len(a.path)).slice(0, 40);
  const keep = new Set([...bl, ...rd, ...ww]);
  const e = [];
  for (const x of els) {
    if ((x.kind === 'building' || x.kind === 'road' || x.kind === 'waterway') && !keep.has(x)) continue;
    const k = KC[x.kind] || 0;
    if (x.at) { e.push([k, x.ev === 'documented' ? 2 : 0, 0, [[x.at[0], x.at[1]]]]); continue; }
    const pts = x.poly || x.path; if (!pts || pts.length < 2) continue;
    const isPoly = !!x.poly || !!x.closed; const sp = dp(pts, { building: 0.8, pit: 0.4, road: 2, waterway: 3 }[x.kind] ?? 1.2);
    e.push([k, (isPoly ? 1 : 0) | (x.ev === 'documented' || /^plan:/.test(x.src || '') ? 2 : 0), x.h ? Math.round(x.h * 10) : 0, sp]);
  }
  const ev = T.evidence || {};
  const s = T.site || {}; const site = {}; for (const k of ['historic', 'castle_type', 'fortification_type', 'heritage', 'ruins', 'description', 'website', 'wikidata']) if (s[k]) site[k] = s[k];
  return { n: T.name, ty: T.type, t: T.tier, st: T.status, o: [T.origin?.lat ?? T.coords?.lat, T.origin?.lon ?? T.coords?.lon], ev: [ev.documented || 0, ev.mapped || 0, ev.inferred || 0, ev.derived || 0],
    src: (T.sources || []).map((x) => [srcKey(x), (x.fetched || '').slice(0, 10)]), site, notes: (T.generated?.report?.notes || []).slice(0, 6), g, ek: encodeEls(e), nEl: els.length };
}

// spatial order (Morton over lat/lon) so a shard holds neighbours; shards up to ~2 MB of JSON, stored as base64 of gzip (~75% of the JSON) so 60k+ models fit one artifact version
const morton = (lat, lon) => { let x = Math.floor((lon + 180) / 360 * 65535), y = Math.floor((lat + 90) / 180 * 65535), m = 0n; for (let i = 15; i >= 0; i--) m = (m << 2n) | (BigInt((y >> i) & 1) << 1n) | BigInt((x >> i) & 1); return m; };
const withTrace = []; let totalModelBytes = 0, nLocOnly = 0; // location-only: OSM maps the site as a point, so the model is terrain and surroundings
// model JSON goes to a scratch file as it is made (80k models do not fit in memory beside the world table); shards read it back
const SCR = path.join(OUT, 'models.scratch'), scr = fs.openSync(SCR, 'w'); let scrPos = 0;
const memLog = (s) => console.log(`  [${s}] rss ${(process.memoryUsage().rss / 1e6).toFixed(0)} MB, heap ${(process.memoryUsage().heapUsed / 1e6).toFixed(0)} MB`);
memLog('before models');
const progMap = new Map(P.filter((p) => p.prog).map((p) => [p.prog, p]));
// hand-curated traces (T2 plan work) win over the automatic trace of the same site
const LV = path.join(root, 'src/levels'); const HAND = new Map();
for (const f of fs.readdirSync(LV).filter((f) => f.endsWith('.trace.js'))) { try { const M = await import(path.join(LV, f)); if (M.TRACE?.schema === SCHEMA) HAND.set(M.TRACE.id, M.TRACE); } catch (e) { console.error('hand trace', f, e.message); } }
try { HAND.set('kumbhalgarh', wrapKumbhalgarh(await import(path.join(LV, 'kumbhalgarh.trace.js')))); } catch (e) { console.error('kumbhalgarh', e.message); }
try { const J = wrapJanjira((await import(path.join(LV, 'janjira.trace.js'))).TRACE); HAND.set(J.id || 'murud-janjira', J); } catch (e) { console.error('janjira', e.message); }
const EXCLUDED = new Set(L.filter((r) => r.status === 'excluded').map((r) => r.site_id)); // their traces stay in the repo but are not shown
const allIds = [...new Set([...traceIds, ...HAND.keys()])].filter((id) => !EXCLUDED.has(id));
for (const id of allIds) {
  let T = HAND.get(id); if (!T) { try { T = JSON.parse(fs.readFileSync(path.join(TRDIR, id + '.trace.json'), 'utf8')); } catch { continue; } }
  if (HAND.has(id) && !T.heights && fs.existsSync(path.join(TRDIR, id + '.trace.json'))) { try { T = { ...T, heights: JSON.parse(fs.readFileSync(path.join(TRDIR, id + '.trace.json'), 'utf8')).heights }; } catch {} }
  let p = progMap.get(id);
  if (!p) { const lat = T.origin?.lat ?? T.coords?.lat, lon = T.origin?.lon ?? T.coords?.lon; if (!isFinite(lat)) continue; p = { id: 'prog:' + id, qid: '', name: T.name || id, native: '', cc: ccOf(T.country), lat, lon, kind: 2, sl: 0, flags: 8, admin: T.region || '', inc: '', classes: '', des: '', whc: '', osm: '', notable: true, prog: id, status: '', tier: T.tier }; P.push(p); progMap.set(id, p); }
  const M = model(T); M.id = id;
  // say what the surface model cannot show: an underground city's tunnels and rooms are not in OpenStreetMap
  if (/underground city/i.test(p.classes) && !M.notes.some((n) => /underground/i.test(n))) M.notes = ['Underground city: its tunnels and rooms are not mapped in OpenStreetMap, so this model shows only the ground and buildings above them.', ...M.notes].slice(0, 6);
  const buf = Buffer.from(JSON.stringify(M)); totalModelBytes += buf.length; fs.writeSync(scr, buf, 0, buf.length, scrPos);
  withTrace.push({ p, at: scrPos, n: buf.length, mo: morton(p.lat, p.lon) }); scrPos += buf.length; p.flags |= 32; if (T.status === 'location-only') nLocOnly++;
}
fs.closeSync(scr); memLog('models made');
const rd = fs.openSync(SCR, 'r'); const jsOf = (x) => { const b = Buffer.allocUnsafe(x.n); fs.readSync(rd, b, 0, x.n, x.at); return b.toString('utf8'); };
withTrace.sort((a, b) => (a.mo < b.mo ? -1 : a.mo > b.mo ? 1 : 0));
let shard = [], shardBytes = 0, k = 0, packedBytes = 0;
const flush = () => { if (!shard.length) return; const z = zlib.gzipSync('{' + shard.map((x) => JSON.stringify(x.p.prog) + ':' + jsOf(x)).join(',') + '}', { level: 9 }); const t = z.toString('base64'); packedBytes += t.length; fs.writeFileSync(path.join(OUT, `data/models/m${k}.txt`), t); for (const x of shard) x.p.shard = k; k++; shard = []; shardBytes = 0; };
for (const x of withTrace) { if (shardBytes + x.n > 2e6) flush(); shard.push(x); shardBytes += x.n; }
flush(); fs.closeSync(rd); fs.rmSync(SCR, { force: true }); memLog('shards written');

// ---------------------------------------------------------------- core list (always loaded) and map-only cells
const CELL = 30; const cellOf = (p) => `${Math.floor(p.lat / CELL) * CELL}_${Math.floor(p.lon / CELL) * CELL}`;
const core = P.filter((p) => p.notable || (p.flags & (8 | 32)));
const mapOnly = P.filter((p) => !(p.notable || (p.flags & (8 | 32))));
core.sort((a, b) => ((b.flags & 32) - (a.flags & 32)) || ((b.flags & 1) - (a.flags & 1)) || b.sl - a.sl);
const col = (arr, f) => arr.map(f);
const rnd = (v) => Math.round(v * 1e5) / 1e5;
// the core list ships in parts, most notable first: the page draws the first part at once and streams the rest
const CORE_PART = 12000; let coreParts = 0;
for (let i0 = 0; i0 < core.length; i0 += CORE_PART) {
  const part = core.slice(i0, i0 + CORE_PART);
  const coreJ = { v: 1, n: part.length, id: col(part, (p) => p.prog || p.id), name: col(part, (p) => p.name), native: col(part, (p) => p.native === p.name ? '' : p.native), cc: col(part, (p) => p.cc), lat: col(part, (p) => rnd(p.lat)), lon: col(part, (p) => rnd(p.lon)), kind: col(part, (p) => p.kind), sl: col(part, (p) => p.sl), flags: col(part, (p) => p.flags), admin: col(part, (p) => p.admin), shard: col(part, (p) => p.shard ?? -1) };
  pack(`data/core-${coreParts++}.txt`, coreJ);
}
// details for every point, by cell, loaded when a site is opened
const det = new Map();
for (const p of P) { const c = cellOf(p); if (!det.has(c)) det.set(c, {}); det.get(c)[p.prog || p.id] = [p.qid, p.inc, p.classes, p.des, p.whc, p.osm, p.status, p.tier]; }
// map-only markers: one file per 15-degree cell, loaded as the map zooms in
const cells = new Map(); for (const p of mapOnly) { const c = cellOf(p); if (!cells.has(c)) cells.set(c, []); cells.get(c).push(p); }
const cellIndex = {};
for (const [c, arr] of cells) { cellIndex[c] = arr.length; pack(`data/cells/${c}.txt`, ({ m: { id: col(arr, (p) => p.id), name: col(arr, (p) => p.name), cc: col(arr, (p) => p.cc), lat: col(arr, (p) => rnd(p.lat)), lon: col(arr, (p) => rnd(p.lon)), kind: col(arr, (p) => p.kind), flags: col(arr, (p) => p.flags) } })); }
// record details of every site, in DET buckets by a hash of the site id (the page computes the same hash): small files, one fetch per opened site
const DET = 48; const fnv = (s) => { let h = 0x811c9dc5; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return h; };
const buckets = Array.from({ length: DET }, () => ({}));
for (const o of det.values()) for (const [id, v] of Object.entries(o)) buckets[fnv(id) % DET][id] = v;
fs.rmSync(path.join(OUT, 'data/det'), { recursive: true, force: true }); mk(path.join(OUT, 'data/det'));
buckets.forEach((b, i) => pack(`data/det/${i}.txt`, b));

// ---------------------------------------------------------------- basemap (Natural Earth via world-atlas, public domain)
const require = createRequire(import.meta.url); const topo = require(path.join(TOPO, 'dist/topojson-client.js'));
const q2 = (v) => Math.round(v * 100) / 100;
// unwrap rings across the antimeridian (no 360-degree jumps), then shift each ring so its middle lies within -180..180:
// the page draws world copies only where the screen is, so a ring parked a full turn away would never be drawn
const unwrap = (ring) => { const o = []; let off = 0, prev = null; for (const [x, y] of ring) { if (prev !== null) { if (x + off - prev > 180) off -= 360; else if (x + off - prev < -180) off += 360; } prev = x + off; o.push([prev, y]); }
  let mn = Infinity, mx = -Infinity; for (const [x] of o) { mn = Math.min(mn, x); mx = Math.max(mx, x); } const mid = (mn + mx) / 2, sh = mid > 180 ? -360 * Math.ceil((mid - 180) / 360) : mid < -180 ? 360 * Math.ceil((-180 - mid) / 360) : 0;
  return sh ? o.map(([x, y]) => [x + sh, y]) : o; };
const rings = (geo, q = q2) => { const out = []; const add = (poly) => { for (const ring of poly) out.push(unwrap(ring).map(([x, y]) => [q(x), q(y)]).flat()); }; for (const f of (geo.features || [geo])) { const g = f.geometry || f; if (g.type === 'Polygon') add(g.coordinates); else if (g.type === 'MultiPolygon') for (const pl of g.coordinates) add(pl); } return out; };
const lines = (geo) => (geo.type === 'MultiLineString' ? geo.coordinates : [geo.coordinates]).map((l) => unwrap(l).map(([x, y]) => [q2(x), q2(y)]).flat());
const l50 = JSON.parse(fs.readFileSync(path.join(BASE, 'land-50m.json'))), l110 = JSON.parse(fs.readFileSync(path.join(BASE, 'land-110m.json'))), c50 = JSON.parse(fs.readFileSync(path.join(BASE, 'countries-50m.json')));
const base = { land110: rings(topo.feature(l110, l110.objects.land)), land50: rings(topo.feature(l50, l50.objects.land)), borders50: lines(topo.mesh(c50, c50.objects.countries, (a, b) => a !== b)) };
pack('data/base.txt', base);
const l10 = JSON.parse(fs.readFileSync(path.join(BASE, 'land-10m.json'))); const q3 = (v) => Math.round(v * 1000) / 1000;
pack('data/base10.txt', { land10: rings(topo.feature(l10, l10.objects.land), q3) });

// ---------------------------------------------------------------- meta
const count = (f) => P.filter(f).length;
const meta = { built: new Date().toISOString().slice(0, 10), total: P.length, core: core.length, coreParts, det: DET, mapOnly: mapOnly.length, models: withTrace.length, locationOnly: nLocOnly, shards: k, cells: cellIndex, cellSize: CELL,
  countries: new Set(P.map((p) => p.cc).filter(Boolean)).size, kinds: { castle: count((p) => p.kind === 1), fort: count((p) => p.kind === 2), ruin: count((p) => p.kind === 3), fortification: count((p) => p.kind === 4) },
  whs: count((p) => p.flags & 1), programme: count((p) => p.flags & 8), addedProgramme: addedProg, skippedNonFort,
  sources: [...SRC.keys()].map((k2) => k2.split('|')), modelMB: +(totalModelBytes / 1e6).toFixed(1), modelPackedMB: +(packedBytes / 1e6).toFixed(1) };
fs.writeFileSync(path.join(OUT, 'data/meta.json'), JSON.stringify(meta));
console.log(JSON.stringify({ ...meta, cells: Object.keys(cellIndex).length }, null, 0));
