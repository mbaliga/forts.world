// Auto-T1 builder: data/geometry/<id>/{osm.json,terrarium/} -> data/traces/<id>.trace.json
//   node tools/build-t1.mjs <id>[,<id>...] | --all
// Pure offline work (no network): run it here, on your machine, or in the build-traces Action after fetch-geometry.
// What it does and does not claim is in docs/fort-fidelity/PIPELINE-DESIGN.md §2.
import fs from 'node:fs';
import path from 'node:path';
import { classify, polyArea, centroid } from './trace/osm.mjs';
import { buildHeightsGrid, gridSampler } from './trace/terrarium.mjs';
import { SCHEMA, validateTrace, evidenceSummary } from './trace/schema.mjs';

const root = path.resolve(new URL('..', import.meta.url).pathname);
const GEO = path.join(root, 'data/geometry'), OUT = path.join(root, 'data/traces');
// The ledger is ~17 MB; parsing every row cost ~0.6 s per spawn, so look up only the row this build needs (ids are unquoted slugs in column 0).
const LEDGER = fs.readFileSync(path.join(root, 'docs/fort-fidelity/ledger.csv'), 'utf8');
const parseCsvLine = (l) => l.match(/("([^"]|"")*"|[^,]*)(,|$)/g).map((s) => s.replace(/,$/, '').replace(/^"|"$/g, '').replace(/""/g, '"'));
function ledgerRow(id) {
  const i = LEDGER.indexOf(`\n${id},`);
  if (i < 0) return null;
  const j = LEDGER.indexOf('\n', i + 1);
  return parseCsvLine(LEDGER.slice(i + 1, j < 0 ? LEDGER.length : j));
}
const TYPE_BY_HISTORIC = { fort: 'fort', castle: 'fort', citadel: 'fort', citywalls: 'fort', city_wall: 'fort', palace: 'palace', temple: 'temple', monastery: 'monastery', archaeological_site: 'ancient-city', tomb: 'tomb', mausoleum: 'tomb', stepwell: 'stepwell' };

// Per-site build options (large forts): data/traces/build-options.json  {"gwalior": {"maxHalf": 1500, "stride": 12, "pruneNearM": 25}, "sindhudurg": {"minHalf": 450}}  (minHalf sizes the window when no outline is mapped)
let OPTS = {}; const loadOpts = () => { OPTS = fs.existsSync(path.join(OUT, 'build-options.json')) ? JSON.parse(fs.readFileSync(path.join(OUT, 'build-options.json'), 'utf8')) : {}; }; loadOpts();

// T1_STRIDE: default height-grid spacing in metres. The terrain source is ~30 m SRTM, so 10 m still oversamples it 3x; 5 m is the old default.
export function buildT1(id, { stride = OPTS[id]?.stride ?? (+process.env.T1_STRIDE || 5) } = {}) {
  const dir = path.join(GEO, id);
  const meta = JSON.parse(fs.readFileSync(path.join(dir, 'meta.json'), 'utf8'));
  const row = ledgerRow(id) || [];
  const osm = fs.existsSync(path.join(dir, 'osm.json')) ? JSON.parse(fs.readFileSync(path.join(dir, 'osm.json'), 'utf8')) : { elements: [] };
  // the site's own Wikidata id: from the id slug (world rows) or the ledger note (programme rows)
  const ownQ = (/-q(\d+)$/.exec(id) || [])[1] ? 'Q' + /-q(\d+)$/.exec(id)[1] : ((row[11] || '').match(/wikidata:(Q\d+)/) || [])[1] || null;
  const C = classify(osm, { lat: meta.lat, lon: meta.lon, radius: meta.radiusM, name: (row[1] || '').split(',')[0], wikidata: ownQ, ...(OPTS[id]?.maxHalf ? { maxHalf: OPTS[id].maxHalf } : {}), ...(OPTS[id]?.minHalf ? { minHalf: OPTS[id].minHalf } : {}), ...(OPTS[id]?.siteWay ? { siteWay: OPTS[id].siteWay } : {}), ...(OPTS[id]?.skipSite ? { skipSite: true } : {}) });
  // Large urban forts: keep only what lies inside the outline or within pruneNearM of it (the city around is not the fort).
  if (OPTS[id]?.pruneNearM != null) {
    // pruneRef: id of the element to prune against when the mapped outline is not the fort (Warangal: the inner city wall, not the 138 m castle way)
    const refEl = OPTS[id].pruneRef === 'largest-closed-wall'
      ? C.elements.filter((e) => e.kind === 'wall' && e.closed).sort((p, q) => polyArea(q.path) - polyArea(p.path))[0] || null
      : OPTS[id].pruneRef ? C.elements.find((e) => e.id === OPTS[id].pruneRef) : null;
    const ol0 = C.elements.find((e) => e.kind === 'outline'), keepM = OPTS[id].pruneNearM;
    const ol = refEl ? { ...refEl, poly: refEl.poly || refEl.path } : ol0;
    if (ol) {
      const segD = (p) => { let m = 1e9; for (let i = 0; i < ol.poly.length; i++) { const a = ol.poly[i], b = ol.poly[(i + 1) % ol.poly.length], dx = b[0] - a[0], dy = b[1] - a[1], t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy || 1))); m = Math.min(m, Math.hypot(p[0] - a[0] - dx * t, p[1] - a[1] - dy * t)); } return m; };
      const inside = (p) => { let c = false; const P = ol.poly; for (let i = 0, j = P.length - 1; i < P.length; j = i++) if ((P[i][1] > p[1]) !== (P[j][1] > p[1]) && p[0] < (P[j][0] - P[i][0]) * (p[1] - P[i][1]) / (P[j][1] - P[i][1]) + P[i][0]) c = !c; return c; };
      const before = C.elements.length;
      C.elements = C.elements.filter((e) => { if (e === ol || e === ol0 || e === refEl) return true; const P = e.poly || e.path || [e.at]; if (e.kind === 'waterway') return false; return P.some(inside) || Math.min(...P.map(segD)) < keepM; });
      C.report.notes.push(`pruned to the outline plus ${keepM} m: ${before} -> ${C.elements.length} elements`);
    }
  }
  // maxBuildings: a living town inside the fort walls would blow the trace budget; keep the N footprints nearest the outline centre and say so.
  if (OPTS[id]?.maxBuildings != null) {
    const ol = C.elements.find((e) => e.kind === 'outline'), c = ol ? centroid(ol.poly) : [0, 0];
    const bl = C.elements.filter((e) => e.kind === 'building'), dist = (e) => { const P = e.poly || e.path; const q = centroid(P); return Math.hypot(q[0] - c[0], q[1] - c[1]); };
    if (bl.length > OPTS[id].maxBuildings) {
      const keep = new Set(bl.sort((p, q) => dist(p) - dist(q)).slice(0, OPTS[id].maxBuildings));
      C.elements = C.elements.filter((e) => e.kind !== 'building' || keep.has(e));
      C.report.notes.push(`present-day buildings capped: kept the ${OPTS[id].maxBuildings} nearest the outline centre of ${bl.length} mapped (trace size budget); the rest of the town is not drawn`);
    }
  }
  // maxRoads: same idea for dense medinas; keep the N longest road/path segments and say so.
  if (OPTS[id]?.maxRoads != null) {
    const rd = C.elements.filter((e) => e.kind === 'road'), len = (e) => { const P = e.path || e.poly || []; let L = 0; for (let i = 1; i < P.length; i++) L += Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1]); return L; };
    if (rd.length > OPTS[id].maxRoads) {
      const keep = new Set(rd.sort((p, q) => len(q) - len(p)).slice(0, OPTS[id].maxRoads));
      C.elements = C.elements.filter((e) => e.kind !== 'road' || keep.has(e));
      C.report.notes.push(`roads capped: kept the ${OPTS[id].maxRoads} longest of ${rd.length} mapped (trace size budget); minor lanes are not drawn`);
    }
  }
  // maxElements: last resort for dense places (field walls, town lanes) when the caps above are not enough, or there is no outline to
  // prune against: keep the outline and the N elements nearest its centre (the ledger point when there is none), and say so.
  if (OPTS[id]?.maxElements != null && C.elements.length > OPTS[id].maxElements) {
    const ol = C.elements.find((e) => e.kind === 'outline'), c = ol ? centroid(ol.poly) : [0, 0], before = C.elements.length;
    const near = (e) => { let m = 1e9; for (const q of (e.poly || e.path || [e.at])) m = Math.min(m, Math.hypot(q[0] - c[0], q[1] - c[1])); return m; };
    const keep = new Set(C.elements.filter((e) => e !== ol).sort((p, q) => near(p) - near(q)).slice(0, OPTS[id].maxElements - (ol ? 1 : 0)));
    C.elements = C.elements.filter((e) => e === ol || keep.has(e));
    C.report.notes.push(`elements capped: kept the ${C.elements.length} nearest the ${ol ? 'outline centre' : 'ledger point'} of ${before} mapped (trace size budget); the rest are not drawn`);
  }
  if (OPTS[id]?.bounds) C.bounds = OPTS[id].bounds;   // a long thin fort: a rectangle round the outline instead of a square (classification used the square)
  const heights = buildHeightsGrid(path.join(dir, 'terrarium'), C.origin.lat, C.origin.lon, C.bounds, stride);
  const notes = [...C.report.notes];
  if (C.origin.shiftedM) notes.push(`origin moved ${C.origin.shiftedM} m from the ledger point to the centre of the mapped site`);

  // Cross-check derived sea polygons against the DEM: most cells inside should sit near 0 m.
  if (heights) {
    const S = gridSampler(heights);
    for (const e of C.elements.filter((x) => x.kind === 'water' && x.src === 'derived:osm-coastline')) {
      const b = e.poly.reduce((a, [x, y]) => [Math.min(a[0], x), Math.min(a[1], y), Math.max(a[2], x), Math.max(a[3], y)], [1e9, 1e9, -1e9, -1e9]);
      const inside = [], outside = [];
      for (let y = C.bounds[1]; y <= C.bounds[3]; y += stride * 2) for (let x = C.bounds[0]; x <= C.bounds[2]; x += stride * 2) {
        const h = S.sample(x, y); if (h !== h) continue; (inPoly(x, y, e.poly) ? inside : outside).push(h);
      }
      const med = (a) => { if (!a.length) return null; const s = [...a].sort((p, q) => p - q); return +s[s.length >> 1].toFixed(1); };
      e.demCheck = { cells: inside.length, medianInside: med(inside), medianOutside: med(outside) };
      // SRTM is noisy to +-10 m at a coast; the sea side only has to be clearly the lower side and near the datum.
      const ok = inside.length && e.demCheck.medianInside <= 10 && (outside.length === 0 || e.demCheck.medianInside < e.demCheck.medianOutside);
      if (!ok) { e.conf = 0.3; e.note += '; DEM disagrees (sea side is not the low side), treat as doubtful'; notes.push(`${e.id}: DEM check failed ${JSON.stringify(e.demCheck)}`); }
      else notes.push(`${e.id}: DEM check ok ${JSON.stringify(e.demCheck)}`);
    }
  } else notes.push('no Terrarium tiles: flat terrain');

  // Terrarium blends bathymetry in at the coast (cells of -100 m and worse a few pixels offshore). The scene only needs
  // a seabed just below the water plane, so clamp: it is a rendering floor, not a depth claim.
  if (heights && heights.stats.min < -3) {
    const u8 = Buffer.from(heights.data, 'base64'); let n = 0;
    for (let q = 0; q < u8.length; q += 2) { const v = u8.readInt16LE(q); if (v !== -32768 && v < -60) { u8.writeInt16LE(-60, q); n++; } }
    heights.data = u8.toString('base64'); heights.clampedBelowM = -3; heights.clampedCells = n; heights.stats.minRaw = heights.stats.min; heights.stats.min = Math.max(-3, heights.stats.min);
    notes.push(`${n} DEM cells below -3 m (bathymetry) clamped to -3 m`);
  }
  const outline = C.elements.find((e) => e.kind === 'outline');
  const type = TYPE_BY_HISTORIC[C.site?.historic] || (row[2] ? 'fort' : 'other');
  const walls = C.elements.filter((e) => e.kind === 'wall');
  // A closed outline that OSM itself tags barrier=wall is a mapped wall line; an outline with no wall tag stays a footprint.
  if (outline && (C.site?.barrier === 'wall' || C.site?.barrier === 'city_wall')) {
    C.elements.push({ id: 'outline-wall', kind: 'wall', path: outline.poly, closed: true, src: outline.src, ev: 'mapped', conf: 0.75, name: 'Perimeter wall · line mapped, elevation unknown', note: 'OSM tags barrier=wall on the outline; no height tag' });
  }
  // Enclosures stay sealed (decision 2026-11-03): no opening is drawn without a plan- or photo-sourced gate. Where a mapped
  // path meets a closed wall line the position is reported as a candidate for the T2 overlay, not emitted as an element.
  const openingCandidates = [];
  for (const w of C.elements.filter((e) => e.kind === 'wall' && e.closed)) {
    for (const r of C.elements.filter((e) => e.kind === 'road')) for (const [p, how] of crossings(r.path, w.path)) openingCandidates.push({ wall: w.id, at: p, road: r.src, how });
  }
  if (openingCandidates.length) notes.push(`${openingCandidates.length} mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)`);
  // T2 overlay: data/traces/overlays/<id>.overlay.json carries plan-/photo-sourced elements, heights and eras. Merged here so
  // the trace stays the single document; the overlay is the hand-authored part and is never regenerated.
  const overlayFile = path.join(OUT, 'overlays', `${id}.overlay.json`), overlay = fs.existsSync(overlayFile) ? JSON.parse(fs.readFileSync(overlayFile, 'utf8')) : null;
  if (overlay) {
    for (const [eid, h] of Object.entries(overlay.heights || {})) { const e = C.elements.find((x) => x.id === eid); if (e) { e.h = h; e.name = (e.name || '').replace(' · line mapped, elevation unknown', ' · line mapped'); } else notes.push(`overlay height for unknown element ${eid}`); }
    for (const e of overlay.elements || []) C.elements.push(e);
    notes.push(`overlay applied: ${Object.keys(overlay.heights || {}).length} heights, ${(overlay.elements || []).length} elements, ${(overlay.eras || []).length} eras`);
  }
  const status = !outline ? 'location-only' : walls.length || C.elements.some((e) => e.id === 'outline-wall') ? 'outline+walls' : 'outline-only';

  const T = {
    schema: SCHEMA, id, name: C.site?.name || (row[1] || id).split(',')[0], type, tier: 'T1', status,
    coords: [+C.origin.lat.toFixed(6), +C.origin.lon.toFixed(6)], ledgerCoords: [meta.lat, meta.lon], origin: { lat: +C.origin.lat.toFixed(7), lon: +C.origin.lon.toFixed(7) }, bounds: C.bounds,
    units: { plan: 'metres', x: 'east', y: 'north', h: heights ? heights.unit : 'none' },
    region: row[2] || null, country: row[3] || null, wikidata: C.site?.wikidata || null,
    sources: [
      { id: 'osm', kind: 'osm', title: 'OpenStreetMap', url: `https://www.openstreetmap.org/#map=17/${meta.lat}/${meta.lon}`, licence: 'ODbL', fetched: meta.fetched, timestamp: osm.osm3s?.timestamp_osm_base || null },
      { id: 'dem', kind: 'dem', title: 'Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived)', url: 'https://registry.opendata.aws/terrain-tiles/', licence: 'see AWS Open Data terrain tiles docs', fetched: meta.fetched },
      ...(overlay?.sources || []), // references the overlay cites (plans, photos, published descriptions)
    ],
    site: C.site, heights, elements: C.elements,
    eras: overlay?.eras?.length ? overlay.eras : [{ id: 'today', year: 'Today', label: 'Mapped site · auto T1', short: 'Present', lens: 'none',
      summary: status === 'location-only' ? 'Location and terrain only. OpenStreetMap has no mapped outline for this site.' : 'Mapped outline, terrain and present-day surroundings from open data. No historic reconstruction.',
      basis: 'Everything drawn is traced from OpenStreetMap ways (ODbL) and the Terrarium elevation tiles. Each element names its OSM way.',
      conjecture: 'Walls and buildings without a sourced height are drawn as kerb-high plan lines, never as masses. Closed walls have no gates: none are mapped. The DEM is ~30 m source resolution: it cannot show terraces, ditches or scarps. Nothing historic is depicted.',
      sources: [] }],
    diffs: overlay?.diffs || {},
    generated: { tool: 'tools/build-t1.mjs', version: 2, date: new Date().toISOString().slice(0, 10), report: { counts: C.report.counts, notes, openingCandidates } },
  };
  T.evidence = evidenceSummary(T);
  return T;
}
function crossings(path, ring) {
  const out = [], segs = [];
  for (let i = 0; i < ring.length; i++) segs.push([ring[i], ring[(i + 1) % ring.length]]);
  const x = (a, b, c, d) => { const den = (b[0] - a[0]) * (d[1] - c[1]) - (b[1] - a[1]) * (d[0] - c[0]); if (Math.abs(den) < 1e-9) return null; const t = ((c[0] - a[0]) * (d[1] - c[1]) - (c[1] - a[1]) * (d[0] - c[0])) / den, u = ((c[0] - a[0]) * (b[1] - a[1]) - (c[1] - a[1]) * (b[0] - a[0])) / den; return t >= 0 && t <= 1 && u >= 0 && u <= 1 ? [a[0] + t * (b[0] - a[0]), a[1] + t * (b[1] - a[1])] : null; };
  for (let i = 1; i < path.length; i++) for (const [c, d] of segs) { const p = x(path[i - 1], path[i], c, d); if (p) out.push([[+p[0].toFixed(1), +p[1].toFixed(1)], 'crossing']); }
  const dist = (p, [c, d]) => { const dx = d[0] - c[0], dy = d[1] - c[1], t = Math.max(0, Math.min(1, ((p[0] - c[0]) * dx + (p[1] - c[1]) * dy) / (dx * dx + dy * dy || 1))); return Math.hypot(p[0] - c[0] - dx * t, p[1] - c[1] - dy * t); };
  for (const p of [path[0], path[path.length - 1]]) if (!out.some((o) => Math.hypot(o[0][0] - p[0], o[0][1] - p[1]) < 3) && segs.some((sg) => dist(p, sg) < 2.5)) out.push([p, 'ending on']);
  return out;
}
function inPoly(x, y, poly) { let c = false; for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) { const [xi, yi] = poly[i], [xj, yj] = poly[j]; if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) c = !c; } return c; }
void polyArea; void centroid;

// --serve: read one id per line on stdin, build it, answer one JSON line {id, code, out} on stdout. model-pool.mjs keeps one such
// process per builder, which saves the ~0.1 s module start of a spawn per site; options are re-read for every build (caps change).
if (process.argv[1] && process.argv[1].endsWith('build-t1.mjs') && process.argv[2] === '--serve') {
  const readline = await import('node:readline');
  fs.mkdirSync(OUT, { recursive: true });
  for await (const line of readline.createInterface({ input: process.stdin })) {
    const id = line.trim(); if (!id) continue; const out = []; let code = 0;
    try {
      loadOpts(); const T = buildT1(id); const v = validateTrace(T);
      if (!v.ok) { code = 1; out.push(`${id} INVALID ${JSON.stringify(v.errors)}`); }
      else {
        const file = path.join(OUT, `${id}.trace.json`); fs.writeFileSync(file, JSON.stringify(T));
        out.push(`${id}: ${T.status}, ${T.elements.length} elements (${JSON.stringify(T.generated.report.counts)}), ${(fs.statSync(file).size / 1024).toFixed(0)} KB${v.warnings.length ? '; warnings: ' + v.warnings.join('; ') : ''}`);
        for (const n of T.generated.report.notes) out.push('   - ' + n);
      }
    } catch (e) { code = 1; out.push(`${id} FAILED ${e.message}`); }
    process.stdout.write(JSON.stringify({ id, code, out: out.join('\n') }) + '\n');
  }
  process.exit(0);
}
if (process.argv[1] && process.argv[1].endsWith('build-t1.mjs') && process.argv[2] !== '--serve') {
  const arg = process.argv[2];
  if (!arg) { console.error('usage: build-t1.mjs <id>[,<id>] | --all'); process.exit(1); }
  const ids = arg === '--all' ? fs.readdirSync(GEO).filter((d) => fs.existsSync(path.join(GEO, d, 'meta.json'))) : arg.split(',');
  fs.mkdirSync(OUT, { recursive: true });
  let bad = 0;
  for (const id of ids) {
    try {
      const T = buildT1(id);
      const v = validateTrace(T);
      if (!v.ok) { bad++; console.error(id, 'INVALID', v.errors); continue; }
      const file = path.join(OUT, `${id}.trace.json`);
      fs.writeFileSync(file, JSON.stringify(T));
      console.log(`${id}: ${T.status}, ${T.elements.length} elements (${JSON.stringify(T.generated.report.counts)}), ${(fs.statSync(file).size / 1024).toFixed(0)} KB${v.warnings.length ? '; warnings: ' + v.warnings.join('; ') : ''}`);
      for (const n of T.generated.report.notes) console.log('   -', n);
    } catch (e) { bad++; console.error(id, 'FAILED', e.message); }
  }
  process.exit(bad ? 1 : 0);
}
