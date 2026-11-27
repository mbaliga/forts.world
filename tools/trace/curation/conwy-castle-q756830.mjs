// Curation for Conwy Castle (Edward I, 1283-87), world-fort batch. Evidence and conflicts: docs/research/conwy-castle-q756830-pass.md.
// Mapped layer: OSM already carries the castle in detail (outline, both ward curtains, all eight towers as circles plus four named tower footprints,
// four stair turrets, the barbican lines, the Granary footprint, the Great Hall and north-range footing lines) with OSM height tags; the town walls are mapped
// as one 565-vertex closed ring that leaves the 424 m window, so it is clipped here. No plan was found, so there is no plan registration: positions are OSM,
// meanings are from Wikipedia, Cadw (listing and scheduled-monument text), the Gatehouse Gazetteer, Castles of Wales and World History Encyclopedia.
import { carryOver, levelInlandWaters, sampleAlong } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'needs-plan';
export const HEADER = [
  'Conwy Castle, Conwy, Wales. Hand-curated trace: tier T1 for position (OSM-mapped castle and town-wall lines with OSM height tags; no plan found) plus a schematic constructed layer for 1287.',
  'Base: data/traces/conwy-castle-q756830.trace.json (OSM ODbL; Terrarium z15 every 5 m, ~30 m SRTM-derived). Closed ring way 150098557 (town walls) is clipped to the terrain window.',
  'The constructed (schematic) layer in `constructed[]` is drawn from written descriptions with assumed heights and is shown only in the `1287~built` era. Documented heights: the OSM tags (towers 26 m, curtains 18 m) and Cadw "at least 6 m" for the town wall.',
];

const CADW_TW = 'plan:cadw-sam-cn014#description';
const inWin = (q) => Math.abs(q[0]) <= 210 && Math.abs(q[1]) <= 210;
const nearestOn = (p, path) => { let best = [1e9, null]; for (let i = 0; i < path.length - 1; i++) { const a = path[i], b = path[i + 1], dx = b[0] - a[0], dy = b[1] - a[1], t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy || 1))), q = [a[0] + dx * t, a[1] + dy * t], d = Math.hypot(p[0] - q[0], p[1] - q[1]); if (d < best[0]) best = [d, q]; } return best; };
const r1 = (v) => +v.toFixed(1);

export default function curate(T, h) {
  console.error(`${T.id}: derived a surface level for ${levelInlandWaters(T, h)} inland water bodies`);

  // ---- estuary: the pipeline's two derived sea polygons are not usable as they stand -------------------------------------------------------------------------
  // sea-1 (closed along the east-bank coastline way, way 2977893) fills the whole window; it is dropped. sea-0 (closed along the coast hugging the castle) is the right side of
  // the way (heading along the south coast with water on the right, then north along the castle's east bank), but its closing edge runs down the window boundary through the
  // land on the far (east) bank, so the closing edge is detoured along the east-bank coastline way. The DEM check fails on both because the SRTM-derived tiles read the tidal
  // flats as land (11.5 m inside against 12 m outside); the water side is therefore taken from the way directions, not from the DEM, and stays doubtful.
  h.remove('sea-1');
  {
    const sea = h.byId('sea-0'), east = h.byId('coastline-11').path.filter((q, i) => i >= 77 && i <= 116);
    const tail = sea.poly[sea.poly.length - 1];                               // [211.82, 211.82]
    sea.poly = [...sea.poly, [tail[0], 138.15], ...east, [tail[0], 42.97]];
    sea.note = `${sea.note || ''} Closing edge detoured round the east-bank land along coastline way 2977893 (the Gyffin/Deganwy side); the water side is read from the way directions because the DEM check fails over the tidal flats.`;
    sea.name = 'Conwy estuary and tidal creek · derived from the OSM coastline, doubtful';
  }

  // ---- town walls: clip the closed ring to the window, keep the two long runs (each is an out-and-back pair of wall faces) ------------------------------
  const ring = h.byId('wall-43').path;
  const runs = []; let s = null;
  ring.forEach((q, i) => { if (inWin(q) && s === null) s = i; if (!inWin(q) && s !== null) { runs.push([s, i - 1]); s = null; } });
  if (s !== null) runs.push([s, ring.length - 1]);
  const big = runs.filter(([a, b]) => b - a > 20);
  const townFaces = [];
  big.forEach(([a, b], k) => {
    const P = ring.slice(a, b + 1);
    let ti = 0; P.forEach((q, i) => { if (k === 0 ? q[0] > P[ti][0] : q[1] < P[ti][1]) ti = i; });   // turning point: east-most (south run) or south-most (river-side run)
    const A = P.slice(0, ti + 1), B = P.slice(ti).reverse();
    townFaces.push({ k, A, B });
    h.add({ id: `wall-town-${k ? 'river' : 'south'}`, kind: 'wall', path: P, closed: false, src: 'osm:way/150098557', ev: 'mapped', conf: 0.7,
      h: { v: 6, src: CADW_TW, note: 'Cadw scheduled-monument text: at least 6 m on the outer face, varying with the ground; a minimum, and the OSM way has no height tag' },
      name: k ? 'Conwy Town Walls, river-side (north-east) run · mapped (OSM way 150098557, clipped to the window)' : 'Conwy Town Walls, south run · mapped (OSM way 150098557, clipped to the window)',
      note: `OSM maps the town walls as one closed ring of ${ring.length} vertices that traces both wall faces; vertices ${a}-${b} fall inside the 424 m window and are kept here, the rest are dropped. The walls (about 1.3 km, 21 towers, 3 gates) are mostly outside the window.` });
  });
  h.remove('wall-43');

  // ---- names and notes on the mapped castle --------------------------------------------------------------------------------------------------------------
  h.byId('outline').name = 'Conwy Castle outline · mapped (OSM way 52467063)';
  const N = (id, name, note) => { const e = h.byId(id); e.name = name; if (note) e.note = note; };
  const TOWER_NOTE = 'OSM tags this tower 26 m high (wall ring) and 25 m (footprint). Wikipedia gives about 70 ft (21 m): the two differ and neither is a survey.';
  N('wall-200', 'North-west tower of the outer ward · mapped (OSM way 240020743)', TOWER_NOTE + ' Cadw: the NW and SW towers form a pair, two superimposed newel stairs.');
  N('wall-205', 'South-west tower of the outer ward · mapped (OSM way 240020751)', TOWER_NOTE + ' Cadw: pairs with the NW tower, two superimposed newel stairs.');
  N('wall-198', 'Kitchen Tower, middle of the north side of the outer ward · mapped (OSM way 240020738)', TOWER_NOTE + ' Cadw: ruined newel stair.');
  N('wall-172', 'Prison Tower, middle of the south side of the outer ward · mapped (OSM way 205113984)', TOWER_NOTE + ' Cadw and Castles of Wales: a dungeon in its base; the Great Hall fireplace backs on it.');
  N('wall-206', 'Stockhouse Tower (ring) · mapped (OSM way 240020762)', TOWER_NOTE + ' Shared by the inner and outer wards (Cadw, Gatehouse Gazetteer); the town wall joins it.');
  N('building-182', 'Stockhouse Tower · mapped footprint (OSM way 240020707)');
  N('wall-199', 'Bakehouse Tower (ring) · mapped (OSM way 240020740)', TOWER_NOTE + ' Shared by the inner and outer wards (Cadw, Gatehouse Gazetteer).');
  N('building-174', 'Bakehouse Tower · mapped footprint (OSM way 205113990)');
  N('wall-202', 'King\'s Tower (ring) · mapped (OSM way 240020746)', TOWER_NOTE + ' Private royal rooms. Position conflict: OSM puts it at the south-east corner of the inner ward; the Cadw listing text says "SW king\'s tower", read here as a slip because the SW and NW towers are the outer-ward pair. OSM position kept.');
  N('building-169', 'King\'s Tower · mapped footprint (OSM way 205113980)');
  N('wall-203', 'Chapel Tower (ring), north-east of the inner ward · mapped (OSM way 240020749)', TOWER_NOTE + ' Contains the round, rib-vaulted royal chapel with an apsidal sanctuary on the first floor (Cadw); restored conical slate roof.');
  N('building-168', 'Chapel Tower · mapped footprint (OSM way 205113978)');
  for (const [id, who] of [['building-156', 'Bakehouse Tower'], ['building-157', 'King\'s Tower'], ['building-158', 'Stockhouse Tower'], ['building-159', 'Chapel Tower']]) N(id, `Stair turret beside the ${who} · mapped footprint (OSM)`, 'A small round footprint tagged 30 m high in OSM; read as the newel-stair turret that rises above the tower (Cadw lists a newel stair in each), identification inferred.');
  N('wall-208', 'Outer ward curtain, inner face · mapped (OSM way 240020770)', 'Closed line round the outer ward interior, OSM height tag 18 m. The outer faces are separate mapped lines; no gate is mapped on any wall, so the ring is sealed on this layer.');
  N('wall-204', 'Inner ward curtain · mapped (OSM way 240020750)', 'Closed line round the smaller, near-square inner ward to the east, OSM height tag 18 m.');
  N('wall-170', 'West barbican wall · mapped line (OSM), turrets not mapped', 'The mapped line west of the outer ward, beside the OSM path "West Barbican". Gatehouse Gazetteer: an almost straight wall with 3 turrets; Wikipedia: the earliest surviving stone machicolations in Britain. The turrets are not separately mapped; the identification of this line is inferred from its position.');
  N('wall-195', 'East barbican wall · mapped (OSM, closed line, tagged 5 m)', 'Faceted line east of the inner ward. Gatehouse Gazetteer: the east barbican has 3 turrets similar to the west and may have been a garden; entered from the Water Gate. Identification inferred from position.');
  N('building-226', 'East barbican interior · mapped footprint (OSM way 240032497)', 'Tagged 4 m. Read as the castle garden within the east barbican (Wikipedia, Gatehouse Gazetteer); identification inferred.');
  N('wall-207', 'Granary · mapped footings (OSM way 240020765, named "Granary")', 'Mapped footing line in the inner ward, named Granary in OSM; World History Encyclopedia lists a granary in the inner ward.');
  N('wall-209', 'North range footing line, outer ward · mapped (OSM way 240020772)', 'Footing line parallel to the north curtain. Cadw: the kitchen and stables on the north side survive only as footings; Wikipedia: a service range of kitchen, brewhouse and bakehouse. Identification inferred from position.');
  for (const id of ['wall-136', 'wall-176', 'wall-179', 'wall-180', 'wall-177']) h.byId(id).note = 'One of the five mapped footing lines that bound the Great Hall in the south range of the outer ward (identification inferred from position; Cadw: Great Hall in the central facet of the south range, about 38 m (125 ft) long per Castles of Wales, up to 30 m per World History Encyclopedia).';
  h.byId('wall-136').name = 'Great Hall north wall line · mapped (OSM), identification inferred';
  N('wall-147', 'Small square mapped footprint at the cross wall · mapped (OSM way 204966436)', 'A 4 m square at the cross wall between the wards. Gatehouse Gazetteer describes a small square gatehouse guarding the middle gate; identification inferred from position.');

  h.byId('wall-147').unreachableOk = true; h.byId('wall-147').unreachableNote = 'the 4 m square sits inside the mapped cross wall between the wards, so it is not a place to stand.';
  for (const id of ['marker-4', 'marker-8', 'marker-9']) { const m = h.byId(id); m.unreachableOk = true; m.unreachableNote = 'an east-bank memorial point where the SRTM-derived DEM reads about 23 m beside the river, a high artefact beyond the bridge; not walkable from the castle side.'; }

  // ---- 1287 as the mapped lines carried back --------------------------------------------------------------------------------------------------------------
  const castle = ['outline', 'wall-200', 'wall-205', 'wall-198', 'wall-172', 'wall-206', 'building-182', 'wall-199', 'building-174', 'wall-202', 'building-169', 'wall-203', 'building-168',
    'building-156', 'building-157', 'building-158', 'building-159', 'wall-208', 'wall-204', 'wall-170', 'wall-195', 'building-226', 'wall-207', 'wall-209', 'wall-147',
    'wall-136', 'wall-176', 'wall-179', 'wall-180', 'wall-177', 'wall-175', 'wall-150', 'wall-153', 'wall-166', 'wall-227', 'wall-228', 'wall-229', 'wall-230', 'wall-231', 'wall-232', 'wall-233', 'wall-234',
    'wall-173', 'wall-181', 'wall-383', 'wall-384', 'wall-53'];
  const natural = ['sea-0', 'coastline-10', 'coastline-11', 'coastline-19', 'waterway-275', 'waterway-381', 'water-250', 'water-251', 'water-252'];
  const keep = castle.concat(['road-140'], natural, ['wall-town-south', 'wall-town-river']).filter((id) => T.elements.some((e) => e.id === id));
  carryOver(T, '1287', keep, { note: 'the mapped castle and town-wall lines are assumed unchanged in plan since completion in 1287; the walls were slighted in 1655 and stripped in 1665, so today\'s OSM heights are not 1287 values. The railway and road bridges, the town buildings and the modern paths are dropped' });

  // ---- constructed (schematic) layer: 1287 ---------------------------------------------------------------------------------------------------------------
  const E1 = ['1287'], C = [];
  const mid = (A, B) => A.map((p) => { const [, q] = nearestOn(p, B); return [r1((p[0] + q[0]) / 2), r1((p[1] + q[1]) / 2)]; });
  const dedupe = (P) => P.filter((p, i) => !i || Math.hypot(p[0] - P[i - 1][0], p[1] - P[i - 1][1]) > 0.5);
  const CURT = 'Wikipedia: a rectangular plan with an outer ward (west) and an inner ward (east) split by a cross wall, eight towers about 70 ft (21 m) high; Cadw and Castles of Wales: curtain on a common battlement line, originally white-plastered.';
  const wall208 = h.byId('wall-208'), wall204 = h.byId('wall-204');
  C.push({ id: 'c-outer-curtain', kind: 'wall', path: wall208.path, closed: true, thick: 5, merlon: true, stands_for: 'wall-208', replaces: ['wall-208', 'wall-228', 'wall-230', 'wall-231', 'wall-232', 'wall-233', 'wall-234', 'wall-229'], eras: E1, src: wall208.src, ev: 'schematic', conf: 0.2,
    name: 'Outer ward curtain · schematic, 18 m assumed, battlements drawn', basis: `Drawn on the mapped inner face of the outer ward, 5 m thick so it also covers the separately mapped outer-face lines it replaces (OSM ways 240032817-23). ${CURT} Merlons are the common battlement the sources describe; their form is not read from a plan.`, h: { v: 18, src: 'inferred', note: 'taken from the OSM height tag 18 m on the mapped curtain; Wikipedia gives about 21 m for the towers only' } });
  C.push({ id: 'c-inner-curtain', kind: 'wall', path: wall204.path, closed: true, thick: 4.5, merlon: true, stands_for: 'wall-204', replaces: ['wall-204', 'wall-227'], eras: E1, src: wall204.src, ev: 'schematic', conf: 0.2,
    name: 'Inner ward curtain · schematic, 18 m assumed, battlements drawn', basis: `Drawn on the mapped inner ward line, 4.5 m thick so it also covers the mapped outer-face line it replaces (OSM way 240032498). ${CURT}`, h: { v: 18, src: 'inferred', note: 'OSM height tag 18 m on the mapped line' } });

  const TW = [['wall-200', 'wall-200', 'North-west tower'], ['wall-205', 'wall-205', 'South-west tower'], ['wall-198', 'wall-198', 'Kitchen Tower'], ['wall-172', 'wall-172', 'Prison Tower'],
    ['wall-206', 'building-182', 'Stockhouse Tower'], ['wall-199', 'building-174', 'Bakehouse Tower'], ['wall-202', 'building-169', 'King\'s Tower'], ['wall-203', 'building-168', 'Chapel Tower']];
  const roles = { 'North-west tower': 'Cadw: the NW and SW towers form a pair, each with two superimposed newel stairs.', 'South-west tower': 'Cadw: the NW and SW towers form a pair, each with two superimposed newel stairs.', 'Kitchen Tower': 'Cadw: in the centre of the north side of the outer ward, ruined newel stair; the north range kitchens stood beside it.', 'Prison Tower': 'Cadw and Castles of Wales: on the south side of the outer ward with a dungeon in its base.', 'Stockhouse Tower': 'Cadw: shared by the inner and outer wards.', 'Bakehouse Tower': 'Cadw: shared by the inner and outer wards.', 'King\'s Tower': 'Wikipedia and Castles of Wales: further private royal rooms.', 'Chapel Tower': 'Cadw: a round rib-vaulted royal chapel with an apsidal sanctuary on its first floor; restored conical slate roof (not drawn).' };
  for (const [wid, bid, nm] of TW) {
    const w = h.byId(wid), pts = w.path, cx = pts.reduce((a, p) => a + p[0], 0) / pts.length, cy = pts.reduce((a, p) => a + p[1], 0) / pts.length;
    const rad = pts.reduce((a, p) => a + Math.hypot(p[0] - cx, p[1] - cy), 0) / pts.length;
    C.push({ id: `c-${nm.toLowerCase().replace(/[^a-z]+/g, '-').replace(/-$/, '')}`, kind: 'tower', at: [r1(cx), r1(cy)], r: r1(rad), merlon: true, replaces: bid === wid ? [wid] : [wid, bid], eras: E1, src: w.src, ev: 'schematic', conf: 0.25,
      name: `${nm} · schematic, 26 m assumed, battlements drawn`, basis: `Raised on the mapped circle (centre and radius from the OSM ring, radius ${r1(rad)} m). ${roles[nm]} Eight massive drum towers about 70 ft (21 m) tall (Wikipedia); no floor levels or roofs are drawn.`, h: { v: 26, src: 'inferred', note: 'OSM tags the ring 26 m; Wikipedia says about 21 m; the OSM tag is kept as the mapped value' } });
  }

  const wb = h.byId('wall-170');
  C.push({ id: 'c-west-barbican', kind: 'wall', path: wb.path, closed: false, thick: 2.2, merlon: true, stands_for: 'wall-170', replaces: ['wall-170'], eras: E1, src: wb.src, ev: 'schematic', conf: 0.2,
    name: 'West barbican wall · schematic, 9 m assumed', basis: 'Drawn on the mapped line west of the outer ward. Gatehouse Gazetteer: an almost straight wall with 3 turrets, the lower outwork at the main entrance, reached by a long stepped ramp and defended by a drawbridge and portcullis (Castles of Wales). Wikipedia: earliest surviving stone machicolations in Britain (not drawn).',
    h: { v: 9, src: 'inferred', note: 'assumed: a lower outwork, about half the 18 m curtain; no height is given in any source read' } });
  sampleAlong(wb.path, 14, { closed: false, start: 0.5 }).slice(0, 3).forEach((sm, i) => {
    C.push({ id: `c-west-barbican-turret-${i + 1}`, kind: 'tower', at: sm.at, r: 2.6, merlon: true, eras: E1, src: 'inferred', ev: 'schematic', conf: 0.15,
      name: `West barbican turret ${i + 1} · schematic, 12 m assumed, position assumed`, basis: 'Gatehouse Gazetteer says the west barbican wall has 3 turrets; their positions and size are not given, so they are spaced evenly along the mapped line.', h: { v: 12, src: 'inferred', note: 'assumed 3 m above the 9 m barbican wall' } });
  });
  const eb = h.byId('wall-195');
  C.push({ id: 'c-east-barbican', kind: 'wall', path: eb.path, closed: true, thick: 1.8, merlon: true, stands_for: 'wall-195', replaces: ['wall-195'], eras: E1, src: eb.src, ev: 'schematic', conf: 0.2,
    name: 'East barbican wall · schematic, 8 m assumed', basis: 'Drawn on the mapped faceted line east of the inner ward. Gatehouse Gazetteer: the east barbican has 3 turrets like the west and is entered from the Water Gate; it may have been a garden (Wikipedia: an eastern barbican enclosing the castle garden).',
    h: { v: 8, src: 'inferred', note: 'assumed lower than the curtain; the OSM tag on this line is 5 m but it is a footing line today' } });
  sampleAlong(eb.path, 22, { closed: true, start: 0.3 }).slice(0, 3).forEach((sm, i) => {
    C.push({ id: `c-east-barbican-turret-${i + 1}`, kind: 'tower', at: sm.at, r: 2.6, merlon: true, eras: E1, src: 'inferred', ev: 'schematic', conf: 0.15,
      name: `East barbican turret ${i + 1} · schematic, 11 m assumed, position assumed`, basis: 'Gatehouse Gazetteer says the east barbican has 3 turrets similar to the west; positions are not given, so they are spaced along the mapped line.', h: { v: 11, src: 'inferred', note: 'assumed 3 m above the 8 m barbican wall' } });
  });

  // gates: no gate is mapped; each says how it was placed
  const gateOn = (wid, pt, id, name, basis, w = 4) => { const wall = C.find((c) => c.id === wid), [d, q] = nearestOn(pt, wall.path); C.push({ id, kind: 'gate', wall: wall.stands_for, at: [r1(q[0]), r1(q[1])], w, eras: E1, src: 'inferred', ev: 'schematic', conf: 0.2, name: `${name} · schematic opening, position approximate (${d.toFixed(0)} m from the reference)`, basis }); };
  gateOn('c-outer-curtain', [-51.2, -5], 'c-gate-west', 'Main west gate', 'Gatehouse Gazetteer: the main entrance from the town, a pointed arch with portcullis slots flanked by round turrets, reached through the west barbican. Placed on the west curtain where the OSM path "West Barbican" reaches it (between the NW and SW towers); the passage form is not drawn.');
  gateOn('c-west-barbican', [-60.0, 1.5], 'c-gate-barbican', 'West barbican entrance', 'The OSM path "West Barbican" starts at the mapped barbican line here; Castles of Wales: the west barbican is reached by a long stepped ramp and defended by a drawbridge and portcullis. The barbican has to open somewhere for the main gate behind it to be reached; the stair, drawbridge and portcullis are not drawn.', 3.5);
  const sq = h.byId('wall-147').path.reduce((a, p) => [a[0] + p[0] / 3, a[1] + p[1] / 3], [0, 0]);
  gateOn('c-outer-curtain', sq, 'c-gate-middle-outer', 'Middle gate (outer face of the cross wall)', 'Gatehouse Gazetteer and Castles of Wales: a middle gate with a small square gatehouse and a drawbridge over a rock-cut ditch separates the wards. Placed beside the 4 m square footprint (OSM way 204966436) at the cross wall; the ditch is not drawn.', 3.5);
  gateOn('c-inner-curtain', sq, 'c-gate-middle-inner', 'Middle gate (inner face of the cross wall)', 'The cross wall is two mapped lines about 3.5 m apart; the opening is cut through both. See the middle gate note.', 3.5);
  gateOn('c-inner-curtain', [34.0, 1.2], 'c-gate-east', 'East gate into the inner ward', 'Gatehouse Gazetteer: an east gate into the inner ward with draw-bar sockets, from the east barbican. Placed on the east side of the mapped inner ward line between the King\'s and Chapel Towers; no source gives its exact position.', 3.5);

  Object.assign(C.find((c) => c.id === 'c-gate-east'), { unreachableOk: true, unreachableNote: 'the opening gives onto the east barbican, whose mapped footprint (building 240032497) is drawn as a solid 4 m mass, and the Water Gate that let the barbican open to the river has no mapped position.' });

  // buildings: footprints from the mapped footing lines; heights assumed
  const SOLID = 'a solid schematic mass with no stair or door drawn; look at it from the ward.';
  const hallPoly = [[-37.75, -9.9], [-27.13, -12.22], [-15.63, -12.13], [-9.56, -9.51], [-4.96, -7.54], [-0.9, -16.35], [-13.23, -21.51], [-25.35, -21.8], [-40.27, -18.77]];
  C.push({ id: 'c-great-hall', kind: 'building', poly: hallPoly, roof: 'flat', arches: true, eras: E1, src: 'osm:way/204899600', ev: 'schematic', conf: 0.2, unreachableOk: true, unreachableNote: SOLID,
    name: 'Great Hall · schematic, 12 m assumed', basis: 'Footprint closed from the five mapped footing lines (OSM ways 204899600, 219157245-47-50) and the mapped south curtain face. Cadw: great hall in the central facet of the south range, fireplace against the Prison Tower; Castles of Wales: bow-shaped, about 125 ft (38 m) long; World History Encyclopedia: up to 30 m; the mapped footprint is about 38 m. Roof, windows and floors are not drawn.',
    h: { v: 12, src: 'inferred', note: 'assumed one tall hall storey plus roof, two-thirds of the 18 m curtain; no height is given in any source read' } });
  const nRange = [[-39.06, 5.17], [-37.9, 0.56], [-24.16, 0.67], [-7.12, 2.43], [-6.28, 10.5], [-18.25, 8.61], [-20.03, 6.55], [-23.68, 5.4], [-27.23, 6.21], [-29.95, 6.66]];
  C.push({ id: 'c-north-range', kind: 'building', poly: nRange, roof: 'flat', eras: E1, src: 'osm:way/240020772', ev: 'schematic', conf: 0.15, unreachableOk: true, unreachableNote: SOLID,
    name: 'North service range (kitchen, brewhouse, bakehouse) · schematic, 6 m assumed', basis: 'Between the mapped footing line and the north curtain face. Wikipedia: a service range with a kitchen, brewhouse, bakehouse and kitchen tower on the north side of the outer ward; Cadw: kitchen and stables on the north, only footings survive. Which room is where is not given.',
    h: { v: 6, src: 'inferred', note: 'assumed one storey plus roof; the range is not described in height' } });
  C.push({ id: 'c-granary', kind: 'building', poly: h.byId('wall-207').path, roof: 'flat', eras: E1, replaces: ['wall-207'], src: 'osm:way/240020765', ev: 'schematic', conf: 0.2, unreachableOk: true, unreachableNote: SOLID,
    name: 'Granary, inner ward · schematic, 8 m assumed', basis: 'Raised on the mapped footings named Granary in OSM. World History Encyclopedia: the inner ward held the royal residence, a granary and the private chapel.', h: { v: 8, src: 'inferred', note: 'assumed two storeys at about 4 m; no height given' } });
  const sRange = [[8.51, -5], [11.56, -4.46], [14.82, -3.87], [20.29, -2.88], [24.99, -2.08], [34.02, -0.57], [34.24, -3.58], [32.28, -4.96], [30.47, -7.77], [22.72, -9], [15.93, -10.28], [13.04, -10.82], [12.2, -10.54], [8.96, -9.45]];
  C.push({ id: 'c-inner-south-range', kind: 'building', poly: sRange, roof: 'flat', eras: E1, src: 'osm:way/204966443', ev: 'schematic', conf: 0.15, unreachableOk: true, unreachableNote: SOLID,
    name: 'Inner ward south range (royal apartments, one of the ranges) · schematic, 10 m assumed', basis: 'Between the mapped footing line (OSM way 204966443) and the south face of the inner ward. Cadw and Wikipedia: buildings ranged against the inner ward walls including the king\'s private apartments, principal rooms on the first floor over heated basements, all floors now gone. Which range held the hall, presence chamber and privy rooms is not given, so only this range is drawn.',
    h: { v: 10, src: 'inferred', note: 'assumed basement plus first floor at about 5 m each' } });

  // town walls: midline of the two mapped faces, with towers at the mapped bulges
  townFaces.forEach((f) => {
    const id = f.k ? 'river' : 'south';
    C.push({ id: `c-town-wall-${id}`, kind: 'wall', path: dedupe(mid(f.A, f.B)), closed: false, thick: 2.4, merlon: true, stands_for: `wall-town-${id}`, replaces: [`wall-town-${id}`], eras: E1, src: 'osm:way/150098557', ev: 'schematic', conf: 0.2,
      name: `Town wall, ${f.k ? 'river-side run' : 'south run'} · schematic, 7 m assumed, battlements drawn`, basis: 'Midline of the two mapped wall faces of OSM way 150098557, clipped to the window. Wikipedia: about 1.3 km, 21 towers, wall-walk on corbels; Cadw: at least 6 m on the outer face. The east (river) wall was 3.6 m high in places before being raised in the early 14th century (Wikipedia), so the river-side run may have been lower in 1287; not drawn.',
      h: { v: 7, src: 'inferred', note: 'Cadw "at least 6 m" plus about 1 m for the parapet; towers up to 15 m' } });
  });
  [[-188.35, -18.2, 's1'], [-142.7, -23.6, 's2'], [-96.55, -27.15, 's3'], [-126, 165.5, 'r1'], [-89.6, 125.9, 'r2'], [-50.1, 84.4, 'r3']].forEach(([x, y, k]) => C.push({ id: `c-town-tower-${k}`, kind: 'tower', at: [x, y], r: 4.2, merlon: true, eras: E1, src: 'osm:way/150098557', ev: 'schematic', conf: 0.2,
    name: `Town wall tower ${k} · schematic, 12 m assumed`, basis: 'A bulge in the mapped wall ring (OSM way 150098557), centre read from the bulge, drawn round at 4.2 m radius although Cadw calls the towers D-shaped and gap-backed; of the 21 towers only those inside the window are drawn.', h: { v: 12, src: 'inferred', note: 'between the 6 m wall and the Cadw "up to 15 m" for towers' } }));
  for (const c of C) if (c.kind === 'wall') { c.unreachableOk = true; c.unreachableNote = 'a schematic wall-top with no stair drawn; walk along its foot.'; }
  T.constructed = C;

  // ---- eras ----------------------------------------------------------------------------------------------------------------------------------------------
  T.eras = [
    { id: '1287', year: '1287', label: 'Completed under Edward I', short: '1287', lens: 'none',
      summary: 'Edward I\'s castle and walled town at the mouth of the Conwy, finished in about four years under Master James of St George: eight drum towers, an outer and an inner ward, two barbicans, a Great Hall and the royal apartments.',
      basis: 'Wikipedia: Edward I took Aberconwy in March 1283; the ditch was begun within days, the outer walls and towers were built 1283-84 and the interiors 1284-86; complete by 1287 (infobox 1283-89). The town walls were built 1283-87 (World History Encyclopedia, Wikipedia). The drawn plan is the present OSM line carried back, marked inferred.',
      conjecture: 'No plan, survey drawing or dated image was read. Heights and roofs are the constructed layer\'s assumptions. The rock-cut ditch, the stepped ramp, the Water Gate, the spur wall and the outer-ward chapel are not placed (no position in any source read). The town buildings of 1287 are unknown and not drawn.',
      sources: ['CON-01', 'CON-03', 'CON-05', 'CON-06', 'CON-07'],
      facts: ['Wikipedia: about 15,000 pounds for the castle and town walls together; Master James of St George was architect and master mason, Sir John Bonvillars controlled the work.', 'Wikipedia and Castles of Wales: eight towers, about 70 ft (21 m) tall; Cadw: the Stockhouse and Bakehouse Towers are shared by the two wards.', 'Cadw and Wikipedia: Great Hall in the south range of the outer ward, kitchens and stables on the north; the inner ward holds the royal apartments over heated basements and the Chapel Tower\'s private chapel.', 'Wikipedia: the spring-fed well is 91 ft (28 m) deep (World History Encyclopedia: 21.7 m originally).', 'Town walls (Cadw): about 1.3 km, 21 D-shaped towers, three twin-towered gates (Upper, Mill, Lower); only part lies inside this window.'] },
    { id: 'today', year: 'Today', label: 'Cadw monument · World Heritage Site', short: 'Monument', lens: 'none',
      summary: 'A ruined but largely standing castle in Cadw care and part of the Edwardian castles World Heritage Site (1986), reached across the 1826 road bridge, with the railway bridge of 1848 and the 1958 road bridge beside it and the walled town to the west.',
      basis: 'OSM: the outline, both curtains, all eight towers, stair turrets, barbican lines, footing lines, the town walls and the surrounding town, with OSM height tags (towers 26 m, curtains 18 m); the town wall carries Cadw\'s "at least 6 m".',
      conjecture: 'OSM heights are tags, not a survey, and disagree with Wikipedia\'s 21 m for the towers. Floors, roofs and merlons are not mapped. No gate is mapped, so the castle ring is sealed on this layer. The town walls are clipped to the window.',
      sources: ['CON-01', 'CON-02', 'CON-03', 'CON-04', 'CON-05', 'CON-06'],
      facts: ['Wikipedia: held for the king until General Mytton took it in November 1646; ordered slighted in 1655; iron and lead stripped in 1665.', 'Wikipedia: road bridge 1826, rail bridge 1848, civic restoration from 1865, leased to the Ministry of Works in 1953, a new road bridge in 1958; World Heritage Site in 1986.', 'Wikipedia (town walls): Telford built two new gateways in 1826; a railway archway breached the wall in 1846-48; a fissure from tunnelling in 1845 was underpinned in 1963.'] },
  ];
}
