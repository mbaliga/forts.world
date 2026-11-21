// 02 · Sindhudurg — Shivaji's island sea fort on Kurte island off Malvan, Sindhudurg district, Maharashtra.
// Plan compressed to 1.5 m per unit (planScale 1.5); heights, gates and buildings at human scale.
// No measured plan could be read: the outline is an estimate (about 19.5 ha, ~705 x 375 m, long axis ENE-WSW
// inferred from the spread of published reference points). Sources fix only the gate (NE, facing the mainland),
// the Shivrajeshwar temple (centre), the beach (south) and the flag tower (west); the rest follows the Trekshitiz plan.
import { rectPts, ellipsePts, regularPoly } from './kit.js';
import { smoothPath, polylineLength, pointAt, distToPolyline, offsetPolyline, polyArea, rng, makeNoise, DEG } from '../core/geom.js';
import { TAG } from '../core/nav.js';

// ------------------------------------------------------------------ outline
const ROT = 20;                                  // fort axis, degrees north of east
const cR = Math.cos(ROT * DEG), sR = Math.sin(ROT * DEG);
const P = (u, v) => [u * cR - v * sR, u * sR + v * cR];          // fort frame (u along the axis) -> plan
const VS = 0.93;
const CTRL = [[232, -4], [224, 30], [206, 62], [172, 86], [122, 98], [70, 96], [24, 86], [-24, 92], [-70, 112], [-120, 126], [-170, 128], [-208, 108], [-232, 70], [-240, 20], [-234, -32], [-212, -80], [-174, -112], [-122, -132], [-64, -140], [-8, -128], [48, -114], [100, -110], [152, -90], [196, -62], [222, -32]];
const EDGE = smoothPath(CTRL.map(([u, v]) => P(u, v * VS)), true, 10); // island edge (smooth, CCW)
const EDGE_LO = smoothPath(CTRL.map(([u, v]) => P(u, v * VS)), true, 2);  // coarse copy for the reef (cheaper terrain ops)
const LEN = polylineLength(EDGE, true);
const edgeAt = (s) => pointAt(EDGE, ((s % LEN) + LEN) % LEN, true);

// gomukhi gate: a curved passage notched into the NE corner. Gate frame: p along GA (into the fort), q along GB.
const sGate = distToPolyline(...P(208, 60 * VS), EDGE, true).s;
const g0 = edgeAt(sGate);
const GM = [g0.x, g0.y];                         // mouth of the passage
const GA = [-g0.ty, g0.tx], GB = [-g0.tx, -g0.ty];
const GF = (p, q) => [GM[0] + GA[0] * p + GB[0] * q, GM[1] + GA[1] * p + GB[1] * q];
const NC = 7, NT = 4, NH = NC / 2 + NT / 2, NR = 11.5, NP = 5;   // clear width, wall thickness, half spacing, bend radius, last leg
const arcF = (r, a0, a1, n) => { const o = []; for (let i = 0; i <= n; i++) { const a = (a0 + (a1 - a0) * i / n) * DEG; o.push(GF(r * Math.cos(a), -NR + r * Math.sin(a))); } return o; };
const NOTCH = [GF(0, NH), ...arcF(NR + NH, 90, 0, 8).slice(1), GF(NR + NH, -NR - NP), GF(NR - NH, -NR - NP), ...arcF(NR - NH, 0, 90, 4)];
const GATE = GF(NR, -NR - NP);
const GATE_H = 2.8;
const BM = GF(0, -NR);                           // great gate bastion on the inside of the bend
const BP = GF(-2.5, 12.5);                       // gate bastion on the east face
const GA_DEG = Math.atan2(GA[1], GA[0]) / DEG;

// curtain: 40 bastions at the salients, each curtain bent inward (indented trace); one straight curtain holds the sally port
const NB = 40, SALLY_I = 24;
const SALIENTS = [];
const WALL = [];
let SALLY = null;
{
  const s0 = sGate + NR + 2, s1 = sGate + LEN - (NH + 9);
  const r0 = rng(17), nz = makeNoise(5);
  const ss = [];
  for (let i = 0; i < NB; i++) ss.push(s0 + (s1 - s0) * (i + 0.5 + (r0() - 0.5) * 0.5) / NB);
  let prev = sGate + NH;
  for (let i = 0; i < NB; i++) {
    const s = ss[i], m = edgeAt((prev + s) / 2);
    if (i === SALLY_I) SALLY = { x: m.x, y: m.y, tx: m.tx, ty: m.ty };
    else { const k = Math.min(4.5, (s - prev) * 0.13) * (i === 0 ? 0.4 : 1); WALL.push([m.x - m.ty * k, m.y + m.tx * k]); }
    const b = edgeAt(s), bump = nz(i * 0.7, 2.3) * 2.5;
    WALL.push([b.x + b.ty * bump, b.y - b.tx * bump]);
    SALIENTS.push(WALL.length - 1);
    prev = s;
  }
  const s = sGate + LEN - NH, m = edgeAt((prev + s) / 2), k = Math.min(4, (s - prev) * 0.13);
  WALL.push([m.x - m.ty * k, m.y + m.tx * k]);
  WALL.push(...NOTCH);
}
const NW = WALL.length;
// outward unit bisector at each wall vertex (CCW polygon: outward = right of travel)
const OUT = WALL.map((p, i) => {
  const a = WALL[(i - 1 + NW) % NW], b = WALL[(i + 1) % NW];
  const n0 = [p[1] - a[1], a[0] - p[0]], n1 = [b[1] - p[1], p[0] - b[0]];
  const l0 = Math.hypot(...n0) || 1, l1 = Math.hypot(...n1) || 1;
  const x = n0[0] / l0 + n1[0] / l1, y = n0[1] / l0 + n1[1] / l1, l = Math.hypot(x, y) || 1;
  return [x / l, y / l];
});
const SALLY_AT = [SALLY.x, SALLY.y];
const ROCKBAND = (() => { const o = offsetPolyline(WALL, true, -4.3); return o.map((p, i) => [p, o[(i + 1) % o.length]]); })();  // bare basalt at the wall foot
const SALLY_OUT = [SALLY.ty, -SALLY.tx];
const SALLY_DEG = Math.atan2(SALLY.ty, SALLY.tx) / DEG;
const smooth01 = (t) => { t = Math.max(0, Math.min(1, t)); return t * t * (3 - 2 * t); };
const wallTop = (x) => 9 - 0.8 * smooth01((-150 - x) / 70);   // the reef-guarded west face stands a little lower

// ------------------------------------------------------------------ interior anchors (plan)
const F = (c, du, dv) => { const d = P(du, dv); return [c[0] + d[0], c[1] + d[1]]; };  // offset in the fort frame
const TEMPLE = [-4, 0];                          // Shivrajeshwar, facing east
const MAHADEV = [-36, -10];
const STEPWELL = [-36, -22];
const BHAVANI = [-20, 30];
const JARIMARI = [74, 28];
const MAHAPURUSH = F(GATE, -20, -24);
const PALACE = [-148, -20];
const WELLS = [[-121, -2], [-118, -34], [-104, -17]];  // Dudh, Dahi, Sakhar Bav
const TOWER = [-205, -30], TOWER_R = 6, TOWER_TOP = 14.2;
const TOWER_E = P(1, 0);                         // stairs climb the tower from its interior side
const QUARRY = [-66, -104];
const POND = [52, -60];
const SCHOOL = [114, 22];
const HANUMAN = GF(4.5, -23.5);
// landing quay: in front of the passage mouth and along the seaward face of the east gate bastion
const ccw = (pts) => (polyArea(pts) < 0 ? pts.slice().reverse() : pts);
const LANDING = ccw([[-0.5, 3.6], [-3.5, 3.9], [-6.5, 4.6], [-9.6, 6.8], [-11.5, 12.5], [-11, 19], [-17.5, 19], [-17.5, -5.5], [-8, -5.5], [-4, -3.4], [-0.5, -2.6]].map(([p, q]) => GF(p, q)));
const SPAWN = GF(-14, 11.5);
const BEACH_C = [SALLY.x + SALLY_OUT[0] * 2.5, SALLY.y + SALLY_OUT[1] * 2.5];
const INNER = offsetPolyline(EDGE, true, 14);   // well inside the walls, for scatter
const EASTV = [[40, 10], [70, 55], [108, 84], [140, 96], [152, 78], [178, 58], [192, 30], [182, 2], [150, -28], [120, -48], [85, -52], [52, -32]];
const WESTV = [[-110, 34], [-70, 54], [-34, 56], [-36, 44], [-64, 24], [-100, 14]];
const ROUTES = [
  [GF(NR, -NR - NP - 4), [128, 110], [95, 80], [60, 50], [28, 22], [9, 3]],
  [[-14, -2], [-27, -8], [-60, -12], [-100, -17], [-134, -20], [-178, -27]],
  [[-8, -10], [-30, -50], [-58, -96], [-80, -128], [SALLY.x - SALLY_OUT[0] * 5, SALLY.y - SALLY_OUT[1] * 5]],
  [[10, 2], [44, 14], [72, 22], [110, 30], [150, 30], [176, 18]],
  [[95, 80], [118, 52], [150, 30]],
  [[-60, -12], [-58, 28], [-36, 42]],
];

// ------------------------------------------------------------------ places
const POIS = [
  { id: 'gate', at: GF(NR, -NR - 0.5), r: 6, hTol: 4, title: 'Mahadarwaja, the concealed main gate', text: 'The main entrance at the north-east corner is a gomukhi (cow\'s-mouth) gate: the passage curves between two bastions so that the doorway cannot be seen from the sea. Deep water reaches the gate even at low tide, so boats can come right up to it.', source: 'https://anantamias.com/sindhudurg-fort/',
    eraNote: { '1765': 'The 1765 plan was drawn during the British expedition that captured the fort from its Maratha garrison.', '1930s': 'T. W. Venn photographed this gate in the 1930s, before modern restoration.', today: 'Visitors now land here from motor boats that cross from Malvan jetty in 10 to 20 minutes.' } },
  { id: 'nagarkhana', at: GF(NR, -NR - NP - 0.35), r: 4.5, hTol: 2.5, title: 'Nagarkhana, the drum house', text: 'A brick nagarkhana (drum house) sits above the main gate, where drums were beaten to mark arrivals and ceremonies. It is a later addition to Shivaji\'s stonework of 1664 to 1667, and it overlooks the whole fort and the coast.', source: 'https://durgbharari.in/sindhudurg/' },
  { id: 'hanuman', at: GF(9, -22.5), r: 5, title: 'Hanuman shrine', text: 'A small domed shrine with a stone image of Hanuman stands at the main gate. Hanuman (Maruti) is the traditional guardian of Maratha fort entrances.', source: 'https://durgbharari.in/sindhudurg/' },
  { id: 'prints', at: GF(1.5, -NR - 1), r: 5, hTol: 2.5, title: 'Shivaji\'s hand and footprint', text: 'Two small domed shrines protect impressions of Shivaji\'s right palm and left foot. Tradition says they were pressed into wet lime while he inspected the works. The prints were enclosed under a 1763 letter of Rani Jijabai of Kolhapur.', source: 'https://trekshitiz.com/fort/index.php?slug=Sindhudurg-fort',
    eraNote: { '1765': 'In 1765 the prints had been enclosed only two years before.' } },
  { id: 'shivrajeshwar', at: [12, 0], r: 7, title: 'Shivrajeshwar temple', text: 'This temple at the centre of the fort is one of the very few dedicated to Shivaji himself. It was built in 1695, in the reign of his son Chhatrapati Rajaram, and Chhatrapati Shahu of Kolhapur added a front hall in 1907. The seated, beardless image shows Shivaji in a seafarer\'s cap.', source: 'https://durgbharari.in/sindhudurg/',
    eraNote: { '1765': 'In 1765 the temple was seventy years old and its front hall was not yet built.', '1930s': 'The front hall added by Chhatrapati Shahu in 1907 was then less than thirty years old.' } },
  { id: 'mahadev', at: [-28, -16], r: 6, title: 'Mahadev temple and stepwell', text: 'Behind the Shivrajeshwar temple is a Shiva temple with a Nandi, a linga and a square stepwell. Local tradition speaks of a hidden passage beneath it.', source: 'https://durgbharari.in/sindhudurg/' },
  { id: 'wells', at: [-111, -18], r: 7, title: 'Dudh, Dahi and Sakhar Bav', text: 'These three square, stone-lined wells (the milk, curd and sugar wells) gave the island garrison fresh water in the middle of the sea. That made the fort able to hold out through a long siege.', source: 'https://trekshitiz.com/fort/index.php?slug=Sindhudurg-fort',
    eraNote: { today: 'Today the three wells are covered over.' } },
  { id: 'jarimari', at: F(JARIMARI, 0, -6.5), r: 6, title: 'Jarimari temple', text: 'Jarimari is a small temple to a village goddess. It carries an inscription of 1881 and is known for the forked, two-headed coconut palm that grows beside it.', source: 'https://durgbharari.in/sindhudurg/',
    eraNote: { '1765': 'The shrine\'s inscription dates from 1881; how much older the shrine is has not been recorded.' } },
  { id: 'nishan', at: TOWER, r: 5, hTol: 3, title: 'Darya or Nishan Buruj, the flag tower', text: 'The Darya or Nishan Buruj is a tall, isolated bastion on the western, open-sea side of the fort. Until 1812 it flew a large saffron Maratha flag that sailors used as a landmark.', source: 'https://durgbharari.in/sindhudurg/',
    eraNote: { '1765': 'In 1765 the saffron flag still flew here; it came down only in 1812.', '1930s': 'By the 1930s the Maratha flag had been gone for more than a century.' } },
  { id: 'ranichivela', at: [SALLY.x + SALLY_OUT[0] * 8, SALLY.y + SALLY_OUT[1] * 8], r: 7, title: 'Ranichi Vela and the sally port', text: 'Ranichi Vela is a small crescent of sand below the south wall, reached through a narrow sally port. Tradition calls it the queen\'s bathing place and links it with Queen Tarabai.', source: 'https://anantamias.com/sindhudurg-fort/',
    eraNote: { '1930s': 'Venn photographed this sally port, "unto the women\'s sea bathing beach", in the 1930s.' } },
  { id: 'ramparts', vi: SALIENTS[29] + 1, r: 6, hTol: 3, title: 'The ramparts', text: 'Published lengths for the walls range from about 3 to 4 km; they are 29 to 30 ft (9 m) high and 12 ft (3.7 m) thick, with about 42 half-round bastions 40 to 130 yards apart. About 45 staircases lead up to the wall-walk, and latrines are built into the walls over the sea.', source: 'https://anantamias.com/sindhudurg-fort/',
    eraNote: { '1930s': 'One of Venn\'s 1930s snapshots shows these sea walls from the water.', today: 'The ICOMOS evaluation of 2025 notes a modern steel lamp post standing on the walls.' } },
  { id: 'foundations', at: GF(-12.8, 6.2), r: 4.5, hTol: 3, title: 'Foundations locked with lead', text: 'Work began on 25 November 1664 under chief architect Hiroji Indulkar and finished in 1667. The foundation blocks were set in slots and locked with molten lead against the surf.', source: 'https://en.wikipedia.org/wiki/Sindhudurg_Fort',
    eraNote: { '1765': 'Watson\'s 1765 plan charts the reefs and soundings round the island.' } },
  { id: 'augustus', vb: 9, r: 6, hTol: 3, title: 'Fort Augustus, 1765 to 1766', text: 'A British expedition from Bombay took the fort in 1765 and renamed it Fort Augustus; it was handed back to the Marathas in 1766. Kolhapur finally ceded it to the British in 1812.', source: 'https://trekshitiz.com/fort/index.php?slug=Sindhudurg-fort',
    eraNote: { '1765': 'John Watson\'s survey of the fort and the Malvan roads was made during this expedition.' } },
  { id: 'heritage', vb: 37, r: 6, hTol: 3, title: 'World Heritage', text: 'Sindhudurg is component 11 of the Maratha Military Landscapes of India World Heritage property, inscribed in 2025. Its buffer zone takes in the satellite forts of Padmagad, Rajkot and Sarjekot.', source: 'https://whc.unesco.org/en/list/1739/documents/',
    eraNote: { today: 'It is one of the twelve forts inscribed together in 2025.' } },
];

// ------------------------------------------------------------------ helpers (public API only)
// straight stair running up to the wall-walk at right angles to the curtain
function upStair(W, wall, x, y, run = 13.5, w = 2.6) {
  const f = W.wallFrame(wall, W.wallS(wall, x, y));
  const th = wall.o.thick ?? 3;
  const ix = f.x - f.ox * th / 2, iy = f.y - f.oy * th / 2;
  const bx = ix - f.ox * run, by = iy - f.oy * run;
  return W.stairs({ from: [bx, by, W.ground(bx, by)], to: [ix + f.ox * 0.5, iy + f.oy * 0.5, W.wallTopAt(wall, f.x, f.y)], w, color: 'stone', side: true });
}
const fortRect = (c, w, d, rot = ROT) => rectPts(c[0], c[1], w, d, rot);

export default {
  id: 'sindhudurg-hand', name: 'Sindhudurg (hand level, kept for T2)', native: { text: 'सिंधुदुर्ग', lang: 'mr', script: 'mr' },
  region: 'Sindhudurg · Maharashtra', type: 'Island sea fort', coords: [16.0425, 73.4597],
  poiCount: POIS.length, groundName: 'Kurte island', datum: 0, datumLabel: 'above high tide',
  units: { planScale: 1.5, vScale: 1 },
  bounds: [-275, -200, 268, 172], stride: 2, seed: 23,
  water: { sea: 0 },
  apron: { h: -5.9 },
  view: { az: -38, el: 40, zoom: 64, introAt: [-10, -5], introZoom: 540 },
  light: { sky: '#d5e3e2', sunAz: -118, sunEl: 52 },
  palette: {
    wall: '#5a4a42', wallTop: '#7b5b49', trim: '#86705f', stone: '#5e5650', plaster: '#ebe4d3', plasterDark: '#c8baa0',
    roof: '#a3452b', dome: '#ece6d6', wood: '#5b3d27', door: '#4a3020', iron: '#2c2926',
    grass: '#748a40', dry: '#a68c5c', rock: '#3d3a36', cliff: '#2e2c2a', sand: '#dcc894', road: '#a3805a', court: '#a08c70', paved: '#7f746a',
    seabed: '#3f8580', water: '#2c7884', tank: '#3e6a58', leaf: '#3f6d2b', leafDry: '#7f8a45', trunk: '#8a7a63', flag: '#f08a24', accent: '#c9a24a',
  },
  eraPalette: {
    '1765': { roof: '#7e4a33', plaster: '#ece6d4', grass: '#7a8d44' },
    '1930s': { roof: '#a8482d', plaster: '#d8cdb5', plasterDark: '#bfae90', grass: '#7c8a42', dry: '#aa915e' },
    today: { roof: '#a3452b', plaster: '#ece6d8', grass: '#6c8a3a' },
  },
  eras: [
    { id: '1765', year: '1765', label: 'Watson\'s survey', short: 'Maratha sea fort', lens: 'engraving',
      summary: 'The Maratha sea fort the British surveyed in 1765: the saffron flag on the Nishan Buruj, guns on the bastions and gallivats riding off the hidden gate.',
      basis: 'Island, reefs and anchorage after John Watson\'s plan and view of "Sinderdroo" (survey 1765, engraved for Dalrymple in 1774), with the walls as described in the 1880 Bombay Gazetteer.',
      conjecture: 'The Watson plan could not be examined in detail, so the outline, the bastion positions and the interior are reconstructed; the roofed palace, the garrison and the date of the nagarkhana are conjecture.',
      sources: ['SIN-02', 'SIN-03', 'SIN-04', 'SIN-11'] },
    { id: '1930s', year: '1930s', label: 'Venn\'s photographs', short: 'Village fort', lens: 'albumen',
      summary: 'A lived-in village fort of the 1930s, when T. W. Venn photographed its gate and sally port: tiled cottages under coconut palms, fishing boats at the landing, the palace long in ruins.',
      basis: 'T. W. Venn\'s snapshots of the main gate, the sally port to the bathing beach, the sea walls and the view from the gate to Malvan (British Library, 1930s), with the 1880 Bombay Gazetteer.',
      conjecture: 'The photographs could not be viewed online: the houses, palms and state of each building are inferred from the captions and from the fort today.',
      sources: ['SIN-07', 'SIN-08', 'SIN-09', 'SIN-10', 'SIN-11'] },
    { id: 'today', year: 'Today', label: 'World Heritage site', short: 'World Heritage', lens: 'none',
      summary: 'Inscribed as World Heritage in 2025: motor boats from Malvan land visitors at the hidden gate, and a small hamlet still lives among the palms inside the walls.',
      basis: 'The UNESCO nomination dossier, maps and ICOMOS evaluation (2025), the DRONAH photograph of the curved gateway and the Trekshitiz plan of the fort\'s features.',
      conjecture: 'The large-scale UNESCO maps were not inspected: the outline is estimated, and the positions of the wells, shrines and palace remains follow a hand-drawn plan.',
      sources: ['SIN-06', 'SIN-12', 'SIN-13', 'SIN-14', 'SIN-15', 'SIN-01'] },
  ],
  terrain: (era) => {
    const corridor = [[...GF(-1.5, 0), 1.6], [...GF(0, 0), 1.62]];
    for (let i = 1; i <= 6; i++) { const a = (90 - i * 15) * DEG; corridor.push([...GF(NR * Math.cos(a), -NR + NR * Math.sin(a)), 1.62 + 0.85 * i / 6]); }
    corridor.push([...GF(NR, -NR - NP), GATE_H], [...GF(NR, -NR - NP - 5), GATE_H]);
    const sallyRect = rectPts(SALLY.x, SALLY.y, 7, 17, SALLY_DEG);
    return [
      { op: 'base', h: -5.8 },
      { op: 'noise', amp: 1.5, scale: 38 },
      // basalt reef round the island, awash in places
      { op: 'raise', poly: offsetPolyline(EDGE_LO, true, -15), h: -0.8, edge: 24 },
      { op: 'noise', amp: 1.8, scale: 5.5, above: -3.2 },
      // deep water at the gate, even at low tide
      { op: 'dig', poly: [GF(-9, -12), GF(-70, -22), GF(-70, 24), GF(-9, 13)], h: -4.2, edge: 10 },
      // rock at the foot of the walls, and the island inside them
      { op: 'raise', poly: offsetPolyline(WALL, true, -2.4), h: 1.5, edge: 3, profile: 'cliff', rough: 0.6, roughScale: 4 },
      { op: 'raise', poly: offsetPolyline(WALL, true, 1.4), h: 2.6, edge: 2.5, dome: 0.9, domeR: 60, rough: 0.45, roughScale: 18 },
      // Ranichi Vela: a crescent of sand below the south wall
      { op: 'hill', x: BEACH_C[0], y: BEACH_C[1], rx: 23, ry: 15, rot: SALLY_DEG, h: 2.1, top: 0.2, profile: 'convex' },
      { op: 'flatten', poly: sallyRect, h: 2.1, edge: 5 },
      // the curved passage and the court inside the gate
      { op: 'ramp', path: corridor, w: 7.8, edge: 1.5 },
      { op: 'flatten', poly: [GF(4, -NR - NP - 2.2), GF(21, -NR - NP - 2.2), GF(21, -NR - NP - 11), GF(4, -NR - NP - 11)], h: GATE_H, edge: 6 },
      // temple court and the foot of the flag tower
      { op: 'flatten', poly: fortRect([TEMPLE[0] - 2, TEMPLE[1]], 36, 28), h: 3.4, edge: 8 },
      { op: 'flatten', poly: rectPts(TOWER[0] + 9, TOWER[1] + 4, 30, 26, ROT), h: 3.0, edge: 6 },
      { op: 'edge', h: -5.8, w: 30 },
      // paint
      ...ROCKBAND.map((path) => ({ op: 'paint', path, w: 4.6, paint: 'rock' })),
      { op: 'paint', poly: ellipsePts(BEACH_C[0] + SALLY_OUT[0] * 4, BEACH_C[1] + SALLY_OUT[1] * 4, 20, 10.5, 28, SALLY_DEG), paint: 'sand' },
      { op: 'paint', path: corridor.map((p) => [p[0], p[1]]), w: 6.4, paint: 'paved' },
      { op: 'paint', path: [GF(NR, -NR - NP), GF(NR, -NR - NP - 4)], w: 4.5, paint: 'paved' },
      ...ROUTES.map((path, i) => ({ op: 'paint', path, w: i < 3 ? 3.4 : 2.6, paint: 'road' })),
      { op: 'paint', poly: fortRect([TEMPLE[0] + 4, TEMPLE[1]], 26, 18), paint: era === '1765' ? 'court' : 'paved' },
    ];
  },
  build(W) {
    const era = W.era;
    const old = era === '1765', mid = era === '1930s', now = era === 'today';
    const r1 = rng(31);

    // ---------------- curtain wall, gates and bastions
    const wall = W.wall({ path: WALL, closed: true, top: (x) => wallTop(x), thick: NT, batter: 0.06, parapet: { h: 1.3, t: 0.7 }, merlon: { style: 'round', w: 0.95, gap: 0.8, h: 0.85 }, color: 'wall' });
    W.gate({ wall, at: GATE, width: 3.6, spring: 3.1, rise: 1.9, style: 'pointed', towers: false, name: 'Mahadarwaja', spikes: false, floor: GATE_H, frameUp: 0.9 });
    W.gate({ wall, at: SALLY_AT, width: 2.2, spring: 2.2, rise: 1.0, style: 'round', towers: false, name: 'Sally port', doors: false, frameW: 0.45, floor: 2.1 });
    const gunsOld = new Set([0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 27, 30, 33, 36, 38]);
    const guns = old ? gunsOld : mid ? new Set([6, 14, 26, 36]) : new Set([8, 20, 33]);
    const bastionTop = [];
    SALIENTS.forEach((vi, k) => {
      const r = 6 + 1.3 * r1();
      const at = [WALL[vi][0] + OUT[vi][0] * r * 0.35, WALL[vi][1] + OUT[vi][1] * r * 0.35];
      W.bastion({ at, wall, r, snap: false, out: OUT[vi], dh: 0.45, merlon: { style: 'round' }, cannon: guns.has(k) ? { len: 3.0, r: 0.3, carriage: old } : false });
      bastionTop.push({ x: at[0], y: at[1], h: wallTop(at[0]) + 0.45, vi });
    });
    const bmOut = [-0.42 * GA[0] + 0.91 * GB[0], -0.42 * GA[1] + 0.91 * GB[1]];
    W.bastion({ at: BM, wall, r: 8, snap: false, out: bmOut, gorge: -0.72, batter: 0.03, dh: 0.5, merlon: { style: 'round' }, cannon: old || mid ? { len: 3.4, r: 0.34, carriage: old, dir: Math.atan2(-GA[1], -GA[0]) / DEG } : false });
    W.bastion({ at: BP, wall, r: 7.5, snap: false, out: [-GA[0], -GA[1]], batter: 0.05, dh: 0.45, merlon: { style: 'round' }, cannon: { len: 3.4, r: 0.34, carriage: old } });
    const BM_TOP = wallTop(BM[0]) + 0.5;
    if (old) W.flag({ x: BP[0] + GA[0] * 2, y: BP[1] + GA[1] * 2, h: wallTop(BP[0]) + 0.45, pole: 6, color: '#f08a24', size: 1.4 });

    // latrine chutes corbelled out over the sea from the curtain
    for (const k of [3, 11, 15, 19, 27, 33]) {
      const vi = SALIENTS[k] + 1, [x, y] = WALL[vi], o = OUT[vi], th = wallTop(x), c = [x + o[0] * (NT / 2 + 0.45), y + o[1] * (NT / 2 + 0.45)];
      W.building({ rect: [c[0], c[1], 1.5, 1.1, Math.atan2(o[1], o[0]) / DEG + 90], base: th - 2.1, h: 1.6, color: 'wall', roof: 'flat', parapet: false, windows: { style: 'rect', spacing: 1.2, w: 0.5, h: 0.6, sill: 0.5 }, cornice: false, kind: 'building', pad: 0 });
    }
    // wall-walk stairs (the fort has about 45; a selection here)
    const fstair = (k, t) => { const a = WALL[SALIENTS[k]], b = WALL[SALIENTS[k] + 1]; upStair(W, wall, a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t); };
    for (const [k, t] of [[1, 0.62], [5, 0.6], [9, 0.62], [13, 0.6], [17, 0.6], [21, 0.62], [28, 0.6], [32, 0.62], [35, 0.6], [38, 0.62]]) fstair(k, t);
    {  // radial stair against the curved inner screen wall, right by the gate
      const a = 52 * DEG, ri = NR + NH + NT / 2, run = 13.5;
      const pIn = GF((ri - 0.5) * Math.cos(a), -NR + (ri - 0.5) * Math.sin(a)), pOut = GF((ri + run) * Math.cos(a), -NR + (ri + run) * Math.sin(a));
      W.stairs({ from: [pOut[0], pOut[1], W.ground(pOut[0], pOut[1])], to: [pIn[0], pIn[1], wallTop(pIn[0])], w: 2.6, color: 'stone', side: true });
    }

    // ---------------- landing, gomukhi passage, nagarkhana, gate shrines
    W.platform({ poly: LANDING, h: 1.6, color: now ? '#8e8a82' : 'stone', tag: TAG.landing });
    W.stairs({ from: [...GF(-17.3, 12), 1.6], to: [...GF(-22, 12), 0.15], w: 3.6, color: now ? '#8e8a82' : 'stone' });
    W.platform({ poly: ccw([GF(-21.8, 9.8), GF(-24.6, 9.8), GF(-24.6, 14.2), GF(-21.8, 14.2)]), h: 0.15, color: 'stone', tag: TAG.landing });
    W.zone([...arcF(NR + NH - 2, 90, 0, 8), GF(NR + NH - 2, -NR - NP + 0.4), GF(NR - NH + 2, -NR - NP + 0.4), ...arcF(NR - NH + 2, 0, 90, 8)], 'Gomukhi passage');
    const nagarBrick = old ? '#9a5a3c' : mid ? '#8c5a43' : '#94563a';
    const NG = GF(NR, -NR - NP - 0.35);
    W.pavilion({ x: NG[0], y: NG[1], w: 8, d: 3.2, rot: GA_DEG, base: wallTop(NG[0]), plinth: 0.2, colH: 2.7, colW: 0.62, cols: [3, 2], roof: 'tiled', roofColor: 'roof', roofH: 1.3, color: nagarBrick, stairs: false, kind: 'building' });
    W.zone(rectPts(NG[0], NG[1], 8, 3.2, GA_DEG), 'Nagarkhana');
    W.building({ rect: [HANUMAN[0], HANUMAN[1], 2.7, 2.7, GA_DEG], h: 2.6, color: 'plaster', roof: 'dome', domes: [{ x: HANUMAN[0], y: HANUMAN[1], r: 1.05, shape: 'half' }], windows: { style: 'arch', spacing: 2, w: 0.8, h: 1.4, rows: [0] }, kind: 'temple', cornice: true });
    W.flag({ x: HANUMAN[0] - GB[0] * 1.9, y: HANUMAN[1] - GB[1] * 1.9, pole: 3.6, color: '#e9731c', size: 0.55 });
    W.building({ rect: [MAHAPURUSH[0], MAHAPURUSH[1], 2.8, 2.6, ROT], h: 2.4, color: old ? 'plaster' : 'plasterDark', roof: 'pyramid', roofColor: 'roof', roofH: 1.3, windows: false, kind: 'temple' });
    // Shivaji's hand and footprint: two small domed shrines on the great gate bastion
    for (const [p, q] of [[-3.4, -NR + 1.8], [-3.4, -NR - 2.2]]) {
      const c = GF(p, q);
      W.building({ rect: [c[0], c[1], 2.1, 2.1, GA_DEG], base: BM_TOP, h: 1.8, color: 'plaster', roof: 'dome', domes: [{ x: c[0], y: c[1], r: 0.85, shape: 'half' }], windows: { style: 'arch', spacing: 1.6, w: 0.6, h: 1.0, rows: [0] }, kind: 'temple', cornice: false });
    }
    if (now) W.flag({ x: WALL[SALIENTS[1] + 1][0] - OUT[SALIENTS[1] + 1][0] * 1.2, y: WALL[SALIENTS[1] + 1][1] - OUT[SALIENTS[1] + 1][1] * 1.2, h: 9, pole: 5.5, size: 0.01, poleColor: '#77797a', base: false });

    // ---------------- Shivrajeshwar temple (centre) and its court
    {
      const g = 3.4, T = TEMPLE;
      const tc = (du, dv) => [T[0] - dv, T[1] + du];          // temple frame: v points west (behind), u north
      W.temple({ x: T[0], y: T[1], rot: 90, w: 6, h: 7.2, sanctumH: 4.4, plinth: 0.3, base: g, style: 'nagara', mandapa: false, color: 'plaster', flag: !old, flagColor: '#ef7d1d', stairs: false });
      const pc = tc(0, 1.6);
      W.platform({ poly: rectPts(pc[0], pc[1], 12.2, 8.6, 0), h: g + 0.7, color: 'plasterDark' });
      W.zone(fortRect([T[0] + 4, T[1]], 26, 18), 'Shivrajeshwar temple');
      if (old) {
        const s0 = tc(0, -6.2), s1 = tc(0, -4.25);
        W.stairs({ from: [s0[0], s0[1], g], to: [s1[0], s1[1], g + 0.7], w: 3, color: 'plasterDark' });
      } else {
        const hc = tc(0, -8.0);    // front hall of 1907
        W.pavilion({ x: hc[0], y: hc[1], w: 8.6, d: 7.4, rot: 90, base: g, plinth: 0.7, colH: 3.0, colW: 0.42, cols: [4, 3], roof: 'tiled', roofColor: 'roof', roofH: 2.2, color: 'plaster', stairSide: 0, kind: 'temple' });
      }
    }
    // Mahadev temple, Nandi and square stepwell
    W.temple({ x: MAHADEV[0], y: MAHADEV[1], rot: 90, w: 4.4, h: 5.4, sanctumH: 3.4, plinth: 0.3, base: W.ground(...MAHADEV), style: 'nagara', mandapa: false, color: old ? 'plaster' : 'plasterDark', stairs: false, mini: false });
    {
      const g = W.ground(...MAHADEV);
      W.platform({ poly: rectPts(MAHADEV[0] - 0.6, MAHADEV[1], 8.4, 7.2, 0), h: g + 0.55, color: 'stone' });
      W.stairs({ from: [MAHADEV[0] + 4.9, MAHADEV[1], g], to: [MAHADEV[0] + 3.55, MAHADEV[1], g + 0.55], w: 2.6, color: 'stone' });
      W.building({ rect: [MAHADEV[0] + 7.2, MAHADEV[1], 1.3, 0.7, 0], h: 0.75, color: '#3c3936', roof: 'flat', parapet: false, windows: false, cornice: false, kind: 'temple' });
      W.tank({ x: STEPWELL[0], y: STEPWELL[1], r: 3.5, n: 4, rot: 45 + ROT, waterDepth: 2.2, tiers: 3, inset: 0.55, color: 'stone' });
    }
    // Bhavani, Jarimari
    W.building({ rect: [BHAVANI[0], BHAVANI[1], 4.2, 3.6, 90], h: 2.8, color: old ? 'plaster' : 'plasterDark', roof: 'pyramid', roofColor: 'roof', roofH: 1.6, windows: false, kind: 'temple' });
    W.building({ rect: [JARIMARI[0], JARIMARI[1], 4.0, 4.0, ROT], h: 2.7, color: '#e2c38a', roof: 'pyramid', roofColor: 'roof', roofH: 1.7, windows: false, kind: 'temple' });
    if (now) { const fp = F(JARIMARI, 4.2, -1.5); W.tree({ x: fp[0], y: fp[1], type: 'palm', s: 1.25, yaw: 30 }); W.tree({ x: fp[0] + 0.2, y: fp[1], type: 'palm', s: 1.15, yaw: 210 }); }
    else { const fp = F(JARIMARI, 4.2, -1.5); W.tree({ x: fp[0], y: fp[1], type: 'palm', s: 1.1 }); }

    // ---------------- palace (wada), the three wells, the flag tower
    const wings = [
      { rect: [...F(PALACE, 0, 6.8), 26, 5.4, ROT] }, { rect: [...F(PALACE, 0, -6.8), 26, 5.4, ROT] },
      { rect: [...F(PALACE, -10.3, 0), 5.4, 8.2, ROT] }, { rect: [...F(PALACE, 10.3, 2.75), 5.4, 2.7, ROT] }, { rect: [...F(PALACE, 10.3, -2.75), 5.4, 2.7, ROT] },
    ];
    for (const wg of wings) {
      if (old) W.building(Object.assign({ storeys: 2, storeyH: 3.3, color: 'plaster', roof: 'tiled', roofColor: 'roof', roofH: 1.8, windows: { style: 'rect', spacing: 2.4, w: 0.8, h: 1.2 }, kind: 'palace' }, wg));
      else W.ruin(Object.assign({ h: mid ? 2.4 : 1.5, thick: 0.75, color: mid ? 'plasterDark' : 'stone', storeys: 1, windows: false, doors: [{ edge: 0, at: 0.5, w: 2.2 }, { edge: 2, at: 0.3, w: 2 }] }, wg));
    }
    W.zone(fortRect(PALACE, 30, 22), 'Palace remains');
    WELLS.forEach(([x, y], i) => {
      const tk = W.tank({ x, y, r: 2.6, n: 4, rot: 45 + ROT, waterDepth: 1.0, tiers: 1, inset: 0.6, color: 'stone' });
      if (now) W.platform({ poly: tk.poly, h: tk.rim + 0.12, color: '#3c3b39' });
      W.zone(regularPoly(x, y, 4.5, 8), ['Dudh Bav', 'Dahi Bav', 'Sakhar Bav'][i]);
    });
    // Darya / Nishan Buruj: free-standing tower climbed by an L-shaped stair
    {
      const [ex, ey] = TOWER_E, nx = -ey, ny = ex;
      W.bastion({ at: TOWER, r: TOWER_R, top: TOWER_TOP, batter: 0, out: [-ex, -ey], gorge: -0.88, merlon: { style: 'round' }, parapet: { h: 1.2, t: 0.6 }, color: 'wall' });
      const top0 = [TOWER[0] + ex * (TOWER_R + 0.3), TOWER[1] + ey * (TOWER_R + 0.3)];
      const land = [TOWER[0] + ex * (TOWER_R + 12.6), TOWER[1] + ey * (TOWER_R + 12.6)];
      const midH = 8.6;
      W.platform({ poly: rectPts(land[0], land[1], 3.4, 3.4, ROT), h: midH, color: 'wall' });
      W.stairs({ from: [land[0] - ex * 1.6, land[1] - ey * 1.6, midH], to: [top0[0], top0[1], TOWER_TOP], w: 2.6, color: 'wall', side: true });
      const foot = [land[0] - nx * 12.6, land[1] - ny * 12.6];
      W.stairs({ from: [foot[0], foot[1], W.ground(foot[0], foot[1])], to: [land[0] - nx * 1.6, land[1] - ny * 1.6, midH], w: 2.6, color: 'wall', side: true });
      const flagCol = old ? '#f08a24' : '#f08a24';
      if (old) W.flag({ x: TOWER[0] - ex * 1.5, y: TOWER[1] - ey * 1.5, h: TOWER_TOP, pole: 10, color: flagCol, size: 3.4 });
      else if (now) W.flag({ x: TOWER[0] - ex * 1.5, y: TOWER[1] - ey * 1.5, h: TOWER_TOP, pole: 6, color: flagCol, size: 1.5 });
      const cis = F(TOWER, -4, -12);
      W.tank({ x: cis[0], y: cis[1], r: 3.0, n: 4, rot: 45 + ROT, waterDepth: 1.1, tiers: 2, inset: 0.6, color: 'stone' });
      W.zone(regularPoly(TOWER[0], TOWER[1], TOWER_R + 1, 12), 'Nishan Buruj');
    }

    // ---------------- water: quarry reservoir and rain pond
    W.tank({ poly: ellipsePts(QUARRY[0], QUARRY[1], 11, 7, 14, ROT, 0.12, 4), waterDepth: 2.4, tiers: 2, inset: 1.0, color: 'rock' });
    W.tank({ poly: ellipsePts(POND[0], POND[1], 7, 5, 12, ROT + 30, 0.1, 9), waterDepth: 1.0, tiers: 1, inset: 0.8, color: 'mud' });

    // ---------------- sally port and the beach
    W.zone(ellipsePts(BEACH_C[0] + SALLY_OUT[0] * 4, BEACH_C[1] + SALLY_OUT[1] * 4, 20, 10.5, 20, SALLY_DEG), 'Ranichi Vela');

    // walls, bastions and gates are only built in finish(): reserve their ground before scattering
    W.occupy([GF(-8, -22), GF(-8, 22), GF(36, 22), GF(36, -34), GF(-2, -34)], 1);
    W.occupy(regularPoly(TOWER[0], TOWER[1], TOWER_R + 1.5, 12), 1);
    // ---------------- village: keep lanes clear, then houses
    for (const path of ROUTES) for (let i = 0; i < path.length - 1; i++) {
      const [a, b] = [path[i], path[i + 1]];
      const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1, nx = -dy / L * 2.2, ny = dx / L * 2.2;
      W.occupy([[a[0] + nx, a[1] + ny], [a[0] - nx, a[1] - ny], [b[0] - nx, b[1] - ny], [b[0] + nx, b[1] + ny]], 0.5);
    }
    W.occupy(fortRect([TEMPLE[0] + 2, TEMPLE[1]], 30, 22), 1);
    if (now) W.building({ rect: [SCHOOL[0], SCHOOL[1], 13, 6.5, ROT], h: 3.6, color: '#e6dcc4', roof: 'tiled', roofColor: 'roof', roofH: 1.6, windows: { style: 'rect', spacing: 2.2, w: 1.0, h: 1.2 }, kind: 'building' });
    const houseOpts = { size: [5, 8.5], h: [1, 1], storeyH: 3.1, roof: 'tiled', rot: ROT, spacing: 2.4, maxSlope: 1.6 };
    if (old) {
      W.houses(Object.assign({ poly: EASTV, count: 22, colors: ['plaster', 'plasterDark', '#b3714f'], roofColor: '#7e4a33', seed: 5 }, houseOpts));
      W.houses(Object.assign({ poly: WESTV, count: 8, colors: ['plasterDark', '#b3714f'], roofColor: '#86683f', seed: 8 }, houseOpts));
    } else if (mid) {
      W.houses(Object.assign({ poly: EASTV, count: 30, colors: ['plaster', 'plasterDark', '#a96a4c'], roofColor: '#a8482d', seed: 5 }, houseOpts));
      W.houses(Object.assign({ poly: WESTV, count: 6, colors: ['plasterDark', '#a96a4c'], roofColor: '#9a4a30', seed: 8 }, houseOpts));
    } else {
      W.houses(Object.assign({ poly: EASTV, count: 22, colors: ['plaster', '#dcd0b8', '#a96a4c', '#c9d3c8'], roofColor: '#a3452b', seed: 5, ruin: true, ruinShare: 0.18, ruinH: 0.6 }, houseOpts));
      W.houses(Object.assign({ poly: WESTV, count: 5, colors: ['plasterDark'], roofColor: '#9a4a30', seed: 8, ruin: true, ruinShare: 0.6, ruinH: 0.5 }, houseOpts));
    }

    // ---------------- coconut palms and scrub (and, after a century of neglect, on the ramparts too)
    if (!old) {
      const rr = rng(mid ? 61 : 62);
      for (let i = 0; i < NW; i++) {
        if (rr() > (mid ? 0.45 : 0.12)) continue;
        const [x, y] = WALL[i], o = OUT[i], k = -0.6 - rr() * 1.1;
        W.tree({ x: x + o[0] * k, y: y + o[1] * k, h: wallTop(x), type: rr() < 0.6 ? 'grass' : 'shrub', s: 0.6 + rr() * 0.5 });
      }
    }
    W.trees({ poly: INNER, count: old ? 70 : mid ? 150 : 135, types: old ? { palm: 6, round: 1 } : { palm: 9, round: 1, banyan: 0.25 }, s: [0.85, 1.25], minDist: old ? 7 : 5, seed: 41, pad: 1.4 });
    W.trees({ poly: INNER, count: old ? 30 : mid ? 120 : 80, types: { shrub: 3, grass: 2 }, s: [0.7, 1.3], minDist: 3, seed: 42, pad: 0.9 });
    W.trees({ poly: EASTV, count: old ? 12 : 26, types: { palm: 5, round: 1 }, s: [0.9, 1.2], minDist: 5, seed: 43, pad: 1.2 });

    // ---------------- mainland Malvan, Padmagad and the sea
    W.scenery({ poly: [[575, -900], [1700, -900], [1700, 1200], [520, 1200], [548, 620], [596, 340], [612, 120], [598, -180], [622, -520]], h0: -6, h1: 0.9, color: 'sand' });
    W.scenery({ poly: [[600, -900], [1700, -900], [1700, 1200], [545, 1200], [572, 620], [618, 340], [634, 120], [620, -180], [644, -520]], h0: -6, h1: 2.8, color: 'grass' });
    for (const [x, y, r, h] of [[760, -300, 190, 46], [820, 160, 230, 62], [700, 520, 180, 40], [690, 860, 200, 52]]) W.scenery({ hill: { x, y, r, h }, color: 'grass', h0: 2.5 });
    // Padmagad islet, Shivaji's former naval depot, between the fort and the shore
    W.scenery({ poly: ellipsePts(430, -38, 36, 27, 16, 25, 0.12, 3), h0: -4, h1: 0.5, color: 'sand' });
    W.scenery({ hill: { x: 430, y: -38, r: 27, h: 10 }, color: 'rock', h0: -1.5, seg: 11 });
    for (const [a, rr] of [[20, 9], [95, 12], [160, 8], [230, 13], [300, 10]]) { const t = Math.sqrt(Math.max(0, (1 - rr / 27) / 0.98)); W.tree({ x: 430 + Math.cos(a * DEG) * rr, y: -38 + Math.sin(a * DEG) * rr, h: -1.5 + 10 * Math.sin(t * Math.PI / 2), type: 'palm', s: 1.2 }); }
    {
      const town = rng(77);
      const n = old ? 10 : mid ? 26 : 40;
      for (let i = 0; i < n; i++) {
        const y = 140 + town() * 340, x = 636 - (y - 140) * 0.12 + town() * 46;
        const w = 4 + town() * 5, d = 4 + town() * 4, rot = town() * 90;
        W.scenery({ box: [x, y, w, d, rot, 2.5, 5.5 + town() * (now ? 5 : 2)], color: town() < 0.5 ? 'plaster' : 'plasterDark' });
      }
      for (let i = 0; i < 46; i++) { const y = -320 + town() * 820, x = 642 - Math.max(0, y - 120) * 0.08 + town() * 60; W.tree({ x, y, h: 2.8, type: 'palm', s: 1.1 + town() * 0.4 }); }
    }
    const L0 = GF(-27.5, 16.5), L1 = GF(-26.5, 7.5);
    if (old) {
      W.boat({ x: L0[0], y: L0[1], dir: GA_DEG + 90, size: 1.9, color: '#4a3324', sailColor: '#e8dcc0' });
      W.boat({ x: L1[0], y: L1[1], dir: GA_DEG + 80, size: 1.8, color: '#4a3324', sailColor: '#e3d6b8' });
      W.boat({ x: 236, y: 172, dir: 200, size: 2.1, color: '#4a3324', sailColor: '#e8dcc0' });
      W.boat({ x: 250, y: 96, dir: 170, size: 2.0, color: '#523826', sailColor: '#ebe0c6' });
      W.boat({ x: 258, y: -20, dir: 90, size: 2.0, color: '#4a3324', path: [[262, -60], [262, 190], [-60, 196], [-280, 120], [-290, -120], [-60, -210], [200, -170]], speed: 3.4 });
      W.boat({ x: -280, y: 60, dir: 270, size: 1.8, color: '#523826', path: [[-292, 160], [-300, -150], [-40, -222], [250, -150], [280, 60], [120, 200]], speed: 2.8 });
    } else if (mid) {
      W.boat({ x: L0[0], y: L0[1], dir: GA_DEG + 95, size: 1.2, color: '#6b4a30' });
      W.boat({ x: L1[0], y: L1[1], dir: GA_DEG + 70, size: 1.1, color: '#5e4430' });
      W.boat({ x: SALLY.x + SALLY_OUT[0] * 22, y: SALLY.y + SALLY_OUT[1] * 22, dir: SALLY_DEG, size: 1.0, color: '#6b4a30' });
      W.boat({ x: 250, y: 120, dir: 160, size: 1.2, color: '#6b4a30', path: [[250, 120], [420, 150], [560, 260], [400, 60]], speed: 2.2 });
      W.boat({ x: 220, y: -150, dir: 30, size: 1.1, color: '#5e4430', path: [[220, -150], [380, -120], [520, -40], [300, -60]], speed: 1.9 });
    } else {
      const cols = ['#2f6fa8', '#d9a62e', '#b8392b', '#2a8a6a', '#e8e2d4'];
      W.boat({ x: L0[0], y: L0[1], dir: GA_DEG + 90, size: 1.25, sail: false, color: cols[0] });
      W.boat({ x: L1[0], y: L1[1], dir: GA_DEG + 75, size: 1.2, sail: false, color: cols[1] });
      const jet = GF(-29, 12);
      for (let i = 0; i < 4; i++) W.boat({ x: jet[0], y: jet[1], dir: 30, size: 1.2, sail: false, color: cols[(i + 2) % cols.length], path: [[jet[0] + i * 2, jet[1] + i * 3], [330 + i * 12, 190 + i * 20], [560, 300 - i * 18], [360 - i * 10, 120 - i * 14]], speed: 3.6 + i * 0.5 });
    }

    // ---------------- people
    const walk = (i0, n) => {
      const pts = [];
      for (let k = 0; k <= n; k++) { const i = (i0 + k) % NW, [x, y] = WALL[i]; pts.push([x - OUT[i][0] * 0.7, y - OUT[i][1] * 0.7, wallTop(x)]); }
      for (let k = n - 1; k > 0; k--) pts.push(pts[k]);
      return pts;
    };
    const east = EASTV;
    if (old) {
      W.npc({ kind: 'guard-maratha', patrol: walk(SALIENTS[0], 6), count: 2 });
      W.npc({ kind: 'guard-maratha', patrol: walk(SALIENTS[8], 8), count: 2 });
      W.npc({ kind: 'guard-maratha', patrol: walk(SALIENTS[18], 8), count: 2 });
      W.npc({ kind: 'guard-maratha', patrol: walk(SALIENTS[28], 8), count: 2 });
      W.npc({ kind: 'guard-maratha', patrol: walk(SALIENTS[35], 5), count: 1 });
      W.npc({ kind: 'guard-maratha', at: F(GATE, -2.4, -1.6), face: 330, mode: 'idle' });
      W.npc({ kind: 'guard-maratha', at: F(GATE, 2.4, -1.6), face: 330, mode: 'idle' });
      W.npc({ kind: 'guard-maratha', at: GF(-1.5, 2.3), face: 210, mode: 'idle' });
      W.npc({ kind: 'guard-maratha', at: TOWER, h: TOWER_TOP, mode: 'idle', face: 250 });
      W.npc({ kind: 'sailor', circle: [...GF(-14.5, 8), 3.5], count: 4 });
      W.npc({ kind: 'priest', circle: [14, 0, 4], count: 1 });
      W.npc({ kind: 'villager', zone: east, count: 5 }); W.npc({ kind: 'woman-red', zone: east, count: 3 }); W.npc({ kind: 'woman-green', zone: east, count: 2 });
      W.npc({ kind: 'courtier', circle: [...PALACE, 9], count: 2 });
      W.npc({ kind: 'woman-indigo', circle: [-114, -18, 9], count: 2 });
      W.npc({ kind: 'goat', zone: WESTV, count: 4 });
    } else if (mid) {
      W.npc({ kind: 'boatman', circle: [...GF(-14.5, 8), 3.5], count: 2 });
      W.npc({ kind: 'fisherwoman', circle: [...GF(-14, 2), 3], count: 2 });
      W.npc({ kind: 'villager', zone: east, count: 6 }); W.npc({ kind: 'woman-red', zone: east, count: 3 }); W.npc({ kind: 'woman-green', zone: east, count: 3 }); W.npc({ kind: 'woman-indigo', zone: east, count: 2 });
      W.npc({ kind: 'priest', circle: [14, 0, 4], count: 1 });
      W.npc({ kind: 'pilgrim', circle: [8, 2, 10], count: 2 });
      W.npc({ kind: 'fisherwoman', circle: [SALLY.x + SALLY_OUT[0] * 8, SALLY.y + SALLY_OUT[1] * 8, 6], count: 2 });
      W.npc({ kind: 'cow', zone: east, count: 3 }); W.npc({ kind: 'goat', zone: WESTV, count: 3 });
      W.npc({ kind: 'officer', patrol: walk(SALIENTS[1], 4), count: 1 });
    } else {
      W.npc({ kind: 'boatman', circle: [...GF(-14.5, 8), 3.5], count: 3 });
      W.npc({ kind: 'asi-guard', at: F(GATE, -2.6, -2.2), face: 330, mode: 'idle' });
      W.npc({ kind: 'tourist-a', circle: [...F(GATE, -6, -8), 6], count: 3 }); W.npc({ kind: 'tourist-b', circle: [12, 2, 14], count: 3 });
      W.npc({ kind: 'tourist-c', circle: [-110, -18, 18], count: 3 }); W.npc({ kind: 'tourist-d', circle: [60, 30, 30], count: 3 });
      W.npc({ kind: 'tourist-a', circle: [SALLY.x + SALLY_OUT[0] * 8, SALLY.y + SALLY_OUT[1] * 8, 7], count: 3 });
      W.npc({ kind: 'student', circle: [-30, -10, 22], count: 6, speed: 1.5 });
      W.npc({ kind: 'tourist-c', patrol: walk(SALIENTS[0], 5), count: 2 });
      W.npc({ kind: 'tourist-b', patrol: walk(SALIENTS[14], 6), count: 2 });
      W.npc({ kind: 'tourist-d', at: TOWER, h: TOWER_TOP, mode: 'idle', face: 240 });
      W.npc({ kind: 'villager', zone: east, count: 3 }); W.npc({ kind: 'woman-red', zone: east, count: 2 }); W.npc({ kind: 'priest', circle: [14, 0, 4], count: 1 });
    }

    // ---------------- places
    for (const p of POIS) {
      const q = Object.assign({}, p, { eraNote: p.eraNote?.[era] || null });
      if (p.vi != null) { const [x, y] = WALL[p.vi]; q.at = [x - OUT[p.vi][0] * 0.8, y - OUT[p.vi][1] * 0.8]; q.h = wallTop(x); }
      if (p.vb != null) { const b = bastionTop[p.vb]; q.at = [b.x, b.y]; q.h = b.h; }
      if (p.id === 'nagarkhana') q.h = wallTop(NG[0]) + 0.2;
      if (p.id === 'prints') q.h = BM_TOP;
      if (p.id === 'nishan') q.h = TOWER_TOP;
      if (p.id === 'foundations') q.h = 1.6;
      delete q.vi; delete q.vb;
      W.poi(q);
    }
    W.spawn(SPAWN[0], SPAWN[1], 1.6, Math.atan2(GA[0], -GA[1]) / DEG);
  },
};
