// 04 · Golconda — Qutb Shahi citadel and walled city, Hyderabad, Telangana.
// Plan units: 1 unit = 2.5 m (planScale 2.5). The 120 m granite hill is compressed the same way (46 units,
// vScale 2.5); buildings, gates, walls and steps stay at human scale. The layout follows the schematic
// placement table and route in research/golconda.md (sections 5-9), itself a design estimate: no measured
// plan of the fort was found. Origin = the Bala Hisar summit; the Bala Hisar Darwaza faces east and the
// Fateh Darwaza sits at the south-east corner of the outer city wall.
import { rectPts, ellipsePts, regularPoly, wallStairs } from './kit.js';
import { TAG } from '../core/nav.js';

// ------------------------------------------------------------------ small helpers
const D2R = Math.PI / 180;
const dist = (a, b) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const pathLen = (p) => { let L = 0; for (let i = 1; i < p.length; i++) L += dist(p[i - 1], p[i]); return L; };
// point and unit tangent at arc length s along an open polyline
function along(p, s) {
  let acc = 0;
  for (let i = 1; i < p.length; i++) {
    const L = dist(p[i - 1], p[i]);
    if (acc + L >= s || i === p.length - 1) {
      const t = Math.max(0, Math.min(1, (s - acc) / (L || 1)));
      const tx = (p[i][0] - p[i - 1][0]) / (L || 1), ty = (p[i][1] - p[i - 1][1]) / (L || 1);
      return { x: p[i - 1][0] + (p[i][0] - p[i - 1][0]) * t, y: p[i - 1][1] + (p[i][1] - p[i - 1][1]) * t, tx, ty };
    }
    acc += L;
  }
  return { x: p[0][0], y: p[0][1], tx: 1, ty: 0 };
}
// offset an open polyline sideways by d (positive = left of travel), mitred
function offsetPath(p, d) {
  return p.map((q, i) => {
    const a = p[Math.max(0, i - 1)], b = p[Math.min(p.length - 1, i + 1)];
    const L = dist(a, b) || 1;
    return [q[0] - (b[1] - a[1]) / L * d, q[1] + (b[0] - a[0]) / L * d];
  });
}
// rectangles along a polyline (used to keep scatter off roads and paths)
function corridor(p, w) {
  const out = [];
  for (let i = 1; i < p.length; i++) {
    const a = p[i - 1], b = p[i];
    out.push(rectPts((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, dist(a, b) + w, w, Math.atan2(b[1] - a[1], b[0] - a[0]) / D2R));
  }
  return out;
}
// closed strip polygon around an open polyline
function strip(p, w) { return offsetPath(p, w / 2).concat(offsetPath(p, -w / 2).reverse()); }

// ------------------------------------------------------------------ layout (plan units, x east, y north)
const SUMMIT_H = 46;
const PLATEAU = ellipsePts(0, 0, 15, 12, 28, 0, 0.03, 3);

// The Bala Hisar hill: a granite dome whose reach and profile change with direction. It runs out furthest to
// the east-south-east (the spur the climb follows) and the south-east (palace terraces); its north and west
// faces are short and steep. Sheet rock breaks into treads and steep risers, so the steps are the way up.
// rows: [bearing deg from east, radius, profile exponent]
const HILL_RK = [[-180, 58, 1.6], [-135, 60, 1.5], [-110, 62, 1.3], [-90, 66, 1.2], [-70, 74, 1.2], [-50, 92, 1.2], [-25, 102, 1.25],
  [-5, 94, 1.45], [15, 92, 1.8], [36, 92, 2.0], [60, 74, 1.8], [90, 60, 1.6], [135, 58, 1.6], [180, 58, 1.6]];
function hillRK(deg) {
  for (let i = 1; i < HILL_RK.length; i++) {
    if (deg <= HILL_RK[i][0]) {
      const [a0, r0, k0] = HILL_RK[i - 1], [a1, r1, k1] = HILL_RK[i], t = (deg - a0) / (a1 - a0);
      return [r0 + (r1 - r0) * t, k0 + (k1 - k0) * t];
    }
  }
  return [58, 1.6];
}
const STEP = 5.5;
function hillH(x, y) {
  const [R, k] = hillRK(Math.atan2(y, x) / D2R);
  const q = Math.hypot(x, y) / R;
  if (q >= 1) return -Infinity;
  const t = Math.max(0, (q - 0.12) / 0.88);
  const h = SUMMIT_H * (1 - Math.pow(t, k));
  const f = h / STEP, i = Math.floor(f), u = f - i;
  const v = u < 0.45 ? 0 : (u - 0.45) / 0.55;
  return STEP * (i + v * v * (3 - 2 * v));
}
const hillPoly = (k, n = 48) => Array.from({ length: n }, (_, i) => { const a = -180 + (360 * i) / n; const R = hillRK(a)[0] * k; return [Math.cos(a * D2R) * R, Math.sin(a * D2R) * R]; });

// The climb, about 380 steps: court -> Akkanna-Madanna -> Ramdas jail -> Ambar Khana -> Mahakali -> mosque -> summit.
// Each pair of points is one flight or landing; hairpins at the turns.
const CLIMB = [
  [101, -28, 0.6], [90, -26, 0.7],
  [77, -36, 8.0], [75, -35, 8.1],          // hairpin 1: Akkanna-Madanna offices
  [71, -19, 15.3], [69, -17, 15.4],        // hairpin 2: Ramdas Bandikhana
  [56, -27, 22.6], [54, -26, 22.7],        // hairpin 3
  [50, -10, 29.9], [53, -2, 29.9],         // Ambar Khana terrace
  [46, 11, 36.2], [44, 12, 36.3],          // Mahakali / Jagadamba landing
  [36, 17, 40.0], [25, 15, 40.0],          // Ibrahim's mosque terrace
  [12.5, 8.5, SUMMIT_H],                   // summit plateau
];
// "Steep narrow steps" from the summit down to the zenana (Rani Mahal)
const DESCENT = [
  [-2, -11.8, SUMMIT_H],
  [12, -19, 39.0], [13, -21, 38.9],
  [0, -30, 31.9], [-1, -32, 31.8],
  [13, -40, 24.8], [14, -42, 24.7],
  [2, -51, 17.7], [2, -53, 17.6],
  [16, -58, 13.0],                         // ante-chamber
];
// palace terraces back down to the entrance court
const PALACE = [
  [16, -58, 13.0], [41, -58, 13.0],        // Rani Mahal terrace
  [55, -59, 6.5], [77, -60, 6.5],          // Dad Mahal terrace
  [83, -73, 1.8], [92, -76, 1.6],          // Taramati court
  [97, -64, 0.8], [100, -52, 0.6],         // into the entrance court
];
// road from Hyderabad: Fateh Darwaza -> Habshi Kamans -> round the mantlet -> Bala Hisar Darwaza
const ROAD = [
  [362, -232, 0.3], [318, -222, 0.3], [286, -206, 0.3],
  [266, -186, 0.3],                        // Fateh Darwaza
  [246, -164, 0.35], [226, -142, 0.4], [212, -124, 0.45],   // Habshi Kaman (outer arch)
  [202, -111, 0.45],                       // Habshi Kaman (inner arch)
  [186, -88, 0.5], [170, -68, 0.55], [160, -58, 0.6], [150, -56, 0.6],
  [146.5, -48, 0.6], [146.5, -38, 0.6], [141, -36, 0.6], [130, -36, 0.6],
];
const FATEH = [266, -186];
const BAZAAR = [[[256, -175], [246, -164], [226, -142], [219, -133]], [[196, -103], [186, -88], [176, -75]]];
const HABSHI = [[212, -124], [202, -111]];
const BH_GATE = [141, -36];

// lower citadel wall (line B) around the hill, the palaces and the entrance court
const CITADEL = [
  [141, -100], [141, 18], [128, 40], [96, 56], [56, 70], [10, 80], [-36, 76], [-74, 58], [-98, 26],
  [-104, -14], [-92, -52], [-64, -82], [-24, -100], [24, -106], [72, -104], [112, -106],
];
// outer city wall (line A), the south-east stretch with the Fateh Darwaza; the moat runs outside it
const OUTER = [
  [132, -256], [176, -248], [214, -230], [244, -208], [266, -186], [288, -162], [304, -134], [316, -98],
  [324, -56], [330, -10], [334, 40], [336, 118],
];
const MOAT = offsetPath(OUTER, -12.5);
// the mantlet screening the Bala Hisar Darwaza ("crenellated parapets facing east")
const MANTLET = [[152, -51], [153.5, -36], [152, -21]];

// terraces
const T_MOSQUE = rectPts(31, 23, 18, 17, -8);
const T_AMBAR = rectPts(50, -3, 15, 15, -15);
const T_JAIL = rectPts(72.5, -13.5, 8, 7, 20);
const T_KALI = rectPts(48.6, 13.4, 8.5, 7, 20);
const T_AKKANNA = rectPts(79, -42.5, 13, 10, 0);
const T_RANI = rectPts(28, -61, 26, 16, -6);
const T_DAD = rectPts(66, -62, 22, 14, -4);
const T_TARAMATI = rectPts(86, -80, 18, 12, 0);
const COURT = [[94, -72], [138, -72], [138, -4], [118, -2], [96, -6], [92, -30]];
const NAGINA = [108, -14, 20, 13, 0];

// town (inside the outer wall) and the plain inside the citadel
const TOWN_E = [[172, -40], [162, 0], [162, 104], [300, 104], [302, -40], [294, -100], [280, -132], [262, -152], [242, -150], [222, -122], [204, -98], [186, -72]];
const TOWN_S = [[152, -114], [172, -98], [186, -116], [200, -138], [220, -160], [236, -180], [232, -198], [210, -213], [178, -231], [140, -238], [124, -200], [128, -124]];
const TOWN_SW = [[-112, -122], [126, -122], [120, -200], [136, -240], [100, -246], [-112, -246]];
const TOWN_N = [[-108, 98], [140, 96], [150, 104], [150, 112], [-108, 112]];
const CITADEL_IN = [[132, -96], [132, 14], [120, 34], [94, 49], [56, 62], [10, 72], [-34, 68], [-68, 52], [-90, 24], [-96, -14], [-85, -48], [-60, -75], [-24, -92], [24, -98], [72, -96], [110, -98]];
const HILL = hillPoly(1.04);

const POIS = [
  { id: 'fateh', at: [279, -199], r: 7, title: 'Fateh Darwaza (Victory Gate)',
    text: 'The gate of the outermost enclosure, near its south-eastern corner. Its leaves are studded with giant iron spikes to stop war elephants from battering them down. It got its name after Aurangzeb\'s army entered through it at the end of the eight-month siege of 1687.',
    source: 'https://en.wikipedia.org/wiki/Golconda_Fort',
    eraNote: { '1686': 'In 1686 it is not yet the Victory Gate: Aurangzeb named it after his army came in this way on 21 September 1687.', today: 'Visitors from Hyderabad still come in by this south-eastern gate.' } },
  { id: 'outerwall', at: [214, -230], r: 7, hTol: 3, title: 'Outer wall, bastions and moat',
    text: 'Under the Qutb Shahis the city wall grew to over 7 km, with 87 semicircular bastions (some still carrying cannons), eight gateways and four drawbridges, and a moat around it. At the 1687 siege the Mughals tunnelled three mines beneath the walls, each packed with 37,000 pounds of gunpowder, but the fort held.',
    source: 'https://en.wikipedia.org/wiki/Siege_of_Golconda',
    eraNote: { '1880s': 'Pestonjee Dosabhoy photographed this crenellated city wall in the 1870s with the citadel hill behind it.' } },
  { id: 'habshi', at: [207, -117.5], r: 6, title: 'Habshi Kamans',
    text: 'Two massive arches with rooms on top, on the way into the fort. The name means "Abyssinian arches"; it is traditionally linked to the African (Habshi) soldiers who served the sultans.',
    source: 'https://penang-traveltips.com/india/golconda.htm' },
  { id: 'balahisar', at: [147, -42], r: 6, title: 'Bala Hisar Darwaza',
    text: 'The main entrance to the citadel, on its eastern side, screened by a crenellated mantlet. Its pointed arch is framed with scroll work; mythical beasts (yalis) and lions on stucco panels fill the spandrels, and peacocks flank an arched niche above.',
    source: 'https://en.wikipedia.org/wiki/Golconda_Fort',
    eraNote: { today: 'A 1985 photograph records the mantlet in front of the gate, its crenellated parapets facing east.' } },
  { id: 'portico', at: [130, -36], r: 4, title: 'Grand Portico (the clapping dome)',
    text: 'Clap at the right spot under the dome at the entrance and the sound carries to the Bala Hisar pavilion on the summit, almost a kilometre away. Wikipedia places the same effect at the Fateh Darwaza; this guide puts it "at the entrance".',
    source: 'https://www.tana.org/public/uploads/services/golcondafort.pdf?sfvrsn=0',
    eraNote: { today: 'Most visitor accounts put the clap point here, in the domed portico just inside the gate.' } },
  { id: 'silah', at: [114, -53], r: 6, title: 'Silah Khana (armoury)',
    text: 'A three-storeyed granite building facing north. Its name means "house of arms": it held the garrison\'s weapons.',
    source: 'https://dome.mit.edu/handle/1721.3/20300',
    eraNote: { today: 'A 1985 photograph shows the three granite storeys still standing.' } },
  { id: 'akkanna', at: [79, -39], r: 5, hTol: 3, title: 'Akkanna–Madanna offices',
    text: 'Offices of the brothers Akkanna and Madanna, Hindu ministers at the court of the last sultan, Abul Hasan Qutb Shah (Tana Shah). They were assassinated in March 1686, less than a year before the Mughal siege.',
    source: 'https://en.wikipedia.org/wiki/Siege_of_Golconda',
    eraNote: { '1686': 'This is the year the two ministers were killed, in March 1686.' } },
  { id: 'ramdas', at: [71, -17], r: 5, hTol: 3, title: 'Ramdas Bandikhana (Ramdas\'s jail)',
    text: 'Kancharla Gopanna, a revenue official known as Bhakta Ramadas, was jailed here by Abul Hasan Tana Shah for spending state taxes on rebuilding the Rama temple at Bhadrachalam. Accounts give 12 or 14 years in prison; he carved images of Rama, Lakshman and Hanuman into the rock of his cell.',
    source: 'https://en.wikipedia.org/wiki/Kancharla_Gopanna',
    eraNote: { '1686': 'Abul Hasan Tana Shah, the sultan who jailed him, is still on the throne in 1686.' } },
  { id: 'ambar', at: [51, -6], r: 5, hTol: 3, title: 'Ambar Khana, Bari Baoli and the water system',
    text: 'A granary built in 1642, beside a step well near the upper terrace. Unusual clay pipes fitted into the walls are evidence of an efficient water-supply system; other accounts add that Persian wheels raised the water in stages.',
    source: 'https://www.tana.org/public/uploads/services/golcondafort.pdf?sfvrsn=0' },
  { id: 'mahakali', at: [45, 12], r: 4, hTol: 3, title: 'Mahakali / Jagadamba temple',
    text: 'A Hindu shrine carved out of a huge boulder below the summit. Tradition dates it to the Kakatiya period, centuries before the sultans.',
    source: 'https://en.wikipedia.org/wiki/Golconda_Fort' },
  { id: 'mosque', at: [37, 21], r: 5, hTol: 3, title: 'Ibrahim\'s mosque',
    text: 'A small mosque below the summit, known for its prominent corner minarets. It is attributed to Ibrahim Qutb Shah (r. 1550–1580), who repaired and strengthened the fort.',
    source: 'https://en.wikipedia.org/wiki/Ibrahim_Quli_Qutb_Shah',
    eraNote: { today: 'A photograph taken from the summit looking north-east shows the mosque at its centre, with the Mahakali temple to the right.' } },
  { id: 'baradari', at: [0, -8], r: 6, hTol: 3, title: 'Bala Hisar Baradari (Durbar Hall)',
    text: 'A windswept, twelve-arched, three-storey pavilion on the summit, 120 m above the plain and reached by about 380 steps. It served as a durbar (audience) hall, with a stone throne on its upper terrace.',
    source: 'https://www.tana.org/public/uploads/services/golcondafort.pdf?sfvrsn=0',
    eraNote: { '1880s': 'Lala Deen Dayal took his two-part panorama of the fort from here, on the Bala Hisar, in the 1880s.' } },
  { id: 'rani', at: [30, -57], r: 6, hTol: 3, title: 'Rani Mahal and the palace complex',
    text: 'The zenana (queens\' quarters) is reached by steep, narrow steps down from the summit. It once had a triple-vaulted hall and decorative niches, and "contained a world of luxury envied by the grand Mughals themselves".',
    source: 'https://www.tana.org/public/uploads/services/golcondafort.pdf?sfvrsn=0',
    eraNote: { today: 'An aerial photograph looking east over this complex shows the Dad Mahal at its centre.' } },
];

export default {
  id: 'golconda', name: 'Golconda', native: { text: 'గోల్కొండ', lang: 'te', script: 'telu' },
  region: 'Hyderabad · Telangana', type: 'Citadel and walled city', coords: [17.3854, 78.4041],
  poiCount: POIS.length, groundName: 'Golconda', datum: 0, datumLabel: 'above the plain',
  units: { planScale: 2.5, vScale: 2.6 },
  bounds: [-125, -262, 362, 125], stride: 2, seed: 4,
  water: null,
  apron: { h: 0, color: '#a39769' },
  view: { az: -45, el: 40, zoom: 70, introAt: [110, -70], introZoom: 430 },
  light: { sky: '#e3e2d8', sunAz: -120, sunEl: 50 },
  palette: {
    wall: '#8e8a84', wallTop: '#a8a29a', trim: '#e2d9c5', stone: '#9b958b', plaster: '#e6ddcb', plasterDark: '#c3b79f',
    roof: '#8a5f45', dome: '#e4dccb', wood: '#4a3424', door: '#3b2a1e', iron: '#262422',
    grass: '#808747', dry: '#ab9d6c', rock: '#948b7d', cliff: '#6e675e', sand: '#c9b68e', road: '#b19e7c', court: '#b9ae97',
    paved: '#a9a091', field: '#8e9450', garden: '#5f7c3c', mud: '#7a6a52', water: '#5c6f55', tank: '#56704f',
    leaf: '#5e7834', leafDry: '#8f8a4b', trunk: '#5f4836', flag: '#2f6b45', accent: '#c8a451',
  },
  eraPalette: {
    '1686': { plaster: '#ece5d3', grass: '#7f8b47', court: '#c2b79f' },
    '1880s': { plaster: '#cfc4ab', plasterDark: '#b2a68b', grass: '#8a8a4d', dry: '#b0a06c', leaf: '#647a38', court: '#b3a78f' },
    today: { plaster: '#d4c9b1', grass: '#858a4e', dry: '#b0a273', leaf: '#587a32', garden: '#5d7f3a' },
  },
  eras: [
    { id: '1686', year: '1686', label: 'Qutb Shahi capital', short: 'Qutb Shahi capital', lens: 'engraving',
      summary: 'Abul Hasan Qutb Shah\'s capital in its last year of peace: the palaces freshly limewashed, guards on every wall and the road from Hyderabad busy below the Bala Hisar.',
      basis: 'The logic of the enclosures follows the Havart/Luyken ground plan of the castle published in 1693 and its manuscript translation, with the same book\'s view of a Dutch envoy at Abul Hasan\'s court; a Dutch route map of about 1690 places the capital in its kingdom.',
      conjecture: 'No measured plan survives and the Havart plan is schematic: positions, heights, colours, flags and the look of the palaces are reconstructed from descriptions and today\'s ruins.',
      sources: ['GOL-01', 'GOL-07', 'GOL-24', 'GOL-03'] },
    { id: '1880s', year: '1880s', label: 'Deen Dayal\'s panorama', short: 'Deen Dayal\'s panorama', lens: 'albumen',
      summary: 'Two centuries after the Mughal conquest: roofless palaces, old guns on the bastions and a few of the Nizam\'s sepoys guarding prisoners and treasure in a half-empty fort.',
      basis: 'Lala Deen Dayal\'s panorama from the Bala Hisar (1880s), Pestonjee Dosabhoy\'s view over the crenellated city wall (1870s), photographs by Nixon (c. 1865) and Scott (c. 1862) and an 1890s view of the fortifications, with Anburey\'s 1799 view and Meadows Taylor\'s drawing of about 1830.',
      conjecture: 'None of these images could be inspected online, so the state of each building is inferred from their captions and from today\'s ruins.',
      sources: ['GOL-09', 'GOL-10', 'GOL-11', 'GOL-12', 'GOL-16', 'GOL-06', 'GOL-08'] },
    { id: 'today', year: 'Today', label: 'ASI monument', short: 'ASI monument', lens: 'none',
      summary: 'A protected monument on the edge of Hyderabad: visitors clap under the portico dome, then climb about 380 steps to the Baradari for the view.',
      basis: 'Photographs of the mantlet, the Silah Khana, the Bala Hisar Darwaza, the palace complex and the summit shrines (1985 and before 1987), and a 1946 photograph of a gate in the walls.',
      conjecture: 'Positions are schematic and the surrounding town is shown only as generic housing.',
      sources: ['GOL-17', 'GOL-18', 'GOL-19', 'GOL-20', 'GOL-21', 'GOL-23'] },
  ],

  terrain: (era) => [
    { op: 'base', h: 0 },
    { op: 'noise', amp: 1.2, scale: 40 },
    // the granite hill (see hillH), bare rock above its lower slopes, broken up by weathering
    { op: 'fn', fn: (x, y, h) => Math.max(h, hillH(x, y)) },
    { op: 'paint', poly: hillPoly(0.84), paint: 'rock' },
    { op: 'noise', poly: HILL, amp: 2.6, scale: 5, edge: 10, above: 2 },
    // terraces
    { op: 'flatten', poly: PLATEAU, h: SUMMIT_H, edge: 3 },
    { op: 'flatten', poly: T_MOSQUE, h: 40, edge: 3.5 },
    { op: 'flatten', poly: T_AMBAR, h: 29.9, edge: 3 },
    { op: 'flatten', poly: T_JAIL, h: 15.3, edge: 2.5 },
    { op: 'flatten', poly: T_KALI, h: 36.3, edge: 2.5 },
    { op: 'flatten', poly: T_AKKANNA, h: 8, edge: 3 },
    { op: 'flatten', poly: T_RANI, h: 13, edge: 4 },
    { op: 'flatten', poly: T_DAD, h: 6.5, edge: 4 },
    { op: 'flatten', poly: T_TARAMATI, h: 1.8, edge: 4 },
    { op: 'flatten', poly: COURT, h: 0.6, edge: 6 },
    // stepped paths cut into the rock
    { op: 'ramp', path: CLIMB, w: 5, edge: 2.5, paint: 'paved' },
    { op: 'ramp', path: DESCENT, w: 4.5, edge: 2.5, paint: 'paved' },
    { op: 'ramp', path: PALACE, w: 5, edge: 2.5, paint: 'paved' },
    // moat outside the city wall, then the road and causeway
    { op: 'moat', path: MOAT, w: 10, h: -2.6, edge: 3 },
    { op: 'ramp', path: ROAD, w: 7, edge: 3, paint: 'road' },
    { op: 'edge', h: 0, w: 24 },
    { op: 'paint', poly: COURT, paint: era === '1686' ? 'paved' : 'court' },
    { op: 'paint', poly: rectPts(...NAGINA), paint: era === '1880s' ? 'mud' : 'garden' },
    ...(era === '1880s' ? [{ op: 'paint', poly: [[-100, -130], [110, -130], [110, -240], [-100, -240]], paint: 'field' }] : []),
  ],

  build(W) {
    const era = W.era, old = era === '1686', mid = era === '1880s', now = era === 'today';
    const flagCol = old ? '#2f6b45' : '#d9b23a';
    // HUD names: general areas first, so the specific ones added later take precedence
    W.zone(CITADEL_IN, 'Lower citadel');
    W.zone(HILL, 'Bala Hisar');
    // ---------------------------------------------------------------- lower citadel wall (line B)
    const B = W.wall({ path: CITADEL, closed: true, h: 10, thick: 5, batter: 0.07, parapet: { h: 1.4, t: 0.7 }, merlon: { style: 'round', w: 1.0, gap: 0.8, h: 1.0 }, color: 'wall' });
    W.gate({ wall: B, at: BH_GATE, width: 4.8, spring: 5.2, rise: 2.8, style: 'pointed', towers: false, name: 'Bala Hisar Darwaza', trim: 'plaster', panel: old ? '#f1ead8' : '#ddd3bd', frameW: 1.1, frameUp: 1.4 });
    // the gate's upper storey stands above the curtain, plastered like the gate face
    W.building({ rect: [BH_GATE[0], BH_GATE[1], 15, 5.6, 90], base: W.wallTopAt(B, BH_GATE[0], BH_GATE[1]) - 0.05, h: 3.6, color: old ? 'plaster' : 'plasterDark', roof: 'flat', parapet: { h: 0.8, t: 0.3 }, merlon: 'round', windows: { style: 'arch', spacing: 2.4, w: 0.9, h: 1.5 }, kind: 'building' });
    const gunsB = old ? [2, 5, 8, 11, 14] : mid ? [2, 8, 12] : [8];
    CITADEL.forEach((p, i) => { if (i === 0 || i === 1) return; W.bastion({ at: p, wall: B, r: 6.5, off: 2.2, dh: 0.5, cannon: gunsB.includes(i) ? { len: 3.2, r: 0.32, carriage: old } : false }); });
    W.bastion({ at: [141, -100], wall: B, r: 7, off: 2.4, dh: 0.5, cannon: old ? { len: 3.2 } : false });
    W.bastion({ at: [141, 18], wall: B, r: 7, off: 2.4, dh: 0.5, cannon: old ? { len: 3.2 } : false });
    wallStairs(W, B, { at: [141, -8], dir: 1, run: 22 });
    // mantlet: a screen wall with a polygonal centre, so the road must turn to reach the gate
    const M = W.wall({ path: MANTLET, closed: false, outer: 'right', h: 6, thick: 3, batter: 0.05, parapet: { h: 1.2, t: 0.5 }, merlon: { style: 'round', w: 0.9, gap: 0.7, h: 0.9 }, walk: false, color: 'wall' });
    W.bastion({ at: [154, -36], wall: M, r: 4.2, off: 2.0, shape: 'octagon', dh: 0.4, walk: false });

    // ---------------------------------------------------------------- outer city wall (line A), Fateh Darwaza, moat
    const A = W.wall({ path: OUTER, closed: false, outer: 'right', h: 11, thick: 6, batter: 0.08, parapet: { h: 1.5, t: 0.7 }, merlon: { style: 'round', w: 1.0, gap: 0.8, h: 1.0 }, color: 'wall' });
    W.gate({ wall: A, at: FATEH, width: 5, spring: 5.6, rise: 3, style: 'pointed', name: 'Fateh Darwaza', towers: { r: 6.5, dh: 1.6, off: 3.2, gap: 0.15 }, trim: 'plaster', panel: old ? '#efe8d6' : '#d6ccb6', frameW: 1.0, frameUp: 1.2 });
    const sGate = pathLen(OUTER.slice(0, 5));
    const gunsA = old ? [0, 2, 3, 5, 7] : mid ? [1, 4, 6] : [1];
    [20, 52, 88, sGate + 38, sGate + 74, sGate + 112, sGate + 154, sGate + 198, sGate + 244, sGate + 292].forEach((s, k) => {
      const p = along(OUTER, s);
      W.bastion({ at: [p.x, p.y], wall: A, r: 7, off: 2.6, dh: 0.5, cannon: gunsA.includes(k) ? { len: 3.4, r: 0.34, carriage: old } : false, flag: old && (k === 3 || k === 7) ? { color: flagCol, pole: 6 } : false });
    });
    wallStairs(W, A, { at: [241, -210.5], dir: 1, run: 20 });
    if (old) for (const sg of [-1, 1]) { const p = along(OUTER, sGate + sg * 9); W.flag({ x: p.x + p.ty * 3.2, y: p.y - p.tx * 3.2, h: W.wallTopAt(A, p.x, p.y) + 1.6, pole: 6, color: flagCol, size: 1.4 }); }
    if (!now) W.water({ poly: strip(MOAT, 11), level: old ? -1.1 : -1.8 });

    // ---------------------------------------------------------------- Habshi Kamans: two arches with rooms on top
    for (const [cx, cy] of HABSHI) {
      const dx = 0.79, dy = 0.61, rot = Math.atan2(dy, dx) / D2R;
      const wl = W.wall({ path: [[cx - dx * 8.5, cy - dy * 8.5], [cx + dx * 8.5, cy + dy * 8.5]], closed: false, outer: 'left', h: 8.5, thick: 5, batter: 0.03, parapet: { h: 0.9, t: 0.45 }, merlon: { style: 'round', w: 0.8, gap: 0.6, h: 0.7 }, walk: false, color: 'wall' });
      W.gate({ wall: wl, at: [cx, cy], width: 5.2, spring: 5, rise: 2.6, towers: false, doors: false, trim: 'plaster', frameW: 0.7, frameUp: 1.0 });
      const g = W.ground(cx, cy);
      W.building({ rect: [cx, cy, 11, 4, rot], base: g + 8.45, h: 3.2, color: old ? 'plaster' : 'plasterDark', roof: 'flat', parapet: { h: 0.6, t: 0.3 }, merlon: 'round', windows: { style: 'arch', spacing: 2.2, w: 0.8, h: 1.4 }, kind: 'building' });
    }
    W.zone(rectPts(207, -117.5, 14, 26, 37.7), 'Habshi Kamans');

    // ---------------------------------------------------------------- entrance court: portico, bath, armoury, garden
    W.pavilion({ x: 130, y: -36, w: 9, d: 9, rot: 0, plinth: 0.25, colH: 5.0, cols: [4, 4], roof: 'dome', domes: [{ x: 130, y: -36, r: 3.5, shape: 'half', drum: 0.9 }], color: 'plaster', stairs: false, kind: 'pavilion' });
    W.zone(rectPts(130, -36, 9, 9, 0), 'Grand Portico');
    W.building({ rect: [126, -22, 9, 6, 0], h: 3.6, color: 'plaster', roof: 'domes', domes: [{ x: 124, y: -22, r: 1.4, shape: 'half' }, { x: 128, y: -22, r: 1.4, shape: 'half' }], windows: { style: 'arch', spacing: 2.2, w: 0.8, h: 1.4, rows: [0] }, kind: 'building' });
    W.zone(rectPts(126, -22, 11, 8, 0), 'Mortuary bath');
    W.building({ rect: [114, -62, 22, 8, 0], storeys: 3, storeyH: 3.8, color: 'stone', roof: 'flat', parapet: { h: 0.9, t: 0.4 }, merlon: 'round', windows: { style: 'arch', spacing: 2.4, w: 1.0, h: 1.8 }, kind: 'barracks' });
    W.zone(rectPts(114, -60, 24, 12, 0), 'Silah Khana');
    W.ruin({ rect: NAGINA, h: old ? 2.2 : 1.9, thick: 0.6, jag: !old, windows: false, color: 'stone', doors: [{ edge: 0, at: 0.5, w: 3.2 }, { edge: 1, at: 0.5, w: 2.6 }] });
    W.zone(rectPts(...NAGINA), 'Nagina Bagh');
    const nagIn = rectPts(NAGINA[0], NAGINA[1], NAGINA[2] - 3, NAGINA[3] - 3, 0);
    if (old) {
      W.tank({ x: 108, y: -14, r: 2, n: 8, rot: 22.5, waterDepth: 0.5, tiers: 1, color: 'stone' });
      for (const [x, y] of [[101, -10], [101, -18], [115, -10], [115, -18], [104.5, -10], [111.5, -18]]) W.tree({ x, y, type: 'mango', s: 0.8 });
    } else W.trees({ poly: nagIn, count: mid ? 10 : 4, types: mid ? { shrub: 3, acacia: 1, grass: 2 } : { round: 1, shrub: 1 }, s: [0.7, 1.1], minDist: 3, seed: 31 });

    // ---------------------------------------------------------------- the climb: offices, jail, granary, step well, shrines, mosque
    W.building({ rect: [79, -44.5, 11, 5.5, 0], storeys: 2, storeyH: 3.4, color: old ? 'plaster' : mid ? 'plasterDark' : 'stone', roof: 'flat', parapet: { h: 0.6, t: 0.3 }, windows: { style: 'arch', spacing: 2.2, w: 0.9, h: 1.5 }, kind: 'building' });
    W.zone(T_AKKANNA, 'Akkanna–Madanna offices');
    W.building({ rect: [73, -12, 6, 4.5, 20], h: 3.0, color: 'stone', roof: 'flat', parapet: false, windows: { style: 'rect', spacing: 2.4, w: 0.5, h: 0.6, sill: 1.9 }, kind: 'building' });
    W.zone(T_JAIL, 'Ramdas Bandikhana');
    if (old) W.building({ rect: [45.5, 1.5, 12, 5.5, -15], h: 4.4, color: 'stone', roof: 'vault', roofColor: 'stone', windows: { style: 'arch', spacing: 3, w: 1.2, h: 2.0, rows: [0] }, kind: 'granary' });
    else W.ruin({ rect: [45.5, 1.5, 12, 5.5, -15], h: 4.0, thick: 0.8, color: 'stone', doors: [{ edge: 0, at: 0.5, w: 2.2 }] });
    W.tank({ poly: rectPts(56.5, -8, 5, 4.2, -15), waterDepth: old ? 2.0 : 2.8, tiers: 4, color: 'stone' });
    W.zone(T_AMBAR, 'Ambar Khana and Bari Baoli');
    // Mahakali / Jagadamba shrine under a huge boulder
    const kaliCol = now ? '#d9963f' : old ? '#d8c7a4' : '#c4ad86';
    W.building({ rect: [49.6, 13.8, 4.4, 3.0, 20], h: 3.0, color: kaliCol, roof: 'flat', parapet: { h: 0.45, t: 0.22 }, windows: { style: 'rect', spacing: 4, w: 1.1, h: 1.7, sill: 0.1, rows: [0] }, cornice: true, trim: now ? '#b8452a' : 'plaster', kind: 'temple' });
    W.boulder({ x: 51.6, y: 17.6, s: 5.6, variant: 1, color: '#a39a8a', yaw: 30 });
    if (!mid) W.flag({ x: 46.6, y: 15.8, h: 36.3, pole: 4.5, color: '#e0782a', size: 0.7, shape: 'tri' });
    W.zone(T_KALI, 'Mahakali temple');
    // Rama Mandir under the boulders, close to the mosque
    W.building({ rect: [37.4, 28.6, 2.6, 2.2, -8], h: 2.1, color: now ? '#d9963f' : '#d4c7aa', roof: 'flat', parapet: false, windows: { style: 'rect', spacing: 3, w: 0.8, h: 1.3, sill: 0.1, rows: [0] }, cornice: false, kind: 'temple' });
    W.boulder({ x: 36.4, y: 32.2, s: 3.6, variant: 2, color: '#a39a8a' });
    W.boulder({ x: 39.8, y: 31.6, s: 2.8, variant: 0, color: '#9c9383' });
    // Ibrahim's mosque (prayer hall to the west, court and corner minarets to the east)
    W.mosque({ x: 28, y: 25, w: 10, d: 7, rot: 82, h: 5.2, domes: 0, minarets: 2, minR: 0.7, minH: 12.5, color: old ? 'plaster' : 'plasterDark', court: { d: 5 } });
    W.zone(T_MOSQUE, 'Ibrahim\'s mosque');
    W.zone(rectPts(37.6, 29.6, 7, 5, -8), 'Rama Mandir');

    // ---------------------------------------------------------------- summit: the Baradari and the hilltop wall
    const barCol = old ? 'plaster' : mid ? 'plasterDark' : 'plasterDark';
    const bar = W.building({ rect: [0, 1, 18, 11, 0], storeys: 3, storeyH: 3.7, color: barCol, roof: 'flat', parapet: { h: 0.9, t: 0.35 }, merlon: 'round', windows: { style: 'arch', spacing: 2.2, w: 1.3, h: 2.3 }, kind: 'palace', walkRoof: true, roofH: -0.6 });
    // external flights to the roof terrace and its stone throne
    W.stairs({ from: [-8.0, 8.3, SUMMIT_H], to: [9.3, 8.3, SUMMIT_H + 7.0], w: 2.2, color: barCol, side: true });
    W.platform({ poly: rectPts(10.6, 8.2, 3.2, 3.0, 0), h: SUMMIT_H + 7.0, color: barCol });
    W.stairs({ from: [10.6, 7.4, SUMMIT_H + 7.0], to: [10.6, -2.4, bar.top], w: 2.2, color: barCol, side: true });
    W.platform({ poly: rectPts(9.9, -3.0, 3.6, 2.0, 0), h: bar.top, color: barCol });
    W.building({ rect: [0, 3.5, 2.2, 1.4, 0], base: bar.top, h: 0.9, color: 'stone', roof: 'flat', parapet: false, windows: false, cornice: false, kind: 'building' });
    if (!now) W.flag({ x: -7.5, y: 5.5, h: bar.top, pole: 6, color: flagCol, size: 1.6 });
    W.zone(PLATEAU, 'Bala Hisar Baradari');
    const C = [];
    for (let a = 64; a <= 242; a += 14) C.push([Math.cos(a * D2R) * 17.8, Math.sin(a * D2R) * 14.8]);
    const Cw = W.wall({ path: C, closed: false, outer: 'right', h: 2.6, thick: 1.8, batter: 0.04, parapet: { h: 0.7, t: 0.4 }, merlon: { style: 'round', w: 0.7, gap: 0.6, h: 0.6 }, walk: false, color: 'wall' });
    W.bastion({ at: C[4], wall: Cw, r: 3.2, off: 1.2, dh: 0.6, walk: false });
    W.bastion({ at: C[9], wall: Cw, r: 3.2, off: 1.2, dh: 0.6, walk: false, cannon: mid ? { len: 2.6, r: 0.26, carriage: false } : false });

    // ---------------------------------------------------------------- palaces on the eastern flank
    const palCol = old ? 'plaster' : 'plasterDark';
    if (old) {
      W.building({ rect: [28, -65.5, 20, 7, -6], storeys: 2, storeyH: 4.4, color: palCol, roof: 'flat', parapet: { h: 0.8, t: 0.35 }, merlon: 'round', windows: { style: 'arch', spacing: 2.3, w: 1.1, h: 2.0 }, jharokhas: { every: 6, size: 1.6, rows: [1], skip: [0] }, chhatris: 'corners', chhatriSize: 1.5, chhatriH: 1.6, chhatriDome: 'onion', kind: 'palace' });
      W.building({ rect: [66, -66.5, 16, 6, -4], storeys: 2, storeyH: 4.0, color: palCol, roof: 'flat', parapet: { h: 0.8, t: 0.35 }, merlon: 'round', windows: { style: 'arch', spacing: 2.3, w: 1.1, h: 1.9 }, chhatris: 'corners', chhatriSize: 1.4, chhatriH: 1.5, chhatriDome: 'onion', kind: 'palace' });
      W.tank({ x: 30, y: -58.5, r: 1.8, n: 8, rot: 22.5, waterDepth: 0.4, tiers: 1, color: 'stone' });
    } else {
      W.ruin({ rect: [28, -65.5, 20, 7, -6], h: mid ? 8.4 : 7.8, thick: 0.9, color: palCol, storeys: 2, doors: [{ edge: 2, at: 0.5, w: 2.6 }, { edge: 2, at: 0.18, w: 2 }, { edge: 0, at: 0.7, w: 2 }],
        partitions: [rectPts(21.4, -64.8, 0.7, 6, -6), rectPts(34.6, -66.2, 0.7, 6, -6)] });
      W.ruin({ rect: [66, -66.5, 16, 6, -4], h: mid ? 7.6 : 7, thick: 0.9, color: palCol, storeys: 2, doors: [{ edge: 2, at: 0.5, w: 2.4 }, { edge: 1, at: 0.5, w: 2 }] });
    }
    W.pavilion({ x: 16.5, y: -57.8, w: 6, d: 5, rot: -6, plinth: 0.2, colH: 3.8, cols: [3, 3], roof: 'vault', color: old ? 'plaster' : 'plasterDark', stairs: false, kind: 'pavilion' });
    W.zone(T_RANI, 'Rani Mahal');
    W.zone(T_DAD, 'Dad Mahal');
    W.mosque({ x: 82, y: -82, w: 8, d: 5.5, rot: 82, h: 4.6, domes: 0, minarets: 2, minR: 0.6, minH: 9.5, color: old ? 'plaster' : 'plasterDark', court: { d: 4 } });
    W.zone(T_TARAMATI, 'Taramati mosque');

    // ---------------------------------------------------------------- flights of steps
    const flights = (route, w, side) => {
      for (let i = 1; i < route.length; i++) {
        const a = route[i - 1], b = route[i];
        const run = dist(a, b), rise = Math.abs(b[2] - a[2]);
        if (run > 0.5 && rise / run > 0.15) W.stairs({ from: [a[0], a[1], a[2] + 0.02], to: [b[0], b[1], b[2] + 0.02], w, color: 'stone', side });
      }
    };
    flights(CLIMB, 3.2, true);
    flights(DESCENT, 2.4, true);
    flights(PALACE, 3.0, false);

    // ---------------------------------------------------------------- town
    const roadAvoid = corridor(ROAD, 12);
    const houseBase = { size: [5, 9], spacing: 2.0, roofColor: 'roof', rot: 45, jitterRot: 6 };
    // shop-houses lining the road between the Fateh Darwaza and the Bala Hisar (placed first so they take the frontage)
    const frontage = (seg, side, seed) => {
      let st = seed * 7919 + 17; const rnd = () => ((st = (st * 16807) % 2147483647) / 2147483647);
      const cols = now ? ['#d9cfbd', '#cdbfa5', '#d6c2b4', '#c4c9b6', '#e0d6c2', '#cbb79c'] : old ? ['plaster', 'plasterDark', '#d9cdb5'] : ['plasterDark', '#c9bb9c'];
      const L = pathLen(seg);
      for (let s = 1.5; s < L - 4;) {
        const w = 4.2 + rnd() * 1.8, d = 5 + rnd() * 2.2, p = along(seg, s + w / 2);
        const off = 8.4 + d / 2, cx = p.x - p.ty * side * off, cy = p.y + p.tx * side * off;
        const gap = rnd() < (mid ? 0.55 : 0.1);
        if (!gap && W.isFree(cx, cy, 1.2)) {
          const storeys = now ? 1 + Math.floor(rnd() * 3) : 1 + Math.floor(rnd() * (old ? 2 : 1));
          const roof = now ? 'flat' : rnd() < 0.5 ? 'flat' : 'tiled';
          const ruin = mid && rnd() < 0.4;
          W.building({ rect: [cx, cy, w, d, Math.atan2(p.ty, p.tx) / D2R], storeys, storeyH: 3.2, h: ruin ? 2.2 : undefined, ruin, thick: 0.6, doors: [{ edge: side > 0 ? 0 : 2, at: 0.5, w: 1.6 }],
            color: cols[Math.floor(rnd() * cols.length)], roof, roofColor: now ? '#cfc8b8' : 'roof', parapet: roof === 'flat' ? { h: 0.6, t: 0.25 } : false,
            windows: { spacing: 2.4, w: 0.7, h: 1.1, style: 'rect' }, kind: 'house', cornice: storeys > 1, pad: 0.6 });
        }
        s += w + 0.5 + rnd() * 1.0;
      }
    };
    BAZAAR.forEach((seg, k) => { frontage(seg, 1, 3 + k * 2); frontage(seg, -1, 4 + k * 2); });
    if (old) {
      const o = Object.assign({}, houseBase, { h: [1, 2], colors: ['plaster', 'plasterDark', '#d9cdb5'], roof: 'mix', chhatriChance: 0.04 });
      W.houses(Object.assign({ poly: TOWN_E, count: 70, seed: 5 }, o));
      W.houses(Object.assign({ poly: TOWN_S, count: 36, seed: 6 }, o));
      W.houses(Object.assign({ poly: TOWN_SW, count: 70, seed: 7, rot: 0 }, o));
      W.houses(Object.assign({ poly: TOWN_N, count: 14, seed: 8, rot: 0 }, o));
    } else if (mid) {
      const o = Object.assign({}, houseBase, { h: [1, 1], colors: ['plasterDark', '#c9bb9c', 'stone'], roof: 'mix', ruin: true, ruinShare: 0.45, ruinH: 0.6 });
      W.houses(Object.assign({ poly: TOWN_E, count: 34, seed: 15 }, o));
      W.houses(Object.assign({ poly: TOWN_S, count: 16, seed: 16 }, o));
      W.houses(Object.assign({ poly: [[-112, -122], [126, -122], [120, -134], [-112, -134]], count: 8, seed: 17, rot: 0 }, o));
      W.houses(Object.assign({ poly: TOWN_N, count: 6, seed: 18, rot: 0 }, o));
    } else {
      const o = Object.assign({}, houseBase, { size: [5, 8], h: [1, 3], colors: ['#d9cfbd', '#cdbfa5', '#d6c2b4', '#c4c9b6', '#e0d6c2', '#cbb79c'], roof: 'flat', roofColor: '#cfc8b8' });
      W.houses(Object.assign({ poly: TOWN_E, count: 85, seed: 25 }, o));
      W.houses(Object.assign({ poly: TOWN_S, count: 46, seed: 26 }, o));
      W.houses(Object.assign({ poly: TOWN_SW, count: 85, seed: 27, rot: 0 }, o));
      W.houses(Object.assign({ poly: TOWN_N, count: 20, seed: 28, rot: 0 }, o));
    }

    // ---------------------------------------------------------------- granite boulders: Golconda's look
    const pathAvoid = corridor(CLIMB, 7).concat(corridor(DESCENT, 6), corridor(PALACE, 7), roadAvoid, [COURT, T_MOSQUE, T_AMBAR, T_AKKANNA, T_RANI, T_DAD, T_TARAMATI, PLATEAU, T_JAIL, T_KALI]);
    W.boulders({ poly: HILL, count: 260, s: [1.2, 4.6], avoid: pathAvoid, pad: 1.0, seed: 41, color: '#9e9585' });
    W.boulders({ poly: CITADEL_IN, count: 90, s: [1.0, 3.6], avoid: pathAvoid.concat([HILL]), pad: 1.2, seed: 42, color: '#a09786' });
    const tor = (x, y, s, seed) => {
      W.boulder({ x, y, s, color: '#a1988a' });
      for (let k = 0; k < 3; k++) { const a = (seed * 77 + k * 120) * D2R; W.boulder({ x: x + Math.cos(a) * s * 0.9, y: y + Math.sin(a) * s * 0.9, s: s * (0.5 + 0.12 * k), color: '#998f80' }); }
      W.boulder({ x: x + 0.4, y: y - 0.3, h: W.ground(x, y) + s * 0.85, s: s * 0.45, block: false, color: '#a59c8d' });
    };
    for (const [x, y, s, k] of [[-40, 30, 4.2, 1], [-28, -38, 3.8, 2], [-52, -8, 4.6, 3], [24, 44, 3.6, 4], [-12, 40, 3.2, 5], [-70, -40, 3.4, 6], [-80, 10, 3.0, 7], [60, 40, 3.2, 8], [-30, 60, 2.8, 9], [-60, 44, 3.0, 10]]) tor(x, y, s, k);
    W.boulders({ x: -118, y: -20, r: 10, count: 6, s: [1.5, 3.5], seed: 43 });

    // ---------------------------------------------------------------- vegetation
    const inPlain = CITADEL_IN;
    if (old) {
      W.trees({ poly: inPlain, count: 22, types: { neem: 2, mango: 1, palm: 1 }, s: [0.8, 1.2], minDist: 8, avoid: pathAvoid.concat([HILL]), seed: 51 });
      W.trees({ poly: TOWN_E, count: 24, types: { neem: 2, round: 2, palm: 1, banyan: 1 }, s: [0.8, 1.3], minDist: 9, seed: 52, avoid: roadAvoid });
      W.trees({ poly: TOWN_SW, count: 24, types: { neem: 2, round: 2, palm: 1 }, s: [0.8, 1.3], minDist: 9, seed: 53 });
    } else if (mid) {
      W.trees({ poly: HILL, count: 60, types: { shrub: 4, acacia: 2, round: 1 }, s: [0.7, 1.2], minDist: 4, avoid: pathAvoid, maxSlope: 2.6, seed: 61 });
      W.trees({ poly: inPlain, count: 70, types: { acacia: 3, neem: 2, shrub: 3, banyan: 1 }, s: [0.8, 1.3], minDist: 5, avoid: pathAvoid.concat([HILL]), seed: 62 });
      W.trees({ poly: inPlain, count: 160, types: { grass: 3, shrub: 1 }, s: [0.7, 1.3], minDist: 2.5, avoid: pathAvoid, seed: 63 });
      W.trees({ poly: TOWN_E, count: 40, types: { neem: 2, acacia: 2, shrub: 2, banyan: 1 }, s: [0.8, 1.3], minDist: 6, seed: 64, avoid: roadAvoid });
      W.trees({ poly: TOWN_SW, count: 40, types: { neem: 2, acacia: 2, palm: 1 }, s: [0.8, 1.3], minDist: 7, seed: 65 });
    } else {
      W.trees({ poly: inPlain, count: 50, types: { neem: 3, round: 2, banyan: 1, ashoka: 1 }, s: [0.8, 1.3], minDist: 6, avoid: pathAvoid.concat([HILL]), seed: 71 });
      W.trees({ poly: HILL, count: 26, types: { shrub: 3, acacia: 1 }, s: [0.7, 1.1], minDist: 5, avoid: pathAvoid, maxSlope: 2.6, seed: 72 });
      W.trees({ poly: TOWN_E, count: 30, types: { neem: 2, round: 2, palm: 1 }, s: [0.8, 1.2], minDist: 8, seed: 73, avoid: roadAvoid });
      W.trees({ poly: TOWN_SW, count: 30, types: { neem: 2, round: 2, palm: 1 }, s: [0.8, 1.2], minDist: 8, seed: 74 });
    }

    // ---------------------------------------------------------------- backdrop: the Qutb Shahi tombs to the north-west, granite hills
    for (const [x, y, s] of [[-330, 470, 1.2], [-300, 452, 0.9], [-356, 438, 1.0], [-312, 500, 0.8], [-280, 486, 0.7], [-372, 480, 0.75]]) {
      W.scenery({ box: [x, y, 13 * s, 13 * s, 0, -1, 13 * s], color: 'plasterDark' });
      W.scenery({ hill: { x, y, r: 5.2 * s, h: 7 * s }, h0: 13 * s, color: 'plasterDark', seg: 12 });
    }
    for (const [x, y, r, h] of [[-430, 140, 80, 24], [-520, -120, 90, 20], [-200, 420, 70, 16], [180, 460, 90, 14]]) W.scenery({ hill: { x, y, r, h }, color: 'rock', h0: 0 });

    // ---------------------------------------------------------------- people and animals
    const BT = (x, y) => W.wallTopAt(B, x, y);
    const AT = (x, y) => W.wallTopAt(A, x, y);
    const walkB = [[137.2, -96], [137.2, -60], [137.2, -40], [137.2, -6]].map(([x, y]) => [x, y, BT(x, y)]);
    const walkA = [[228, -222.5], [244, -209.5], [254, -200]].map(([x, y]) => [x - 2.2, y + 2.2, AT(x, y)]);
    if (old) {
      W.npc({ kind: 'guard-deccan', at: [272, -194], face: 225, mode: 'idle' });
      W.npc({ kind: 'guard-deccan', at: [261, -180], face: 225, mode: 'idle' });
      W.npc({ kind: 'guard-deccan', at: [146, -32], face: 90, mode: 'idle' });
      W.npc({ kind: 'guard-deccan', at: [146, -40.5], face: 90, mode: 'idle' });
      W.npc({ kind: 'guard-deccan', at: [133.5, -33], face: 270, mode: 'idle' });
      W.npc({ kind: 'guard-deccan', patrol: walkB.concat(walkB.slice(1, -1).reverse()), count: 2 });
      W.npc({ kind: 'guard-deccan', patrol: walkA.concat(walkA.slice(1, -1).reverse()), count: 1 });
      W.npc({ kind: 'guard-deccan', at: [-3, -7], face: 0, mode: 'idle' });
      W.npc({ kind: 'courtier', circle: [0, -7, 4], count: 3 });
      W.npc({ kind: 'courtier', circle: [28, -57, 6], count: 2 });
      W.npc({ kind: 'officer', at: [25, -57.5], face: 200, mode: 'idle' });   // a European envoy at court (cf. Havart's print)
      W.npc({ kind: 'woman-red', circle: [30, -58, 6], count: 2 });
      W.npc({ kind: 'woman-indigo', circle: [66, -58, 5], count: 1 });
      W.npc({ kind: 'courtier', circle: [79, -40, 3], count: 2 });
      W.npc({ kind: 'courtier', circle: [118, -40, 8], count: 2 });
      W.npc({ kind: 'priest', at: [45.2, 12.4], face: 300, mode: 'idle' });
      W.npc({ kind: 'elephant-royal', at: [112, -44], face: 90, mode: 'idle' });
      W.npc({ kind: 'horse', circle: [104, -48, 5], count: 2 });
      W.npc({ kind: 'merchant', zone: corridor(ROAD.slice(3, 9), 10)[2], count: 3 });
      W.npc({ kind: 'merchant', circle: [190, -94, 10], count: 2 });
      W.npc({ kind: 'villager', circle: [230, -150, 14], count: 3 });
      W.npc({ kind: 'woman-green', circle: [225, -140, 12], count: 2 });
      W.npc({ kind: 'woman-red', circle: [176, -72, 10], count: 2 });
      W.npc({ kind: 'camel', circle: [250, -168, 6], count: 1 });
      W.npc({ kind: 'villager', circle: [300, -214, 10], count: 2 });
      W.npc({ kind: 'guard-deccan', circle: [40, -2, 6], count: 1 });
    } else if (mid) {
      W.npc({ kind: 'sepoy', at: [146, -40], face: 90, mode: 'idle' });
      W.npc({ kind: 'sepoy', at: [110, -56.5], face: 0, mode: 'idle' });
      W.npc({ kind: 'sepoy', at: [272, -194], face: 225, mode: 'idle' });
      W.npc({ kind: 'sepoy', patrol: walkB.concat(walkB.slice(1, -1).reverse()), count: 1 });
      W.npc({ kind: 'sepoy', at: [-3, -7], face: 0, mode: 'idle' });
      W.npc({ kind: 'courtier', at: [2, -8.5], face: 330, mode: 'idle' });
      W.npc({ kind: 'villager', circle: [200, -110, 20], count: 3 });
      W.npc({ kind: 'woman-red', circle: [230, -150, 12], count: 1 });
      W.npc({ kind: 'cow', circle: [-40, -60, 22], count: 3 });
      W.npc({ kind: 'goat', circle: [100, -40, 12], count: 3 });
      W.npc({ kind: 'priest', at: [45.2, 12.4], face: 300, mode: 'idle' });
      W.npc({ kind: 'villager', circle: [60, -80, 10], count: 1 });
    } else {
      W.npc({ kind: 'asi-guard', at: [136.5, -40], face: 90, mode: 'idle' });
      W.npc({ kind: 'asi-guard', at: [4, -9], face: 300, mode: 'idle' });
      W.npc({ kind: 'tourist-a', circle: [128, -36, 5], count: 3 });
      W.npc({ kind: 'tourist-c', circle: [128, -36, 5], count: 2 });
      W.npc({ kind: 'tourist-b', circle: [110, -40, 12], count: 3 });
      W.npc({ kind: 'student', circle: [110, -45, 10], count: 6, speed: 1.5 });
      W.npc({ kind: 'tourist-d', circle: [60, -20, 18], count: 3 });
      W.npc({ kind: 'tourist-a', circle: [40, 0, 18], count: 3 });
      W.npc({ kind: 'tourist-c', circle: [0, -6, 8], count: 4 });
      W.npc({ kind: 'tourist-b', circle: [30, 20, 8], count: 2 });
      W.npc({ kind: 'woman-red', circle: [45, 12, 3], count: 2 });
      W.npc({ kind: 'woman-green', circle: [45, 12, 3], count: 1 });
      W.npc({ kind: 'tourist-d', circle: [30, -58, 10], count: 3 });
      W.npc({ kind: 'student', circle: [60, -60, 10], count: 4 });
      W.npc({ kind: 'villager', circle: [220, -140, 30], count: 4 });
      W.npc({ kind: 'woman-indigo', circle: [190, -100, 16], count: 2 });
      W.npc({ kind: 'tourist-b', circle: [290, -210, 8], count: 2 });
      W.cannon({ x: 101, y: -44, dir: 200, len: 3.6, r: 0.36, carriage: false });
    }

    // ---------------------------------------------------------------- places
    for (const p of POIS) {
      const q = Object.assign({}, p, { eraNote: p.eraNote?.[era] || null });
      if (p.id === 'outerwall') q.h = AT(214, -230) + 0.5;
      if (p.id === 'portico') q.h = W.ground(130, -36) + 0.25;
      W.poi(q);
    }
    W.label(-62, 34, 'Lower citadel');
    W.label(-6, 22, 'Bala Hisar');
    W.label(238, -66, 'Golconda town');
    W.label(318, -214, 'Moat');
    // the depopulated outer town of the 1880s: open plots that settlers can be invited onto from the Fateh Darwaza
    if (mid) W.settlement({ name: 'Outer town plots', poly: TOWN_E, from: [286, -207, W.ground(286, -207)], plots: 18, size: [6, 8] });
    W.npc({ kind: 'rabbit', zone: [[-100, -130], [100, -130], [100, -230], [-100, -230]], count: mid ? 6 : 3, speed: 1.2 });
    W.npc({ kind: 'goat', zone: TOWN_S, count: 5, speed: 0.5 });
    W.npc({ kind: 'dog', zone: TOWN_E, count: 3, speed: 0.8 });
    W.npc({ kind: 'chicken', zone: TOWN_E, count: 6, speed: 0.6 }); W.npc({ kind: 'rooster', zone: TOWN_E, count: 2, speed: 0.6 });
    W.birds({ x: 120, y: -60, h: 70, r: 80, n: 1, kind: 'kite', speed: 0.05 });
    W.birds({ x: 200, y: -40, h: 22, r: 40, n: 9, kind: 'crow', speed: 0.16 });
    W.spawn(286, -207, null, 226);
  },
};
