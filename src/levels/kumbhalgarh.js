// Kumbhalgarh — Rana Kumbha's hill fort on the western Aravalli range, Rajsamand district, Rajasthan.
// The plan is compressed about 3x (planScale 3) and so is the terrain relief (vScale 3): the 950-1,100 m ground of the
// research reads as 0-46 units, while walls, gates and buildings keep human scale. Layout after the written accounts in
// research/kumbhalgarh.md (ICOMOS 2013, Indian Vagabond, Anantam IAS, Wikipedia): the road from Kelwara comes up from
// the south through Aret, Halla and Hanuman Pols to Ram Pol; the Vedi complex lies right of Ram Pol with Neelkanth
// behind it; one winding road climbs through five more gates to the palaces on the summit (Kartargarh). ASI inventory
// entry 130 includes a scaled whole-fort plan with boundary and labeled internal structures, but it is not yet
// digitized or registered to terrain. The 2010 visitor-map photo remains an unscaled visual reference. The current
// wall ring is therefore a schematic placeholder, not a measured-plan reconstruction.
import { rectPts, ellipsePts, wallStairs } from './kit.js';
import { TAG } from '../core/nav.js';
import { Terrain } from '../core/terrain.js';

const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const xy = (p) => [p[0], p[1]];
const DEG = Math.PI / 180;
// rounded rectangle polygon (CCW)
function roundRect(cx, cy, w, d, r, n = 4) {
  const out = [];
  const corners = [[w / 2 - r, d / 2 - r, 0], [-w / 2 + r, d / 2 - r, 90], [-w / 2 + r, -d / 2 + r, 180], [w / 2 - r, -d / 2 + r, 270]];
  for (const [ox, oy, a0] of corners) for (let i = 0; i <= n; i++) { const a = (a0 + (90 * i) / n) * DEG; out.push([cx + ox + Math.cos(a) * r, cy + oy + Math.sin(a) * r]); }
  return out;
}
// band polygon along an arc of a rotated ellipse (for curved dams): angles in degrees, local frame
function arcBand(cx, cy, rx, ry, rot, a0, a1, half, n = 12) {
  const c = Math.cos(rot * DEG), s = Math.sin(rot * DEG);
  const P = (a, k) => { const x = Math.cos(a * DEG) * (rx + k), y = Math.sin(a * DEG) * (ry + k); return [cx + x * c - y * s, cy + x * s + y * c]; };
  const outer = [], inner = [];
  for (let i = 0; i <= n; i++) { const a = lerp(a0, a1, i / n); outer.push(P(a, half)); inner.push(P(a, -half)); }
  return outer.concat(inner.reverse());
}
const onRotEllipse = (cx, cy, rx, ry, rot, a) => { const c = Math.cos(rot * DEG), s = Math.sin(rot * DEG); const x = Math.cos(a * DEG) * rx, y = Math.sin(a * DEG) * ry; return [cx + x * c - y * s, cy + x * s + y * c]; };

// ------------------------------------------------------------------ main ring: wall centre-line on the ridge crests [x, y, crest h]
const RING = [
  [-20, -152, 11.0], [8, -158, 14], [40, -170, 19], [78, -162, 24], [114, -178, 27], [152, -160, 23], [190, -170, 19],
  [226, -142, 16], [246, -104, 13], [256, -66, 10], [262, -32, 8.0], [258, 4, 12], [272, 44, 19], [256, 88, 24],
  [268, 132, 27], [240, 178, 29], [198, 208, 26], [150, 234, 22], [104, 220, 18], [60, 246, 21], [8, 234, 25],
  [-46, 254, 28], [-102, 238, 31], [-152, 250, 33], [-200, 216, 31], [-238, 172, 29], [-260, 120, 31], [-248, 68, 34],
  [-266, 16, 36], [-254, -36, 37], [-266, -88, 33], [-238, -132, 29], [-198, -162, 25], [-152, -154, 21],
  [-108, -176, 18], [-66, -162, 15],
];
const WALL = RING.map(xy);
// a closed path as overlapping open runs of k segments (a closed ridge op over the whole map is slow)
const chunks = (pts, k) => { const out = []; for (let i = 0; i < pts.length; i += k) { const run = []; for (let j = 0; j <= k; j++) run.push(pts[(i + j) % pts.length]); out.push(run); } return out; };
const RAMPOL = [-20, -152], RAM_H = 10.6;
// stairs to the wall-walk on the inner face just west of Ram Pol, and the level pad they stand on
const WST = (() => {
  const A = RING[RING.length - 1], B = RING[0], L = Math.hypot(B[0] - A[0], B[1] - A[1]);
  const t = [(B[0] - A[0]) / L, (B[1] - A[1]) / L], n = [-t[1], t[0]];
  const P = (along, off) => [B[0] - t[0] * along + n[0] * off, B[1] - t[1] * along + n[1] * off];
  return { at: P(17, 0), pad: P(25.5, 6.2), rot: Math.atan2(t[1], t[0]) / DEG };
})();
const VIJAY = [262, -32], VIJAY_H = 8.0;

// ------------------------------------------------------------------ approach from Kelwara (south): a walled corridor between two ridges
const APPROACH = [
  [9, -318, -4.5], [8, -292, -0.4], [7, -278, 3.0], [6, -271, 5.2], [5, -266, 7.0], [5, -258, 7.0],
  [3, -250, 6.0], [0, -240, 4.8], [-3, -232, 4.2], [-4, -224, 4.2], [-6, -214, 4.6], [-10, -202, 5.8],
  [-13, -194, 6.8], [-14, -186, 6.8], [-16, -176, 8.2], [-18, -166, 9.6], [-20, -158, RAM_H], [-20, -146, RAM_H],
];
const ARET = [5, -262], ARET_H = 7.0;
const HALLA = [-3.5, -228], HALLA_H = 4.2;
const HANUMAN = [-13.5, -190], HANUMAN_H = 6.8;
const W1 = [[-38, -318, 3], [-40, -288, 12], [-42, -262, 16], [-44, -244, 17], [-48, -226, 18], [-52, -206, 18], [-56, -188, 17], [-62, -174, 16], [-66, -162, 15]];
const E1 = [[42, -318, 3], [42, -288, 12], [42, -262, 16], [38, -244, 17], [34, -226, 18], [30, -206, 18], [30, -190, 18], [34, -178, 19], [40, -170, 19]];
const ARET_RIDGE = [[-42, -262, 16], [-22, -263, 11], [-8, -262, 8.4], [5, -262, 7.6], [18, -262, 8.4], [30, -262, 12], [42, -262, 16]];
const BAVDI = [15, -214], BAVDI_H = 4.6;
const CARPARK = [-2, -171];

// ------------------------------------------------------------------ citadel (Kartargarh) and the ramp of five gates
const CIT = [-66, -14];                      // centre of the citadel terrace
const TERRACE_H = 36, SUMMIT_H = 45.7;       // 36 u -> ~1,058 m; 45.7 u -> ~1,087 m (the highest peak)
const SUMMIT = [-74, -4];
const facePlane = (x, y) => 10.6 + 0.33 * (y + 128);
function leg(a, b, flats = []) {
  // a -> b with heights interpolated; level stretches (gate floors) centred at fraction t
  const L = Math.hypot(b[0] - a[0], b[1] - a[1]);
  const flat = flats.reduce((s, f) => s + f.len, 0);
  const rate = (b[2] - a[2]) / (L - flat);
  const at = (s, h) => [a[0] + (b[0] - a[0]) * s / L, a[1] + (b[1] - a[1]) * s / L, h];
  const pts = [a.slice()], gates = [];
  let h = a[2], s = 0;
  for (const f of flats) {
    const s0 = f.t * L - f.len / 2, s1 = f.t * L + f.len / 2;
    h += (s0 - s) * rate; pts.push(at(s0, h)); pts.push(at(s1, h)); s = s1;
    gates.push({ at: xy(at(f.t * L, h)), h, dir: [(b[0] - a[0]) / L, (b[1] - a[1]) / L] });
  }
  pts.push(b.slice());
  return { pts, gates };
}
const F0 = [-28, -128, RAM_H], H1 = [-92, -102, facePlane(-92, -102)], H2 = [-36, -76, facePlane(-36, -76)];
const GP = [-74, -49.5];
const L1 = leg(F0, H1, [{ t: 0.36, len: 8 }]);
const L2 = leg(H1, H2, [{ t: 0.45, len: 8 }, { t: 0.86, len: 7 }]);
const L3 = leg(H2, [-66, -56, 33.4], [{ t: 0.56, len: 7 }]);
const CRAMP = [...L1.pts, ...L2.pts.slice(1), ...L3.pts.slice(1), [-72.5, -56.5, 35.2], [-74, -53, TERRACE_H], [-74, -42, TERRACE_H]];
const RAMP_GATES = { bhairon: L1.gates[0], nimboo: L2.gates[0], chaugan: L2.gates[1], pagda: L3.gates[0] };
const FACE = [[-24, -136], [-108, -108], [-104, -60], [-50, -52], [-22, -66]];
const TERRACE = ellipsePts(CIT[0], CIT[1], 50, 40, 40, 0, 0.03, 5);
const CIT_WALL = ellipsePts(CIT[0], CIT[1], 46, 36, 40, 0, 0.03, 5);
const SUMMIT_POLY = roundRect(SUMMIT[0], SUMMIT[1], 30, 22, 6);

// ------------------------------------------------------------------ water: embanked tanks and the lower fort
const LK = { c: [142, 160], rx: 40, ry: 24, rot: 18, ring: 6.4, floor: 1.0, water: 4.4, dam: 6.8 };
const BV = { c: [-22, 150], rx: 26, ry: 15, rot: -8, ring: 7.4, floor: 2.4, water: 5.8, dam: 7.8 };
const tankRing = (T) => ellipsePts(T.c[0], T.c[1], T.rx, T.ry, 28, T.rot, 0, 1).map((p) => [p[0], p[1], T.ring]);
const LOWER = [[120, -40], [210, -50], [232, -110], [150, -132], [100, -90]];
const BADVA_POI = onRotEllipse(BV.c[0], BV.c[1], BV.rx, BV.ry, BV.rot, -95);
const MAMADEV = [176, -84], MAMADEV_H = 1.2;
const BAWAN = [112, 8], BAWAN_H = 8.2;
// ASI inventory 130(a), p.173: scaled plan reads approximately 28 x 56 m outside.
// At 0.9 m per local unit, use a 31 x 62 unit north-south enclosure.
const BAWAN_COURT = { w: 31, d: 62 };
const GOLERA = [40, 38];

// ------------------------------------------------------------------ places (research section 8)
const ICOMOS = 'https://whc.unesco.org/document/153036';
const ASI_POL_INVENTORY = 'https://ignca.gov.in/Asi_data/88329.pdf';
const ASI_BAWAN_PLAN = ASI_POL_INVENTORY + '#page=192';
const ASI_NEELKANTH_PLAN = ASI_POL_INVENTORY + '#page=193';
const IV = 'https://indianvagabond.com/2019/02/20/places-to-visit-in-kumbhalgarh/?amp=1';
const WPK = 'https://en.wikipedia.org/wiki/Kumbhalgarh';
const POIS = [
  { id: 'wall', at: [-97, -172], title: 'The Great Wall of Mewar', text: 'Rana Kumbha\'s ramparts were built in 1443–1458 on older foundations, in rubble and brick laid in lime mortar. ICOMOS gives the main perimeter as about 14 km, mostly 3–5 m high and reinforced with round bastions. Popular accounts stretch the walls to 36 km, wide enough in places for horsemen to ride abreast.', source: ICOMOS, r: 7, hTol: 3,
    eraNote: { '1458': 'This is the year the circuit was finished, after fifteen years of building.', '1820': 'William Prinsep\'s \'S.E. View of the Fort of Kumbhalgarh\' was engraved for his history of the British campaigns of 1813–1818, published in 1820.', today: 'Visitors walk stretches of the wall-walk near Ram Pol; the whole circuit takes about two days on foot.' } },
  { id: 'aret', at: [5, -272], title: 'Aret Pol', text: 'ASI records an east-facing arched passage, 2.56 m wide, flanked by semicircular bastions. Its watchtower was used for mirror signalling to other parts of the fort. The scene preserves the measured passage width; its location and facing are still schematic.', source: ASI_POL_INVENTORY, r: 7,
    eraNote: { '1820': 'Patrick Young Waugh drew the \'Fort of Kommulmair\' in 1818–19, the earliest dated view of the fort in the catalogue.', today: 'The fort lies about 80 km north of Udaipur, at the end of the road from Kelwara.' } },
  { id: 'halla', at: [4, -220], title: 'Halla Pol and the Badshahi Bavdi', text: 'ASI records an east-facing passage 3.70 m wide, with a semicircular bastion on its west side. The nearby Badshahi Bavdi is a later water feature; neither it nor the gate has been georeferenced from the survey plan.', source: ASI_POL_INVENTORY, r: 8,
    eraNote: { '1458': 'The Badshahi Bavdi will not be dug for another 120 years, after Shahbaz Khan\'s siege of 1578.', '1820': 'By now the stepped tank beside the road was some 240 years old.', today: 'ICOMOS places Halla Pol in the buffer zone, outside the inscribed property, and asked for the boundary to be extended to include it.' } },
  { id: 'hanuman', at: [-12, -198], title: 'Hanuman Pol', text: 'ASI records a west-facing, 3.60 m-wide stone passage with wooden doors and semicircular bastions on both sides; a 2 m × 0.71 m Hanuman image stands nearby. The scene has corrected the passage width and bastion form, while its placement and facing remain schematic.', source: ASI_POL_INVENTORY, r: 7 },
  { id: 'rampol', at: [-19, -164], title: 'Ram Pol', text: 'ASI records the main entrance as a 4 m-wide south-facing passage between two bastions. Beyond it, temples line the plateau and a winding road climbs through the remaining gates; the route geometry is not yet digitized from a measured plan.', source: ASI_POL_INVENTORY, r: 7,
    eraNote: { today: 'Cars stop just outside, where a small settlement has grown up around the main entrance.' } },
  { id: 'vedi', at: [0, -132], title: 'Vedi Temple Complex', text: 'Rana Kumbha built this complex in 1457, after completing the fort, as a place to perform yajna (fire sacrifice). It consists of a sacrificial platform, a square chhatri and a triple shrine, immediately right of Ram Pol.', source: IV, r: 7,
    eraNote: { '1458': 'Finished only the year before, in 1457.' } },
  { id: 'neelkanth', at: [20, -121], title: 'Neelkanth Mahadev Temple', text: 'ASI records a raised, open pillared mandapa around a four-sided shrine, reached from the west by steps, with Nandi before the western opening. The scene now follows the scaled outer plan and removes the unsupported seven-dome roof; cardinal sanctum doors and a correct Nandi sculpture remain to be modeled.', source: ASI_NEELKANTH_PLAN, r: 7,
    eraNote: { '1458': 'Built this very year.' } },
  { id: 'parshvanath', at: [-6, -117], title: 'Parshvanath Temple', text: 'A Jain temple beside Neelkanth Mahadev, built by Nar Singh Pokhad around 1451 according to Indian Vagabond; other sources date it to 1513. A Ganesha image inside suggests it may once have been a Brahmanical temple.', source: IV, r: 6,
    eraNote: { '1458': 'If the 1451 date is right, the temple is only a few years old.', '1820': 'Patrick Waugh drew a \'Jain temple in the fortress of Komulmer\' for Tod\'s Annals at about this time.' } },
  { id: 'kumbha', at: [-56, -39], title: 'Kumbha Mahal', text: 'Rana Kumbha\'s 15th-century palace (1443–1468), with men\'s and women\'s apartments, lower and older than the Badal Mahal. Next to it a small projecting wing, the Jhali Rani ka Malia, is revered as the birthplace of Maharana Pratap.', source: ICOMOS, r: 7, hTol: 4,
    eraNote: { '1458': 'Its building years run from 1443 to 1468, so work is still going on.', '1820': 'Patrick Waugh\'s drawing \'Citadel of the hill\' of about 1820 was engraved by Finden for Tod\'s Annals in 1829.', today: 'ICOMOS notes that some parts of the palace require attention.' } },
  { id: 'badal', at: [-74, -9], title: 'Badal Mahal, the Palace of Clouds', text: 'Rana Fateh Singh (r. 1884–1930) added this palace on the highest point of the fort, the one major later addition to Kumbha\'s coherent design. Its men\'s and women\'s wings stand around a courtyard, with painted chambers and views over the ridges to the desert plains.', source: ICOMOS, r: 7, hTol: 4,
    eraNote: { '1458': 'Fateh Singh\'s palace on this summit is more than four centuries in the future.', '1820': 'Fateh Singh\'s palace on this summit is still more than sixty years in the future.', today: 'From its roof terraces visitors look out over the walls and the Kumbhalgarh Wildlife Sanctuary.' } },
  { id: 'golera', at: GOLERA, title: 'Golera Group', text: 'Nine shrines near the centre of the fort, five Brahmanical and four Jain. Some date to about 1424 and building went on here into the 18th century; five rural houses stand beside them.', source: ICOMOS, r: 9,
    eraNote: { '1458': 'Only the oldest shrines stand yet; the group grew for another three centuries.', today: 'ICOMOS notes that some temples of the Golera group require attention.' } },
  { id: 'bawan', at: [112, -10], title: 'Bawan Devri (52 shrines)', text: 'The ASI plan records fifty small cells around two larger shrines, and its inventory says the enclosure has one north entrance. A 1464 inscription dates the complex. The model follows the scaled long-axis footprint; the fine room plan remains approximate.', source: ASI_BAWAN_PLAN, r: 8,
    eraNote: { '1458': 'Its inscriptions date from 1464, six years after this moment, so the temple is not shown.', '1820': 'Waugh\'s sketch \'Ruins in Komulmair\', etched for Tod\'s Annals, dates from about this time.' } },
  { id: 'mamadev', at: [174, -93], title: 'Mamadev Temple and Kund', text: 'Low down in the fort stands the Mamadev temple, built by Rana Kumbha in 1460, with a kund (tank) beside it. Its four inscribed slabs, one tracing Mewar\'s history from its founder Guhil to Kumbha\'s reign, are now in a museum in Udaipur.', source: 'https://prod.incredibleindia.gov.in/content/incredible-india-v2/en/destinations/kumbalgarh/mammadev-temple.html', r: 8,
    eraNote: { '1458': 'The temple was built in 1460, two years after this moment, so only the kund is shown.', today: 'ICOMOS lists the small temple near the Mamadeo baori among the structures that need conservation.' } },
  { id: 'water', at: BADVA_POI, title: 'Water works', text: 'ICOMOS describes the fort\'s water system as ingenious. It singles out the Badva Bund, a 15th-century dam, and the Langan Baori, a 15th-century step-well.', source: ICOMOS, r: 8, hTol: 4 },
];

// ------------------------------------------------------------------ terrain
function baseOps() {
  return [
    { op: 'base', h: -6 },
    // the plateau inside the walls
    { op: 'raise', poly: WALL.filter((_, i) => i % 2 === 0), h: 5, edge: 18, rough: 2.5, roughScale: 34 },
    { op: 'noise', amp: 3, scale: 52 },
    // inner hills and the central plateau of the Golera temples
    { op: 'raise', poly: ellipsePts(46, 40, 72, 54, 24, 15, 0.12, 3), h: 9.5, edge: 28, rough: 1.5 },
    { op: 'hill', x: -160, y: 118, rx: 82, ry: 62, rot: 20, h: 16, base: 5, top: 0.12, rough: 3, roughScale: 16 },
    { op: 'hill', x: -66, y: 202, rx: 60, ry: 36, h: 12, base: 5, top: 0.1, rough: 2.5 },
    { op: 'hill', x: 214, y: 150, rx: 52, ry: 50, h: 14, base: 5, rough: 2.5 },
    { op: 'hill', x: 62, y: 172, rx: 40, ry: 32, h: 9, base: 6, rough: 2 },
    { op: 'hill', x: 200, y: 50, rx: 48, ry: 42, h: 12, base: 5, rough: 2.5 },
    { op: 'hill', x: -190, y: -70, rx: 56, ry: 64, h: 14, base: 5, rough: 2.5 },
    // summit massif: broad hill, the south-east face carrying the ramp, the citadel terrace and the summit rock
    { op: 'hill', x: CIT[0], y: CIT[1], rx: 118, ry: 104, h: 31, base: 5, top: 0.34, rough: 2.5, roughScale: 14 },
    { op: 'raise', poly: FACE, h: facePlane, edge: 16 },
    { op: 'raise', poly: TERRACE, h: TERRACE_H, edge: 7, profile: 'cliff' },
    { op: 'raise', poly: SUMMIT_POLY, h: SUMMIT_H, edge: 5, profile: 'cliff' },
    // valleys: the lower fort (Mamadev); embanked tanks: Lakhola and Badva
    { op: 'dig', poly: LOWER, h: 0.6, edge: 30 },
    { op: 'dig', poly: ellipsePts(LK.c[0], LK.c[1], LK.rx - 7, LK.ry - 6, 28, LK.rot, 0, 1), h: LK.floor, edge: 5 },
    { op: 'ridge', path: tankRing(LK), closed: true, w: 3, edge: 7 },
    { op: 'dig', poly: ellipsePts(BV.c[0], BV.c[1], BV.rx - 6, BV.ry - 4.5, 24, BV.rot, 0, 1), h: BV.floor, edge: 4 },
    { op: 'ridge', path: tankRing(BV), closed: true, w: 3, edge: 7 },
    // ridge carrying the main wall, and the ridges of the approach corridor
    ...chunks(RING, 4).map((path) => ({ op: 'ridge', path, w: 10, edge: 28 })),
    { op: 'ramp', path: APPROACH, w: 44, edge: 16 },
    { op: 'ridge', path: W1, w: 8, edge: 22 },
    { op: 'ridge', path: E1, w: 8, edge: 22 },
    { op: 'ridge', path: ARET_RIDGE, w: 6, edge: 14 },
    // outer hills (Kumbhalgarh sanctuary)
    { op: 'hill', x: -150, y: -262, rx: 90, ry: 50, h: 10, base: -6, rough: 3 },
    { op: 'hill', x: 170, y: -264, rx: 100, ry: 46, h: 9, base: -6, rough: 3 },
  ];
}
// The relief does not change between eras: build it once and hand it to each era through a 'base' op.
let _base = null;
function baseTerrain(def) {
  if (_base) return _base;
  _base = new Terrain({ bounds: def.bounds, stride: def.stride, seed: def.seed });
  _base.build(baseOps());
  return _base;
}
// inner roads: heights sampled from the base terrain and smoothed, with pinned heights at chosen vertices
function roadPath(T, pts, pins = {}) {
  const dense = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1], n = Math.max(1, Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]) / 6));
    for (let k = 0; k < n; k++) dense.push([lerp(a[0], b[0], k / n), lerp(a[1], b[1], k / n), i + k / n]);
  }
  dense.push([...xy(pts[pts.length - 1]), pts.length - 1]);
  let h = dense.map((p) => T.heightAt(p[0], p[1]));
  for (let it = 0; it < 4; it++) h = h.map((v, i) => { let s = 0, c = 0; for (let d = -2; d <= 2; d++) { const j = i + d; if (j >= 0 && j < h.length) { s += h[j]; c++; } } return s / c; });
  for (const [idx, ph] of Object.entries(pins)) {
    const i0 = dense.findIndex((p) => p[2] === +idx);
    if (i0 < 0) continue;
    for (let i = 0; i < dense.length; i++) { const w = clamp(1 - Math.abs(i - i0) / 3, 0, 1); h[i] = lerp(h[i], ph, w); }
  }
  return dense.map((p, i) => [p[0], p[1], +h[i].toFixed(2)]);
}
const ROADS = {
  temple: [[-8, -130], [4, -122], [7, -112], [8, -98], [12, -76], [20, -44], [32, -10], [40, 20]],
  north: [[40, 20], [52, 56], [70, 86], [96, 112], [112, 133]],
  badva: [[52, 56], [30, 84], [14, 108], [2, 136]],
  east: [[32, -10], [62, -8], [96, -4], [112, -12]],
  lower: [[112, -12], [128, -50], [152, -72], [170, -80], [210, -64], [240, -42], [VIJAY[0] - 8, VIJAY[1]]],
};

// ------------------------------------------------------------------ helpers for the build
// temple on its own plinth: W.temple centres its plinth on the mandapa, so the back of the sanctum would overhang it;
// a platform under the whole footprint (plus a forecourt) covers that, and the temple's own plinth is kept inside it.
function shrine(W, o) {
  const w = o.w ?? 4, md = o.mandapa === false ? null : Object.assign({ d: w * 1.1, w: w * 1.15, h: w * 0.55 }, o.mandapa || {});
  const mdD = md ? md.d : 0, mdW = md ? md.w : 0;
  const rot = o.rot ?? 0, c = Math.cos(rot * DEG), s = Math.sin(rot * DEG);
  const T = (u, v) => [o.x + u * c - v * s, o.y + u * s + v * c];
  const v0 = -mdD - w / 2 - 1.4, v1 = w + 1.2, hw = Math.max(w, mdW) / 2 + 1.35;
  const poly = [T(-hw, v0), T(hw, v0), T(hw, v1), T(-hw, v1)];
  let lo = Infinity; for (const p of poly) lo = Math.min(lo, W.ground(p[0], p[1]));
  const top = (o.base ?? lo) + (o.plinth ?? 0.9);
  W.platform({ poly, h: top + 0.02, color: o.color || 'stone', tag: TAG.temple, planCls: 'temple-plinth' });
  W.temple(Object.assign({}, o, { base: top - 0.3, plinth: 0.3, stairs: false, mandapa: md || false }));
  if (top - lo > 0.4 && o.stairs !== false) {
    const run = Math.max(1.4, (top - lo) / 0.5);
    W.stairs({ from: T(0, v0 - run), to: [...T(0, v0 + 0.05), top + 0.02], w: Math.min(3, w * 0.7), color: o.color || 'stone' });
  }
  return top;
}
// Wall-walk profile for the main ring: it follows the ridge crest (h above the higher of the centre and inner-face
// ground, smoothed), rises a little at the gates so the arches clear, and levels into a landing at each bastion so the
// bastion tops sit one small step above the walk. Between landings the walk keeps the crest's shape.
function ringProfile(W, wall, plateaus, gateS, H) {
  const L = wall.len, N = Math.ceil(L), d = L / N;
  const cd = (a, b) => { const x = ((a - b) % L + L) % L; return Math.min(x, L - x); };
  const raw = new Float32Array(N);
  for (let k = 0; k < N; k++) {
    const f = W.wallFrame(wall, k * d);
    const g = Math.max(W.ground(f.x, f.y), W.ground(f.x - f.ox * 2.8, f.y - f.oy * 2.8));
    let extra = 0; for (const gs of gateS) extra = Math.max(extra, 1.4 * clamp(1 - cd(k * d, gs) / 16, 0, 1));
    raw[k] = g + H + extra;
  }
  const sm = new Float32Array(N);
  for (let k = 0; k < N; k++) { let t = 0; for (let j = -8; j <= 8; j++) t += raw[(k + j + N) % N]; sm[k] = Math.max(t / 17, raw[k] - 1.0); }
  const at = (arr, s) => { const u = (((s % L) + L) % L) / d, i = Math.floor(u) % N, f = u - Math.floor(u); return lerp(arr[i], arr[(i + 1) % N], f); };
  const P = plateaus.map((p) => ({ s0: p.s - p.half, s1: p.s + p.half, h: at(sm, p.s) })).sort((a, b) => a.s0 - b.s0);
  const out = new Float32Array(N);
  for (let k = 0; k < N; k++) {
    const s = k * d;
    let inside = null;
    for (const p of P) if (cd(s, (p.s0 + p.s1) / 2) <= (p.s1 - p.s0) / 2) { inside = p; break; }
    if (inside) { out[k] = inside.h; continue; }
    // previous plateau end and next plateau start (circular)
    let prev = null, next = null, dp = Infinity, dn = Infinity;
    for (const p of P) {
      const a = ((s - p.s1) % L + L) % L, b = ((p.s0 - s) % L + L) % L;
      if (a < dp) { dp = a; prev = p; }
      if (b < dn) { dn = b; next = p; }
    }
    const t = dp / (dp + dn || 1);
    out[k] = sm[k] + lerp(prev.h - at(sm, prev.s1), next.h - at(sm, next.s0), t);
  }
  return (s) => at(out, s);
}
// a short wall across a road with a gate in it (the "pols" on the ramp)
function roadGate(W, g, name, opts = {}) {
  const n = [-g.dir[1], g.dir[0]];
  const half = opts.half ?? 9;
  const path = [[g.at[0] - n[0] * half, g.at[1] - n[1] * half], g.at, [g.at[0] + n[0] * half, g.at[1] + n[1] * half]];
  const wall = W.wall({ path, outer: 'left', h: opts.h ?? 7.2, thick: 3.4, batter: 0.06, parapet: { h: 1.0, t: 0.5 }, merlon: { style: 'kangura', w: 0.9, gap: 0.6, h: 0.9 }, color: 'wall', walk: false });
  W.gate({ wall, at: g.at, width: opts.width ?? 3.8, spring: 3.8, rise: 1.9, floor: g.h, name, towers: opts.towers ?? { r: 3.0, dh: 1.4, off: 1.0 }, frameW: 0.6, upper: opts.upper });
  return wall;
}

// ------------------------------------------------------------------ level
export default {
  id: 'kumbhalgarh', name: 'Kumbhalgarh', native: { text: 'कुंभलगढ़', lang: 'hi', script: 'deva' },
  region: 'Rajsamand · Rajasthan', type: 'Hill fort', coords: [25.149167, 73.581111],
  poiCount: POIS.length, groundName: 'Outside the walls', datum: -316.67, datumLabel: 'above sea level',
  units: { planScale: 3, vScale: 3 },
  bounds: [-300, -318, 300, 282], stride: 2, seed: 17,
  water: null,
  apron: { h: -8 },
  view: { az: -50, el: 40, zoom: 64, introAt: [0, -20], introZoom: 560 },
  light: { sky: '#dde1da', sunAz: -125, sunEl: 42 },
  palette: {
    wall: '#7c746a', wallTop: '#8b8378', trim: '#d9d1c0', stone: '#8a8177', plaster: '#e3dccb', plasterDark: '#bdb29c',
    roof: '#7c6a58', dome: '#ddd6c6', grass: '#7c8a4a', dry: '#a8956a', rock: '#7d7a6b', cliff: '#66625a', sand: '#b9a17a',
    road: '#a8865a', court: '#a39a88', field: '#8d9550', paved: '#9d968a', tank: '#56664d', water: '#56664d',
    leaf: '#5f7d36', leafDry: '#9a8f55', trunk: '#5f4a36', flag: '#e08a1e', accent: '#c9a24a',
  },
  eraPalette: {
    '1458': { plaster: '#ebe5d6', grass: '#80904b' },
    '1820': { plaster: '#cfc5ae', plasterDark: '#b3a88f', grass: '#94915a', dry: '#b3a074', leaf: '#6b7a3a' },
    today: { plaster: '#ddd5c3', grass: '#6f8f3e' },
  },
  eras: [
    { id: '1458', year: '1458', label: 'Rana Kumbha\'s fort', short: 'Newly built', lens: 'engraving',
      summary: 'The year the walls were finished: new temples inside Ram Pol, a Rajput garrison on the ramparts, and Kumbha\'s palace still rising on the summit.',
      basis: 'Dates from the World Heritage nomination and the ICOMOS evaluation (walls 1443–1458, Kumbha Mahal 1443–1468) and from written accounts of the temples (Vedi 1457, Neelkanth 1458), with the UNESCO property map and Barad\'s CEPT thesis on the fort\'s medieval defences.',
      conjecture: 'No view of the fort survives from Kumbha\'s time. The layout is schematic; the garrison, colours and building works are reconstructed, and structures dated later (Badshahi Bavdi, Bawan Devri, Mamadev temple, Badal Mahal) are left out. Gates and tanks of unknown date are shown as Kumbha\'s.',
      sources: ['KUM-19', 'KUM-01', 'KUM-20', 'KUM-21', 'KUM-22'] },
    { id: '1820', year: '1820', label: 'Tod\'s drawings', short: 'Tod and Prinsep', lens: 'engraving',
      summary: 'The fort as Tod\'s artists drew it: grass on the ramparts, a few guards and priests, and Kumbha\'s old palace alone on the summit.',
      basis: 'Patrick Young Waugh\'s drawings for James Tod\'s Annals and Antiquities of Rajast\'han (1818–20, engraved 1829): the fort, the citadel of the hill, a Jain temple and ruins in the fort; and William Prinsep\'s S.E. view of the fort, engraved in 1820.',
      conjecture: 'The drawings themselves were not consulted for this reconstruction; the state of each building, the people and the vegetation are inferred from their titles and from today\'s remains.',
      sources: ['KUM-03', 'KUM-04', 'KUM-05', 'KUM-06', 'KUM-07', 'KUM-12', 'KUM-13', 'KUM-14', 'KUM-15', 'KUM-22'] },
    { id: 'today', year: 'Today', label: 'World Heritage site', short: 'Monument', lens: 'none',
      summary: 'One of the Hill Forts of Rajasthan World Heritage Site, with visitors on the wall-walk, the Badal Mahal on the summit and villagers among the temples.',
      basis: 'The ICOMOS evaluation of 2013 and the UNESCO property maps, Mary Binney Wheeler\'s 1978 photograph of the gateway and battlements, a general view of 1990, a photograph towards the Badal Mahal over a group of temples, and present-day visitor accounts.',
      conjecture: 'Positions inside the walls come from written descriptions, not a measured plan; the plan and the relief are both compressed about three times.',
      sources: ['KUM-16', 'KUM-17', 'KUM-11', 'KUM-01', 'KUM-21', 'KUM-22'] },
  ],
  terrain(era) {
    const T = baseTerrain(this);
    const ops = [{ op: 'base', h: (x, y) => T.heightAt(x, y) }];
    const road = (key, pins, w = 5) => ({ op: 'ramp', path: roadPath(T, ROADS[key], pins), w, edge: 3, paint: 'road' });
    ops.push(
      // the road from Kelwara and the gate floors
      { op: 'ramp', path: APPROACH, w: 7, edge: 3, paint: 'road' },
      { op: 'flatten', poly: rectPts(ARET[0], ARET[1], 12, 14, 0), h: ARET_H, edge: 3 },
      { op: 'flatten', poly: rectPts(HALLA[0], HALLA[1], 12, 12, 0), h: HALLA_H, edge: 3 },
      { op: 'flatten', poly: rectPts(HANUMAN[0], HANUMAN[1], 12, 12, 0), h: HANUMAN_H, edge: 3 },
      { op: 'flatten', poly: rectPts(BAVDI[0], BAVDI[1], 18, 18, 0), h: BAVDI_H, edge: 4 },
      { op: 'flatten', poly: rectPts(CARPARK[0], CARPARK[1], 16, 13, 0), h: 8.8, edge: 4 },
      // Ram Pol and the forecourt inside it, the temple court
      { op: 'flatten', poly: rectPts(RAMPOL[0], RAMPOL[1], 12, 16, 8), h: RAM_H, edge: 3 },
      { op: 'flatten', poly: rectPts(-18, -136, 30, 20, 0), h: RAM_H, edge: 5 },
      { op: 'flatten', poly: rectPts(WST.pad[0], WST.pad[1], 26, 7.4, WST.rot), h: 11.0, edge: 3 }, // foot of the wall stairs
      { op: 'flatten', poly: rectPts(16, -132, 26, 20, 0), h: 10.2, edge: 5 },                // Vedi
      { op: 'flatten', poly: rectPts(10, -106, 42, 18, 0), h: 7.6, edge: 6 },                 // Neelkanth and Parshvanath
      { op: 'flatten', poly: rectPts(-42, -138, 13, 12, 0), h: 11.2, edge: 3 },               // Ganesha temple
      // the citadel ramp, the Chaugan terrace and the citadel gate
      { op: 'flatten', poly: rectPts(H2[0] + 2, H2[1] - 1, 16, 12, 20), h: H2[2], edge: 4 },
      { op: 'flatten', poly: rectPts(-76, -118, 9, 9, 158), h: 13.6, edge: 3 },               // Charbhuja temple
      { op: 'ramp', path: CRAMP, w: 7, edge: 4, paint: 'road' },
      { op: 'flatten', poly: rectPts(GP[0], GP[1], 10, 12, 4), h: TERRACE_H, edge: 3 },
      // Vijay Pol
      { op: 'flatten', poly: rectPts(VIJAY[0], VIJAY[1], 20, 12, 82), h: VIJAY_H, edge: 4 },
      { op: 'ramp', path: [[VIJAY[0] + 6, VIJAY[1], VIJAY_H], [282, -36, 0], [300, -40, -6]], w: 5, edge: 3, paint: 'road' },
      { op: 'flatten', poly: rectPts(236, -54, 12, 12, 0), h: 7.0, edge: 4 },                 // Jain temples near Vijay Pol
      { op: 'flatten', poly: rectPts(238, -12, 12, 12, 0), h: 8.5, edge: 4 },
      // temple sites in the valleys
      { op: 'flatten', poly: rectPts(BAWAN[0], BAWAN[1], 36, 68, 0), h: BAWAN_H, edge: 7 },
      { op: 'flatten', poly: rectPts(MAMADEV[0], MAMADEV[1], 32, 22, 8), h: MAMADEV_H, edge: 6 },
      { op: 'flatten', poly: ellipsePts(GOLERA[0], GOLERA[1], 26, 22, 16, 0, 0, 1), h: 10.4, edge: 8 },
      // inner roads
      road('temple', { 0: RAM_H, 2: 8.2 }),
      road('north', { 0: 10.4 }), road('badva', { 3: BV.ring }), road('east', { 0: 10.4, 3: BAWAN_H }),
      road('lower', { 0: BAWAN_H, 3: MAMADEV_H, 6: VIJAY_H }),
      { op: 'edge', h: -8, w: 34 },
      { op: 'paint', poly: rectPts(-18, -136, 26, 16, 0), paint: era === 'today' ? 'paved' : 'court' },
      { op: 'paint', poly: rectPts(CARPARK[0], CARPARK[1], 14, 11, 0), paint: era === 'today' ? 'paved' : 'road' },
      { op: 'paint', poly: rectPts(10, -106, 38, 14, 0), paint: 'court' },
      { op: 'paint', poly: rectPts(BAWAN[0], BAWAN[1], 34, 66, 0), paint: era === '1458' ? 'mud' : 'court' },
      { op: 'paint', poly: rectPts(88, 46, 18, 26, 12), paint: 'field' },
      { op: 'paint', poly: rectPts(74, 76, 22, 14, 30), paint: 'field' },
      { op: 'paint', poly: rectPts(150, 30, 26, 18, -10), paint: 'field' },
    );
    return ops;
  },

  build(W) {
    const era = W.era;
    const old = era === '1458', tod = era === '1820', now = era === 'today';
    const KANGURA = { style: 'kangura', w: 1.0, gap: 0.7, h: 1.0 };

    // ---------------------------------------------------------------- the main wall on the ridges
    let profile = null;
    const wall = W.wall({ path: WALL, closed: true, top: (x, y, s) => profile(s ?? W.wallS(wall, x, y)), thick: 5.6, batter: 0.1, parapet: { h: 1.3, t: 0.7 }, merlon: KANGURA, color: 'wall' });
    W.zone(WALL, 'Inside the walls');
    const L = wall.len;
    const sRam = W.wallS(wall, ...RAMPOL), sVij = W.wallS(wall, ...VIJAY);
    const ds = (a, b) => Math.abs(((a - b) % L + L * 1.5) % L - L / 2);
    const fAt = (s) => { const f = W.wallFrame(wall, s); return [f.x, f.y]; };
    // round bastions at every bend of the ring and on the long runs, each on a level landing of the wall-walk
    const bastionS = [];
    let acc = 0;
    for (let i = 0; i < RING.length; i++) {
      const a = RING[i], b = RING[(i + 1) % RING.length];
      const segL = Math.hypot(b[0] - a[0], b[1] - a[1]);
      bastionS.push({ s: acc, r: 6.2, k: bastionS.length });
      if (segL > 44) bastionS.push({ s: acc + segL / 2, r: 5.2, k: bastionS.length });
      acc += segL;
    }
    const ringB = bastionS.filter((bs) => ds(bs.s, sRam) >= 26 && ds(bs.s, sVij) >= 16);
    profile = ringProfile(W, wall, ringB.map((bs) => ({ s: bs.s, half: bs.r * 0.98 })), [sRam, sVij], 8.5);
    W.gate({ wall, at: RAMPOL, width: 4, spring: 4.6, rise: 2.3, floor: RAM_H, name: 'Ram Pol', towers: { r: 6.5, dh: 2.0, off: 3.2 }, frameW: 0.8, frameUp: 1.0 });
    W.gate({ wall, at: VIJAY, width: 4.0, spring: 4.4, rise: 2.2, floor: VIJAY_H, name: 'Vijay Pol', towers: { r: 5.2, dh: 1.6, off: 2.6 }, frameW: 0.7, frameUp: 1.0 });
    const gunsAt = tod ? [3, 9, 47] : [];
    for (const bs of ringB) W.bastion({ at: fAt(bs.s), wall, r: bs.r, top: profile(bs.s) + 0.4, off: bs.r * 0.42, cannon: gunsAt.includes(bs.k) ? { len: 2.8, r: 0.28 } : false });
    // stairs up to the wall-walk just west of Ram Pol
    wallStairs(W, wall, { at: WST.at, dir: 1, run: 18 });

    // ---------------------------------------------------------------- the walled approach and its pols
    const OUTER = { h: 6.5, thick: 4.2, batter: 0.1, parapet: { h: 1.2, t: 0.6 }, merlon: KANGURA, color: 'wall' };
    W.wall(Object.assign({ path: W1.slice(2, -1).map(xy).concat([[-64.5, -167.5]]), outer: 'left' }, OUTER));
    W.wall(Object.assign({ path: E1.slice(2, -1).map(xy).concat([[38.5, -175.5]]), outer: 'right' }, OUTER));
    const CROSS = { h: 7.5, thick: 4.4, batter: 0.1, parapet: { h: 1.2, t: 0.6 }, merlon: KANGURA, color: 'wall', outer: 'right' };
    const aretW = W.wall(Object.assign({ path: [[-42, -262], [-20, -263], ARET, [24, -262], [42, -262]] }, CROSS));
    const hallaW = W.wall(Object.assign({ path: [[-48, -227], [-24, -228], HALLA, [16, -228], [34, -227]] }, CROSS));
    const hanW = W.wall(Object.assign({ path: [[-56, -189], [-34, -190], HANUMAN, [8, -190], [30, -190]] }, CROSS));
    W.gate({ wall: aretW, at: ARET, width: 2.56, spring: 4.2, rise: 2.1, floor: ARET_H, name: 'Aret Pol', towers: { r: 5.0, dh: 1.6, off: 2.4 }, frameW: 0.7 });
    W.gate({ wall: hallaW, at: HALLA, width: 3.70, spring: 4.2, rise: 2.1, floor: HALLA_H, name: 'Halla Pol', towers: { r: 4.6, dh: 1.4, off: 2.2 }, frameW: 0.7 });
    W.gate({ wall: hanW, at: HANUMAN, width: 3.60, spring: 4.2, rise: 2.1, floor: HANUMAN_H, name: 'Hanuman Pol', towers: { r: 4.8, dh: 2.4, off: 2.4 }, upper: 'pavilion', frameW: 0.7 });
    for (const p of [[-42, -262], [42, -262], [-48, -227], [34, -227], [-56, -189], [30, -190]]) W.bastion({ at: p, r: 4.8, dh: 0.8, anyWall: true, snap: false, h: 8 });
    // Badshahi Bavdi (after 1578) beside the road past Halla Pol
    if (!old) {
      W.tank({ x: BAVDI[0], y: BAVDI[1], r: 6.4, n: 4, rot: 45, waterDepth: 2.6, tiers: 6, color: 'stone' });
      W.zone(rectPts(BAVDI[0], BAVDI[1], 12, 12, 0), 'Badshahi Bavdi');
    }

    // ---------------------------------------------------------------- inside Ram Pol: Ganesha temple, Vedi, Neelkanth, Parshvanath
    W.zone(rectPts(-18, -136, 30, 20, 0), 'Inside Ram Pol');
    shrine(W, { x: -41, y: -138, rot: 90, w: 4, style: 'nagara', mandapa: { d: 3.6, w: 4.6, h: 2.4, roof: 'stepped' }, plinth: 0.8, flag: true });
    // Vedi complex: platform with the two-tiered yajna hall, a square chhatri and a triple shrine
    const vediTop = W.platform({ poly: rectPts(16, -132, 20, 14, 0), h: 12.4, color: 'stone', tag: TAG.temple, planCls: 'temple-plinth' });
    W.stairs({ from: [1.4, -132, 10.2], to: [6.05, -132, vediTop], w: 4, color: 'stone' });
    const vh = W.pavilion({ x: 20, y: -131.5, w: 9, d: 9, base: vediTop, plinth: 0.01, colH: 3.6, cols: [4, 4], roof: 'flat', color: 'stone', parapet: { h: 0.6, t: 0.3 }, stairs: false, walk: false, kind: 'temple' });
    W.pavilion({ x: 20, y: -131.5, w: 6, d: 6, base: vh.roofTop, plinth: 0.01, colH: 2.8, cols: [3, 3], roof: 'dome', domeShape: 'low', color: 'stone', stairs: false, walk: false, kind: 'temple' });
    W.chhatri({ x: 10, y: -127.5, base: vediTop, size: 3.2, h: 2.8, dome: 'half', color: 'stone' });
    for (const x of [8, 11, 14]) W.temple({ x, y: -136.2, rot: 0, w: 2.2, style: 'nagara', mandapa: false, plinth: 0.3, base: vediTop, color: 'stone', stairs: false, mini: false });
    W.zone(rectPts(16, -132, 20, 14, 0), 'Vedi Temple Complex');
    // Neelkanth Mahadev: the ASI 0–10 m plan reads approximately 26 x 38 m, north-south.
    // At 0.9 m per local unit this is a 29 x 42 unit pillared mandapa, rather than the old 15 x 13 box.
    const nk = W.pavilion({ x: 20, y: -104, w: 29, d: 42, plinth: 1.4, colH: 3.6, cols: [6, 6], roof: 'flat', color: 'stone', stairSide: 3, kind: 'temple' });
    W.building({ rect: [20, -104, 8, 8, 0], base: nk.top, h: 4.2, color: 'stone', roof: 'flat', parapet: false, windows: false, cornice: false, kind: 'temple' });
    W.zone(rectPts(2, -104, 3, 3, 0), 'Nandi at western opening (ASI location; sculpture not modeled)');
    W.zone(rectPts(20, -104, 30, 43, 0), 'Neelkanth Mahadev');
    shrine(W, { x: -6, y: -101.5, rot: 0, w: 5, style: 'jain', mandapa: { d: 4.5, w: 6, h: 2.8, roof: 'dome', domeShape: 'half' }, plinth: 1.0, flag: !old });
    W.zone(rectPts(-6, -104, 10, 14, 0), 'Parshvanath Temple');

    // ---------------------------------------------------------------- the ramp of five gates to Kartargarh
    roadGate(W, RAMP_GATES.bhairon, 'Bhairon Pol', { width: 2.37 });
    roadGate(W, RAMP_GATES.nimboo, 'Nimboo Pol', { width: 2.45 });
    roadGate(W, RAMP_GATES.chaugan, 'Chaugan Pol', { width: 2.60, towers: false, upper: 'chhatri', half: 7 });
    roadGate(W, RAMP_GATES.pagda, 'Pagda Pol', { width: 1.55, half: 7 });
    W.zone(rectPts(H2[0] + 2, H2[1] - 1, 14, 10, 20), 'Chaugan terrace');
    if (!old) shrine(W, { x: -76, y: -118, rot: 158, w: 3.6, style: 'nagara', mandapa: { d: 3.2, w: 4.2, h: 2.2, roof: 'stepped' }, plinth: 0.6 });

    // ---------------------------------------------------------------- Kartargarh, the citadel
    const cit = W.wall({ path: CIT_WALL, closed: true, h: 6.0, thick: 3.6, batter: 0.08, parapet: { h: 1.1, t: 0.55 }, merlon: KANGURA, color: 'wall' });
    W.gate({ wall: cit, at: GP, width: 2.04, spring: 4.0, rise: 2.0, floor: TERRACE_H, name: 'Ganesh Pol', towers: { r: 3.6, dh: 1.5, off: 1.4 }, frameW: 0.7, upper: 'chhatri' });
    for (const a of [-40, 0, 40, 80, 120, 160, 200, 238]) {
      const p = [CIT[0] + 46 * Math.cos(a * DEG), CIT[1] + 36 * Math.sin(a * DEG)];
      W.bastion({ at: p, wall: cit, r: 4.4, dh: 0.6, off: 1.8, flag: !now && a === 90 ? { pole: 6, color: '#e08a1e' } : false });
    }
    W.zone(ellipsePts(CIT[0], CIT[1], 44, 34, 20, 0, 0, 1), 'Kartargarh');
    // Kumbha Mahal (1443-1468): main block and the second (women's) block
    const kmCol = old ? 'plaster' : 'plasterDark';
    W.building({ rect: [-46, -26, 22, 13, 0], base: TERRACE_H - 0.3, storeys: 3, storeyH: 3.5, color: kmCol, roof: 'flat', merlon: 'kangura', windows: { style: 'arch', spacing: 2.6, w: 0.9, h: 1.6 }, jharokhas: { every: 7.5, size: 1.6, rows: [1, 2] }, kind: 'palace', chhatris: [[-55, -21], [-37, -21]], chhatriSize: 2.2, chhatriH: 2.0 });
    if (old) W.ruin({ rect: [-42, -8, 12, 9, 0], base: TERRACE_H - 0.3, h: 3.4, thick: 0.8, color: 'plaster', jag: false, doors: [{ edge: 0, at: 0.5, w: 2.4 }], windows: false });
    else if (tod) W.building({ rect: [-42, -8, 12, 9, 0], base: TERRACE_H - 0.3, storeys: 2, storeyH: 3.5, color: kmCol, roof: 'flat', merlon: 'kangura', windows: { style: 'jali', spacing: 2.4, w: 0.8, h: 1.2 }, kind: 'palace' });
    else W.ruin({ rect: [-42, -8, 12, 9, 0], base: TERRACE_H - 0.3, h: 6.6, thick: 0.8, color: 'plasterDark', doors: [{ edge: 0, at: 0.5, w: 2.4 }, { edge: 3, at: 0.5, w: 2 }] });
    // Jhali Rani ka Malia: the small wing jutting out from the summit rock
    W.building({ rect: [-55, -2, 6, 7, 0], base: TERRACE_H - 0.3, storeys: 3, storeyH: 3.3, color: old ? 'plaster' : 'plasterDark', roof: 'flat', merlon: 'kangura', windows: { style: 'arch', spacing: 2.4, w: 0.8, h: 1.4 }, jharokhas: { every: 3.4, size: 1.3, rows: [1, 2] }, kind: 'palace' });
    W.zone(rectPts(-55, -2, 8, 9, 0), 'Jhali Rani ka Malia');
    // stairs from the citadel terrace to the summit rock
    W.stairs({ from: [-74, -37, TERRACE_H], to: [-74, -14.2, SUMMIT_H + 0.02], w: 3.2, color: 'stone', side: true });   // ends where the rock's flat top begins
    // Badal Mahal (1884-1930): men's and women's wings round a courtyard open to the south
    if (now) {
      const bm = { base: SUMMIT_H - 0.3, storeys: 3, storeyH: 3.3, color: '#efe9dc', roof: 'flat', merlon: 'kangura', windows: { style: 'arch', spacing: 2.2, w: 0.9, h: 1.6 }, kind: 'palace' };
      W.building(Object.assign({ rect: [-74, 3.2, 24, 6.4, 0], chhatris: [[-84.5, 4.4], [-63.5, 4.4], [-74, 4.4]], chhatriSize: 2.2, chhatriH: 2.0, jharokhas: { every: 6, size: 1.5, rows: [1, 2] } }, bm));
      W.building(Object.assign({ rect: [-84.6, -6.4, 6.4, 13, 0], chhatris: [[-84.6, -11]], chhatriSize: 2.0, chhatriH: 1.8 }, bm));
      W.building(Object.assign({ rect: [-63.4, -5, 6.4, 10, 0], storeys: 2, chhatris: [[-63.4, -8]], chhatriSize: 2.0, chhatriH: 1.8 }, bm));
      W.zone(rectPts(-74, -6, 20, 16, 0), 'Badal Mahal');
    } else {
      W.zone(SUMMIT_POLY, 'Summit');
      if (old) W.flag({ x: -74, y: 2, h: SUMMIT_H, pole: 8, color: '#e08a1e', size: 1.8 });
    }

    // ---------------------------------------------------------------- the valleys: Golera, Bawan Devri, Mamadev, the tanks
    // Golera group: five Brahmanical and four Jain shrines; the oldest (c. 1424) only in 1458
    const golera = [
      [26, 50, 200, 'nagara', 3.6, 1], [36, 56, 180, 'nagara', 3.2, 1], [48, 54, 170, 'jain', 3.4, 0], [56, 44, 120, 'jain', 3.2, 0],
      [52, 28, 30, 'nagara', 3.4, 1], [38, 22, 0, 'jain', 3.0, 0], [26, 28, 300, 'nagara', 3.0, 1], [22, 40, 270, 'jain', 3.2, 0], [60, 58, 150, 'nagara', 2.8, 0],
    ];
    golera.forEach(([x, y, rot, style, w, early], k) => {
      if (old && !early) return;
      if (!old && (k === 3 || (now && k === 8))) { W.ruin({ rect: [x, y, w + 1.6, w + 1.6, rot], h: tod ? 3.4 : 2.6, thick: 0.6, color: 'stone', doors: [{ edge: 0, at: 0.5, w: 1.4 }], windows: false }); return; }
      shrine(W, { x, y, rot, w, style, mandapa: { d: w * 0.9, w: w * 1.1, h: w * 0.6, roof: style === 'jain' ? 'dome' : 'stepped', domeShape: 'half' }, plinth: 0.7, flag: now && k === 0 });
    });
    for (const [x, y, rot] of [[70, 30, 8], [77, 43, 12], [67, 16, -6], [80, 57, 20], [64, 66, 30]]) {
      W.building({ rect: [x, y, 5.5, 4.2, rot], h: 3.0, color: tod ? 'plasterDark' : 'plaster', roof: 'tiled', roofColor: 'roof', windows: { style: 'rect', spacing: 2.4, w: 0.6, h: 0.9 }, kind: 'house' });
    }
    W.zone(ellipsePts(GOLERA[0], GOLERA[1], 26, 22, 16, 0, 0, 1), 'Golera temples');

    // Bawan Devri: ASI's scaled plan is a long north-south court with fifty cells and two larger shrines.
    if (!old) {
      const cx = BAWAN[0], cy = BAWAN[1] + 2, CW = BAWAN_COURT.w, CD = BAWAN_COURT.d;
      const cells = [];
      // 17 cells on each long side, six north cells flanking the entrance, ten on the south side.
      for (let i = 0; i < 17; i++) {
        const y = cy - CD / 2 + 5 + i * (CD - 10) / 16;
        cells.push([cx - CW / 2 + 1.8, y, 90], [cx + CW / 2 - 1.8, y, 90]);
      }
      for (const x of [-11.5, -7.5, -3.5, 3.5, 7.5, 11.5]) cells.push([cx + x, cy + CD / 2 - 1.8, 180]);
      for (let i = 0; i < 10; i++) cells.push([cx - CW / 2 + 3.2 + i * (CW - 6.4) / 9, cy - CD / 2 + 1.8, 0]);
      // ASI says roughly forty of the fifty small cells survive today; no ruin count is asserted for 1820.
      const lost = now ? new Set([1, 5, 9, 13, 17, 21, 27, 33, 39, 46]) : new Set();
      cells.forEach(([x, y, rot], k) => {
        if (lost.has(k)) { W.ruin({ rect: [x, y, 2.8, 3.2, rot], h: 1.1, thick: 0.45, color: 'stone', doors: [], windows: false }); return; }
        W.building({ rect: [x, y, 2.8, 3.2, rot], h: 2.4, color: 'stone', roof: 'pyramid', roofH: 1.3, windows: false, cornice: false, kind: 'temple', pad: 0.05 });
      });
      shrine(W, { x: cx, y: cy - CD / 2 + 8, rot: 0, w: 5, style: 'jain', mandapa: { d: 5, w: 6, h: 3.0, roof: 'dome', domeShape: 'half' }, plinth: 0.8, stairs: true });
      shrine(W, { x: cx, y: cy + 1, rot: 0, w: 9, style: 'jain', mandapa: { d: 8, w: 10, h: 3.4, roof: 'dome', domeShape: 'half' }, plinth: 1.0, stairs: true });
      W.zone(rectPts(cx, cy, CW, CD, 0), 'Bawan Devri');
    } else {
      W.zone(rectPts(BAWAN[0], BAWAN[1] + 2, BAWAN_COURT.w, BAWAN_COURT.d, 0), 'Bawan Devri site');
    }

    // Mamadev temple (1460) and its kund in the lower fort
    W.tank({ x: MAMADEV[0] - 11, y: MAMADEV[1] - 2, r: 7, n: 4, rot: 53, waterDepth: 2.4, tiers: 6, color: 'stone' });
    if (!old) shrine(W, { x: MAMADEV[0] + 8, y: MAMADEV[1] + 1.5, rot: 278, w: 4.4, style: 'nagara', mandapa: { d: 4, w: 5, h: 2.6, roof: 'stepped' }, plinth: 0.9, flag: now });
    W.zone(rectPts(MAMADEV[0], MAMADEV[1], 32, 22, 8), old ? 'Mamadev kund' : 'Mamadev temple and kund');
    W.zone(LOWER, 'Lower fort');
    // two Jain temples near Vijay Pol
    shrine(W, { x: 236, y: -54, rot: 270, w: 3.6, style: 'jain', mandapa: { d: 3.2, w: 4.2, h: 2.2, roof: 'dome', domeShape: 'half' }, plinth: 0.7 });
    shrine(W, { x: 238, y: -12, rot: 270, w: 3.2, style: 'jain', mandapa: { d: 3, w: 3.8, h: 2.0, roof: 'dome', domeShape: 'half' }, plinth: 0.7 });

    // Lakhola Tank and the Badva Bund with the Langan Baori
    W.water({ poly: ellipsePts(LK.c[0], LK.c[1], LK.rx - 2.4, LK.ry - 2.2, 28, LK.rot, 0, 1), level: LK.water });
    W.platform({ poly: arcBand(LK.c[0], LK.c[1], LK.rx, LK.ry, LK.rot, -160, -20, 2.4, 14), h: LK.dam, color: 'stone' });
    W.zone(ellipsePts(LK.c[0], LK.c[1], LK.rx + 3, LK.ry + 3, 20, LK.rot, 0, 1), 'Lakhola Tank');
    W.label(LK.c[0], LK.c[1], 'Lakhola Tank');
    W.water({ poly: ellipsePts(BV.c[0], BV.c[1], BV.rx - 2.4, BV.ry - 2.2, 24, BV.rot, 0, 1), level: BV.water });
    W.platform({ poly: arcBand(BV.c[0], BV.c[1], BV.rx, BV.ry, BV.rot, -150, -30, 2.4, 12), h: BV.dam, color: 'stone' });
    W.zone(arcBand(BV.c[0], BV.c[1], BV.rx, BV.ry, BV.rot, -150, -30, 4, 8), 'Badva Bund');
    W.tank({ poly: rectPts(10, 128, 6, 13, -8), waterDepth: 3.4, tiers: 8, color: 'stone' });
    W.zone(rectPts(10, 128, 8, 15, -8), 'Langan Baori');

    // ---------------------------------------------------------------- small shrines scattered through the valleys (the fort has some 360 temples)
    const minor = [[-150, 28, 30, 'nagara'], [-118, 72, 200, 'jain'], [-204, 40, 90, 'nagara'], [104, 72, 0, 'jain'], [168, 92, 300, 'nagara'],
      [176, -18, 270, 'jain'], [64, -62, 180, 'nagara'], [92, -112, 20, 'nagara'], [-24, 186, 160, 'jain'], [118, 196, 200, 'nagara'], [-196, -12, 60, 'jain'], [214, -96, 300, 'nagara']];
    minor.forEach(([x, y, rot, style], k) => {
      if (old && k % 2) return;
      if (now && (k === 4 || k === 9)) { W.ruin({ rect: [x, y, 4.4, 4.4, rot], h: 2.4, thick: 0.5, color: 'stone', doors: [{ edge: 0, at: 0.5, w: 1.2 }], windows: false }); return; }
      shrine(W, { x, y, rot, w: 2.6, style, mandapa: { d: 2.4, w: 3, h: 1.8, roof: style === 'jain' ? 'dome' : 'stepped', domeShape: 'half' }, plinth: 0.6 });
    });

    // ---------------------------------------------------------------- zones for the HUD
    W.zone(rectPts(1, -292, 80, 52, 0), 'Road from Kelwara');
    W.zone([[-40, -262], [42, -262], [34, -178], [-12, -158], [-28, -158], [-58, -176]], 'Walled approach');
    W.zone(rectPts(CARPARK[0], CARPARK[1], 16, 13, 0), now ? 'Car park' : 'Outside Ram Pol');
    W.zone([[VIJAY[0] + 4, VIJAY[1] - 8], [300, -48], [300, -24], [VIJAY[0] + 4, VIJAY[1] + 8]], 'Outside Vijay Pol');

    // ---------------------------------------------------------------- vegetation and rock (dry deciduous scrub of the Aravallis)
    const INSIDE = WALL;
    W.trees({ poly: INSIDE, count: old ? 90 : tod ? 230 : 150, types: { acacia: 3, khejri: 2, neem: 1, shrub: 4, round: 1 }, s: [0.8, 1.35], minDist: 4, seed: 31 });
    W.trees({ count: old ? 170 : tod ? 230 : 260, avoid: [INSIDE], types: { acacia: 3, round: 2, neem: 1, shrub: 3 }, s: [0.9, 1.5], minDist: 5, seed: 33 });
    if (!old) W.trees({ poly: INSIDE, count: tod ? 320 : 110, types: { grass: 3, shrub: 1 }, s: [0.7, 1.3], minDist: 2.4, seed: 35, pad: 0.8 });
    for (const [x, y, s] of [[2, -118, 1.2], [28, 28, 1.3], [64, 40, 1.0], [126, 132, 1.2], [194, -94, 1.1], [-38, -124, 0.9], [128, -14, 1.0]]) W.tree({ x, y, type: 'banyan', s });
    for (const [x, y, r, n] of [[-160, 118, 40, 16], [-66, 204, 28, 9], [214, 150, 30, 10], [200, 50, 24, 8], [-190, -70, 30, 10], [-130, -40, 22, 7],
      [-150, -262, 50, 14], [170, -264, 50, 14], [62, 172, 20, 6], [-230, 200, 30, 8], [240, -140, 26, 6]]) W.boulders({ x, y, r, count: n, s: [0.9, 2.6], seed: x * 7 + y });
    // Aravalli hills beyond the playable area (lower towards the Marwar plain in the west)
    for (const [x, y, r, h] of [[-160, 760, 230, 70], [260, 740, 260, 80], [780, 300, 240, 72], [800, -200, 260, 64], [420, -780, 260, 56], [-80, -800, 240, 50], [-640, -520, 200, 34], [-760, 220, 170, 20]]) W.scenery({ hill: { x, y, r, h }, color: 'dry', h0: -9, seg: 14 });

    // ---------------------------------------------------------------- people and animals
    const walk = (s0, s1, n = 5) => { const pts = []; for (let i = 0; i <= n; i++) { const ss = lerp(s0, s1, i / n), f = W.wallFrame(wall, ss); pts.push([f.x - f.ox * 1.0, f.y - f.oy * 1.0, profile(ss)]); } for (let i = n - 1; i > 0; i--) pts.push(pts[i]); return pts; };
    const sW = sRam - 30; // a stretch of wall-walk west of Ram Pol, reached by the stairs
    if (old) {
      W.npc({ kind: 'guard-rajput', patrol: walk(sW, sW - 160, 6), count: 2 });
      W.npc({ kind: 'guard-rajput', patrol: walk(sW - 420, sW - 640, 6), count: 2 });
      W.npc({ kind: 'guard-rajput', patrol: walk(sW - 900, sW - 1100, 6), count: 1 });
      for (const [x, y, f] of [[-16, -160, 0], [-24, -160, 0], [9, -270, 0], [1, -270, 0], [0, -235, 0], [-10, -198, 0], [-17, -198, 0], [-70, -57, 0], [-78, -57, 0], [-48, -125, 300]]) W.npc({ kind: 'guard-rajput', at: [x, y], face: f, mode: 'idle' });
      W.npc({ kind: 'courtier', circle: [-62, -36, 7], count: 3, h: TERRACE_H });
      W.npc({ kind: 'woman-red', circle: [-46, -16, 3], count: 1, h: TERRACE_H }); W.npc({ kind: 'woman-indigo', circle: [-84, -30, 4], count: 1, h: TERRACE_H });
      W.npc({ kind: 'villager', circle: [-34, -8, 3], count: 2, h: TERRACE_H });          // masons at the unfinished wing
      W.npc({ kind: 'elephant-royal', at: [-64, -40], face: 120, mode: 'idle', h: TERRACE_H });
      W.npc({ kind: 'priest', circle: [16, -132, 4], count: 2, h: 12.4 }); W.npc({ kind: 'priest', at: [20, -113], face: 0, mode: 'idle' });
      W.npc({ kind: 'merchant', circle: [-14, -134, 8], count: 2 }); W.npc({ kind: 'horse', circle: [-22, -138, 6], count: 3 });
      W.npc({ kind: 'villager', zone: ellipsePts(GOLERA[0] + 24, GOLERA[1], 20, 22, 10, 0, 0, 1), count: 3 }); W.npc({ kind: 'woman-green', circle: [118, 128, 8], count: 2 });
      W.npc({ kind: 'woman-red', circle: [56, 40, 10], count: 1 }); W.npc({ kind: 'cow', circle: [88, 46, 10], count: 3 }); W.npc({ kind: 'goat', circle: [-140, 90, 18], count: 4 });
      W.npc({ kind: 'camel', circle: [6, -294, 6], count: 2 }); W.npc({ kind: 'elephant', circle: [-8, -212, 6], count: 1 });
    } else if (tod) {
      W.npc({ kind: 'guard-rajput', patrol: walk(sW, sW - 120, 5), count: 1 });
      for (const [x, y, f] of [[-16, -160, 0], [-70, -57, 0]]) W.npc({ kind: 'guard-rajput', at: [x, y], face: f, mode: 'idle' });
      W.npc({ kind: 'officer', at: [-12, -120], face: 200, mode: 'idle' }); W.npc({ kind: 'sepoy', at: [-14, -122], face: 160, mode: 'idle' });   // Tod's party drawing the temples
      W.npc({ kind: 'officer', at: [-60, -42], face: 330, mode: 'idle', h: TERRACE_H });
      W.npc({ kind: 'priest', at: [20, -113], face: 0, mode: 'idle' }); W.npc({ kind: 'priest', circle: [166, -96, 5], count: 1 });
      W.npc({ kind: 'pilgrim', circle: [10, -80, 12], count: 2 }); W.npc({ kind: 'villager', zone: ellipsePts(GOLERA[0] + 24, GOLERA[1], 20, 22, 10, 0, 0, 1), count: 2 });
      W.npc({ kind: 'woman-red', circle: [118, 128, 6], count: 1 }); W.npc({ kind: 'woman-green', circle: [64, 30, 8], count: 1 });
      W.npc({ kind: 'goat', circle: [-120, 60, 30], count: 6 }); W.npc({ kind: 'goat', circle: [150, -60, 20], count: 3 }); W.npc({ kind: 'cow', circle: [90, 50, 12], count: 2 });
    } else {
      W.npc({ kind: 'tourist-a', patrol: walk(sW, sW - 90, 4), count: 2 }); W.npc({ kind: 'tourist-c', patrol: walk(sW - 20, sW - 70, 3), count: 1 });
      W.npc({ kind: 'tourist-b', circle: [-14, -134, 9], count: 3 }); W.npc({ kind: 'tourist-d', circle: [6, -118, 10], count: 3 }); W.npc({ kind: 'tourist-c', circle: [-4, -170, 6], count: 2 });
      W.npc({ kind: 'student', circle: [22, -121, 5], count: 5, speed: 1.4 });
      W.npc({ kind: 'tourist-a', circle: [-60, -38, 6], count: 2, h: TERRACE_H }); W.npc({ kind: 'tourist-d', circle: [-74, -8, 4], count: 2, h: SUMMIT_H }); W.npc({ kind: 'tourist-b', circle: [-70, -13, 2], count: 1, h: SUMMIT_H });
      W.npc({ kind: 'asi-guard', at: [-26, -142], face: 90, mode: 'idle' }); W.npc({ kind: 'asi-guard', at: [-78, -13], face: 180, mode: 'idle', h: SUMMIT_H });
      W.npc({ kind: 'merchant', at: [6, -176], face: 270, mode: 'idle' }); W.npc({ kind: 'merchant', at: [-10, -178], face: 90, mode: 'idle' });
      W.npc({ kind: 'tourist-b', circle: [112, -12, 6], count: 2 }); W.npc({ kind: 'tourist-a', circle: [40, 38, 8], count: 2 });
      W.npc({ kind: 'villager', zone: ellipsePts(GOLERA[0] + 26, GOLERA[1], 18, 22, 10, 0, 0, 1), count: 2 }); W.npc({ kind: 'woman-red', circle: [72, 36, 6], count: 2 });
      W.npc({ kind: 'cow', circle: [90, 50, 12], count: 3 }); W.npc({ kind: 'goat', circle: [-120, 60, 26], count: 4 }); W.npc({ kind: 'cow', circle: [-4, -150 - 20, 5], count: 1 });
    }

    // ---------------------------------------------------------------- places and spawn
    for (const p of POIS) {
      const q = Object.assign({}, p, { eraNote: p.eraNote?.[era] || null });
      if (p.id === 'wall') { q.at = fAt(sRam - 80); q.h = W.wallTopAt(wall, ...q.at); }
      if (p.id === 'kumbha') q.h = TERRACE_H;
      if (p.id === 'badal') q.h = SUMMIT_H;
      if (p.id === 'water') q.h = BV.dam;
      W.poi(q);
    }
    // Kumbhalgarh's hills (now a wildlife sanctuary) are known for Indian wolves; boar and peafowl in the scrub
    W.wildlife({ kinds: { wolf: 3, boar: 4, peafowl: 6 } });
    W.wildlife({ kinds: { langur: 5 }, walls: true, s: 0.18 });
    W.spawn(8, -288, null, 180);
  },
};
