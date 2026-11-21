// 09 · Mehrangarh — Rao Jodha's rock fort and palace above Jodhpur, Rajasthan.
// No measured plan is available: the layout follows the research blockout. The palace stands on the sheer north-west of the
// rock, a forecourt lies east of it, a long fortified southern terrace runs to the Chamunda Mata temple, and the approach ramp
// climbs the east flank through its pols; the old route from Fateh Pol joins below Dedh Kamgra Pol.
// Plan compressed to 1.4 m per unit (the rock is ~500 m N-S); heights halved (vScale 2).
// The scene's court datum renders as ~114 m above its local zero. Rajasthan Tourism gives 125 m
// above Jodhpur's skyline; AAI says 150 m for the hill. Keep the terrain schematic until a common
// surveyed vertical datum resolves this conflict; forcing either number breaks connected access.
import { rectPts, regularPoly } from './kit.js';
import { TAG } from '../core/nav.js';

// Present OSM water outlines, projected from the scene's public map reference;
// © OpenStreetMap contributors, ODbL. The hand-built fort is not registered.
const mehPadmasar=[[-294.67, 79.52], [-285.69, 77.38], [-284.47, 79.48], [-279.95, 80.92], [-279.74, 82.93], [-277.49, 83.78], [-276.01, 84.64], [-275.14, 86.07], [-275.0, 87.7], [-275.34, 89.47], [-282.19, 102.64], [-279.21, 107.88], [-270.44, 115.96], [-267.2, 115.87], [-263.96, 120.11], [-261.42, 133.6], [-263.39, 137.32], [-264.03, 148.29], [-264.54, 152.99], [-263.77, 157.3], [-260.33, 159.97], [-252.3, 161.96], [-252.88, 168.19], [-246.47, 178.71], [-244.44, 189.37], [-239.94, 206.4], [-236.14, 207.87], [-232.44, 205.01], [-231.75, 187.03], [-232.18, 174.87], [-229.54, 174.22], [-229.01, 165.96], [-223.23, 151.94], [-217.26, 148.52], [-210.69, 151.51], [-201.96, 153.76], [-200.0, 152.75], [-196.95, 154.91], [-197.62, 165.04], [-198.76, 168.39], [-195.27, 168.39], [-191.06, 171.69], [-186.96, 168.39], [-187.53, 159.12], [-182.65, 159.16], [-181.22, 156.77], [-189.59, 153.33], [-195.18, 149.03], [-196.49, 148.57], [-197.76, 148.29], [-199.38, 148.1], [-201.13, 147.48], [-202.75, 146.43], [-204.24, 145.15], [-210.48, 142.55], [-212.58, 144.91], [-213.48, 145.4], [-214.49, 145.66], [-215.47, 145.57], [-216.61, 145.19], [-218.22, 144.41], [-219.77, 144.25], [-220.85, 144.41], [-225.55, 146.66], [-226.74, 147.03], [-227.55, 147.08], [-228.37, 146.97], [-229.17, 146.69], [-229.71, 146.19], [-230.07, 145.53], [-230.17, 144.87], [-230.05, 144.27], [-229.75, 143.76], [-229.28, 143.36], [-230.51, 135.54], [-231.9, 126.23], [-232.63, 118.75], [-232.65, 117.6], [-232.42, 116.46], [-231.82, 114.61], [-231.29, 112.75], [-230.98, 109.55], [-231.97, 103.91], [-232.97, 99.8], [-234.13, 96.4], [-235.33, 96.57], [-236.26, 96.26], [-236.91, 95.47], [-237.0, 94.56], [-236.69, 93.6], [-236.0, 93.01], [-234.73, 92.79], [-235.09, 90.19], [-235.58, 87.85], [-237.67, 82.69], [-239.59, 83.78], [-241.04, 84.19], [-242.4, 84.07], [-243.64, 83.66], [-244.58, 82.83], [-244.96, 81.58], [-244.86, 80.65], [-244.46, 79.48], [-243.74, 78.62], [-241.21, 76.95], [-245.9, 68.96], [-248.71, 68.53], [-249.91, 67.34], [-251.82, 60.22], [-253.2, 50.83], [-286.44, 56.5], [-285.42, 61.17], [-293.36, 63.47], [-292.21, 68.01], [-297.33, 69.44]];
const mehRanisar=[[-213.44, 48.02], [-233.49, 59.75], [-224.76, 70.98], [-215.32, 90.11], [-219.71, 93.78], [-202.11, 124.99], [-196.07, 144.84], [-190.07, 146.4], [-191.11, 128.53], [-191.34, 115.45], [-188.53, 109.79], [-176.34, 114.11], [-175.63, 121.45], [-171.19, 123.45], [-166.23, 132.76], [-158.8, 133.97], [-135.73, 154.24], [-117.03, 155.2], [-132.7, 138.75], [-135.57, 120.97], [-151.06, 105.1], [-166.98, 78.04], [-184.9, 63.99], [-195.65, 67.69]];
const mehLakeMarker=poly=>{const p=poly.reduce((a,b)=>b[0]>a[0]?b:a);return [p[0]+8,p[1]];};
const BOUNDS = [-340, -250, 222, 300];
const COURT = 57; // palace courts and forecourt; approximate rendered datum = 114 m
const plateauH = (x, y) => (y >= 50 ? COURT : y <= -160 ? 52.5 : 52.5 + (COURT - 52.5) * (y + 160) / 210);

// rim of the rock = line of the summit enceinte, clockwise from the palace's north-east corner
const RIM = [
  [26, 179], [40, 165], [50, 150], [54, 128], [54, 101],
  [54, 87], [53, 62], [51, 34], [48, 4], [45, -28], [41, -60], [35, -92], [28, -120], [19, -146], [10, -163], [0, -173],
  [-12, -175], [-22, -166], [-28, -146], [-34, -118], [-40, -86], [-44, -54], [-47, -20], [-50, 14], [-52, 46], [-54, 70],
  [-57, 100], [-58, 140], [-55, 166], [-46, 182], [-26, 189], [-2, 190], [16, 186],
];
const WALL_A = RIM.slice(0, 5);   // forecourt rampart: palace NE corner to Loha Pol
const WALL_B = RIM.slice(5, 26);  // Loha Pol, round the southern tip, to the palace's SW corner
const NORTH_TERRACE = [[53, 50], [53.5, 62], [54, 87], [54, 128], [50, 150], [40, 165], [26, 179], [16, 186], [-2, 190], [-26, 189], [-46, 182], [-55, 166], [-58, 140], [-57, 100], [-54, 70], [-52.6, 50]];
const SOUTH_IN = [[46, 40], [43, 4], [40, -28], [36, -60], [30, -90], [23, -118], [13, -142], [2, -158], [-12, -162], [-20, -150], [-26, -120], [-33, -86], [-38, -54], [-41, -20], [-44, 14], [-46, 40]];
// shoulder of the rhyolite hill below the scarp: narrow on the sheer west, north and south, wide on the east where the ramps run
const HILL = [
  [-60, 70], [-62, 100], [-62, 140], [-59, 168], [-50, 186], [-28, 194], [-2, 195], [20, 191], [34, 186], [60, 188], [92, 190], [108, 182],
  [108, 158], [98, 140], [82, 132], [78.6, 100], [78.6, 0], [80.2, -60], [82.5, -100], [62, -126], [26, -150], [14, -168], [2, -179], [-14, -181], [-26, -171],
  [-32, -148], [-38, -118], [-44, -86], [-48, -54], [-51, -20], [-54, 14], [-56, 46],
];
const hillH = (x, y) => {
  const e = y >= 140 ? 32 : y >= 0 ? 38 - 6 * (y / 140) : y >= -110 ? 38 + 13 * (y / 110) : 25;
  const t = Math.min(1, Math.max(0, (x - 28) / 24)), k = t * t * (3 - 2 * t);
  return 37 + (e - 37) * k;
};
const HILL_RING = [[-112, 60], [-112, 160], [-80, 232], [20, 242], [120, 232], [134, 140], [132, 0], [128, -120], [70, -178], [20, -226], [-40, -226], [-84, -150], [-104, -40]];

// approach: road to Jai Pol, the ramp south along the east flank, the switchback up to Loha Pol, and the old route from Fateh Pol
const JAI = { at: [78, 152], h: 32.5 };
// road head outside Jai Pol, and the bend inside it where the ramp turns south
const JAI_COURT = [[80, 136], [93, 135], [101, 150], [101, 176], [88, 185], [62, 183], [55, 172], [60, 166], [80, 165]];
const JAI_IN = [[63.5, 139], [76.5, 139], [76.5, 160.5], [63.5, 160.5]];
const ROAD_SPUR = [[84, 172, 32], [120, 196, 25], [150, 220, 17], [182, 250, 8], [214, 284, 1]];
const ROAD = [[92, 177, 32.5], [102, 184, 29.8], [118, 197, 26.6], [132, 206, 23.6], [146, 219, 20], [162, 230, 16], [174, 244, 12.4], [190, 257, 8.2], [204, 271, 4], [216, 288, 0.5]];
const OLD_SPUR = [[78, -112, 24.5], [100, -138, 17], [136, -158, 8.5], [180, -170, 2.5], [222, -178, 0]];
const OUTER = [[70, 158, 32.5], [70, 141, 32.5], [70, 120, 33.6], [70, 90, 35.2], [70, 60, 36.8], [69.6, 30, 38.4], [69, 8, 39.6], [68, -2, 40]];
const INNER = [[61, -4, 40.4], [61, 3, 40.4], [61, 13, 40.4], [61, 40, 46], [61, 48, 46], [61, 86, 55.5], [61, 96, 55.5], [57, 95, 55.5], [52, 94.5, 55.5]];
const LOHA_IN = [[56, 94.5, 55.5], [50, 94.5, 55.5], [40, 95.5, 57]];
const OLD = [[68, -4, 40], [69, -14, 38.8], [70, -22, 37.4], [70.5, -30, 37.4], [72, -46, 34.6], [73, -60, 31.6], [73.5, -68, 31.6], [74.5, -86, 28.4], [75, -98, 25.8], [75.2, -106, 25.8], [78, -118, 23.5], [88, -134, 20], [106, -148, 15.5], [130, -158, 10.5], [160, -166, 5], [190, -172, 1.5], [222, -178, 0]];
const JUNCTION = [[56, -10], [77, -10], [77, 3], [56, 3]];
const GATES = {
  dedh: { at: [61, 8], h: 40.4, name: 'Dedh Kamgra Pol' },
  amruti: { at: [61, 44], h: 46, name: 'Amruti Pol (Marti Pol)' },
  loha: { at: [54, 94.5], h: 55.5, name: 'Loha Pol' },
  bhairon: { at: [70.3, -26], h: 37.4, name: 'Bhairon Pol' },
  gopal: { at: [73.3, -64], h: 31.6, name: 'Gopal Pol' },
  fateh: { at: [75.1, -102], h: 25.8, name: 'Fateh Pol' },
};
// footpath west along the north foot into the Rock Park
const PARK_TRAIL = [[176, 247], [150, 252], [118, 254], [84, 254], [50, 252], [18, 250], [-12, 248], [-34, 246]];
const PARK_VIEW = regularPoly(-40, 246, 7, 10, 0);
// the walk along the gun line to the Chamunda temple
const VISITOR_PATH = [[30, 62], [38, 40], [37, 10], [34, -30], [30, -60], [24, -90], [16, -114], [6, -130], [-4, -140]];

// palace blocks [x0, x1, y0, y1]
const SC = [-26, -2, 80, 100];        // Shringar Chowk
const MMC = [-42, -18, 114, 136];     // Moti Mahal Chowk
const ZC = [-40, -14, 152, 172];      // zenana court
const DEODI = [-30, -24, 136, 152];   // Zenana Deodi passage
const FORECOURT = [[12, 58], [53, 58], [54, 128], [50, 150], [40, 165], [27, 178], [27, 152], [12, 152]];

const rect = (b) => [(b[0] + b[1]) / 2, (b[2] + b[3]) / 2, b[1] - b[0], b[3] - b[2], 0];
const bpoly = (b) => rectPts(...rect(b));

const POIS = [
  { id: 'jaipol', at: [87, 152], title: 'Jai Pol', r: 6,
    text: 'The "Gate of Victory" was built by Maharaja Man Singh in 1806 to celebrate his victory in a war with Jaipur and Bikaner; Britannica gives 1808. It is now the fort\'s main entrance, at the head of the road on the north-east.',
    source: 'https://en.wikipedia.org/wiki/Mehrangarh',
    eraNote: { '1806': 'The gate is shown newly finished, with masons still at work; the scene is a reconstruction.', today: 'The ticket office and visitor services are at Jai Pol, where the road from the city ends.' } },
  { id: 'fateh', at: [74.4, -95], title: 'Fateh Pol', r: 4,
    text: 'Built to celebrate the victory over the Mughals in 1707, when Maharaja Ajit Singh recovered Jodhpur. It was the lowest gate on the older approach from the walled city, followed uphill by Gopal Pol; its exact position is not confirmed.',
    source: 'https://en.wikipedia.org/wiki/Mehrangarh',
    eraNote: { '1806': 'In 1806 the gate was about a century old.' } },
  { id: 'dedh', at: [64, -2], title: 'Dedh Kamgra Pol', r: 6,
    text: 'The "one-and-a-half merlon" gate still bears the scars of a cannonball bombardment. It stands on the climb above Jai Pol, beside today\'s visitor facilities; in this reconstruction the old route from Fateh Pol joins the ramp just below it.',
    source: 'https://en.wikipedia.org/wiki/Mehrangarh',
    eraNote: { today: 'The café and visitor services cluster below this gate.' } },
  { id: 'loha', at: [60, 88], title: 'Loha Pol and the handprints', r: 6,
    text: 'The "Iron Gate" is the final gate into the main part of the fort. Relief handprints on the wall beside it were left by royal widows who committed sati: Cornell links them to the funeral of Maharaja Ajit Singh (1724), other sources to the queens of Maharaja Man Singh (1843).',
    source: 'https://dcp-production-container.library.cornell.edu/catalog/ss:3857545',
    eraNote: { '1806': 'On Cornell\'s dating the handprints were already here; on the other, they were made in 1843, after Man Singh\'s death.' } },
  { id: 'suraj', at: [19, 90], title: 'Suraj Pol', r: 6,
    text: 'The innermost, east-facing gate opens into the palace and the Daulat Khana courtyard; it is now the museum entrance. It has corbelled arches, cusped-arch decoration and a double-leaf wooden door strapped with metal.',
    source: 'https://ignca.gov.in/asi_reports/rjjdp019.pdf',
    eraNote: { today: 'Visitors enter the Mehrangarh Museum through this gate.' } },
  { id: 'shringar', at: [-14, 95], title: 'Shringar Chowk and Jhanki Mahal', r: 5,
    text: 'The palace\'s upper storeys form a continuous stone screen through which the women of the zenana watched ceremonies in this courtyard. The Mehrangarh Museum Trust dates the Jhanki Mahal to Maharaja Takhat Singh (1843–73); Cornell dates the building to about 1625–75.',
    source: 'https://www.mehrangarh.org/?p=1762',
    eraNote: { '1806': 'If the Trust\'s dating is right, the screens shown here were only built after 1843.' } },
  { id: 'daulat', at: [-14, 84.5], title: 'Daulat Khana', r: 4.5,
    text: 'The treasury wing gives its name to the Daulat Khana courtyard reached through Suraj Pol. It now houses a museum gallery of Mughal-period and Rajput fine and applied arts; the Trust calls its Mughal-period collection one of the most important and best preserved anywhere.',
    source: 'https://www.mehrangarh.org/?p=18',
    eraNote: { today: 'The wing is one of the museum\'s six galleries.' } },
  { id: 'moti', at: [-35, 125], title: 'Moti Mahal (Pearl Palace)', r: 6,
    text: 'Built as the Hall of Public Audience by Sawai Raja Sur Singh (r. 1595–1619); the Trust says 16th century. Its courtyard, the Moti Mahal Chowk, is among the oldest parts of the palace.',
    source: 'https://www.mehrangarh.org/?p=1762' },
  { id: 'phool', at: [-1, 116.5], title: 'Phool Mahal (Palace of Flowers)', r: 4, hTol: 2.5,
    text: 'A hall of private audience built by Maharaja Abhay Singh (1724–49), with a ceiling of gold filigree and mirror-work. The Trust calls it the grandest period room in Mehrangarh. It belongs to the mardana, the men\'s side of the palace.',
    source: 'https://www.mehrangarh.org/?p=1762' },
  { id: 'sheesh', at: [-1, 130], title: 'Sheesh Mahal (Palace of Mirrors)', r: 4, hTol: 2.5,
    text: 'Part of the private apartment of Maharaja Ajit Singh (r. 1707–24), set with mirror-work and painted gesso panels of gods and goddesses. The wooden ceiling and European glass chandelier were added in the 19th century.',
    source: 'https://www.mehrangarh.org/?p=1762' },
  { id: 'takhat', at: [0, 144], title: 'Takhat Vilas', r: 4.5, hTol: 2.5,
    text: 'Bedroom of Maharaja Takhat Singh (1843–73), the last ruler to live wholly in the fort. Its lacquer-painted wooden ceiling mixes Indian legends with Western touches such as Christmas-tree baubles.',
    source: 'https://www.mehrangarh.org/?p=1762',
    eraNote: { '1806': 'Takhat Singh came to the throne only in 1843; here the top-floor room is not yet built.', '1895': 'Takhat Singh died in 1873; his successors no longer lived wholly in the fort.' } },
  { id: 'kilkila', at: [0, 0], title: 'Ramparts and the Kilkila cannon', r: 6, hTol: 3,
    text: 'The walls rise up to 36 m and are up to 20–21 m thick. Their ramparts still carry old cannon, including the famous Kilkila, looking out over the old city below.',
    source: 'https://en.wikipedia.org/wiki/Mehrangarh',
    eraNote: { today: 'From here the view runs out over the blue-washed houses of the old city.' } },
  { id: 'chamunda', at: [-4, -139], title: 'Chamunda Mata temple', r: 6,
    text: 'At the fort\'s southern tip, the temple houses the goddess whose image Rao Jodha brought from Mandore and installed in 1460. A stampede here on 30 September 2008 killed 224 people.',
    source: 'https://en.wikipedia.org/wiki/Mehrangarh',
    eraNote: { '1806': 'In 1806 the shrine was nearly three and a half centuries old.', '1895': 'The temple is said to have been damaged by a gunpowder explosion in 1857 and rebuilt by Takhat Singh.' } },
  { id: 'rockpark', at: [-40, 246], title: 'Rao Jodha Desert Rock Park', r: 7,
    text: 'About 70 ha of volcanic rhyolite, welded tuff and breccia below the fort, replanted with native desert species from 2006 and opened in 2011. The rock contact under the fort is a National Geological Monument.',
    source: 'https://en.wikipedia.org/wiki/Rao_Jodha_Desert_Rock_Park',
    eraNote: { '1806': 'The park did not exist yet: these were the bare rocky slopes below the walls.', '1895': 'The park did not exist yet: these were the bare rocky slopes below the walls.' } },
  { id: 'ranisar', at: mehLakeMarker(mehRanisar), title: 'Ranisar lake · mapped outline', r: 16,
    text: 'The present lake outline follows OpenStreetMap and is projected from the public fort reference point. The hand-built fort is not geographically registered, so their exact relationship, water level and historical shoreline remain unverified.', source: 'https://www.tourism.rajasthan.gov.in/jodhpur.html' },
  { id: 'padmasar', at: mehLakeMarker(mehPadmasar), title: 'Padmasar lake · mapped outline', r: 16,
    text: 'The present lake outline follows OpenStreetMap. Its alignment to the schematic fort, detailed banks, water level and historical extent remain unverified.', source: 'https://www.tourism.rajasthan.gov.in/jodhpur.html' },
];

// small deterministic random generator for the scenery
function rand(seed) {
  let a = seed >>> 0;
  return () => { a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
function inside(x, y, p) {
  let c = false;
  for (let i = 0, j = p.length - 1; i < p.length; j = i++) if ((p[i][1] > y) !== (p[j][1] > y) && x < ((p[j][0] - p[i][0]) * (y - p[i][1])) / (p[j][1] - p[i][1] + 1e-12) + p[i][0]) c = !c;
  return c;
}

// ---------------------------------------------------------------- the old city at the foot of the rock
// real houses inside the playable area, render-only blocks beyond it; blue-washed with whitewash and ochre between
const CITY_E = [[128, 150], [222, 150], [222, -168], [190, -163], [160, -157], [132, -149], [112, -137], [118, -112], [122, 0], [124, 120]];
const CITY_S = [[222, -188], [190, -182], [160, -176], [130, -170], [104, -160], [88, -152], [60, -194], [24, -222], [-40, -236], [-150, -240], [-150, -250], [222, -250]];
const CITY_W = [[-160, -250], [-150, -250], [-150, -232], [-92, -200], [-104, -120], [-106, 0], [-108, 110], [-160, 140]];
const CITY_NE = [[132, 158], [222, 156], [222, 250], [208, 262], [188, 244], [164, 222], [142, 206], [126, 190]];
const PARK = [[-110, 206], [60, 216], [176, 238], [196, 268], [130, 288], [-40, 290], [-150, 280], [-152, 214]];
const BLUES = ['#5e8fc8', '#6f9bd0', '#86aedb', '#4f7db6', '#7aa5d6'];
const OTHERS = ['#e6dfd0', '#ddd2bc', '#d2a86a', '#c98e6a', '#e9e3d6'];

function oldCity(W) {
  const cols = BLUES.concat(BLUES, OTHERS);
  const opt = { size: [5, 9], h: [1, 3], storeyH: 3.1, colors: cols, roof: 'flat', spacing: 1.5, maxSlope: 2.2, jharokhaChance: 0.12, rot: 8 };
  W.houses(Object.assign({ poly: CITY_E, count: 105, seed: 31 }, opt));
  W.houses(Object.assign({ poly: CITY_S, count: 85, seed: 37 }, opt));
  W.houses(Object.assign({ poly: CITY_W, count: 45, seed: 41 }, opt));
  W.houses(Object.assign({ poly: CITY_NE, count: 30, seed: 43 }, opt));
  const r = rand(97);
  const [x0, y0, x1, y1] = BOUNDS;
  const cell = 10.5;
  for (let gx = x0 - 210; gx < x1 + 230; gx += cell) for (let gy = y0 - 220; gy < y1 + 70; gy += cell) {
    const cx = gx + cell / 2, cy = gy + cell / 2;
    if (cx > x0 - 6 && cx < x1 + 6 && cy > y0 - 6 && cy < y1 + 6) continue;
    if (cy > 160 && cx < x1 + 30) continue; // open rocky country and the Rock Park to the north
    const out = Math.max(x0 - cx, cx - x1, y0 - cy, cy - y1, 0);
    if (r() < 0.14 + out / 520) continue;
    const w = 5.5 + r() * 4, d = 5.5 + r() * 4, h = 3 + Math.floor(r() * 3) * 3.1 + r() * 0.8;
    W.scenery({ box: [cx + (r() - 0.5) * 2, cy + (r() - 0.5) * 2, w, d, 8 + (r() - 0.5) * 6, -0.5, h], color: cols[(r() * cols.length) | 0] });
  }
}

// scatter trees that block the way, keeping clear of roads, courts and lanes
function scatter(W, poly, n, types, { s = [0.8, 1.2], minDist = 5, maxSlope = 1.2, seed = 1, minH = -1e9, maxH = 1e9 } = {}) {
  const r = rand(seed);
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const [x, y] of poly) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); }
  const kinds = Object.entries(types), tot = kinds.reduce((a, [, w]) => a + w, 0);
  const placed = [];
  for (let t = 0; t < n * 30 && placed.length < n; t++) {
    const x = x0 + r() * (x1 - x0), y = y0 + r() * (y1 - y0);
    if (!inside(x, y, poly)) continue;
    const pa = W.terrain.paintAt(x, y);
    if (pa === 1 || pa === 2 || pa === 8) continue; // road, court, paved
    const h = W.ground(x, y);
    if (h < minH || h > maxH) continue;
    if (Math.abs(W.ground(x + 1, y) - W.ground(x - 1, y)) + Math.abs(W.ground(x, y + 1) - W.ground(x, y - 1)) > maxSlope) continue;
    if (!W.isFree(x, y, 1.6)) continue;
    if (placed.some(([px, py]) => (px - x) ** 2 + (py - y) ** 2 < minDist * minDist)) continue;
    let v = r() * tot, type = kinds[0][0];
    for (const [k, w] of kinds) { v -= w; if (v <= 0) { type = k; break; } }
    W.tree({ x, y, h, type, s: s[0] + r() * (s[1] - s[0]) });
    placed.push([x, y]);
  }
}

function vegetation(W, era) {
  const old = era === '1806', mid = era === '1895', now = era === 'today';
  // desert scrub on the hillside: thhor (euphorbia) clumps, with kair, khejri and acacia
  W.trees({ poly: HILL_RING, avoid: [RIM], count: old ? 70 : mid ? 120 : 90, types: { shrub: 4, grass: 3 }, s: [0.7, 1.3], minDist: 3, maxSlope: 1.6, seed: 51 });
  scatter(W, HILL_RING, old ? 14 : mid ? 26 : 18, { khejri: 2, acacia: 1 }, { minDist: 9, maxSlope: 1.0, seed: 52, maxH: 36 });
  // the summit terrace
  scatter(W, SOUTH_IN, old ? 5 : mid ? 12 : 8, { khejri: 2, neem: 1 }, { minDist: 14, seed: 53 });
  W.trees({ poly: SOUTH_IN, count: old ? 16 : mid ? 110 : 30, types: mid ? { grass: 4, shrub: 2 } : { shrub: 2, grass: 1 }, s: [0.7, 1.2], minDist: 2.6, seed: 54 });
  W.boulders({ poly: SOUTH_IN, count: 14, s: [0.8, 2.0], seed: 57, color: 'rock' });
  // the Rock Park: bare rock below the walls until the native planting of 2006
  W.trees({ poly: PARK, count: now ? 130 : mid ? 40 : 30, types: now ? { shrub: 5, grass: 4 } : { shrub: 2, grass: 3 }, s: [0.7, 1.3], minDist: now ? 2.8 : 5, maxSlope: 1.6, seed: 55 });
  scatter(W, PARK, now ? 34 : 6, now ? { khejri: 3, acacia: 2 } : { khejri: 1 }, { minDist: 7, maxSlope: 1.2, seed: 58 });
  W.boulders({ poly: PARK, count: 30, s: [1.2, 3.4], seed: 56, color: 'rock' });
  // shade trees in the lanes of the city
  scatter(W, CITY_E, 14, { neem: 2, khejri: 1 }, { minDist: 12, seed: 59 });
  scatter(W, CITY_S, 12, { neem: 2, khejri: 1 }, { minDist: 12, seed: 60 });
}

// patrol points along a wall-walk (with heights)
function walkPts(W, wall, xyList) {
  return xyList.map(([x, y]) => { const f = W.wallFrame(wall, W.wallS(wall, x, y)); return [f.x - f.ox * 0.4, f.y - f.oy * 0.4, W.wallTopAt(wall, f.x, f.y)]; });
}
const LANE_OUTER = [[64, 160], [76, 160], [76, 140], [73, 140], [73, 10], [67, 10], [67, 140], [64, 140]];
const LANE_INNER = [[58.5, 14], [63.2, 14], [63.2, 84], [58.5, 84]];
const LANE_OLD = [[66, -12], [74, -12], [76, -94], [71, -94]];

function people(W, era, { wallB, T0 }) {
  if (era === '1806') {
    // the garrison of Man Singh at the pols and on the gun line
    for (const [x, y, f] of [[84, 150.2, 90], [84, 153.8, 90], [58.4, 5.5, 0], [58.6, 41.5, 0], [59.4, 92.2, 90], [59.4, 96.8, 90], [15.6, 86.8, 90], [15.6, 93.2, 90], [72.4, -98.8, 0], [68.2, -29, 0], [71.4, -67, 0]]) W.npc({ kind: 'guard-rajput', at: [x, y], face: f, mode: 'idle' });
    W.npc({ kind: 'guard-rajput', patrol: walkPts(W, wallB, [[52, 80], [51, 50], [49, 20], [46, -10], [44, -30]]), count: 2 });
    W.npc({ kind: 'guard-rajput', patrol: walkPts(W, wallB, [[40, -70], [33, -100], [24, -132], [12, -158]]), count: 1 });
    W.npc({ kind: 'guard-rajput', patrol: walkPts(W, wallB, [[-30, -140], [-42, -80], [-48, -20], [-52, 40]]), count: 1 });
    // the court
    W.npc({ kind: 'courtier', circle: [-14, 90, 8], count: 4 });
    W.npc({ kind: 'courtier', circle: [28, 96, 12], count: 3 });
    W.npc({ kind: 'courtier', circle: [-30, 125, 7], count: 2 });
    W.npc({ kind: 'woman-red', circle: [-27, 162, 8], count: 2 }); W.npc({ kind: 'woman-indigo', circle: [-27, 162, 8], count: 2 }); W.npc({ kind: 'woman-green', circle: [-27, 162, 8], count: 1 });
    W.npc({ kind: 'horse', circle: [34, 118, 10], count: 3 });
    W.npc({ kind: 'camel', circle: [92, 170, 5], count: 2 });
    W.npc({ kind: 'merchant', zone: LANE_OUTER, count: 2 });
    W.npc({ kind: 'villager', zone: LANE_OLD, count: 2 });
    W.npc({ kind: 'priest', at: [-4, -141.5], face: 180, mode: 'idle' });
    W.npc({ kind: 'pilgrim', circle: [0, -125, 8], count: 2 });
  } else if (era === '1895') {
    // the state elephant in its howdah waits before Suraj Pol
    W.npc({ kind: 'elephant-royal', at: [27, 99], face: 270, mode: 'idle', scale: 1.1 });
    W.npc({ kind: 'villager', at: [24.6, 96.4], face: 300, mode: 'idle' });
    W.npc({ kind: 'officer', at: [36, 93], face: 290, mode: 'idle' });
    for (const [x, y, f] of [[84, 150.2, 90], [84, 153.8, 90], [59.4, 92.2, 90], [15.6, 86.8, 90], [15.6, 93.2, 90]]) W.npc({ kind: 'sepoy', at: [x, y], face: f, mode: 'idle' });
    W.npc({ kind: 'guard-rajput', at: [58.4, 5.5], face: 0, mode: 'idle' });
    W.npc({ kind: 'sepoy', patrol: walkPts(W, wallB, [[52, 80], [51, 50], [49, 20], [46, -10]]), count: 1 });
    W.npc({ kind: 'courtier', circle: [-14, 90, 8], count: 2 });
    W.npc({ kind: 'courtier', circle: [30, 110, 10], count: 2 });
    W.npc({ kind: 'woman-red', circle: [-27, 162, 8], count: 1 }); W.npc({ kind: 'woman-indigo', circle: [-27, 162, 8], count: 1 });
    W.npc({ kind: 'camel', circle: [92, 170, 5], count: 1 });
    W.npc({ kind: 'villager', zone: LANE_OUTER, count: 2 });
    W.npc({ kind: 'villager', zone: LANE_OLD, count: 1 });
    W.npc({ kind: 'priest', at: [-4, -141.5], face: 180, mode: 'idle' });
    W.npc({ kind: 'pilgrim', circle: [0, -125, 8], count: 1 });
    W.npc({ kind: 'goat', circle: [-10, -60, 14], count: 3 });
  } else {
    // museum visitors
    W.npc({ kind: 'asi-guard', at: [84, 150.2], face: 90, mode: 'idle' });
    W.npc({ kind: 'asi-guard', at: [15.6, 86.8], face: 90, mode: 'idle' });
    W.npc({ kind: 'asi-guard', at: [59.4, 96.8], face: 90, mode: 'idle' });
    W.npc({ kind: 'tourist-a', circle: [92, 158, 7], count: 3 }); W.npc({ kind: 'tourist-b', circle: [92, 158, 7], count: 2 });
    W.npc({ kind: 'tourist-c', zone: LANE_OUTER, count: 3 }); W.npc({ kind: 'tourist-d', zone: LANE_OUTER, count: 3 });
    W.npc({ kind: 'tourist-a', zone: LANE_INNER, count: 2 }); W.npc({ kind: 'tourist-b', zone: LANE_INNER, count: 2 });
    W.npc({ kind: 'tourist-c', circle: [28, 100, 14], count: 4 }); W.npc({ kind: 'tourist-d', circle: [28, 100, 14], count: 3 });
    W.npc({ kind: 'student', circle: [32, 80, 10], count: 6, speed: 1.4 });
    W.npc({ kind: 'tourist-a', circle: [-14, 90, 8], count: 3 }); W.npc({ kind: 'tourist-b', circle: [-14, 90, 8], count: 2 });
    W.npc({ kind: 'tourist-c', circle: [-30, 125, 8], count: 2 }); W.npc({ kind: 'tourist-d', circle: [-27, 162, 8], count: 2 });
    W.npc({ kind: 'tourist-a', circle: [-2, 128, 8], h: T0, count: 2 }); W.npc({ kind: 'tourist-c', circle: [-2, 128, 8], h: T0, count: 2 });
    W.npc({ kind: 'tourist-b', patrol: walkPts(W, wallB, [[52, 80], [51, 50], [49, 20], [46, -10], [44, -30], [40, -70]]), count: 2 });
    W.npc({ kind: 'tourist-d', circle: [24, -60, 14], count: 2 }); W.npc({ kind: 'tourist-a', circle: [6, -120, 12], count: 3 });
    W.npc({ kind: 'priest', at: [-4, -141.5], face: 180, mode: 'idle' });
    W.npc({ kind: 'pilgrim', circle: [0, -128, 6], count: 3 });
    W.npc({ kind: 'tourist-c', circle: [-30, 248, 12], count: 2 }); W.npc({ kind: 'student', circle: [-20, 250, 10], count: 3 });
  }
}

export default {
  id: 'mehrangarh', name: 'Mehrangarh', native: { text: 'मेहरानगढ़', lang: 'hi', script: 'deva' },
  region: 'Jodhpur · Rajasthan', type: 'Rock fort and palace', coords: [26.2981, 73.0189],
  poiCount: POIS.length, groundName: 'Rock', datum: 0, datumLabel: 'above the old city',
  units: { planScale: 1.4, vScale: 2 },
  bounds: BOUNDS, stride: 2, seed: 9,
  water: null,
  apron: { h: 0, color: '#c8aa84' },
  view: { az: -45, el: 40, zoom: 70, introAt: [10, 20], introZoom: 430 },
  light: { sky: '#e8dfd0', sunAz: -65, sunEl: 46 },
  palette: {
    wall: '#a8653f', wallTop: '#b9774e', trim: '#c58a5c', stone: '#9a5d3d', plaster: '#bf7d53', plasterDark: '#a5683f',
    roof: '#8d5638', dome: '#c58a60', wood: '#5a3a24', door: '#4a2e1c', window: '#3b2418', iron: '#2f2a27',
    grass: '#a69567', dry: '#cdb28a', rock: '#85675b', cliff: '#6b4e48', sand: '#d9b98c', road: '#bf9e78',
    court: '#c69a72', paved: '#b98c68', field: '#a5856b', mud: '#8a6a52', garden: '#6f7d3e',
    leaf: '#6e7a3c', leafDry: '#9a8f55', trunk: '#6b5038', flag: '#d8762b', accent: '#c9a13b', tank: '#4e6a5a',
  },
  eraPalette: {
    '1806': { court: '#caa07a', plaster: '#c4845a' },
    '1895': { dry: '#cbb38f', grass: '#ae9e70', plaster: '#b97a52' },
    today: {},
  },
  eras: [
    { id: '1806', year: '1806', label: 'Jai Pol is built', short: 'Man Singh\'s court', lens: 'engraving',
      summary: 'Maharaja Man Singh\'s new Gate of Victory stands finished at the head of the ramp, guards in saffron turbans watch the pols and the court of Marwar fills the palace above.',
      basis: 'Gate dates from the Mehrangarh Museum Trust\'s guidebook (Tillotson 2010) and Wikipedia; the massing of walls and palace from the mid-19th-century albumen view of the fort in the V&A.',
      conjecture: 'No view of the fort survives from 1806, and no measured plan is available: the masons at Jai Pol, the garrison, the court and the layout of courts, ramps and gates are reconstructed.',
      sources: ['MEH-17', 'MEH-04'] },
    { id: '1895', year: '1895', label: 'Weeks\'s illustrations', short: 'Weeks at Jodhpur', lens: 'albumen',
      summary: 'Mehrangarh as Edwin Lord Weeks drew it for his travel book: sheer walls above the city, and a state elephant in its howdah waiting in the palace forecourt.',
      basis: 'Edwin Lord Weeks\'s views of the fort and of a Jodhpur palace scene with an elephant and howdah (From the Black Sea through Persia and India, 1895/96), the V&A albumen view and a 1907 printed sketch.',
      conjecture: 'Weeks drew views, not plans: which court held the elephant, the people and the state of each building are reconstructed, and the layout is schematic.',
      sources: ['MEH-02', 'MEH-03', 'MEH-04', 'MEH-05'] },
    { id: 'today', year: 'Today', label: 'Mehrangarh Museum', short: 'Museum', lens: 'none',
      summary: 'The palace is the Mehrangarh Museum: visitors climb the ramp from Jai Pol, fill the courtyards and walk the gun line to the Chamunda temple above the blue city.',
      basis: 'Photographs by Robert D. MacDougall (Cornell, c. 1960–87) and G. E. Kidder Smith (MIT, 1965), the Trust\'s guidebook and a 2024 study of the fort\'s spatial order.',
      conjecture: 'The layout is schematic: positions of courts, gates and ramps follow descriptions, not a survey. Present lake outlines use a map reference but are not registered to this hand-built fort; water levels and historic shorelines are unknown.',
      sources: ['MEH-06', 'MEH-07', 'MEH-08', 'MEH-09', 'MEH-10', 'MEH-11', 'MEH-12', 'MEH-13', 'MEH-14', 'MEH-15', 'MEH-16', 'MEH-17', 'MEH-18', 'MEH-19', 'MEH-20'] },
  ],
  terrain: (era) => [
    { op: 'base', h: 0 },
    { op: 'noise', amp: 1.2, scale: 40 },
    // the rhyolite hill: concave rocky slopes up to a shoulder, then the scarped summit; spurs carry the road and the old route
    { op: 'raise', poly: HILL, h: hillH, edge: 40, profile: 'concave' },
    { op: 'ridge', path: ROAD_SPUR, w: 18, edge: 30, profile: 'smooth' },
    { op: 'ridge', path: OLD_SPUR, w: 14, edge: 24, profile: 'smooth' },
    { op: 'noise', poly: HILL_RING, amp: 2.2, scale: 11, edge: 20 },
    { op: 'paint', poly: HILL, paint: 'rock' },
    { op: 'raise', poly: RIM, h: plateauH, edge: 7, profile: 'scarp' },
    { op: 'paint', poly: RIM, paint: 'field' },
    { op: 'noise', poly: SOUTH_IN, amp: 0.8, scale: 9, edge: 8 },
    { op: 'flatten', poly: NORTH_TERRACE, h: COURT, edge: 1.5 },
    // the approach
    { op: 'flatten', poly: JAI_COURT, h: JAI.h, edge: 6, paint: 'road' },
    { op: 'flatten', poly: JAI_IN, h: JAI.h, edge: 2, paint: 'road' },
    { op: 'ramp', path: ROAD, w: 7, edge: 4, paint: 'road' },
    { op: 'ramp', path: OUTER, w: 8, edge: 3, paint: 'road' },
    { op: 'ramp', path: OLD, w: 7, edge: 3, paint: 'road' },
    { op: 'ramp', path: INNER, w: 7, edge: 2, paint: 'road' },
    { op: 'flatten', poly: JUNCTION, h: 40.2, edge: 2, paint: 'road' },
    { op: 'ramp', path: LOHA_IN, w: 8, edge: 4, paint: 'paved' },
    { op: 'edge', h: 0, w: 28 },
    // the Rock Park trail along the north foot
    { op: 'paint', path: PARK_TRAIL, w: 3, paint: 'road' },
    { op: 'paint', poly: FORECOURT, paint: era === 'today' ? 'paved' : 'court' },
    { op: 'paint', path: VISITOR_PATH, w: era === 'today' ? 4.5 : 3.2, paint: 'road' },
    { op: 'paint', poly: bpoly(SC), paint: 'paved' },
    { op: 'paint', poly: bpoly(MMC), paint: 'paved' },
    { op: 'paint', poly: bpoly(ZC), paint: 'court' },
    ...(era === 'today' ? [{op:'dig',poly:mehRanisar,h:-2,edge:1},{op:'dig',poly:mehPadmasar,h:-2,edge:1}] : []),
  ],
  build(W) {
    const era = W.era;
    if(era==='today') for(const [id,poly] of [['ranisar',mehRanisar],['padmasar',mehPadmasar]]){
      W.water({poly,level:0,color:'#668e82'});W.occupy(poly,0);W.zone(poly,`${id} · mapped present-day outline`);
    }
    const old = era === '1806';
    const now = era === 'today';
    const sand = W.pick({ '1806': '#c4845a', '1895': '#b97a52', default: '#bf7d53' });
    const sandHi = W.pick({ '1806': '#cc8e62', default: '#c68a5e' });

    // ---------------------------------------------------------------- summit enceinte (a terrace rampart: low inside, tall outside)
    const ramp = { thick: 4.5, batter: 0.06, parapet: { h: 1.5, t: 0.8 }, merlon: { style: 'kangura', w: 0.9, gap: 0.6, h: 1.0 }, color: 'wall' };
    const wallA = W.wall(Object.assign({ path: WALL_A, closed: false, outer: 'left', h: 0.45 }, ramp));
    const wallB = W.wall(Object.assign({ path: WALL_B, closed: false, outer: 'left', h: 0.45 }, ramp));
    // bastions (burj)
    const gunsE = [[45.5, -40, 'Kilkila'], [39, -76], [32, -108], [24, -134]];
    const bE = [];
    for (const [x, y, name] of gunsE) bE.push(W.bastion({ at: [x, y], wall: wallB, r: name ? 6.5 : 5.8, off: 2.2, dh: 0.4, cannon: name ? { len: 6.4, r: 0.56, name } : { len: 3.4, r: 0.32 } }));
    for (const [x, y, c] of [[12, -160, 1], [-5, -175, 1], [-20, -168, 0]]) W.bastion({ at: [x, y], wall: wallB, r: 6, off: 2, dh: 0.4, cannon: c ? { len: 3.4, r: 0.32 } : false });
    for (const [x, y] of [[-31, -132], [-42, -70], [-48, -3], [-52, 46]]) W.bastion({ at: [x, y], wall: wallB, r: 6, off: 2, dh: 0.4, cannon: old ? { len: 3, r: 0.3 } : false });
    for (const [x, y] of [[54, 118], [46, 157]]) W.bastion({ at: [x, y], wall: wallA, r: 6, off: 2, dh: 0.4, cannon: { len: 3.4, r: 0.32 } });
    // guns along the wall-walk above the upper ramp
    for (const y of [12, 28, 44, 60, 76]) {
      const f = W.wallFrame(wallB, W.wallS(wallB, 52, y));
      const top = W.wallTopAt(wallB, f.x, f.y);
      W.cannon({ x: f.x - f.ox * 0.6, y: f.y - f.oy * 0.6, h: top, dir: Math.atan2(f.oy, f.ox) * 180 / Math.PI, len: 3.0, r: 0.3 });
    }

    // ---------------------------------------------------------------- gates and the walls of the approach
    // Jai Pol, across the head of the ramp
    const jaiW = W.wall({ path: [[78, 142.5], [78, 161.5]], closed: false, outer: 'right', top: JAI.h + 11.5, thick: 4.5, batter: 0.03, parapet: { h: 1.3, t: 0.6 }, merlon: { style: 'kangura', w: 0.8, gap: 0.55, h: 0.9 }, walk: false, color: 'wall' });
    W.gate({ wall: jaiW, at: JAI.at, width: 5, spring: 5, rise: 2.8, name: 'Jai Pol', floor: JAI.h, towers: { r: 4.6, dh: 3.0, gap: 0.42, off: 3 }, upper: 'pavilion', trim: old ? '#d09a6c' : 'trim', panel: '#d8b48a' });
    // east parapet of the lanes, from Jai Pol down to Fateh Pol
    const lane = { closed: false, h: 2.4, thick: 2, batter: 0.04, parapet: { h: 0.9, t: 0.5 }, merlon: { style: 'kangura', w: 0.75, gap: 0.6, h: 0.75 }, walk: false, color: 'wall' };
    // north wall of the bend inside Jai Pol, closing on the rock
    W.wall({ path: [[78, 161.5], [66, 162.6], [53, 159.5]], closed: false, outer: 'right', h: 6, thick: 3, batter: 0.05, parapet: { h: 1.0, t: 0.5 }, merlon: { style: 'kangura', w: 0.8, gap: 0.55, h: 0.85 }, walk: false, color: 'wall' });
    W.wall(Object.assign({ path: [[78, 142.5], [75.2, 136], [75.2, 4], [76.4, -8], [75.6, -30], [77.6, -60], [79.8, -100.5]], outer: 'left' }, lane));
    // west parapet of the old route, closing the junction court on the south
    W.wall(Object.assign({ path: [[53, -10.5], [64.3, -10.5], [65.6, -22], [67.4, -46], [68.4, -60], [69.9, -86], [70.4, -100.5]], outer: 'right' }, lane));
    // retaining wall between the lower and the upper ramp, wrapping round the Loha Pol landing
    W.wall({ path: [[65, 3], [65, 99.5], [56, 99.5]], closed: false, outer: 'right', h: 2.2, thick: 2.2, batter: 0.05, parapet: { h: 0.9, t: 0.5 }, merlon: { style: 'kangura', w: 0.75, gap: 0.6, h: 0.75 }, walk: false, color: 'wall' });
    // pols across the lanes
    const pol = (key, x0, x1, extra = {}) => {
      const G = GATES[key];
      const w = W.wall({ path: [[x0, G.at[1]], [x1, G.at[1]]], closed: false, outer: 'right', top: G.h + 9, thick: 3.6, batter: 0.03, parapet: { h: 1.2, t: 0.55 }, merlon: { style: 'kangura', w: 0.8, gap: 0.55, h: 0.85 }, walk: false, color: 'wall' });
      W.gate(Object.assign({ wall: w, at: G.at, width: 4, spring: 4.2, rise: 2.3, name: G.name, floor: G.h, towers: false, frameW: 0.55 }, extra));
      return w;
    };
    const dedhW = pol('dedh', 54, 66);
    pol('amruti', 54, 66);
    pol('bhairon', 62, 79);
    pol('gopal', 64, 81);
    pol('fateh', 66, 86, { towers: { r: 3.6, dh: 2.2, gap: 0.45, off: 0.6 }, upper: 'chhatri' });
    // Loha Pol: a gatehouse in the summit wall, reached round a sharp bend
    const lohaW = W.wall({ path: [[54, 87.5], [54, 100.5]], closed: false, outer: 'right', top: COURT + 10, thick: 5, batter: 0.04, parapet: { h: 1.3, t: 0.6 }, merlon: { style: 'kangura', w: 0.8, gap: 0.55, h: 0.9 }, walk: false, color: 'wall' });
    W.gate({ wall: lohaW, at: GATES.loha.at, width: 4, spring: 4.4, rise: 2.4, name: 'Loha Pol', floor: GATES.loha.h, towers: false, frameW: 0.6, doorColor: '#3a2c22' });
    // sati handprints on the wall beside Loha Pol
    {
      const col = W.col('#b3402a');
      for (let i = 0; i < 12; i++) {
        const y = 90.2 - (i % 6) * 0.45, h = GATES.loha.h + 1.4 + Math.floor(i / 6) * 0.55;
        W.trim.box(54 + 2.5 + 0.04 * (COURT + 10 - h) + 0.05, y, 0.08, 0.28, h, h + 0.34, 0, col);
      }
    }
    // cannonball scars on Dedh Kamgra Pol
    {
      const f = W.wallFrame(dedhW, W.wallS(dedhW, 61, 8));
      const col = W.col('#5a3524');
      const pts = [[-4.2, 2.2], [-3.4, 5.1], [3.6, 3.0], [4.4, 6.0], [-4.6, 7.4], [2.9, 7.8], [3.9, 1.6]];
      for (const [u, dh] of pts) {
        const n = 1.8 + 0.03 * (9 - dh) + 0.05;
        W.trim.box(f.x + f.tx * u + f.ox * n, f.y + f.ty * u + f.oy * n, 0.55, 0.12, GATES.dedh.h + dh, GATES.dedh.h + dh + 0.5, 0, col);
      }
    }

    // ---------------------------------------------------------------- the palace
    const lowest = (b) => { let lo = Infinity; for (let i = 0; i <= 8; i++) for (let j = 0; j <= 8; j++) lo = Math.min(lo, W.ground(b[0] + (b[1] - b[0]) * i / 8, b[2] + (b[3] - b[2]) * j / 8)); return lo; };
    // range: a palace block whose storey lines are aligned to the court level; blocks on the rim reach down the cliff
    const range = (b, o) => {
      const sh = o.sh ?? 4;
      let base = o.base, k = 0;
      if (base == null) {
        const lo = lowest(b);
        if (lo < COURT - 1) { k = Math.ceil((COURT - lo + 0.4) / sh); base = COURT - k * sh; } else base = COURT - 0.3;
      }
      const storeys = Math.max(1, Math.round((o.top - base) / sh));
      const top = base + storeys * sh;
      const up = (from) => { const r = []; for (let s = k + from; s < storeys; s++) r.push(s); return r; };
      const win = o.win ?? {};
      const poly = bpoly(b);
      W.building({
        rect: rect(b), base, storeys, storeyH: sh, color: o.color ?? sand, roof: o.roof ?? 'flat', roofColor: o.roofColor,
        parapet: o.parapet ?? { h: 0.9, t: 0.4 }, merlon: o.merlon === undefined ? 'kangura' : o.merlon, chhajja: 0.55,
        windows: { style: win.style ?? 'arch', spacing: win.spacing ?? 2.5, w: win.w ?? 1.0, h: win.h ?? 1.8, rows: up(win.from ?? 1), skip: win.skip, color: win.color },
        jharokhas: o.jh ? { every: o.jh.every ?? 8, size: o.jh.size ?? 2.0, rows: o.jh.rows.map((r) => k + r), skip: o.jh.skip } : null,
        chhatris: o.chhatris, chhatriSize: o.chhatriSize ?? 2.4, chhatriH: o.chhatriH ?? 2.2, chhatriDome: o.chhatriDome ?? 'half',
        walkRoof: o.walkRoof, roofH: o.walkRoof ? -0.6 : undefined, kind: 'palace', cornice: true,
      });
      if (o.jali) W.facadeOpenings(poly, base, sh, storeys, { style: 'jali', spacing: o.jali.spacing ?? 1.35, w: o.jali.w ?? 0.95, h: o.jali.h ?? 2.1, rows: up(o.jali.from ?? 1), skip: o.jali.skip, offset: 0.07 });
      return { base, top, poly, k, storeys };
    };
    const E = [0, 2, 3], N = [0, 1, 3], S = [1, 2, 3], Wf = [0, 1, 2]; // skip lists that leave one face: east, north, south, west
    // south part: Daulat Khana and Shringar Chowk
    range([-42, 11, 68, 80], { top: 65, win: { skip: [1, 3], from: 0, w: 1.3, h: 2.4 }, jh: { rows: [1], every: 10, skip: [1, 2, 3] } });                 // Daulat Khana range
    range([-61, -42, 68, 106], { top: 73, win: { skip: [1], from: 2 }, jh: { rows: [3], every: 9, skip: [0, 1, 2] }, chhatris: [[-58, 71], [-58, 103]] });
    range([-42, -26, 80, 114], { top: 73, win: { skip: [0, 1, 3], from: 1 }, jali: { skip: [0, 2, 3], from: 1 }, jh: { rows: [2], every: 8, skip: [0, 2, 3] } });
    range([-22, -2, 100, 108], { top: 73, win: { skip: [0, 3] }, jali: { skip: [1, 2, 3], from: 1 }, jh: { rows: [2], every: 7, skip: [1, 2, 3] } });
    range([-2, 11, 80, 87], { top: 65, win: { skip: [3], from: 0 } });
    range([-2, 11, 93, 108], { top: 73, win: { skip: [3] }, jh: { rows: [2], every: 7, skip: [0, 2, 3] } });
    // Suraj Pol, the passage and the gate into Shringar Chowk
    const surajW = W.wall({ path: [[11.6, 84], [11.6, 96]], closed: false, outer: 'right', top: COURT + 10.5, thick: 4, batter: 0.02, parapet: { h: 1.0, t: 0.5 }, merlon: { style: 'kangura', w: 0.75, gap: 0.5, h: 0.8 }, walk: false, color: sandHi });
    W.gate({ wall: surajW, at: [11.6, 90], width: 4, spring: 4.0, rise: 2.2, name: 'Suraj Pol', floor: COURT, towers: false, spikes: false, frameW: 0.6, upper: 'pavilion', trim: '#d39d70', panel: '#e1c29a' });
    // middle: Moti Mahal Chowk, the mardana and its roof terrace
    range([-62, -42, 106, 142], { top: 76, sh: 3.8, win: { skip: [3], color: '#5b3048', from: 1 }, jh: { rows: [3, 4], every: 9, skip: [0, 1, 2] }, chhatris: 'corners', chhatriSize: 2.6 });
    range([-42, -30, 136, 152], { top: 69, win: { skip: [0, 1, 2, 3] }, jali: { skip: [3], from: 1 } });
    range([-24, -18, 136, 152], { top: 69, win: { skip: [0, 1, 2, 3] }, jali: { skip: [1], from: 1 } });
    const mard = range([-18, 11, 108, 152], { top: 65, parapet: { h: 0.35, t: 0.25 }, merlon: false, walkRoof: true, win: { skip: [3], from: 0 }, jh: { rows: [1], every: 9, skip: [0, 2, 3] } });
    const T0 = mard.top;
    range([3, 11, 108, 138], { base: T0, top: T0 + 8, win: { skip: [] }, jh: { rows: [0, 1], every: 7.5, skip: [0, 2, 3] }, chhatris: [[9.5, 110], [9.5, 136]] });
    range([-15, -5, 112, 121], { base: T0, top: T0 + 5.4, sh: 5.4, win: { w: 1.4, h: 2.8, spacing: 2.2, from: 0 }, chhatris: 'corners', chhatriSize: 1.6, chhatriH: 1.5 });  // Phool Mahal
    range([-15, -5, 126, 134], { base: T0, top: T0 + 4.6, sh: 4.6, win: { w: 1.2, h: 2.4, spacing: 2.0, from: 0 } });  // Sheesh Mahal
    const tk = range([-15, -5, 139, 148], { base: T0, top: T0 + 4.2, sh: 4.2, win: { w: 1.0, h: 2.0, from: 0 } });
    if (!old) W.building({ rect: rect([-13.5, -6.5, 140, 147]), base: tk.top, h: 3.4, color: sandHi, roof: 'bangaldar', roofColor: 'roof', windows: { style: 'jali', spacing: 1.4, w: 0.9, h: 1.8, sill: 0.6 }, kind: 'palace' }); // Takhat Vilas
    // north: the zenana
    range([-61, -40, 142, 178], { top: 74, win: { skip: [3] }, jali: { skip: [0, 2, 3], from: 1 }, jh: { rows: [3, 4], every: 9, skip: [0, 1, 2] }, chhatris: [[-58, 145], [-58, 175]] });
    range([-50, 8, 172, 192], { top: 73, win: { skip: [0] }, jali: { skip: [1, 2, 3], from: 1 }, jh: { rows: [3, 4], every: 10, skip: [0, 1, 3] }, chhatris: [[-46, 189], [-20, 189], [5, 189]] });
    range([-14, 6, 152, 172], { top: 73, win: { skip: [0, 1, 2, 3] }, jali: { from: 1, skip: [1] } });
    range([6, 26, 152, 181], { top: 69, win: { skip: [3] }, jh: { rows: [1, 2], every: 9, skip: [0, 2, 3] }, chhatris: 'corners', chhatriSize: 2.2 });
    // north drum bastions
    W.bastion({ at: [-50, 186], r: 7.5, top: 71, merlon: { style: 'kangura' } });
    W.bastion({ at: [12, 189], r: 7, top: 70, merlon: { style: 'kangura' } });
    // stair from the forecourt to the roof terrace of the mardana
    W.stairs({ from: [29, 145.5, COURT], to: [11.02, 145.5, T0], w: 3, color: 'stone', side: true });
    // flag over the palace
    W.flag({ x: -52, y: 124, h: 76.2, pole: 7, color: '#d8762b', size: 1.8 });
    W.zone(bpoly(SC), 'Shringar Chowk');
    W.zone(bpoly(MMC), 'Moti Mahal Chowk');
    W.zone(bpoly(ZC), 'Zenana court');
    W.zone(bpoly(DEODI), 'Zenana Deodi');
    W.zone(bpoly([-18, 11, 108, 152]), 'Palace roof terrace');
    W.zone(bpoly([-2, 9.5, 87, 93]), 'Passage to Shringar Chowk');
    W.zone(FORECOURT, 'Forecourt');

    // ---------------------------------------------------------------- the southern terrace and the Chamunda Mata temple
    const tp = W.platform({ poly: [[-14, -158], [6, -158], [8, -147], [-16, -147]], h: W.ground(-4, -150) + 1.2, color: 'stone' });
    W.stairs({ from: [-4, -141.5], to: [-4, -146.9, tp], w: 3.2, color: 'stone' });
    W.temple({ x: -4, y: -149.5, rot: 180, w: 6.4, h: 10.5, base: tp, plinth: 0.35, style: 'nagara', mandapa: { d: 6, w: 7.6, h: 3.4, roof: 'stepped' }, color: now ? '#d9cbb4' : '#c9a383', flag: true, flagColor: '#c9361f' });
    for (const [x, y, s] of [[-30, -40, 3], [14, -88, 2.6], [-22, 22, 3.2], [-34, -104, 2.4]]) {
      const g = W.ground(x, y);
      W.chhatri({ x, y, base: g + 0.4, size: s, h: s * 1.05, dome: 'half', color: '#c48a5e' });
    }
    // small pavilions, shrines and storerooms of the kind IGNCA documents on the summit (names and positions not known)
    W.pavilion({ x: -22, y: -8, w: 7.5, d: 5.5, rot: 0, plinth: 0.9, colH: 2.8, cols: [4, 3], roof: 'bangaldar', color: '#c48a5e', roofColor: 'roof' });
    W.temple({ x: 14, y: -46, rot: 180, w: 3.6, h: 6, plinth: 0.8, style: 'nagara', mandapa: { d: 3.2, w: 4.2, h: 2.4, roof: 'flat' }, color: now ? '#ddd0ba' : '#c9a383', flag: true, flagColor: '#c9361f' });
    W.chhatri({ x: -12, y: -88, base: W.ground(-12, -88) + 0.6, size: 4.2, h: 3.4, cols: 8, dome: 'onion', color: '#c48a5e' });
    for (const [x, y, w, d] of [[-37, -58, 5.5, 13], [-28, -100, 5.5, 11]]) W.building({ rect: [x, y, w, d, 0], h: 4, color: era === '1895' ? '#a96c48' : '#b57650', roof: 'flat', parapet: { h: 0.5, t: 0.3 }, windows: { style: 'rect', spacing: 3, w: 0.6, h: 0.8, sill: 2 }, kind: 'building' });
    W.zone(SOUTH_IN, 'Southern terrace');
    W.zone(regularPoly(-4, -150, 16, 12), 'Chamunda Mata temple');

    // ---------------------------------------------------------------- the moment
    if (old) {
      // Man Singh's masons finishing the Gate of Victory: cut blocks, a lime trough and scaffold poles against the west tower
      for (const [x, y, w, d, hh, rot] of [[92, 145.5, 2.4, 1.2, 0.9, 10], [94.6, 146.2, 1.8, 1.2, 0.9, -6], [93.2, 145.8, 1.6, 1.1, 1.8, 4], [95.5, 158.5, 2.2, 1.4, 0.8, 30], [90.5, 162, 3.2, 1.6, 0.5, 0]]) {
        W.building({ rect: [x, y, w, d, rot], h: hh, color: hh < 0.6 ? '#9a8a78' : '#d0a074', roof: 'flat', parapet: false, windows: false, cornice: false, kind: 'building' });
      }
      const wood = W.col('wood');
      for (const [x, y] of [[86.4, 157.6], [86.6, 159.8], [86.4, 162], [85.6, 164.2]]) W.trim.box(x, y, 0.18, 0.18, JAI.h - 0.2, JAI.h + 12.6, 0, wood);
      for (const hh of [3.5, 7, 10.5]) W.trim.box(86.3, 160.9, 0.16, 6.6, JAI.h + hh, JAI.h + hh + 0.16, -8, wood);
      W.npc({ kind: 'villager', circle: [93, 152, 4], count: 3 });
      W.npc({ kind: 'villager', at: [88, 160.8], face: 270, mode: 'idle' });
      W.flag({ x: 81, y: 160.3, h: JAI.h + 14.6, pole: 4, color: '#d8762b', size: 1.3 });
      W.flag({ x: 54, y: 94.5, h: COURT + 11.3, pole: 4, color: '#d8762b', size: 1.2, base: false });
    }
    if (now) {
      // ticket office and café at the road head, and a kiosk below Dedh Kamgra Pol
      W.building({ rect: [92, 178, 9, 5, 0], h: 3.6, color: '#cf9a6e', roof: 'flat', parapet: { h: 0.5, t: 0.25 }, merlon: 'kangura', windows: { style: 'arch', spacing: 2.2, w: 1.1, h: 1.8, sill: 0.5 }, kind: 'building' });
      W.pavilion({ x: 72.5, y: -6.2, w: 6, d: 4, rot: 0, plinth: 0.2, colH: 2.6, cols: [3, 2], roof: 'flat', color: '#cf9a6e', stairs: false });
    }
    W.zone(JAI_COURT, now ? 'Jai Pol forecourt and ticket office' : 'Road head below Jai Pol');
    W.zone(LANE_OUTER, 'Ramp from Jai Pol');
    W.zone(LANE_INNER, 'Upper ramp');
    W.zone(LANE_OLD, 'Old route from Fateh Pol');
    W.zone(JUNCTION, now ? 'Visitor area below Dedh Kamgra Pol' : 'Junction below Dedh Kamgra Pol');
    W.zone(PARK, now ? 'Rao Jodha Desert Rock Park' : 'Rocky slopes below the fort');

    oldCity(W);
    vegetation(W, era);
    people(W, era, { wallB, T0 });

    // ---------------------------------------------------------------- places
    const kb = bE[0];
    for (const p of POIS) {
      if(era!=='today' && (p.id==='ranisar'||p.id==='padmasar')) continue;
      const q = Object.assign({}, p, { eraNote: p.eraNote?.[era] || null });
      if (p.id === 'kilkila') { q.at = [kb.x - kb.out[0] * 3.2, kb.y - kb.out[1] * 3.2]; q.h = W.wallTopAt(wallB, kb.x, kb.y) + 0.4; }
      if (['phool', 'sheesh', 'takhat'].includes(p.id)) q.h = T0;
      W.poi(q);
    }
    W.wildlife({ kinds: { peafowl: 5 } });
    W.wildlife({ kinds: { langur: 5 }, walls: true, s: 0.35 });
    W.spawn(92, 152, JAI.h, 270);
  },
};
