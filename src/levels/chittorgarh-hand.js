// 07 · Chittorgarh — the mesa fort of Mewar, Chittorgarh, Rajasthan (UNESCO Hill Forts of Rajasthan).
// Plan units are the research grid (metres from the Vijay Stambh, x east, y north) divided by 5.5. The scene now
// spans the full approx. 5.6 km north-south plateau outline in the research grid; lateral rim and interior mapping
// remain schematic pending georeferencing against official plans and current imagery.
// Buildings, walls and gates stay at human scale; the ~150 m hill is modelled 38 units high (vScale 4).
// Ramp legs (960 m north, 215 m south, 256 m north) and the circuit road follow Mehta 1888; gate names after
// ICOMOS 2013; monuments after Wikipedia, ICOMOS and the ASI report of 1887. Every position except the two towers
// is an estimate (research file, section 6).
import { rectPts, ellipsePts, wallStairs } from './kit.js';
import { TAG } from '../core/nav.js';
import { distToPolyline } from '../core/geom.js';

const S = 5.5; // metres of the real fort per plan unit
const DEG = Math.PI / 180;
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const lerp = (a, b, t) => a + (b - a) * t;
const sstep = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const hexMix = (a, b, t) => { const p = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16)); const A = p(a), B = p(b); return '#' + A.map((v, i) => Math.round(lerp(v, B[i], t)).toString(16).padStart(2, '0')).join(''); };

// ---------------------------------------------------------------- the plateau rim (research outline table / 5.5)
const RIM_TAB = {
  w: [[440, 14], [418, 4], [391, -18], [300, -45], [191, -58], [82, -60], [0, -56], [-136, -49], [-245, -42], [-355, -35], [-464, -22], [-560, -6], [-612, 6]],
  e: [[440, 14], [418, 26], [391, 45], [300, 69], [191, 87], [82, 98], [0, 99], [-136, 89], [-245, 78], [-355, 65], [-464, 40], [-560, 20], [-612, 8]],
};
function tabX(tab, y) {
  if (y >= tab[0][0]) return tab[0][1];
  for (let i = 0; i < tab.length - 1; i++) {
    const [y0, x0] = tab[i], [y1, x1] = tab[i + 1];
    if (y <= y0 && y >= y1) return lerp(x0, x1, (y0 - y) / (y0 - y1));
  }
  return tab[tab.length - 1][1];
}
const GATE_Y = { w: 82, e: -9 }; // Ram Pol on the west rim, Suraj Pol on the east rim
function rimX(side, y) {
  let s = 0, n = 0;
  for (let k = -12; k <= 12; k += 3) { s += tabX(RIM_TAB[side], y + k); n++; }
  const calm = sstep(7, 15, Math.abs(y - GATE_Y[side])) * sstep(400, 360, y) * sstep(-590, -540, y);
  const ph = side === 'w' ? 0 : 2.1;
  return s / n + calm * (1.3 * Math.sin(y / 9.3 + ph) + 0.7 * Math.sin(y / 3.9 + ph * 1.7)) * (side === 'w' ? 1 : -1);
}
function rimPoly(y0, y1, step) {
  const Wp = [], Ep = [];
  for (let y = y1; y >= y0 - 1e-6; y -= step) Wp.push([rimX('w', y), y]);
  for (let y = y0; y <= y1 + 1e-6; y += step) Ep.push([rimX('e', y), y]);
  return Wp.concat(Ep);
}
// horizontal distance outside the rim (the rim runs north-south, so this is close to the true distance)
const outside = (x, y) => Math.max(rimX('w', y) - x, x - rimX('e', y));
const talusAt = (d) => 30 * (1 - d / 52) ** 2;             // concave talus from the scarp foot (30) to the plain
const scarpProf = (t) => (t < 0.08 ? 1 : 1 - Math.pow((t - 0.08) / 0.92, 0.25));

// ---------------------------------------------------------------- relief on top (Mehta: west ridge, central valley, east crest)
const RIDGE_W = [[-34, 150], [-24, 80], [-8, 10], [-6, -60], [0, -120], [2, -180], [-4, -290]];
const CREST_E = [[70, 150], [84, 80], [88, 20], [84, -60], [76, -160], [68, -290]];
const TROUGH = [[30, -20], [34, -80], [30, -150], [26, -230], [24, -300]];
const bump = (d, core, fall) => 1 - sstep(core, core + fall, d);
function plateauH(x, y) {
  // fades to a flat 38 at the north and south edges, where the backdrop mesa takes over
  const fade = sstep(130, 110, y) * sstep(-265, -245, y);
  if (fade <= 0) return 38;
  const r = 2.0 * bump(distToPolyline(x, y, RIDGE_W).d, 5, 20) + 2.6 * bump(distToPolyline(x, y, CREST_E).d, 4, 16) - 1.3 * bump(distToPolyline(x, y, TROUGH).d, 9, 20);
  const n = 0.45 * Math.sin(x / 11.3 + y / 17.9) * Math.sin(y / 9.1 - x / 23.7) + 0.3 * Math.sin(x / 5.3 - y / 7.7 + 1.3);
  return 38 + (r + n) * fade;
}
// the mesa as two height functions: the talus (before the gully noise) and the scarp with the plateau top
const talusH = (x, y) => { const d = outside(x, y); return d <= 0 ? 30 : d < 52 ? talusAt(d) : -20; };
const mesaTopH = (x, y) => { const d = outside(x, y); return d <= 0 ? plateauH(x, y) : d < 6 ? lerp(talusAt(d), plateauH(x, y), scarpProf(d / 6)) : -20; };
const ALL = rimPoly(-612, 440, 6);

// ---------------------------------------------------------------- the switchback ramp
const arc = (cx, cy, r, a0, a1, n, h0 = 0, h1 = 0) => Array.from({ length: n + 1 }, (_, i) => { const t = i / n, a = (a0 + (a1 - a0) * t) * DEG; return [cx + r * Math.cos(a), cy + r * Math.sin(a), lerp(h0, h1, t)]; });
// leg 1 runs north along the lower west face from Padan Pol, with level landings at its three gates
const L1A = [-105.4, -104], L1B = [-90, 80];
const L1LEN = Math.hypot(L1B[0] - L1A[0], L1B[1] - L1A[1]);
const L1D = [(L1B[0] - L1A[0]) / L1LEN, (L1B[1] - L1A[1]) / L1LEN];
const at1 = (s) => [L1A[0] + L1D[0] * s, L1A[1] + L1D[1] * s];
const G1 = (20 - 1.2) / (L1LEN - 29);
const h1Of = (s) => (s <= 13 ? 1.2 : s <= 62 ? 1.2 + (s - 13) * G1 : s <= 70 ? 1.2 + 49 * G1 : s <= 134 ? 1.2 + (s - 21) * G1 : s <= 142 ? 1.2 + 113 * G1 : 1.2 + (s - 29) * G1);
const LEG1 = [0, 13, 62, 70, 134, 142, L1LEN].map((s) => [...at1(s), h1Of(s)]);
const BEND1 = arc(-85, 80, 5, 180, 0, 8, 20, 20.5);
// leg 2 turns back south (Ganesh Pol at once, Jorla Pol at the second bend)
const LEG2 = [[-80, 80, 20.5], [-80, 79, 20.6], [-80, 71, 20.6], [-80, 51, 25.4], [-80, 43, 25.4], [-80, 42, 25.5]];
const BEND2 = arc(-75, 42, 5, 180, 360, 8, 25.5, 29.7);
// leg 3 turns north again (Laxman Pol just after the bend) and swings east into Ram Pol
const LEG3 = [[-70, 42, 29.7], [-70, 43, 29.8], [-70, 51, 29.8], [-70, 72, 33.4], ...arc(-64.5, 76.5, 5.5, 180, 90, 4, 34.2, 35), [-52, 82, 35]];
const RP_FLOOR = 35;
const RAMP_IN = [[-52, 82, 35], [-45, 82.6, 37.2], [-39, 83.6, plateauH(-39, 83.6)]];
const TOWN_ROAD = [[-182, -121, 0], [-150, -123, 0.2], [-126, -118, 0.4], [-113, -111, 0.8], [-107.6, -106.5, 1.1], [-105.4, -104, 1.2]];
// the road down from Suraj Pol to the eastern plain
const SP_FLOOR = 40.2;
const EROAD = [[89, -9, SP_FLOOR], [104.5, -9, SP_FLOOR], [107.5, -14, 39.4], [111, -30, 34.4], [116, -60, 24.9], [123, -92, 13.9], [131, -118, 4.9], [140, -134, 0.8], [154, -141, 0.3]];

// hillside spurs that carry the roads: a slope that rises from the guide road towards the rim and falls to the plain
function guideAt(guide, y) {
  const gd = guide[0][1] <= guide[guide.length - 1][1] ? guide : guide.slice().reverse();
  if (y <= gd[0][1]) return [gd[0][0], gd[0][2]];
  for (let i = 0; i < gd.length - 1; i++) {
    const a = gd[i], b = gd[i + 1];
    if (y <= b[1]) { const t = (y - a[1]) / ((b[1] - a[1]) || 1); return [lerp(a[0], b[0], t), lerp(a[2], b[2], t)]; }
  }
  const z = gd[gd.length - 1]; return [z[0], z[2]];
}
function spurFn(guide, side, y0, y1) {
  // y0..y1: latitudes where the spur fades back into the natural talus
  const up = side === 'w' ? 1 : -1;
  return (x, y) => {
    const [gx, gh] = guideAt(guide, y);
    const du = (x - gx) * up;
    const plane = du >= 0 ? gh + 0.74 * du : gh + 0.95 * du;
    const d = (rimX(side, y) - x) * up; // distance outside the rim
    const T = Math.min(plane, 31 - 0.1 * Math.max(0, d));
    const nat = d < 52 ? talusAt(Math.max(0, d)) : 0;
    const k = sstep(y0, y0 + 26, y) * sstep(y1, y1 - 16, y);
    return clamp(lerp(nat, T, k), -2, 34);
  };
}
const SPUR_W = [[-148, -120], ...Array.from({ length: 29 }, (_, i) => [rimX('w', -120 + i * 8) - 0.3, -120 + i * 8]), [-148, 104]];
const SPUR_E = [...Array.from({ length: 21 }, (_, i) => [rimX('e', 2 - i * 8) + 0.3, 2 - i * 8]), [178, -158], [178, 2]];

// ---------------------------------------------------------------- positions that depend on the rim
const RP_X = rimX('w', 82) + 1.5;       // Ram Pol, in the west rim wall
const SP_X = rimX('e', -9) - 1.5;       // Suraj Pol, in the east rim wall
const KS = [rimX('e', 87) - 11.2, 87];  // Kirti Stambh (published coordinate 89, 88; pulled in off the rim wall)
const GX = rimX('w', -53) + 10.2;       // Gaumukh Kund centre x
const NK_X = rimX('e', 22) - 9.6;       // Nilkanth Mahadev temple
const PAL = [[-48, 39], [-10, 39], [-10, 73], [-48, 73]]; // Rana Kumbha's palace enclosure

// ---------------------------------------------------------------- roads on the plateau (paint)
const R_NORTH = [[-39, 83.6], [-44, 96], [-45, 112], [-42, 124], [-40, 138]];
const R_PALACE = [[-39, 83.6], [-28, 81], [-10, 79], [-6, 74], [-6, 42], [0, 37.5], [5, 28], [6, 12], [11, 4], [12, -10], [9, -30], [8, -50], [7, -75], [8, -110], [16, -140], [22, -174], [18, -200], [12, -222], [9, -245], [7, -272]];
const R_EAST = [[60, 138], [57, 112], [56, 92], [62, 64], [76, 36], [81, 14], [84, -4], [82, -30], [78, -70], [72, -120], [68, -160], [66, -190], [61, -225], [57, -272]];
const R_CROSS = [[12, -9], [40, -12], [66, -10], [84, -8], [92, -9]];
const R_SOUTH = [[16, -204], [40, -200], [64, -196]];
const R_GAUMUKH = [[11, -14], [0, -17], [-6, -27], [-14, -30.5], [-33, -31], [-35, -44], [-36, -52]];

// ---------------------------------------------------------------- places (research section 8)
const SRC = {
  mehta: 'https://rarebooksocietyofindia.org/book_archive/196174216674_10153489249271675.pdf',
  fort: 'https://en.wikipedia.org/wiki/Chittor_Fort',
  vs: 'https://en.wikipedia.org/wiki/Vijaya_Stambha',
  ks: 'https://en.wikipedia.org/wiki/Kirti_Stambha',
  town: 'https://en.wikipedia.org/wiki/Chittorgarh',
  icomos: 'https://whc.unesco.org/document/153036',
  asi: 'https://icvtesting.nvli.in/system/files/digitalFilesICWeb/cslrepository/8852/AS-005261.pdf',
  brit: 'https://www.britannica.com/place/Chittaurgarh',
};
const POIS = [
  { id: 'ascent', at: at1(17), r: 6, title: 'The seven-gate ascent', source: SRC.mehta,
    text: 'The road climbs the western face in a Z: about 960 m north, 215 m back south, then 256 m north again, through seven gates from Padan Pol to Ram Pol, "the final and main gate". Rana Kumbha (r. 1433–68) fortified this royal entrance in the 15th century, and its gates have pointed arches built to resist elephants and cannon.',
    eraNote: { '1567': 'In the winter of 1567 every gate on the ramp was held by the Rajput garrison.', '1882': 'Mehta, writing in 1888, found the second gate, Bhairon Pol, nearly obliterated and called it the Thuta, or broken, Pol.', today: 'The broken Bhairon Pol has been rebuilt, and vehicles now climb the same switchbacks.' } },
  { id: 'jorla', at: [-75, 38.2], r: 5, title: 'Jorla Pol, the "joined gate"', source: SRC.fort,
    text: 'Two gateways are fused at the second hairpin: the upper arch of Jorla Pol is connected to the base of Laxman Pol. An attacker therefore met two gates within a few metres at the steepest turn of the ascent.' },
  { id: 'kumbha', at: [-30, 46.8], r: 5, title: 'Rana Kumbha Palace', source: SRC.fort,
    text: 'This 15th-century palace complex is the largest ruin in the fort, with courtyards, a zenana, stables for elephants and horses, a Shiva temple and "a splendid series of canopied balconies", all of plastered stone. Tradition names it the birthplace of Maharana Udai Singh, founder of Udaipur.',
    eraNote: { '1567': 'Udai Singh had withdrawn to the hills before the siege, leaving Jaimal and Patta in command of the fort.', '1882': 'By 1882 the palace had stood roofless and largely deserted for three centuries.', today: 'Its roofless halls, courts and stables are open to visitors.' } },
  { id: 'vijay', at: [2, -17], r: 6, title: 'Vijay Stambh (Tower of Victory)', source: SRC.vs,
    text: 'Rana Kumbha raised this nine-storey, 37 m tower to commemorate his victory over Mahmud Khalji of Malwa; Sutradhar Jaita and his sons designed it, and it was completed around 1448 (some sources say 1458–68). It is dedicated to Vishnu, every face of each storey has porticoed openings, and inscriptions in the top storey give the dynasty\'s genealogy.',
    eraNote: { '1567': 'At the siege the tower was little more than a century old.', '1882': 'O. S. Baudesson photographed it for the Archaeological Survey in 1882, from the north and close up at its entrance.', today: 'An internal stair of 157 steps leads to the upper storeys.' } },
  { id: 'kirti', at: [KS[0] - 4, 97.5], r: 6, title: 'Kirti Stambh (Tower of Fame)', source: 'https://ignca.gov.in/Asi_data/88329.pdf',
    text: 'ASI describes this Jain tower as about 24 m high on a square platform, with a square shaft, a central stair through six storeys and an open summit pavilion resting on twelve pillars. Its inventory gives conflicting chronological clues: an inscription dated V.S. 952 (A.D. 896), but also an attribution to Jija whose inscriptional style is judged no earlier than the 13th–14th century. The exact construction date remains disputed.',
    eraNote: { '1882': 'Baudesson photographed the tower and its adjoining Jain temple from the south in 1882.' } },
  { id: 'temples', at: [4.5, 21], r: 6, title: 'Kumbha Shyam and Meera temples', source: SRC.fort,
    text: 'Two temples share one compound beside the Vijay Stambh. The larger, the Kumbha Shyam (Varaha) temple, is dated 1448; the smaller is associated with the poet-saint Mirabai (1498–1546), who worshipped Krishna here.' },
  { id: 'fateh', at: [-2, 41], r: 6, title: 'Fateh Prakash Palace (Badal Mahal)', source: SRC.icomos,
    text: 'Built between 1885 and 1930 under Maharana Fateh Singh, this is one of the fort\'s youngest palaces. It stands near the ruined Kumbha palace, and its intact plastered façades contrast with the older ruins.',
    eraNote: { '1567': 'This ground beside Kumbha\'s palace is still open: the Fateh Prakash was built more than three centuries later.', '1882': 'Not yet built: work on the palace began in 1885 at the earliest.', today: 'The palace now houses a museum.' } },
  { id: 'gaumukh', at: [GX + 8, -53], r: 6, title: 'Gaumukh Kund', source: SRC.fort,
    text: 'A spring flows from a carved cow\'s mouth (gaumukh) in the western cliff into a deep pool, and a small waterfall continues down the scarp below. It was the fort\'s main water source during sieges.' },
  { id: 'mahasati', at: [-16, -30], r: 6, title: 'Mahasati and the Samiddheshwar temple', source: SRC.asi,
    text: 'The Mahasati, "a small wooded terrace" south-west of the Vijay Stambh, is the royal cremation ground with its cenotaphs. The nearby Samiddheshwar Mahadev temple appears in the Archaeological Survey\'s 1887 report as "Chitor. Temple of Mokalji", after Rana Mokal, who restored it in the 15th century.' },
  { id: 'kalika', at: [19.5, -174], r: 6, title: 'Kalika Mata Temple', source: SRC.town,
    text: 'The temple stands on the ridge across from Padmini\'s palace. It was built in the 8th century as a temple to the sun god Surya and converted to a temple of the goddess Kali in the 14th century, which makes it one of the oldest standing shrines on the plateau.' },
  { id: 'padmini', at: [14.5, -226], r: 6, title: 'Padmini\'s Palace', source: SRC.fort,
    text: 'A white, three-storey water palace stands in a tank, crowned with chhatris; the present building is largely a 19th-century reconstruction. Tradition ties it to Rani Padmini and Rawal Ratan Singh, whose story comes from Malik Muhammad Jayasi\'s poem Padmavat (1540); its historicity is debated.',
    eraNote: { '1567': 'The pavilion shown here is conjectural: the palace that stood before the 19th-century rebuilding is known only from later views.', '1882': 'Tod\'s artist drew the palace and its tank about 1820, before the rebuilding; its state in 1882 is not documented.', today: 'The lime-washed pavilion seen today is the 19th-century reconstruction.' } },
  { id: 'unesco-boundary', at: [-45, 390], r: 8, title: 'UNESCO property and buffer boundary', source: 'https://whc.unesco.org/en/list/247/maps/',
    text: 'UNESCO lists the Chittorgarh component as 305 ha with a 440 ha buffer. Its nomination reference coordinate (N24°53′00″ E74°38′46″) is about 440 m from ASI Jodhpur Circle’s whole-fort point, which anchors the discovery marker. The dossier gives conflicting extents: 5.6 km north–south and about 0.75 km average width, a 4.5 km perimeter, and elsewhere a 5 km wall stretch by 0.91 km width. These describe uncertain extents and are not enough to register this scene’s rim or wall; this marker is a reference cue, not a surveyed boundary.' },
  { id: 'suraj', at: [SP_X - 8, -9], r: 6, title: 'Suraj Pol (Sun Gate)', source: SRC.mehta,
    text: 'This is the fort\'s eastern entrance, "the next in importance to Ram Pol on the west". The chief of Salumbar was killed here in Akbar\'s siege of 1567–68, and his memorial stands just inside the gate; the very old Nilkanth Mahadev temple is close by.',
    eraNote: { '1567': 'A Mughal battery under Shuja\'at Khan, Raja Todarmal and Qasim Khan faces this gate from the plain below.', '1882': 'The Salumbar memorial stands just inside the gate, as Mehta describes it.', today: 'The road from Suraj Pol leads down to the eastern plain.' } },
  { id: 'water', at: [13.5, -70], r: 6, title: 'The water system', source: SRC.fort,
    text: 'The plateau once held about 84 tanks, wells and stepwells fed by rain and springs, holding some 4 billion litres, which accounts claim was enough for 50,000 troops for four years. About 20–22 still function, including tanks dated to the 7th century.',
    eraNote: { '1567': 'In 1567 these tanks had to supply the fort through a siege of four months.' } },
  { id: 'sieges', at: [-49, 82.4], r: 6, title: 'Three sieges', source: SRC.brit,
    text: 'Chittor, capital of Mewar from the 8th to the 16th century, was besieged in 1303 by Alauddin Khalji, in 1534–35 by Bahadur Shah of Gujarat and in 1567–68 by Akbar. Rajput tradition records a jauhar, the mass self-immolation of the fort\'s women, at each fall; after Akbar took the fort in February 1568, Mewar\'s capital moved to Udaipur.',
    eraNote: { '1567': 'The third siege is under way: Akbar\'s army arrived in October 1567, and the fort fell in February 1568.' } },
];

// ---------------------------------------------------------------- helpers
const corridor = (path, w) => {
  const L = [], R = [];
  for (let i = 0; i < path.length; i++) {
    const a = path[Math.max(0, i - 1)], b = path[Math.min(path.length - 1, i + 1)];
    const dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy) || 1;
    L.push([path[i][0] - dy / l * w / 2, path[i][1] + dx / l * w / 2]); R.push([path[i][0] + dy / l * w / 2, path[i][1] - dx / l * w / 2]);
  }
  return L.concat(R.reverse());
};
const ROAD_POLYS = [R_NORTH, R_PALACE, R_EAST, R_CROSS, R_SOUTH, R_GAUMUKH].map((p) => corridor(p, 6));

export default {
  id: 'chittorgarh-hand', name: 'Chittorgarh (hand level, kept for T2)', native: { text: 'चित्तौड़गढ़', lang: 'hi', script: 'deva' },
  region: 'Chittorgarh · Rajasthan', type: 'Mesa fort', coords: [24.887222, 74.646944],
  poiCount: POIS.length, pois: POIS.map(p => ({...p})), groundName: 'Chittor plateau', datum: 0, datumLabel: 'above the plain',
  units: { planScale: S, vScale: 4 },
  bounds: [-200, -650, 210, 470], stride: 3, seed: 7,
  water: null,
  apron: { h: 0, color: '#a8986a' },
  view: { az: -135, el: 40, zoom: 72, introAt: [-20, -60], introZoom: 440 },
  light: { sky: '#e3e0d4', sunAz: -152, sunEl: 48 },
  palette: {
    wall: '#9d927d', wallTop: '#6c655a', trim: '#c4b99f', stone: '#a39882', plaster: '#d9d3c5', plasterDark: '#bcb3a1',
    roof: '#8a7a64', dome: '#d8d1c0', wood: '#5a3d26', door: '#4a3220', window: '#2b2621',
    grass: '#a49b63', dry: '#ab9569', rock: '#9c8f7a', cliff: '#6b6254', sand: '#c9b88e', road: '#bba783', court: '#b5a88e',
    field: '#8f9455', mud: '#7a6a52', paved: '#aaa08b', garden: '#6f8442',
    water: '#4e6650', tank: '#4e6650', leaf: '#55703c', leafDry: '#8f8a4a', trunk: '#6b5038', flag: '#d8762b', accent: '#c2a35a',
  },
  eraPalette: {
    '1567': { plaster: '#ddd5c4', grass: '#a29a60' },
    '1882': { plaster: '#cbc2ae', plasterDark: '#b0a690', grass: '#a69d63', dry: '#ad966a', leaf: '#5d7340' },
    today: { grass: '#a19a60' },
  },
  eras: [
    { id: '1567', year: '1567', label: 'Akbar\'s siege', short: 'Akbar\'s siege', lens: 'engraving',
      summary: 'Winter 1567: Jaimal and Patta\'s Rajput garrison holds the walls while Akbar\'s army digs in below, its guns trained on the Suraj Pol.',
      basis: 'The siege as painted for the Akbarnama (c. 1590–95), with Mughal mines and covered approaches against the walls; the layout of the fort from Tod\'s Annals, Mehta\'s handbook of 1888 and the UNESCO nomination.',
      conjecture: 'No plan of the fort in 1567 survives. The palaces are shown roofed and the city inhabited; the Mughal works stand where the batteries are recorded, but their form, the houses and the old Padmini pavilion are reconstructed.',
      sources: ['CHI-16', 'CHI-20', 'CHI-18', 'CHI-22'] },
    { id: '1882', year: '1882', label: 'Baudesson\'s photographs', short: 'Photographs', lens: 'albumen',
      summary: 'Three centuries after Akbar, the plateau is a field of scrub and broken palaces, with its two towers still standing over the ruins.',
      basis: 'O. S. Baudesson\'s 1882 photographs of the two towers for the Archaeological Survey, with Murray\'s views of about 1872, de Lagrange\'s photograph of 1849–51, Tod\'s drawings of about 1820 and the ASI report of 1887.',
      conjecture: 'Only the towers and a few buildings were photographed: the state of the palaces, gates and houses is inferred from Mehta\'s description of 1888 and from today\'s ruins.',
      sources: ['CHI-06', 'CHI-07', 'CHI-08', 'CHI-02', 'CHI-03', 'CHI-04', 'CHI-11', 'CHI-12', 'CHI-13', 'CHI-05', 'CHI-19', 'CHI-22'] },
    { id: 'today', year: 'Today', label: 'World Heritage site', short: 'World Heritage', lens: 'none',
      summary: 'Part of the Hill Forts of Rajasthan World Heritage site since 2013: visitors come up through the seven gates to the towers, the temples and the Fateh Prakash palace.',
      basis: 'The UNESCO nomination maps and dossier (2013), a 1978 view of the mesa from across the Berach and Deen Dayal\'s views of about 1890 over the plateau from the Vijay Stambh.',
      conjecture: 'The full north-south extent follows the research outline table, but the lateral rim coordinates and most interior locations are still schematic. Georeference the official property plan, historic survey sheets and current aerial imagery before treating this as a faithful reconstruction; positions other than the two towers remain estimated.',
      sources: ['CHI-01', 'CHI-17', 'CHI-18', 'CHI-14', 'CHI-15', 'CHI-21', 'CHI-22'] },
  ],
  terrain: (era) => [
    { op: 'base', h: 0 },
    { op: 'noise', amp: 0.9, scale: 38 },
    { op: 'edge', h: 0, w: 26 }, // the plain meets the apron; the mesa itself runs on past the north and south edges
    // talus apron, gullied, then the near-vertical scarp under the rim and the plateau top
    { op: 'raise', poly: ALL, h: talusH, edge: 0.1 },
    { op: 'noise', amp: 2.4, scale: 8, above: 3 },
    { op: 'raise', poly: ALL, h: mesaTopH, edge: 0.1 },
    // spurs on the west and east faces that carry the ramp and the Suraj Pol road
    { op: 'raise', poly: SPUR_W, h: spurFn(LEG1, 'w', -122, 106), edge: 8, profile: 'linear' },
    { op: 'raise', poly: SPUR_E, h: spurFn(EROAD.slice(1), 'e', -156, 12), edge: 8, profile: 'linear' },
    { op: 'noise', poly: SPUR_W, amp: 1.5, scale: 11, edge: 8, above: 3 },
    { op: 'noise', poly: SPUR_E, amp: 1.5, scale: 11, edge: 8, above: 3 },
    // level courts: Rana Kumbha's palace, the tower terrace, the gates
    { op: 'flatten', poly: rectPts(-29, 56, 37, 33, 0), h: plateauH(-29, 56), edge: 5 },
    { op: 'flatten', poly: rectPts(0, -1, 22, 24, 0), h: plateauH(0, 0), edge: 5 },
    { op: 'flatten', poly: rectPts(KS[0] - 6, 87, 30, 18, 0), h: plateauH(KS[0], 87), edge: 5 },
    { op: 'flatten', poly: rectPts(-54, 82, 7.5, 9, 0), h: RP_FLOOR, edge: 4 },
    { op: 'flatten', poly: rectPts(-38, 84, 10, 9, 0), h: plateauH(-39, 83.6), edge: 4 },
    { op: 'flatten', poly: rectPts(SP_X - 6.5, -9, 11, 11, 0), h: SP_FLOOR, edge: 4 },
    { op: 'flatten', poly: rectPts(-3, -173, 24, 16, 0), h: plateauH(0, -173), edge: 5 },
    // the roads: town lane, the three legs and two hairpins, the way in at Ram Pol, the Suraj Pol road
    { op: 'ramp', path: TOWN_ROAD, w: 5.4, edge: 4, paint: 'road' },
    { op: 'ramp', path: LEG1, w: 5.4, edge: 2.6, paint: 'road' },
    { op: 'ramp', path: BEND1, w: 5.8, edge: 2.4, paint: 'road' },
    { op: 'ramp', path: LEG2, w: 5.4, edge: 2.6, paint: 'road' },
    { op: 'ramp', path: BEND2, w: 5.8, edge: 2.4, paint: 'road' },
    { op: 'ramp', path: LEG3, w: 5.4, edge: 2.6, paint: 'road' },
    { op: 'ramp', path: RAMP_IN, w: 7, edge: 5, paint: 'road' },
    { op: 'ramp', path: EROAD, w: 5.6, edge: 3, paint: 'road' },
    // roads on the plateau (Mehta's circuit and the modern visitor loop)
    ...[R_NORTH, R_PALACE, R_EAST, R_CROSS].map((p) => ({ op: 'paint', path: p, w: 4.4, paint: 'road' })),
    { op: 'paint', path: R_SOUTH, w: 3.6, paint: 'road' },
    { op: 'paint', path: R_GAUMUKH, w: 3.0, paint: 'road' },
    { op: 'paint', poly: rectPts(-15, 56, 7.6, 31, 0), paint: 'court' },
    { op: 'paint', poly: rectPts(-30, 52, 17, 14, 0), paint: era === '1567' ? 'paved' : 'court' },
    { op: 'paint', poly: rectPts(0, -1, 18, 20, 0), paint: era === 'today' ? 'garden' : 'court' },
    // fields on the plain below the west face
    ...(era === '1567' ? [] : [{ op: 'paint', poly: [[-176, -48], [-124, -52], [-126, 64], [-176, 74]], paint: 'field' }]),
  ],

  build(W) {
    const era = W.era, old = era === '1567', mid = era === '1882', now = era === 'today';
    const g = (x, y) => W.ground(x, y);
    const P = W.palHex;
    const kangura = { style: 'kangura', w: 0.85, gap: 0.6, h: 0.95 };
    const kanguraS = { style: 'kangura', w: 0.7, gap: 0.55, h: 0.75 };

    // ---------------------------------------------------------------- rim walls, Ram Pol and Suraj Pol
    const topFn = (side, gates) => (x, y) => {
      const sg = side === 'w' ? 1 : -1;
      let h = -Infinity;
      for (const k of [0, 1.5, 3, 4.5]) h = Math.max(h, g(x + sg * k, y));
      let t = h + 5.6;
      for (const G of gates) { const win = 1 - sstep(8, 15, Math.abs(y - G.y)); if (win > 0) t = lerp(t, Math.max(t, G.floor + 9.4), win); }
      return t;
    };
    const topW = topFn('w', [{ y: 82, floor: RP_FLOOR }]), topE = topFn('e', [{ y: -9, floor: SP_FLOOR }]);
    const pathW = [], pathE = [];
    for (let y = 440; y >= -612; y -= 4) { pathW.push([rimX('w', y) + 1.5, y]); pathE.push([rimX('e', y) - 1.5, y]); }
    const rimOpts = { closed: false, thick: 3, batter: 0.05, parapet: { h: 1.2, t: 0.6 }, merlon: kangura, color: 'wall', sink: 1.5 };
    const wW = W.wall(Object.assign({ path: pathW, outer: 'right', top: topW }, rimOpts));
    const wE = W.wall(Object.assign({ path: pathE, outer: 'left', top: topE }, rimOpts));
    W.gate({ wall: wW, at: [RP_X, 82], width: 4.6, spring: 4.6, rise: 2.6, name: 'Ram Pol', towers: { r: 3.4, dh: 1.6, gap: 0.55, shape: 'octagon' }, upper: 'chhatri', frameW: 0.7, frameUp: 1.4, floor: RP_FLOOR, panel: '#d9cdb4' });
    W.gate({ wall: wE, at: [SP_X, -9], width: 4.4, spring: 4.4, rise: 2.5, name: 'Suraj Pol', towers: { r: 3.2, dh: 1.5, gap: 0.55, shape: 'octagon' }, frameW: 0.65, floor: SP_FLOOR, panel: '#d9cdb4' });

    // bastions every ~30 units of wall, clear of the gates and the wall stairs
    const STAIRS_W = [{ y: 100, dir: 1 }, { y: -70, dir: -1 }, { y: -182, dir: 1 }];
    const STAIRS_E = [{ y: -25, dir: -1 }, { y: 110, dir: 1 }, { y: -214, dir: -1 }];
    const stairBand = (st) => st.map(({ y, dir }) => (dir > 0 ? [y - 7, y + 22] : [y - 22, y + 7]));
    const placeBastions = (wall, path, every, gateY, stairs, side) => {
      const out = [];
      let acc = 0, next = every * 0.5, k = 0;
      const bands = stairBand(stairs);
      for (let i = 0; i < path.length - 1; i++) {
        const a = path[i], b = path[i + 1], L = Math.hypot(b[0] - a[0], b[1] - a[1]);
        while (next <= acc + L) {
          const t = (next - acc) / L, x = lerp(a[0], b[0], t), y = lerp(a[1], b[1], t);
          next += every;
          if (Math.abs(y - gateY) < 16 || bands.some(([y0, y1]) => y > y0 && y < y1)) continue;
          if (side === 'e' && Math.abs(y - KS[1]) < 9) continue;
          const guns = old ? k % 2 === 0 : mid ? k === 3 || k === 9 : false;
          out.push(W.bastion({ at: [x, y], wall, r: k % 3 === 1 ? 5.0 : 4.3, dh: 0.5, cannon: guns ? { len: 3.0, r: 0.3 } : false }));
          k++;
        }
        acc += L;
      }
      return out;
    };
    placeBastions(wW, pathW, 29, 82, STAIRS_W, 'w');
    placeBastions(wE, pathE, 29, -9, STAIRS_E, 'e');
    for (const st of STAIRS_W) wallStairs(W, wW, { at: [rimX('w', st.y) + 1.5, st.y], dir: st.dir, run: 15 });
    for (const st of STAIRS_E) wallStairs(W, wE, { at: [rimX('e', st.y) - 1.5, st.y], dir: st.dir, run: 15 });

    // ---------------------------------------------------------------- the ramp: valley-side parapets and the six lower pols
    const parOpts = { closed: false, h: 1.0, thick: 1.0, batter: 0.04, parapet: { h: 0.85, t: 0.45 }, merlon: kanguraS, walk: false, color: 'wall', smooth: 1 };
    const vW1 = [-L1D[1], L1D[0]]; // west of leg 1
    const PA = [];
    for (let s = 8.0; s < L1LEN; s += 6) { const p = at1(s); PA.push([p[0] + vW1[0] * 3, p[1] + vW1[1] * 3]); }
    PA.push(...arc(-85, 80, 8, 180, 0, 10).map((p) => [p[0], p[1]]), [-77, 73.4]);
    const PB = [[-83, 76.6], ...arc(-75, 42, 8, 180, 360, 10).map((p) => [p[0], p[1]]), [-67, 48.6]];
    const PD = [[-73, 45.4], ...arc(-64.5, 76.5, 8.5, 180, 90, 6).map((p) => [p[0], p[1]]), [RP_X - 1.7, 85]];
    W.wall(Object.assign({ path: PA, outer: 'left' }, parOpts));
    W.wall(Object.assign({ path: PB, outer: 'right' }, parOpts));
    W.wall(Object.assign({ path: PD, outer: 'left' }, parOpts));
    const POLS = [
      { name: 'Padan Pol', at: at1(8.5), floor: 1.2, dir: L1D, v: vW1, lv: 6.8, lh: 7.0, wallH: 9.2, towers: [[6.4, 1.4, 2.8], [-6.6, 1.4, 2.8]] },
      { name: 'Bhairon Pol', at: at1(66), floor: h1Of(66), dir: L1D, v: vW1, lv: 5.8, lh: 6.6, broken: mid },
      { name: 'Hanuman Pol', at: at1(138), floor: h1Of(138), dir: L1D, v: vW1, lv: 5.8, lh: 6.6, towers: [[6.2, 1.2, 2.6]] },
      { name: 'Ganesh Pol', at: [-80, 75], floor: 20.6, dir: [0, -1], v: [-1, 0], lv: 8.4, lh: 4.6 },
      { name: 'Jorla Pol', at: [-80, 47], floor: 25.4, dir: [0, -1], v: [-1, 0], lv: 5.3, lh: 6.3 },
      { name: 'Laxman Pol', at: [-70, 47], floor: 29.8, dir: [0, 1], v: [-1, 0], lv: 6.3, lh: rimX('w', 47) + 0.5 + 70, wallH: 8.8 },
    ];
    for (const p of POLS) {
      const a = [p.at[0] + p.v[0] * p.lv, p.at[1] + p.v[1] * p.lv], b = [p.at[0] - p.v[0] * p.lh, p.at[1] - p.v[1] * p.lh];
      if (p.broken) {
        // "nearly obliterated ... the Thuta (broken) Pol" (Mehta 1888): stumps either side of the road
        const ang = Math.atan2(p.v[1], p.v[0]) / DEG;
        for (const sg of [1, -1]) { const c = [p.at[0] + p.v[0] * sg * 4.7, p.at[1] + p.v[1] * sg * 4.7]; W.ruin({ rect: [c[0], c[1], 3.8, 2.8, ang], base: p.floor - 0.6, h: 4.6, thick: 1.4, doors: [], color: 'wall', windows: false }); }
        continue;
      }
      const dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy);
      const outer = (-dy / l) * -p.dir[0] + (dx / l) * -p.dir[1] > 0 ? 'left' : 'right';
      const wall = W.wall({ path: [a, b], closed: false, outer, top: p.floor + (p.wallH ?? 8.4), thick: 2.8, batter: 0.04, parapet: { h: 1.1, t: 0.5 }, merlon: { style: 'kangura', w: 0.8, gap: 0.55, h: 0.85 }, walk: false, color: 'wall' });
      W.gate({ wall, at: p.at, width: 4.2, spring: 4.0, rise: 2.4, style: 'pointed', towers: false, name: p.name, frameW: 0.55, frameUp: 1.2, floor: p.floor });
      for (const [ov, oo, r] of p.towers || []) {
        const c = [p.at[0] + p.v[0] * ov - p.dir[0] * oo, p.at[1] + p.v[1] * ov - p.dir[1] * oo];
        W.bastion({ at: c, r, shape: 'octagon', top: p.floor + (p.wallH ?? 8.4) + 1.5, batter: 0.03, parapet: { h: 1.0, t: 0.45 }, merlon: kanguraS, walk: false, color: 'wall' });
      }
    }
    W.zone(corridor(LEG1.map((p) => [p[0], p[1]]), 9), 'Ascent road (first leg)');
    W.zone(corridor(LEG2.map((p) => [p[0], p[1]]), 8), 'Ascent road (second leg)');
    W.zone(corridor(LEG3.map((p) => [p[0], p[1]]), 8), 'Ascent road (third leg)');
    W.zone(rectPts(-75, 39, 12, 9, 0), 'Jorla and Laxman Pols');
    W.zone(rectPts(-49, 82.5, 14, 10, 0), 'Inside Ram Pol');

    // ---------------------------------------------------------------- temples (wrapper: a plinth that covers the whole temple, and climbable steps)
    const temple = (o) => {
      const w = o.w, rot = o.rot ?? 0, r = rot * DEG, c = Math.cos(r), s = Math.sin(r);
      const T = (u, v) => [o.x + u * c - v * s, o.y + u * s + v * c];
      const md = Object.assign({ d: w * 1.1, w: w * 1.15, h: w * 0.55, roof: 'stepped' }, o.mandapa || {});
      const v0 = -md.d - w / 2 - 1.1, v1 = w + 1.1;
      const pc = T(0, (v0 + v1) / 2);
      const poly = rectPts(pc[0], pc[1], Math.max(w, md.w) + 2.2, v1 - v0, rot);
      let lo = Infinity; for (const p of poly) lo = Math.min(lo, g(p[0], p[1]));
      const pl = o.plinth ?? 0.9;
      const top = W.platform({ poly, h: lo + pl, color: o.color || 'stone', tag: TAG.temple });
      W.temple(Object.assign({}, o, { base: top, plinth: 0.02, mandapa: md, stairs: false }));
      if (pl > 0.55) { const run = Math.max(1.4, pl / 0.42); const a = T(0, v0 - run), b = T(0, v0 + 0.05); W.stairs({ from: a, to: [b[0], b[1], top], w: Math.min(3.2, w * 0.6), color: o.color || 'stone' }); }
      return { poly, top };
    };
    const tCol = '#a99a80';

    // ---------------------------------------------------------------- Rana Kumbha's palace
    const palCol = old ? '#d3cbb9' : '#8e877a';
    const pw = W.wall({ path: PAL, closed: true, h: 7.6, thick: 2.2, batter: 0.03, parapet: { h: 1.0, t: 0.45 }, merlon: kanguraS, walk: false, color: old ? '#c9c0ac' : 'wall' });
    W.gate({ wall: pw, at: [-10, 52], width: 3.8, spring: 3.7, rise: 2.2, name: 'Badi Pol', towers: false, frameW: 0.5, frameUp: 1.0 });
    const tri = W.wall({ path: [[-20, 39.4], [-20, 72.6]], closed: false, outer: 'right', h: 6.4, thick: 1.6, batter: 0.02, parapet: { h: 0.8, t: 0.4 }, merlon: kanguraS, walk: false, color: old ? '#c9c0ac' : 'wall' });
    for (const y of [49, 52, 55]) W.gate({ wall: tri, at: [-20, y], width: 2.2, spring: 3.0, rise: 1.3, towers: false, frame: false, doors: false, name: y === 52 ? 'Tripolia' : undefined });
    const wings = [
      { rect: [-33, 67.5, 24, 7.5, 0], storeys: 3, jh: true, doors: [{ edge: 0, at: 0.3, w: 2.4 }, { edge: 0, at: 0.7, w: 2.4 }, { edge: 2, at: 0.5, w: 2.2 }] },
      { rect: [-43, 52, 7.5, 14.5, 0], storeys: 3, doors: [{ edge: 1, at: 0.5, w: 2.4 }, { edge: 3, at: 0.3, w: 2 }] },
      { rect: [-15, 44, 6, 6.4, 0], storeys: 1, doors: [{ edge: 2, at: 0.5, w: 2.4 }] },
      { rect: [-15, 65.5, 6, 11, 0], storeys: 1, doors: [{ edge: 0, at: 0.5, w: 2.6 }, { edge: 3, at: 0.5, w: 2.4 }] },
    ];
    for (const wg of wings) {
      if (old) W.building({ rect: wg.rect, storeys: wg.storeys, storeyH: 3.8, color: palCol, roof: 'flat', merlon: 'kangura', windows: { style: 'arch', spacing: 2.4, w: 1.0, h: 1.7 }, jharokhas: wg.jh ? { every: 4.5, size: 1.7, rows: [1, 2] } : null, chhatris: wg.storeys > 1 ? 'corners' : null, chhatriSize: 2.2, chhatriH: 2.0, kind: 'palace' });
      else W.ruin({ rect: wg.rect, h: wg.storeys * (mid ? 3.5 : 3.3), thick: 0.9, color: palCol, storeys: wg.storeys, doors: wg.doors });
    }
    if (old) W.pavilion({ x: -30.5, y: 61.2, w: 15, d: 3.6, plinth: 0.45, colH: 3.3, cols: [7, 2], roof: 'flat', color: palCol, kind: 'palace' });
    else W.ruin({ rect: [-30.5, 61.2, 15, 3.6, 0], h: 2.6, thick: 0.6, color: palCol, doors: [{ edge: 0, at: 0.3, w: 3 }, { edge: 0, at: 0.75, w: 3 }] });
    // Nau Kotha magazine, Shringar Chauri and the Nau Lakha Bhandar along the palace's south wall
    W.building({ rect: [-28, 42.3, 12, 4.2, 0], h: 4.2, color: old ? '#c9c0ac' : 'stone', roof: 'vault', roofColor: 'stone', windows: { style: 'arch', spacing: 2, w: 1.2, h: 2.2, sill: 0.2, rows: [0] }, kind: 'building' });
    temple({ x: -38, y: 33, rot: 0, w: 3.6, h: 5.2, style: 'jain', plinth: 0.5, color: '#b8a98c', mandapa: { d: 3.2, w: 4, h: 2.6, roof: 'stepped' } });
    W.bastion({ at: [-47.2, 35.6], r: 5, top: g(-47.2, 35.6) + 9.5, parapet: { h: 1.0, t: 0.5 }, merlon: kanguraS, walk: false, color: 'wall', batter: 0.05 });
    temple({ x: -28, y: 52, rot: 90, w: 3.4, h: 5, plinth: 0.5, color: tCol, mandapa: { d: 3, w: 3.6, h: 2.4, roof: 'stepped' }, flag: old || now, flagColor: '#c9361f' });
    W.zone(rectPts(-29, 56, 36, 32, 0), 'Rana Kumbha Palace');
    W.label(-29, 76, 'Kumbha palace');
    if (old) { W.flag({ x: -45, y: 70.5, h: g(-45, 70.5) + 11.6, pole: 5, color: P.flag, size: 1.4 }); W.flag({ x: -21.5, y: 70.5, h: g(-21.5, 70.5) + 11.6, pole: 5, color: P.flag, size: 1.4 }); }

    // ---------------------------------------------------------------- Fateh Prakash palace (built 1885–1930: today only)
    if (now) {
      W.building({ rect: [10, 53, 21, 14, 0], storeys: 3, storeyH: 3.8, color: '#e2cb8e', trim: '#c9ad6a', roof: 'flat', merlon: 'kangura', chhatris: 'corners', chhatriSize: 2.6, chhatriH: 2.4, windows: { style: 'arch', spacing: 2.0, w: 1.1, h: 2.0 }, jharokhas: { every: 5, size: 1.8, rows: [1, 2] }, kind: 'palace' });
      W.label(10, 63, 'Fateh Prakash');
    }

    // ---------------------------------------------------------------- Vijay Stambh, the temple compound, Mahasati, Samiddheshwar, Gaumukh
    const vsBase = g(0, 0) - 0.2;
    W.tower({ x: 0, y: 0, w: 8.2, storeys: 9, sh: 3.3, taper: 0.025, plinth: 3.0, base: vsBase, top: 'chhatri', color: '#c8a877' });
    W.stairs({ from: [0, -13.9], to: [0, -6.5, vsBase + 3], w: 3.2, color: '#b99a6c', side: true });
    W.zone(rectPts(0, -2, 22, 24, 0), 'Vijay Stambh');
    W.label(0, -26, 'Vijay Stambh');
    if (old) W.flag({ x: 0, y: 0, h: vsBase + 3 + 9 * 3.3 * 0.99 + 5.6, pole: 3, color: P.flag, size: 1.2, base: false });
    temple({ x: -10, y: 20, rot: 90, w: 6, h: 13, plinth: 1.2, color: tCol, mandapa: { d: 7, w: 7.5, h: 3.6, roof: 'stepped' }, flag: !mid, flagColor: '#c9361f' });
    temple({ x: -9.5, y: 32, rot: 90, w: 4.4, h: 9, plinth: 0.9, color: tCol, mandapa: { d: 4.4, w: 5, h: 3, roof: 'stepped' }, flag: true, flagColor: '#d8762b' });
    W.zone(rectPts(-6, 26, 22, 24, 0), 'Kumbha Shyam and Meera temples');
    const ms = W.platform({ poly: rectPts(-18, -19, 15, 11, 0), dh: 0.5, color: 'stone' });
    for (const [x, y, sz] of [[-22.5, -15.8, 2.6], [-14, -15.6, 2.2], [-22.6, -22.2, 2.2], [-14.2, -22.4, 2.8], [-18.4, -19, 2.0]]) W.chhatri({ x, y, base: ms, size: sz, h: 2.2, dome: 'half', color: '#b3a68c' });
    W.zone(rectPts(-18, -19, 17, 13, 0), 'Mahasati');
    temple({ x: -24, y: -40, rot: 90, w: 6, h: 11, plinth: 1.0, color: tCol, mandapa: { d: 6.5, w: 7.5, h: 3.4, roof: 'stepped' } });
    const gau = W.tank({ poly: rectPts(GX, -53, 11, 8, 8), waterDepth: 3.6, tiers: 3, color: 'stone', waterColor: '#3d5145' });
    W.building({ rect: [GX - 5.8, -53.6, 1.0, 1.8, 8], base: gau.rim - 2.4, h: 1.6, color: '#b3a68c', roof: 'flat', parapet: false, windows: false, cornice: false });
    W.zone(rectPts(GX, -53, 16, 13, 8), 'Gaumukh Kund');

    // ---------------------------------------------------------------- the valley: Jaimal and Patta, the central tank, Kalika Mata, Padmini, Bhimlat
    const jp = [[-14, -86, 12, 9], [-2, -95, 11, 9]];
    for (const [x, y, w, d] of jp) {
      if (old) W.building({ rect: [x, y, w, d, 0], storeys: 2, storeyH: 3.6, color: '#d8d0bf', roof: 'flat', merlon: 'kangura', windows: { style: 'arch', spacing: 2.4 }, jharokhas: { every: 5, size: 1.5, rows: [1] }, chhatris: 'corners', chhatriSize: 1.8, kind: 'palace' });
      else W.ruin({ rect: [x, y, w, d, 0], h: mid ? 5.6 : 5.0, thick: 0.8, color: 'stone', storeys: 2, doors: [{ edge: 1, at: 0.5, w: 2.4 }, { edge: 3, at: 0.4, w: 2 }] });
    }
    W.zone(rectPts(-8, -90, 26, 18, 0), 'Palaces of Jaimal and Patta');
    W.tank({ poly: ellipsePts(34, -70, 17, 9, 24, 6, 0.05, 3), waterDepth: 1.5, tiers: 3, color: 'stone' });
    W.zone(ellipsePts(34, -70, 20, 12, 16, 6), 'Jaimal–Patta talab');
    temple({ x: 2, y: -174, rot: 90, w: 6.4, h: 8, plinth: 1.8, color: '#a59478', mandapa: { d: 8, w: 8.4, h: 3.6, roof: 'stepped', roofH: 2.6 }, flag: true, flagColor: '#c9361f' });
    W.zone(rectPts(4, -174, 26, 16, 0), 'Kalika Mata temple');
    W.label(4, -186, 'Kalika Mata');
    W.tank({ poly: rectPts(52, -184, 16, 6, -6), waterDepth: 2.0, tiers: 2, color: 'stone' });
    W.zone(rectPts(52, -184, 20, 10, -6), 'Bhimlat Kund');
    const padT = W.tank({ poly: rectPts(34, -228, 30, 22, 0), waterDepth: 2.0, tiers: 3, color: 'stone' });
    const padCol = now ? '#eee9dd' : mid ? '#c9c0ac' : '#e4ddcc';
    W.platform({ poly: rectPts(36, -229, 10.6, 10.6, 0), h: padT.waterH + 0.7, color: 'stone', walk: false });
    W.building({ rect: [36, -229, 8.6, 8.6, 0], base: padT.waterH + 0.7, storeys: mid ? 2 : 3, storeyH: 3.4, color: padCol, trim: '#d9c9a3', roof: 'flat', chhatris: mid ? null : 'corners', chhatriSize: 1.9, chhatriH: 1.8, windows: { style: 'arch', spacing: 1.8, w: 0.9, h: 1.5 }, jharokhas: { every: 4, size: 1.4, rows: mid ? [1] : [1, 2] }, kind: 'palace' });
    if (mid) W.ruin({ rect: [34, -212.6, 20, 7, 0], h: 5.5, thick: 0.8, color: padCol, storeys: 2, doors: [{ edge: 0, at: 0.5, w: 2.4 }, { edge: 2, at: 0.5, w: 2.4 }] });
    else W.building({ rect: [34, -212.6, 20, 7, 0], storeys: 2, storeyH: 3.6, color: padCol, trim: '#d9c9a3', roof: 'flat', merlon: 'kangura', chhatris: [[26.4, -212.6], [41.6, -212.6]], chhatriSize: 2.2, windows: { style: 'arch', spacing: 2.2 }, jharokhas: { every: 5, size: 1.6, rows: [1] }, kind: 'palace' });
    W.zone(rectPts(32, -224, 34, 32, 0), 'Padmini\'s Palace');
    W.label(34, -244, 'Padmini\'s Palace');

    // ---------------------------------------------------------------- the east crest: Kirti Stambh, Nilkanth Mahadev, Suraj Pol memorial
    const ksBase = g(KS[0], KS[1]) - 0.2;
    // ASI inventory: approximately 24 m high, six storeys, square shaft,
    // square platform and a 12-pillar open pavilion at the summit. The shaft
    // taper matches the reported 9 m base to 4.6 m top; the local placement
    // is still schematic pending survey registration.
    const ksTower = W.tower({ x: KS[0], y: KS[1], w: 9.0, storeys: 6, sh: 3.4, taper: 0.104, cross: false, plinth: 1.2, base: ksBase, top: 'none', color: '#d6c7a6' });
    W.pavilion({ x: KS[0], y: KS[1], w: 4.6, d: 4.6, base: ksTower.top, plinth: 0.01, colH: 2.0, cols: [4, 4], colW: 0.28, roof: 'flat', color: '#d6c7a6', stairs: false, kind: 'temple' });
    W.stairs({ from: [KS[0], KS[1] - 5.6 - 3.0], to: [KS[0], KS[1] - 5.55, ksBase + 1.2], w: 2.6, color: '#c8b896' });
    temple({ x: KS[0] - 14, y: KS[1], rot: -90, w: 5.4, h: 8, style: 'jain', plinth: 0.9, color: '#cdbd9b', mandapa: { d: 6, w: 6.6, h: 3.2, roof: 'stepped' } });
    W.zone(rectPts(KS[0] - 9, KS[1], 30, 18, 0), 'Kirti Stambh');
    W.label(KS[0] - 6, KS[1] + 12, 'Kirti Stambh');
    temple({ x: NK_X, y: 22, rot: -90, w: 4, h: 6, plinth: 0.7, color: tCol, mandapa: { d: 3.5, w: 4.5, h: 2.6, roof: 'stepped' }, flag: !mid, flagColor: '#c9361f' });
    if (!old) { const t = W.platform({ poly: rectPts(SP_X - 7.5, -16.2, 3.4, 3.4, 0), dh: 0.5, color: 'stone' }); W.chhatri({ x: SP_X - 7.5, y: -16.2, base: t, size: 2.6, h: 2.4, dome: 'half', color: '#b3a68c' }); }
    W.zone(rectPts(SP_X - 5, -9, 14, 14, 0), 'Suraj Pol');
    // Tulja Bhavani temple and the Tope Khana yard north of Ram Pol
    temple({ x: -30, y: 106, rot: -90, w: 4.2, h: 7, plinth: 0.8, color: tCol, mandapa: { d: 4, w: 4.6, h: 2.8, roof: 'stepped' }, flag: !mid, flagColor: '#c9361f' });
    if (!old) for (const [x, y, d] of [[-34, 116.5, 172], [-28.5, 117, 180], [-23, 116.5, 186]]) W.cannon({ x, y, dir: d, len: mid ? 3.0 : 3.4, r: 0.36, carriage: !mid });

    // ---------------------------------------------------------------- houses: the living city in 1567, ruins and a village later
    const ZONES = {
      north: [[-22, 89], [50, 89], [50, 126], [-22, 126]],
      eastA: [[24, -2], [72, -4], [70, 30], [58, 58], [48, 78], [24, 80]],
      eastB: [[18, -16], [78, -16], [76, -50], [52, -56], [18, -50]],
      west: [[-50, -8], [-24, -8], [-20, 22], [-50, 22]],
      south: [[-40, -160], [2, -160], [2, -104], [-40, -104]],
      southE: [[22, -95], [66, -95], [62, -150], [22, -150]],
    };
    const houseBase = { size: [4, 8], h: [1, 2], colors: old ? ['#d6cebd', '#cbc1ab', '#c4b9a2', 'plasterDark'] : ['plasterDark', 'stone'], roof: 'flat', rot: 0, spacing: 1.6, maxSlope: 2.2 };
    let seed = 31;
    for (const [k, poly] of Object.entries(ZONES)) {
      seed += 7;
      if (old) W.houses(Object.assign({}, houseBase, { poly, count: k === 'north' || k === 'eastA' ? 30 : 20, seed }));
      else if (now && k === 'north') W.houses(Object.assign({}, houseBase, { poly, count: 24, colors: ['plaster', '#e6dcc6', '#d5c39b', '#c9b48a'], seed }));
      else W.houses(Object.assign({}, houseBase, { poly, count: mid ? 14 : 10, ruin: true, ruinShare: 1, ruinH: mid ? 0.45 : 0.35, seed }));
    }
    // the lower town at the western foot, either side of the lane to Padan Pol
    const LT1 = [[-176, -162], [-116, -162], [-112, -128], [-126, -125], [-152, -130], [-176, -129]];
    const LT2 = [[-176, -115], [-152, -117], [-128, -112], [-118, -102], [-118, -64], [-176, -56]];
    const ltCols = ['plaster', '#e3d8c2', '#d6c6a4', 'plasterDark'];
    W.houses({ poly: LT1, count: old ? 16 : mid ? 12 : 22, size: [4, 7], h: [1, 2], colors: ltCols, roof: mid ? 'mix' : 'flat', roofColor: 'roof', spacing: 1.4, seed: 81 });
    W.houses({ poly: LT2, count: old ? 18 : mid ? 12 : 26, size: [4, 7], h: [1, 2], colors: ltCols, roof: mid ? 'mix' : 'flat', roofColor: 'roof', spacing: 1.4, seed: 83 });
    W.zone(LT1, 'Lower town'); W.zone(LT2, 'Lower town');
    W.zone(corridor(TOWN_ROAD.map((p) => [p[0], p[1]]), 8), 'Lower town');
    W.label(-150, -140, 'Lower town');

    // ---------------------------------------------------------------- the Mughal siege works on the eastern plain (1567)
    if (old) {
      for (const [x, y, w, d, rot, guns] of [[156, -22, 10, 6.5, 8, [[-3, 0], [0.5, 0.4], [3.6, 0]]], [158, 7, 9, 6, -6, [[-2, 0], [2, 0]]], [150, -58, 8, 5.5, 20, [[-1.5, 0], [2, 0]]]]) {
        const top = W.platform({ poly: rectPts(x, y, w, d, rot), dh: 0.55, color: 'mud' });
        for (const [u, v] of guns) { const c = Math.cos(rot * DEG), s = Math.sin(rot * DEG); const px = x + u * c - v * s, py = y + u * s + v * c; W.cannon({ x: px, y: py, h: top, dir: Math.atan2(-9 - py, SP_X - px) / DEG, len: 3.6, r: 0.36 }); }
      }
      // the sabat: a covered way zigzagging from the camp towards the foot of the scarp
      const sab = [[196, 34], [183, 24], [191, 12], [177, 2], [185, -10], [169, -17], [162, -11]];
      for (let i = 0; i < sab.length - 1; i++) {
        const [ax, ay] = sab[i], [bx, by] = sab[i + 1], L = Math.hypot(bx - ax, by - ay);
        W.building({ rect: [(ax + bx) / 2, (ay + by) / 2, L + 1.2, 3.0, Math.atan2(by - ay, bx - ax) / DEG], h: 2.5, color: '#8a6e4e', roof: 'vault', roofColor: '#76603f', parapet: false, windows: false, cornice: false, kind: 'building' });
      }
      const tents = [[172, 42], [181, 50], [190, 57], [175, 63], [193, 45], [168, 54], [196, 68], [170, -40], [180, -50], [190, -43], [174, -64], [186, -71], [195, -57], [182, -86], [172, 100], [191, 104], [186, 115], [174, 116]];
      tents.forEach(([x, y], i) => W.building({ rect: [x, y, 4 + (i % 3) * 0.6, 4 + (i % 2) * 0.8, (i * 23) % 40 - 20], h: 1.7, color: '#ece5d2', roof: 'pyramid', roofH: 2.3, roofColor: i % 4 === 0 ? '#b8452a' : '#e3dbc6', parapet: false, windows: false, cornice: false, kind: 'building' }));
      W.pavilion({ x: 182, y: 88, w: 10, d: 8, plinth: 0.3, colH: 2.8, cols: [4, 3], roof: 'pyramid', roofH: 3.4, color: '#efe7d4', roofColor: '#b8452a', kind: 'building', stairs: false });
      for (const [x, y, c] of [[182, 94.5, '#b8452a'], [160, 11, '#2f6b45'], [156, -27, '#2f6b45'], [188, 50, '#b8452a'], [184, -46, '#2f6b45']]) W.flag({ x, y, pole: 7, color: c, size: 1.5 });
      W.zone([[146, -100], [200, -100], [200, 128], [146, 128]], 'Mughal siege camp');
      W.label(182, 76, 'Mughal camp');
    } else W.zone([[146, -150], [200, -150], [200, 128], [146, 128]], 'Plain below the east face');
    W.zone([[-180, -50], [-112, -60], [-108, 128], [-180, 128]], 'Plain below the west face');

    // ---------------------------------------------------------------- vegetation
    const IN = rimPoly(-262, 127, 8);
    const avoid = ROAD_POLYS;
    if (old) {
      W.trees({ poly: IN, count: 45, types: { neem: 3, banyan: 1, acacia: 2, khejri: 1 }, s: [0.8, 1.2], minDist: 9, seed: 5, avoid });
      W.trees({ count: 60, types: { acacia: 3, khejri: 2, shrub: 3 }, s: [0.7, 1.1], minDist: 7, seed: 6, maxH: 4, maxSlope: 1.4 });
      W.trees({ count: 50, types: { shrub: 3, grass: 2 }, s: [0.7, 1.1], minDist: 4, seed: 7, minH: 4, maxH: 30, maxSlope: 3.2 });
    } else if (mid) {
      W.trees({ poly: IN, count: 230, types: { acacia: 3, khejri: 2, neem: 2, banyan: 1, shrub: 6 }, s: [0.7, 1.3], minDist: 4.2, seed: 5, avoid });
      W.trees({ poly: IN, count: 420, types: { grass: 4, shrub: 1 }, s: [0.7, 1.3], minDist: 2.2, seed: 15, pad: 0.6, avoid });
      W.trees({ count: 90, types: { acacia: 3, khejri: 2, shrub: 3 }, s: [0.7, 1.2], minDist: 6, seed: 6, maxH: 4, maxSlope: 1.4 });
      W.trees({ count: 170, types: { shrub: 4, grass: 3, acacia: 1 }, s: [0.7, 1.2], minDist: 3, seed: 7, minH: 3, maxH: 33, maxSlope: 3.4 });
    } else {
      W.trees({ poly: IN, count: 120, types: { neem: 3, acacia: 2, banyan: 1, khejri: 1, shrub: 3 }, s: [0.8, 1.3], minDist: 6, seed: 5, avoid });
      W.trees({ poly: IN, count: 160, types: { grass: 3, shrub: 1 }, s: [0.7, 1.2], minDist: 2.6, seed: 15, pad: 0.6, avoid });
      W.trees({ count: 80, types: { acacia: 3, neem: 2, khejri: 2, shrub: 2 }, s: [0.7, 1.2], minDist: 7, seed: 6, maxH: 4, maxSlope: 1.4 });
      W.trees({ count: 110, types: { shrub: 4, grass: 3 }, s: [0.7, 1.2], minDist: 3.4, seed: 7, minH: 3, maxH: 33, maxSlope: 3.4 });
    }
    // the Mahasati is "a small wooded terrace"
    for (const [x, y, t] of [[-25.4, -24.5, 'banyan'], [-10.8, -13.2, 'neem'], [-26, -12.6, 'neem']]) W.tree({ x, y, type: t, s: 1.05 });

    // ---------------------------------------------------------------- the mesa running on past the edges (backdrop only)
    const plat = hexMix(P.grass, P.dry, 0.5), talus = hexMix(P.rock, P.dry, 0.35), wallC = P.wall;
    const tal = (d) => 30 * (1 - d / 52) ** 2;
    // built from short strips: long fan triangles would show the mesher's per-face colour jitter as streaks
    const tiers = [0, 2, 4.5, 8, 12.5, 18, 24.5, 32, 41, 52];
    const tierCol = (t) => ({ color: t <= 2 ? P.cliff : hexMix(talus, P.cliff, 0.2), colorTop: t <= 2 ? hexMix(talus, P.cliff, 0.35) : talus });
    const backdrop = (yEdge, yLast, yTip, sgn) => {
      const ys = []; for (let y = yEdge; sgn > 0 ? y < yLast : y > yLast; y += 12 * sgn) ys.push(y);
      ys.push(yLast);
      for (let i = 0; i < ys.length - 1; i++) {
        const ya = ys[i], yb = ys[i + 1];
        const wa = rimX('w', ya), ea = rimX('e', ya), wb = rimX('w', yb), eb = rimX('e', yb);
        for (let c = 0; c < 4; c++) {
          const f0 = c / 4, f1 = (c + 1) / 4;
          W.scenery({ poly: [[lerp(wa, ea, f0), ya], [lerp(wa, ea, f1), ya], [lerp(wb, eb, f1), yb], [lerp(wb, eb, f0), yb]], h0: 24, h1: 38, color: P.cliff, colorTop: plat });
        }
        for (let t = 1; t < tiers.length; t++) {
          const o0 = tiers[t - 1], o1 = tiers[t], top = tal(o0);
          W.scenery(Object.assign({ poly: [[wa - o1, ya], [wa - o0, ya], [wb - o0, yb], [wb - o1, yb]], h0: -0.6, h1: top }, tierCol(t)));
          W.scenery(Object.assign({ poly: [[ea + o0, ya], [ea + o1, ya], [eb + o1, yb], [eb + o0, yb]], h0: -0.6, h1: top }, tierCol(t)));
        }
        const sgW = 1.5, x0 = wa + sgW, x1 = wb + sgW, x2 = ea - sgW, x3 = eb - sgW;
        W.scenery({ box: [(x0 + x1) / 2, (ya + yb) / 2, Math.hypot(x1 - x0, yb - ya) + 0.5, 2.8, Math.atan2(yb - ya, x1 - x0) / DEG, 36.5, 42.5], color: wallC });
        W.scenery({ box: [(x2 + x3) / 2, (ya + yb) / 2, Math.hypot(x3 - x2, yb - ya) + 0.5, 2.8, Math.atan2(yb - ya, x3 - x2) / DEG, 36.5, 42.5], color: wallC });
      }
      // the far tip of the mesa
      const wl = rimX('w', yLast), el = rimX('e', yLast), mid = (wl + el) / 2;
      W.scenery({ poly: [[wl, yLast], [el, yLast], [mid, yTip]], h0: 24, h1: 38, color: P.cliff, colorTop: plat });
      for (let t = 1; t < tiers.length; t++) W.scenery(Object.assign({ poly: [[wl - tiers[t], yLast], [el + tiers[t], yLast], [mid, yTip + sgn * tiers[t]]], h0: -0.6, h1: tal(tiers[t - 1]) }, tierCol(t)));
    };
    backdrop(129.5, 412, 440, 1);
    backdrop(-264.5, -588, -612, -1);
    // the town of Chittor on the plain to the west, and distant hills
    for (const [x, y, r, h] of [[-420, -380, 140, 26], [-520, 60, 190, 34], [420, 320, 170, 30], [470, -330, 150, 24]]) W.scenery({ hill: { x, y, r, h }, color: hexMix(P.grass, P.rock, 0.3), h0: 0 });

    // ---------------------------------------------------------------- people and animals
    const wallWalk = (side, y) => { const x = rimX(side, y) + (side === 'w' ? 1.9 : -1.9); return [x, y, (side === 'w' ? topW : topE)(x - (side === 'w' ? 0.4 : -0.4), y)]; };
    const walkLoop = (side, y0, y1, n = 5) => { const pts = []; for (let i = 0; i <= n; i++) pts.push(wallWalk(side, lerp(y0, y1, i / n))); for (let i = n - 1; i > 0; i--) pts.push(pts[i]); return pts; };
    const inside = (p, dir, d) => [p[0] + dir[0] * d, p[1] + dir[1] * d];
    if (old) {
      for (const p of POLS) { for (const sg of [-1, 1]) { const q = inside(p.at, p.dir, 3.2); W.npc({ kind: 'guard-rajput', at: [q[0] + p.v[0] * 1.6 * sg, q[1] + p.v[1] * 1.6 * sg], face: Math.atan2(-p.dir[0], p.dir[1]) / DEG, mode: 'idle' }); } }
      W.npc({ kind: 'guard-rajput', at: [-53, 79.6], face: 270, mode: 'idle' }); W.npc({ kind: 'guard-rajput', at: [-53, 84.4], face: 270, mode: 'idle' });
      W.npc({ kind: 'guard-rajput', at: [SP_X - 4, -11.4], face: 90, mode: 'idle' }); W.npc({ kind: 'guard-rajput', at: [SP_X - 4, -6.6], face: 90, mode: 'idle' });
      W.npc({ kind: 'guard-rajput', patrol: walkLoop('w', 60, 0), count: 2 }); W.npc({ kind: 'guard-rajput', patrol: walkLoop('w', -95, -165), count: 2 });
      W.npc({ kind: 'guard-rajput', patrol: walkLoop('e', 60, 8), count: 2 }); W.npc({ kind: 'guard-rajput', patrol: walkLoop('e', -40, -110), count: 3 });
      W.npc({ kind: 'guard-rajput', at: [3.5, -6], h: vsBase + 3, face: 90, mode: 'idle' });
      W.npc({ kind: 'courtier', circle: [-30, 53, 7], count: 3 }); W.npc({ kind: 'courtier', circle: [-8, -91, 6], count: 2 });
      W.npc({ kind: 'woman-red', circle: [-43, 52, 9], count: 2 }); W.npc({ kind: 'woman-indigo', zone: ZONES.eastA, count: 3 }); W.npc({ kind: 'woman-green', circle: [34, -60, 12], count: 3 });
      W.npc({ kind: 'villager', zone: ZONES.north, count: 4 }); W.npc({ kind: 'villager', zone: ZONES.eastB, count: 3 }); W.npc({ kind: 'merchant', zone: ZONES.eastA, count: 3 });
      W.npc({ kind: 'priest', circle: [6, 22, 5], count: 1 }); W.npc({ kind: 'priest', circle: [20, -174, 5], count: 1 });
      W.npc({ kind: 'horse', circle: [-15, 52, 3], count: 2 }); W.npc({ kind: 'elephant', circle: [-14, 86, 6], count: 2 }); W.npc({ kind: 'cow', circle: [30, 20, 14], count: 3 });
      // the Mughal army
      W.npc({ kind: 'guard-mughal', circle: [156, -16, 9], count: 6 }); W.npc({ kind: 'guard-mughal', circle: [158, 8, 7], count: 3 }); W.npc({ kind: 'guard-mughal', circle: [178, 60, 16], count: 5 });
      W.npc({ kind: 'guard-mughal', patrol: [[150, -110, 0], [152, -60, 0], [154, 20, 0], [160, 70, 0], [154, 20, 0], [152, -60, 0]], count: 2 });
      W.npc({ kind: 'elephant-royal', circle: [184, 80, 5], count: 1 }); W.npc({ kind: 'elephant', circle: [178, -30, 10], count: 3 });
      W.npc({ kind: 'horse', circle: [180, 40, 12], count: 5 }); W.npc({ kind: 'camel', circle: [184, -62, 10], count: 4 }); W.npc({ kind: 'merchant', circle: [176, 100, 8], count: 2 });
    } else if (mid) {
      W.npc({ kind: 'officer', at: [-4.5, -16.5], face: 30, mode: 'idle' }); W.npc({ kind: 'villager', at: [-2.4, -18.4], face: 20, mode: 'idle' });
      W.npc({ kind: 'guard-rajput', at: [-53, 79.6], face: 270, mode: 'idle' });
      W.npc({ kind: 'priest', circle: [20, -174, 5], count: 1 }); W.npc({ kind: 'priest', circle: [6, 24, 4], count: 1 });
      W.npc({ kind: 'pilgrim', circle: [10, -120, 30], count: 2 }); W.npc({ kind: 'villager', zone: LT1, count: 3 }); W.npc({ kind: 'woman-red', zone: LT2, count: 2 });
      W.npc({ kind: 'woman-green', circle: [16, -70, 6], count: 2 }); W.npc({ kind: 'villager', zone: ZONES.north, count: 2 });
      W.npc({ kind: 'goat', zone: ZONES.eastA, count: 6 }); W.npc({ kind: 'cow', zone: ZONES.south, count: 4 }); W.npc({ kind: 'goat', circle: [-30, 56, 8], count: 3 });
    } else {
      W.npc({ kind: 'tourist-a', circle: [4, -14, 10], count: 3 }); W.npc({ kind: 'tourist-b', circle: [-4, 30, 10], count: 3 }); W.npc({ kind: 'tourist-c', circle: [-30, 52, 8], count: 3 });
      W.npc({ kind: 'tourist-d', circle: [14, -224, 7], count: 3 }); W.npc({ kind: 'tourist-a', circle: [KS[0] - 10, 97, 7], count: 2 }); W.npc({ kind: 'tourist-c', circle: [-46, 83, 5], count: 2 });
      W.npc({ kind: 'student', circle: [6, -16, 7], count: 6, speed: 1.4 }); W.npc({ kind: 'tourist-b', patrol: walkLoop('w', 70, 10), count: 2 });
      W.npc({ kind: 'tourist-d', circle: [-104, -80, 4], count: 2 });
      W.npc({ kind: 'asi-guard', at: [-53, 79.6], face: 270, mode: 'idle' }); W.npc({ kind: 'asi-guard', at: [6, -12.5], face: 0, mode: 'idle' });
      W.npc({ kind: 'asi-guard', at: [-2, 47], face: 270, mode: 'idle' }); W.npc({ kind: 'asi-guard', at: [16, -218], face: 300, mode: 'idle' });
      W.npc({ kind: 'priest', circle: [20, -174, 5], count: 1 }); W.npc({ kind: 'pilgrim', circle: [22, -168, 10], count: 3 });
      W.npc({ kind: 'villager', zone: ZONES.north, count: 4 }); W.npc({ kind: 'woman-red', zone: ZONES.north, count: 2 }); W.npc({ kind: 'woman-green', zone: LT2, count: 2 });
      W.npc({ kind: 'villager', zone: LT1, count: 3 }); W.npc({ kind: 'cow', circle: [40, 20, 16], count: 3 }); W.npc({ kind: 'goat', zone: ZONES.south, count: 3 });
    }

    // ---------------------------------------------------------------- places and spawn
    for (const p of POIS) W.poi(Object.assign({}, p, { eraNote: p.eraNote?.[era] || null }));
    W.wildlife({ kinds: { peafowl: 8, boar: now ? 0 : 2 } });
    W.wildlife({ kinds: { langur: 6 }, walls: true, s: 0.4 });
    W.spawn(-108.6, -110.8, g(-108.6, -110.8), 167);
  },
};
