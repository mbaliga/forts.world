// 05 · Gingee (Senji) — the three-hill fort, Villupuram district, Tamil Nadu.
// Plan compressed 4:1 (planScale 4) and heights 3:1 (vScale 3); x = east, y = north, plain = 0.
// A triangular lower fort walled between Rajagiri (west, the citadel), Krishnagiri (north) and Chandrayan Durg
// (south-east), after the research notes (Wikipedia, ASI, RTF, Periyammal 2018, steemit, kaladarshana).
// The hill shapes, wall lines, bastion spacing, the Rajagiri zig-zag and the 1761 siege works are estimates:
// the plans in the catalogue (Pleydell 1761, Croisey 1770, Swaen 1765, Mackenzie) were not inspected.
import { rectPts, regularPoly, wallStairs } from './kit.js';
import { TAG } from '../core/nav.js';
import { DEG, clamp, lerp, smoothstep, makeNoise, fbm, rng, offsetPolyline, polylineLength, pointAt, pointInPoly } from '../core/geom.js';

// ------------------------------------------------------------------ hills (analytic granite domes)
// height = top * (1 - t^k), t = (r - rt) / (R(angle) - rt); flat top inside rt, plain outside R
const sector = (a, lo, hi, fall) => {
  const mid = (lo + hi) / 2, half = (hi - lo) / 2;
  const d = ((a - mid + 540) % 360) - 180;
  const ex = Math.abs(d) - half;
  if (ex <= 0) return 1;
  return ex >= fall ? 0 : 0.5 * (1 + Math.cos(Math.PI * ex / fall));
};
const RAJ = { x: -180, y: 5, top: 64, rt: 26, k: 1.15, rough: 2.8, R: (a) => 70 + 25 * sector(a, -25, 65, 30) + 3.5 * Math.sin((3 * a + 40) * DEG) + 1.8 * Math.sin((7 * a + 10) * DEG), Rmax: 102 };
const KRI = { x: 75, y: 185, top: 33, rt: 17, k: 1.15, rough: 2.0, R: (a) => 48 + 3 * Math.cos((a - 60) * DEG) + 1.6 * Math.sin((4 * a + 20) * DEG), Rmax: 54 };
const CHA = { x: 55, y: -190, top: 21, rt: 11, k: 1.15, rough: 1.6, R: (a) => 37 + 2 * Math.cos((a + 70) * DEG) + 1.4 * Math.sin((5 * a + 60) * DEG), Rmax: 42 };
const HILLS = [RAJ, KRI, CHA];
const NZ = makeNoise(57);
function domeH(D, x, y) {
  const dx = x - D.x, dy = y - D.y, r = Math.hypot(dx, dy);
  if (r <= D.rt) return D.top;
  const R = D.R(Math.atan2(dy, dx) / DEG);
  if (r >= R) return 0;
  return D.top * (1 - Math.pow((r - D.rt) / (R - D.rt), D.k));
}
const contourR = (D, H, a) => D.rt + Math.pow(Math.max(0, 1 - H / D.top), 1 / D.k) * (D.R(a) - D.rt);
const polar = (D, r, a) => [D.x + r * Math.cos(a * DEG), D.y + r * Math.sin(a * DEG)];
const arc = (D, H, a0, a1, step = 4, extra = []) => {
  const as = [];
  for (let a = a0; a < a1; a += step) as.push(a);
  as.push(a1, ...extra);
  return [...new Set(as.map((a) => +a.toFixed(3)))].sort((p, q) => p - q).map((a) => polar(D, contourR(D, H, a), a));
};
// contour wall whose level drifts along its length (zero drift at the gate angle aRef)
const tiltArc = (D, H, tilt, aRef, a0, a1, step = 4) => arc(D, H, a0, a1, step, [aRef]).map(([x, y]) => { const a = Math.atan2(y - D.y, x - D.x) / DEG; return polar(D, contourR(D, H + tilt * (a - aRef) / 50, a), a); });
const radial = (D, a, r0, r1, step = 6) => { const out = []; const n = Math.max(1, Math.round(Math.abs(r1 - r0) / step)); for (let i = 0; i <= n; i++) out.push(polar(D, lerp(r0, r1, i / n), a)); return out; };

// path up a hill: nodes are gates (outer + inner landing across a wall on contour cH), turns and end points
const LAND = 3.6;
function hillPath(D, nodes, step = 5) {
  const pts = [], gates = [];
  let prev = null;
  for (const nd of nodes) {
    const c = contourR(D, nd.H, nd.a);
    let entry, exit;
    if (nd.gate) { nd.wr = contourR(D, nd.cH ?? nd.H, nd.a); entry = nd.wr + LAND - c; exit = nd.wr - LAND - c; } else { entry = exit = nd.r != null ? nd.r - c : (nd.off ?? 0); }
    if (prev) {
      const rm = contourR(D, (prev.H + nd.H) / 2, (prev.a + nd.a) / 2);
      const n = Math.max(2, Math.ceil(Math.abs(nd.a - prev.a) * DEG * rm / step));
      for (let j = 1; j < n; j++) {
        const f = j / n, a = lerp(prev.a, nd.a, f), H = lerp(prev.H, nd.H, f), off = lerp(prev.exit, entry, f);
        pts.push([...polar(D, contourR(D, H, a) + off, a), H]);
      }
    }
    if (nd.gate) {
      nd.at = polar(D, nd.wr, nd.a);
      nd.i0 = pts.length;
      pts.push([...polar(D, nd.wr + LAND, nd.a), nd.H], [...polar(D, nd.wr - LAND, nd.a), nd.H]);
      gates.push(nd);
    } else pts.push([...polar(D, c + entry, nd.a), nd.H]);
    nd.exit = exit; prev = nd;
  }
  return { pts, gates };
}

// Rajagiri: G1 in the foot wall, G2-G6 in contour walls on the east face, then the chasm and the summit gate
const RAJ_W1 = 4, RAJ_SN = 62, RAJ_SS = -42, RAJ_TILT = [1.8, -1.5, 1.8, -1.5, 1.2];
const RJ = hillPath(RAJ, [
  { gate: true, H: 2.5, cH: RAJ_W1, a: 22, name: 'First gate' },
  { gate: true, H: 13.5, a: 52, name: 'Second gate (Kirtimukha)' },
  { gate: true, H: 24, a: 6, name: 'Third gate' },
  { gate: true, H: 34.5, a: 52, name: 'Fourth gate' },
  { gate: true, H: 44.5, a: 8, name: 'Fifth gate' },
  { gate: true, H: 54, a: 50, name: 'Sixth gate' },
  { H: 64, a: 4, r: RAJ.rt },
  { H: 64, a: 4, r: RAJ.rt - 5 },
]);
// Krishnagiri: three flights of steps across the south face, one gate half-way and one at the summit ring
const KRI_RING = 15.5;
const KR = hillPath(KRI, [
  { H: 0.9, a: -52, r: KRI.R(-52) + 3 },
  { gate: true, H: 11, a: -132, name: 'Krishnagiri lower gate' },
  { H: 22, a: -52, off: 0 },
  { gate: true, H: 33, cH: 33, a: -128, name: 'Krishnagiri summit gate' },
  { H: 33, a: -128, r: KRI_RING - 6 },
]);
// fix the summit gate on the ring (contour of the flat top is rt; the ring sits inside it)
// Chandrayan Durg: two legs on the north face to the ruined summit ring
const CHA_RING = 9.5;
const CH = hillPath(CHA, [
  { H: 0.9, a: 140, r: CHA.R(140) + 3 },
  { H: 10.5, a: 62, off: 0 },
  { gate: true, H: 21, cH: 21, a: 132, name: 'Chandrayan Durg gate' },
  { H: 21, a: 132, r: CHA_RING - 5 },
]);
// the summit gates sit on rings inside the flat tops: move their landings onto the ring radius
for (const [D, P, ringR] of [[KRI, KR, KRI_RING], [CHA, CH, CHA_RING]]) {
  const g = P.gates[P.gates.length - 1];
  g.wr = ringR; g.at = polar(D, ringR, g.a);
  P.pts[g.i0] = [...polar(D, ringR + LAND, g.a), g.H];
  P.pts[g.i0 + 1] = [...polar(D, ringR - LAND, g.a), g.H];
}

// summit of Rajagiri: raised knob west of the chasm, upper terrace east of it
const CHASM_X0 = -172.9, CHASM_X1 = -167.1;           // dug grid columns -172, -170, -168
const SUMMIT_H = 66.5, BRIDGE_Y = 5;
const SUMMIT_POLY = (() => {
  const pts = [[-174.1, RAJ.y + Math.sqrt(26 * 26 - 5.9 * 5.9)]];
  for (let a = 104; a <= 256; a += 8) pts.push(polar(RAJ, 26, a));
  pts.push([-174.1, RAJ.y - Math.sqrt(26 * 26 - 5.9 * 5.9)]);
  return pts;
})();
const ENCEINTE = (() => {
  const xL = -175.6, r = 23.4, dx = xL - RAJ.x, a0 = Math.acos(dx / r) / DEG;
  const pts = [];
  for (let a = a0; a <= 360 - a0 + 0.01; a += 10) pts.push(polar(RAJ, r, a));
  pts.push(polar(RAJ, r, 360 - a0));
  return pts.map((p, i) => (i === 0 || i === pts.length - 1 ? [xL, p[1]] : p));
})();

// ------------------------------------------------------------------ curtains (CCW, interior on the left)
const P_GATE = [179.5, -30], A_GATE = [140, 125];
const E_WALL = [
  polar(CHA, 10.4, 35), polar(CHA, 24, 35), polar(CHA, 39.5, 35),
  [118, -142], [148, -110], [168, -72], [179, -45], [180, -15], [181, 10], [179, 45], [168, 82], [150, 112], [130, 138],
  polar(KRI, 48.5, -30), polar(KRI, 38, -30), polar(KRI, 27, -30), polar(KRI, 16.2, -30),
];
const NW_WALL = [
  polar(KRI, 16.2, -165), polar(KRI, 27, -165), polar(KRI, 37, -165), polar(KRI, 47, -165),
  [5, 158], [-30, 138], [-65, 120], [-100, 102], [-125, 92],
  ...radial(RAJ, RAJ_SN, contourR(RAJ, RAJ_W1, RAJ_SN), 28, 7),
];
const S_WALL = [
  ...radial(RAJ, RAJ_SS, 28, contourR(RAJ, RAJ_W1, RAJ_SS), 7),
  [-110, -60], [-85, -86], [-52, -115], [-18, -144], [10, -168],
  polar(CHA, 37.5, 165), polar(CHA, 24, 165), polar(CHA, 10.4, 165),
];
const RIDGE = [[-116, -54, 6.5], [-85, -86, 8.5], [-52, -115, 9.5], [-18, -144, 8.5], [10, -168, 9], [24, -178, 10]];
// inner fort: a C-shaped wall against the Rajagiri foot wall (W1), divided by the second courtyard wall
const IF_SW = polar(RAJ, contourR(RAJ, RAJ_W1, -34), -34), IF_NW = polar(RAJ, contourR(RAJ, RAJ_W1, 40), 40);
const IF_WALL = [IF_SW, [-5, IF_SW[1]], [-5, 63.5], IF_NW];
const CROSS_WALL = [[-45, IF_SW[1]], [-45, 63.5]];
const IF_POLY = [IF_SW, [-5, IF_SW[1]], [-5, 63.5], IF_NW, ...arc(RAJ, RAJ_W1, -34, 40, 6).reverse()];
const PALACE_POLY = [IF_SW, [-45, IF_SW[1]], [-45, 63.5], IF_NW, ...arc(RAJ, RAJ_W1, -34, 40, 6).reverse()];
// G1 barbican, moat and drawbridge in the palace court
const G1 = RJ.gates[0];
const G1n = [Math.cos(G1.a * DEG), Math.sin(G1.a * DEG)], G1t = [-G1n[1], G1n[0]];
const G1p = (u, v) => [G1.at[0] + G1n[0] * u + G1t[0] * v, G1.at[1] + G1n[1] * u + G1t[1] * v];
const BARBICAN = [G1p(0.6, -5.5), G1p(11, -5.5), G1p(11, 5.5), G1p(0.6, 5.5)];
const G1_MOAT = [G1p(16.5, -9), G1p(16.5, 9)];

// moats (outside the plain curtains) and roads
const E_PLAIN = E_WALL.slice(2, 14);
const NW_PLAIN = NW_WALL.slice(3, 10);
const E_MOAT = offsetPolyline(E_PLAIN, false, -12).slice(1, -1);
const NW_MOAT = offsetPolyline(NW_PLAIN, false, -12).slice(1, -1);
const ROAD_P_OUT = [[P_GATE[0], P_GATE[1]], [200, -30], [240, -33], [276, -36]];
const ROAD_A_OUT = [A_GATE, [150, 133], [175, 165], [196, 212], [206, 262]];
const ROAD_MAIN = [P_GATE, [150, -24], [110, -14], [70, -4], [30, 4], [-5, 6]];
const ROAD_ARCOT = [A_GATE, [125, 108], [100, 75], [80, 40], [70, -4]];
const ROAD_TEMPLE = [[150, -24], [152, -55], [148, -88], [142, -100]];
const ROAD_KRI = [[100, 75], [106, 118], [KR.pts[0][0], KR.pts[0][1]]];
const ROAD_CHA = [[70, -4], [60, -60], [42, -120], [CH.pts[0][0], CH.pts[0][1]]];
const ROAD_IF = [[-5, 6], [-45, 6], [-57, 6]];
const ROAD_G1 = [[-48, 8], [-49.5, 24], [-50, 38], [-62, 44], G1p(20.8, 0)];
const NH77 = [[276, 40], [210, 35], [180, 33], [140, 42], [90, 58], [40, 74], [-20, 90], [-60, 99], [-95, 105], [-140, 113], [-200, 120], [-290, 128]];

// structures in the lower fort
const VT = { x: 115, y: -100, w: 48, d: 34 };          // Venkataramana temple enclosure
const TANK_CH = rectPts(40, -55, 16, 12, 0);            // Chakkarakulam
const TANK_CT = rectPts(95, 30, 14, 12, 0);             // Chettikulam
const ELE_TANK = rectPts(-80, -29, 20, 13, 0);          // Anaikulam
const KM = { x: -70, y: 6, s: 26 };                     // Kalyana Mahal court
const CAMP = [[214, -128], [262, -128], [262, -70], [214, -70]];

// ------------------------------------------------------------------ places
const SRC = {
  asi: 'https://asichennai.gov.in/gingee_sub_circle.html',
  asiPdf: 'https://www.asichennai.gov.in/downloads/gingee-sub-circle-monuments-sites.pdf',
  wiki: 'https://en.wikipedia.org/wiki/Gingee_Fort',
  rtf: 'https://www.re-thinkingthefuture.com/case-studies/a12858-gingee-fort-tamil-nadu/',
  periyammal: 'https://shanlaxjournals.in/journals/index.php/sijash/article/view/867/724',
  steemit: 'https://steemit.com/travel/@ranjanisahithyaa/gingee',
  rct: 'https://militarymaps.rct.uk/other-18th-19th-century-conflicts/gingee-1761-gingy-the-once-famous-capital-of-a',
  south: 'https://thesouthfirst.com/tamilnadu/tamil-nadus-gingee-fort-becomes-unesco-world-heritage-site/',
};
const POIS = [
  { id: 'pondicherry', at: [171, -24], r: 7, title: 'Pondicherry Gate',
    text: 'The eastern entrance of the lower fort, on the road from Pondicherry. The ASI lists an old jail near the gate and Persian inscriptions of Sa\'adatullah Khan dated AD 1713 on it.',
    source: SRC.asi,
    eraNote: { '1761': 'In 1761 a French garrison held the gate while a British force besieged the fort from January to April.', '1890s': 'In the 1890s the gate opened onto a deserted and overgrown fort.', today: 'Today most visitors arrive from Gingee town, to the east.' } },
  { id: 'arcot', at: [133, 117], r: 7, title: 'Arcot Gate',
    text: 'The northern entrance of the lower fort, facing the road to Arcot. Older descriptions name it and the eastern Pondicherry Gate as the fort\'s two principal entrances.',
    source: SRC.periyammal },
  { id: 'kalyana', at: [-63, 1], r: 6, title: 'Kalyana Mahal',
    text: 'Gingee\'s best-known building is a square tower of seven storeys with a pyramidal top, rising from a courtyard in the palace zone below Rajagiri; other accounts give eight storeys and about 27 m. Earthenware pipes brought water to it from a source about 500 m away.',
    source: SRC.wiki,
    eraNote: { '1890s': 'The Archaeological Survey photographed the tower and its court in 1894–95, before any restoration.' } },
  { id: 'granaries', at: [-62, 21], r: 7, title: 'Granaries and Gymnasium',
    text: 'A granary in the inner fort, with two more on the Rajagiri summit, stored food against long sieges. Next to it stand the Gymnasium and the garrison\'s stables and barracks.',
    source: SRC.asi,
    eraNote: { '1890s': 'The ASI photographed this granary from its south-east corner, and the Gymnasium Hall, in 1894–95.' } },
  { id: 'elephant', at: [-80, -18.5], r: 6, title: 'Elephant Tank (Anaikulam)',
    text: 'The fort\'s elephants were bathed in the Anaikulam, the Elephant Tank. With it and the Chakrakulam and Chettikulam tanks, Gingee was noted for a plentiful water supply, vital in a siege.',
    source: SRC.rtf },
  { id: 'venkataramana', at: [131, -100], r: 7, title: 'Venkataramana Temple',
    text: 'A large Vishnu temple in the lower fort, entered through a tall gopuram into a pillared courtyard. The ASI\'s list of monuments records a "prisoners\' well" at the temple.',
    source: SRC.asiPdf },
  { id: 'sadatulla', at: [163, -11], r: 7, title: 'Sadatulla Khan Mosque',
    text: 'Built in 1717–18, it is named after Sa\'adatullah Khan, Nawab of Arcot, whose side fought Gingee\'s Raja Desingh (Tej Singh) in 1714. A second mosque, Mohabat Khan\'s, stands in the inner fort, a record of the fort\'s years under Muslim rulers.',
    source: SRC.wiki },
  { id: 'gates', at: G1p(5.5, 0), r: 6, title: 'The seven gates of Rajagiri',
    text: 'The path to the citadel passes seven gateways in successive walls. The first has a barbican and a moat once spanned by a drawbridge; the second carries a small Kirtimukha (glory face) over its lintel.',
    source: SRC.steemit },
  { id: 'chasm', at: [-163, 6], r: 6, title: 'The chasm bridge',
    text: 'Rajagiri\'s summit is cut off by a deep natural chasm, about 10 yards (9 m) wide and 20 yards (18 m) deep. To reach the citadel you had to cross it by a small wooden bridge.',
    source: SRC.wiki },
  { id: 'summit', at: [-183, 4], r: 7, title: 'Ranganatha temple and the summit',
    text: 'The summit of Rajagiri holds the Ranganatha temple, two granaries, a magazine, a flagstaff, a treasury, an audience hall and a cannon. A Kamalakkanniamman shrine with a sacrificial slab is listed here too.',
    source: SRC.asiPdf,
    eraNote: { '1761': 'In 1761 the summit was held by the French until the fort was taken on 4 April.' } },
  { id: 'krishnagiri', at: [74, 180], r: 7, title: 'Krishnagiri, the "English Mountain"',
    text: 'The northern hill is fortified as a citadel of its own. Its summit has two granaries, wells for storing ghee and oil, two temples and an audience chamber.',
    source: SRC.asi,
    eraNote: { '1890s': 'An ASI photograph of 1894–95 shows Krishnagiri from the south-east; others in the series show the throne and buildings on its summit.' } },
  { id: 'chandrayan', at: [55, -186], r: 6, title: 'Chandrayan Durg, "St George\'s Mountain"',
    text: 'The south-eastern hill, also called Chandragiri, was fortified as a citadel of its own. It is joined to Rajagiri by a short rocky ridge and closes the south side of the fort\'s triangle.',
    source: SRC.rtf,
    eraNote: { today: 'Today its fortifications are mostly ruined.' } },
  { id: 'siege', at: [247, -14], r: 8, title: 'The British siege of 1761',
    text: 'Captain Stephen Smith\'s force besieged the French-held fort from 17 January 1761 and took it on 4 April 1761, in the Third Carnatic War. The draughtsman John Cleeve Pleydell recorded the siege in a plan now in the Royal Collection.',
    source: SRC.rct,
    eraNote: { '1761': 'The battery and camp shown here are placed by estimate, not taken from Pleydell\'s plan.' } },
  { id: 'troy', at: [72, 8], r: 8, title: 'The "Troy of the East"',
    text: 'The British called Gingee the "Troy of the East", and Shivaji praised it in similar terms. It began as a small Chola fort in the 9th century, was modified by Kurumbar kings in the 13th century and was greatly expanded under the Vijayanagara Empire.',
    source: SRC.south,
    eraNote: { today: 'In 2025 UNESCO inscribed Gingee as one of the twelve components of the Maratha Military Landscapes of India.' } },
];

// ------------------------------------------------------------------ helpers
const stripPoly = (path, half) => { const L = offsetPolyline(path, false, half), R = offsetPolyline(path, false, -half); return L.concat(R.reverse()); };
function occupyLine(W, path, half, closed = false) {
  const n = path.length, m = closed ? n : n - 1;
  for (let i = 0; i < m; i++) {
    const a = path[i], b = path[(i + 1) % n];
    const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1, nx = -dy / L * half, ny = dx / L * half;
    W.occupy([[a[0] + nx, a[1] + ny], [b[0] + nx, b[1] + ny], [b[0] - nx, b[1] - ny], [a[0] - nx, a[1] - ny]], 0);
  }
}
// cut a polyline at arc lengths: returns the pieces outside [s0, s1]
function splitPath(path, s0, s1) {
  const L = polylineLength(path);
  const before = [], after = [];
  let acc = 0;
  for (let i = 0; i < path.length; i++) {
    if (i > 0) acc += Math.hypot(path[i][0] - path[i - 1][0], path[i][1] - path[i - 1][1]);
    if (acc < s0) before.push(path[i]);
    else if (acc > s1) after.push(path[i]);
  }
  const p0 = pointAt(path, s0), p1 = pointAt(path, Math.min(L, s1));
  before.push([p0.x, p0.y]); after.unshift([p1.x, p1.y]);
  return [before, after];
}
const arcLen = (path, x, y) => { let best = Infinity, bs = 0, acc = 0; for (let i = 0; i < path.length - 1; i++) { const a = path[i], b = path[i + 1]; const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy); const t = clamp(((x - a[0]) * dx + (y - a[1]) * dy) / (L * L || 1), 0, 1); const d = Math.hypot(a[0] + dx * t - x, a[1] + dy * t - y); if (d < best) { best = d; bs = acc + t * L; } acc += L; } return bs; };
// granite boulders sunk into slopes so they never float
function boulderField(W, { poly, count, s = [1.5, 4], seed = 1, pad = 1.2, minH = -99, maxH = 999, color = 'rock' }) {
  const r = rng(seed);
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const [x, y] of poly) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); }
  let n = 0;
  for (let t = 0; t < count * 25 && n < count; t++) {
    const x = x0 + r() * (x1 - x0), y = y0 + r() * (y1 - y0), sz = lerp(s[0], s[1], Math.pow(r(), 1.7));
    if (!pointInPoly(x, y, poly)) continue;
    const g = W.ground(x, y);
    if (g < minH || g > maxH) continue;
    if (W.waterLevelAt(x, y) > g - 0.5) continue;
    if (!W.isFree(x, y, pad + sz * 0.9)) continue;
    let lo = g;
    for (let k = 0; k < 6; k++) { const a = k * 60 * DEG; lo = Math.min(lo, W.ground(x + Math.cos(a) * sz * 0.9, y + Math.sin(a) * sz * 0.9)); }
    W.boulder({ x, y, h: lo - sz * 0.12, s: sz, color });
    W.occupy(regularPoly(x, y, sz * 0.95, 6), 0.2);
    n++;
  }
}
const circle = (x, y, r, n = 24) => regularPoly(x, y, r, n, 0);

// ------------------------------------------------------------------ level
export default {
  id: 'gingee', name: 'Gingee', native: { text: 'செஞ்சி', lang: 'ta', script: 'taml' },
  region: 'Villupuram · Tamil Nadu', type: 'Three-hill fort', coords: [12.250556, 79.401389],
  siteReference: { source: 'UNESCO component map 1739-012', kind: 'component reference coordinate; not a boundary vertex or fort-wall centre', propertyAreaHa: 225.49, previousCataloguePoint: [12.252, 79.397] },
  poiCount: POIS.length, groundName: 'Lower fort', datum: 0, datumLabel: 'above the plain',
  units: { planScale: 4, vScale: 3 },
  bounds: [-290, -258, 275, 262], stride: 2, seed: 5,
  water: null,
  apron: { h: 0.4, color: '#a78f63' },
  view: { az: -35, el: 40, zoom: 74, introAt: [-20, 0], introZoom: 560 },
  light: { sky: '#e3e1d6', sunAz: -125, sunEl: 48 },
  palette: {
    wall: '#9b9188', wallTop: '#aaa196', trim: '#b9af9f', stone: '#958c82', plaster: '#e6dfcd', plasterDark: '#c6b797', roof: '#8b5a3c',
    rock: '#938a82', cliff: '#67615b', grass: '#7a8a43', dry: '#b0925f', road: '#a67a56', court: '#b8a78b', paved: '#a39a8c', sand: '#c4a87c',
    field: '#8f9a55', mud: '#7a5c42', garden: '#5f8a3e', water: '#5f6b45', tank: '#5d6c48', leaf: '#46612f', leafDry: '#8c8648', trunk: '#5e4a36',
    dome: '#e4dccb', flag: '#f2efe6', accent: '#b89a5a',
  },
  eraPalette: {
    '1761': { plaster: '#ece5d3', grass: '#7f9145', dry: '#b39662' },
    '1890s': { plaster: '#d2c6a9', plasterDark: '#b3a27f', grass: '#6c873b', dry: '#a88f5f', leaf: '#3f5a2a', road: '#a3825e' },
    today: { plaster: '#e3d9c3', grass: '#6f8c3c', dry: '#ab9161', mud: '#5b5853', road: '#ab8a66' },
  },
  eras: [
    { id: '1761', year: '1761', label: 'The British siege', short: 'British siege', lens: 'engraving',
      summary: 'Early 1761: a French garrison holds the three hills while British batteries and a tented camp close in across the plain.',
      basis: 'The siege of 17 January to 4 April 1761 recorded on John Cleeve Pleydell\'s plan in the Royal Collection, with the French plans of 1765 and 1770, the Kitchin plan of about 1750 and the Mackenzie survey of the fortification lines; the layout follows written descriptions of the hills, gates and walls.',
      conjecture: 'The plans were not inspected for this model. Wall lines, bastion spacing, roofs and the positions of the British battery and camp are reconstructed, and the Rajagiri chasm is drawn wider than its real 9 m so the bridge can be seen.',
      sources: ['GIN-05', 'GIN-02', 'GIN-03', 'GIN-04', 'GIN-01'] },
    { id: '1890s', year: '1890s', label: 'ASI survey photographs', short: 'ASI photographs', lens: 'albumen',
      summary: 'A deserted, overgrown fort: the Kalyana Mahal and the granaries still stand as the Archaeological Survey photographs them.',
      basis: 'Archaeological Survey of India photographs of 1894–95 (the Kalyana Mahal, Rajagiri from the east, the granary, Krishnagiri) and of 1906–20 (the inner-fort gateways and courtyard wall, the western fortifications), with George Payne\'s panorama of 1816 and the Daniell view of Rajagiri for the massing of the hills.',
      conjecture: 'The photographs were not viewed for this model; which buildings had lost their roofs is inferred from their present state.',
      sources: ['GIN-10', 'GIN-11', 'GIN-12', 'GIN-13', 'GIN-14', 'GIN-15', 'GIN-16', 'GIN-17', 'GIN-06', 'GIN-08'] },
    { id: 'today', year: 'Today', label: 'World Heritage site', short: 'World Heritage', lens: 'none',
      summary: 'Inscribed by UNESCO in 2025: visitors climb the steps of Rajagiri while a highway runs through the old lower fort.',
      basis: 'The UNESCO nomination dossier, its maps and executive summary (2024–25), the DRONAH photograph of the walls (2022), the Colebrook photographs of about 1947 and the ASI listings.',
      conjecture: 'Paths, planting and the line of the NH-77 road through the fort are approximate.',
      sources: ['GIN-19', 'GIN-20', 'GIN-21', 'GIN-22', 'GIN-23', 'GIN-18'] },
  ],

  terrain: (era) => {
    const ops = [
      { op: 'base', h: 0.4 },
      { op: 'noise', amp: 1.0, scale: 55 },
      // the three granite domes
      { op: 'fn', fn: (x, y, h) => {
        let best = h;
        for (const D of HILLS) {
          if (Math.abs(x - D.x) > D.Rmax || Math.abs(y - D.y) > D.Rmax) continue;
          const d = domeH(D, x, y);
          if (d <= 0) continue;
          const f = d / D.top;
          const rough = D.rough * fbm(NZ, x / 8 + D.x * 0.1, y / 8, 3) * Math.min(1, f * 5) * Math.min(1, (1 - f) * 8);
          best = Math.max(best, d + rough);
        }
        return best;
      } },
      // the rocky ridge between Rajagiri and Chandrayan Durg, and granite outcrops in the lower fort
      { op: 'ridge', path: RIDGE, w: 8, edge: 15 },
      { op: 'noise', poly: stripPoly(RIDGE.map((p) => [p[0], p[1]]), 13), amp: 2.2, scale: 7, edge: 5 },
      ...[[52, 148, 17, 40], [58, 196, 15, 33], [50, 118, 13, 43], [60, -78, 14, 31], [66, -112, 12, 22], [64, 170, 12, 30]].map(([r, a, rr, h]) => { const [x, y] = polar(RAJ, r, a); return { op: 'hill', x, y, r: rr, h, top: 0.25, rough: 2.2, roughScale: 5 }; }),
      ...[[30, 40, 9, 22], [33, 120, 9, 18]].map(([r, a, rr, h]) => { const [x, y] = polar(KRI, r, a); return { op: 'hill', x, y, r: rr, h, top: 0.25, rough: 1.6, roughScale: 4 }; }),
      { op: 'hill', x: 112, y: 64, rx: 15, ry: 10, rot: 30, h: 3.6, top: 0.2, rough: 1.2, roughScale: 4 },
      { op: 'hill', x: 8, y: -96, rx: 12, ry: 9, rot: -20, h: 3.2, top: 0.2, rough: 1.0, roughScale: 4 },
      { op: 'hill', x: 228, y: 120, r: 16, h: 5, top: 0.15, rough: 1.4, roughScale: 5 },
      { op: 'hill', x: -240, y: -150, r: 20, h: 6, top: 0.15, rough: 1.6, roughScale: 5 },
      // terraces: the inner fort, the Rajagiri summit knob
      { op: 'raise', poly: IF_POLY, h: 2.5, edge: 4 },
      { op: 'raise', poly: SUMMIT_POLY, h: SUMMIT_H, edge: 3, profile: 'scarp' },
      // moats outside the plain curtains and before the first Rajagiri gate
      { op: 'moat', path: E_MOAT, w: 7.5, h: -3.2, edge: 2.2, paint: era === '1761' ? null : 'field' },
      { op: 'moat', path: NW_MOAT, w: 7.5, h: -3.2, edge: 2.2, paint: era === '1761' ? null : 'field' },
      { op: 'moat', path: G1_MOAT, w: 5, h: -1.6, edge: 1 },
      // bare granite on the hills
      { op: 'paint', poly: circle(RAJ.x, RAJ.y, 86, 40), paint: 'rock' },
      { op: 'paint', poly: circle(KRI.x, KRI.y, 42, 28), paint: 'rock' },
      { op: 'paint', poly: circle(CHA.x, CHA.y, 30, 24), paint: 'rock' },
      // gate approaches, level through the walls (and causeways over the moats)
      { op: 'ramp', path: [[205, -30, 0.8], [P_GATE[0], P_GATE[1], 0.8], [165, -27, 0.8]], w: 8, edge: 4, paint: 'road' },
      { op: 'ramp', path: [[156, 141, 0.8], [A_GATE[0], A_GATE[1], 0.8], [128, 112, 0.8]], w: 8, edge: 4, paint: 'road' },
      { op: 'ramp', path: [[14, 6, 1.2], [-2, 6, 2.5], [-12, 6, 2.5]], w: 6, edge: 3, paint: 'road' },
      // the stepped paths up the three hills (stairs are laid over them in build)
      { op: 'ramp', path: RJ.pts, w: 4.6, edge: 2.5 },
      { op: 'ramp', path: KR.pts, w: 4.2, edge: 2.5 },
      { op: 'ramp', path: CH.pts, w: 4.0, edge: 2.5 },
    ];
    // gate landings
    for (const [D, P] of [[RAJ, RJ], [KRI, KR], [CHA, CH]]) for (const g of P.gates) ops.push({ op: 'flatten', poly: rectPts(g.at[0], g.at[1], 10.6, 5.6, g.a), h: g.H, edge: 2 });
    // the chasm, cut last
    ops.push({ op: 'dig', poly: [[CHASM_X0, -27], [CHASM_X1, -27], [CHASM_X1, 37], [CHASM_X0, 37]], h: 55, edge: 0.6, profile: 'linear' });
    // roads of the lower fort
    if (era === 'today') ops.push({ op: 'paint', poly: PALACE_POLY, paint: 'garden' }, { op: 'paint', poly: IF_POLY.slice(0, 4), paint: 'garden' });
    for (const [p, w] of [[ROAD_P_OUT, 5], [ROAD_A_OUT, 4.5], [ROAD_MAIN, 4.5], [ROAD_ARCOT, 4], [ROAD_TEMPLE, 3.5], [ROAD_KRI, 3.5], [ROAD_CHA, 3.5], [ROAD_IF, 4], [ROAD_G1, 3]]) ops.push({ op: 'paint', path: p, w, paint: 'road' });
    if (era === 'today') ops.push({ op: 'ramp', path: NH77.map((p) => [p[0], p[1], 0.9]), w: 7, edge: 3, paint: 'mud' });
    ops.push({ op: 'edge', h: 0.4, w: 24 });
    return ops;
  },

  build(W) {
    const era = W.era, old = era === '1761', photo = era === '1890s', now = era === 'today';
    const wallCol = 'wall';
    const mer = { style: 'round', w: 0.9, gap: 0.75, h: 0.85 };
    const merS = { style: 'round', w: 0.8, gap: 0.9, h: 0.7 };

    // ---------------- curtains (split by the highway breaches today)
    const curtain = (path, o) => W.wall(Object.assign({ path, closed: false, outer: 'right', h: 8, thick: 4.5, batter: 0.07, parapet: { h: 1.3, t: 0.6 }, merlon: mer, color: wallCol }, o));
    let eWalls, nwWalls;
    const sBreachE = arcLen(E_WALL, 179.7, 33), sBreachN = arcLen(NW_WALL, -95, 104.6);
    if (now) {
      const [e0, e1] = splitPath(E_WALL, sBreachE - 5, sBreachE + 5);
      const [n0, n1] = splitPath(NW_WALL, sBreachN - 5, sBreachN + 5);
      eWalls = [curtain(e0), curtain(e1)]; nwWalls = [curtain(n0), curtain(n1)];
    } else { eWalls = [curtain(E_WALL)]; nwWalls = [curtain(NW_WALL)]; }
    const sWall = curtain(S_WALL, { h: 6.5, thick: 3.6 });
    const eWallOf = (x, y) => (eWalls.length === 1 ? eWalls[0] : (y < 33 ? eWalls[0] : eWalls[1]));
    const nwWallOf = (x, y) => (nwWalls.length === 1 ? nwWalls[0] : (x > -95 ? nwWalls[0] : nwWalls[1]));
    for (const [p, h] of [[E_WALL, 2.8], [NW_WALL, 2.8], [S_WALL, 2.3]]) occupyLine(W, p, h);
    // the moat: wet during the siege, an overgrown ditch later
    if (old) for (const m of [E_MOAT, NW_MOAT]) W.water({ poly: stripPoly(m, 4.1), level: -1.7 });
    for (const m of [E_MOAT, NW_MOAT]) occupyLine(W, m, 4.2);
    // gates
    const gateCommon = { width: 4.2, spring: 3.8, rise: 2.2, style: 'pointed', towers: { r: 6, dh: 1.6, off: 2.6, gap: 0.15 }, doors: old, frameUp: 1.3 };
    const pg = W.gate(Object.assign({ wall: eWallOf(...P_GATE), at: P_GATE, name: 'Pondicherry Gate' }, gateCommon));
    const ag = W.gate(Object.assign({ wall: eWallOf(...A_GATE), at: A_GATE, name: 'Arcot Gate' }, gateCommon));
    // bastions along the plain stretches
    const placeBastions = (path, wallOf, step, r, skip, cannons, maxH = 3.2) => {
      const L = polylineLength(path);
      let k = 0;
      for (let s = 16; s < L - 10; s += step) {
        if (skip.some(([a, b]) => s > a && s < b)) continue;
        const p = pointAt(path, s);
        if (W.ground(p.x, p.y) > maxH) continue;
        const gun = old && cannons && k % 2 === 0;
        const b = W.bastion({ at: [p.x, p.y], wall: wallOf(p.x, p.y), r, off: r * 0.36, dh: 0.5, cannon: gun ? { len: 3.1, r: 0.3 } : false });
        W.occupy(regularPoly(b.x, b.y, r + 1.6, 12), 0.2);
        k++;
      }
    };
    const sP = arcLen(E_WALL, ...P_GATE), sA = arcLen(E_WALL, ...A_GATE);
    placeBastions(E_WALL, eWallOf, 38, 5.5, [[sP - 18, sP + 18], [sA - 18, sA + 18], ...(now ? [[sBreachE - 12, sBreachE + 12]] : [])], true);
    placeBastions(NW_WALL, nwWallOf, 40, 5.5, now ? [[sBreachN - 12, sBreachN + 12]] : [], false);
    placeBastions(S_WALL.slice(5, -2), () => sWall, 42, 4.4, [], false, 13);
    // rampart stairs inside the Pondicherry and Arcot gates
    wallStairs(W, eWallOf(180.8, 6), { at: [180.8, 6], dir: 1, run: 14 });
    wallStairs(W, eWallOf(160, 97), { at: [159, 97], dir: -1, run: 15 });

    // ---------------- Rajagiri: foot wall, contour walls, summit enceinte
    const hillWall = (path, o) => W.wall(Object.assign({ path, closed: false, outer: 'right', h: 5.5, thick: 2.6, batter: 0.05, parapet: { h: 1.0, t: 0.5 }, merlon: merS, color: 'stone' }, o));
    const W1 = hillWall(arc(RAJ, RAJ_W1, RAJ_SS, RAJ_SN, 4, [G1.a]), { h: 6 });
    occupyLine(W, arc(RAJ, RAJ_W1, RAJ_SS, RAJ_SN, 8), 2);
    const tiers = [], tierH = [6, 5.4, 5.8, 5.2, 5.6];
    for (const [i, g] of RJ.gates.slice(1).entries()) {
      const path = tiltArc(RAJ, g.cH ?? g.H, RAJ_TILT[i], g.a, RAJ_SS, RAJ_SN);
      const wl = hillWall(path, { h: tierH[i] });
      tiers.push(wl);
      occupyLine(W, path, 1.9);
      // small towers on the southern stretch, clear of the zig-zag (which keeps to 4-52 degrees)
      for (const a of (i % 2 ? [-31, -12] : [-24])) {
        const p = path.reduce((best, q) => { const d = Math.abs(Math.atan2(q[1] - RAJ.y, q[0] - RAJ.x) / DEG - a); return d < best.d ? { d, q } : best; }, { d: 1e9 }).q;
        const b = W.bastion({ at: p, wall: wl, r: 2.7, off: 0.9, dh: 0.4, merlon: merS });
        W.occupy(regularPoly(b.x, b.y, 4, 8), 0.2);
      }
    }
    const hillGate = { width: 3.0, spring: 2.6, rise: 1.3, style: 'pointed', towers: false, doors: old, frameW: 0.45, frameUp: 0.9 };
    W.gate(Object.assign({ wall: W1, at: G1.at, name: G1.name }, hillGate, { width: 3.2 }));
    RJ.gates.slice(1).forEach((g, i) => W.gate(Object.assign({ wall: tiers[i], at: g.at, name: g.name }, hillGate)));
    // barbican, moat and drawbridge in front of the first gate
    const barb = W.wall({ path: BARBICAN, closed: false, outer: 'right', h: 5, thick: 1.8, batter: 0.03, parapet: { h: 0.9, t: 0.45 }, merlon: merS, color: 'stone', walk: false });
    W.gate({ wall: barb, at: G1p(11, 0), width: 3.2, spring: 2.6, rise: 1.3, towers: false, doors: false, frameW: 0.4, frameUp: 0.8, name: 'First gate (barbican)' });
    occupyLine(W, BARBICAN, 1.4);
    W.bridge({ from: G1p(12.3, 0), to: G1p(20.8, 0), w: 3.2, h: 2.5, color: old ? 'wood' : 'stone', railColor: old ? '#4a3523' : null, deck: 0.6 });
    occupyLine(W, [G1p(10, 0), G1p(22, 0)], 2.2);
    // stairs over the stepped paths
    const layStairs = (pts, w) => {
      for (let i = 0; i < pts.length - 1; i++) {
        const a = pts[i], b = pts[i + 1];
        if (Math.abs(b[2] - a[2]) < 0.25) continue;
        W.stairs({ from: a, to: b, w, color: 'stone', side: true });
      }
    };
    layStairs(RJ.pts, 3.2); layStairs(KR.pts, 3.0); layStairs(CH.pts, 2.8);
    for (const P of [RJ, KR, CH]) occupyLine(W, P.pts, 2.8);
    // summit enceinte, chasm bridge and summit gate
    const enc = W.wall({ path: ENCEINTE, closed: true, h: 5, thick: 2.2, batter: 0.04, parapet: { h: 1.0, t: 0.45 }, merlon: merS, color: 'stone' });
    occupyLine(W, ENCEINTE, 1.8, true);
    W.gate(Object.assign({ wall: enc, at: [-175.6, BRIDGE_Y], name: 'Seventh gate (summit)' }, hillGate, { width: 2.8 }));
    W.bridge({ from: [-165.7, BRIDGE_Y], to: [-174.25, BRIDGE_Y], w: 2.4, h0: 64, h1: SUMMIT_H, color: now ? 'iron' : 'wood', railColor: now ? '#3b3733' : '#4a3523', deck: 0.45 });
    occupyLine(W, [[-162, BRIDGE_Y], [-178, BRIDGE_Y]], 2.2);
    W.zone(rectPts(-170, BRIDGE_Y, 12, 4, 0), 'Chasm bridge');

    // ---------------- Krishnagiri and Chandrayan Durg citadels
    const kTier = hillWall(arc(KRI, KR.gates[0].cH ?? KR.gates[0].H, -165, -30, 5, [KR.gates[0].a]), { h: 5.2 });
    occupyLine(W, arc(KRI, KR.gates[0].H, -165, -30, 10), 1.8);
    W.gate(Object.assign({ wall: kTier, at: KR.gates[0].at, name: KR.gates[0].name }, hillGate));
    for (const a of [-152, -38]) { const b = W.bastion({ at: polar(KRI, contourR(KRI, KR.gates[0].H, a), a), wall: kTier, r: 2.7, off: 0.9, dh: 0.4, merlon: merS }); W.occupy(regularPoly(b.x, b.y, 4, 8), 0.2); }
    const kRing = W.wall({ path: circle(KRI.x, KRI.y, KRI_RING, 26), closed: true, h: 5, thick: 2.2, batter: 0.04, parapet: { h: 1.0, t: 0.45 }, merlon: merS, color: 'stone' });
    occupyLine(W, circle(KRI.x, KRI.y, KRI_RING, 26), 1.7, true);
    W.gate(Object.assign({ wall: kRing, at: KR.gates[1].at, name: KR.gates[1].name }, hillGate, { width: 2.8 }));
    const cg = CH.gates[0];
    if (old) {
      const cRing = W.wall({ path: circle(CHA.x, CHA.y, CHA_RING, 22), closed: true, h: 4.5, thick: 2, batter: 0.04, parapet: { h: 0.9, t: 0.4 }, merlon: merS, color: 'stone' });
      W.gate(Object.assign({ wall: cRing, at: cg.at, name: cg.name }, hillGate, { width: 2.6, spring: 2.4, rise: 1.2 }));
    } else {
      // broken ring: three stretches of ruined wall, the gate a gap
      const seg = (a0, a1) => { const p = []; for (let a = a0; a <= a1; a += 15) p.push(polar(CHA, CHA_RING, a)); return p; };
      for (const [a0, a1] of [[cg.a + 14, cg.a + 110], [cg.a + 140, cg.a + 230], [cg.a + 262, cg.a + 336]]) W.wall({ path: seg(a0, a1), closed: false, outer: 'right', h: photo ? 3 : 2.4, thick: 2, batter: 0.04, parapet: false, merlon: false, color: 'stone', walk: false });
    }
    occupyLine(W, circle(CHA.x, CHA.y, CHA_RING, 22), 1.5, true);

    // ---------------- inner fort
    const ifw = W.wall({ path: IF_WALL, closed: false, outer: 'right', h: 6.5, thick: 3, batter: 0.05, parapet: { h: 1.1, t: 0.5 }, merlon: mer, color: wallCol });
    const crossW = W.wall({ path: CROSS_WALL, closed: false, outer: 'right', h: 5.5, thick: 2.4, batter: 0.04, parapet: { h: 1.0, t: 0.45 }, merlon: merS, color: wallCol });
    occupyLine(W, IF_WALL, 2); occupyLine(W, CROSS_WALL, 1.7);
    W.gate({ wall: ifw, at: [-5, 6], width: 3.6, spring: 3.4, rise: 2.0, towers: { r: 4, dh: 1.2, off: 1.6, gap: 0.15 }, doors: old, name: 'First gateway of the inner fort', frameUp: 1.0 });
    W.gate({ wall: crossW, at: [-45, 6], width: 3.2, spring: 3.0, rise: 1.7, towers: false, doors: old, frameW: 0.5, name: 'Second courtyard gate' });
    for (const p of [[-5, IF_SW[1]], [-5, 63.5]]) { const b = W.bastion({ at: p, wall: ifw, r: 4.6, off: 1.4, dh: 0.5, cannon: old ? { len: 2.8, r: 0.26 } : false }); W.occupy(regularPoly(b.x, b.y, 6, 10), 0.2); }
    W.zone([[-45, IF_SW[1]], [-5, IF_SW[1]], [-5, 63.5], [-45, 63.5]], 'Inner fort');
    W.zone(PALACE_POLY, 'Palace court');

    // Kalyana Mahal: square tower of seven storeys with a pyramidal top, in a court of arcaded rooms
    const kmS = KM.s, kmD = 5, kmBase = 2.5;
    const kmRanges = [
      { rect: [KM.x, KM.y + kmS / 2 - kmD / 2, kmS, kmD, 0] }, { rect: [KM.x, KM.y - kmS / 2 + kmD / 2, kmS, kmD, 0] },
      { rect: [KM.x - kmS / 2 + kmD / 2, KM.y, kmD, kmS - 2 * kmD, 0] },
      { rect: [KM.x + kmS / 2 - kmD / 2, KM.y + 6.3, kmD, 3.4, 0] }, { rect: [KM.x + kmS / 2 - kmD / 2, KM.y - 6.3, kmD, 3.4, 0] },
    ];
    for (const r of kmRanges) {
      if (photo) W.ruin(Object.assign({ h: 3.2, thick: 0.6, color: 'plasterDark', doors: [{ edge: 0, at: 0.5, w: 1.8 }] }, r));
      else W.building(Object.assign({ h: 4.4, base: kmBase - 0.2, color: 'plaster', roof: 'flat', parapet: { h: 0.6, t: 0.25 }, windows: { style: 'arch', spacing: 2.2, w: 1.1, h: 2.2, sill: 0.3 }, kind: 'palace' }, r));
    }
    W.platform({ poly: rectPts(KM.x, KM.y, 11, 11, 0), h: kmBase + 0.6, color: 'stone' });
    W.building({ rect: [KM.x, KM.y, 8, 8, 0], base: kmBase + 0.55, storeys: 7, storeyH: 3.15, color: 'plaster', roof: 'pyramid', roofH: 5.2, roofColor: photo ? '#a89a7c' : '#d9cfb8', chhajja: 0.45, windows: { style: 'arch', spacing: 2.6, w: 1.0, h: 1.8, sill: 0.5 }, kind: 'palace' });
    W.finial(KM.x, KM.y, kmBase + 0.55 + 7 * 3.15 + 5.2, 0.7, 'accent');
    W.zone(rectPts(KM.x, KM.y, kmS, kmS, 0), 'Kalyana Mahal');
    // granary, gymnasium hall and its mandapa, elephant tank
    W.building({ rect: [-62, 30, 18, 7.5, 0], h: 4.8, color: photo ? 'plasterDark' : 'plaster', roof: 'vault', roofColor: photo ? 'plasterDark' : 'plaster', windows: { style: 'rect', spacing: 3, w: 0.5, h: 0.7, sill: 3.2 }, kind: 'granary' });
    W.building({ rect: [-58, -21, 15, 10, 0], h: 5.6, color: photo ? 'plasterDark' : 'plaster', roof: 'flat', parapet: { h: 0.7, t: 0.3 }, windows: { style: 'arch', spacing: 2.4, w: 1.2, h: 2.6, sill: 0.4 }, kind: 'building' });
    W.pavilion({ x: -58, y: -35, w: 7, d: 6, rot: 0, plinth: 0.8, colH: 3, cols: [4, 3], roof: 'flat', color: 'stone', stairSide: 2, kind: 'pavilion' });
    W.tank({ poly: ELE_TANK, waterDepth: photo ? 3.0 : 2.2, tiers: 6, color: 'stone' });
    W.zone(ELE_TANK, 'Elephant Tank (Anaikulam)');
    // outer court of the inner fort: barracks, stables, Mohabat Khan mosque, Venugopala temple
    for (const [x, y] of [[-24, 55], [-24, -35]]) {
      if (old) W.pavilion({ x, y, w: 32, d: 6, rot: 0, plinth: 0.4, colH: 3.4, cols: [11, 2], roof: 'flat', color: 'plasterDark', kind: 'barracks', stairs: false });
      else W.ruin({ rect: [x, y, 32, 6, 0], h: photo ? 3.4 : 2.6, thick: 0.7, color: 'stone', doors: [{ edge: 0, at: 0.25, w: 3 }, { edge: 0, at: 0.75, w: 3 }, { edge: 2, at: 0.5, w: 3 }] });
    }
    if (old) W.mosque({ x: -25, y: 36, w: 12, d: 8, rot: 90, h: 5.5, domes: 1, domeShape: 'half', minarets: 2, minR: 0.55, minH: 11, color: 'plaster', court: { d: 6 } });
    else {
      W.ruin({ rect: [-25, 36, 8, 12, 0], h: photo ? 4.2 : 3.6, thick: 0.8, color: 'plasterDark', doors: [{ edge: 1, at: 0.5, w: 2.2 }] });
      W.minaret({ x: -20.8, y: 42.2, r: 0.55, h: photo ? 7 : 6, rings: [0.6], color: 'plasterDark' });
    }
    W.temple({ x: -22, y: -16, rot: 90, w: 4, h: 4.5, style: 'dravida', tiers: 2, plinth: 0.6, mandapa: { d: 4, w: 4.4, h: 2.6, roof: 'flat' }, color: 'stone' });

    // ---------------- lower fort: Venkataramana temple, Sadatulla Khan mosque, jail, tanks
    const vtw = W.wall({ path: rectPts(VT.x, VT.y, VT.w, VT.d, 0), closed: true, h: 4.4, thick: 1.4, batter: 0.02, parapet: false, merlon: false, walk: false, color: 'stone' });
    W.gate({ wall: vtw, at: [VT.x + VT.w / 2, VT.y], width: 3.0, spring: 3.2, rise: 0.4, style: 'flat', towers: false, doors: false, frame: false });
    W.gopuram({ x: VT.x + VT.w / 2, y: VT.y, w: 11, d: 7, rot: 90, tiers: 5, h: 14, baseH: 5.4, passage: 3.0, color: photo ? '#8d8276' : 'stone' });
    occupyLine(W, rectPts(VT.x, VT.y, VT.w, VT.d, 0), 1.2, true);
    W.temple({ x: 105, y: VT.y, rot: 90, w: 7, h: 10, style: 'dravida', tiers: 3, plinth: 1.0, mandapa: { d: 8, w: 9, h: 3.4, roof: 'flat' }, color: 'stone' });
    W.pavilion({ x: 112, y: -88, w: 30, d: 4.5, rot: 0, plinth: 0.6, colH: 3.0, cols: [11, 2], roof: 'flat', color: 'stone', stairs: false, kind: 'temple' });
    W.well({ x: 127, y: -110, r: 1.3, frame: old });
    W.zone(rectPts(VT.x, VT.y, VT.w - 1, VT.d - 1, 0), 'Venkataramana temple');
    W.mosque({ x: 148, y: -6, w: 14, d: 8, rot: 90, h: 6, domes: 3, domeShape: 'half', minarets: 2, minR: 0.6, minH: 12.5, color: photo ? 'plasterDark' : 'plaster', court: { d: 8 } });
    W.building({ rect: [165, -45, 8, 5, 0], h: 3.8, color: 'stone', roof: 'vault', roofColor: 'stone', windows: { style: 'rect', spacing: 2.5, w: 0.4, h: 0.6, sill: 2.4 }, kind: 'building' });
    W.zone(rectPts(165, -45, 12, 9, 0), 'Old jail');
    W.tank({ poly: TANK_CH, waterDepth: 1.8, tiers: 4, color: 'stone' }); W.zone(TANK_CH, 'Chakkarakulam tank');
    W.tank({ poly: TANK_CT, waterDepth: 1.8, tiers: 4, color: 'stone' }); W.zone(TANK_CT, 'Chettikulam tank');
    // summit of Rajagiri: Ranganatha temple, granaries, audience hall, magazine, flagstaff, cannon
    const sb = SUMMIT_H - 0.2;
    W.temple({ x: -195, y: 10, rot: 90, w: 5, h: 6, style: 'dravida', tiers: 2, plinth: 0.8, mandapa: { d: 4.5, w: 5.5, h: 2.8, roof: 'flat' }, color: 'stone', base: sb });
    W.building({ rect: [-191, -3, 12, 5, 0], base: sb, h: 4.2, color: 'stone', roof: 'vault', roofColor: 'stone', windows: false, kind: 'granary' });
    W.building({ rect: [-186, -10.4, 10, 4.5, 0], base: sb, h: 4.0, color: 'stone', roof: 'vault', roofColor: 'stone', windows: false, kind: 'granary' });
    if (old) W.pavilion({ x: -183, y: 17.5, w: 8, d: 5.5, rot: 0, plinth: 0.5, colH: 2.8, cols: [4, 3], roof: 'flat', color: 'plaster', stairs: false, base: sb, kind: 'palace' });
    else W.ruin({ rect: [-183, 17.5, 8, 5.5, 0], base: sb, h: 2.2, thick: 0.6, color: 'stone', doors: [{ edge: 0, at: 0.5, w: 2.4 }] });
    W.building({ rect: [-198.5, 1.5, 4, 3, 0], base: sb, h: 2.8, color: 'stone', roof: 'vault', roofColor: 'stone', windows: false, kind: 'building' });
    W.flag({ x: -191, y: 4.2, h: SUMMIT_H, pole: 9, color: old ? '#f4f1e8' : '#e8e4da', size: old ? 1.9 : 0.01 });
    W.cannon({ x: -199.5, y: -6, h: SUMMIT_H, dir: 200, len: 3.4, r: 0.34, carriage: old });
    if (old) W.cannon({ x: -189, y: 22.5, h: SUMMIT_H, dir: 95, len: 3.0, r: 0.3 });
    W.zone(ENCEINTE, 'Rajagiri summit');
    W.zone(rectPts(-160, 6, 14, 30, 0), 'Upper fort');
    // Krishnagiri summit: audience chamber, two granaries, a temple, ghee and oil wells
    const kb = KRI.top - 0.2;
    if (photo) W.ruin({ rect: [76, 192, 9, 6, 0], base: kb, h: 3.4, thick: 0.6, color: 'plasterDark', doors: [{ edge: 0, at: 0.5, w: 2.4 }] });
    else W.pavilion({ x: 76, y: 192, w: 9, d: 6, rot: 0, plinth: 0.5, colH: 3, cols: [4, 3], roof: 'domes', domes: [{ x: 73.5, y: 192, r: 1.6, shape: 'half' }, { x: 78.5, y: 192, r: 1.6, shape: 'half' }], color: 'plaster', stairs: false, base: kb, kind: 'palace' });
    W.building({ rect: [83.5, 182, 4.5, 8, 0], base: kb, h: 3.8, color: 'stone', roof: 'vault', roofColor: 'stone', windows: false, kind: 'granary' });
    W.building({ rect: [65.5, 186, 4.5, 8, 0], base: kb, h: 3.8, color: 'stone', roof: 'vault', roofColor: 'stone', windows: false, kind: 'granary' });
    W.temple({ x: 84, y: 190, rot: 180, w: 3, h: 3.4, style: 'dravida', tiers: 2, plinth: 0.5, mandapa: false, color: 'stone', base: kb });
    W.well({ x: 75, y: 183, r: 1.0 }); W.well({ x: 70.5, y: 191, r: 0.9 });
    if (old) W.flag({ x: 76, y: 186.5, h: KRI.top, pole: 7, color: '#f4f1e8', size: 1.5 });
    W.zone(circle(KRI.x, KRI.y, KRI_RING), 'Krishnagiri');
    W.zone(circle(CHA.x, CHA.y, CHA_RING + 1), 'Chandrayan Durg');
    if (old) W.building({ rect: [55, -188.5, 6, 4, 0], base: CHA.top - 0.2, h: 3.2, color: 'stone', roof: 'vault', roofColor: 'stone', windows: false, kind: 'building' });
    else W.ruin({ rect: [55, -188.5, 6, 4, 0], base: CHA.top - 0.2, h: 2.0, thick: 0.6, color: 'stone', doors: [{ edge: 0, at: 0.5, w: 1.6 }] });
    W.label(RAJ.x - 30, RAJ.y - 40, 'RAJAGIRI', 'label', 1.3);
    W.label(KRI.x + 30, KRI.y + 30, 'KRISHNAGIRI', 'label', 1.1);
    W.label(CHA.x + 30, CHA.y - 30, 'CHANDRAYAN DURG', 'label', 1.0);

    // ---------------- roads and places kept clear of scatter
    for (const [p, w] of [[ROAD_P_OUT, 3], [ROAD_A_OUT, 3], [ROAD_MAIN, 3], [ROAD_ARCOT, 2.6], [ROAD_TEMPLE, 2.4], [ROAD_KRI, 2.4], [ROAD_CHA, 2.4], [ROAD_IF, 2.6], [ROAD_G1, 2.2]]) occupyLine(W, p, w);
    if (now) occupyLine(W, NH77, 4.5);
    for (const p of POIS) W.occupy(regularPoly(p.at[0], p.at[1], 3, 8), 0.3);

    // ---------------- the siege of 1761: British battery and camp outside the east wall
    if (old) {
      const battery = (x, y, rot) => {
        const top = W.platform({ poly: rectPts(x, y, 8, 16, rot), dh: 1.0, color: '#8a6d4c' });
        const c = Math.cos(rot * DEG), s = Math.sin(rot * DEG);
        const L = (u, v) => [x + u * c - v * s, y + u * s + v * c];
        W.wall({ path: [L(-5, -9), L(-5, 9)], closed: false, outer: 'right', h: 1.9, thick: 2.2, batter: 0.25, parapet: false, merlon: false, walk: false, color: '#7d6345' });
        for (const v of [-5, 0, 5]) { const p = L(-2, v); W.cannon({ x: p[0], y: p[1], h: top, dir: 180 + rot, len: 3.0, r: 0.3 }); }
        const f = L(2.5, 7); W.flag({ x: f[0], y: f[1], h: top, pole: 6, color: '#b3262e', size: 1.4 });
        W.occupy(rectPts(x, y, 12, 20, rot), 0.5);
      };
      battery(238, -30, 0);
      battery(206, 160, 28);
      // tents
      const tent = (x, y, rot, s = 1) => W.building({ rect: [x, y, 3.2 * s, 4.2 * s, rot], h: 0.5, color: '#e9e2cf', roof: 'gable', roofH: 2.2 * s, roofColor: '#ede6d3', windows: false, cornice: false, kind: 'building' });
      for (let i = 0; i < 4; i++) for (let j = 0; j < 5; j++) tent(222 + j * 8, -120 + i * 11, 90, 1);
      W.building({ rect: [252, -80, 6, 8, 0], h: 0.6, color: '#efe8d6', roof: 'gable', roofH: 3.2, roofColor: '#f1ead8', windows: false, cornice: false, kind: 'building' });
      W.flag({ x: 252, y: -74.5, h: W.ground(252, -74.5), pole: 8, color: '#b3262e', size: 1.6 });
      W.zone(CAMP, 'British camp');
      // French colours on the hills and gates
      for (const g of [pg, ag]) {
        const f = W.wallFrame(g.w, g.s + 8.2), x = f.x + f.ox * 2.6, y = f.y + f.oy * 2.6;
        W.flag({ x, y, h: W.wallTopAt(g.w, x, y) + 1.6, pole: 6, color: '#f4f1e8', size: 1.4 });
      }
    } else if (photo) {
      W.cannon({ x: 172, y: -18, h: W.ground(172, -18), dir: 160, len: 3.2, r: 0.32, carriage: false });
    }

    // ---------------- houses of the lower fort
    const HZ1 = [[88, 4], [150, -6], [166, 40], [152, 92], [116, 96], [90, 52]];
    const HZ2 = [[40, -18], [138, -30], [140, -76], [90, -78], [60, -92], [28, -62]];
    if (!now) {
      const ho = { size: [4.5, 8], h: [1, 1], colors: ['plaster', 'plasterDark'], roof: 'flat', roofColor: 'roof', rot: 8, spacing: 2.4, ruin: photo, ruinShare: 0.85, ruinH: 0.5 };
      W.houses(Object.assign({ poly: HZ1, count: old ? 18 : 14, seed: 31 }, ho));
      W.houses(Object.assign({ poly: HZ2, count: old ? 14 : 10, seed: 37 }, ho));
      W.houses(Object.assign({}, ho, { poly: HZ1, count: old ? 8 : 4, seed: 32, roof: old ? 'tiled' : 'flat' }));
      W.houses(Object.assign({}, ho, { poly: HZ2, count: old ? 8 : 4, seed: 38, roof: old ? 'tiled' : 'flat' }));
    } else {
      const ho = { size: [4.5, 7], h: [1, 1], colors: ['stone'], roof: 'flat', rot: 8, spacing: 3, ruin: true, ruinShare: 1, ruinH: 0.3 };
      W.houses(Object.assign({ poly: HZ1, count: 8, seed: 31 }, ho));
      W.houses(Object.assign({ poly: HZ2, count: 6, seed: 37 }, ho));
    }

    // ---------------- granite boulders (the same in every era)
    const rajZone = circle(RAJ.x, RAJ.y, 98, 40), kriZone = circle(KRI.x, KRI.y, 53, 28), chaZone = circle(CHA.x, CHA.y, 41, 24);
    W.occupy(circle(RAJ.x, RAJ.y, RAJ.rt + 1, 24), 0);
    W.occupy(circle(KRI.x, KRI.y, KRI.rt, 20), 0);
    W.occupy(circle(CHA.x, CHA.y, CHA.rt, 16), 0);
    boulderField(W, { poly: rajZone, count: 40, s: [5, 9], seed: 108, pad: 0.6 });
    boulderField(W, { poly: rajZone, count: 150, s: [2, 6], seed: 101, pad: 0.8 });
    boulderField(W, { poly: kriZone, count: 55, s: [1.8, 5], seed: 102, pad: 0.8 });
    boulderField(W, { poly: chaZone, count: 40, s: [1.6, 4.5], seed: 103, pad: 0.8 });
    boulderField(W, { poly: stripPoly(RIDGE.map((p) => [p[0], p[1]]), 14), count: 55, s: [1.5, 4.5], seed: 104, pad: 0.8 });
    const LOWER = [[-100, 70], [20, 152], [112, 148], [170, 44], [170, -40], [120, -134], [80, -160], [20, -160], [-96, -60], [0, -50], [0, 68]];
    boulderField(W, { poly: LOWER, count: 90, s: [1.2, 4.2], seed: 105, pad: 1.5 });
    // tors: piles of big rounded boulders on the outcrops of the plain
    for (const [x, y, r, n, sd] of [[112, 64, 9, 9, 111], [8, -96, 8, 8, 112], [228, 120, 10, 9, 113], [-240, -150, 13, 12, 114], [40, 118, 6, 5, 115], [150, -150, 7, 6, 116], [-60, -150, 8, 6, 117], [-235, 120, 10, 8, 118]]) boulderField(W, { poly: circle(x, y, r, 12), count: n, s: [2.4, 5.5], seed: sd, pad: -0.6 });
    // small rocks between the walls of the Rajagiri face
    boulderField(W, { poly: [polar(RAJ, 30, RAJ_SS), polar(RAJ, 96, RAJ_SS), polar(RAJ, 98, 10), polar(RAJ, 96, RAJ_SN), polar(RAJ, 30, RAJ_SN)], count: 140, s: [0.9, 2.3], seed: 107, pad: 0.35 });
    boulderField(W, { poly: [[-290, -258], [275, -258], [275, 262], [-290, 262]], count: 70, s: [1.4, 4.5], seed: 106, pad: 2.0 });

    // ---------------- vegetation
    const lowerTrees = { '1761': 40, '1890s': 120, today: 85 }[era];
    W.trees({ poly: LOWER, count: lowerTrees, types: photo ? { round: 3, neem: 2, acacia: 2, palm: 1, banyan: 1 } : { round: 3, neem: 2, palm: 2, acacia: 1 }, s: [0.8, 1.35], minDist: 6, seed: 41, pad: 1.4 });
    W.trees({ poly: LOWER, count: { '1761': 40, '1890s': 260, today: 150 }[era], types: { shrub: 3, grass: 2 }, s: [0.7, 1.3], minDist: 2.6, seed: 42, pad: 0.9 });
    for (const [zone, n, seed] of [[rajZone, 110, 51], [kriZone, 45, 52], [chaZone, 35, 53]]) {
      W.trees({ poly: zone, count: Math.round(n * (photo ? 1.6 : old ? 0.7 : 1.2)), types: { shrub: 4, acacia: 1, round: 1 }, s: [0.7, 1.2], minDist: 3.5, maxSlope: 2.4, seed, pad: 0.8 });
    }
    W.trees({ poly: [[-290, -258], [275, -258], [275, 262], [-290, 262]], count: { '1761': 70, '1890s': 150, today: 120 }[era], types: { palm: 2, round: 2, acacia: 2, shrub: 3 }, s: [0.8, 1.3], minDist: 7, seed: 43, pad: 2, avoid: [LOWER, rajZone] });
    if (now) W.trees({ poly: PALACE_POLY, count: 12, types: { round: 2, ashoka: 2, palm: 1 }, s: [0.8, 1.1], minDist: 8, seed: 44, pad: 2.5 });
    if (photo) W.trees({ poly: IF_POLY, count: 40, types: { shrub: 3, round: 1, acacia: 1 }, s: [0.7, 1.2], minDist: 4, seed: 45, pad: 1.2 });

    // ---------------- the Gingee hills beyond the plain (render only)
    for (const [x, y, r, h] of [[-430, 70, 120, 62], [-390, -310, 95, 46], [-170, 430, 105, 50], [150, 440, 80, 36], [430, -260, 75, 30], [-470, 330, 130, 58], [380, 300, 70, 26], [40, -440, 90, 34]]) W.scenery({ hill: { x, y, r, h }, color: 'rock', h0: 0.2 });

    // ---------------- people and animals
    const wallTop = (wall, x, y) => W.wallTopAt(wall, x, y);
    const walkAlong = (path, wallOf, s0, s1, n) => { const pts = []; for (let i = 0; i <= n; i++) { const p = pointAt(path, lerp(s0, s1, i / n)); pts.push([p.x, p.y, wallTop(wallOf(p.x, p.y), p.x, p.y)]); } for (let i = n - 1; i > 0; i--) pts.push(pts[i]); return pts; };
    const pathWalk = (P, from, to, stepN = 3) => { const out = []; for (let i = from; i <= to; i += stepN) out.push(P.pts[i]); return out; };
    if (old) {
      W.npc({ kind: 'sepoy', patrol: walkAlong(E_WALL, eWallOf, sP + 20, sP + 120, 6), count: 2 });
      W.npc({ kind: 'sepoy', patrol: walkAlong(E_WALL, eWallOf, sP - 130, sP - 22, 6), count: 2 });
      W.npc({ kind: 'guard-deccan', patrol: walkAlong(NW_WALL, nwWallOf, 60, 200, 6), count: 2 });
      W.npc({ kind: 'officer', at: [172, -36], face: 0, mode: 'idle' });
      W.npc({ kind: 'guard-deccan', at: [174, -24], face: 0, mode: 'idle' });
      W.npc({ kind: 'guard-deccan', at: [174, -36.5], face: 0, mode: 'idle' });
      W.npc({ kind: 'guard-deccan', at: [-9, 1], face: 0, mode: 'idle' });
      W.npc({ kind: 'sepoy', at: G1p(5, 2), face: G1.a + 180, mode: 'idle' });
      W.npc({ kind: 'officer', circle: [-185, 6, 7], count: 1, h: SUMMIT_H });
      W.npc({ kind: 'sepoy', circle: [-188, 8, 9], count: 2, h: SUMMIT_H });
      W.npc({ kind: 'guard-deccan', patrol: pathWalk(RJ, 0, RJ.pts.length - 1, 4), count: 2 });
      W.npc({ kind: 'sepoy', circle: [75, 186, 6], count: 2, h: KRI.top });
      W.npc({ kind: 'officer', circle: [-62, 10, 8], count: 1 }); W.npc({ kind: 'sepoy', circle: [-60, 20, 10], count: 2 });
      W.npc({ kind: 'villager', zone: HZ1, count: 3 }); W.npc({ kind: 'woman-red', zone: HZ1, count: 2 });
      W.npc({ kind: 'merchant', circle: [120, -18, 14], count: 2 }); W.npc({ kind: 'woman-green', zone: HZ2, count: 2 });
      // the besiegers
      W.npc({ kind: 'sepoy', circle: [244, -30, 6], count: 4 });
      W.npc({ kind: 'officer', at: [246, -22], face: 180, mode: 'idle' });
      W.npc({ kind: 'sepoy', circle: [212, 162, 6], count: 3 });
      W.npc({ kind: 'sepoy', zone: CAMP, count: 5 }); W.npc({ kind: 'officer', circle: [250, -86, 5], count: 1 });
      W.npc({ kind: 'cow', circle: [240, -60, 8], count: 4 }); W.npc({ kind: 'horse', circle: [226, -66, 6], count: 3 }); W.npc({ kind: 'elephant', circle: [256, -100, 6], count: 1 });
    } else if (photo) {
      W.npc({ kind: 'officer', at: [-58, -3], face: 200, mode: 'idle' });
      W.npc({ kind: 'villager', at: [-56.5, -5], face: 210, mode: 'idle' });
      W.npc({ kind: 'villager', circle: [-60, 14, 8], count: 1 });
      W.npc({ kind: 'villager', circle: [60, 20, 30], count: 2 });
      W.npc({ kind: 'cow', circle: [70, -40, 22], count: 5 }); W.npc({ kind: 'goat', circle: [110, 60, 18], count: 6 });
      W.npc({ kind: 'woman-green', circle: [40, -44, 10], count: 1 }); W.npc({ kind: 'woman-indigo', circle: [96, 42, 8], count: 1 });
      W.npc({ kind: 'villager', circle: [200, -32, 10], count: 1 });
    } else {
      W.npc({ kind: 'asi-guard', at: [-9, 1], face: 0, mode: 'idle' });
      W.npc({ kind: 'asi-guard', at: G1p(5, -2.6), face: G1.a + 180, mode: 'idle' });
      W.npc({ kind: 'tourist-a', patrol: pathWalk(RJ, 0, RJ.pts.length - 1, 3), count: 3 });
      W.npc({ kind: 'tourist-c', patrol: pathWalk(RJ, 0, RJ.pts.length - 1, 4), count: 2 });
      W.npc({ kind: 'student', patrol: pathWalk(RJ, 0, Math.floor(RJ.pts.length * 0.6), 3), count: 4, speed: 1.4 });
      W.npc({ kind: 'tourist-b', circle: [-62, 10, 12], count: 3 }); W.npc({ kind: 'tourist-d', circle: [-72, 30, 10], count: 2 });
      W.npc({ kind: 'tourist-c', circle: [-184, 6, 8], count: 2, h: SUMMIT_H }); W.npc({ kind: 'tourist-d', circle: [-160, 6, 5], count: 1, h: 64 });
      W.npc({ kind: 'tourist-a', patrol: pathWalk(KR, 0, KR.pts.length - 1, 3), count: 2 });
      W.npc({ kind: 'tourist-b', circle: [118, -100, 10], count: 2 });
      W.npc({ kind: 'villager', circle: [150, 40, 12], count: 1 }); W.npc({ kind: 'goat', circle: [60, -100, 14], count: 4 });
    }

    // ---------------- places
    for (const p of POIS) {
      const q = Object.assign({}, p, { eraNote: p.eraNote?.[era] || null });
      if (p.id === 'summit') q.h = SUMMIT_H;
      if (p.id === 'chasm') q.h = 64;
      if (p.id === 'krishnagiri') q.h = KRI.top;
      if (p.id === 'chandrayan') q.h = CHA.top;
      W.poi(q);
    }
    W.wildlife({ kinds: { macaque: 8, boar: 3, peafowl: 3 } });
    W.wildlife({ kinds: { macaque: 4 }, walls: true, s: 0.5 });
    W.spawn(199, -30, null, 180);
  },
};
