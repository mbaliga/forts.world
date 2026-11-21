// 10 · Jaisalmer (Sonar Qila, the Golden Fort) — the living hill fort on Trikuta hill, Jaisalmer, Rajasthan.
// Plan units are metres (planScale 1). The 76 m hill is compressed to ~30 units (vScale 2.5); walls, gates and
// buildings stay at human scale. The long axis is taken N-S (the research default; UNESCO Map 1.25 may show it
// up to ~30 deg east of north). Gate facings follow the NMMA inventory forms. The ramp follows the research
// reconstruction: Akhai Pol (faces E) -> forecourt -> Suraj Pol (faces S) -> lower leg north between the outer
// wall and the curtain -> hairpin at the NE -> upper leg south -> Ganesh Pol (faces N) -> through the curtain ->
// Hawa Pol (faces N, beneath the palace) -> Dussehra Chowk.
import { rectPts, regularPoly } from './kit.js';
import { smoothPath, offsetPolyline, polylineLength, pointAt, distToPolyline, pointInPoly, polyArea, lerp, smoothstep, makeNoise, fbm } from '../core/geom.js';

// ---------------------------------------------------------------- small geometry helpers (level-local)
const off = (pts, d) => offsetPolyline(pts, true, d, 2.5); // closed CCW polygon: + inward, - outward
function crossX(poly, y, east = true) { // x where the closed polygon crosses latitude y (east or west side)
  let best = east ? -Infinity : Infinity;
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i], b = poly[(i + 1) % poly.length];
    if ((a[1] - y) * (b[1] - y) > 0 || a[1] === b[1]) continue;
    const x = a[0] + (b[0] - a[0]) * ((y - a[1]) / (b[1] - a[1]));
    if (east ? x > best : x < best) best = x;
  }
  return best;
}
function crossY(poly, x, north = true) {
  let best = north ? -Infinity : Infinity;
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i], b = poly[(i + 1) % poly.length];
    if ((a[0] - x) * (b[0] - x) > 0 || a[0] === b[0]) continue;
    const y = a[1] + (b[1] - a[1]) * ((x - a[0]) / (b[0] - a[0]));
    if (north ? y > best : y < best) best = y;
  }
  return best;
}
const arcS = (poly, x, y, closed = true) => distToPolyline(x, y, poly, closed).s;
function subPath(poly, s0, s1, step = 3, closed = true) { // resampled piece of a polyline between arc lengths
  const n = Math.max(1, Math.ceil(Math.abs(s1 - s0) / step));
  const out = [];
  for (let i = 0; i <= n; i++) { const p = pointAt(poly, s0 + (s1 - s0) * (i / n), closed); out.push([p.x, p.y]); }
  return out;
}
function hAtY(path, y) { // height along an [x,y,h] polyline, looked up by latitude (first matching span)
  for (let i = 0; i < path.length - 1; i++) {
    const a = path[i], b = path[i + 1];
    if (y >= Math.min(a[1], b[1]) && y <= Math.max(a[1], b[1])) return lerp(a[2], b[2], (y - a[1]) / ((b[1] - a[1]) || 1));
  }
  const first = path[0], last = path[path.length - 1];
  return Math.abs(y - first[1]) < Math.abs(y - last[1]) ? first[2] : last[2];
}
function clipConvex(subject, clip) { // Sutherland-Hodgman, both CCW
  let out = subject;
  for (let i = 0; i < clip.length && out.length; i++) {
    const A = clip[i], B = clip[(i + 1) % clip.length];
    const side = (p) => (B[0] - A[0]) * (p[1] - A[1]) - (B[1] - A[1]) * (p[0] - A[0]);
    const inp = out; out = [];
    for (let j = 0; j < inp.length; j++) {
      const P = inp[j], Q = inp[(j + 1) % inp.length], sp = side(P), sq = side(Q);
      if (sp >= 0) out.push(P);
      if ((sp >= 0) !== (sq >= 0)) { const t = sp / (sp - sq); out.push([P[0] + (Q[0] - P[0]) * t, P[1] + (Q[1] - P[1]) * t]); }
    }
  }
  return out;
}
const box = (x0, x1, y0, y1) => [[x0, y0], [x1, y0], [x1, y1], [x0, y1]];
const flat = (p) => p.map((q) => [q[0], q[1]]);

// ---------------------------------------------------------------- outline of the upper fort
// Curtain (ring 2) centre-line: a rounded, egg-shaped lozenge, broader to the north (the "triangular" Trikuta
// outcrop), ~213 x 436 inside the outer pitching wall, ~232 x 462 overall.
const CTRL = [
  [104, -60], [106, 0], [104, 60], [98, 110], [88, 150], [72, 180], [50, 204], [22, 217], [-12, 219], [-44, 209],
  [-70, 188], [-90, 156], [-102, 106], [-107, 44], [-105, -22], [-99, -84], [-87, -132], [-68, -172], [-42, -201],
  [-12, -217], [16, -212], [44, -190], [68, -160], [86, -124], [97, -92],
];
const CUR = smoothPath(CTRL, true, 4);
const XC = (y) => crossX(CUR, y, true);   // curtain centre-line on the east flank
const XW = (y) => crossX(CUR, y, false);  // ... on the west flank
const IN = off(CUR, 9.4);                 // inner edge of the house plots (inside the inner wall)
const R3C = off(CUR, 7.6);                // inner wall (ring 3) centre-line
const MOOR = off(CUR, 4.2);               // centre of the moorcha lane between rings 2 and 3
const PAVE = off(smoothPath(CTRL, true, 2), -0.4); // coarse outline for painting the stone-paved lanes

// ---------------------------------------------------------------- the ramp
const PLATEAU = 27.6, DCH = 29.2, LEDGE = 20.5, LAND = 20.8, GOPA = 8.0;
const lowPt = (y, h, dx = 21.5) => [XC(y) + dx, y, h];
// lower leg: forecourt -> Suraj Pol (level landing at y -48..-40, gate at -44) -> north to the hairpin landing
const LOW = [
  [XC(-60) + 19, -60, GOPA], lowPt(-48, 8.3), lowPt(-40, 8.3), lowPt(-12, 9.8), lowPt(18, 11.5), lowPt(48, 13.2),
  lowPt(78, 14.9), lowPt(108, 16.7), lowPt(134, 18.4), lowPt(152, 19.9), [XC(162) + 19.5, 162, LAND],
];
const upPt = (y, h, dx = 12.5) => [XC(y) + dx, y, h];
// upper leg: hairpin landing -> south past Ganesh Pol (level at y 91..101, gate at 96) -> bend west at y 75
const UP1 = [[XC(167) + 14, 167, LAND], upPt(156, 20.9), upPt(130, 23.1), upPt(108, 25.3), upPt(101, 26.2), upPt(91, 26.2), upPt(78, 26.95)];
const UP1W = UP1.map((p) => [p[0] - 3.5, p[1], p[2]]); // the wide cut that also carries the bastions above the road
// last stretch: through the curtain line, west along the walled lane, then south through Hawa Pol and the passage
const HPX = 81, HPY = 70.4, LANEY = 75;
const UP2 = [upPt(78, 26.95), [XC(LANEY) + 10, LANEY, 27.1], [XC(LANEY) - 2, LANEY, 27.6], [90, LANEY, 28.2], [84, LANEY, 28.6],
  [HPX, 73.2, 28.85], [HPX, 66.6, 28.85], [HPX, 52, 29.05], [HPX, 44, DCH]];
const hLow = (y) => hAtY(LOW, y);
const hUp = (y) => hAtY(UP1, y);
const GY = 96, SPY = -44; // Ganesh Pol and Suraj Pol latitudes
const AKX = 131.5, AKY = -70.4; // Akhai Pol

// forecourt (the small chowk between Akhai Pol and Suraj Pol) and the hairpin landing
const FORE = box(114.8, 130.2, -88.7, -53.5);
const LANDING = [[XC(155) + 9.6, 155], [XC(155) + 25.4, 155], [XC(164) + 24.6, 164], [XC(171) + 21.5, 172], [XC(176) + 14, 177], [XC(176) + 9.4, 176]];

// retaining wall between the two legs (and behind the forecourt): its top carries the parapet of the upper road
const RWP = [[107.2, -93.2], [113.6, -88.2], [113.6, -55], ...LOW.filter((p) => p[1] >= -48).slice(0, -1).map((p) => [p[0] - 4.6, p[1]]), [XC(154) + 16.9, 154]];
const rwTop = (x, y) => (y > 71.7 ? hUp(Math.min(y, 156)) + 0.3 : LEDGE + 0.25);

// ring 1: the outer lower wall. East: parapet of the lower road from Akhai Pol to the hairpin; then the sloping
// pitching wall round N, W and S; finally the south side of the forecourt back to the Akhai Pol gatehouse.
const R1P = off(CUR, -9.6);
const R1E = [[AKX, -52.5], ...LOW.filter((p) => p[1] >= -48).map((p) => [p[0] + 4.6, p[1]]), [XC(167) + 24.2, 167], [XC(173) + 20.5, 174.5]];
const sNE = arcS(R1P, XC(186) + 9.6, 186), sSE = arcS(R1P, XC(-94) + 9.6, -94);
const R1W = subPath(R1P, sNE, sSE > sNE ? sSE : sSE + polylineLength(R1P, true), 4);
const R1S = [[113.6, -89.8], [122, -89.4], [AKX, -88.9]];
const R1 = [...R1E, ...R1W, ...R1S];
// foot height of the hill just outside ring 1 (drives the talus): low beside the ramp, high round the pitching
const R1FH = [...R1E.map((p, i) => (i === 0 ? 5.2 : Math.min(17.5, hLow(Math.min(p[1], 162)) - 3))), ...R1W.map(() => 16.4), 6.4, 5.6, 5.2];
// Fast signed distance to a closed polyline (no allocation): returns distance (negative inside) and leaves the
// nearest segment index / parameter in SD.seg / SD.t. Used by the hill terrain function below.
function segsOf(pts) { const n = pts.length, S = new Float64Array(n * 4); for (let i = 0; i < n; i++) { const a = pts[i], b = pts[(i + 1) % n]; S[i * 4] = a[0]; S[i * 4 + 1] = a[1]; S[i * 4 + 2] = b[0]; S[i * 4 + 3] = b[1]; } return S; }
const SD = { seg: 0, t: 0 };
function sdist(x, y, S) {
  let best = Infinity, bseg = 0, bt = 0, inside = false;
  for (let i = 0, n = S.length; i < n; i += 4) {
    const ax = S[i], ay = S[i + 1], bx = S[i + 2], by = S[i + 3];
    const dx = bx - ax, dy = by - ay, l2 = dx * dx + dy * dy;
    let t = l2 > 0 ? ((x - ax) * dx + (y - ay) * dy) / l2 : 0; t = t < 0 ? 0 : t > 1 ? 1 : t;
    const qx = ax + dx * t - x, qy = ay + dy * t - y, d2 = qx * qx + qy * qy;
    if (d2 < best) { best = d2; bseg = i >> 2; bt = t; }
    if ((ay > y) !== (by > y) && x < (bx - ax) * (y - ay) / (by - ay) + ax) inside = !inside;
  }
  SD.seg = bseg; SD.t = bt;
  return inside ? -Math.sqrt(best) : Math.sqrt(best);
}
const S_R1 = segsOf(R1), S_CUR = segsOf(CUR);
// x of the retaining wall by latitude: inside ring 1 and east of it lies the ramp corridor, which follows the roads
const RWX = new Float32Array(500); for (let k = 0; k < 500; k++) RWX[k] = (() => { const y = -93 + k * 0.5; for (let i = 0; i < RWP.length - 1; i++) { const a = RWP[i], b = RWP[i + 1]; if (y >= Math.min(a[1], b[1]) && y <= Math.max(a[1], b[1])) return lerp(a[0], b[0], (y - a[1]) / ((b[1] - a[1]) || 1)); } return 1e9; })();
const rwXAt = (y) => (y < -93 || y > 156 ? 1e9 : y > 154 ? RWX[494] : RWX[Math.min(499, Math.round((y + 93) * 2))]);
const nzT = makeNoise(97), nzP = makeNoise(61);
// Trikuta hill: talus below ring 1 (foot height varies round the fort), the ledge inside ring 1 (the ramp corridor
// on the east), the plateau inside the curtain with a little undulation. One pass replaces several polygon ops.
function hillFn(x, y, h) {
  if (x < -160 || x > 225 || y < -270 || y > 272) return h;
  const d1 = sdist(x, y, S_R1);
  const i = SD.seg, j = (i + 1) % R1.length, fh = lerp(R1FH[i], R1FH[j], SD.t);
  let H = h;
  if (d1 > 0) {
    const f = d1 <= 2 ? 1 : d1 <= 14 ? 1 - 0.72 * smoothstep(2, 14, d1) : 0.28 * (1 - smoothstep(14, 31, d1));
    const rough = 1.6 * fbm(nzT, x / 7, y / 7, 3) * smoothstep(2, 5, d1) * (1 - smoothstep(12, 26, d1));
    H = Math.max(H, fh * f + rough * Math.min(1, fh / 8));
  } else H = Math.max(H, fh);
  const di = d1 + 1.15; // inner face of ring 1
  if (di < 1.4 && !(d1 < 0 && x > rwXAt(y))) { const f = di <= 0 ? 1 : 1 - di / 1.4; H = Math.max(H, lerp(H, LEDGE, f)); }
  if (d1 < 2) {
    const dc = sdist(x, y, S_CUR);
    const dp = dc - 1.25;
    if (dp < 1.6) { const f = dp <= 0 ? 1 : 1 - dp / 1.6; H = Math.max(H, lerp(H, PLATEAU, f)); }
    const w = 1 - smoothstep(-6, 0, dc + 12);
    if (w > 0) H += 0.6 * w * fbm(nzP, x / 26 + 11.3, y / 26 - 7.1, 3);
  }
  return H;
}

// curtain path: open at the road's entry through the curtain line (y 69..81 on the east)
const LCUR = polylineLength(CUR, true);
const sCa = arcS(CUR, XC(81), 81), sCb = arcS(CUR, XC(69), 69);
const CURP = subPath(CUR, sCa, sCb > sCa ? sCb : sCb + LCUR, 3);

// ring 3 (inner wall, absorbed into houses): gaps where the lanes reach the moorcha; none beside the palace
const L3 = polylineLength(R3C, true);
const gapW = [36, 88, 132, 172, -20, -36.5, -108, -152, -188].map((y) => arcS(R3C, crossX(R3C, y, false), y));
const gapE = [88, 132, 172, -20, -64, -108, -152].map((y) => arcS(R3C, crossX(R3C, y, true), y));
const gapN = [arcS(R3C, 8, crossY(R3C, 8, true))], gapS = [arcS(R3C, -5.5, crossY(R3C, -5.5, false))];
const s3a = arcS(R3C, crossX(R3C, -19, true), -19), s3b = arcS(R3C, crossX(R3C, 81.5, true), 81.5);
function ring3Segments() {
  const cuts = [...gapW, ...gapE, ...gapN, ...gapS].map((s) => [s - 3.1, s + 3.1]);
  cuts.push([s3a, s3b]);
  // walk the loop from the palace end (s3b) once round to s3a + L3
  const iv = cuts.map(([a, b]) => { let a2 = a, b2 = b; while (a2 < s3b - 1e-6) { a2 += L3; b2 += L3; } return [a2, b2]; }).sort((p, q) => p[0] - q[0]);
  const segs = []; let cur = s3b;
  for (const [a, b] of iv) { if (a > cur + 4) segs.push([cur, a]); cur = Math.max(cur, b); }
  if (s3a + L3 > cur + 4) segs.push([cur, s3a + L3]);
  return segs.map(([a, b]) => subPath(R3C, a, b, 3));
}
const R3SEGS = ring3Segments();

// ---------------------------------------------------------------- lanes and house blocks inside the walls
// Lanes are the gaps between these blocks (2-5 m wide, as in the research); blocks are clipped to the inner wall.
const BLOCKS = [
  // north quarter
  box(-130, -47.3, 38.5, 85.7), box(-42.7, 5.7, 38.5, 85.7), box(10.3, 21.3, 38.5, 85.7), box(21.3, 32.6, 38.5, 45.4), box(21.3, 72.2, 70.2, 85.7), box(75.2, 130, 81.8, 85.7),
  box(-130, -47.3, 90.3, 129.7), box(-42.7, 5.7, 90.3, 129.7), box(10.3, 47.7, 90.3, 129.7), box(52.3, 130, 90.3, 129.7),
  box(-130, -47.3, 134.3, 169.7), box(-42.7, 5.7, 134.3, 169.7), box(10.3, 47.7, 134.3, 169.7), box(52.3, 130, 134.3, 169.7),
  box(-130, 5.7, 174.3, 240), box(10.3, 130, 174.3, 240),
  // west and south of the square
  box(-130, -47.3, -17.7, 33.4), box(-42.7, -18.2, -17.7, 33.4), box(-16.4, -7.8, -17.7, 2.4), box(-3.2, 22.4, -17.7, 2.6), box(23.6, 32.4, -17.7, 33.4),
  box(34.2, 52.7, -17.7, 0.4), box(57.3, 82.6, -17.7, 0.4),
  box(-130, -7.8, -33.9, -22.3), box(-3.2, 52.7, -61.7, -22.3), box(57.3, 130, -61.7, -22.3),
  box(-130, -79.2, -105.7, -39.1), box(-3.2, 52.7, -105.7, -66.3), box(57.3, 130, -105.7, -66.3),
  box(-130, -52.3, -149.7, -110.3), box(-47.7, -7.8, -149.7, -110.3), box(-3.2, 52.7, -149.7, -110.3), box(57.3, 130, -149.7, -110.3),
  box(-130, -52.3, -186, -154.3), box(-47.7, -7.8, -186, -154.3), box(-3.2, 52.7, -186, -154.3), box(57.3, 130, -186, -154.3),
  box(-130, -7.8, -240, -190), box(-3.2, 130, -240, -190),
];
const PLOTS = BLOCKS.map((b) => clipConvex(b, IN)).filter((p) => p.length >= 3 && polyArea(p) > 60);

// ---------------------------------------------------------------- places (section 8 of the research)
const POIS = [
  { id: 'akhai', title: 'Akhai Pol, the first gate', text: 'The official site-management plan describes a wooden doorway between two semicircular bastions, with a single-storey jharokha structure spanning above it. This scene now uses that documented massing; its dimensions and detailed façade remain schematic. The fort is entered through this eastern gateway, then Suraj, Ganesh and Hawa Pol on the climb to the inhabited upper fort.', source: 'https://whc.unesco.org/document/179952',
    eraNote: { '1650': 'The Government’s site-management plan dates Akhey Prole to the mid-17th century; the ASI inventory instead attributes it to Akshai Singh (1722–1762). The gate is shown, but its exact phase is unresolved.', '1970s': 'MacDougall photographed the fort from the street at Akhai Pol, looking up at the walls on the hill.', today: 'It remains the single eastern entrance described in the Government’s monument documentation.' } },
  { id: 'suraj', title: 'Suraj Pol, the Sun Gate', text: 'The second gate, at the top of the small square inside Akhai Pol, is a massive, plain south-facing gateway with a large medallion above the arch and parapet walls on either side. Tourism sources say images of the Sun God gave it its name.', source: 'https://ignca.gov.in/asi_reports/rjjsl_004.pdf',
    eraNote: { '1970s': 'One of MacDougall\'s photographs looks through a gate of the approach at people and bullock carts; the catalogue does not say which gate.' } },
  { id: 'ganesh', title: 'Ganesh Pol', text: 'The third gate stands after the hairpin bend, so it faces north and is passed walking south. An image of Ganesha guards it, and ICOMOS dates it to the 12th-13th centuries, the earliest period of the fort\'s development.', source: 'https://whc.unesco.org/document/153036' },
  { id: 'hawa', title: 'Hawa Pol, the wind gate', text: 'The last gate is a north-facing passage with foliated-arch windows above it. It runs beneath the royal palace and opens into Dussehra Chowk.', source: 'https://ignca.gov.in/asi_reports/rjjsl_006.pdf' },
  { id: 'chowk', title: 'Dussehra Chowk', text: 'The royal square is the heart of the fort, with the palaces along two of its sides. Narrow stone-paved alleys lead off it to the houses, which were originally grouped into neighbourhoods.', source: 'https://whc.unesco.org/document/153036',
    eraNote: { '1650': 'Looking back towards Hawa Pol, the small Kali temple stands to the left; the court scene around it is reconstructed.', '1970s': 'Looking back towards Hawa Pol, the small Kali temple stands to the left of the square.', today: 'Most visits start here, at the top of the ramp, among shops and guides.' } },
  { id: 'rajmahal', title: 'Raj Mahal, the royal palace', text: 'The Maharawals\' palaces lie around two sides of the royal square. ICOMOS dates them originally to the 13th-14th centuries, extended until the 20th century with carving similar to that of the earlier buildings.', source: 'https://whc.unesco.org/document/153036',
    eraNote: { '1650': 'This was the seat of the Bhati court; later wings such as the Gaj Vilas (about 1875-1900) did not yet exist.', '1970s': 'MacDougall photographed the Gaj Vilas, a palace wing of about 1875-1900.', today: 'Water seepage into the hill has damaged the palace group, and the Queen\'s Palace (Rani ka Mahal) has partly collapsed.' } },
  { id: 'museum', title: 'Fort Palace Museum', text: 'Tourism sources describe the seven-storeyed Raj Mahal at Dussehra Chowk, now a museum and heritage centre. Inside are the Rang Mahal with its mirror and painted work, the Juna Mahal with its jali screens and the Sarvottam Vilas with its blue tiles and mosaic.', source: 'https://partner-reporting.yatra.com/travelguide/jaisalmer-guide.shtml',
    eraNote: { '1650': 'In 1650 these were rooms of the ruling court; their use as a museum is modern.', today: 'The palace tour starts just to the right, up the stairs, as you enter the square.' } },
  { id: 'laxminath', title: 'Laxminath temple', text: 'The ASI records that Maharawal Bairi Singh built this temple to Vishnu and Lakshmi in 1437. It faces west from a raised platform reached by staircases, with a multi-turreted curvilinear spire and a cloistered verandah.', source: 'https://ignca.gov.in/asi_reports/rjjsl_012.pdf' },
  { id: 'parshvanath', title: 'Parshvanath temple', text: 'Built about 1416 by Jai Singh Oswal with the sculptor Dhanna, it is entered through a richly carved north-facing torana gateway. A cloistered hall leads to the shrine under its shikhara.', source: 'https://dcp-production-container.library.cornell.edu/catalog/ss:3862504',
    eraNote: { '1970s': 'MacDougall photographed the columns, hall and spire of this temple, catalogued as the Navtoraniya.' } },
  { id: 'sambhavnath', title: 'Sambhavnath temple and the Gyan Bhandar', text: 'This east-facing temple carries an inscription dated 1440 and houses over 600 images. Its Gyan Bhandar library keeps about 1,000 palm-leaf manuscripts with painted wooden covers, some of them from the 12th century.', source: 'https://en.wikipedia.org/wiki/Jaisalmer_Fort_Jain_temples' },
  { id: 'chandraprabhu', title: 'Chandraprabhu temple', text: 'A double-storeyed, multi-shrine Jain temple completed in 1509 and dedicated to the eighth tirthankara. It faces north and is usually the first of the Jain temples that visitors enter.', source: 'https://en.wikipedia.org/wiki/Jaisalmer_Fort_Jain_temples',
    eraNote: { '1970s': 'MacDougall photographed a Jain temple front in this cluster with the palace\'s Moti Mahal rising behind it.', today: 'The Jain temples are open to visitors from 8 am to noon.' } },
  { id: 'bastions', title: 'Bastioned ramparts · count disputed', text: 'The 2013 UNESCO nomination describes 99 bastions, while an ASI monument account and the 2001 World Monuments Fund field mission report 89. The Government’s 2024 state-of-conservation submission says a photogrammetric survey of the fort and buffer zone is complete, but the survey plan/data needed to reconcile the count and trace individual bastions is not attached to the public report located for this pass. This scene’s repeated bastion layout is therefore schematic and unverified.', source: 'https://whc.unesco.org/document/218301',
    eraNote: { '1650': 'The scene uses a schematic count; neither the number nor the location and date of each bastion is verified for this year.', today: 'The 2001 field count conflicts with the 2013 nomination. Surveyed bastion positions and the latest condition imagery are still needed.' } },
  { id: 'moorcha', title: 'Pitching wall and moorcha', text: 'A sloping dry-stone revetment, about 4.6 m high, forms the lowest of the fort\'s three rings of walls. Between the outer and inner walls runs a walkway, from which defenders could hurl boiling oil, water and stones on attackers trapped between the walls.', source: 'https://whc.unesco.org/document/153036',
    eraNote: { today: 'Stretches of the outer walls collapsed in the 1999 monsoon; the ASI, World Monuments Fund and National Culture Fund later stabilised the walls, bastions and slopes.' } },
  { id: 'ghutnali', title: 'Ghut nali rainwater system', text: 'The UNESCO-hosted Site Management Plan describes three original ghutnallis, with the entrance road serving as a fourth outlet; only the northern drain was reported extant at the time of the plan. Their exact lines are not traced in this scene.', source: 'https://whc.unesco.org/document/179952',
    eraNote: { '1650': 'The number of wells in 1650 is not established. The management plan describes seven historic wells and attributes Ranisar well to a later period.', '1970s': 'Houses built into the fort wall, as in MacDougall\'s photographs, show the inner defences turned into homes.', today: 'New sewer and water mains, about 1.9 km and 1.8 km long, now run under the lanes in four service zones.' } },
  { id: 'well-jaisaloo', title: 'Jaisaloo well · location approximate', text: 'One of the seven wells listed in the UNESCO-hosted Site Management Plan. The marker is an approximate zone and has not been plotted from the plan.', source: 'https://whc.unesco.org/document/179952' },
  { id: 'well-ranisar', title: 'Ranisar well · location approximate', text: 'The Site Management Plan places this well about ten feet from Harjaloo and attributes it to the mid-19th century; the attribution and absolute site position need verification. It is distinct from the Ranisar reservoir outside the fort.', source: 'https://whc.unesco.org/document/179952' },
  { id: 'well-bulla', title: 'Bulla well · location approximate', text: 'Named in the Site Management Plan among seven historic fort wells; position is inferred pending plan tracing.', source: 'https://whc.unesco.org/document/179952' },
  { id: 'well-harjaloo', title: 'Harjaloo well · location approximate', text: 'The Site Management Plan places Harjaloo near a Shiv temple and about ten feet from Ranisar; absolute locations remain inferred pending plan registration.', source: 'https://whc.unesco.org/document/179952' },
  { id: 'well-khuniwala', title: 'Khuniwala well · location approximate', text: 'Named in the Site Management Plan among seven historic fort wells; position is inferred pending plan tracing.', source: 'https://whc.unesco.org/document/179952' },
  { id: 'well-ramdeora', title: 'Ramdeora well · location approximate', text: 'The Site Management Plan places this well a few yards from Khuniwala; their absolute positions remain inferred pending plan registration.', source: 'https://whc.unesco.org/document/179952' },
  { id: 'well-gosisar', title: 'Gosisar well · location approximate', text: 'Named in the Site Management Plan among seven historic fort wells; position is inferred pending plan tracing.', source: 'https://whc.unesco.org/document/179952' },
];

const BOUNDS = [-153, -264, 218, 266];

export default {
  id: 'jaisalmer-hand', name: 'Jaisalmer (hand level, kept for T2)', native: { text: 'सोनार क़िला', lang: 'hi', script: 'deva' },
  region: 'Jaisalmer · Rajasthan', type: 'Living hill fort', coords: [26.9127, 70.9126],
  poiCount: POIS.length, pois: POIS.map(p => ({...p})), groundName: 'Trikuta hill', datum: 0, datumLabel: 'above the plain',
  units: { planScale: 1, vScale: 2.5 },
  bounds: BOUNDS, stride: 2, seed: 10,
  water: null,
  apron: { h: 0, color: '#d3b886' },
  view: { az: -52, el: 40, zoom: 74, introAt: [10, 0], introZoom: 560 },
  light: { sky: '#e4dccb', sunAz: -24, sunEl: 47, hemiGround: '#b59a68' },
  palette: {
    wall: '#c8964f', wallTop: '#d6a964', trim: '#dcb878', stone: '#c0904c', plaster: '#d9b373', plasterDark: '#bb8c4c',
    roof: '#b98848', dome: '#dcb77c', wood: '#5f3f24', door: '#5a3a22', window: '#3b2a1c', iron: '#3a312a',
    grass: '#cdb27c', dry: '#d6bb88', rock: '#ad8250', cliff: '#8f6a3d', sand: '#d9bf8c', road: '#cda86c', court: '#dcc08a',
    paved: '#d2b47c', field: '#b9a466', mud: '#9a7a4e', garden: '#8c9160', leaf: '#7f8a55', leafDry: '#a39a62', trunk: '#6b5038',
    flag: '#dd6a22', accent: '#d9a441', tile: '#2f5d8a', tileYellow: '#d6b23a', tileGreen: '#4f8c4a', water: '#5c8a86', tank: '#5d7d6a',
  },
  eraPalette: {
    '1650': { plaster: '#dfba79', wall: '#cc9a53', stone: '#c49450', road: '#d0ab70' },
    '1970s': { plaster: '#cfa96c', plasterDark: '#b08449', wall: '#c08e4d', stone: '#b98a4a' },
    today: { plaster: '#d8b172', wall: '#c9974f' },
  },
  eras: [
    { id: '1650', year: '1650', label: 'Bhati court', short: 'Bastioned citadel', lens: 'engraving',
      summary: 'The Bhati capital in the mid-seventeenth century: the court in the Raj Mahal, guards at every gate, and camel caravans climbing from the town.',
      basis: 'The Government-submitted Jaisalmer Site Management Plan records the 1155 foundation, completion before 1244, fortification construction in the 13th–14th centuries, a 15th-century Jain temple and merchant-settlement phase, and Mughal-period later architecture. It describes Akhey Prole as a mid-17th-century structure; the ASI inventory attributes it to Akshai Singh (1722–1762), so this gate’s phase is disputed. UNESCO describes Jaisalmer as an inhabited township within the fort from its outset. The UNESCO nomination claims 99 bastions, but ASI/WMF field documentation reports 89; this scene does not resolve the conflict.',
      conjecture: 'The outline, ramp layout, density of houses, people, guns and repeated bastion placements are reconstructed. The rendered bastion count is not a verified historical count; the detailed photogrammetric survey plan is required before this scene can be registered. The Akhai Pol is included in this 1650 view on the strength of the Government site-management plan, while its later ASI attribution remains unresolved. 19th-century palace wings are left out.',
      sources: ['JAI-12', 'JAI-20', 'JAI-21', 'JAI-22', 'JAI-23', 'JAI-24', 'JAI-02'] },
    { id: '1970s', year: 'c. 1970s', label: 'MacDougall\'s photographs', short: 'Crowded lived-in fort', lens: 'albumen',
      summary: 'The fort as Robert MacDougall photographed it between about 1960 and 1987: a crowded town on a hill, its lanes busy with households, cattle and carts.',
      basis: 'Robert D. MacDougall\'s photographs in Cornell\'s "Beyond the Taj" collection: the street at Akhai Pol, a view through a gate with bullock carts, houses built into the fort wall, the Jain temples and the Gaj Vilas.',
      conjecture: 'The photographs show only parts of the fort; the rest of the layout and the numbers of people and animals are inferred.',
      sources: ['JAI-04', 'JAI-05', 'JAI-06', 'JAI-07', 'JAI-08', 'JAI-09', 'JAI-10', 'JAI-21'] },
    { id: 'today', year: 'Today', label: 'Living fort', short: 'World Heritage site', lens: 'none',
      summary: 'A World Heritage site that is still a neighbourhood: thousands of residents, shops and guesthouses on the bastions, and a steady climb of visitors up the ramp.',
      basis: 'UNESCO state of conservation reports (2016, 2019), the WMF and ASI assessments of the walls, bastions and slopes, a 1990 general view and the roof-level plan of the inhabited citadel.',
      conjecture: 'Building positions inside the walls are schematic; the guesthouses on the bastions and the collapsed stretch of outer wall stand for conditions described in the reports, not for surveyed locations.',
      sources: ['JAI-11', 'JAI-13', 'JAI-14', 'JAI-15', 'JAI-17', 'JAI-21', 'JAI-22', 'JAI-23', 'JAI-01'] },
  ],
  terrain: (era) => [
    { op: 'base', h: 0 },
    { op: 'noise', amp: 0.9, scale: 48 },
    { op: 'fn', fn: hillFn },                                                  // Trikuta hill, the ledge inside ring 1, the plateau
    { op: 'hill', x: 66, y: 30, r: 82, h: 1.6, base: PLATEAU, top: 0.3 },       // gentle rise to the palace
    { op: 'flatten', poly: box(33, 88, 0.5, 47), h: DCH, edge: 5 },                 // Dussehra Chowk
    { op: 'flatten', poly: box(-18, 23, 3, 31), h: 28.6, edge: 4 },                 // Laxminath temple compound
    { op: 'flatten', poly: box(-80, -4, -108, -33), h: 28.2, edge: 4 },             // Jain temple cluster
    // the ramp
    { op: 'flatten', poly: FORE, h: GOPA, edge: 1.2 },
    { op: 'ramp', path: LOW, w: 7, edge: 1.5 },
    { op: 'flatten', poly: LANDING, h: LAND, edge: 1.2 },
    { op: 'ramp', path: UP1W, w: 13.2, edge: 1.2 },
    { op: 'ramp', path: UP2, w: 6.6, edge: 1.2 },
    // Gopa Chowk and the road down into the town
    { op: 'flatten', poly: box(132.6, 178, -112, -30), h: GOPA, edge: 9 },
    { op: 'ramp', path: [[150, -70.4, GOPA], [178, -70.4, GOPA], [218, -70.4, 2.2]], w: 9, edge: 7 },
    { op: 'edge', h: 0, w: 12 },
    // paint
    { op: 'paint', poly: PAVE, paint: 'paved' },
    { op: 'paint', poly: box(33, 88, 0.5, 46), paint: 'court' },
    { op: 'paint', poly: FORE, paint: 'court' },
    { op: 'paint', poly: LANDING, paint: 'road' },
    { op: 'paint', path: flat(LOW), w: 6.6, paint: 'road' },
    { op: 'paint', path: flat(UP1), w: 6.2, paint: 'road' },
    { op: 'paint', path: flat(UP2), w: 6.2, paint: 'road' },
    { op: 'paint', poly: box(132.6, 168, -96, -46), paint: 'court' },
    { op: 'paint', path: [[132, -70.4], [218, -70.4]], w: 8, paint: 'road' },
  ],
  build(W) {
    const era = W.era, old = era === '1650', mid = era === '1970s', now = era === 'today';
    const rnd = (() => { let s = 1234567; return () => { s = (s * 1103515245 + 12345) & 0x7fffffff; return s / 0x7fffffff; }; })();

    // ================================================================ walls
    // ring 2: the bastioned curtain. Its walk is level with the moorcha lane inside, so the ramparts are walkable.
    const curtain = W.wall({ path: CURP, closed: false, outer: 'right', h: 0.2, thick: 3, batter: 0.07, parapet: { h: 1.4, t: 0.6 }, merlon: { style: 'kangura', w: 0.8, gap: 0.55, h: 0.85 }, color: 'wall' });
    // 99 round bastions, closely set (~11 m apart); none in front of the road's entry or Ganesh Pol
    const Lc = polylineLength(CURP);
    const sG = distToPolyline(XC(GY), GY, CURP).s;
    const bS = [(6.2 + sG - 6.8) / 2];
    for (let i = 0; i < 98; i++) bS.push(lerp(sG + 6.9, Lc - 6.2, i / 97));
    const gunsOld = new Set([6, 14, 22, 30, 38, 46, 54, 62, 70, 78, 86, 93]);
    const gunsMid = new Set([30, 70, 86]);
    const gunsNow = new Set([86, 89]);
    const flagOld = new Set([12, 36, 60, 84]);
    const bastions = [];
    bS.forEach((s, i) => {
      const p = pointAt(CURP, s);
      const r = 4.0 + 0.45 * Math.sin(i * 1.7) * Math.sin(i * 0.37);
      const gun = (old && gunsOld.has(i)) || (mid && gunsMid.has(i)) || (now && gunsNow.has(i));
      bastions.push(W.bastion({ at: [p.x, p.y], r, wall: curtain, off: 3.0, dh: 0.35, merlon: { style: 'kangura', w: 0.8, gap: 0.55, h: 0.85 },
        cannon: gun ? { len: 3.0, r: 0.3, carriage: !mid } : false, flag: old && flagOld.has(i) ? { pole: 6, color: '#d9541e' } : false }));
    });
    const bastionTop = (b) => W.wallTopAt(curtain, b.x, b.y) + 0.35;
    const b12 = bastions.reduce((best, b) => (b.x > 60 && Math.abs(b.y + 34) < Math.abs(best.y + 34) ? b : best), bastions[0]); // "Canon Point" side

    // ring 1: outer lower wall (pitching round N/W/S, parapet of the lower road on the east)
    let r1paths = [R1];
    if (now) { // a collapsed stretch of the outer pitching wall on the west (the 1999 monsoon collapses)
      const sx = arcS(R1, XW(-40) - 9.6, -40, false);
      const L1 = polylineLength(R1);
      r1paths = [subPath(R1, 0, sx - 7, 3, false), subPath(R1, sx + 7, L1, 3, false)];
    }
    for (const path of r1paths) W.wall({ path, closed: false, outer: 'right', h: 0.25, thick: 2.2, batter: 0.22, parapet: { h: 1.25, t: 0.5 }, merlon: false, walk: false, color: 'stone', maxSeg: 4 });
    // corner towers where ring 1 meets the forecourt and turns round the hairpin
    W.bastion({ at: [113.6, -89.4], r: 3.3, top: LEDGE + 1.1, color: 'stone', merlon: { style: 'kangura' } });
    W.bastion({ at: [XC(170) + 23.4, 170.5], r: 3.2, top: LAND + 1.6, color: 'stone', merlon: { style: 'kangura' } });

    // retaining wall between the two legs of the ramp, and behind the forecourt
    W.wall({ path: RWP, closed: false, outer: 'right', top: rwTop, thick: 2.2, batter: 0.06, parapet: { h: 1.2, t: 0.5 }, merlon: { style: 'kangura', w: 0.7, gap: 0.5, h: 0.7 }, walk: false, color: 'wall' });
    // parapet on the south edge of the upper road where it turns west through the curtain line
    W.wall({ path: [[XC(71) + 17.4, 71.2], [XC(71) + 0.6, 71.2]], closed: false, outer: 'left', top: 27.4, thick: 2.0, batter: 0.06, parapet: { h: 1.2, t: 0.5 }, merlon: { style: 'kangura', w: 0.7, gap: 0.5, h: 0.7 }, walk: false, color: 'wall' });

    // ring 3: the inner wall, the original defence line, now built into the houses
    for (const path of R3SEGS) W.wall({ path, closed: false, outer: 'right', h: 5.8, thick: 2.0, batter: 0.04, parapet: { h: 0.9, t: 0.45 }, merlon: false, walk: false, color: 'wall', maxSeg: 4 });

    // ================================================================ gates
    // Akhai Pol: gatehouse front of the forecourt, facing east over Gopa Chowk
    const akW = W.wall({ path: [[AKX, -88.9], [AKX, -52.5]], closed: false, outer: 'right', top: GOPA + 10.6, thick: 3.2, batter: 0.05, parapet: { h: 1.3, t: 0.6 }, merlon: { style: 'kangura', w: 0.8, gap: 0.55, h: 0.85 }, walk: false, color: 'wall' });
    W.gate({ wall: akW, at: [AKX, AKY], width: 4.8, spring: 5.2, rise: 2.7, style: 'pointed', towers: { r: 3.7, dh: 1.5, off: 1.6, gap: 0.12 }, name: 'Akhai Pol', panel: 'plaster', trim: 'plaster', floor: GOPA });
    // The Site Management Plan documents a single-storey jharokha structure over
    // the wooden doorway. Its measured plan is not available here, so retain a
    // clearly named, schematic infill mass instead of the previous open pavilion.
    W.building({ rect: [AKX, AKY, 11.5, 5.6, 90], base: GOPA + 10.75, storeys: 1, storeyH: 3.0, color: 'wall', roof: 'flat', windows: false,
      jharokhas: { every: 4.2, size: 1.5, rows: [0] }, kind: 'gate', name: 'Akhai Pol · single-storey jharokha gallery, schematic dimensions' });
    // Suraj Pol: across the road at the top of the forecourt, facing south
    const spW = W.wall({ path: [[XC(SPY) + 16.0, SPY], [XC(SPY) + 27.4, SPY]], closed: false, outer: 'right', top: 8.3 + 9.4, thick: 3.0, batter: 0.04, parapet: { h: 1.2, t: 0.6 }, merlon: { style: 'kangura', w: 0.8, gap: 0.55, h: 0.85 }, walk: false, color: 'wall' });
    W.gate({ wall: spW, at: [XC(SPY) + 21.5, SPY], width: 4.6, spring: 4.8, rise: 2.6, style: 'pointed', towers: false, name: 'Suraj Pol', panel: '#e9dcc0', frameUp: 2.2, floor: 8.3 });
    // Ganesh Pol: across the upper road after the hairpin, facing north
    const gpW = W.wall({ path: [[XC(GY) + 1.0, GY], [XC(GY) + 17.6, GY]], closed: false, outer: 'left', top: 26.2 + 7.9, thick: 2.8, batter: 0.04, parapet: { h: 1.2, t: 0.6 }, merlon: { style: 'kangura', w: 0.8, gap: 0.55, h: 0.85 }, walk: false, color: 'wall' });
    W.gate({ wall: gpW, at: [XC(GY) + 12.5, GY], width: 4.3, spring: 4.5, rise: 2.4, style: 'pointed', towers: false, name: 'Ganesh Pol', upper: 'pavilion', floor: 26.2 });
    // Hawa Pol: north front of the palace on the walled lane, facing north
    const hpW = W.wall({ path: [[73.8, HPY], [XC(HPY) - 0.2, HPY]], closed: false, outer: 'left', top: 28.85 + 8.8, thick: 2.4, batter: 0.03, parapet: { h: 1.2, t: 0.5 }, merlon: { style: 'kangura', w: 0.8, gap: 0.55, h: 0.85 }, walk: false, color: 'plaster' });
    W.gate({ wall: hpW, at: [HPX, HPY], width: 4.4, spring: 4.6, rise: 2.4, style: 'pointed', towers: false, name: 'Hawa Pol', floor: 28.85, frameW: 0.6 });
    // walls closing the lane between the curtain line and Hawa Pol
    W.wall({ path: [[73.8, 79.6], [XC(79.6) - 0.4, 79.6]], closed: false, outer: 'right', h: 5.4, thick: 2.0, batter: 0.03, parapet: { h: 0.9, t: 0.45 }, merlon: { style: 'kangura', w: 0.6, gap: 0.5, h: 0.6 }, walk: false, color: 'wall' });
    W.wall({ path: [[73.8, 69.4], [73.8, 80.6]], closed: false, outer: 'right', h: 5.4, thick: 2.0, batter: 0.03, parapet: { h: 0.9, t: 0.45 }, merlon: { style: 'kangura', w: 0.6, gap: 0.5, h: 0.6 }, walk: false, color: 'wall' });
    if (old) for (const [x, y, h] of [[AKX + 1.2, -77.5, GOPA + 12], [AKX + 1.2, -63.3, GOPA + 12]]) W.flag({ x, y, h, pole: 5, color: '#d9541e', size: 1.3 });

    // ================================================================ palace (Raj Mahal) on two sides of Dussehra Chowk
    const pal = 'plaster';
    // north wing, facing south onto the square
    const nw = W.building({ rect: [50.3, 57.8, 56.6, 22.8, 0], storeys: 4, storeyH: 3.8, color: pal, roof: 'flat', merlon: 'kangura', windows: { style: 'arch', spacing: 2.4, w: 1.0, h: 1.8 },
      jharokhas: { every: 6.5, size: 2.0, rows: [1, 2, 3], skip: [1, 2] }, chhatris: [[24.5, 49.5], [76, 49.5], [24.5, 66], [76, 66]], chhatriSize: 2.6, chhatriH: 2.4, kind: 'palace' });
    W.building({ rect: [53, 59, 22, 13, 0], base: nw.top - 0.1, h: 4.6, color: pal, roof: 'flat', merlon: 'kangura', windows: { style: 'jali', spacing: 2.2, w: 1.0, h: 1.6 }, chhatris: 'corners', chhatriSize: 2.2, chhatriH: 2.2, chhatriDome: 'bangaldar', kind: 'palace' });
    // east wing over the ramp: rises sheer above the curtain and its bastions
    const eastPoly = [[88, -16], [XC(-16) + 1.4, -16]];
    for (let y = -6; y < 69; y += 10) eastPoly.push([XC(y) + 1.4, y]);
    eastPoly.push([XC(69.2) + 1.4, 69.2], [83.4, 69.2], [83.4, 46], [88, 46]);
    const eb = W.building({ poly: eastPoly, storeys: 5, storeyH: 3.8, color: pal, roof: 'flat', merlon: 'kangura', windows: { style: 'arch', spacing: 2.3, w: 0.9, h: 1.7 },
      jharokhas: { every: 7, size: 1.9, rows: [2, 3, 4] }, chhatris: [[95, -11], [95, 30], [94, 62]], chhatriSize: 2.6, chhatriH: 2.4, kind: 'palace' });
    for (const [x, y, w, d, h] of [[95.5, 52, 10, 12, 4.4], [95.5, 4, 9, 14, 3.8]]) W.building({ rect: [x, y, w, d, 0], base: eb.top - 0.1, h, color: pal, roof: 'flat', merlon: 'kangura', windows: { style: 'jali', spacing: 2.0, w: 0.9, h: 1.4 }, chhatris: 'corners', chhatriSize: 2.0, chhatriH: 2.0, chhatriDome: 'bangaldar', kind: 'palace' });
    W.pavilion({ x: 95.5, y: 28, w: 9, d: 7, base: eb.top - 0.1, plinth: 0.01, colH: 2.8, cols: [4, 3], roof: 'bangaldar', color: pal, walk: false, stairs: false, kind: 'palace' });
    // block over the Hawa Pol passage
    W.building({ rect: [81, 57.6, 4.9, 23.2, 0], base: DCH + 6.6, h: 8.6, color: pal, roof: 'flat', merlon: 'kangura', windows: { style: 'jali', spacing: 2.2, w: 1.0, h: 1.4 }, cornice: true, kind: 'palace' });
    // the flag on the highest roof
    W.flag({ x: 95, y: 18, h: eb.top, pole: 7, color: '#d9541e', size: 1.8 });
    // later wing behind the north range (19th century: absent in 1650)
    if (!old) W.building({ rect: [36, 77.6, 26, 13, 0], storeys: 4, storeyH: 3.6, color: 'plaster', roof: 'flat', merlon: 'kangura', windows: { style: 'arch', spacing: 2.2, w: 0.9, h: 1.6 }, jharokhas: { every: 5, size: 1.6, rows: [1, 2, 3], skip: [1, 3] }, chhatris: [[25.5, 73], [46.5, 73]], chhatriSize: 2.0, chhatriH: 2.0, kind: 'palace' });
    // palace entrance terrace and stairs ("just to the right up the stairs as you enter the square")
    const terraceH = W.platform({ poly: box(56, 74, 42, 46.1), h: DCH + 1.8, color: 'stone' });
    W.stairs({ from: [65, 36.4, DCH], to: [65, 42.3, terraceH], w: 4.6, color: 'stone', side: true });
    // Kali (Chamunda) shrine at the north-west corner of the square
    templeOn(W, { x: 41, y: 37.5, rot: 90, w: 3.4, h: 5.6, mandapa: { d: 3.0, w: 3.6, h: 2.5, roof: 'pyramid' }, style: 'nagara', color: 'stone', flag: true }, 0.5);

    // ================================================================ Laxminath temple: west-facing, on a raised platform
    const lxTop = W.platform({ poly: box(-4, 22.5, 4.5, 29.5), h: 28.6 + 1.5, color: 'stone' });
    W.stairs({ from: [-9.6, 17, 28.6], to: [-3.7, 17, lxTop], w: 5.2, color: 'stone', side: true });
    W.temple({ x: 11.4, y: 17, rot: -90, w: 6.6, h: 12.5, plinth: 0.05, base: lxTop, stairs: false, style: 'nagara', mandapa: { d: 7, w: 8, h: 3.6, roof: 'domes', domeShape: 'half' }, color: 'stone', flag: true });
    for (const [x, y, w, d] of [[9.2, 27.3, 24.6, 3.6], [9.2, 6.7, 24.6, 3.6], [20.6, 17, 3.4, 16.8]]) W.pavilion({ x, y, w, d, base: lxTop, plinth: 0.01, colH: 3.0, cols: w > d ? [9, 2] : [2, 6], roof: 'flat', color: 'stone', walk: false, stairs: false, kind: 'temple' });

    // ================================================================ Jain temple cluster (south-west of the square)
    let reserveJain = [];
    const jain = (o, pl = 0.55) => templeOn(W, Object.assign({ style: 'jain', color: 'stone', flag: true }, o), pl);
    jain({ x: -16, y: -49.5, rot: 180, w: 7.6, h: 13.5, mandapa: { d: 8, w: 9.6, h: 6.4, roof: 'stepped' } });            // Chandraprabhu (faces N, double-storeyed)
    jain({ x: -37, y: -50.5, rot: 180, w: 7.0, h: 12.5, mandapa: { d: 7.4, w: 8.6, h: 4.3, roof: 'stepped' } });          // Parshvanath (faces N)
    jain({ x: -58.5, y: -50.5, rot: 180, w: 6.2, h: 10.8, mandapa: { d: 6.4, w: 7.2, h: 3.8, roof: 'stepped' } });       // Rishabhdev (faces N)
    jain({ x: -40, y: -84, rot: 180, w: 6.0, h: 10.2, mandapa: { d: 6.0, w: 7.0, h: 3.6, roof: 'stepped' } });            // Shantinath (faces N)
    jain({ x: -19, y: -86, rot: 90, w: 7.0, h: 12.0, mandapa: { d: 7.6, w: 8.4, h: 4.0, roof: 'stepped' } });            // Sambhavnath (faces E)
    jain({ x: -62, y: -86, rot: -90, w: 6.0, h: 10.4, mandapa: { d: 6.0, w: 7.0, h: 3.6, roof: 'stepped' } });           // Ashtapad (faces W)
    reserveJain = [[-22.8, -9.2, -59.1, -39.3], [-43.3, -30.7, -58.5, -40.0], [-64.1, -52.9, -57.7, -41.9], [-45.5, -34.5, -92, -72], [-28, -7.8, -92.2, -79.8], [-81, -54, -91.5, -80.5],
      [-81, -7.8, -77.2, -72.2], [-31.2, -26.6, -77.2, -59.6], [-52.8, -48.4, -77.2, -58], [-81, -76.6, -106, -39]];
    // Parshvanath's carved torana gateway on the north front
    W.pavilion({ x: -37, y: -40.8, w: 5.4, d: 0.9, plinth: 0.01, colH: 4.6, cols: [2, 1], roof: 'flat', color: 'stone', walk: false, stairs: false, kind: 'temple' });

    // ================================================================ havelis, small shrines, squares and wells (before the houses)
    const RES = []; // footprints (x0, x1, y0, y1) kept clear of the house packing
    const reserve = (x0, x1, y0, y1, m = 1.4) => RES.push([x0 - m, x1 + m, y0 - m, y1 + m]);
    reserve(23, 49, 71.1, 84.1, 0.6); // later palace wing behind the north range
    const haveli = (x, y, w, d, rot = 0, st = 3) => { reserve(x - w / 2, x + w / 2, y - d / 2, y + d / 2); W.building({ rect: [x, y, w, d, rot], storeys: st, storeyH: 3.4, color: 'plaster', roof: 'flat', windows: { style: 'jali', spacing: 2.0, w: 0.9, h: 1.3 }, jharokhas: { every: 4.2, size: 1.5, rows: [1, 2] }, chhatris: rnd() < 0.4 ? 'corners' : null, chhatriSize: 1.5, chhatriH: 1.6, kind: 'house' }); };
    haveli(-26, 44.2, 14, 10); haveli(17, 110, 10, 15); haveli(-21, 140.5, 13, 10); haveli(22, -28.4, 14, 10); haveli(31, -116.2, 14, 10); haveli(43, -8.2, 13, 13); haveli(-64, 95.5, 14, 9.5); haveli(74, -32.5, 13, 9.5);
    const smallTemple = (x, y, rot = 90) => { reserve(x - 6, x + 6, y - 4.5, y + 4.5); templeOn(W, { x, y, rot, w: 3.6, h: 6.2, mandapa: { d: 3.2, w: 4, h: 2.6, roof: 'pyramid' }, style: 'nagara', color: 'stone', flag: rnd() < 0.6 }, 0.45); };
    smallTemple(-14, 111); smallTemple(12, -86); smallTemple(-72, -130); smallTemple(68, 150);
    // small squares (paved, kept clear of houses), with wells
    const square = (x0, x1, y0, y1) => { reserve(x0, x1, y0, y1, 0.8); return W.platform({ poly: box(x0, x1, y0, y1), h: Math.min(W.ground(x0, y0), W.ground(x1, y1), W.ground(x0, y1), W.ground(x1, y0)) + 0.12, color: 'paved' }); };
    square(-12, 1, -160, -144); square(2, 14, 124, 140); square(48, 62, -116, -100);
    const wells = [['Jaisaloo',-5.5,132],['Ranisar',-2.45,-152],['Bulla',55,-108],['Harjaloo',-5.5,-152],['Khuniwala',36,-42],['Ramdeora',39,-42],['Gosisar',74,42]];
    for(const [name,x,y] of wells){if(old&&name==='Ranisar') continue;W.well({x,y,r:1.3,frame:old});W.zone(regularPoly(x,y,2.8,12),`${name} well · approximate location`);}

    // ================================================================ houses: the dense maze of the living fort
    PLOTS.forEach((poly, i) => fillBlock(W, poly, 300 + i * 17, era, RES));
    fillBlock(W, box(-80.6, -8.2, -105.4, -40.4), 911, era, RES.concat(reserveJain.map(([x0, x1, y0, y1]) => [x0 - 0.6, x1 + 0.6, y0 - 0.6, y1 + 0.6])));
    // houses and guesthouses built onto bastions (1970s: a few; today: many, as the UNESCO reports describe)
    const onB = now ? [3, 9, 17, 21, 26, 33, 41, 44, 49, 57, 63, 66, 72, 77, 92, 96] : mid ? [17, 41, 57, 72, 92] : [];
    for (const i of onB) {
      const b = bastions[i]; if (!b || b === b12 || Math.abs(b.y - b12.y) < 14) continue;
      const f = W.wallFrame(curtain, W.wallS(curtain, b.x, b.y));
      W.building({ rect: [b.x + f.ox * 0.7, b.y + f.oy * 0.7, 4.0, 3.6, Math.atan2(f.ty, f.tx) * 180 / Math.PI], base: bastionTop(b) - 0.2, storeys: now && i % 3 ? 2 : 1, storeyH: 3.0, color: i % 2 ? 'plaster' : '#d6ad6c', roof: 'flat', windows: { style: 'rect', spacing: 2, w: 0.7, h: 1.0 }, chhatris: now && i % 4 === 0 ? 'corners' : null, chhatriSize: 1.3, chhatriH: 1.4, kind: 'house' });
    }

    // ================================================================ Gopa Chowk: the town square below the gate
    const shop = (x, y, w, d, st, rot = 0) => W.building({ rect: [x, y, w, d, rot], storeys: st, storeyH: 3.3, color: rnd() < 0.5 ? 'plaster' : 'plasterDark', roof: 'flat', windows: { style: 'rect', spacing: 2.2, w: 0.8, h: 1.2 }, jharokhas: st > 1 ? { every: 4.5, size: 1.5, rows: [1] } : null, kind: 'house' });
    for (const [x, y, w, d, st] of [[141, -46, 9, 8, 2], [151.5, -45, 10, 9, 3], [162, -46.5, 9, 8, 2], [172, -47, 9, 9, 2], [141, -95, 9, 8, 2], [151.5, -96, 10, 9, 2], [162, -95, 9, 8, 3], [172, -94.5, 9, 8, 2],
      [186, -60.5, 10, 8, 2], [198, -61, 10, 9, 2], [186, -80.5, 10, 8, 2], [198, -80, 10, 9, 1], [209, -61.5, 8, 8, 1], [209, -79.5, 8, 8, 1]]) shop(x, y, w, d, st);

    // ================================================================ the old town around the hill (render-only)
    townScenery(W, era);

    // ================================================================ vegetation and rocks
    const talusBand = off(R1, -40);
    W.trees({ poly: talusBand, count: old ? 26 : mid ? 40 : 30, types: { khejri: 4, shrub: 3, acacia: 1 }, s: [0.8, 1.25], minDist: 9, maxSlope: 1.4, seed: 41, avoid: [R1] });
    W.boulders({ poly: talusBand, count: 46, s: [0.7, 2.0], seed: 43, avoid: [R1], pad: 1.0 });
    if (now) W.boulders({ x: XW(-40) - 16, y: -40, r: 9, count: 14, s: [0.6, 1.6], seed: 44 });
    for (const [x, y, t] of [[36.5, 4, 'neem'], [-15, 29, 'neem'], [-15, 5.5, 'round'], [13, 138, 'neem'], [-10.5, -158.5, 'neem'], [60.5, -114.5, 'round'], [-75, -45, 'neem']]) W.tree({ x, y, type: t, s: 0.95 });

    // ================================================================ zones for the HUD
    W.zone(off(R1, -60), 'Trikuta hill');
    W.zone(box(132.6, 218, -112, -28), 'Gopa Chowk');
    W.zone(off(CUR, -1.5), 'Upper fort');
    W.zone(off(CUR, -0.4), 'Moorcha');
    W.zone(off(CUR, 6.6), 'Upper fort');
    W.zone(box(XC(-30) + 17.5, XC(-30) + 26, -52, 152), 'Ramp, lower leg');
    W.zone(box(XC(120) + 9.4, XC(120) + 15.8, 73, 156), 'Ramp, upper leg');
    W.zone(LANDING, 'Hairpin');
    W.zone(FORE, 'Forecourt');
    W.zone(box(33, 88, 0.5, 46), 'Dussehra Chowk');
    W.zone(box(74, 103, 71.5, 78.6), 'Hawa Pol lane');
    W.zone(box(-80, -4, -108, -33), 'Jain temples');
    W.zone(box(-17, 23, 3, 31), 'Laxminath temple');
    W.label(150, -60, 'Gopa Chowk');

    // ================================================================ people
    const walkPts = (y0, y1, west = true, n = 5) => { const pts = []; for (let k = 0; k <= n; k++) { const y = lerp(y0, y1, k / n); const x = (west ? XW(y) : XC(y)) + (west ? 0.6 : -0.6); pts.push([x, y, W.wallTopAt(curtain, x, y)]); } for (let k = n - 1; k > 0; k--) pts.push(pts[k]); return pts; };
    const roadPts = (n = 8) => { const pts = []; for (let k = 0; k <= n; k++) { const y = lerp(-36, 150, k / n); pts.push([XC(y) + 21.5, y, hLow(y)]); } return pts; };
    if (old) {
      for (const [x, y, f] of [[AKX + 3, -74.5, 90], [AKX + 3, -66.3, 90], [XC(SPY) + 18.6, SPY - 3, 0], [XC(SPY) + 24.4, SPY - 3, 0], [XC(GY) + 10, GY + 3, 180], [XC(GY) + 15, GY + 3, 180], [HPX - 2, 74, 180], [HPX + 2, 74, 180]]) W.npc({ kind: 'guard-rajput', at: [x, y], face: f, mode: 'idle' });
      W.npc({ kind: 'guard-rajput', patrol: walkPts(-60, 120, true), count: 2 });
      W.npc({ kind: 'guard-rajput', patrol: walkPts(-150, -30, false), count: 2 });
      W.npc({ kind: 'guard-rajput', patrol: walkPts(100, 170, false, 3), count: 1 });
      W.npc({ kind: 'courtier', circle: [62, 26, 14], count: 4 });
      W.npc({ kind: 'courtier', at: [64, 44], h: terraceH, face: 0, mode: 'idle' });
      W.npc({ kind: 'elephant-royal', at: [52, 14], face: 90, mode: 'idle' });
      W.npc({ kind: 'horse', circle: [70, 10, 8], count: 2 });
      W.npc({ kind: 'merchant', circle: [152, -70, 12], count: 4 });
      W.npc({ kind: 'camel', circle: [158, -72, 12], count: 4 });
      W.npc({ kind: 'camel', patrol: roadPts(), count: 2, speed: 0.8 });
      W.npc({ kind: 'merchant', patrol: roadPts(), count: 1 });
      W.npc({ kind: 'priest', circle: [-30, -40, 8], count: 2 }); W.npc({ kind: 'priest', at: [-12, 17], face: 270, mode: 'idle' });
      for (const z of [PLOTS[1], PLOTS[8], PLOTS[24], PLOTS[30]]) if (z) { W.npc({ kind: 'villager', zone: z, count: 1 }); W.npc({ kind: 'woman-red', zone: z, count: 1 }); }
      W.npc({ kind: 'woman-green', circle: [8, 132, 10], count: 2 });
      W.npc({ kind: 'woman-indigo', circle: [-5.5, -152, 8], count: 2 });
    } else if (mid) {
      W.npc({ kind: 'villager', circle: [152, -70, 14], count: 3 }); W.npc({ kind: 'cow', circle: [156, -66, 10], count: 2 });
      W.npc({ kind: 'camel', circle: [165, -76, 8], count: 2 });
      W.npc({ kind: 'cow', patrol: roadPts(6), count: 1, speed: 0.6 });
      W.npc({ kind: 'villager', patrol: roadPts(6), count: 2 });
      W.npc({ kind: 'merchant', circle: [60, 22, 14], count: 3 }); W.npc({ kind: 'cow', circle: [55, 20, 14], count: 2 });
      W.npc({ kind: 'tourist-c', at: [AKX + 12, -72], face: 270, mode: 'idle' });
      W.npc({ kind: 'priest', circle: [-30, -40, 8], count: 2 });
      W.npc({ kind: 'student', circle: [8, 100, 14], count: 3 });
      W.npc({ kind: 'goat', circle: [-5.5, -150, 10], count: 3 });
      for (const z of [PLOTS[1], PLOTS[8], PLOTS[12], PLOTS[24], PLOTS[30], PLOTS[34]]) if (z) { W.npc({ kind: 'woman-red', zone: z, count: 1 }); W.npc({ kind: 'villager', zone: z, count: 1 }); }
      W.npc({ kind: 'woman-green', circle: [8, 132, 10], count: 2 }); W.npc({ kind: 'woman-indigo', circle: [55, -108, 10], count: 2 });
    } else {
      W.npc({ kind: 'tourist-a', circle: [152, -70, 14], count: 3 }); W.npc({ kind: 'camel', circle: [166, -78, 7], count: 3 });
      W.npc({ kind: 'merchant', circle: [146, -88, 6], count: 2 });
      W.npc({ kind: 'tourist-b', patrol: roadPts(8), count: 3 }); W.npc({ kind: 'tourist-d', patrol: roadPts(6), count: 2 });
      W.npc({ kind: 'merchant', at: [XC(10) + 19.6, 10], face: 90, mode: 'idle' }); W.npc({ kind: 'merchant', at: [XC(60) + 19.6, 60], face: 90, mode: 'idle' });
      W.npc({ kind: 'tourist-c', circle: [60, 22, 16], count: 4 }); W.npc({ kind: 'tourist-a', circle: [64, 18, 16], count: 3 }); W.npc({ kind: 'merchant', circle: [50, 30, 10], count: 3 });
      W.npc({ kind: 'tourist-d', circle: [-30, -40, 10], count: 3 }); W.npc({ kind: 'asi-guard', at: [-16, -37.5], face: 0, mode: 'idle' });
      W.npc({ kind: 'student', circle: [-5, 0, 12], count: 5, speed: 1.5 });
      W.npc({ kind: 'tourist-b', patrol: walkPts(-60, 100, true), count: 2 }); W.npc({ kind: 'tourist-c', patrol: walkPts(-140, -30, false), count: 2 });
      W.npc({ kind: 'cow', circle: [8, 120, 18], count: 2 }); W.npc({ kind: 'cow', circle: [20, -60, 18], count: 2 });
      for (const z of [PLOTS[1], PLOTS[12], PLOTS[24], PLOTS[34]]) if (z) { W.npc({ kind: 'woman-red', zone: z, count: 1 }); W.npc({ kind: 'villager', zone: z, count: 1 }); }
      W.npc({ kind: 'woman-green', circle: [-5.5, -152, 8], count: 1 });
    }

    // ================================================================ places
    const moorX = crossX(MOOR, 58, false);
    const spots = {
      akhai: [123.5, -70.4], suraj: [XC(SPY) + 21.5, SPY + 6], ganesh: [XC(GY) + 12.5, GY - 6], hawa: [HPX + 4, LANEY], chowk: [58, 22], rajmahal: [79, 36],
      museum: [65, 44.4], laxminath: [-13, 17], parshvanath: [-37, -36.6], sambhavnath: [-4.6, -86], chandraprabhu: [-16, -36.6],
      bastions: [b12.x, b12.y], moorcha: [moorX, 58], ghutnali: [-5.5, -146],
      'well-jaisaloo': [-5.5,132], 'well-ranisar': [-2.45,-152], 'well-bulla': [55,-108], 'well-harjaloo': [-5.5,-152],
      'well-khuniwala': [36,-42], 'well-ramdeora': [39,-42], 'well-gosisar': [74,42],
    };
    for (const p of POIS) {
      if(old && p.id==='well-ranisar') continue;
      const q = Object.assign({ r: 6 }, p, { at: spots[p.id], eraNote: p.eraNote?.[era] || null });
      if (p.id === 'museum') q.h = terraceH;
      if (p.id === 'bastions') { q.h = bastionTop(b12); q.r = 4.5; q.hTol = 3; }
      if (p.id === 'moorcha') { q.h = W.ground(moorX, 58); q.hTol = 3; }
      W.poi(q);
    }
    W.wildlife({ kinds: { peafowl: 4, camel: old ? 6 : 4 } });
    // the Thar beyond the town: barchan dunes driven north-east by the south-west wind, clear of the city and its fields
    W.duneField({ x0: -1150, y0: -900, x1: 1100, y1: 950, step: 6, n: 70, h: [3, 13], wind: [0.72, 0.69], seed: 31,
      avoid: (x, y) => Math.hypot((x - 30) / 470, y / 560) < 1.15,
      mask: (x, y) => { const e = Math.hypot((x - 30) / 470, y / 560); return e < 1 ? 0 : Math.min(1, (e - 1) / 0.18); } });
    W.spawn(150, -70.4, GOPA, 270);
  },
};

// ---------------------------------------------------------------- level-local building helpers
// A temple on its own low platform. Works round the engine's temple plinth, which is centred on the mandapa
// rather than on the whole temple (see the report): the platform covers sanctum and mandapa, the engine plinth is ~0.
function templeOn(W, o, pl = 0.55) {
  const w = o.w ?? 5, md = o.mandapa || { d: w * 1.1, w: w * 1.15 };
  const rot = (o.rot ?? 0) * Math.PI / 180, c = Math.cos(rot), s = Math.sin(rot);
  const T = (u, v) => [o.x + u * c - v * s, o.y + u * s + v * c];
  const v0 = -md.d - 1.2, v1 = w + 1.0, hw = Math.max(w, md.w ?? w) / 2 + 1.0;
  const poly = [T(-hw, v0), T(hw, v0), T(hw, v1), T(-hw, v1)];
  let lo = Infinity; for (const p of poly) lo = Math.min(lo, W.ground(p[0], p[1]));
  const top = W.platform({ poly, h: lo + pl, color: o.color || 'stone' });
  W.temple(Object.assign({}, o, { base: top, plinth: 0.05, stairs: false }));
  return top;
}

const rngOf = (seed) => { let a = seed >>> 0; return () => { a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; };

// Dense house fabric for one block: pairs of back-to-back rows of 2-3 storey houses with flat roof terraces,
// separated by narrow lanes (2.3-3.5 m), with the odd open courtyard. Packs far tighter than random scatter.
function fillBlock(W, poly, seed, era, RES) {
  const r = rngOf(seed);
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const [x, y] of poly) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); }
  const alongX = (x1 - x0) >= (y1 - y0) * 0.75;
  const [U0, U1, V0, V1] = alongX ? [x0, x1, y0, y1] : [y0, y1, x0, x1];
  const old = era === '1650', now = era === 'today';
  const cols = ['plaster', 'plasterDark', 'wall', '#d3a967', '#c3924f', '#dcb57a'];
  let v = V0 + 0.4 + r() * 0.8, k = 0, n = 0;
  while (v < V1 - 3.2) {
    const depth = 6.0 + r() * 3.2;
    let u = U0 + 0.3 + r() * 1.5;
    while (u < U1 - 3.2) {
      const wid = 4.4 + r() * 4.2, dd = depth - (r() < 0.35 ? r() * 1.6 : 0);
      const back = k % 2 === 1;
      const va = back ? v + depth - dd : v, vb = va + dd, ua = u, ub = u + wid;
      u += wid + 0.45 + (r() < 0.1 ? 1.8 + r() * 1.2 : r() * 0.5);
      if (r() < (old ? 0.16 : 0.05)) continue; // open courtyard or garden plot
      const pts = alongX ? [[ua, va], [ub, va], [ub, vb], [ua, vb]] : [[va, ua], [vb, ua], [vb, ub], [va, ub]];
      if (!pts.every((p) => pointInPoly(p[0], p[1], poly))) continue;
      const ax0 = alongX ? ua : va, ax1 = alongX ? ub : vb, ay0 = alongX ? va : ua, ay1 = alongX ? vb : ub;
      if (RES.some((R) => ax0 < R[1] && ax1 > R[0] && ay0 < R[3] && ay1 > R[2])) continue;
      let lo = Infinity, hi = -Infinity; for (const p of pts) { const g = W.ground(p[0], p[1]); lo = Math.min(lo, g); hi = Math.max(hi, g); }
      if (hi - lo > 2.2) continue;
      const st = old ? 1 + (r() < 0.55 ? 1 : 0) + (r() < 0.15 ? 1 : 0) : 2 + (r() < 0.6 ? 1 : 0) - (r() < 0.1 ? 1 : 0) + (now && r() < 0.07 ? 1 : 0);
      const front = alongX ? (back ? 2 : 0) : (back ? 1 : 3);
      W.building({ rect: [(ax0 + ax1) / 2, (ay0 + ay1) / 2, ax1 - ax0, ay1 - ay0, 0], storeys: st, storeyH: 3.1, color: cols[(r() * cols.length) | 0], roof: 'flat', parapet: { h: 0.6, t: 0.25 },
        windows: { spacing: 2.4, w: 0.7, h: 1.1, style: 'rect' }, cornice: st > 1,
        jharokhas: st > 1 && r() < (old ? 0.15 : 0.32) ? { every: 4.8, size: 1.4, rows: [1], skip: [0, 1, 2, 3].filter((e) => e !== front) } : null,
        chhatris: r() < (now ? 0.05 : 0.02) ? 'corners' : null, chhatriSize: 1.3, chhatriH: 1.4, kind: 'house', pad: 0.2 });
      n++;
    }
    v += depth + (k % 2 === 0 ? 0.5 : 2.3 + r() * 1.2);
    k++;
  }
  return n;
}

// The old town round the hill: two rows of houses between east-west streets (the town's streets run east-west,
// "at right angles to the direction of dust storms"). Render-only outside the bounds; simple solid blocks on the
// plain inside the bounds so the traveller cannot walk through them.
function townScenery(W, era) {
  const [bx0, by0, bx1, by1] = BOUNDS;
  const old = era === '1650';
  const nz = makeNoise(5), r = rngOf(77);
  const cols = ['#cfa868', '#c49855', '#d6b277', '#bf914f', '#d1a35f', '#c99d5c'];
  for (let sy = -430; sy < 440; sy += 21) {
    for (let row = 0; row < 2; row++) {
      const ya = sy + 2.2 + row * 8.5, yb = ya + 7.6 + (r() - 0.5) * 1.0;
      let x = -380 + r() * 6;
      while (x < 470) {
        const w = 5 + r() * 6, cx = x + w / 2, cy = (ya + yb) / 2;
        x += w + 0.35 + (r() < 0.05 ? 3.6 : 0);
        const e = Math.hypot((cx - 30) / 330, cy / 420);
        if (e > 1) continue;
        const n = nz(cx / 70, cy / 70);
        if (n < -0.75 + Math.max(0, e - 0.5) * (old ? 2.4 : 1.6)) continue; // open ground grows towards the edge of town (more so in 1650)
        const h = 3.4 + Math.floor(r() * 3) * 2.7 + (r() < 0.04 ? 3.5 : 0);
        const col = cols[(r() * cols.length) | 0];
        const inX = cx > bx0 - 1 && cx < bx1 + 1, inY = cy > by0 - 1 && cy < by1 + 1;
        if (!(inX && inY)) { W.scenery({ box: [cx, cy, w, yb - ya, 0, -0.5, h], color: col }); continue; }
        // inside the bounds: only on the open plain beyond the foot of the hill, clear of the approach to the gate
        if (cx < bx0 + 2 || cx > bx1 - 2 || cy < by0 + 2 || cy > by1 - 2) continue;
        if (cx > 128 && cy > -118 && cy < -24) continue;
        if (sdist(cx, cy, S_R1) < 33) continue;
        const g = Math.max(W.ground(cx - w / 2, ya), W.ground(cx + w / 2, ya), W.ground(cx - w / 2, yb), W.ground(cx + w / 2, yb));
        if (g > 2.6) continue;
        W.building({ rect: [cx, cy, w, yb - ya, 0], h, color: col, roof: 'flat', parapet: { h: 0.5, t: 0.25 }, windows: { style: 'rect', spacing: 3.2, w: 0.7, h: 1.0, rows: [0] }, cornice: false, kind: 'house', pad: 0.1 });
      }
    }
  }
  for (let i = 0; i < 70; i++) {
    const a = i * 2.39996, rr = 300 + (i * 53) % 160;
    const x = 25 + Math.cos(a) * rr * 1.1, y = Math.sin(a) * rr * 1.3;
    if (x > bx0 - 10 && x < bx1 + 10 && y > by0 - 10 && y < by1 + 10) continue;
    W.tree({ x, y, h: 0, type: i % 3 ? 'khejri' : 'acacia', s: 0.9 + (i % 4) * 0.12 });
  }
}
