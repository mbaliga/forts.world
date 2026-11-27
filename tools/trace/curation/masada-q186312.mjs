// Curation for Masada, Israel (ledger masada-q186312). Evidence and conflicts: docs/research/masada-q186312-pass.md.
// No Yadin plan, Netzer drawing or other survey plate is open here, so the documented layer is OpenStreetMap only (the plateau outline way 32231475 and the
// mapped Northern Palace, storerooms, baths, synagogue and administration footprints). Everything else is the constructed (schematic) layer, written from
// UNESCO's nomination dossier, the New Encyclopedia of Archaeological Excavations entry, Josephus (Jewish War 7.280-7.319) and other written descriptions,
// and placed on the mapped footprints or on the plateau edge.
import fs from 'node:fs';
import path from 'node:path';
import { carryOver } from './_common.mjs';
import { sampleAlong, rectAt, pathLength } from './_common.mjs';
import { buildHeightsGrid } from '../terrarium.mjs';

export const TIER = 'T1';
export const STATUS = 'needs-plan';
export const HEADER = [
  'Masada, Judean Desert, Israel. Hand-curated trace, tier T1: the documented layer is the OSM plateau outline (way 32231475) and the OSM footprints of the Northern Palace, storerooms, large bathhouse, synagogue, administration buildings, barracks and tower, with Terrarium terrain. No Yadin or Netzer plan was read.',
  'Base: data/traces/masada-q186312.trace.json (OSM ODbL; Terrarium z15, ~30 m SRTM-derived: it flattens the 400 m eastern cliff to a 55 m slope because cells below -3 m are clamped, and cannot show the three palace terraces or the casemate rooms). When data/geometry/masada-q186312/terrarium exists the curation widens the grid from the original 400 m window to 780 x 1220 m (the whole plateau, the western ramp and Roman camps E, F and G) and adds the OSM features the auto trace did not classify (Western Palace, small palaces, Tanners Tower, Byzantine church, pools, columbarium, camp and siege-wall lines, Byzantine Western Gate).',
  'The constructed (schematic) layer in `constructed[]` is drawn from written sources (UNESCO dossier, NEAEHL, Josephus BJ 7, Wikipedia, Madain Project, a 2024 Cambridge siege-system article), placed on the OSM footprints or on the plateau edge, with assumed heights, and shown only in the `<era>~built` eras. Documented heights: none.',
  'Not drawn, for lack of any plan: the individual casemate rooms (about 70), the 18 storeroom halls, the Northern Palace colonnades, frescoes and bath rooms, the three small palaces, the mikvaot, the columbarium, the slope cisterns (4 + 8), the Roman camps and the circumvallation towers (outside the mapped window).',
];

const SRC = {
  UNESCO: ['MAS-UNESCO', 'Masada, UNESCO World Heritage nomination dossier (whc.unesco.org/document/151594): casemate wall 1290 m, 27 towers, 3 gates, storerooms, cisterns, Roman camps', 'https://whc.unesco.org/document/151594'],
  NEAEHL: ['MAS-NEAEHL', 'The New Encyclopedia of Archaeological Excavations in the Holy Land, "Masada" (Biblical Archaeology Society library)', 'https://library.biblicalarchaeology.org/book/the-new-encyclopedia-of-archaeological-excavations-in-the-holy-land/masada/'],
  WIKI: ['MAS-WIKI', 'Masada, Wikipedia (plateau 550 x 270 m, casemate wall 4 m high and 1,300 m long, ramp 114 m, building phases 35, 25, 15 BC)', 'https://en.wikipedia.org/wiki/Masada'],
  ENCY: ['MAS-ENCY', 'Masada, Encyclopedia of Religion (encyclopedia.com): casemate circumference about 1,400 m, about 70 rooms, 30 towers, 4 gates; Northern Palace terraces 20 m and 15 m apart', 'https://www.encyclopedia.com/religion/encyclopedias-almanacs-transcripts-and-maps/masada'],
  JVL: ['MAS-JVL', 'Masada, Jewish Virtual Library (storehouses, baths, synagogue 12.5 x 10.5 m, Western Palace over 4,000 m2)', 'https://www.jewishvirtuallibrary.org/masada-desert-fortress'],
  JOS: ['MAS-JOS', 'Josephus, Jewish War 7.280-7.319 (Whiston translation, lexundria.com): wall 7 furlongs, 12 cubits high, 8 broad, 38 towers of 50 cubits; palace at the western ascent; bank 200 cubits; platform 50 cubits; tower 60 cubits', 'https://lexundria.com/j_bj/7.275-7.319/wst'],
  SYN: ['MAS-SYN', 'Masada Synagogue, Madain Project (about 12 x 15 m hall, genizah chamber 5.7 x 3.5 m, in the casemate wall on the north-west)', 'https://madainproject.com/masada_synagogue'],
  LIB: ['MAS-LIB', 'The Library of King Herod in the Northern Palace of Masada, Scripta Classica Israelica (podium 17 x 17 m, circular structure 15.3 m outer and 8 m inner foundation circle)', 'https://scriptaclassica.org/index.php/sci/article/download/3553/3071/6695'],
  TRI: ['MAS-TRI', 'Herodian triclinia article (ejournals.eu): Northern Palace lower terrace banqueting room 10.3 x 9.0 m', 'https://ejournals.eu/en/journal_article_files/full_text/018ecedc-d501-7048-8544-ff219919e91c/download'],
  CAM: ['MAS-CAM', 'Roman siege system of Masada: a 3D computerized analysis of a conflict landscape, Cambridge (2024): 8 camps, circumvallation about 4,300 m, 15 towers', 'https://cambridge.org/core/services/aop-cambridge-core/content/view/32C59BE59ACD3E9A91C95F947DFD271E/S1047759424000084a.pdf/roman_siege_system_of_masada_a_3d_computerized_analysis_of_a_conflict_landscape.pdf'],
  BAS: ['MAS-BAS', 'The Masada Siege, Biblical Archaeology Society (ramp on the Leuke spur, 15 siege-wall towers, 8 camps)', 'https://www.biblicalarchaeology.org/daily/biblical-sites-places/biblical-archaeology-sites/the-masada-siege/'],
};

// ---------------------------------------------------------------- geometry helpers
const area2 = (r) => r.reduce((s, p, i) => { const q = r[(i + 1) % r.length]; return s + p[0] * q[1] - q[0] * p[1]; }, 0);
// move a closed ring d metres towards its interior (vertex normals averaged); the ring may be either winding
function inset(ring, d) {
  const s = area2(ring) > 0 ? 1 : -1, n = ring.length;
  return ring.map((p, i) => {
    const a = ring[(i + n - 1) % n], b = ring[(i + 1) % n];
    const t1 = [p[0] - a[0], p[1] - a[1]], t2 = [b[0] - p[0], b[1] - p[1]], l1 = Math.hypot(...t1) || 1, l2 = Math.hypot(...t2) || 1;
    const n1 = [-t1[1] / l1 * s, t1[0] / l1 * s], n2 = [-t2[1] / l2 * s, t2[0] / l2 * s];
    let nx = n1[0] + n2[0], ny = n1[1] + n2[1]; const nl = Math.hypot(nx, ny) || 1; nx /= nl; ny /= nl;
    const k = Math.max(0.5, nx * n1[0] + ny * n1[1]);                 // mitre, capped
    return [+(p[0] + nx * d / Math.max(k, 0.55)).toFixed(1), +(p[1] + ny * d / Math.max(k, 0.55)).toFixed(1)];
  });
}
const nearestOn = (p, P, closed = true) => { const Q = closed ? [...P, P[0]] : P; let best = [1e9, null, 0, [1, 0]]; for (let i = 0; i < Q.length - 1; i++) { const a = Q[i], b = Q[i + 1], dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy) || 1, t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (l * l))), q = [a[0] + dx * t, a[1] + dy * t], d = Math.hypot(p[0] - q[0], p[1] - q[1]); if (d < best[0]) best = [d, [+q[0].toFixed(1), +q[1].toFixed(1)], i, [dx / l, dy / l]]; } return best; };
const circle = (c, r, n = 16) => Array.from({ length: n }, (_, i) => [+(c[0] + r * Math.cos(2 * Math.PI * i / n)).toFixed(1), +(c[1] + r * Math.sin(2 * Math.PI * i / n)).toFixed(1)]);
const angOf = (t) => Math.atan2(t[1], t[0]) * 180 / Math.PI;
// split a polyline into the runs that lie inside the grid box (elements outside the grid hang in the air)
function runs(P, [x0, y0, x1, y1], closed) {
  const inb = (p) => p[0] >= x0 && p[0] <= x1 && p[1] >= y0 && p[1] <= y1, out = []; let cur = [];
  const Q = closed ? [...P, P[0]] : P;
  for (const p of Q) { if (inb(p)) cur.push(p); else { if (cur.length > 1) out.push(cur); cur = []; } }
  if (cur.length > 1) out.push(cur);
  return out;
}

export default async function curate(T, h) {
  for (const k of Object.keys(SRC)) h.source({ id: SRC[k][0], kind: 'web', title: SRC[k][1], url: SRC[k][2], licence: 'read for facts only; no text or images shipped', fetched: '2026-11-27' });

  // ---- widen the terrain grid when the raw tiles are present (the auto trace covers 400 m round the Northern Palace only) ----
  const root = path.resolve(new URL('../../..', import.meta.url).pathname);
  const tiles = path.join(root, 'data/geometry', T.id, 'terrarium');
  let BOX = T.bounds.slice();
  let widened = false;
  if (fs.existsSync(tiles) && fs.readdirSync(tiles).length) {
    const wide = [-540, -880, 240, 340];
    const g = buildHeightsGrid(tiles, T.origin.lat, T.origin.lon, wide, 5);
    if (g) {
      const u8 = Buffer.from(g.data, 'base64'); let n = 0;
      for (let q = 0; q < u8.length; q += 2) { const v = u8.readInt16LE(q); if (v !== -32768 && v < -60) { u8.writeInt16LE(-60, q); n++; } }   // same -3 m rendering floor as the auto trace
      g.data = u8.toString('base64'); g.clampedBelowM = -3; g.clampedCells = n; g.stats.minRaw = g.stats.min; g.stats.min = Math.max(-3, g.stats.min);
      for (const k of Object.keys(T.heights)) delete T.heights[k];
      Object.assign(T.heights, g); T.bounds = wide; BOX = wide; widened = true;
    }
  }
  const inBox = (p) => p[0] >= BOX[0] && p[0] <= BOX[2] && p[1] >= BOX[1] && p[1] <= BOX[3];
  console.error(`${T.id}: terrain grid ${widened ? 'widened to the plateau, the ramp and the western Roman camps' : 'kept at the 400 m auto window (no raw tiles)'}: ${JSON.stringify(BOX)}`);

  // ---- tidy the auto trace: drop what lies wholly outside the grid, clip long lines to it ----
  for (const e of T.elements.slice()) {
    const P = e.poly || e.path; if (!P) continue;
    if (e.kind === 'outline' || e.id === 'zone-1' || e.id === 'zone-86') continue;
    if (!P.some(inBox)) { h.remove(e.id); continue; }
    if (e.path && !e.poly && !P.every(inBox)) { const r = runs(P, BOX, !!e.closed); if (r.length) { e.path = r[0]; if (r.length > 1) { for (let k = 1; k < r.length; k++) h.add({ ...structuredClone(e), id: `${e.id}-p${k}`, path: r[k] }); } } else h.remove(e.id); }
  }
  h.remove('zone-86');   // the OSM national-park polygon, 1 km across: outside the plateau and not a feature

  // ---- OSM features the auto trace did not classify: read from the raw geometry (Overpass, ODbL) when present ----
  const R_E = 6371008.8, DEG = Math.PI / 180, cosL = Math.cos(T.origin.lat * DEG);
  const xyOf = (la, lo) => [+((lo - T.origin.lon) * R_E * DEG * cosL).toFixed(1), +((la - T.origin.lat) * R_E * DEG).toFixed(1)];
  let rawOsm = [];
  try { const f = path.join(root, 'data/geometry', T.id, 'osm.json'); if (fs.existsSync(f)) rawOsm = JSON.parse(fs.readFileSync(f, 'utf8')).elements || []; } catch { rawOsm = []; }
  const rawWay = (id) => { const w = rawOsm.find((x) => x.type === 'way' && x.id === id); if (!w || !w.geometry) return null; let P = w.geometry.map((g) => xyOf(g.lat, g.lon)); if (w.nodes && w.nodes[0] === w.nodes[w.nodes.length - 1]) P = P.slice(0, -1); return { P, tags: w.tags || {}, closed: w.nodes[0] === w.nodes[w.nodes.length - 1] }; };
  const addMapped = (id, kind, name, extra = {}) => { const w = rawWay(id); if (!w || !w.P.every(inBox)) return null; const e = { id: `osm-way-${id}`, kind, src: `osm:way/${id}`, ev: 'mapped', conf: 0.8, name, ...(kind === 'wall' ? { path: w.P, closed: w.closed } : { poly: w.P }), ...extra }; h.add(e); return e; };
  const mapped = {};
  [[737549501, 'building', 'Western Palace · mapped footprint (OSM way 737549501)'],
   [737549499, 'building', 'Small palace 19 · mapped footprint (OSM way 737549499)'],
   [737549506, 'building', 'Small palace 20a · mapped footprint (OSM way 737549506)'],
   [737549507, 'building', 'Small palace · mapped footprint (OSM way 737549507)'],
   [737549500, 'building', 'Tanners\' Tower (watchtower) · mapped footprint (OSM way 737549500)'],
   [737549498, 'building', 'Round columbarium tower · mapped footprint (OSM way 737549498)'],
   [737549502, 'building', 'Byzantine church · mapped footprint (OSM way 737549502)'],
   [737549505, 'building', 'Public immersion pool · mapped footprint (OSM way 737549505)'],
   [737549520, 'building', 'Swimming pool (large pool at the south end) · mapped footprint (OSM way 737549520)'],
  ].forEach(([id, k, n]) => { mapped[id] = addMapped(id, k, n, id === 737549502 ? { unreachableOk: true, unreachableNote: 'the mapped church footprint is drawn beside its schematic mass (c-church, which cannot replace it in the 4 BCE era check); a solid mass with no door.' } : {}); });
  const camps = [[87684121, 'E'], [87684153, 'F'], [87684132, 'G']];
  camps.forEach(([id, c]) => { mapped[id] = addMapped(id, 'wall', `Roman camp ${c} · mapped wall line (OSM way ${id}), height unknown`); });
  [[125363276, 'north-west'], [125363277, 'north']].forEach(([id, c]) => { const w = rawWay(id); if (w) { const P = runs(w.P, BOX, false); P.forEach((q, k) => h.add({ id: `osm-way-${id}-${k}`, kind: 'wall', path: q, closed: false, src: `osm:way/${id}`, ev: 'mapped', conf: 0.7, name: `Roman siege wall, ${c} stretch · mapped line (OSM way ${id}), height unknown` })); } });
  const gateNode = rawOsm.find((x) => x.type === 'node' && x.id === 6905359784);
  if (gateNode) { const at = xyOf(gateNode.lat, gateNode.lon); if (inBox(at)) h.add({ id: 'osm-node-6905359784', kind: 'marker', at, src: 'osm:node/6905359784', ev: 'mapped', conf: 0.8, name: 'Byzantine Western Gate · mapped point (OSM node 6905359784, ref 15)', title: 'The Byzantine Western Gate · mapped point', text: 'OpenStreetMap node (barrier=entrance, historic=ruins, park map ref 15). Position is the mapped node; nothing of its form is reconstructed here.', osmTags: { historic: 'ruins', barrier: 'entrance' } }); }
  const graveNode = rawOsm.find((x) => x.type === 'node' && x.id === 1392634558);
  if (graveNode) { const at = xyOf(graveNode.lat, graveNode.lon); if (inBox(at)) h.add({ id: 'osm-node-1392634558', kind: 'marker', at, src: 'osm:node/1392634558', ev: 'mapped', conf: 0.8, name: 'Zealots\' grave (memorial) · mapped point (OSM node 1392634558)', title: 'Kana\'im (Zealots\') grave · mapped point', text: 'OpenStreetMap node (historic=memorial, name:en "Kana\'im grave"). A memorial of the modern period at the foot of the western ramp; position is the mapped node.', osmTags: { historic: 'memorial' } }); }

  // ---- name the mapped features that OSM leaves bare ----
  const nm = (id, name, note) => { const e = h.byId(id); e.name = name; if (note) e.note = note; };
  nm('building-14', 'Cable-car station (modern) · mapped (OSM way 125362964)', 'OSM aerialway=station: the upper station of the modern Masada cable car, not a historic building.');
  nm('road-33', 'Stair between the middle and lower terraces · mapped path (OSM way 737549524)', 'MAS-WIKI: the middle terrace was reached by a stairway on its west side; the mapped path on the west edge of the palace is carried back as that stair, inferred.');
  nm('road-32', 'Path down to the lower terrace · mapped (OSM way 737549523)');
  nm('zone-1', 'Masada plateau · mapped (OSM way 32231475)', 'Mapped boundary of the summit plateau; the casemate wall is drawn on it in the constructed layer.');
  nm('outline', 'Northern Palace · mapped footprint (OSM way 751256375)');
  nm('zone-24', 'Storerooms · mapped T-shaped footprint (OSM way 737549509)');
  nm('building-83', 'Large bathhouse · mapped (OSM way 751323346)');
  nm('zone-30', 'Bathhouse complex · mapped area (OSM way 737549519)');
  nm('zone-22', 'Synagogue · mapped (OSM way 737549503)');
  nm('zone-25', 'Administration building · mapped (OSM way 737549510)');
  nm('zone-60', 'Administration building · mapped (OSM way 751256401)');
  nm('zone-61', 'Commander\'s residence (OSM English name "grand residence") · mapped (OSM way 751256402)');
  nm('zone-23', 'Barracks · mapped (OSM way 737549504)');
  nm('zone-31', 'Tower · mapped (OSM way 737549522)');
  nm('zone-84', 'Guard room · mapped (OSM way 751343343)');
  nm('zone-64', 'Quarry · mapped (OSM way 751256405)');
  if (T.elements.some((e) => e.id === 'wall-10')) nm('wall-10', 'Roman siege wall (circumvallation) · mapped line (OSM way 125359423), height unknown');
  nm('road-8', 'Snake Path · mapped (OSM way 97602598)');
  if (T.elements.some((e) => e.id === 'road-3')) nm('road-3', 'Roman ramp path · mapped (OSM way 72016893)');

  // ---- ground colour: the engine paints open ground green by default; the Judean Desert is bare rock. Assumed, no landcover read. ----
  h.add({ id: 'ground-arid', kind: 'zone', zone: 'bare_rock', poly: [[BOX[0], BOX[1]], [BOX[2], BOX[1]], [BOX[2], BOX[3]], [BOX[0], BOX[3]]], src: 'inferred', ev: 'inferred', conf: 0.2, name: 'Ground colour: bare rock over the whole window · assumed (arid desert; no landcover data was read), inferred', note: 'Colour only, no height. The Judean Desert edge above the Dead Sea is bare rock and gravel; this paint is an assumption, not a mapped landcover.' });

  // ================================================================ constructed layer
  const B = '4bce', R = '73', N = 'today', ALL = [B, R, N];
  const out = [];
  const A = 'Assumed height. ';
  const add = (e) => { out.push({ src: 'inferred', ev: 'schematic', conf: 0.15, ...e }); };

  // ---- casemate wall on the plateau edge ----
  const z1 = h.byId('zone-1').poly;
  const iEnd = z1.findIndex((p) => Math.abs(p[0] + 0.82) < 1.5 && Math.abs(p[1] + 37.9) < 2);
  const ring = z1.slice(0, iEnd + 1);                 // the plateau without the northern spur that carries the Northern Palace
  const outer = inset(ring, 1.0), innerR = inset(ring, 6.3);
  const wallLen = pathLength(outer, true);
  const wallBasis = 'MAS-UNESCO: casemate wall 1290 m long, nearly 70 inner rooms, 27 towers, averaging 6.5 m thick with a 1.4 m outer wall and a 0.95 m inner wall; MAS-WIKI: 4 m high, 1,300 m long; MAS-JOS 7.286: seven furlongs round the entire top, 12 cubits high and 8 broad. Drawn on the mapped plateau boundary (OSM way 32231475) closed across the northern neck; the real wall stops at the cliff edge and cuts corners, so the drawn ring (' + Math.round(wallLen) + ' m) is longer than the 1290 m reported.';
  const keepRuns = (P) => runs(P, BOX, true);
  keepRuns(outer).forEach((P, k) => add({ id: `c-casemate-outer-${k + 1}`, kind: 'wall', path: P, closed: false, thick: 1.4, merlon: true, eras: ALL, unreachableOk: true, unreachableNote: 'the wall stands on the cliff-edge line of the mapped plateau, where the 30 m DEM slopes steeply; the real wall is reached from the plateau side through the gates.', name: `Casemate wall, outer face (run ${k + 1}) · schematic, 4 m assumed`, basis: wallBasis + ' 1.4 m outer wall.', h: { v: 4, src: 'inferred', note: A + 'MAS-WIKI gives 4 m; Josephus gives 12 cubits (about 5.3 m at 0.444 m per cubit), the two differ' } }));
  keepRuns(innerR).forEach((P, k) => add({ id: `c-casemate-inner-${k + 1}`, kind: 'wall', path: P, closed: false, thick: 0.95, merlon: false, eras: ALL, unreachableOk: true, unreachableNote: 'the inner face of the casemate rooms on the plateau edge; it is a thin schematic wall, and the rooms between the faces are not drawn.', name: `Casemate wall, inner face (run ${k + 1}) · schematic, 3.5 m assumed`, basis: wallBasis + ' 0.95 m inner wall, offset 5.3 m inside the outer face so the rooms between average the stated 6.5 m of total thickness. The ~70 cross walls (rooms, some over 30 m long) are not drawn: their positions are not in the sources read.', h: { v: 3.5, src: 'inferred', note: A + 'a little below the outer face, which carried the parapet' } }));

  // ---- towers: 27 along the ring (UNESCO), clear of the gates ----
  const GATE = (id, nameTxt, p) => { const q = nearestOn(p, outer)[1]; return { id, at: q, nameTxt }; };
  const gates = [
    { ...GATE('snake', 'Snake Path Gate (east)', [40, -200]), basis: 'MAS-UNESCO: three gates pierce the casemate wall, Western, Southern and Snake Path (eastern); MAS-ENCY: the "snake path" gate is on the north-east. OSM maps the top of the Snake Path (way 750880949) ending at the plateau edge near here; the gate is placed at the nearest point of the wall line, an assumption.', era: ALL },
    { ...GATE('water', 'Water Gate (north-west)', [-52, -58]), basis: 'MAS-NEAEHL / MAS-LIB: the approach to the Northern Palace ran from the Water Gate about 80 m south-west of the palace; MAS-UNESCO: the Water Gate "led to the Northern Palace" and is not part of the casemate wall. Placed on the mapped north-west notch of the plateau 80 m from the palace (palace centre 4, 1), an assumption.', era: ALL },
    { ...GATE('west', 'Western Gate (west)', (() => { const n = T.elements.find((e) => e.id === 'osm-node-6905359784'); return n ? n.at : [-152, -226]; })()), basis: 'MAS-UNESCO: a Western Gate is one of three; OSM maps the ruin of the "Byzantine Western Gate" (node 6905359784, park ref 15) here, so the opening is placed at the mapped node and snapped to the wall line. The Byzantine gate is a later phase; whether the Herodian gate stood at the same place is an assumption.', era: ALL },
    { ...GATE('south', 'Southern (cistern) Gate', [-158, -640]), basis: 'MAS-UNESCO: a Southern Gate is one of three; MAS-ENCY: a southern "cistern" gate. Placed at the southern tip of the mapped plateau, an assumption.', era: ALL },
  ].filter((g) => inBox(g.at));
  const towers = sampleAlong(outer, wallLen / 27, { closed: true, start: 0.5 }).filter((s) => !gates.some((g) => Math.hypot(s.at[0] - g.at[0], s.at[1] - g.at[1]) < 14));
  towers.forEach((s, k) => { if (!inBox(s.at)) return; add({ id: `c-tower-${k + 1}`, kind: 'building', poly: rectAt(s.at, 8, 6, angOf(s.tan)), roof: 'flat', merlon: true, eras: ALL, unreachableOk: true, unreachableNote: 'a solid schematic tower on the cliff-edge wall line; no stair or door drawn.', name: `Casemate wall tower ${k + 1} · schematic, 8 m assumed`, basis: 'MAS-UNESCO: 27 towers on the casemate wall (MAS-ENCY says about 30; Josephus 7.287 says 38 towers of 50 cubits, about 22 m, which the remains do not support). Even spacing along the mapped plateau line, clear of the gates; individual tower sites are not in the sources read. 8 x 6 m is assumed.', h: { v: 8, src: 'inferred', note: A + 'about 4 m above the 4 m curtain; Josephus\' 50 cubits (22 m) is not used' } }); });
  for (const g of gates) {
    const run = out.find((e) => e.id.startsWith('c-casemate-outer-') && nearestOn(g.at, e.path, false)[0] < 1.5);
    if (!run) continue;
    add({ id: `c-gate-${g.id}`, kind: 'gate', wall: run.id, at: g.at, w: 3.5, eras: ALL, unreachableOk: true, unreachableNote: 'the gate sits on the cliff-edge wall line, on a slope the 30 m DEM makes too steep to climb; the real gate has a path or ramp.', name: `${g.nameTxt} · schematic opening, position assumed`, basis: g.basis + ' 3.5 m opening assumed; the gate form is not drawn.' });
  }

  // ---- Northern Palace (OSM footprints; three terraces, descending north) ----
  const NP = 'MAS-NEAEHL, MAS-ENCY, MAS-LIB: the Northern Palace spreads over three modified rock terraces at the north end, the middle terrace about 20 m below the upper and the lower about 15 m below the middle.';
  add({ id: 'c-np-upper', kind: 'building', poly: [[-17, -33], [-2, -36.5], [-1.5, -22], [-13, -21]], roof: 'flat', eras: ALL, src: 'osm:way/751256375', replaces: ['wall-45', 'wall-74'], unreachableOk: true, unreachableNote: 'a solid schematic residence block with no door drawn.', name: 'Northern Palace, upper terrace residence · schematic, 7 m assumed', basis: NP + ' MAS-ENCY: the upper terrace holds Herod\'s private quarters with a large semicircular balcony to the north; MAS-NEAEHL: mosaic floors and wall paintings (fresco in hall 80). Footprint is the southern part of the OSM palace outline; rooms are not drawn.', h: { v: 7, src: 'inferred', note: A + 'one storey of living rooms with a vaulted or flat roof, about 7 m' } });
  add({ id: 'c-np-balcony', kind: 'building', poly: [[-11, -19], [-9, -16], [-7, -15.5], [-5, -16], [-3.5, -17.5], [-2, -18.5], [-4, -19], [-9, -19]], roof: 'flat', eras: ALL, src: 'osm:way/751256389', replaces: ['building-55'], unreachableOk: true, unreachableNote: 'a solid schematic block standing for the semicircular colonnaded balcony; its two rows of columns are not drawn.', name: 'Northern Palace, semicircular balcony · schematic, 4 m assumed', basis: 'MAS-ENCY and MAS-JVL: a large semicircular balcony (two concentric rows of columns) on the upper terrace overlooking the north. The curve mapped in OSM (way 751256389, about 9 m wide) is taken to be it. The colonnade is not drawn.', h: { v: 4, src: 'inferred', note: A + 'a single-storey colonnade' } });
  add({ id: 'c-np-podium', kind: 'building', poly: rectAt([4, 1], 17, 17, 0), roof: 'flat', eras: ALL, unreachableOk: true, unreachableNote: 'a solid schematic podium; it is a retaining mass, not a walkable room.', name: 'Northern Palace, middle terrace podium (17 x 17 m) · schematic, 3 m assumed', basis: 'MAS-LIB: the circular structure sits on a square podium 17 x 17 m (290 m2) whose retaining walls survive to 9 m. Centred on the mapped circle (OSM ways 751323333 and 751323341, centre about 4, 1); the podium is placed on the circle by assumption.', h: { v: 3, src: 'inferred', note: A + 'a low platform: the 9 m retaining walls hold up the terrace from below and are not additional height above it' } });
  add({ id: 'c-np-tholos', kind: 'building', poly: circle([4, 1], 4, 20), roof: 'flat', eras: ALL, src: 'osm:way/751323333', unreachableOk: true, unreachableNote: 'a solid schematic drum standing for the round pavilion; no door or columns drawn.', name: 'Northern Palace, middle terrace round pavilion · schematic, 7 m assumed', basis: 'MAS-LIB: a circular structure with foundation circles of 15.3 m and 8 m, possibly a peripteral tholos with its entrance on the south, set 4.5 m behind a library wall of niches. The mapped inner ring (OSM way 751323333, about 8 m across) is drawn; the 15.3 m outer circle does not match the mapped outer ring (about 11 m, way 751323341), which is left as mapped.', h: { v: 7, src: 'inferred', note: A + 'a columned pavilion on a podium, about 7 m to the entablature' } });
  add({ id: 'c-np-library', kind: 'building', poly: rectAt([4, -9], 5.3, 1.0, 0), roof: 'flat', eras: ALL, unreachableOk: true, unreachableNote: 'a thin schematic wall; its niches are not drawn.', name: 'Northern Palace, wall of niches ("library") · schematic, 3.2 m assumed', basis: 'MAS-LIB: a wall of niches 5.3 m long and 3.2 m high, niches 0.7 m wide, 2.7 m high, 0.5 m deep, about 4.5 m from the circular structure, proposed as a library. Position (south of the pavilion, on its axis) is assumed.', h: { v: 3.2, src: 'inferred', note: 'assumed placement; the 3.2 m is MAS-LIB\'s stated height from floor level, but the floor here is the DEM surface' } });
  add({ id: 'c-np-lower-hall', kind: 'building', poly: [[0, 23], [9, 23], [9, 32], [0, 32]], roof: 'flat', eras: ALL, src: 'osm:way/751256375', unreachableOk: true, unreachableNote: 'a solid schematic hall on the lower terrace edge with no door drawn.', name: 'Northern Palace, lower terrace banqueting hall (triclinium) · schematic, 8 m assumed', basis: 'MAS-TRI: the lower terrace has a banqueting room 10.3 x 9.0 m; MAS-ENCY: reception and banquet area enclosed by porticos on four sides. The northern lobe of the OSM palace outline (about 9 x 9 m) is taken to be the room; the porticos are not drawn.', h: { v: 8, src: 'inferred', note: A + 'a double-height banqueting hall' } });
  add({ id: 'c-np-lower-bath', kind: 'building', poly: [[9, 21], [12.5, 21], [12.5, 25], [9, 25]], roof: 'flat', eras: ALL, src: 'osm:way/751256375', unreachableOk: true, unreachableNote: 'a solid schematic block with no door drawn.', name: 'Northern Palace, lower terrace small bathhouse · schematic, 4.5 m assumed', basis: 'MAS-ENCY: a small Roman-style bathhouse in the eastern corner of the lower terrace; MAS-JVL: a small private bathhouse on the lowest terrace. The eastern wing of the OSM outline (about 3.5 x 4 m) is taken to be it.', h: { v: 4.5, src: 'inferred', note: A + 'a single small bath block' } });

  // ---- plateau buildings on OSM footprints ----
  const poly = (id) => h.byId(id).poly;
  const osmRef = (id) => h.byId(id).src;
  add({ id: 'c-storerooms', kind: 'building', poly: poly('zone-24'), roof: 'flat', eras: ALL, src: osmRef('zone-24'), unreachableOk: true, unreachableNote: 'a solid schematic mass on the mapped footprint; the halls, corridor and doors inside are not drawn.', name: 'Storerooms (T-shaped complex) · schematic, 5 m assumed', basis: 'MAS-UNESCO: originally eighteen rooms, thirteen of them 26 m long, two entrances and two or three guard towers; MAS-JVL: two rows of long halls opening on a central corridor, plastered floors, wooden-beam roofs; MAS-WIKI: the large food storage complex dates from the 25 BC phase. The OSM T-shaped footprint (way 737549509) is used; the individual halls are not drawn.', h: { v: 5, src: 'inferred', note: A + 'a single storey with a timber roof' } });
  add({ id: 'c-bathhouse', kind: 'building', poly: poly('building-83'), roof: 'flat', eras: ALL, src: osmRef('building-83'), replaces: ['building-83', 'wall-79', 'wall-81', 'wall-82'], unreachableOk: true, unreachableNote: 'a solid schematic bath block with no door drawn.', name: 'Large bathhouse · schematic, 6 m assumed', basis: 'MAS-UNESCO: the large bath-house south of the Northern Palace has a changing room, a stepped cold pool and a hot room with a barrel-vaulted roof; MAS-ENCY: four rooms and a court, the hot room on about 200 small columns over a hypocaust. Footprint is the OSM building (way 751323346); rooms are not drawn.', h: { v: 6, src: 'inferred', note: A + 'a barrel-vaulted hot room' } });
  add({ id: 'c-admin-1', kind: 'building', poly: poly('zone-25'), roof: 'flat', eras: ALL, src: osmRef('zone-25'), replaces: ['wall-72'], unreachableOk: true, unreachableNote: 'a solid schematic mass with no door drawn.', name: 'Administration building · schematic, 4.5 m assumed', basis: 'OSM (way 737549510) names this footprint "Administration Building"; MAS-NEAEHL speaks of administrative rooms in the northern complex (the north-western entrance "served administrative purposes"). No source read describes the building; only the footprint and a one-storey massing are drawn.', h: { v: 4.5, src: 'inferred', note: A + 'one storey' } });
  add({ id: 'c-admin-2', kind: 'building', poly: poly('zone-60'), roof: 'flat', eras: ALL, src: osmRef('zone-60'), unreachableOk: true, unreachableNote: 'a solid schematic mass with no door drawn.', name: 'Administration building (second) · schematic, 4.5 m assumed', basis: 'OSM (way 751256401) names this footprint "Administration Building"; nothing else is known from the sources read. One-storey massing.', h: { v: 4.5, src: 'inferred', note: A + 'one storey' } });
  add({ id: 'c-grand-residence', kind: 'building', poly: poly('zone-61'), roof: 'flat', eras: ALL, src: osmRef('zone-61'), unreachableOk: true, unreachableNote: 'a solid schematic mass with no door drawn.', name: 'Commander\'s residence · schematic, 5.5 m assumed', basis: 'OSM (way 751256402) labels the footprint "grand residence" in English and in Hebrew "residence of the mountain commander" (German "Residenz des Kommandanten"); no source read describes it. Footprint and a one-storey-and-a-half massing only.', h: { v: 5.5, src: 'inferred', note: A + 'a residence of one tall storey' } });
  add({ id: 'c-barracks', kind: 'building', poly: poly('zone-23'), roof: 'flat', eras: ALL, src: osmRef('zone-23'), unreachableOk: true, unreachableNote: 'a solid schematic mass with no door drawn.', name: 'Barracks · schematic, 4 m assumed', basis: 'MAS-WIKI: the first building phase (from 35 BC) included barracks; OSM (way 737549504) maps a "barracks" footprint here. One-storey massing.', h: { v: 4, src: 'inferred', note: A + 'one storey' } });
  add({ id: 'c-tower-mapped', kind: 'building', poly: poly('zone-31'), roof: 'flat', merlon: true, eras: ALL, src: osmRef('zone-31'), unreachableOk: true, unreachableNote: 'a solid schematic tower with no door drawn.', name: 'Mapped inner tower · schematic, 9 m assumed', basis: 'OSM (way 737549522) maps a "Tower" footprint here, about 10 x 11 m, inside the plateau away from the wall; no source read describes it (UNESCO notes two or three guard towers at the storerooms). Massing only.', h: { v: 9, src: 'inferred', note: A + 'a little above the 8 m wall towers' } });
  const hasSyn = T.elements.some((e) => e.id === 'zone-22');
  if (hasSyn) {
    add({ id: 'c-synagogue', kind: 'building', poly: poly('zone-22'), roof: 'flat', eras: [B, R, N], src: osmRef('zone-22'), replaces: ['building-70', 'wall-71'], unreachableOk: true, unreachableNote: 'a solid schematic hall with no door drawn; the two rows of columns and the four tiers of benches are not drawn.', name: 'Synagogue (a Herodian building reused by the rebels) · schematic, 5 m assumed', basis: 'MAS-SYN: about 12 x 15 m, built into the casemate wall on the north-west, Herodian in origin (about 10 BC) and rebuilt by the rebels with four tiers of benches and column rows, with a genizah chamber (5.7 x 3.5 m) in the northern corner; MAS-JVL gives 12.5 x 10.5 m; MAS-ENCY: two rows of central columns. The OSM footprint (way 737549503) is used.', h: { v: 5, src: 'inferred', note: A + 'a pillared hall about 5 m under a timber roof' } });
  }

  // ---- palaces and other mapped footprints in the south-west (OSM, read from the raw geometry) ----
  const mp = (id) => mapped[id];
  if (mp(737549501)) add({ id: 'c-western-palace', kind: 'building', poly: mp(737549501).poly, roof: 'flat', eras: ALL, src: 'osm:way/737549501', replaces: [mp(737549501).id], unreachableOk: true, unreachableNote: 'a solid schematic mass; its courtyard, throne room, mosaic room and wings are not drawn.', name: 'Western Palace · schematic, 6 m assumed', basis: 'MAS-UNESCO / MAS-ENCY / MAS-JVL: the largest building on the summit, over 4,000 m2 (about one acre), four wings (official, storeroom, service, administrative), a square core entered from a north-west courtyard; MAS-WIKI: started in the first phase (35 BC), enlarged in 15 BC with servants\' rooms; MAS-JOS 7.289: "a palace at the western ascent", its wall very high with towers at the four corners 60 cubits high. Footprint is the OSM building (way 737549501, about 46 x 71 m); the internal plan is not drawn.', h: { v: 6, src: 'inferred', note: A + 'a one-storey block of rooms; Josephus\' 60 cubit (27 m) corner towers are not drawn and are not found by excavation' } });
  [[737549499, 'Small palace 19'], [737549506, 'Small palace 20a'], [737549507, 'Small palace 20b']].forEach(([id, nmx]) => { if (mp(id)) add({ id: `c-small-palace-${id}`, kind: 'building', poly: mp(id).poly, roof: 'flat', eras: ALL, src: `osm:way/${id}`, replaces: [mp(id).id], unreachableOk: true, unreachableNote: 'a solid schematic mass with no door drawn.', name: `${nmx} · schematic, 5 m assumed`, basis: 'MAS-WIKI: three smaller palaces were built in the first phase beside the Western Palace; MAS-NEAEHL: soundings of 1989 and 1995-2000 found no support for a Hasmonean date. OSM maps three "Small Palace" footprints (ways 737549499, 737549506, 737549507); which is which on the park numbering (19, 20a) is as OSM labels it. Rooms are not drawn.', h: { v: 5, src: 'inferred', note: A + 'one storey' } }); });
  if (mp(737549500)) add({ id: 'c-tanners-tower', kind: 'building', poly: mp(737549500).poly, roof: 'flat', merlon: true, eras: ALL, src: 'osm:way/737549500', replaces: [mp(737549500).id], unreachableOk: true, unreachableNote: 'a solid schematic tower with no door drawn.', name: 'Tanners\' Tower (watchtower) · schematic, 8 m assumed', basis: 'OSM (way 737549500, man_made=tower, tower:type=watchtower, park ref 16): "Tanners\' Tower" beside the Western Palace and the casemate wall. No source read describes it; massing only, at the height of the wall towers.', h: { v: 8, src: 'inferred', note: A + 'the same as the casemate wall towers' } });
  if (mp(737549498)) add({ id: 'c-columbarium', kind: 'building', poly: mp(737549498).poly, roof: 'flat', eras: ALL, src: 'osm:way/737549498', replaces: [mp(737549498).id], unreachableOk: true, unreachableNote: 'a solid schematic drum with no door drawn; the dovecote niches are not drawn.', name: 'Round columbarium tower · schematic, 7 m assumed', basis: 'OSM (way 737549498, "Round Columbarium Tower"); MAS-NEAEHL lists the columbarium among structures that may be Hasmonean; MAS-TRI (the Herodian triclinia article) pictures "the columbarium tower at Masada" without dimensions. Drawn as the mapped round footprint, about 7 m across.', h: { v: 7, src: 'inferred', note: A + 'a small round tower' } });
  if (mp(737549502)) add({ id: 'c-church', kind: 'building', poly: mp(737549502).poly, roof: 'flat', eras: [N], src: 'osm:way/737549502', unreachableOk: true, unreachableNote: 'a solid schematic mass with no door drawn.', name: 'Byzantine church · schematic, 6 m assumed', basis: 'OSM (way 737549502, park ref 24, Wikidata Q110300280): the Byzantine church of the monks who lived at Masada after the revolt (5th-6th centuries; dating from the OSM/Wikidata record, not read in detail). Footprint only; drawn in the present-day era alone.', h: { v: 6, src: 'inferred', note: A + 'a single-storey basilica' } });
  [[737549505, 'Public immersion pool (mikveh)'], [737549520, 'Swimming pool (large pool at the south end)']].forEach(([id, nmx]) => { if (mp(id)) add({ id: `c-pool-${id}`, kind: 'tank', poly: mp(id).poly, eras: id === 737549505 ? ALL : ALL, src: `osm:way/${id}`, replaces: [mp(id).id], unreachableOk: true, unreachableNote: 'a schematic stepped pool drawn as a tank; the steps are not drawn.', name: `${nmx} · schematic`, basis: id === 737549505 ? 'MAS-UNESCO: seven or eight mikvaot, including a large stepped immersion pool south of the Western Palace; OSM (way 737549505, park ref 18) maps it. Footprint only.' : 'MAS-WIKI: a small, deep, stepped pool at the south end completed in the first building phase; OSM (way 737549520) maps the "Swimming Pool". Footprint only; depth is the engine default, not a source.' }); });

  // ---- cistern 1901 beside the synagogue (assumed spot) ----
  if (hasSyn) add({ id: 'c-cistern-1901', kind: 'tank', poly: rectAt([-86, -128], 12, 8, 0), eras: ALL, unreachableOk: true, unreachableNote: 'a schematic cistern drawn as a tank; a rock-cut cistern is entered by steps from above and is not walkable.', name: 'Cistern 1901 (between the synagogue and the north-western entrance) · schematic, position assumed', basis: 'MAS-NEAEHL: cisterns 1901 and 1904 lie between the synagogue and the north-western entrance; 1901 is fed by a channel from "the eight upper cisterns" on the north-west slope. MAS-UNESCO: four large cisterns (4,000 m3 each) about 130 m below the summit and eight (3,000 m3) 50 m higher. Only this summit cistern is placed, at an assumed spot near the synagogue; the slope cisterns and their channels are not drawn.' });

  // ---- Roman ramp, siege tower, circumvallation ----
  const ramp = T.elements.find((e) => e.id === 'road-3');
  if (ramp && ramp.path.some(inBox)) {
    const head = ramp.path[ramp.path.length - 1], away = ramp.path[ramp.path.length - 6] || ramp.path[0];
    const dx = away[0] - head[0], dy = away[1] - head[1], dl = Math.hypot(dx, dy) || 1, u = [dx / dl, dy / dl];
    const c = [+(head[0] + u[0] * 14).toFixed(1), +(head[1] + u[1] * 14).toFixed(1)];
    add({ id: 'c-ramp-platform', kind: 'building', poly: rectAt(c, 22, 22, angOf(u)), roof: 'flat', eras: [R, N], unreachableOk: true, unreachableNote: 'a solid schematic block standing for the stone platform on the ramp head; the real ramp is a sloping bank and a natural rock spur.', name: 'Roman siege ramp, stone platform on the head · schematic, 22 m assumed', basis: 'MAS-JOS 3.305-307: the bank was raised on the White Promontory (the Leuke spur, 300 cubits below the summit) to 200 cubits, and on it a platform of great stones 50 cubits (about 22 m) in breadth and height; MAS-WIKI: the ramp is 114 m high and mostly a natural rock spur; MAS-NEAEHL: it ends about 13 m below the top and the authors believe it was never operational. Drawn at the head of the OSM ramp path (way 72016893), 14 m outside the wall; the bank below it is the DEM spur, not drawn.', h: { v: 22, src: 'inferred', note: A + 'Josephus\' 50 cubits at 0.444 m per cubit; the platform is not found by excavation' } });
    add({ id: 'c-siege-tower', kind: 'tower', at: c, r: 4.5, merlon: false, eras: [R], unreachableOk: true, unreachableNote: 'a solid schematic tower, no stair drawn.', name: 'Roman siege tower (iron-plated) · schematic, 49 m assumed', basis: 'MAS-JOS 3.309: a tower 60 cubits (about 27 m) high, plated with iron; 3.310: the great battering ram was brought up; MAS-BAS: stone ballista balls found in the fortress suggest catapults on the tower. Drawn on the platform, so its top is 22 + 27 m above the ramp head.', h: { v: 49, src: 'inferred', note: A + 'Josephus\' 60 cubits on the 22 m platform; the tower is not found by excavation' } });
  }
  // ---- Roman camps E, F, G and the circumvallation stretches (mapped OSM lines; walls 2 m wide and 2.5 m high, MAS-CAM) ----
  camps.forEach(([id, c]) => { const m = mapped[id]; if (m) add({ id: `c-camp-${c}`, kind: 'wall', path: m.path, closed: true, thick: 2, merlon: false, eras: [R, N], src: `osm:way/${id}`, unreachableOk: true, unreachableNote: 'the camp lies on the plain or on a spur outside the walkable plateau; the 30 m DEM and distance make it unreachable on this route.', name: `Roman camp ${c} wall · schematic, 2.5 m assumed`, basis: `MAS-CAM (Appendix 1): camp walls about 2 m wide and estimated 2.5 m high, eight camps (A-H) tied to the circumvallation; MAS-UNESCO: two camps are large (B east, F north-west) and two smaller, none excavated, soldiers' tent-wall lines survive 1-1.5 m high. The plan is the mapped OSM line (way ${id}), a closed 'wall' with no gate: the camp gates are not mapped and not drawn.`, h: { v: 2.5, src: 'inferred', note: A + 'MAS-CAM estimates 2.5 m for the camp walls; no rampart height is measured' } }); });
  T.elements.filter((e) => /^osm-way-12536327[67]-/.test(e.id)).forEach((e) => add({ id: `c-${e.id}`, kind: 'wall', path: e.path, closed: false, thick: 2, merlon: false, eras: [R, N], src: e.src, unreachableOk: true, unreachableNote: 'the siege wall lies on the plain outside the walkable plateau.', name: 'Roman siege wall · schematic, 2.5 m assumed', basis: 'MAS-CAM: the circumvallation measures about 4,290 m, about 2 m wide and estimated 2-2.5 m high, with 15 towers (about 3.5 m high) at gaps of 61-110 m; MAS-BAS: Josephus says Silva built a wall quite round the fortress (MAS-JOS 7.276). Drawn on the mapped OSM line; the towers are not placed (no mapped tower sites in this window).', h: { v: 2.5, src: 'inferred', note: A + 'MAS-CAM estimate' } }));
  T.constructed = out;

  // ================================================================ eras and documented layer (the mapped lines, carried back)
  const ids = (re) => T.elements.filter((e) => re.test(e.id)).map((e) => e.id);
  const np = ['outline', 'building-55', 'wall-41', 'wall-42', 'wall-44', 'wall-45', 'wall-46', 'wall-47', 'wall-48', 'wall-49', 'wall-52', 'wall-73', 'wall-74', 'wall-77', 'wall-78', 'retaining-wall-53'].filter((i) => T.elements.some((e) => e.id === i));
  const plateau = ['zone-1', 'ground-arid', 'waterway-5', ...ids(/^cliff-/)];
  const hall = ['zone-24', 'zone-30', 'building-83', 'zone-25', 'zone-60', 'zone-61', 'zone-31', 'zone-23', 'zone-84', 'zone-64', 'wall-79', 'wall-81', 'wall-82', 'wall-72'].filter((i) => T.elements.some((e) => e.id === i));
  const syn = ['zone-22', 'wall-67', 'wall-68', 'wall-71', 'building-70', 'zone-85'].filter((i) => T.elements.some((e) => e.id === i));
  const snake = ['road-8', 'road-39', 'road-40'].filter((i) => T.elements.some((e) => e.id === i));
  const rampDocs = ['road-3'].filter((i) => T.elements.some((e) => e.id === i));
  const siege = ['wall-10', ...ids(/^wall-10-p/)].filter((i) => T.elements.some((e) => e.id === i));
  const osmIds = (...ids2) => ids2.filter((i) => T.elements.some((e) => e.id === i));
  const palaces = osmIds('osm-way-737549501', 'osm-way-737549499', 'osm-way-737549506', 'osm-way-737549507', 'osm-way-737549500', 'osm-way-737549498', 'osm-way-737549505', 'osm-way-737549520');
  const romanLines = T.elements.filter((e) => /^osm-way-(87684121|87684153|87684132|12536327[67])/.test(e.id)).map((e) => e.id);
  const keep4 = [...np, ...plateau, ...hall, ...syn, ...snake, ...palaces, ...osmIds('osm-node-6905359784', 'road-33', 'road-32')];
  carryOver(T, B, keep4, { note: 'the mapped footprint is assumed to follow the Herodian plan (the Yadin excavations uncovered Herodian foundations here); no plan was read to separate Herodian from later phases' });
  carryOver(T, R, [...keep4, ...rampDocs, ...siege, ...romanLines], { note: 'the mapped footprint is assumed unchanged since 73 CE; the rebels altered the casemate rooms and the synagogue, which the mapped line does not separate' });
  T.eras = [
    { id: B, year: 'c. 4 BCE', label: 'Herod\'s fortress', short: 'c. 4 BCE', lens: 'none',
      summary: 'Herod\'s Masada at the end of his reign: the casemate wall with its towers and gates round the whole plateau, the Northern Palace on three terraces at the north tip, the Western Palace, the storeroom complex, the large bathhouse and the barracks.',
      basis: 'MAS-WIKI: Herod built in three phases (from 35 BC, 25 BC and 15 BC): palaces, storerooms, barracks, the casemate wall and the cisterns; MAS-JOS 7.286-7.294 describes the wall, the towers, the western palace and the water pits. The documented layer is only the OSM lines carried back; every wall, tower and building is on the constructed layer.',
      conjecture: 'No Yadin or Netzer plan was read, so no wall, tower, gate or room is placed from a survey: wall and towers follow the mapped plateau boundary and are assumed, the palace terraces follow OSM footprints that may not be the rooms named here, the Western Palace position is an assumption (+-50 m). Heights are assumed. The 30 m DEM does not show the 20 m and 15 m terrace drops, so the three palace levels are drawn on one sloping surface. Not drawn: the 70 casemate rooms, the 18 storerooms, the porticos and baths of the palace, the small palaces, the columbarium, the mikvaot and the slope cisterns.',
      sources: ['MAS-UNESCO', 'MAS-NEAEHL', 'MAS-WIKI', 'MAS-ENCY', 'MAS-JVL', 'MAS-JOS', 'MAS-LIB', 'MAS-TRI'],
      facts: ['MAS-WIKI: Herod captured Masada in 43 BC and, per Josephus, built the fortress between 37 and 31 BC; the building phases begin in 35, 25 and 15 BC (the large food storage complex dates to the 25 BC phase).', 'MAS-UNESCO: casemate wall 1290 m long with nearly 70 rooms, 27 towers and three gates (Western, Southern, Snake Path); the Water Gate to the Northern Palace is not part of it; the Northern Palace stands on three rock terraces with two cisterns beneath it.', 'MAS-JOS 7.286-7.289: the wall was seven furlongs round, 12 cubits high and 8 broad, with 38 towers of 50 cubits; the palace at the western ascent had corner towers of 60 cubits.', 'MAS-ENCY: the Northern Palace middle terrace lies about 20 m below the upper, the lower about 15 m below the middle; the upper terrace has a semicircular balcony, the lower a small bathhouse.', 'MAS-UNESCO: twelve cisterns, four of 4,000 m3 about 130 m below the summit and eight of 3,000 m3 some 50 m higher; MAS-WIKI: about 40,000 m3 in all.'] },
    { id: R, year: '73 CE', label: 'Roman siege', short: '73 CE', lens: 'none',
      summary: 'The fortress as the Sicarii held it in the final siege under Flavius Silva (Legio X Fretensis), with the Roman ramp built against the western wall and the stone platform and siege tower on its head, the synagogue in use, and the circumvallation on the plain.',
      basis: 'MAS-WIKI: the siege ended in spring 73 CE (also given as 73/74), the ramp finished after two to three months; MAS-JOS 3.305-3.318 (bank, platform, tower, ram, burning of the wooden inner wall); MAS-CAM and MAS-BAS: eight camps, a circumvallation about 4,300 m long with 15 towers.',
      conjecture: 'The Herodian layout is carried over unchanged: the rebels altered the casemate rooms into dwellings, added mikvaot and rebuilt the synagogue, none of which is drawn. The ramp is drawn as Josephus describes it; the excavators (MAS-NEAEHL) think it was never operational and ended 13 m below the top, so the platform and tower are a literary reading. The ramp bank itself is the DEM spur. The Roman camps (about 500-700 m away, camps B east and F north-west) and the circumvallation towers lie outside the mapped window and are not drawn; only the mapped east stretch of the siege wall (OSM way 125359423) appears, as a kerb-high line.',
      sources: ['MAS-JOS', 'MAS-WIKI', 'MAS-NEAEHL', 'MAS-CAM', 'MAS-BAS', 'MAS-SYN', 'MAS-UNESCO'],
      facts: ['MAS-JOS 3.305-3.310: Silva\'s bank rose on the White Promontory, 300 cubits under the summit, to 200 cubits; on it a platform 50 cubits broad and high, a tower of 60 cubits plated with iron, and the great ram.', 'MAS-WIKI: Romans breached the wall with a ram on 16 April (73 CE); the ramp is 114 m high and mostly a natural rock spur (geological work of the early 1990s).', 'MAS-CAM: eight camps (A-H), the circumvallation about 4,290 m long, 2 m wide, with 15 towers about 3.5 m high; one tower stands about 300 m from the lower Northern Palace.', 'MAS-SYN: the synagogue, in the casemate wall on the north-west, was rebuilt by the rebels with four tiers of benches and a genizah chamber in which Deuteronomy and Ezekiel fragments were hidden.'] },
    { id: N, year: 'Today', label: 'National park', short: 'Park', lens: 'none',
      summary: 'Masada as excavated by Yigael Yadin (1963-65) and restored: the casemate wall and towers in part, the Northern Palace terraces, the storerooms, the large bathhouse and the synagogue, with the Roman ramp earthwork on the west and the siege wall remains on the plain.',
      basis: 'MAS-NEAEHL: excavations mainly 1963-65 under Yadin with restoration in step; MAS-WIKI: UNESCO World Heritage Site, the Snake Path (about 301 m climb) and the Roman ramp are walked by visitors. The documented layer is the OSM map as it stands.',
      conjecture: 'The constructed layer draws the Herodian fabric at full assumed height; most of it stands lower or is restored in part, and the extent of restoration was not read, so this is a reading, not a survey of what survives. No dated plan or photograph of the present state was read. The mapped paths (the Snake Path top, the modern ramp path) are as OSM records them.',
      sources: ['MAS-NEAEHL', 'MAS-WIKI', 'MAS-UNESCO'],
      facts: ['MAS-WIKI: the plateau is about 550 x 270 m, the cliff drops about 400 m to the east and about 90 m to the west; the Snake Path gains about 301 m.', 'MAS-NEAEHL: the synagogue, the Western Palace and the small palaces were reopened by later soundings (1989, 1995-2000), which found no pottery supporting a Hasmonean date for the palaces.', 'MAS-UNESCO: Roman camps are recorded but none has been excavated; the soldiers\' tent-wall lines survive 1-1.5 m high.'] },
  ];
}
