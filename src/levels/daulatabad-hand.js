// Daulatabad (Devagiri) — the scarped hill citadel near Chhatrapati Sambhajinagar, Maharashtra.
// Plan compressed (1 unit ≈ 2.75 m) and the hill's height compressed about ×2.7 (summit 74 units ≈ 200 m); walls, gates
// and buildings stay at human scale. Layout from the research file (ASI, Durgbharari's gate-by-gate walkthrough, Deloche,
// EB1911): Balakot (the cone) → 50 m scarp and wet moat → Kalakot (double line, palaces, Mendha Top) → Mahakot (gates
// G1–G3, Chand Minar, Jami Masjid, Hathi Haud) → Ambarkot (town wall). The hill is centred at C; the Chand Minar stands
// about 0.6 km ENE of the summit (Wikipedia coordinates). Route: east town gate → G1–G3 → road WSW → Kalakot → moat
// bridge → citadel gate → Andheri tunnel → rock-cut path winding up the camera-facing side → Baradari → summit.
import { rectPts, regularPoly, wallStairs } from './kit.js';
import { pointAt, rng } from '../core/geom.js';
import { TAG } from '../core/nav.js';

// ---------------------------------------------------------------- helpers
const CX = -150, CY = -50; // hill centre and summit
const RAD = Math.PI / 180;
const P = (r, deg) => [CX + r * Math.cos(deg * RAD), CY + r * Math.sin(deg * RAD)];
const arc = (r, a0, a1, step = 3) => {
  const n = Math.max(1, Math.ceil(Math.abs(a1 - a0) / step)); const o = [];
  for (let i = 0; i <= n; i++) o.push(P(r, a0 + ((a1 - a0) * i) / n));
  return o;
};
const sector = (r0, r1, a0, a1, step = 3) => arc(r1, a0, a1, step).concat(arc(r0, a1, a0, step));
const ring = (r, n = 96) => regularPoly(CX, CY, r, n, 0);
const segQuad = (a, b, hw) => {
  const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1, nx = (-dy / L) * hw, ny = (dx / L) * hw;
  return [[a[0] + nx, a[1] + ny], [a[0] - nx, a[1] - ny], [b[0] - nx, b[1] - ny], [b[0] + nx, b[1] + ny]];
};
const occupyPath = (W, path, hw) => { for (let i = 0; i < path.length - 1; i++) W.occupy(segQuad(path[i], path[i + 1], hw), 0); };
const along = (path, s) => { const q = pointAt(path, s, false); return [q.x, q.y]; };
const walkPts = (path, s0, s1, n, h) => { const o = []; for (let i = 0; i <= n; i++) o.push([...along(path, s0 + ((s1 - s0) * i) / n), h]); return o.concat(o.slice(1, -1).reverse()); };

// ---------------------------------------------------------------- the hill
const R_TOP = 10, H_TOP = 74, R_RIM = 72, H_RIM = 14, EXP = 0.85;
const cone = (r) => (r <= R_TOP ? H_TOP : r >= R_RIM ? H_RIM : H_RIM + (H_TOP - H_RIM) * Math.pow((R_RIM - r) / (R_RIM - R_TOP), EXP));
const coneR = (h) => R_RIM - (R_RIM - R_TOP) * Math.pow(Math.min(1, Math.max(0, (h - H_RIM) / (H_TOP - H_RIM))), 1 / EXP);
const LIP = 88, MOAT_BED = -7, WATER = -3.5;           // moat between r = 74 and 86 (counterscarp lip at 88)
const SHELF_H = 3.0, EXIT_H = 16, BAR_H = 45;

// rock-cut path up the cone: a clockwise spiral cut ~2.8 into the slope at a fixed grade
function climb(th, h, h1, grade, cut, step = 2) {
  const pts = []; let r = coneR(h + cut(h));
  pts.push([...P(r, th), h]);
  for (let g = 0; h < h1 - 1e-3 && g < 400; g++) {
    const th2 = th - step;
    const gr = (hn) => { const rn = coneR(hn + cut(hn)); return (hn - h) / Math.hypot(rn - r, ((r + rn) / 2) * step * RAD); };
    let lo = h, hi = h1;
    if (gr(hi) <= grade) lo = hi; else for (let k = 0; k < 40; k++) { const m = (lo + hi) / 2; if (gr(m) > grade) hi = m; else lo = m; }
    h = lo; r = coneR(h + cut(h)); th = th2;
    pts.push([...P(r, th), h]);
  }
  return { pts, th, r, h };
}
const CUT = 2.8;
const ASC1 = climb(34.8, EXIT_H, BAR_H, 0.45, () => CUT);       // tunnel exit terrace → Baradari terrace
const R_B = ASC1.r, TH_B0 = ASC1.th, FLAT = 26, TH_B1 = TH_B0 - FLAT;
const FLATPTS = []; for (let a = 2; a <= FLAT; a += 2) FLATPTS.push([...P(R_B, TH_B0 - a), BAR_H]);
const ASC2 = climb(TH_B1, BAR_H, H_TOP, 0.5, (h) => CUT * Math.max(0, (H_TOP - h) / (H_TOP - BAR_H))); // → summit
const ASCENT = ASC1.pts.concat(FLATPTS, ASC2.pts.slice(1));
const TH_END = ASC2.th;                                          // where the path reaches the summit plateau
const TH_GATE = TH_B1 + 3;                                       // Bijli Darwaza
const BAR_TERRACE = sector(R_B - 2.6, R_B + 11.5, TH_B1 + 6, TH_B0 + 1);
const BAR_AT = P(R_B + 6.2, TH_B0 - 9);
const SUMMIT = ring(R_TOP + 0.6, 40);

// Andheri: winding rock-cut passage from the scarp-foot shelf to the exit terrace, both portals facing east and set on
// terrain-grid columns (x = -88 and x = -104) so the rock face rises cleanly above each mouth. Every interior corner gets
// a short flat landing: the engine extends each segment's walk surface past its ends (clamped to the end height and
// merged by max), so a corner between sloping segments, or a run steeper than ~0.37 followed by another segment, would
// leave an unwalkable step. The long run up the middle is EB1911's "steep stair"; only the last run (ending in open
// ground) is steeper.
function landings(corners, stub = 2) {
  const out = [corners[0]];
  for (let i = 1; i < corners.length - 1; i++) {
    const [x, y, h] = corners[i], p = corners[i - 1], n = corners[i + 1];
    const li = Math.hypot(x - p[0], y - p[1]), lo = Math.hypot(n[0] - x, n[1] - y);
    out.push([x - ((x - p[0]) / li) * stub, y - ((y - p[1]) / li) * stub, h], [x, y, h], [x + ((n[0] - x) / lo) * stub, y + ((n[1] - y) / lo) * stub, h]);
  }
  out.push(corners[corners.length - 1]);
  return out;
}
const TUNNEL = landings([[-88, -24, SHELF_H], [-97, -24, 3.7], [-104, -31, 4.4], [-115, -33, 5.2], [-115, -12, 11.2], [-104, -12, EXIT_H]]);
const SHELF = [[-88.2, -31.2], [-78.8, -31.2], [-78.8, -18.8], [-88.2, -18.8]];
const EXIT_T = [[-104.2, -17.2], [-93.5, -17.2], [-93.5, -8], [-97, -3.5], [-104.2, -1]];
const LEDGE = sector(70.6, 77, -14, 18);                         // rock ledge at the scarp foot with the unfinished caves
const CAVES = [-3, -7, -11];

// ---------------------------------------------------------------- walls (plan)
const MAHAKOT = [P(LIP, 100), [-162, 96], [-100, 124], [0, 130], [70, 112], [112, 80], [132, 46], [134, 14], [124, -12], [96, -55], [40, -100], [-30, -135], P(LIP, -62)];
const LINE2 = [[103.5, 87.4], [112, 62], [113, 14], [105.6, -40.4]];
const LINE3 = [[79.6, 105.6], [86, 50], [86, 0], [78.6, -69.3]];
const KAL_IN = [P(LIP, 83), ...arc(122, 83, -28, 3.7), P(LIP, -28)];
const KAL_OUT = [P(LIP, 87), ...arc(131, 87, -33, 4), P(LIP, -33)];
const AMBARKOT = [P(LIP, 116), [-205, 100], [-170, 165], [-80, 200], [40, 210], [150, 180], [205, 110], [214, 50], [214, 10], [208, -60], [170, -140], [80, -195], [-30, -205], [-105, -178], P(LIP, -82)];
const OUTER_DITCH = [[122, 82], [140, 50], [142.5, 30], [142, 12], [133, -14]];
const G0 = [214, 30], G1 = [133, 30], G2 = [112.5, 40], G3 = [86, 22], GK_OUT = P(131, 26), GK = P(122, 20);

// main approach (plan); everything is on the plain (0) up to the Kalakot stairs
const ROAD = [[300, 30], [214, 30], [150, 30], [133, 30], [124, 31], [118, 37], [112.5, 40], [104, 38], [92, 27], [86, 22], [70, 24], [40, 26], [10, 21], [-12, 14], P(145, 26), P(131, 26)];
const ZWINGER = [P(131, 26), P(127, 24.5), P(126.5, 21.5), P(122, 20), P(110.5, 20)];
const TERRACE_PATH = [P(103.9, 20), [-57, -18], [-63, -22]];

// lower-fort and Kalakot sites
const MINAR = [48, 56], MASJID = [12, 44], HAUD = [28, -2], HAMMAM = [58, 2];
const CHINI = P(98, 42), MENDHA = P(93, 27), RANG = P(96, 6), SOLDIERS = P(113, 10);

// house and scatter zones (kept clear of walls and roads)
const TOWN_EN = [[152, 40], [200, 40], [199, 100], [178, 132], [150, 132]];
const TOWN_ES = [[152, 20], [200, 20], [202, -55], [168, -120], [140, -80], [150, -30]];
const TOWN_N = [[-148, 112], [-100, 138], [0, 144], [70, 126], [112, 96], [150, 140], [140, 172], [40, 198], [-80, 190], [-160, 160]];
const TOWN_S = [[110, -62], [52, -112], [-25, -148], [-90, -145], [-100, -165], [-30, -192], [80, -182], [158, -134], [130, -90]];
const MAHA_N = [[18, 68], [72, 68], [74, 98], [60, 108], [18, 112]];
const MAHA_W = [[-6, 34], [-6, 100], [-40, 118], [-75, 112], [-70, 75], [-45, 55], [-25, 38]];
const MAHA_S = [[-10, -20], [72, -20], [72, -54], [40, -88], [-10, -60]];
const LOWER = [[-40, -60], [130, -60], [130, 120], [-40, 120]];
const CAMP = [[226, -170], [294, -170], [294, 200], [226, 200]];
const BATTERIES = [[233, -96], [232, -40], [233, 80], [232, 132]];
const ALL = [[-300, -250], [300, -250], [300, 250], [-300, 250]];

// ---------------------------------------------------------------- places
const SRC = {
  asi: 'https://asiaurangabadcircle.com/monument_detail.php?id=50',
  asiFort: 'https://asiaurangabadcircle.com/monuments/daulatabad/daulatabadFort.php',
  efeoDelhi: 'https://collection.efeo.fr/ws/web/app/collection/record/334896',
  minar: 'https://en.wikipedia.org/wiki/Chand_Minar',
  ic: 'https://icvtesting.nvli.in/forts-of-india/discovering-the-forts-of-india/daulatabad-fort-abode-wealth-and-power',
  eb: 'https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Daulatabad',
  durg: 'https://durgbharari.in/devgiri/',
  saha: 'https://www.sahapedia.org/the-fortress-of-daulatabad',
  efeoGun: 'https://collection.efeo.fr/ws/web/app/collection/record/331979',
  wiki: 'https://en.wikipedia.org/wiki/Daulatabad_Fort',
  rct: 'https://col.rct.uk/collection/1005025-af/the-siege-of-daulatabad-april-june-1633',
};
const POIS = [
  { id: 'ambarkot', at: [205, 30], r: 7, title: 'Ambarkot, the town wall',
    text: 'The outermost wall, about 4.4 km round (EB1911) and some 2 km from north to south, with double lines and round towers on its east side. It enclosed the old city of Devagiri–Daulatabad and is attributed to the Nizam Shahi regent Malik Ambar in the early 17th century, though it may go back to the Tughluqs.',
    source: SRC.wiki, eraNote: { today: 'Town gates such as the Makka Darwaza still stand; Jean Deloche photographed it in 2002.' } },
  { id: 'siege', at: [246, -6], r: 9, title: 'The siege of 1633',
    text: 'Shah Jahan\'s army took Daulatabad in 1633 after a siege of about four months. Murar\'s painting in the Padshahnama shows the citadel on its hill above the deep moat and the three walls of the lower fort, with a mine fired too early, the main gate opened and Mughal flags on the parapets.',
    source: SRC.rct, eraNote: { '1633': 'The tents and batteries here follow the painting\'s general scheme, not a plan of the siege works.', today: 'The painting belongs to the Windsor Padshahnama in the Royal Collection.' } },
  { id: 'gates', at: [125, 30], r: 7, title: 'Main gates with elephant spikes',
    text: 'The Mahakot is entered through a chain of non-aligned gates, so attackers had to turn in each court under fire from the walls. The wooden leaves of the first gate still carry iron spikes against war elephants, and the ASI lists "zigzag and lofty gates with iron spikes" among the fort\'s defences.',
    source: SRC.asi, eraNote: { '1633': 'The Padshahnama painting of the siege shows the main gate thrown open during the Mughal assault.', '1880s': 'Deen Dayal photographed the fort from the lower entrance gate, looking up to the hill with the Chand Minar on the right.', today: 'This is today\'s ticket entrance; guns on carriages stand in the court between the first and second gates.' } },
  { id: 'delhi', at: [105, 39], r: 6, title: 'Delhi Darwaza',
    text: 'The second gate of the Mahakot, the fort\'s middle enclosure, on the main approach. It has guard porches and an eagle sculpture at its base, and beside it stand a walled quadrangle of Jain shrines with a lamp tower and a brick-stepped stepwell. Jean Deloche documented it in his studies of Daulatabad (BEFEO 2005; Four Forts of the Deccan, 2009).',
    source: SRC.efeoDelhi },
  { id: 'minar', at: [48, 46], r: 7, title: 'Chand Minar (1445/46)',
    text: 'A 63 m victory tower of four storeys with bracketed balconies, raised under the Bahmani sultan Alauddin Ahmad Shah and modelled on Delhi\'s Qutb Minar. EB1911 gives it as 210 ft high and 70 ft round at the base and says it was once covered in Persian glazed tiles; a small mosque stands at its foot.',
    source: SRC.minar, eraNote: { '1633': 'The tower had stood for almost two centuries when the Mughal army arrived.', '1880s': 'From the lower entrance gate it stands on the right of the path up to the hill, as in Deen Dayal\'s view.', today: 'The tower is closed to visitors; its faded plaster is now pinkish.' } },
  { id: 'masjid', at: [14, 44], r: 7, title: 'Jami Masjid / Bharat Mata Mandir (1318)',
    text: 'Built in 1318 under Qutb-ud-din Mubarak Shah Khalji, the Delhi sultan, after the Yadava kingdom fell. Its flat-roofed, pillared halls round an open court were assembled from temple columns. The building is now the Bharat Mata Mandir.',
    source: SRC.ic, eraNote: { '1633': 'In 1633 it had served as the congregational mosque for more than three hundred years.' } },
  { id: 'haud', at: [28, 7], h: 2.2, r: 6, hTol: 4, title: 'Hathi Haud',
    text: 'A large stone tank in the lower fort, reached up a flight of steps and named for the elephants it is said to have watered. It belongs to a system of tanks, stepwells and terracotta pipelines that let the fort survive long sieges.',
    source: SRC.asiFort },
  { id: 'chini', at: P(91, 36), h: SHELF_H, r: 6, hTol: 4, title: 'Chini Mahal',
    text: 'The "China Palace" in the Kalakot, named for the blue-and-white glazed tiles that once faced it. Aurangzeb imprisoned Abul Hasan, the last Qutb Shahi king of Golconda, here in 1687 (EB1911).',
    source: SRC.eb, eraNote: { '1633': 'Abul Hasan\'s imprisonment lies more than fifty years in the future.', today: 'It survives as a ruined two-storey hall with a single entrance.' } },
  { id: 'mendha', at: P(101, 31), h: SHELF_H, r: 7, hTol: 6, title: 'Mendha Top (Qila Shikan)',
    text: 'A cannon about 6 m long on a round bastion near the palaces, commanding the moat bridge. It is named for the ram (mendha) on its breech and is also called Qila Shikan, the "fort-breaker"; local accounts say it was cast from five metals.',
    source: SRC.durg, eraNote: { '1633': 'One account calls the gun "Aurangzeb\'s Mendha"; whether it already stood here during the siege is not recorded.' } },
  { id: 'moat', at: [-71, -22], h: SHELF_H, r: 6, hTol: 4, title: 'The scarp and the moat',
    text: 'The Yadavas cut the hill\'s lower slopes into a vertical face about 50 m high all round, above a rock-cut moat about 15 m deep. The Tughluqs and Bahmanis deepened it and added a counterscarp and glacis, and dams kept it full of water.',
    source: SRC.saha, eraNote: { '1633': 'The only crossing is a narrow bridge; EB1911 later describes it as wide enough for no more than two men abreast.', '1880s': 'Deen Dayal photographed the east scarp and the trench below it.', today: 'An iron bridge now crosses beside the old stone bridge and its two dam walls.' } },
  { id: 'caves', at: P(74, -7), h: SHELF_H, r: 6, hTol: 4, title: 'Rock-cut caves and the Rang Mahal',
    text: 'Ten unfinished caves of the Yadava period are cut into the base of the hill, south of the Rang Mahal across the moat. The Rang Mahal is an 18th-century rectangular building of six interconnected chambers.',
    source: SRC.asiFort, eraNote: { '1633': 'The Rang Mahal has not been built yet; only the unfinished caves are here.' } },
  { id: 'andheri', at: [-85.5, -24], h: SHELF_H, r: 3.5, hTol: 3, title: 'Andheri, "the dark one"',
    text: 'A pitch-dark passage cut through the rock behind the citadel gate, the only way up to the citadel. EB1911 describes a long gallery with a gentle upward slope, interrupted midway by a steep stair whose top was covered by a grating on which the garrison could keep a fire burning.',
    source: SRC.eb, eraNote: { '1880s': 'William Simpson painted the rock-cut passage in 1875, and Deen Dayal photographed its mouth.', today: 'The passage is still unlit; visitors find their way with torches.' } },
  { id: 'baradari', at: P(R_B + 1, TH_B0 - 17), h: BAR_H, r: 6, hTol: 4, title: 'Baradari (1636)',
    text: 'A pavilion built for Shah Jahan in 1636, after the Mughal conquest, and later used by Aurangzeb. Accounts describe a white, two-storey, many-arched building, octagonal in plan, on a terrace of the upper hill about 150 steps above the tunnel.',
    source: SRC.ic, eraNote: { '1633': 'The terrace is empty: the pavilion was built three years after the siege.', '1880s': 'An album of drawings made in 1849–53 already includes a view from the Baradari.' } },
  { id: 'summit', at: P(6.5, TH_END + 70), h: H_TOP, r: 7, hTol: 4, title: 'Durga Top and the summit',
    text: 'At the summit, the Bala Hissar, a large gun on a pivot stands on an independent cavalier, a raised platform from which it commanded the whole fort. Deen Dayal photographed it about 1890 as the "Bala Hissar Gun".',
    source: SRC.efeoGun, eraNote: { today: 'Local accounts call it the Durga Top and give it a barrel about 20 ft (6 m) long.' } },
];

export default {
  id: 'daulatabad-hand', name: 'Daulatabad (hand level, kept for T2)', native: { text: 'दौलताबाद', lang: 'mr', script: 'mr' },
  region: 'Chhatrapati Sambhajinagar · Maharashtra', type: 'Hill citadel', coords: [19.9419, 75.2123],
  poiCount: POIS.length, groundName: 'Daulatabad', datum: 0, datumLabel: 'above the plain',
  units: { planScale: 2.75, vScale: 2.7 },
  bounds: [-300, -250, 300, 250], stride: 2, seed: 23,
  water: null,
  apron: { h: 0, color: '#ab9c69' },
  view: { az: -55, el: 40, zoom: 72, introAt: [20, -20], introZoom: 430 },
  light: { sky: '#e2e0d7', sunAz: -110, sunEl: 50 },
  palette: {
    wall: '#5f5850', wallTop: '#6e675e', trim: '#8f877a', stone: '#6c655b', plaster: '#dcd4c1', plasterDark: '#b5aa92',
    roof: '#6e5646', dome: '#dcd4c1', wood: '#4e3624', door: '#3e2a1c', iron: '#2a2624',
    grass: '#8c8a4c', dry: '#b9a56c', rock: '#6f665b', cliff: '#463f38', sand: '#c4b080', road: '#a8946e', court: '#a59a86',
    field: '#94904f', mud: '#7c6a4f', paved: '#8f877b', garden: '#5f7d3e', water: '#4d6b57', tank: '#4b6a50',
    leaf: '#5f7a36', leafDry: '#8d8546', trunk: '#5e4632', flag: '#c8842a', accent: '#b89a55', tile: '#3c73a8',
  },
  eraPalette: {
    '1633': { grass: '#9b9455', dry: '#c3ab70', plaster: '#e3ddcc' },
    '1880s': { grass: '#7f8a45', dry: '#ad9d66', plaster: '#cfc5ad', leaf: '#55722f' },
    today: { grass: '#7b8a44', dry: '#b3a36a', plaster: '#d4cab4' },
  },
  eras: [
    { id: '1633', year: '1633', label: 'The Mughal siege', short: 'Siege', lens: 'engraving',
      summary: 'Spring 1633: Shah Jahan\'s army has pitched its tents and batteries outside the town wall, while the Nizam Shahi garrison holds the gates, the moat and the citadel.',
      basis: 'Murar\'s painting of the siege in the Padshahnama (Royal Collection), which shows the citadel on its scarped hill above the moat and the three walls of the lower fort; Jean Deloche\'s surveys (2005, 2007, 2009) for the enclosures, gates and summit cavalier.',
      conjecture: 'The painting is not a plan: the layout of the camp and batteries, the flags and the number of guns are reconstructed. The Baradari (1636) and the Rang Mahal (18th century) are not yet built.',
      sources: ['DAU-05', 'DAU-22', 'DAU-23', 'DAU-24'] },
    { id: '1880s', year: '1880s', label: 'Deen Dayal\'s photographs', short: 'Photographs', lens: 'albumen',
      summary: 'A deserted fort in the Nizam\'s dominions: houses fallen, scrub on the walls, but the gates, the Chand Minar and the white Baradari still standing.',
      basis: 'Lala Deen Dayal\'s views (British Library): the fort from the lower entrance gate with the Chand Minar on the right, the east scarp and trench, the tunnel mouth and the Bala Hissar gun; earlier views by Grindlay (1826), Rawlins (c. 1847), an album of 1849–53 and Simpson\'s 1875 watercolour of the rock-cut passage.',
      conjecture: 'None of these images is online; the state of each building and the vegetation are inferred from their titles and from the surviving remains.',
      sources: ['DAU-06', 'DAU-07', 'DAU-08', 'DAU-09', 'DAU-10', 'DAU-11', 'DAU-12', 'DAU-13', 'DAU-14'] },
    { id: 'today', year: 'Today', label: 'ASI monument', short: 'Monument', lens: 'none',
      summary: 'A protected monument: visitors walk in past the Chand Minar, cross the moat on an iron bridge and climb through the dark Andheri to the summit gun.',
      basis: 'Present-day photographs by Jean Deloche (2002), the Aga Khan Visual Archive and Cornell University Library, and Durgbharari\'s gate-by-gate description of the site.',
      conjecture: 'The plan is compressed (1 unit ≈ 2.75 m) and so is the hill\'s height; the Ambarkot outline and the positions of the hill palaces are schematic.',
      sources: ['DAU-15', 'DAU-16', 'DAU-17', 'DAU-18', 'DAU-19', 'DAU-20', 'DAU-21', 'DAU-01'] },
  ],
  terrain: (era) => [
    { op: 'base', h: 0 },
    { op: 'noise', amp: 0.9, scale: 50 },
    // the cone with its scarped base (rough rock inside, fading at the rim)
    { op: 'raise', poly: ring(R_RIM, 120), h: (x, y) => cone(Math.hypot(x - CX, y - CY)), edge: 2.2, profile: 'scarp', rough: 2.2, roughScale: 9 },
    // level the plain where the Kalakot stands, then its raised palace terrace
    { op: 'flatten', poly: sector(LIP + 0.5, 136, -36, 90), h: 0, edge: 3 },
    { op: 'raise', poly: sector(LIP + 0.5, 104, -25, 80), h: SHELF_H, edge: 1.0 },
    // the wet moat round the scarp and the dry ditch before the Mahakot gate
    { op: 'moat', path: ring(80, 120), closed: true, w: 12, h: MOAT_BED, edge: 2 },
    { op: 'moat', path: OUTER_DITCH, w: 7, h: -3, edge: 1.5 },
    // Hathi Haud stands on a raised platform
    { op: 'raise', poly: rectPts(HAUD[0], HAUD[1], 21, 20, 0), h: 2.2, edge: 1.2 },
    // level the approach road and the gate courts
    { op: 'ramp', path: ROAD.map((p) => [p[0], p[1], 0]), w: 7, edge: 4 },
    { op: 'ramp', path: ZWINGER.map((p) => [p[0], p[1], 0]), w: 5, edge: 1.5 },
    ...[G0, G1, G2, G3].map((g) => ({ op: 'flatten', poly: rectPts(g[0], g[1], 18, 22, 0), h: 0, edge: 4 })),
    { op: 'flatten', poly: rectPts(MASJID[0], MASJID[1], 34, 30, 0), h: 0, edge: 4 },
    { op: 'flatten', poly: rectPts(MINAR[0], MINAR[1], 20, 18, 0), h: 0, edge: 4 },
    // the rock-cut path up the cone
    { op: 'ramp', path: ASCENT, w: 4.4, edge: 1.6, paint: era === 'today' ? 'paved' : 'rock' },
    // cut terraces: scarp-foot shelf, cave ledge, tunnel exit, Baradari terrace, summit
    { op: 'flatten', poly: SHELF, h: SHELF_H, edge: 0.6 },
    { op: 'flatten', poly: LEDGE, h: SHELF_H, edge: 0.8 },
    { op: 'flatten', poly: EXIT_T, h: EXIT_H, edge: 0.6 },
    { op: 'flatten', poly: BAR_TERRACE, h: BAR_H, edge: 1.5 },
    { op: 'flatten', poly: SUMMIT, h: H_TOP, edge: 1.5 },
    { op: 'edge', h: 0, w: 30 },
    // paint
    { op: 'paint', path: ROAD, w: 5, paint: 'road' },
    { op: 'paint', path: ZWINGER, w: 3.5, paint: 'road' },
    { op: 'paint', path: TERRACE_PATH, w: 3.5, paint: era === 'today' ? 'paved' : 'road' },
    { op: 'paint', poly: SHELF, paint: 'rock' }, { op: 'paint', poly: LEDGE, paint: 'rock' },
    { op: 'paint', poly: EXIT_T, paint: 'rock' }, { op: 'paint', poly: BAR_TERRACE, paint: 'paved' },
    { op: 'paint', poly: ring(R_TOP + 0.3, 40), paint: 'rock' },
    { op: 'paint', poly: rectPts(MASJID[0] + 1.5, MASJID[1], 15, 16, 0), paint: 'paved' },
    { op: 'paint', poly: rectPts(HAUD[0], HAUD[1], 19, 18, 0), paint: era === '1880s' ? 'mud' : 'paved' },
    ...(era === 'today' ? [
      { op: 'paint', poly: [[20, 34], [78, 34], [78, 64], [20, 64]], paint: 'garden' },
      { op: 'paint', poly: [[40, -14], [76, -14], [76, 10], [40, 10]], paint: 'garden' },
      { op: 'paint', path: [[300, -40], [236, -6], [232, 30], [236, 70], [300, 110]], w: 8, paint: 'road' },
    ] : []),
    ...(era === '1633' ? [{ op: 'paint', poly: CAMP, paint: 'sand' }] : []),
  ],
  build(W) {
    const era = W.era;
    const old = era === '1633', photo = era === '1880s', now = era === 'today';
    const rnd = rng(era === '1633' ? 11 : era === '1880s' ? 12 : 13);

    // ======================= big zones first (smaller zones added later take priority)
    W.zone(AMBARKOT.concat(arc(LIP, -82, 116, 6)), 'Lower town');
    W.zone(MAHAKOT.concat(arc(LIP, -62, 100, 6)), 'Mahakot');
    W.zone(KAL_OUT.concat(arc(LIP, -33, 87, 6)), 'Kalakot');
    W.zone([[113, 62], [128.5, 52], [133.5, 30], [131, 8], [113, 10]], 'First court');
    W.zone([[86, 50], [112, 62], [113, 14], [86, 0]], 'Second court');
    if (old) W.zone(CAMP, 'Mughal camp');

    // keep scatter (houses, trees) off roads, paths and wall lines; walls only occupy their footprint at finish()
    occupyPath(W, ROAD, 4.5); occupyPath(W, ZWINGER, 3); occupyPath(W, TERRACE_PATH, 3); occupyPath(W, ASCENT, 3.4);
    for (const p of [MAHAKOT, LINE2, LINE3, KAL_IN, KAL_OUT, AMBARKOT]) occupyPath(W, p, 6);
    for (const p of [EXIT_T, BAR_TERRACE, SUMMIT, SHELF, LEDGE]) W.occupy(p, 0.5);

    // ======================= walls, gates and bastions
    const mer = { style: 'round', w: 1.0, gap: 0.8, h: 0.95 };
    const amb = W.wall({ path: AMBARKOT, closed: false, outer: 'left', h: 7, thick: 3, batter: 0.06, parapet: { h: 1.2, t: 0.6 }, merlon: mer, color: 'wall' });
    const maha = W.wall({ path: MAHAKOT, closed: false, outer: 'left', h: 9, thick: 3.4, batter: 0.07, parapet: { h: 1.3, t: 0.7 }, merlon: mer, color: 'wall' });
    const line2 = W.wall({ path: LINE2, closed: false, outer: 'left', h: 8, thick: 3, batter: 0.06, parapet: { h: 1.2, t: 0.6 }, merlon: mer, color: 'wall' });
    const line3 = W.wall({ path: LINE3, closed: false, outer: 'left', h: 8, thick: 3, batter: 0.06, parapet: { h: 1.2, t: 0.6 }, merlon: mer, color: 'wall' });
    const kin = W.wall({ path: KAL_IN, closed: false, outer: 'left', h: 9.5, thick: 3, batter: 0.07, parapet: { h: 1.3, t: 0.7 }, merlon: mer, color: 'wall' });
    const kout = W.wall({ path: KAL_OUT, closed: false, outer: 'left', h: 5.5, thick: 2.2, batter: 0.05, parapet: { h: 1.0, t: 0.5 }, merlon: mer, color: 'wall' });

    W.gate({ wall: amb, at: G0, width: 4, spring: 4.2, rise: 2.2, name: 'Ambarkot town gate', towers: { r: 5, dh: 1.6, off: 1.6 }, doors: !now, panel: '#8f877a' });
    W.gate({ wall: maha, at: G1, width: 4, spring: 4.4, rise: 2.3, name: 'Mahakot gate', towers: { r: 4.8, dh: 1.8, off: 1.5 }, frameUp: 1.4 });
    W.gate({ wall: line2, at: G2, width: 3.8, spring: 4.2, rise: 2.1, name: 'Delhi Darwaza', towers: { r: 4.2, dh: 1.6, off: 1.2 } });
    W.gate({ wall: line3, at: G3, width: 3.8, spring: 4.0, rise: 2.0, name: 'Third gate', towers: { r: 4.0, dh: 1.5, off: 1.2 }, doors: old });
    W.gate({ wall: kout, at: GK_OUT, width: 3.4, spring: 3.4, rise: 1.6, name: 'Kalakot outer gate', towers: false, doors: old });
    W.gate({ wall: kin, at: GK, width: 3.6, spring: 4.0, rise: 2.0, name: 'Kalakot gate', towers: { r: 3.2, dh: 1.4, off: 0.6 } });

    // bastions (round towers); guns on most of them in 1633, fewer later
    const gunP = old ? 0.8 : photo ? 0.3 : 0.25;
    const gun = () => (rnd() < gunP ? { len: 3.2, r: 0.32 } : false);
    for (const p of [[-163.6, 66], [-162, 96], [-100, 124], [-50, 127], [0, 130], [35, 121], [70, 112], [112, 80], [124, -12], [96, -55], [68, -77.5], [40, -100], [5, -117.5], [-30, -135], [-69, -131]]) W.bastion({ at: p, wall: maha, r: 5.5, dh: 0.6, cannon: gun() });
    for (const p of [[109.5, -12], [108, 76]]) W.bastion({ at: p, wall: line2, r: 4.5, dh: 0.5, cannon: gun() });
    for (const p of [[83, 77], [82.5, -34]]) W.bastion({ at: p, wall: line3, r: 4.5, dh: 0.5, cannon: gun() });
    for (const a of [74, 52, 36, 2, -16]) W.bastion({ at: P(122, a), wall: kin, r: 4.6, dh: 0.6, cannon: gun() });
    for (const a of [66, 44, 8, -14]) W.bastion({ at: P(131, a), wall: kout, r: 3.0, dh: 0.4, cannon: false });
    for (const s of [35, 105, 175, 245, 315, 385, 455, 525, 590, 715, 785, 855, 925, 995, 1065, 1135]) {
      W.bastion({ at: along(AMBARKOT, s), wall: amb, r: 4.6, dh: 0.6, cannon: old && rnd() < 0.4 ? { len: 3, r: 0.3 } : false });
    }
    // stairs up to the wall-walks: Mahakot (north stretch) and Ambarkot (south of the town gate)
    wallStairs(W, maha, { at: [48, 117.6], dir: -1, run: 10 });
    wallStairs(W, amb, { at: [213, -3], dir: -1, run: 14 });

    // ======================= the town (between Ambarkot and Mahakot)
    const houseBase = { size: [5, 9], colors: ['plaster', 'plasterDark'], roofColor: 'roof', spacing: 2.0, maxSlope: 2 };
    if (now) {
      // ticket office and stalls outside the main gate
      W.building({ rect: [146, 41, 7, 4.5, 0], h: 3.2, color: '#d8cfbd', roof: 'flat', windows: { style: 'rect', spacing: 2.2, w: 0.9, h: 1.0 }, kind: 'building' });
      for (let i = 0; i < 4; i++) W.building({ rect: [158 + i * 5.5, 19.5, 4.2, 3.4, 0], h: 2.6, color: ['#c9b48d', '#b7c4c8', '#d1b48a', '#c8c0a8'][i], roof: 'tiled', roofColor: '#8a6a4a', windows: false, kind: 'house' });
    }
    if (old) {
      W.houses(Object.assign({ poly: TOWN_EN, count: 22, h: [1, 2], roof: 'flat', seed: 31, jharokhaChance: 0.15 }, houseBase));
      W.houses(Object.assign({ poly: TOWN_ES, count: 22, h: [1, 2], roof: 'flat', seed: 32 }, houseBase));
      W.houses(Object.assign({ poly: TOWN_N, count: 34, h: [1, 2], roof: 'flat', seed: 33, chhatriChance: 0.05 }, houseBase));
      W.houses(Object.assign({ poly: TOWN_S, count: 30, h: [1, 2], roof: 'mix', seed: 34 }, houseBase));
    } else if (photo) {
      for (const [poly, n, sd] of [[TOWN_EN, 14, 41], [TOWN_ES, 14, 42], [TOWN_N, 20, 43], [TOWN_S, 18, 44]]) W.houses(Object.assign({ poly, count: n, h: [1, 2], roof: 'flat', seed: sd, ruin: true, ruinShare: 0.85, ruinH: 0.55 }, houseBase));
    } else {
      // ruins inside the walls; the modern village spreads in the south-east
      for (const [poly, n, sd] of [[TOWN_EN, 8, 51], [TOWN_N, 12, 53]]) W.houses(Object.assign({ poly, count: n, h: [1, 1], roof: 'flat', seed: sd, ruin: true, ruinShare: 1, ruinH: 0.45 }, houseBase));
      W.houses({ poly: TOWN_ES, count: 20, size: [5, 8], h: [1, 2], colors: ['#d8cfc0', '#cfd6cf', '#e0c9a6', '#c9d2d8'], roof: 'flat', seed: 52, spacing: 2.5 });
      W.houses(Object.assign({ poly: TOWN_S, count: 14, h: [1, 1], roof: 'flat', seed: 54, ruin: true, ruinShare: 0.8, ruinH: 0.45 }, houseBase));
    }

    // ======================= Mahakot: gate courts
    // first court: guard rooms along the wall and guns on carriages
    W.building({ rect: [121.6, 53.5, 10, 4.5, -59.5], h: 3.4, color: 'stone', roof: 'flat', windows: { style: 'arch', spacing: 2.4, w: 1.0, h: 1.6 }, kind: 'barracks' });
    W.building({ rect: [125.3, 5.9, 10, 4.5, 69], h: 3.4, color: 'stone', roof: 'flat', windows: { style: 'arch', spacing: 2.4, w: 1.0, h: 1.6 }, kind: 'barracks' });
    for (const [x, y, d] of [[122, 22, 0], [121.5, 45, 10], [118.5, 18, -20]]) W.cannon({ x, y, dir: d, len: 3.0, r: 0.3, carriage: true });
    // second court: brick-stepped stepwell with a gun in front; walled quadrangle of Jain shrines with a lamp tower
    W.tank({ poly: rectPts(99, 59, 6.5, 13, 0), waterDepth: 2.2, tiers: 3, color: '#8a6450', rim: 0 });
    W.cannon({ x: 99, y: 49.5, dir: -90, len: 2.8, r: 0.28, carriage: true });
    W.wall({ path: [[94, 71], [90, 71], [90, 81], [102, 81], [102, 71], [98, 71]], closed: false, outer: 'right', h: 3.2, thick: 0.8, batter: 0, parapet: false, merlon: false, walk: false, color: 'stone', smooth: 0 });
    W.temple({ x: 96, y: 77.6, rot: 0, w: 3.0, h: 4.4, plinth: 0.5, style: 'jain', mandapa: { d: 2.6, w: 3.2, h: 2.4, roof: 'flat' }, color: 'stone', stairs: false });
    W.tower({ x: 91.9, y: 74, w: 0.9, storeys: 5, sh: 1.25, taper: 0.04, plinth: 0.5, top: 'chhatri', color: 'stone', cross: false });
    W.zone(rectPts(96, 76, 12, 10, 0), 'Jain shrines');

    // ======================= lower fort monuments
    // Chand Minar on its plinth, with the small mosque at its foot
    const mTop = W.platform({ poly: rectPts(MINAR[0], MINAR[1], 11, 11, 0), dh: 1.2, color: 'stone' });
    W.stairs({ from: [MINAR[0], MINAR[1] - 8.7], to: [MINAR[0], MINAR[1] - 5.45, mTop], w: 3.2, color: 'stone' });
    W.minaret({ x: MINAR[0], y: MINAR[1], r: 2.35, h: 34, base: mTop - 0.1, rings: [0.3, 0.54, 0.76, 0.92], color: old ? '#d2aa92' : photo ? '#bba08e' : '#c99f8f', top: 'cupola' });
    W.building({ rect: [MINAR[0] - 10, MINAR[1], 6, 8, 0], h: 3.8, color: old ? 'plaster' : 'plasterDark', roof: 'flat', windows: { style: 'arch', spacing: 2.0, w: 1.0, h: 1.8, rows: [0] }, kind: 'mosque' });
    W.zone(rectPts(MINAR[0] - 2, MINAR[1] - 2, 24, 22, 0), 'Chand Minar');

    // Jami Masjid / Bharat Mata Mandir: pillared halls round an open court (prayer hall on the west)
    const mx = MASJID[0], my = MASJID[1];
    W.pavilion({ x: mx - 10.5, y: my, w: 7.5, d: 25, rot: 0, plinth: 0.5, colH: 4.2, cols: [3, 9], inner: true, roof: 'flat', color: 'stone', stairs: false, kind: 'mosque', parapet: { h: 0.6, t: 0.3 } });
    for (const sy of [-1, 1]) W.pavilion({ x: mx + 1.5, y: my + sy * 10.4, w: 16, d: 4.2, rot: 0, plinth: 0.5, colH: 3.6, cols: [6, 2], roof: 'flat', color: 'stone', stairs: false, kind: 'mosque', parapet: { h: 0.5, t: 0.25 } });
    for (const sy of [-1, 1]) W.pavilion({ x: mx + 11.5, y: my + sy * 7.2, w: 4.2, d: 7, rot: 0, plinth: 0.5, colH: 3.6, cols: [2, 3], roof: 'flat', color: 'stone', stairs: false, kind: 'mosque', parapet: { h: 0.5, t: 0.25 } });
    W.zone(rectPts(mx, my, 26, 25, 0), now ? 'Bharat Mata Mandir' : 'Jami Masjid');

    // Hathi Haud on its platform, with steps from the road and the ruined temple beside it
    W.tank({ x: HAUD[0], y: HAUD[1], r: 8, n: 4, rot: 45, rim: 2.2, waterDepth: 2.6, tiers: 6, color: 'stone', waterColor: photo ? '#56664a' : 'tank' });
    W.stairs({ from: [HAUD[0], HAUD[1] + 17.2, 0], to: [HAUD[0], HAUD[1] + 9.95, 2.2], w: 4, color: 'stone' });
    W.ruin({ rect: [7, -8, 8, 7, 4], h: 3.4, thick: 0.6, color: 'stone', doors: [{ edge: 3, at: 0.5, w: 2.2 }] });
    W.zone(rectPts(HAUD[0], HAUD[1], 21, 20, 0), 'Hathi Haud');

    // hammam (small domed rooms)
    W.building({ rect: [HAMMAM[0], HAMMAM[1], 10, 6, 0], h: 3.4, color: old ? 'plaster' : 'plasterDark', roof: 'domes', domes: [{ x: HAMMAM[0] - 2.6, y: HAMMAM[1], r: 1.8 }, { x: HAMMAM[0] + 2.6, y: HAMMAM[1], r: 1.8 }], domeShape: 'half', windows: { style: 'rect', spacing: 2.6, w: 0.5, h: 0.6, sill: 2.2 }, kind: 'building' });
    W.zone(rectPts(HAMMAM[0], HAMMAM[1], 14, 10, 0), 'Hammam');

    // settlement inside the Mahakot (the sculpture store behind the minar today)
    if (now) W.building({ rect: [62, 80, 10, 6, 0], h: 3.4, color: 'plasterDark', roof: 'flat', windows: { style: 'arch', spacing: 2.4 }, kind: 'building' });
    const mh = Object.assign({}, houseBase, { size: [5, 8] });
    if (old) {
      W.houses(Object.assign({ poly: MAHA_N, count: 14, h: [1, 2], roof: 'flat', seed: 61, chhatriChance: 0.08 }, mh));
      W.houses(Object.assign({ poly: MAHA_W, count: 14, h: [1, 2], roof: 'flat', seed: 62 }, mh));
      W.houses(Object.assign({ poly: MAHA_S, count: 14, h: [1, 2], roof: 'flat', seed: 63 }, mh));
    } else {
      for (const [poly, n, sd] of [[MAHA_N, 10, 71], [MAHA_W, 10, 72], [MAHA_S, 10, 73]]) W.houses(Object.assign({ poly, count: n, h: [1, 1], roof: 'flat', seed: sd, ruin: true, ruinShare: 1, ruinH: photo ? 0.6 : 0.45 }, mh));
    }

    // ======================= Kalakot: soldiers' hall, steps, palace terrace, Mendha Top
    W.zone(sector(LIP, 104, -25, 80), 'Kalakot palace terrace');
    W.building({ rect: [SOLDIERS[0], SOLDIERS[1], 11, 4.5, 100], h: 3.6, color: 'stone', roof: 'flat', windows: { style: 'arch', spacing: 2.2, w: 1.0, h: 1.7 }, kind: 'barracks' });
    W.stairs({ from: [...P(110.6, 20), 0], to: [...P(103.95, 20), SHELF_H], w: 3.4, color: 'stone' });
    // Chini Mahal: long two-storey hall (tiled cornice while intact)
    if (old) W.building({ rect: [CHINI[0], CHINI[1], 16, 7, 42 - 90], storeys: 2, storeyH: 3.6, color: 'plaster', trim: 'tile', roof: 'flat', merlon: 'round', windows: { style: 'arch', spacing: 2.3, w: 1.0, h: 1.7 }, kind: 'palace' });
    else W.ruin({ rect: [CHINI[0], CHINI[1], 16, 7, 42 - 90], h: photo ? 6.4 : 6.0, thick: 0.8, color: 'plasterDark', storeys: 2, doors: [{ edge: 0, at: 0.5, w: 2.4 }] });
    W.zone(rectPts(CHINI[0], CHINI[1], 20, 11, -48), 'Chini Mahal');
    // Rang Mahal (18th century)
    if (!old) {
      W.building({ rect: [RANG[0], RANG[1], 16, 8, 6 - 90], h: 4.2, color: 'plasterDark', roof: 'flat', windows: { style: 'arch', spacing: 2.6, w: 1.2, h: 2.0, rows: [0] }, kind: 'palace' });
      W.zone(rectPts(RANG[0], RANG[1], 20, 12, -84), 'Rang Mahal');
    }
    // ruined residence on the terrace's north part
    W.ruin({ rect: [...P(97, 62), 14, 7, 62 - 90], h: old ? 5.5 : 3.6, thick: 0.7, color: old ? 'plasterDark' : 'stone', doors: [{ edge: 0, at: 0.5, w: 2.2 }, { edge: 2, at: 0.3, w: 2 }] });
    // Mendha Top on its round bastion commanding the bridge (stairs climb from the north)
    const mt = SHELF_H + 4.5;
    const outM = [Math.cos(207 * RAD), Math.sin(207 * RAD)];
    W.bastion({ at: MENDHA, r: 4.8, top: mt, out: outM, merlon: { style: 'round' }, color: 'wall' });
    W.stairs({ from: [MENDHA[0], MENDHA[1] + 13.7, SHELF_H], to: [MENDHA[0], MENDHA[1] + 4.7, mt], w: 2.6, color: 'wall', side: true });
    if (old) W.cannon({ x: MENDHA[0] + outM[0] * 1.2, y: MENDHA[1] + outM[1] * 1.2, h: mt, dir: 207, len: 3.4, r: 0.34, carriage: true });
    else W.cannon({ x: MENDHA[0] + outM[0] * 0.6, y: MENDHA[1] + outM[1] * 0.6, h: mt, dir: 207, len: 6.2, r: 0.56, carriage: false, color: '#6e5a3c', name: 'Mendha Top' });

    // ======================= moat: water, bridges, dams
    for (let a = 0; a < 360; a += 30) W.water({ poly: sector(72.6, 87.4, a, a + 30, 3), level: WATER, color: photo ? '#56664a' : 'water' });
    W.bridge({ from: [-62.5, -22], to: [-80.2, -22], w: 2.4, h: SHELF_H, piers: 2, color: 'stone', rail: true });
    if (now) W.bridge({ from: [-62.5, -28.4], to: [-80.2, -28.4], w: 3.0, h: SHELF_H + 0.05, piers: 1, color: '#4a4a48', railColor: '#2b2b2b', rail: true });
    for (const a of [44, -20]) W.wall({ path: [P(71.5, a), P(89, a)], closed: false, outer: 'left', top: WATER + 1.6, thick: 2.0, batter: 0.02, parapet: false, merlon: false, walk: false, color: 'stone', smooth: 0 });
    W.zone([[-62, -17], [-80, -17], [-80, -33], [-62, -33]], 'Moat bridge');

    // ======================= citadel gate, Andheri, caves
    W.zone(LEDGE, 'Rock-cut caves');
    W.zone(SHELF, 'Foot of the scarp');
    const g5w = W.wall({ path: [[-83.6, -33], [-83.6, -17]], closed: false, outer: 'right', top: SHELF_H + 6.5, thick: 2.4, batter: 0.03, parapet: { h: 1.0, t: 0.5 }, merlon: mer, walk: false, color: 'wall', smooth: 0 });
    W.gate({ wall: g5w, at: [-83.6, -24], width: 2.8, spring: 3.0, rise: 1.5, name: 'Citadel gate', towers: false, frameW: 0.5, panel: '#7f7769', doors: !now });
    W.tunnel({ path: TUNNEL, w: 2.4, height: 2.8, name: 'Andheri' });
    for (const a of CAVES) W.tunnel({ path: [[...P(70.9, a), SHELF_H], [...P(66.6, a), SHELF_H]], w: 2.2, height: 2.4 });

    // ======================= upper hill: exit terrace, rock-cut path, Baradari, Bijli Darwaza, summit
    W.zone(EXIT_T, 'Tunnel exit');
    W.temple({ x: -100.5, y: -6, rot: 0, w: 2.6, h: 3.4, plinth: 0.35, style: 'nagara', mandapa: false, color: old ? 'plaster' : now ? '#e6dccb' : 'plasterDark', flag: now });
    W.zone(rectPts(-100.5, -6, 6, 6, 0), 'Ganesh temple');
    // rock-cut steps along the path (decorative: the walkable surface is the cut in the terrain, so solid: false
    // keeps the step blocks from masking the tunnel that runs underneath)
    for (let i = 0; i < ASCENT.length - 1; i++) {
      const a = ASCENT[i], b = ASCENT[i + 1];
      if (Math.abs(b[2] - a[2]) < 0.35) continue;
      W.stairs({ from: a, to: b, w: 2.4, color: 'stone', solid: false });
    }
    // Baradari terrace and pavilion (built 1636)
    W.zone(BAR_TERRACE, 'Baradari terrace');
    if (!old) {
      const oct = regularPoly(BAR_AT[0], BAR_AT[1], 4.6, 8, 22.5 + TH_B0 - 9);
      const bar = W.building({ poly: oct, storeys: 2, storeyH: 3.4, color: photo ? '#e3ddd0' : '#ece7dc', roof: 'flat', merlon: 'round', windows: { style: 'arch', spacing: 1.7, w: 1.2, h: 2.2, sill: 0.3 }, kind: 'pavilion' });
      W.chhatri({ x: BAR_AT[0], y: BAR_AT[1], base: bar.top + 0.1, size: 2.4, h: 1.8, dome: 'half', color: '#ece7dc' });
    }
    // rock-cut cistern on the terrace
    W.tank({ poly: rectPts(...P(R_B + 9.5, TH_B0 - 17.5), 3.4, 3.4, TH_B0 - 17.5), waterDepth: 1.2, tiers: 2, color: 'stone' });
    // Bijli Darwaza: wall across the path just beyond the terrace
    const bij = W.wall({ path: [P(R_B - 6.5, TH_GATE), P(R_B + 7, TH_GATE)], closed: false, outer: 'left', top: BAR_H + 6.2, thick: 2.2, batter: 0.03, parapet: { h: 1.0, t: 0.5 }, merlon: mer, walk: false, color: 'wall', smooth: 0 });
    W.gate({ wall: bij, at: P(R_B, TH_GATE), width: 3.0, spring: 3.2, rise: 1.6, name: 'Bijli Darwaza', towers: false, frameW: 0.5, doors: old });
    // summit: cavalier with the big gun on a pivot, flagstaff
    W.zone(ring(R_TOP + 1, 24), 'Bala Hissar (summit)');
    const THS = TH_END + 26, CAV = H_TOP + 3.2;
    const outC = [-Math.cos(THS * RAD), -Math.sin(THS * RAD)];
    W.bastion({ at: [CX, CY], r: 3.4, top: CAV, out: outC, merlon: { style: 'round', w: 0.8, gap: 0.7 }, color: 'wall' });
    W.stairs({ from: [...P(10.2, THS), H_TOP], to: [...P(3.35, THS), CAV], w: 2.2, color: 'wall' });
    W.cannon({ x: CX + Math.cos(20 * RAD) * 0.6, y: CY + Math.sin(20 * RAD) * 0.6, h: CAV, dir: 20, len: 6.4, r: 0.58, carriage: false, name: 'Durga Top' });
    const fl = P(7.6, THS + 115);
    W.flag({ x: fl[0], y: fl[1], h: H_TOP, pole: 9, color: old ? '#3f6b3a' : '#e9e4d8', size: old ? 1.6 : 0.01 });

    // ======================= 1633: the Mughal camp outside the town wall
    if (old) {
      const tent = (x, y, w, d, rot, col, roof = 'pyramid', h = 1.5, rh = 1.7) => W.building({ rect: [x, y, w, d, rot], h, color: col, roofColor: col, roof, roofH: rh, parapet: false, windows: false, cornice: false, kind: 'building', pad: 0.3 });
      // commander's enclosure: red screen walls, great tent and canopy
      W.wall({ path: [[262, 70], [252, 70], [252, 98], [282, 98], [282, 70], [270, 70]], closed: false, outer: 'right', h: 2.2, thick: 0.35, batter: 0, parapet: false, merlon: false, walk: false, color: '#a8352a', smooth: 0 });
      tent(268, 88, 9, 6, 0, '#b23a2a', 'hip', 2.4, 2.6);
      tent(258, 88, 4, 4, 0, '#c8b89a');
      W.pavilion({ x: 270, y: 78.5, w: 8, d: 5, rot: 0, plinth: 0.05, colH: 2.4, cols: [3, 2], roof: 'bangaldar', color: '#d9c9a8', roofColor: '#b23a2a', stairs: false, walk: false, kind: 'pavilion' });
      W.zone([[252, 70], [282, 70], [282, 98], [252, 98]], 'Commander\'s tents');
      // tents along the road, clear of the road, the batteries and the siege marker
      const spots = [];
      for (let k = 0; k < 600 && spots.length < 46; k++) {
        const x = 236 + rnd() * 56, y = -160 + rnd() * 350;
        if (Math.abs(y - 30) < 9 || (x > 248 && x < 286 && y > 64 && y < 104)) continue;
        if (BATTERIES.some(([bx, by]) => Math.abs(x - bx) < 10 && Math.abs(y - by) < 12)) continue;
        if (Math.hypot(x - 246, y + 6) < 9) continue;
        if (spots.some(([a, b]) => Math.hypot(a - x, b - y) < 9)) continue;
        spots.push([x, y]);
      }
      for (const [x, y] of spots) {
        const big = rnd() < 0.25;
        tent(x, y, big ? 5.5 : 3.4, big ? 4.2 : 3.4, rnd() < 0.5 ? 0 : 90, rnd() < 0.15 ? '#c27a4a' : rnd() < 0.5 ? '#e4dbc6' : '#d6cbb0', big ? 'hip' : 'pyramid', big ? 1.8 : 1.4, big ? 1.9 : 1.6);
      }
      // batteries facing the town wall
      for (const [x, y] of BATTERIES) {
        const bt = W.platform({ poly: rectPts(x, y, 7, 12, 0), dh: 1.3, color: 'mud' });
        W.wall({ path: [[x - 4.2, y - 6], [x - 4.2, y + 6]], closed: false, outer: 'right', h: 2.6, thick: 1.4, batter: 0.15, parapet: false, merlon: false, walk: false, color: 'mud', smooth: 0 });
        for (const dy of [-3, 3]) W.cannon({ x: x - 0.5, y: y + dy, h: bt, dir: 180, len: 3.4, r: 0.34, carriage: true });
        W.flag({ x: x + 2.5, y: y + 5, h: bt, pole: 5, color: '#b23a2a', size: 1.0 });
      }
      for (const [x, y] of [[248, 38], [248, 22], [276, 110], [262, 150], [262, -60], [280, -120]]) W.flag({ x, y, pole: 7, color: '#b23a2a', size: 1.3 });
      W.label(262, -150, 'Mughal camp');
      // garrison flags over the gates
      for (const [x, y] of [[129, 36], [108.5, 46], [P(118, 24)[0], P(118, 24)[1]]]) W.flag({ x, y, pole: 6, color: '#3f6b3a', size: 1.0 });
    }

    // ======================= vegetation
    W.trees({ poly: ring(66, 48), count: old ? 30 : photo ? 70 : 55, types: { shrub: 3, grass: 4, acacia: 1 }, s: [0.7, 1.3], minDist: 3, maxSlope: 4.5, seed: 81, minH: 18, pad: 0.6 });
    W.trees({ poly: ring(62, 48), count: old ? 3 : photo ? 10 : 8, types: { acacia: 2, khejri: 1 }, s: [0.8, 1.1], minDist: 8, maxSlope: 4.5, seed: 82, minH: 20 });
    if (old) {
      W.trees({ poly: LOWER, count: 26, types: { neem: 2, mango: 1, palm: 1 }, s: [0.9, 1.3], minDist: 9, seed: 83 });
      for (const z of [TOWN_N, TOWN_S, TOWN_EN, TOWN_ES]) W.trees({ poly: z, count: 10, types: { neem: 2, mango: 2, palm: 1, acacia: 1 }, s: [0.9, 1.3], minDist: 9, seed: 84 + z.length });
      W.trees({ poly: ALL, count: 40, types: { acacia: 3, khejri: 1 }, s: [0.8, 1.2], minDist: 14, seed: 85 });
    } else if (photo) {
      W.trees({ poly: LOWER, count: 90, types: { neem: 3, banyan: 1, acacia: 2, round: 2, palm: 1 }, s: [0.9, 1.4], minDist: 5, seed: 86 });
      W.trees({ poly: LOWER, count: 260, types: { shrub: 3, grass: 5 }, s: [0.8, 1.4], minDist: 2.2, seed: 87, pad: 0.6 });
      for (const z of [TOWN_N, TOWN_S, TOWN_EN, TOWN_ES]) {
        W.trees({ poly: z, count: 24, types: { neem: 2, acacia: 2, banyan: 1, round: 1 }, s: [0.9, 1.4], minDist: 6, seed: 88 + z.length });
        W.trees({ poly: z, count: 70, types: { shrub: 3, grass: 4 }, s: [0.8, 1.3], minDist: 2.5, seed: 89 + z.length, pad: 0.6 });
      }
      W.trees({ poly: sector(LIP + 1, 120, -28, 82), count: 40, types: { shrub: 2, grass: 3, acacia: 1 }, s: [0.8, 1.3], minDist: 3, seed: 90, pad: 0.6 });
      W.trees({ poly: ALL, count: 70, types: { acacia: 3, khejri: 1, neem: 1 }, s: [0.8, 1.2], minDist: 12, seed: 91 });
    } else {
      W.trees({ poly: LOWER, count: 60, types: { neem: 3, round: 2, ashoka: 1, palm: 1 }, s: [0.9, 1.3], minDist: 7, seed: 92 });
      W.trees({ poly: [[20, 34], [78, 34], [78, 64], [20, 64]], count: 22, types: { shrub: 1 }, s: [0.8, 1.1], minDist: 3, seed: 93 });
      for (const z of [TOWN_N, TOWN_S, TOWN_EN, TOWN_ES]) W.trees({ poly: z, count: 16, types: { neem: 2, acacia: 1, round: 1 }, s: [0.9, 1.3], minDist: 8, seed: 94 + z.length });
      W.trees({ poly: LOWER, count: 90, types: { grass: 3, shrub: 1 }, s: [0.8, 1.2], minDist: 3, seed: 95, pad: 0.6 });
      W.trees({ poly: ALL, count: 60, types: { acacia: 2, neem: 2, khejri: 1 }, s: [0.8, 1.2], minDist: 12, seed: 96 });
    }

    // ======================= plan labels
    W.label(150, 205, 'Ambarkot'); W.label(40, 115, 'Mahakot'); W.label(-35, 40, 'Kalakot'); W.label(CX, CY - 20, 'Balakot');

    // ======================= people
    if (old) {
      W.npc({ kind: 'guard-deccan', patrol: walkPts(MAHAKOT, 140, 280, 6, 9), count: 2 });
      W.npc({ kind: 'guard-deccan', patrol: walkPts(MAHAKOT, 360, 385, 2, 9), count: 1 });
      W.npc({ kind: 'guard-deccan', patrol: walkPts(MAHAKOT, 460, 640, 6, 9), count: 2 });
      W.npc({ kind: 'guard-deccan', patrol: walkPts(AMBARKOT, 480, 620, 5, 7), count: 2 });
      W.npc({ kind: 'guard-deccan', patrol: walkPts(AMBARKOT, 690, 900, 6, 7), count: 2 });
      for (const [x, y, f] of [[208, 26.5, 90], [208, 33.5, 90], [128, 27, 90], [128, 33, 90], [107.5, 37.5, 90], [81, 19, 90], [...P(118.5, 23), 60], [...P(118.5, 17), 60], [-86.2, -21.5, 90], [-86.2, -26.5, 90]]) W.npc({ kind: 'guard-deccan', at: [x, y], face: f, mode: 'idle' });
      W.npc({ kind: 'guard-deccan', at: P(R_B, TH_GATE + 4), h: BAR_H, face: 0, mode: 'idle' });
      W.npc({ kind: 'guard-deccan', circle: [CX, CY, 8], h: H_TOP, count: 3 });
      W.npc({ kind: 'guard-deccan', at: [MENDHA[0] + 1, MENDHA[1] + 1.5], h: mt, face: 210, mode: 'idle' });
      W.npc({ kind: 'courtier', circle: [...P(94, 30), 6], h: SHELF_H, count: 2 });
      W.npc({ kind: 'courtier', circle: [mx + 13, my, 4], count: 2 });
      W.npc({ kind: 'villager', circle: [40, 30, 22], count: 3 }); W.npc({ kind: 'woman-indigo', circle: [30, 80, 16], count: 2 });
      W.npc({ kind: 'merchant', circle: [175, 30, 18], count: 2 }); W.npc({ kind: 'woman-red', circle: [-40, 160, 30], count: 2 });
      // the besiegers
      W.npc({ kind: 'guard-mughal', zone: CAMP, count: 14 });
      for (const [x, y] of BATTERIES) W.npc({ kind: 'guard-mughal', at: [x + 1.5, y], h: W.ground(x, y) + 1.3, face: 270, mode: 'idle' });
      W.npc({ kind: 'courtier', circle: [267, 80, 4], count: 3 });
      W.npc({ kind: 'elephant-royal', circle: [262, 112, 5], count: 1 }); W.npc({ kind: 'elephant', circle: [270, -30, 12], count: 3 });
      W.npc({ kind: 'horse', circle: [252, -110, 12], count: 6 }); W.npc({ kind: 'camel', circle: [280, 150, 10], count: 4 });
    } else if (photo) {
      // a photographer's party at the lower entrance gate, a caretaker, herders
      W.npc({ kind: 'courtier', at: [127, 30], face: 270, mode: 'idle' });
      W.npc({ kind: 'villager', at: [127.5, 32.2], face: 260, mode: 'idle' });
      W.npc({ kind: 'sepoy', at: [128, 26.5], face: 90, mode: 'idle' });
      W.npc({ kind: 'villager', circle: [40, -40, 24], count: 2 }); W.npc({ kind: 'goat', circle: [40, -40, 20], count: 7 });
      W.npc({ kind: 'cow', circle: [160, 80, 20], count: 4 }); W.npc({ kind: 'villager', circle: [160, 80, 16], count: 1 });
      W.npc({ kind: 'woman-green', circle: [175, -40, 20], count: 2 }); W.npc({ kind: 'woman-red', circle: [-30, 165, 25], count: 1 });
      W.npc({ kind: 'villager', at: [-81.5, -24], h: SHELF_H, face: 90, mode: 'idle' });
      W.npc({ kind: 'goat', circle: [-60, 170, 20], count: 5 });
    } else {
      W.npc({ kind: 'asi-guard', at: [127, 33.5], face: 90, mode: 'idle' });
      W.npc({ kind: 'asi-guard', at: [-61, -25.2], h: SHELF_H, face: 0, mode: 'idle' });
      W.npc({ kind: 'asi-guard', at: [-82, -21], h: SHELF_H, face: 90, mode: 'idle' });
      W.npc({ kind: 'merchant', circle: [160, 24, 6], count: 3 });
      W.npc({ kind: 'tourist-a', circle: [60, 30, 26], count: 3 }); W.npc({ kind: 'tourist-b', circle: [20, 20, 30], count: 3 });
      W.npc({ kind: 'tourist-c', circle: [48, 44, 10], count: 2 }); W.npc({ kind: 'tourist-d', circle: [110, 32, 14], count: 2 });
      W.npc({ kind: 'student', circle: [48, 40, 10], count: 6, speed: 1.4 });
      W.npc({ kind: 'villager', circle: [44, 38, 6], count: 1 });
      W.npc({ kind: 'tourist-a', circle: [...P(95, 25), 8], h: SHELF_H, count: 2 }); W.npc({ kind: 'tourist-c', circle: [...P(97, 10), 7], h: SHELF_H, count: 2 });
      const up = ASCENT.filter((_, i) => i % 6 === 0).map((p) => [p[0], p[1], p[2]]);
      const loop = up.concat(up.slice(1, -1).reverse());
      W.npc({ kind: 'tourist-d', patrol: loop, count: 3 }); W.npc({ kind: 'tourist-b', patrol: loop, count: 2 }); W.npc({ kind: 'student', patrol: loop, count: 2 });
      W.npc({ kind: 'tourist-c', circle: [CX, CY, 7], h: H_TOP, count: 3 });
      W.npc({ kind: 'tourist-a', circle: [...P(R_B + 1, TH_B0 - 14), 4], h: BAR_H, count: 2 });
      W.npc({ kind: 'tourist-b', circle: [-98, -13, 2], h: EXIT_H, count: 1 });
      W.npc({ kind: 'goat', circle: [-120, 160, 16], count: 4 });
    }

    // ======================= places
    for (const p of POIS) W.poi(Object.assign({}, p, { eraNote: p.eraNote?.[era] || null }));
    W.wildlife({ kinds: { boar: 3, peafowl: 3 } });
    W.wildlife({ kinds: { langur: 6 }, walls: true, s: 0.3 });
    W.spawn(228, 30, 0, 270);
    void TAG;
  },
};
