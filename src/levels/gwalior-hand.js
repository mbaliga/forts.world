// 06 · Gwalior (Gopachal) — sandstone plateau fort, Gwalior, Madhya Pradesh.
// Plan: 1 unit = 5 m of the real rock (planScale 5); the rock's height is compressed 2.75x (vScale 2.75).
// Origin = the Man Mandir (ASI point "Mansingh's palace"). Gates and monuments sit at the ASI monument
// coordinates tabulated in the research file (±30–50 m); the rim follows its schematic outline. Buildings are drawn
// larger than the plan compression so that they stay legible next to a 1.8-unit traveller.
import { rectPts, regularPoly, wallStairs } from './kit.js';
import { clamp, lerp, smoothstep, distToPolyline, offsetPolyline, makeNoise, fbm } from '../core/geom.js';
import { shade, V } from '../core/mesher.js';

// ------------------------------------------------------------------ heights
const TOP_N = 36.5, TOP_S = 34.5; // plateau top, palace end and south end (≈100 m and 95 m above the plain)
const TOPF = (x, y) => TOP_S + (TOP_N - TOP_S) * smoothstep(-330, -30, y);
const HATHI_Y = -21.8, HATHI_S = -29.6; // Hathi Pol gate and the south end of its wall

// ------------------------------------------------------------------ geometry helpers
function cumLen(p) { const c = [0]; for (let i = 1; i < p.length; i++) c.push(c[i - 1] + Math.hypot(p[i][0] - p[i - 1][0], p[i][1] - p[i - 1][1])); return c; }
function pointAtS(p, s) {
  const c = cumLen(p);
  if (s <= 0) return p[0].slice();
  for (let i = 1; i < p.length; i++) {
    if (c[i] >= s) {
      const t = (s - c[i - 1]) / ((c[i] - c[i - 1]) || 1);
      return p[i].map((v, k) => lerp(p[i - 1][k], v, t));
    }
  }
  return p[p.length - 1].slice();
}
function subPath(p, s0, s1) {
  const c = cumLen(p);
  const out = [pointAtS(p, s0)];
  for (let i = 0; i < p.length; i++) if (c[i] > s0 + 0.05 && c[i] < s1 - 0.05) out.push(p[i].slice());
  out.push(pointAtS(p, s1));
  return out;
}
function dirAtS(p, s) { const a = pointAtS(p, s - 0.5), b = pointAtS(p, s + 0.5); const l = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1; return [(b[0] - a[0]) / l, (b[1] - a[1]) / l]; }
const left2 = (p, d) => offsetPolyline(p.map((q) => [q[0], q[1]]), false, d, 2.5); // + = left of travel
// fill null heights by arc length between fixed ones
function fillHeights(pts) {
  const out = pts.map((p) => p.slice());
  const c = cumLen(out);
  let last = 0;
  for (let i = 1; i < out.length; i++) {
    if (out[i][2] == null) continue;
    for (let k = last + 1; k < i; k++) out[k][2] = lerp(out[last][2], out[i][2], (c[k] - c[last]) / ((c[i] - c[last]) || 1));
    last = i;
  }
  return out;
}
// closed polygon offset with a per-vertex distance (+ = left of travel; outward for a clockwise ring)
function offsetVar(pts, fn) {
  const n = pts.length, out = [];
  for (let i = 0; i < n; i++) {
    const p = pts[i], a = pts[(i - 1 + n) % n], b = pts[(i + 1) % n];
    let dx = p[0] - a[0], dy = p[1] - a[1], l = Math.hypot(dx, dy) || 1;
    const n0 = [-dy / l, dx / l];
    dx = b[0] - p[0]; dy = b[1] - p[1]; l = Math.hypot(dx, dy) || 1;
    const n1 = [-dy / l, dx / l];
    let mx = n0[0] + n1[0], my = n0[1] + n1[1];
    const ml = Math.hypot(mx, my);
    if (ml < 1e-6) { mx = n1[0]; my = n1[1]; } else { mx /= ml; my /= ml; }
    const k = fn(p[0], p[1]) / Math.max(mx * n1[0] + my * n1[1], 0.45);
    out.push([p[0] + mx * k, p[1] + my * k]);
  }
  return out;
}

// ------------------------------------------------------------------ the rim (wall centre line), clockwise
// W2: from the Hathi Pol south along the east rim, round the south tip, north to the Urvai ravine mouth.
const W2_PTS = [
  [7.3, -29.6], [9.6, -36.5], [12.6, -44], [16, -52], [18.6, -62], [20.4, -74], [21.6, -86], [22.6, -98],
  [24.6, -110], [27, -121], [29.5, -132], [32, -143], [33.6, -154], [34, -165], [33, -176], [31.2, -188],
  [29.6, -200], [28, -212], [25, -223], [21, -234], [17, -245], [13, -255], [9, -264], [4.5, -273],
  [0, -282], [-4.5, -291], [-9, -300], [-14.5, -309], [-19.5, -318], [-24, -328], [-29, -338], [-35, -347],
  [-40, -353.5], [-45.5, -355], [-50.5, -350], [-54.5, -342], [-58.5, -333], [-64, -324], [-70, -316],
  [-76, -307], [-82, -298], [-88, -289], [-93, -280], [-98, -270], [-103, -260], [-108, -250], [-112.5, -240],
  [-116.5, -230], [-120.5, -220], [-124.5, -210], [-127.5, -200], [-131, -194], [-135.5, -190.5], [-138, -187.8],
];
// W1: from the ravine mouth north along the west rim, round the north tip, south to the palace's north-east corner.
const W1_PTS = [
  [-137.5, -166.2], [-134, -162.8], [-125, -160.4], [-113, -158], [-101.5, -152], [-93, -143], [-87, -132], [-82, -121],
  [-79, -110], [-76, -99], [-73, -88], [-70, -77], [-67, -66], [-63, -56], [-59, -46], [-55, -36], [-51, -26],
  [-47, -15], [-43.5, -5], [-40.5, 5], [-37.5, 15], [-34.5, 24], [-31.5, 33], [-28.5, 42], [-25, 50], [-21, 58],
  [-16, 65], [-10, 70.5], [-3, 73.5], [4, 73.5], [10.5, 70], [16, 64], [21, 56.5], [25, 48.5], [28, 40],
  [29.5, 31], [29, 23.5], [27, 20.4], [21, 18.9], [14, 17.6], [7.3, 16.6],
];
const RIM = [...W2_PTS, ...W1_PTS, [7.3, -15.3]]; // last edges: the palace east front and the Hathi Pol wall
// berm: rock ledge left outside the wall before the cliff edge
const berm = (x, y) => {
  if (x > 5 && x < 9.5 && y > -16 && y < 17) return -0.5;  // the palace front is the cliff edge
  if (x > 5 && x < 9.5 && y > -29 && y <= -16) return 1.6;  // Hathi Pol
  if (x > 12 && y > 15 && y < 46) return 1.35;               // the spur above the eastern ramp
  if (x < -126 && y > -192 && y < -160) return 2.2;          // ravine mouth corners
  return 4.2;
};
const PLAT = offsetVar(RIM, berm);
const PLAT_IN = offsetVar(RIM, () => -3.6);
const PLAT_OUT = offsetVar(RIM, () => 24);

// signed distance to the plateau edge on the terrain vertex grid (bounds below, stride 2), computed once on first use
const GX0 = -170, GY0 = -382, GS = 2, GNX = 134, GNY = 251;
let DF = null;
function buildDF() {
  // flat segment table with bounding boxes so most segments are skipped; distances capped at 40 (only < 32 matters)
  const n = PLAT.length, S = new Float64Array(n * 8);
  for (let k = 0; k < n; k++) {
    const a = PLAT[k], b = PLAT[(k + 1) % n], o = k * 8;
    S[o] = a[0]; S[o + 1] = a[1]; S[o + 2] = b[0] - a[0]; S[o + 3] = b[1] - a[1];
    S[o + 4] = Math.min(a[0], b[0]); S[o + 5] = Math.max(a[0], b[0]); S[o + 6] = Math.min(a[1], b[1]); S[o + 7] = Math.max(a[1], b[1]);
  }
  DF = new Float32Array((GNX + 1) * (GNY + 1));
  for (let j = 0; j <= GNY; j++) {
    const y = GY0 + j * GS;
    for (let i = 0; i <= GNX; i++) {
      const x = GX0 + i * GS;
      let best = 1600, inside = false;
      for (let o = 0; o < n * 8; o += 8) {
        const ax = S[o], ay = S[o + 1], dx = S[o + 2], dy = S[o + 3];
        // crossing test for the sign (same rule as pointInPoly)
        const by = ay + dy;
        if ((ay > y) !== (by > y) && x < (dx * (y - ay)) / (dy + 1e-12) + ax) inside = !inside;
        const ex = Math.max(S[o + 4] - x, 0, x - S[o + 5]), ey = Math.max(S[o + 6] - y, 0, y - S[o + 7]);
        if (ex * ex + ey * ey >= best) continue;
        const l2 = dx * dx + dy * dy || 1;
        let t = ((x - ax) * dx + (y - ay) * dy) / l2; t = t < 0 ? 0 : t > 1 ? 1 : t;
        const qx = ax + dx * t - x, qy = ay + dy * t - y, d2 = qx * qx + qy * qy;
        if (d2 < best) best = d2;
      }
      const d = Math.min(40, Math.sqrt(best));
      DF[j * (GNX + 1) + i] = inside ? -d : d;
    }
  }
}
function dAt(x, y) {
  if (!DF) buildDF();
  const i = clamp(Math.round((x - GX0) / GS), 0, GNX), j = clamp(Math.round((y - GY0) / GS), 0, GNY);
  return DF[j * (GNX + 1) + i];
}
const NZ1 = makeNoise(61), NZ2 = makeNoise(62);
const scarp = (t) => (t < 0.08 ? 1 : 1 - Math.pow((t - 0.08) / 0.92, 0.25));
// talus apron, scree and the sheer-sided plateau in one pass
function rock(x, y, h) {
  const d = dAt(x, y);
  if (d < 26) { const t = Math.max(0, d) / 26; h = Math.max(h, lerp(h, 9.5, (1 - t) * (1 - t))); }
  if (d < 32) h += 1.6 * (1 - smoothstep(22, 32, d)) * fbm(NZ1, x / 9 + 11.3, y / 9 - 7.1, 3);
  if (d < 5) {
    let T = TOPF(x, y);
    if (d < 0) T += 0.6 * fbm(NZ2, x / 15, y / 15, 3) * smoothstep(0, 6, -d);
    const f = d <= 0 ? 1 : scarp(d / 5);
    h = Math.max(h, lerp(h, T, f));
  }
  return h;
}

// ------------------------------------------------------------------ the eastern ramp
// [x, y, h]: h fixed at gate landings ('G', 'L', 'T' solved so the three climbs share one gradient)
const RAMP = (() => {
  const P = [
    [97, 75.9, 1.0], [71.8, 75.6, 1.4], [64.4, 75.6, 1.4],                                  // town road, Alamgiri landing
    [58.2, 74.3, null], [53.6, 71.6, null], [51.6, 69.6, 5.5], [51.6, 62.6, 5.5],          // Badalgarh court, Hindola landing
    [50.9, 56.5, null], [49.2, 49.6, null], [47.7, 45.6, 'G'], [44.8, 35.6, 'G'],          // climb, Ganesh landing
    [40.6, 29.6, null], [36.2, 23.4, null], [31.4, 18.9, null], [25.8, 15.6, 'L'], [20.2, 11.4, 'L'], // climb, Lakshman
    [17.4, 8.5, null], [15.2, 4.2, null], [14.3, -4, null], [14.0, -15.6, 'T'], [13.4, -20.2, 'T'], [9.2, -21.8, 'T'], [3.0, -22.0, 'T'],
  ];
  const len = (i, j) => { let s = 0; for (let k = i; k < j; k++) s += Math.hypot(P[k + 1][0] - P[k][0], P[k + 1][1] - P[k][1]); return s; };
  const T = TOPF(9, HATHI_Y);
  const c1 = len(6, 9), c2 = len(10, 14), c3 = len(15, 19);
  const k = (T - 5.5) / (c1 + c2 + c3);
  const G = 5.5 + k * c1, L = G + k * c2;
  const pts = fillHeights(P.map((p) => [p[0], p[1], p[2] === 'G' ? G : p[2] === 'L' ? L : p[2] === 'T' ? T : p[2]]));
  return { pts, G, L, T, k, S: cumLen(pts) };
})();
const RP = RAMP.pts, RS = RAMP.S;
const CLIMB = RP.slice(6, 20);                     // Hindola landing end -> Hathi Pol landing start
const S_GANESH = RS[9] + 6.6, S_LAKSH = (RS[14] + RS[15]) / 2;
const GATE_G = pointAtS(RP, S_GANESH), GATE_L = pointAtS(RP, S_LAKSH);
const DIR_G = dirAtS(RP, S_GANESH), DIR_L = dirAtS(RP, S_LAKSH);
const CHAT = (() => { const p = RP[13], d = dirAtS(RP, RS[13]); const r = [d[1], -d[0]]; return { a: [p[0] + r[0] * 3.0, p[1] + r[1] * 3.0, p[2]], b: [p[0] + r[0] * 6.6, p[1] + r[1] * 6.6, p[2]], r }; })();

// Badalgarh enclosure (outer court) between the Alamgiri and Hindola gates, with the Gujari Mahal
const COURT = [[40.5, 66], [68, 66], [68, 102.5], [40.5, 102.5]];
const courtH = (x, y) => 1.4 + Math.max(0, 68 - x) * 0.13 + Math.max(0, 74 - y) * 0.12;
const GUJ_H = 3.0; // Gujari Mahal floor
// Kabutar Khana outwork below the Ganesh gate
const KK = [[50.7, 45.0], [58.2, 46.4], [57.8, 41.4], [49.9, 41.8]];

// ------------------------------------------------------------------ the Urvai ravine (west) and its road
const RAVC = fillHeights([
  [-163, -179.2, 0.8], [-150, -177.6, 4.6], [-143, -177, 7.0], [-136, -176.6, 7.0], [-124, -175.2, null], [-111, -176.6, null],
  [-98, -175.6, null], [-85, -177.4, null], [-72, -179.4, null], [-60, -181, TOPF(-60, -181)], [-50, -182.2, TOPF(-50, -182)],
]);
const RAV_HW = [9, 8, 7.4, 7.6, 8.4, 8.4, 8.0, 6.6, 5.6, 4.4, 3.2];
const RAVS = cumLen(RAVC);
function ravine(x, y, h) {
  if (x < -170 || x > -42 || y < -200 || y > -155) return h;
  const r = distToPolyline(x, y, RAVC);
  if (r.d > 14) return h;
  const a = RAVC[r.seg], b = RAVC[r.seg + 1];
  const floor = lerp(a[2], b[2], r.t), hw = lerp(RAV_HW[r.seg], RAV_HW[r.seg + 1], r.t);
  const q = r.d / hw;
  const T = r.d <= hw ? floor + 0.9 * q * q : floor + 0.9 + (r.d - hw) * 7;
  return Math.min(h, T);
}
// point on a ravine wall foot: side +1 = north (left of travel), -1 = south
function ravWall(s, side, inset = 0.9) {
  const p = pointAtS(RAVC, s), d = dirAtS(RAVC, s);
  const k = RAVS.findIndex((v) => v >= s);
  const i = Math.max(1, k);
  const hw = lerp(RAV_HW[i - 1], RAV_HW[i], clamp((s - RAVS[i - 1]) / ((RAVS[i] - RAVS[i - 1]) || 1), 0, 1));
  const n = [-d[1] * side, d[0] * side];
  return { x: p[0] + n[0] * (hw - inset), y: p[1] + n[1] * (hw - inset), face: Math.atan2(-n[1], -n[0]) * 180 / Math.PI, n };
}

// ------------------------------------------------------------------ eastern shoulder: the slope below the east cliff
function shoulder(x, y, h) {
  if (x < 4 || x > 72 || y < -32 || y > 72) return h;
  const r = distToPolyline(x, y, CLIMB);
  if (r.d > 26) return h;
  if ((r.seg === 0 && r.t <= 0) || (r.seg === CLIMB.length - 2 && r.t >= 1)) return h;
  const a = CLIMB[r.seg], b = CLIMB[r.seg + 1];
  const px = lerp(a[0], b[0], r.t), py = lerp(a[1], b[1], r.t), ph = lerp(a[2], b[2], r.t);
  const tx = b[0] - a[0], ty = b[1] - a[1], L = Math.hypot(tx, ty) || 1;
  const side = ((x - px) * -ty + (y - py) * tx) / L; // > 0: left of travel = outer (east) side
  let T;
  if (side >= 0) T = side <= 4.1 ? ph : ph - (side - 4.1) * 3.6;
  else {
    const d = -side;
    T = d <= 2.9 ? ph : ph + Math.min((d - 2.9) * 0.8, 9) + Math.max(0, d - 14.2) * 0.12;
    T = lerp(h, Math.min(T, TOPF(x, y) - 0.4), 1 - smoothstep(18, 25, d));
  }
  return Math.max(h, T);
}

// ------------------------------------------------------------------ other places (units)
const SB = [17, -156];          // Sas-Bahu, larger temple (faces east)
const TELI = [-66.4, -228.6];   // Teli ka Mandir (faces east)
const GURD = [-45, -206];       // Gurdwara Data Bandi Chhor
const SURAJ = [-20, -190];      // Suraj Kund
const ESC = { y: -92 };         // where the 1780 ladders are drawn (no source fixes the face that was scaled)
const SCHOOL = [[-80, -262], [-30, -262], [-17, -284], [-29, -318], [-62, -318], [-83, -296]];
const RED = '#a65a40', TELI_C = '#a39582', JAIN = '#9a8a72', PLASTER_NEW = '#ece6d6';

const POIS = [
  { id: 'gujari', at: [54, 81.6], r: 6, title: 'Gujari Mahal',
    text: 'Raja Man Singh Tomar built this palace about 1500 for his queen Mrignayani, at the foot of the fort\'s north-east approach. It now houses the State Archaeological Museum.',
    source: 'https://en.wikipedia.org/wiki/Gwalior_Fort' },
  { id: 'alamgiri', at: [63.6, 75.6], r: 5, title: 'Alamgiri Gate',
    text: 'The lowest gate of the eastern ramp, built in 1660 by Motamid Khan, the Mughal governor under Aurangzeb (Alamgir). Inside the outer court, the Badalgarh or Hindola Gate, attributed to Badal Singh Tomar, opens onto the steep cobbled climb to the palace.',
    source: 'https://puratattva.in/gwalior-reminiscence-of-a-metropolis-2/' },
  { id: 'ganesh', at: [51.4, 43.0], r: 5, hTol: 3, title: 'Ganesh Gate and Kabutar Khana',
    text: 'Dungar Singh Tomar (r. 1424–54) built the Ganesh Gate. Outside it is a small outwork called the Kabutar Khana ("pigeon-house"), holding the Nur Saugar tank, 60 × 39 ft and 25 ft deep. Beside it are a pavilion shrine to the hermit Gwalipa, who gave Gwalior its name, and a small mosque dated 1664.',
    source: 'https://www.flickr.com/photos/internetarchivebookimages/14781563205/' },
  { id: 'chaturbhuj', at: [CHAT.a[0] - CHAT.r[0] * 1.4, CHAT.a[1] - CHAT.r[1] * 1.4], r: 4, hTol: 2.5, title: 'Chaturbhuj Mandir',
    text: 'A 12-ft-square shrine to Vishnu cut from the solid rock beside the ramp, just below the Lakshman Gate. Its inscription of 876 CE (Samvat 933) writes numbers with a zero; UNESCO calls it the second-oldest reference to zero in mathematics.',
    source: 'https://whc.unesco.org/en/tentativelists/6730/' },
  { id: 'hathipol', at: [13.0, -21.0], r: 5, title: 'Hathi Pol (Elephant Gate)',
    text: 'The principal entrance, on the south-east of the Man Mandir, built by Raja Man Singh (1486–1516). It is faced with the same blue, yellow and green tilework as the palace, and is named for a life-sized statue of an elephant that once adorned the gate.',
    source: 'https://en.wikipedia.org/wiki/Gwalior_Fort',
    eraNote: { '1868': 'Lala Deen Dayal photographed the road climbing to this gate, with the Man Mandir on the right, about 1882.' } },
  { id: 'manmandir', at: [0, 7], r: 5, title: 'Man Mandir',
    text: 'Raja Man Singh Tomar\'s palace (1486–1516) presents a 300-ft-long, 80-ft-high east face to the city, broken by six round towers and banded with blue, green and yellow tile mosaics. Inside are two courtyards and two storeys of rooms below courtyard level. ASI calls it the most remarkable early Hindu palace in India.',
    source: 'https://asibhopal.nic.in/monument/gwalior_gwalior_gwaliorfort_more.html',
    eraNote: { '1780': 'When the alarm was raised in 1780 the Maratha garrison fell back to the inner buildings before fleeing the fort.', '1868': 'The palace had not yet been restored; that work came in 1881.', today: 'Both courtyards are open to visitors.' } },
  { id: 'jauhar', at: [-14.5, 41.5], r: 6, title: 'Jauhar Kund and Bhim Singh Rana Chhatri',
    text: 'A tank at the north end of the plateau, west of the Jahangir Mahal, beside the domed cenotaph of Bhim Singh Rana of Gohad that Chhatra Singh built. Tradition holds that the queens of the fort committed jauhar, mass self-immolation, here.',
    source: 'https://www.mptourism.com/gwalior-fort-madhya-pradesh.html' },
  { id: 'sasbahu', at: [30.2, -155.5], r: 6, title: 'Sas-Bahu temples',
    text: 'Twin Vaishnava temples of the Kachchhapaghata dynasty on the east rim. The larger one was completed by Mahipala in 1093 and still stands about 24 m high in three storeys of beams and pillars, built entirely without arches. It was restored in 1844.',
    source: 'https://asibhopal.nic.in/monument/gwalior_gwalior_gwaliorfort_more.html',
    eraNote: { '1868': 'Deen Dayal photographed the pillared hall of the larger temple about 1875, when it was taken to be a Jain temple.' } },
  { id: 'suraj', at: [-20, -182.2], r: 6, title: 'Suraj Kund',
    text: 'The tank of Gwalior\'s founding legend: the chief Suraj Sen (Suraj Pal) was cured here by the hermit Gwalipa and named the fort after him. It is one of the reservoirs that once watered a garrison of 15,000.',
    source: 'https://esamskriti.com/a/Madhya-Pradesh/Gwalior-Fort.aspx' },
  { id: 'gurdwara', at: [-53, -199], r: 6, title: 'Gurdwara Data Bandi Chhor',
    text: 'A Sikh shrine built in the 1970s and 1980s where the sixth Guru, Hargobind, was held captive by the Mughal emperor Jahangir in 1609. It commemorates his release (Bandi Chhor, "liberator of prisoners").',
    source: 'https://en.wikipedia.org/wiki/Gwalior_Fort',
    eraNote: { '1780': 'The gurdwara would not be built for almost two centuries.', '1868': 'The gurdwara was built only in the 1970s and 1980s.' } },
  { id: 'teli', at: [-55.5, -228.6], r: 6, title: 'Teli ka Mandir',
    text: 'The oldest standing building on the plateau, of the 8th–9th century (Pratihara), about 25–28 m tall. It has a wagon-vaulted roof and a 35-ft-high doorway, and was restored in 1881–83. A Garuda monument to Vishnu stands close by.',
    source: 'https://asibhopal.nic.in/monument/gwalior_gwalior_gwaliorfort_more.html',
    eraNote: { '1780': 'Its restoration was still a century away.', '1868': 'It stood unrestored until the works of 1881–83.', today: 'The carved gateway beside it appears in a Deen Dayal photograph of 1885.' } },
  { id: 'colossi', at: [-117, -176.2], r: 7, hTol: 4, title: 'Urvai valley Jain colossi',
    text: 'Fifteenth-century Tirthankara images are carved into the ravine walls on both sides of the western road, with inscriptions of 1440–53. The Urvahi group alone has 24 seated and 40 standing figures; the largest, an Adinatha, is 17.8 m (58 ft) tall.',
    source: 'https://en.wikipedia.org/wiki/Gopachal_rock-cut_Jain_monuments' },
  { id: 'urwai', at: [-135.4, -176.6], r: 5, title: 'Urwai Gate',
    text: 'The western entrance, built after Iltutmish took the fort in 1232. It is now the road entrance used by most visitors.',
    source: 'https://asibhopal.nic.in/monument/gwalior_gwalior_gwaliorfort_more.html' },
  { id: 'escalade', at: [16.2, -92], r: 7, title: 'Popham\'s escalade, 1780',
    text: 'On the night of 3 August 1780 an East India Company force under Captains Popham and Bruce scaled the walls and took a fortress thought unassailable. A wash view of the fortress was drawn the next day.',
    source: 'https://en.wikipedia.org/wiki/Gwalior_Fort',
    eraNote: { '1780': 'Captain William Bruce\'s party went up first, with wooden ladders from crag to crag and a rope ladder tied to the battlements, and Popham followed with two battalions.', '1868': 'The British took control of the fort again in June 1858 and handed it to the Scindias in 1886.' } },
];

// ------------------------------------------------------------------ small builders (level-local)
// straight beam between two plan points with heights (ladder rails, rungs, ropes)
function beam(W, p0, p1, w, col) {
  const a = V(p0[0], p0[1], p0[2]), b = V(p1[0], p1[1], p1[2]);
  const ax = [b[0] - a[0], b[1] - a[1], b[2] - a[2]], L = Math.hypot(...ax) || 1;
  const t = ax.map((v) => v / L);
  let u = [t[1] * 0 - t[2] * 1, t[2] * 0 - t[0] * 0, t[0] * 1 - t[1] * 0]; // t x up
  if (Math.hypot(...u) < 1e-3) u = [1, 0, 0];
  const ul = Math.hypot(...u); u = u.map((v) => v / ul * w / 2);
  const v = [t[1] * u[2] - t[2] * u[1], t[2] * u[0] - t[0] * u[2], t[0] * u[1] - t[1] * u[0]];
  const P = (q, su, sv) => [q[0] + u[0] * su + v[0] * sv, q[1] + u[1] * su + v[1] * sv, q[2] + u[2] * su + v[2] * sv];
  const c = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2];
  const M = W.solid, cc = W.col(col);
  const corners = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
  for (let i = 0; i < 4; i++) {
    const [s0, t0] = corners[i], [s1, t1] = corners[(i + 1) % 4];
    M.quadAway(P(a, s0, t0), P(a, s1, t1), P(b, s1, t1), P(b, s0, t0), i % 2 ? cc : shade(cc, 0.85), c);
  }
}
function ladder(W, foot, top, { w = 0.9, rope = false } = {}) {
  const dx = top[0] - foot[0], dy = top[1] - foot[1], L = Math.hypot(dx, dy) || 1;
  const nx = -dy / L, ny = dx / L; // sideways
  const hx = rope ? 0 : 0, col = rope ? '#7a6a4a' : '#5a3d26';
  const rail = (sg) => beam(W, [foot[0] + nx * w / 2 * sg, foot[1] + ny * w / 2 * sg, foot[2]], [top[0] + nx * w / 2 * sg + hx, top[1] + ny * w / 2 * sg, top[2]], rope ? 0.06 : 0.12, col);
  rail(-1); rail(1);
  const len = Math.hypot(dx, dy, top[2] - foot[2]);
  const n = Math.floor(len / 0.45);
  for (let i = 1; i < n; i++) {
    const t = i / n;
    const cx = lerp(foot[0], top[0], t), cy = lerp(foot[1], top[1], t), ch = lerp(foot[2], top[2], t);
    beam(W, [cx - nx * w / 2, cy - ny * w / 2, ch], [cx + nx * w / 2, cy + ny * w / 2, ch], rope ? 0.05 : 0.08, col);
  }
}
// find the foot of a rock face: march from open ground (x, y) along (dx, dy) until the terrain rises
function faceFoot(W, x, y, dx, dy, max = 14) {
  const g0 = W.ground(x, y);
  let d = 0;
  while (d < max && W.ground(x + dx * (d + 0.2), y + dy * (d + 0.2)) < g0 + 1.1) d += 0.2;
  return { x: x + dx * d, y: y + dy * d, g: g0 };
}
// rock-cut Jain colossus in a niche. (x, y) = foot of the rock face; the figure stands in front, looking faceDeg.
function colossus(W, x, y, H, faceDeg, { seated = false, base = null, col = JAIN } = {}) {
  const g = base ?? W.ground(x, y);
  const F = faceDeg * Math.PI / 180, fx = Math.cos(F), fy = Math.sin(F), rx = Math.sin(F), ry = -Math.cos(F);
  const T = (u, v) => [x + rx * u + fx * v, y + ry * u + fy * v];
  const rot = faceDeg - 90;
  const M = W.solid, C = W.col(col), dark = W.col('#3b342c'), rock = W.col('rock');
  const box = (u, v, w, d, h0, h1, c = C) => { const p = T(u, v); M.box(p[0], p[1], w, d, g + h0, g + h1, rot, c); };
  const wN = seated ? H * 0.78 : H * 0.44;
  const vc = (seated ? 0.22 : 0.12) * H + 0.35; // figure centre, in front of the face
  // rock slab cut back into the face, dark niche, pilasters and lintel
  box(0, -1.4, wN + 2.8, 2.8, -1, H + 1.3, rock);
  box(0, 0.03, wN + 0.5, 0.1, 0.1, H + 0.55, dark);
  for (const s of [-1, 1]) box(s * (wN / 2 + 0.8), 0.35, 1.0, 0.7, -0.5, H + 1.3, rock);
  box(0, 0.35, wN + 2.6, 0.7, H + 0.5, H + 1.3, rock);
  if (!seated) {
    box(0, vc, H * 0.34, H * 0.2, -0.4, H * 0.05);                        // pedestal
    for (const s of [-1, 1]) box(s * H * 0.055, vc, H * 0.085, H * 0.1, H * 0.05, H * 0.5);   // legs
    M.frustum(...T(0, vc), H * 0.11, H * 0.135, g + H * 0.48, g + H * 0.8, 6, C, { rot: rot * Math.PI / 180 + Math.PI / 6 });
    for (const s of [-1, 1]) box(s * H * 0.155, vc, H * 0.055, H * 0.07, H * 0.42, H * 0.79); // arms
    M.frustum(...T(0, vc), H * 0.035, H * 0.035, g + H * 0.79, g + H * 0.84, 6, C);
    M.lathe(...T(0, vc + 0.01), [[H * 0.05, g + H * 0.835], [H * 0.065, g + H * 0.87], [H * 0.062, g + H * 0.92], [H * 0.045, g + H * 0.96], [0.001, g + H * 0.985]], 8, C);
  } else {
    box(0, vc, H * 0.72, H * 0.42, -0.3, H * 0.1);                         // cushion
    box(0, vc + 0.02 * H, H * 0.66, H * 0.36, H * 0.1, H * 0.27);         // crossed legs
    M.frustum(...T(0, vc - 0.02 * H), H * 0.15, H * 0.17, g + H * 0.26, g + H * 0.66, 6, C, { rot: rot * Math.PI / 180 + Math.PI / 6 });
    box(0, vc + H * 0.12, H * 0.22, H * 0.12, H * 0.27, H * 0.34);        // hands in the lap
    M.lathe(...T(0, vc - 0.02 * H), [[H * 0.06, g + H * 0.66], [H * 0.1, g + H * 0.72], [H * 0.095, g + H * 0.81], [H * 0.065, g + H * 0.88], [0.001, g + H * 0.92]], 8, C);
  }
  W.nav.obstacle({ poly: rectPts(...T(0, vc / 2), wN + 2.6, vc + 0.25 * H, rot), bottom: g - 1, top: g + H });
}
// flat tile band on a facade between plan points p0-p1, facing `out`
function tileBand(W, p0, p1, h0, h1, col, out) {
  const o = 0.05, c = W.col(col);
  const P = (p, h) => V(p[0] + out[0] * o, p[1] + out[1] * o, h);
  const inside = V((p0[0] + p1[0]) / 2 - out[0] * 3, (p0[1] + p1[1]) / 2 - out[1] * 3, (h0 + h1) / 2);
  W.decal.quadAway(P(p0, h0), P(p1, h0), P(p1, h1), P(p0, h1), c, inside);
}
// the Man Mandir frieze: green, turquoise with yellow ducks and green plantains, yellow
function frieze(W, p0, p1, out, base) {
  tileBand(W, p0, p1, base, base + 0.5, 'tileGreen', out);
  tileBand(W, p0, p1, base + 0.9, base + 2.7, 'tile', out);
  tileBand(W, p0, p1, base + 3.1, base + 3.6, 'tileYellow', out);
  const L = Math.hypot(p1[0] - p0[0], p1[1] - p0[1]), n = Math.floor(L / 1.3);
  for (let i = 0; i < n; i++) {
    const t0 = (i + 0.3) / n, t1 = (i + 0.62) / n, t2 = (i + 0.78) / n, t3 = (i + 0.9) / n;
    const at = (t) => [lerp(p0[0], p1[0], t), lerp(p0[1], p1[1], t)];
    W.decal.quadAway(...[[t0, base + 1.5], [t1, base + 1.5], [t1, base + 2.05], [t0, base + 2.05]].map(([t, h]) => { const p = at(t); return V(p[0] + out[0] * 0.08, p[1] + out[1] * 0.08, h); }), W.col('tileYellow'), V(at(0.5)[0] - out[0] * 3, at(0.5)[1] - out[1] * 3, base));
    W.decal.quadAway(...[[t2, base + 1.15], [t3, base + 1.15], [t3, base + 2.45], [t2, base + 2.45]].map(([t, h]) => { const p = at(t); return V(p[0] + out[0] * 0.08, p[1] + out[1] * 0.08, h); }), W.col('tileGreen'), V(at(0.5)[0] - out[0] * 3, at(0.5)[1] - out[1] * 3, base));
  }
}
// tile rings on a round tower of radius r at its top `top`, battered by `batter` (matches its 14 facets)
function friezeRing(W, x, y, r, top, batter, base) {
  const R = (h) => r + batter * (top - h) + 0.07;
  for (const [h0, h1, c] of [[base, base + 0.5, 'tileGreen'], [base + 0.9, base + 2.7, 'tile'], [base + 3.1, base + 3.6, 'tileYellow']]) W.solid.frustum(x, y, R(h0), R(h1), h0, h1, 14, W.col(c), { top: false });
}
// flanking towers for a gate, built here rather than by W.gate: its towers use the default 0.08 batter, and on a
// slope (tower base far below its top) their battered nav footprint closes the passage.
function gateTowers(W, wall, at, width, r, { dh = 1.4, off = 0.6, color, spread = 0.5, chhatri = null, upper = null } = {}) {
  const s = W.wallS(wall, at[0], at[1]);
  if (upper) { const f = W.wallFrame(wall, s); W.chhatri(Object.assign({ x: f.x - f.ox * 0.3, y: f.y - f.oy * 0.3, base: W.wallTopAt(wall, f.x, f.y) + 1.1, dome: 'half', color: color || 'stone' }, upper)); }
  for (const sg of [-1, 1]) {
    const f = W.wallFrame(wall, s + sg * (width / 2 + r + spread));
    W.bastion({ at: [f.x, f.y], wall, r, off, dh, batter: 0.02, color });
    if (chhatri) W.chhatri(Object.assign({ x: f.x + f.ox * off, y: f.y + f.oy * off, base: W.wallTopAt(wall, f.x, f.y) + dh + 0.02, dome: 'half', color: color || 'stone' }, chhatri));
  }
}
// points along a wall's walk for patrols
function walkPts(W, wall, s0, s1, n = 5) {
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const f = W.wallFrame(wall, lerp(s0, s1, i / n));
    const x = f.x - f.ox * 0.5, y = f.y - f.oy * 0.5;
    pts.push([x, y, W.wallTopAt(wall, x, y)]);
  }
  for (let i = n - 1; i > 0; i--) pts.push(pts[i]);
  return pts;
}
// courtyard building: four ranges round a court, optional gap (door) on the south side
function courtBlock(W, cx, cy, w, d, t, o) {
  const pieces = [
    { rect: [cx, cy + d / 2 - t / 2, w, t, 0] },
    { rect: [cx + w / 2 - t / 2, cy, t, d - 2 * t, 0] },
    { rect: [cx - w / 2 + t / 2, cy, t, d - 2 * t, 0] },
  ];
  const gap = o.gap ?? 2.6, half = (w - gap) / 2;
  pieces.push({ rect: [cx - gap / 2 - half / 2, cy - d / 2 + t / 2, half, t, 0] }, { rect: [cx + gap / 2 + half / 2, cy - d / 2 + t / 2, half, t, 0] });
  for (const p of pieces) {
    if (o.ruin) W.ruin(Object.assign({ h: o.ruinH ?? 5, thick: 0.7, color: o.color, base: o.base, doors: [] }, p));
    else W.building(Object.assign({}, o.b, p));
  }
}

// ------------------------------------------------------------------ level
export default {
  id: 'gwalior-hand', name: 'Gwalior', native: { text: 'ग्वालियर', lang: 'hi', script: 'deva' },
  region: 'Gwalior · Madhya Pradesh', type: 'Plateau fort', coords: [26.2313, 78.1695],
  poiCount: POIS.length, groundName: 'Gopachal hill', datum: 0, datumLabel: 'above the plain',
  units: { planScale: 5, vScale: 2.75 },
  bounds: [-170, -382, 98, 120], stride: 2, seed: 6,
  water: null,
  apron: { h: 0 },
  view: { az: -25, el: 38, zoom: 72, introAt: [-30, -140], introZoom: 470 },
  light: { sky: '#e3ded1', sunAz: -40, sunEl: 47 },
  palette: {
    wall: '#8c7a62', wallTop: '#a08d71', trim: '#d8b77e', stone: '#c9a66b', plaster: '#e4dac4', plasterDark: '#c2b190',
    roof: '#8a6a4c', dome: '#d6c39e', rock: '#7a6a55', cliff: '#5f5345', sand: '#c8b27a', road: '#b99f74', court: '#c0aa84',
    paved: '#b7a07a', grass: '#7e8a4a', dry: '#c8b27a', field: '#8d9550', mud: '#6e604c', garden: '#5d7a3a',
    water: '#4f6b5a', tank: '#4f6b5a', leaf: '#5d7a3a', leafDry: '#8a8a48', trunk: '#5e4a36', flag: '#e07b1a', accent: '#d2a53a',
    tile: '#2fa4a0', tileYellow: '#e2b53b', tileGreen: '#4e8f3a', door: '#4a3220', window: '#2c241d',
  },
  eraPalette: {
    '1780': { grass: '#738d40', dry: '#8f9752', leaf: '#4f7a30', field: '#7f9448' },
    '1868': { grass: '#a69d5f', dry: '#bba774', leaf: '#6b7a3c', tile: '#4f948c', tileYellow: '#c7a24c', tileGreen: '#5f8a4c', stone: '#bf9f6a' },
    today: { grass: '#8f924f', dry: '#ad9f6b' },
  },
  eras: [
    { id: '1780', year: '1780', label: 'Popham\'s escalade', short: 'Night escalade', lens: 'engraving',
      summary: 'Before dawn on 4 August 1780 Company sepoys climb the rock by ladder and rope while the Maratha garrison sleeps behind its walls.',
      basis: 'The wash view of the fortress drawn the day after the escalade (British Library, K.Top.115.54.a), John Hicks\'s north-east view with the union flag, and the views by Ward and Hodges of the 1780s; the ladders follow the account of the climb in Encyclopaedia Britannica (1797). Layout from the ASI monument positions.',
      conjecture: 'No source used here names the face of the rock that was scaled, so the ladders stand on the east cliff by guesswork. The state of each building, the Maratha flags and the positions of the garrison are reconstructed.',
      sources: ['GWA-08', 'GWA-09', 'GWA-10', 'GWA-11', 'GWA-12', 'GWA-14', 'GWA-15'] },
    { id: '1868', year: '1868', label: 'From the Residency', short: 'British garrison', lens: 'albumen',
      summary: 'Ten years after 1858 a British garrison holds the rock: sepoys at the gates, barracks beside the old palaces, the tilework fading on the Man Mandir.',
      basis: 'Stanley Leighton\'s watercolour of the whole rock seen from the Residency (10 December 1868), Lala Deen Dayal\'s photographs of the ramp, the Hathi Pol, the Teli ka Mandir gate and the Sas-Bahu hall (c. 1875–85), and Cunningham\'s plan of the palace group.',
      conjecture: 'The barracks, the flagstaff and the condition of each building are inferred; the Man Mandir and the Teli ka Mandir had not yet been restored (1881–83).',
      sources: ['GWA-16', 'GWA-17', 'GWA-18', 'GWA-19', 'GWA-20', 'GWA-21', 'GWA-07'] },
    { id: 'today', year: 'Today', label: 'Monument and school', short: 'Monument', lens: 'none',
      summary: 'Visitors climb the eastern ramp or drive up the Urvai valley past the Jain colossi, while the Scindia School fills the south of the plateau.',
      basis: 'The Murray plans of 1901 and 1911, the Government of India integrated Gwalior Fort master plan, National Monuments Authority satellite monument map, UNESCO Tentative List inventory and present-day descriptions; the Gurdwara Data Bandi Chhor and Scindia School appear only in this view. The available satellite map has not been registered to this scene.',
      sources: ['GWA-22', 'GWA-24', 'GWA-25', 'GWA-26', 'GWA-27', 'GWA-01', 'GWA-02', 'GWA-05'] },
  ],

  terrain: (era) => [
    { op: 'base', h: 0 },
    { op: 'noise', amp: 1.1, scale: 36 },
    // talus apron round the foot of the cliffs, then the sheer plateau
    { op: 'fn', fn: rock },
    // the Urvai ravine cut into the west flank
    { op: 'fn', fn: ravine },
    // stepped rock buttress where the 1780 ladders are drawn
    { op: 'raise', poly: rectPts(28.9, ESC.y, 4.6, 8, 4), h: 28, edge: 1.2, profile: 'linear' },
    { op: 'raise', poly: rectPts(33.2, ESC.y - 0.5, 4.2, 9, 4), h: 20.5, edge: 1.2, profile: 'linear' },
    { op: 'raise', poly: rectPts(37.6, ESC.y - 1, 4.8, 10, 4), h: 13, edge: 1.4, profile: 'linear' },
    // the slope below the east cliff that carries the ramp
    { op: 'fn', fn: shoulder },
    // ledges for the north-east and north-west Jain groups and the Trishala group
    { op: 'flatten', poly: rectPts(32.8, 30.6, 2.6, 9, 4), h: RAMP.G + 7.5, edge: 1 },
    { op: 'flatten', poly: rectPts(-38.8, 30.8, 2.8, 10, 18), h: 9.2, edge: 1.2 },
    { op: 'flatten', poly: rectPts(-131.6, -209, 3.2, 14, 10), h: 8.6, edge: 1.2 },
    // Badalgarh court, palace and the Hathi Pol landing
    { op: 'flatten', poly: [[41.6, 67.2], [66.8, 67.2], [66.8, 101.3], [41.6, 101.3]], h: courtH, edge: 2 },
    { op: 'flatten', poly: rectPts(54, 92.3, 20.6, 15.2, 0), h: GUJ_H, edge: 2.5 },
    { op: 'flatten', poly: rectPts(-1.3, 0.4, 15.6, 31.8, 0), h: TOP_N, edge: 1.5 },
    { op: 'flatten', poly: [[-4, -15.6], [17.4, -15.6], [17.4, -26.2], [-4, -26.2]], h: RAMP.T, edge: 1.5 },
    // the ramp road and the Kabutar Khana terrace
    { op: 'paint', path: CLIMB, w: 24, paint: 'rock' },
    { op: 'ramp', path: RP, w: 5, edge: 2, paint: 'road' },
    { op: 'flatten', poly: KK, h: RAMP.G, edge: 1 },
    { op: 'paint', poly: KK, paint: 'paved' },
    // the Urvai road up the ravine
    { op: 'ramp', path: RAVC, w: era === 'today' ? 6 : 5, edge: 1.6, paint: 'road' },
    // plateau tracks
    { op: 'paint', path: [[3, -21.5], [-4, -34], [-9, -56], [-12, -85], [-14, -112], [-16, -128], [-21, -150], [-28, -170], [-38, -186], [-50, -192], [-57, -204], [-58, -218], [-56, -228]], w: era === 'today' ? 3.8 : 3, paint: 'road' },
    { op: 'paint', path: [[-16, -128], [0, -136], [12, -145], [13, -150]], w: 2.8, paint: 'road' },
    { op: 'paint', path: [[-28, -170], [-22, -181]], w: 2.4, paint: 'road' },
    { op: 'paint', path: [[-1, 16.5], [-2, 21], [-8, 34], [-12, 40], [-8, 52], [-4, 63]], w: 2.6, paint: 'road' },
    { op: 'paint', poly: rectPts(0, 7, 9.6, 10.6, 0), paint: 'paved' },
    { op: 'paint', poly: rectPts(0, -7, 9.6, 10.6, 0), paint: 'paved' },
    { op: 'paint', poly: rectPts(54, 79, 22, 9, 0), paint: era === '1780' ? 'court' : 'paved' },
    ...(era === 'today' ? [{ op: 'paint', poly: rectPts(-50, -294, 26, 15, 6), paint: 'field' }, { op: 'paint', poly: rectPts(-60, -222, 10, 22, 0), paint: 'paved' }] : []),
    { op: 'edge', h: 0, w: 16 },
  ],

  build(W) {
    const era = W.era;
    const old = era === '1780', mid = era === '1868', now = era === 'today';
    const MER = { style: 'kangura', w: 0.85, gap: 0.7, h: 0.9 };

    // ---------------- rim walls and bastions
    const w2 = W.wall({ path: W2_PTS, closed: false, outer: 'left', h: 6, thick: 2.6, batter: 0.05, parapet: { h: 1.1, t: 0.55 }, merlon: MER, color: 'wall' });
    const w1 = W.wall({ path: W1_PTS, closed: false, outer: 'left', h: 6, thick: 2.6, batter: 0.05, parapet: { h: 1.1, t: 0.55 }, merlon: MER, color: 'wall' });
    const gunAt = (k) => (old ? k % 3 === 0 : mid ? k % 7 === 0 : false);
    let k = 0;
    for (let s = 22; s < w2.len - 8; s += 30) { if (Math.abs(s - 66) < 7) continue; const f = W.wallFrame(w2, s); W.bastion({ at: [f.x, f.y], wall: w2, r: 3.1, off: 0.3, dh: 0.6, cannon: gunAt(k++) ? { len: 2.8, r: 0.28 } : false }); }
    for (let s = 14; s < w1.len - 46; s += 29) { const f = W.wallFrame(w1, s); W.bastion({ at: [f.x, f.y], wall: w1, r: 3.1, off: 0.3, dh: 0.6, cannon: gunAt(k++) ? { len: 2.8, r: 0.28 } : false }); }
    // wall-walk stairs
    const stairsAt = (wall, s, dir = 1, run = 11) => { const f = W.wallFrame(wall, s); wallStairs(W, wall, { at: [f.x, f.y], dir, run }); };
    stairsAt(w2, 52 + 22, -1); // beside the escalade point
    stairsAt(w2, 22 + 30 * 4 + 22);
    stairsAt(w1, 14 + 29 * 6 + 21);
    stairsAt(w1, 14 + 29 * 9 + 21);

    // ---------------- Badalgarh court, Alamgiri and Hindola gates, Gujari Mahal
    const court = W.wall({ path: COURT, closed: true, h: 7.5, thick: 2.4, batter: 0.05, parapet: { h: 1.0, t: 0.5 }, merlon: MER, color: 'wall', walk: false });
    W.gate({ wall: court, at: [68, 75.6], width: 3.8, spring: 4.2, rise: 2.3, name: 'Alamgiri Gate', towers: false, trim: 'trim', panel: '#e9dfc8' });
    gateTowers(W, court, [68, 75.6], 3.8, 2.7, { dh: 1.6, off: 0.8, chhatri: { size: 2.4, h: 2.0 }, upper: { size: 3.2, h: 2.6 } });
    W.gate({ wall: court, at: [51.6, 66], width: 3.6, spring: 4.0, rise: 2.1, name: 'Hindola Gate', towers: false, trim: 'trim' });
    gateTowers(W, court, [51.6, 66], 3.6, 2.4, { dh: 1.4, off: 0.7 });
    W.zone(COURT, 'Badalgarh');
    // Gujari Mahal: courtyard palace with corner chhatris, entrance on the south
    courtBlock(W, 54, 92.3, 20, 14.6, 3.6, { gap: 3, b: { base: GUJ_H - 0.3, storeys: 2, storeyH: 3.8, color: 'stone', roof: 'flat', merlon: 'kangura', windows: { style: 'arch', spacing: 2.4, w: 0.9, h: 1.6 }, kind: 'palace' } });
    for (const [x, y, sz] of [[45.4, 86.4, 2.2], [62.6, 86.4, 2.2], [62.6, 98.2, 2.2], [45.4, 98.2, 2.2], [51.3, 86.2, 1.9], [56.7, 86.2, 1.9]]) W.chhatri({ x, y, base: GUJ_H - 0.3 + 7.6, size: sz, h: 1.9, color: 'stone' });
    W.zone(rectPts(54, 92.3, 20, 14.6, 0), 'Gujari Mahal');

    // ---------------- the eastern ramp: gates across the road, outer parapets, the Kabutar Khana
    const cross = (c, d, inner, outer, top) => { const r = [d[1], -d[0]]; return W.wall({ path: [[c[0] + r[0] * inner, c[1] + r[1] * inner], [c[0] - r[0] * outer, c[1] - r[1] * outer]], closed: false, outer: 'left', top, thick: 3.0, batter: 0.05, parapet: { h: 1.0, t: 0.5 }, merlon: MER, color: 'wall', walk: false }); };
    const gw = cross(GATE_G, DIR_G, 7.5, 5.6, RAMP.G + 7.6);
    W.gate({ wall: gw, at: GATE_G, width: 3.6, spring: 4.0, rise: 2.1, name: 'Ganesh Gate', towers: false, trim: 'trim' });
    gateTowers(W, gw, GATE_G, 3.6, 2.3, { dh: 1.4, off: 0.7 });
    const lw = cross(GATE_L, DIR_L, 6.5, 5.4, RAMP.L + 7.6);
    W.gate({ wall: lw, at: GATE_L, width: 3.6, spring: 4.0, rise: 2.1, name: 'Lakshman Gate', towers: false, trim: 'trim' });
    gateTowers(W, lw, GATE_L, 3.6, 2.2, { dh: 1.4, off: 0.7 });
    const par = (path) => W.wall({ path, closed: false, outer: 'left', h: 0.7, thick: 1.2, batter: 0.03, parapet: { h: 0.9, t: 0.45 }, merlon: { style: 'kangura', w: 0.6, gap: 0.55, h: 0.6 }, color: 'wall', walk: false, sink: 1.2 });
    // P1: Hindola -> the Kabutar Khana, then round the outwork to the Ganesh gate's outer tower
    const p1 = left2(subPath(RP, RS[6] - 2.3, RS[9] - 0.2), 3.15);
    par([...p1, [58.9, 47.0], [58.5, 40.7], [52.6, 40.6]]);
    par(left2(subPath(RP, S_GANESH + 2.3, S_LAKSH - 2.3), 3.15));
    par([...left2(subPath(RP, S_LAKSH + 2.3, RS[19]), 3.15), [17.2, -25.8], [10.4, -25.8]]);
    W.zone(left2(RP.slice(6, 20), 4.5).concat(left2(RP.slice(6, 20), -4.5).reverse()), 'Eastern ramp');
    // Kabutar Khana: Nur Saugar tank, Gwalipa's pavilion, the small mosque of 1664
    W.tank({ poly: rectPts(53.6, 43.6, 4.4, 2.8, 8), waterDepth: 1.8, tiers: 3, color: 'stone' });
    W.chhatri({ x: 56.4, y: 45.0, base: RAMP.G, size: 2.0, h: 2.1, dome: 'half', color: 'stone' });
    W.mosque({ x: 56.5, y: 42.4, w: 3.0, d: 2.0, rot: 90, h: 3.0, domes: 1, minarets: 0, color: old ? 'plaster' : 'plasterDark', base: RAMP.G - 0.2 });
    W.zone(KK, 'Kabutar Khana');
    // Chaturbhuj Mandir: rock-cut cell beside the road
    W.tunnel({ path: [CHAT.a, CHAT.b], w: 3.2, height: 3.3, name: 'Chaturbhuj Mandir' });
    // north-east Jain group, carved in the spur above the ramp
    for (const [y, H] of [[27.6, 6.5], [30.6, 8.5], [33.6, 6.5]]) { const f = faceFoot(W, 33.8, y, -1, 0); colossus(W, f.x, f.y, H, 0, { base: f.g }); }

    // ---------------- Man Mandir
    const PB = { color: 'stone', roof: 'flat', parapet: { h: 0.7, t: 0.3 }, kind: 'palace', windows: { style: 'arch', spacing: 2.2, w: 0.8, h: 1.5 }, storeys: 2, storeyH: 4.1 };
    const pal = (rect, extra = {}) => W.building(Object.assign({ rect, base: TOP_N - 0.3 }, PB, extra));
    pal([-6.5, 11.9, 3, 7.2, 0]); pal([-6.5, 0, 3, 11.4, 0]); pal([-6.5, -11.9, 3, 7.2, 0]);
    pal([0, 14, 10, 3, 0]); pal([0, 0, 10, 3, 0]); pal([0, -14, 10, 3, 0]);
    W.building({ rect: [6.75, 0, 3.5, 31, 0], base: 23.5, h: 21.8, storeys: 5, storeyH: 4.36, color: 'stone', roof: 'flat', parapet: { h: 0.8, t: 0.35 }, merlon: 'kangura', kind: 'palace', windows: { style: 'arch', spacing: 2.6, w: 0.9, h: 1.6, rows: [2, 3] } });
    const ROOF = 23.5 + 21.8;
    frieze(W, [8.5, 15.5], [8.5, -15.5], [1, 0], ROOF - 4.6);
    frieze(W, [-8, -15.5], [5, -15.5], [0, -1], ROOF - 4.6);
    for (const y of [13, 7.8, 2.6, -2.6, -7.8, -13]) {
      const top = ROOF + 1.9;
      W.bastion({ at: [8.75, y], r: 1.9, top, parapet: false, walk: false, color: 'stone', planCls: 'tower', sink: 0.6, batter: 0.02 });
      friezeRing(W, 8.75, y, 1.9, top, 0.02, ROOF - 4.6);
      W.chhatri({ x: 8.75, y, base: top, size: 2.7, h: 2.1, dome: 'half', color: 'stone' });
    }
    W.zone(rectPts(0, 7, 10, 11, 0), 'Man Mandir courtyard');
    W.zone(rectPts(0, -7, 10, 11, 0), 'Man Mandir courtyard');
    // Hathi Pol: tall gate wall at the palace's south-east corner with domed towers
    const hw = W.wall({ path: [[7.3, -15.3], [7.3, HATHI_S]], closed: false, outer: 'left', top: RAMP.T + 9.5, thick: 3.0, batter: 0.04, parapet: { h: 1.1, t: 0.55 }, merlon: MER, color: 'stone', walk: false });
    W.gate({ wall: hw, at: [7.3, HATHI_Y], width: 3.8, spring: 4.6, rise: 2.4, name: 'Hathi Pol', towers: false, trim: 'trim', panel: '#2fa4a0' });
    gateTowers(W, hw, [7.3, HATHI_Y], 3.8, 2.4, { dh: 2.8, off: 0.3, color: 'stone', chhatri: { size: 2.9, h: 2.3 }, upper: { size: 3.4, h: 2.6 } });
    for (const y of [HATHI_Y - 4.8, HATHI_Y + 4.8]) friezeRing(W, 7.6, y, 2.4, RAMP.T + 9.5 + 2.8, 0.02, RAMP.T + 7.2);
    W.zone(rectPts(3, HATHI_Y, 8, 8, 0), 'Palace plaza');

    // ---------------- northern palaces, Jauhar Kund, chhatri of Bhim Singh Rana
    W.building({ rect: [-1, 25.5, 15, 8.5, 0], storeys: 2, storeyH: 3.8, color: 'stone', roof: 'flat', merlon: 'kangura', kind: 'palace', windows: { style: 'arch', spacing: 2.3 } });
    W.pavilion({ x: -1, y: 25.5, w: 6, d: 4.4, base: W.ground(-1, 25.5) - 0.3 + 7.6, plinth: 0, colH: 2.6, cols: [4, 3], roof: 'flat', color: 'stone', walk: false, stairs: false });
    W.building({ rect: [-22.5, 21, 7, 16, 0], storeys: 2, storeyH: 3.6, color: 'stone', roof: 'flat', kind: 'palace', windows: { style: 'arch', spacing: 2.3 }, chhatris: [[-22.5, 26.5], [-22.5, 15.5]], chhatriSize: 2.0 });
    const mughal = old ? { b: { base: TOP_N - 0.5, storeys: 2, storeyH: 3.6, color: 'plaster', roof: 'flat', merlon: 'kangura', kind: 'palace', windows: { style: 'arch', spacing: 2.2 } } } : { ruin: true, base: TOP_N - 0.5, ruinH: mid ? 6.2 : 5.2, color: mid ? 'plasterDark' : 'stone' };
    courtBlock(W, -6, 45.5, 14, 11, 2.6, mughal);   // Jahangir Mahal
    courtBlock(W, -4.5, 59.5, 13, 9, 2.5, mughal);  // Shah Jahan Mahal (faces it)
    W.zone(rectPts(-6, 45.5, 14, 11, 0), 'Jahangir Mahal');
    W.zone(rectPts(-4.5, 59.5, 13, 9, 0), 'Shah Jahan Mahal');
    W.tank({ poly: rectPts(-21, 46, 9, 7, -8), waterDepth: 2.4, tiers: 4, color: 'stone' });
    const cp = W.platform({ poly: rectPts(-22, 35.4, 6.4, 6.4, 0), dh: 1.2, color: 'stone' });
    W.stairs({ from: [-22, 40.6], to: [-22, 38.65, cp], w: 2.2, color: 'stone' });
    W.chhatri({ x: -22, y: 35.4, base: cp, size: 4.4, h: 3.3, dome: 'half', color: 'stone' });
    W.zone(rectPts(-21, 41, 12, 16, -8), 'Jauhar Kund');
    if (!old) {
      // British barracks at the north end
      for (const [x, y, w, d, r] of [[-1.5, 67, 14, 5, -10], [18.5, 33, 5, 15, 8]]) W.building({ rect: [x, y, w, d, r], h: 4.4, color: now ? 'plasterDark' : 'plaster', roof: 'tiled', roofColor: '#8f6d52', windows: { style: 'rect', spacing: 2.2, w: 0.8, h: 1.4 }, kind: 'barracks' });
    }

    // ---------------- centre and south of the plateau
    // Sas-Bahu: the larger temple in three storeys of beams and pillars, the smaller beside it
    const sbG = W.platform({ poly: rectPts(SB[0], SB[1], 19, 15, 0), dh: 1.4, color: '#8f4e38' });
    W.stairs({ from: [SB[0] + 12.3, SB[1]], to: [SB[0] + 9.55, SB[1], sbG], w: 3.4, color: '#8f4e38' });
    W.building({ rect: [SB[0] - 1, SB[1], 14, 11, 0], base: sbG - 0.05, h: 4.8, color: RED, roof: 'flat', parapet: false, kind: 'temple', windows: { style: 'rect', spacing: 1.7, w: 1.0, h: 2.8, sill: 0.7 } });
    W.building({ rect: [SB[0] - 1, SB[1], 12, 9.4, 0], base: sbG + 4.75, h: 4.0, color: RED, roof: 'flat', parapet: false, kind: 'temple', windows: { style: 'rect', spacing: 1.7, w: 0.9, h: 2.2, sill: 0.7 } });
    W.building({ rect: [SB[0] - 1, SB[1], 10, 7.8, 0], base: sbG + 8.75, h: 3.5, color: RED, roof: 'stepped', roofH: 4.6, steps: 5, roofColor: RED, kind: 'temple', windows: { style: 'rect', spacing: 1.7, w: 0.8, h: 1.8, sill: 0.6 } });
    W.pavilion({ x: 18.5, y: -143.6, w: 7, d: 7, rot: 0, plinth: 1.3, colH: 3.6, cols: [4, 4], roof: 'stepped', roofH: 3.4, color: RED, stairSide: 1, kind: 'temple' });
    W.zone(rectPts(18, -151, 24, 26, 0), 'Sas-Bahu temples');
    // Suraj Kund
    W.tank({ poly: rectPts(SURAJ[0], SURAJ[1], 17, 10, 4), waterDepth: 2.6, tiers: 5, color: 'stone' });
    W.zone(rectPts(SURAJ[0], SURAJ[1], 21, 14, 4), 'Suraj Kund');
    // Teli ka Mandir (wagon-vaulted), gateway and forecourt today
    W.temple({ x: TELI[0], y: TELI[1], rot: 90, w: 9, h: 14, plinth: 1.6, style: 'wagon', mandapa: false, color: TELI_C });
    W.zone(rectPts(TELI[0] + 3, TELI[1], 22, 16, 0), 'Teli ka Mandir');
    if (now) {
      const gx = TELI[0] + 13.5, gy = TELI[1], g = W.ground(gx, gy) - 0.2;
      for (const s of [-1, 1]) W.building({ rect: [gx, gy + s * 2.3, 1.1, 1.1, 0], base: g, h: 6.2, color: TELI_C, roof: 'flat', parapet: false, windows: false, kind: 'temple' });
      W.building({ rect: [gx, gy, 1.3, 6, 0], base: g + 5.0, h: 1.5, color: TELI_C, roof: 'pyramid', roofH: 1.4, parapet: false, windows: false, kind: 'temple' });
    }
    // Gurdwara Data Bandi Chhor and the Scindia School (today only)
    if (now) {
      const gp = W.platform({ poly: rectPts(GURD[0], GURD[1], 16, 16, 0), dh: 0.9, color: '#e6dfcf' });
      W.stairs({ from: [GURD[0] - 10.4, GURD[1] + 2], to: [GURD[0] - 8.05, GURD[1] + 2, gp], w: 3, color: '#e6dfcf' });
      W.building({ rect: [GURD[0] + 1, GURD[1], 10, 10, 0], base: gp - 0.05, storeys: 2, storeyH: 3.6, color: PLASTER_NEW, roof: 'dome', domes: [{ x: GURD[0] + 1, y: GURD[1], r: 3.0, shape: 'onion', drum: 1.0 }], domeColor: '#d8b03a', chhatris: 'corners', chhatriSize: 1.5, chhatriH: 1.4, chhatriDome: 'onion', windows: { style: 'arch', spacing: 2.0, w: 0.9, h: 1.7 }, kind: 'temple' });
      W.flag({ x: GURD[0] - 5.5, y: GURD[1] - 5.5, h: gp, pole: 13, color: '#ef8a17', size: 1.5 });
      W.zone(rectPts(GURD[0], GURD[1], 18, 18, 0), 'Gurdwara Data Bandi Chhor');
      W.wall({ path: SCHOOL, closed: true, h: 2.6, thick: 0.8, batter: 0, parapet: false, merlon: false, color: PLASTER_NEW, walk: false });
      W.building({ rect: [-51, -271, 26, 7.5, 2], storeys: 2, storeyH: 3.8, color: PLASTER_NEW, roof: 'flat', parapet: { h: 0.9, t: 0.3 }, chhatris: 'corners', chhatriSize: 1.7, windows: { style: 'arch', spacing: 2.0, w: 0.9, h: 1.7 }, kind: 'building' });
      W.building({ rect: [-63, -309, 12, 6.5, -4], storeys: 2, storeyH: 3.5, color: PLASTER_NEW, roof: 'flat', windows: { style: 'rect', spacing: 2.0 }, kind: 'building' });
      W.building({ rect: [-38, -309, 12, 6.5, 6], storeys: 2, storeyH: 3.5, color: PLASTER_NEW, roof: 'flat', windows: { style: 'rect', spacing: 2.0 }, kind: 'building' });
      W.zone(SCHOOL, 'Scindia School');
    }

    // ---------------- the Urvai valley: Urwai Gate and the Jain colossi
    const uw = W.wall({ path: [[-139.5, -193.5], [-139.5, -160]], closed: false, outer: 'left', top: 7.0 + 8.2, thick: 3.2, batter: 0.05, parapet: { h: 1.1, t: 0.55 }, merlon: MER, color: 'wall', walk: false });
    W.gate({ wall: uw, at: [-139.5, -176.7], width: 3.8, spring: 4.2, rise: 2.2, name: 'Urwai Gate', towers: false, trim: 'trim' });
    gateTowers(W, uw, [-139.5, -176.7], 3.8, 2.4, { dh: 1.5, off: 0.8 });
    W.zone(left2(RAVC.slice(2, 10), 7).concat(left2(RAVC.slice(2, 10), -7).reverse()), 'Urvai valley');
    // standing (kayotsarga) and seated (padmasana) figures on both walls; the tallest is the Adinatha
    const figs = [[11, 1, 7], [17.5, 1, 4.5, true], [25, 1, 12.5], [34, 1, 8], [42, 1, 6], [13.5, -1, 8], [21, -1, 6.5], [29.5, -1, 9.5], [37.5, -1, 5, true], [45, -1, 6.5]];
    for (const [ds, side, H, seated] of figs) {
      const p = ravWall(RAVS[3] + ds, side, 0), q = pointAtS(RAVC, RAVS[3] + ds);
      const f = faceFoot(W, q[0] + p.n[0] * 3.2, q[1] + p.n[1] * 3.2, p.n[0], p.n[1]);
      colossus(W, f.x, f.y, H, p.face, { seated, base: f.g });
    }
    // Trishala group on the outer cliff south of the gate; north-west (Neminath) group
    for (const [y, H] of [[-214, 7], [-209, 9], [-204, 6.5]]) { const f = faceFoot(W, -132.6, y, 1, 0.15); colossus(W, f.x, f.y, H, 189, { base: f.g }); }
    for (const [y, H] of [[27.4, 6.5], [31, 8.5], [34.6, 6]]) { const f = faceFoot(W, -39.8, y, 0.95, 0.31); colossus(W, f.x, f.y, H, 198, { base: f.g }); }
    W.label(-100, -168, 'URVAI VALLEY');

    // ---------------- the 1780 escalade: ladders up the stepped buttress and a rope ladder from the battlements
    if (old) {
      const y0 = ESC.y;
      // the climb, crag to crag: two ladders to the first ledge, then one per ledge, a rope ladder to the rock top,
      // and a rope ladder up the wall to the battlements (each a siege ladder: climbed one man at a time, can be thrown down)
      W.ladder({ foot: [42.9, y0 - 1.2, W.ground(42.9, y0 - 1.2)], top: [40.2, y0 - 1.2, 13.15] });
      W.ladder({ foot: [42.7, y0 + 2.6, W.ground(42.7, y0 + 2.6)], top: [40.2, y0 + 2.6, 13.15] });
      W.ladder({ foot: [36.7, y0 + 1.4, 13.0], top: [34.2, y0 + 1.4, 20.6] });
      W.ladder({ foot: [32.7, y0 - 2.4, 20.5], top: [30.2, y0 - 2.4, 28.1] });
      W.ladder({ foot: [28.6, y0 + 1.0, 28.0], top: [26.3, y0 + 1.0, TOPF(26, y0) + 0.15], rope: true });
      const f = W.wallFrame(w2, W.wallS(w2, 22, y0));
      const top = W.wallTopAt(w2, f.x, f.y) + 1.1;
      const ox = f.x + f.ox * 1.45, oy = f.y + f.oy * 1.45;
      W.ladder({ foot: [ox + f.ox * 0.4, oy + f.oy * 0.4, TOPF(ox, oy)], top: [ox, oy, top], rope: true });
      // where the climbers step off onto the wall-walk
      W.escTop = [f.x - f.ox * 0.6, f.y - f.oy * 0.6, W.wallTopAt(w2, f.x, f.y)];
      // the battle: you lead the escalade; the garrison sleeps behind its walls
      const g = (x, y) => W.ground(x, y), et = W.escTop;
      W.def.battles = { '1780': {
        title: 'The escalade of Gwalior',
        text: 'Before dawn in the rains of August 1780. Captain Bruce\'s storming party is at the foot of the rock with ladders laid crag to crag and a rope ladder ready for the battlements; Popham\'s battalion waits below. Get men up the ladders and over the wall without waking the garrison, then take the court of the Man Mandir.',
        note: 'The escalade is recorded; the numbers, the sentries and the positions of the garrison here are a reconstruction. When the alarm was raised the Maratha garrison fell back to the inner buildings and then fled; the fort was taken with few losses. No source used here names the face that was scaled.',
        startToast: 'The storming party is at the foot of the rock',
        alarmText: 'The sentries have seen you: the alarm is raised!',
        surprise: true, hour: 3.6, season: 'monsoon', weather: 'overcast',
        clearSoldiers: /sepoy|officer|guard-maratha|musketeer-maratha/,
        climb: [[0, 1], 2, 3, 4, 5], climbEnd: et,
        own: [
          { name: 'Bruce\'s storming party', kind: 'sepoy', arms: 'musket', n: 6, at: [46, ESC.y], h: g(46, ESC.y), facing: 180, formation: 'open', retreat: [52, ESC.y], morale: 80 },
          { name: 'Grenadier company', kind: 'sepoy', arms: 'musket', n: 10, at: [50, ESC.y + 4], h: g(50, ESC.y + 4), facing: 180, retreat: [56, ESC.y], morale: 75 },
          { name: 'Popham\'s battalion', kind: 'sepoy', arms: 'musket', n: 16, at: [56, ESC.y - 3], h: g(56, ESC.y - 3), facing: 180, formation: 'column', retreat: [62, ESC.y], morale: 72 },
        ],
        enemy: [
          { name: 'Sentries on the wall', kind: 'guard-maratha', arms: 'spear', n: 2, at: [et[0] - 6, et[1] + 18], h: W.ground(et[0] - 6, et[1] + 18), sentry: true, morale: 45, retreat: [0, 7] },
          { name: 'Maratha guard, the palace', kind: 'guard-maratha', arms: 'spear', n: 12, at: [0, 7], asleep: true, morale: 42, retreat: [-60, 60] },
          { name: 'Maratha musketeers, Hathi Pol', kind: 'musketeer-maratha', arms: 'musket', n: 10, at: [6, ESC.y + 14], asleep: true, morale: 40, retreat: [-60, 60] },
        ],
        holdPoly: [[-12, -10], [12, -10], [12, 16], [-12, 16]],
        wonTitle: 'Gwalior is taken',
        won: 'The court of the Man Mandir is yours and the garrison has gone. In 1780 the fortress thought unassailable fell in a night, with few losses.',
        lostTitle: 'The escalade has failed',
        lost: 'Your companies are beaten off. In 1780 the escalade succeeded: surprise and the rope ladder at the battlements carried it.',
      } };
    }

    // ---------------- town at the north-east foot
    const townN = [[71.5, 79.5], [93, 79.5], [93, 112], [71.5, 112]], townS = [[71.5, 40], [93, 40], [93, 72], [71.5, 72]];
    const hopt = { size: [4, 7], h: [1, 2], colors: ['plaster', 'plasterDark'], roof: now ? 'flat' : 'mix', roofColor: 'roof', rot: 0, spacing: 1.6 };
    W.houses(Object.assign({ poly: townN, count: 16, seed: 3 }, hopt));
    W.houses(Object.assign({ poly: townS, count: 16, seed: 8 }, hopt));

    // ---------------- flags and guns
    if (old) {
      W.flag({ x: 0.5, y: 0, h: ROOF, pole: 7, color: '#e07b1a', size: 1.8 });
      W.flag({ x: 6.2, y: HATHI_Y, h: RAMP.T + 9.5, pole: 4.5, color: '#e07b1a', size: 1.2 });
      W.flag({ x: 66, y: 75.6, h: W.ground(68, 75.6) + 7.5, pole: 4.5, color: '#e07b1a', size: 1.2 });
    } else if (mid) {
      W.flag({ x: 0.5, y: 0, h: ROOF, pole: 8, color: '#2b3f6c', size: 1.8 });
    }

    // ---------------- vegetation
    const avoidRav = [left2(RAVC, 9).concat(left2(RAVC, -9).reverse())];
    W.trees({ poly: PLAT_IN, count: old ? 50 : mid ? 85 : 60, types: { neem: 2, acacia: 3, khejri: 1, round: 1, shrub: 4 }, s: [0.8, 1.25], minDist: 5, seed: 31, avoid: avoidRav });
    W.trees({ poly: PLAT_IN, count: mid ? 160 : old ? 70 : 60, types: { grass: 3, shrub: 1 }, s: [0.7, 1.2], minDist: 2.2, seed: 32, pad: 0.8, avoid: avoidRav });
    W.trees({ poly: PLAT_OUT, count: old ? 90 : mid ? 120 : 85, types: { acacia: 3, shrub: 4, khejri: 1 }, s: [0.8, 1.3], minDist: 4, seed: 33, avoid: [PLAT, COURT, townN, townS] });
    W.trees({ poly: avoidRav[0], count: mid ? 18 : 10, types: { shrub: 3, acacia: 1 }, s: [0.7, 1.1], minDist: 3, seed: 34 });
    for (const [x, y] of [[-30, -184], [-9, -194], [-14, -200], [-25, -198], [-28, 52], [-14, 51], [-60, -238], [-74, -218], [24, -166], [9, -150]]) if (W.isFree(x, y, 1.5)) W.tree({ x, y, type: 'neem', s: 1.1 });
    if (now) W.trees({ poly: SCHOOL, count: 26, types: { neem: 2, round: 2, ashoka: 1 }, s: [0.9, 1.3], minDist: 5, seed: 35 });
    if (!now) W.boulders({ x: TELI[0], y: TELI[1], r: 12, count: mid ? 10 : 6, s: [0.5, 1.3], seed: 7 });

    // ---------------- scenery: the ring of hills round the town (EB 1860)
    for (const [x, y, r, h] of [[-720, -160, 170, 16], [-560, 380, 150, 12], [620, -380, 160, 14], [-200, -900, 220, 18]]) W.scenery({ hill: { x, y, r, h }, color: 'dry', h0: 0, seg: 16 });

    // ---------------- people
    if (old) {
      const esc = [ESC.y];
      // storming party on the buttress, at the wall and inside; Popham's battalions at the foot
      W.npc({ kind: 'sepoy', at: [38.2, esc[0] - 2.5], h: 13, mode: 'idle', face: 180 });
      W.npc({ kind: 'sepoy', at: [37.2, esc[0] + 2.4], h: 13, mode: 'idle', face: 200 });
      W.npc({ kind: 'sepoy', at: [33.2, esc[0] + 1.8], h: 20.5, mode: 'idle', face: 180 });
      W.npc({ kind: 'sepoy', at: [32.6, esc[0] - 4.2], h: 20.5, mode: 'idle', face: 160 });
      W.npc({ kind: 'officer', at: [29.2, esc[0] - 1.5], h: 28, mode: 'idle', face: 180 });
      W.npc({ kind: 'sepoy', at: [28.4, esc[0] + 2.6], h: 28, mode: 'idle', face: 170 });
      W.npc({ kind: 'sepoy', at: [24.4, esc[0] - 3], h: TOPF(24, esc[0]), mode: 'idle', face: 150 });
      W.npc({ kind: 'sepoy', circle: [15.5, esc[0], 5], count: 4, speed: 1.6 });
      W.npc({ kind: 'sepoy', circle: [47, esc[0] - 2, 6], count: 8 });
      W.npc({ kind: 'officer', at: [45, esc[0] + 2], mode: 'idle', face: 180 });
      // the Maratha garrison: sentries, gate guards, men running to the alarm
      W.npc({ kind: 'guard-maratha', patrol: walkPts(W, w1, 120, 230, 5), count: 2 });
      W.npc({ kind: 'guard-maratha', patrol: walkPts(W, w2, 90, 200, 5), count: 2 });
      W.npc({ kind: 'guard-maratha', circle: [6, esc[0] + 14, 8], count: 4, speed: 1.9 });
      for (const [x, y] of [[66, 72.6], [66, 78.6], [49, 67.8], [44.2, 41.6], [21.4, 15.4], [11.6, -18.2], [-135.2, -173.6]]) W.npc({ kind: 'guard-maratha', at: [x, y], mode: 'idle', face: 90 });
      W.npc({ kind: 'courtier', circle: [0, -7, 3.5], count: 2 });
      W.npc({ kind: 'guard-maratha', circle: [0, 7, 3.5], count: 2 });
      W.npc({ kind: 'elephant', at: [2, -24], mode: 'idle', face: 90 });
      W.npc({ kind: 'horse', circle: [-6, -32, 5], count: 2 });
      W.npc({ kind: 'villager', zone: townN, count: 3 }); W.npc({ kind: 'woman-red', zone: townS, count: 2 });
      W.npc({ kind: 'merchant', circle: [56, 78, 6], count: 1 });
    } else if (mid) {
      for (const [x, y, f] of [[66, 72.4, 90], [11.6, -18.0, 90], [-135.2, -173.6, 270], [44.0, 41.8, 60]]) W.npc({ kind: 'sepoy', at: [x, y], mode: 'idle', face: f });
      W.npc({ kind: 'sepoy', patrol: walkPts(W, w1, 230, 290, 4), count: 1 });
      W.npc({ kind: 'officer', circle: [0, 7, 3.2], count: 1 }); W.npc({ kind: 'lady', circle: [0, 7, 3.2], count: 1 });
      W.npc({ kind: 'officer', circle: [-8, 66, 6], count: 1 });
      W.npc({ kind: 'sepoy', circle: [10, 40, 8], count: 3 });
      W.npc({ kind: 'elephant', at: [48.6, 52], mode: 'idle', face: 160 });
      W.npc({ kind: 'villager', circle: [40, 28, 4], count: 1 }); W.npc({ kind: 'camel', circle: [58, 80, 5], count: 1 });
      W.npc({ kind: 'priest', circle: [28, -150, 3], count: 1 }); W.npc({ kind: 'pilgrim', circle: [-22, -181, 4], count: 1 });
      W.npc({ kind: 'cow', zone: townN, count: 2 }); W.npc({ kind: 'goat', circle: [60, 58, 6], count: 3 });
      W.npc({ kind: 'villager', zone: townN, count: 2 }); W.npc({ kind: 'woman-green', zone: townS, count: 2 });
    } else {
      W.npc({ kind: 'tourist-a', circle: [54, 79, 7], count: 2 }); W.npc({ kind: 'tourist-c', circle: [58, 76, 5], count: 1 });
      W.npc({ kind: 'tourist-b', circle: [0, 7, 3.5], count: 2 }); W.npc({ kind: 'tourist-d', circle: [0, -7, 3.5], count: 2 });
      W.npc({ kind: 'tourist-c', circle: [2, -24, 6], count: 2 }); W.npc({ kind: 'asi-guard', at: [11.8, -18], mode: 'idle', face: 90 });
      W.npc({ kind: 'tourist-a', circle: [44, 40, 3], count: 1 }); W.npc({ kind: 'tourist-d', circle: [25, 14, 3], count: 1 });
      W.npc({ kind: 'tourist-b', circle: [28, -152, 4], count: 2 }); W.npc({ kind: 'tourist-c', circle: [-54, -228, 5], count: 3 });
      W.npc({ kind: 'asi-guard', at: [-56, -224], mode: 'idle', face: 0 }); W.npc({ kind: 'tourist-a', circle: [-20, -182, 4], count: 1 });
      W.npc({ kind: 'pilgrim', circle: [-52, -199, 4], count: 3 }); W.npc({ kind: 'woman-indigo', circle: [-50, -196, 4], count: 2 });
      W.npc({ kind: 'student', zone: [[-74, -276], [-30, -276], [-24, -300], [-70, -300]], count: 6, speed: 1.4 });
      W.npc({ kind: 'tourist-d', circle: [-117, -176, 6], count: 2 }); W.npc({ kind: 'tourist-b', circle: [-14, 41, 5], count: 1 });
      W.npc({ kind: 'villager', zone: townN, count: 2 }); W.npc({ kind: 'woman-red', zone: townS, count: 2 });
    }

    // ---------------- places
    for (const p of POIS) W.poi(Object.assign({}, p, { eraNote: p.eraNote?.[era] || null }));
    W.wildlife({ kinds: { peafowl: 5, macaque: 6 } });
    W.wildlife({ kinds: { macaque: 4 }, walls: true, s: 0.25 });
    W.spawn(75, 75.7, 1.4, 270);
  },
};
