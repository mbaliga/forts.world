// 01 · Murud-Janjira — island sea fort of the Siddis, Raigad, Maharashtra.
// Plan units are metres (planScale 1). The island outline, wall loop, bastions, tanks, ruin footprints and ground heights are traced
// from a drone photograph (see janjira.trace.js); building use and dates follow Dalrymple/Werner 1774, the 1883 Gazetteer
// (vol. XI pp. 462-464) and Sohoni 2020.
import { rectPts, regularPoly, wallStairs } from './kit.js';
import { TAG } from '../core/nav.js';
import { V, shade } from '../core/mesher.js';
import { TRACE } from './janjira.trace.js';

const T = TRACE;
const WALL = T.wall;
const GATE = [126.6, -2];
const DARYA = [-198.7, -20];
const BAST = T.bastions.filter((b) => !(Math.abs(b.x - 125) < 1 && Math.abs(b.y + 2.2) < 1)); // the small one is the gate
// bastion tops are level with the wall-walk so the walk runs straight onto them
const WTOP = 11.0, BTOP = 11.0;
const cen = WALL.reduce((a, p) => [a[0] + p[0] / WALL.length, a[1] + p[1] / WALL.length], [0, 0]);
const inner = (k) => WALL.map((p) => [cen[0] + (p[0] - cen[0]) * k, cen[1] + (p[1] - cen[1]) * k]);
const patrol = (i0, i1, W) => { const a = []; for (let i = i0; i <= i1; i++) { const p = WALL[i % WALL.length]; a.push([p[0], p[1], Math.max(WTOP, W.ground(p[0], p[1]) + 2.0) + 0.1]); } for (let i = a.length - 2; i > 0; i--) a.push(a[i]); return a; };

const POIS = [
  { id: 'gate', at: [121, -2], title: 'Main gate (Mahadarwaza)', text: 'The east gate faces Rajapuri but is set back between two round towers, so it only comes into view when a boat is about 40 feet (12 m) away. A white stone above the iron-studded doors carries the date 1111 H (about 1699–1700); Sohoni reads the gateway inscriptions as Sidi Surur Khan\'s work of 1700–1705.', source: 'https://anantamias.com/janjira-fort/', r: 7 },
  { id: 'sharabha', at: [133, -2], title: 'The sharabha relief', text: 'On the outer wall beside the gate is a carving of a tiger-like beast, a sharabha, gripping elephants in its claws. Sohoni also records a pair of lions and a pair of elephants carved at the entrance.', source: 'https://sanskritimagazine.com/murud-janjira-fort', r: 6 },
  { id: 'pir', at: [110, -4], title: 'Pir Panchayatan shrine', text: 'Just inside the gate stands the Pir Panchayatan, a shrine to the five holy figures of Shi\'i Islam, the Panjatan. It sits in the entrance court that every visitor crosses on the way in.', source: 'https://www.academia.edu/44679159', r: 5 },
  { id: 'shahi', at: [42, 125], title: 'Shahi Talav, the great cistern', text: 'Past the inner doorway a great freshwater cistern comes into view, one of two on the island. Sources call one tank "sixteen-cornered"; the larger, the Shahi Talav, had a sheesh mahal for royal bathing at its edge.', source: 'https://bijoor.me/cycling-mandwa-to-murud-janjira-fort-khokari-tombs/', r: 10, eraNote: { 'today': 'The tank still holds water in a fort surrounded by the sea.' } },
  { id: 'palace', at: [31, 1], title: 'Palace of Sidi Surul Khan', text: 'The Nawabs\' palace was built under Sidi Surur (Surul) Khan in the first decade of the 18th century and rose at least four storeys around a cistern. A fire in 1860 burnt more than half the buildings in the fort and destroyed many state papers.', source: 'https://www.academia.edu/44679159', r: 8,
    eraNote: { '1774': 'In 1774 the palace was about seventy years old and still the seat of the Siddi rulers.', '1933': 'By 1933 it had stood roofless for seventy years, since the fire of 1860.', 'today': 'Only the shell stands. Walk in through the east side to the courtyard that held its cistern.' } },
  { id: 'mosque', at: [60, -95], title: 'Mosque and Chirekhani Talav', text: 'The fort\'s main mosque stands beside the smaller of the two freshwater tanks, the Chirekhani Talav. Today it is kept locked to protect it.', source: 'https://bijoor.me/cycling-mandwa-to-murud-janjira-fort-khokari-tombs/', r: 8 },
  { id: 'balekilla', at: [-93, 79], title: 'Bale killa, the citadel knoll', text: 'Stairs behind the lake lead up to the bale killa, the highest point inside the fort, crowned by a flagpole and looking over the whole island. Accounts of the 1682 siege say the garrison sheltered behind "a rock in the middle of the island", probably this knoll.', source: 'https://bijoor.me/cycling-mandwa-to-murud-janjira-fort-khokari-tombs/', r: 6, hTol: 4 },
  { id: 'kalal', at: [208, -86], title: 'Kalal Bangadi', text: 'The largest of the fort\'s guns, reported at 12 to 22 tonnes, still sits on the ramparts. It was feared for its range and is said to have been aimed at Padmadurg, Shivaji\'s island fort to the north-west.', source: 'https://en.wikipedia.org/wiki/Murud-Janjira', r: 8, hTol: 4,
    eraNote: { '1933': 'A British Library photograph of 9 November 1933, taken during the Nawab\'s investiture, shows Colonel Wilberforce-Bell, Mrs Bell and Mr Ramsay inspecting the fort\'s old guns.' } },
  { id: 'chavri', at: [132, -162], title: 'Chavri and Landa Kasam', text: 'Kalal Bangadi\'s two named companions are among the many native and European guns that still rust on Janjira\'s bastions. In its heyday the fort is said to have mounted over 500 cannon.', source: 'https://en.wikipedia.org/wiki/Murud-Janjira', r: 8, hTol: 4 },
  { id: 'ramparts', at: [12, 158], title: 'Ramparts and bastions', text: 'At high tide the walls rise 45 to 50 feet straight out of the sea, in three coursed stages topped by loopholed battlements. Nineteen rounded bastions, each about 80 feet across, stand about 90 feet apart.', source: 'https://anantamias.com/janjira-fort/', r: 7, hTol: 3 },
  { id: 'darya', at: [-198, -20], title: 'Darya Darwaza, the sea gate', text: 'A small postern on the west side opens onto a semicircular masonry platform about 20 feet above the water, covered by bastions. It served as an emergency exit and a landing on the open-sea side.', source: 'https://anantamias.com/janjira-fort/', r: 6 },
  { id: 'prison', at: [-181, -27], title: 'Prison above the sea gate', text: 'Cells near the western ramparts, above the Darya Darwaza, are identified as the fort\'s prison. The same source records a lime-plastered headquarters behind the citadel and four cisterns at the fort\'s four corners.', source: 'https://durgbharari.in/janjira/', r: 7 },
  { id: 'padmadurg', at: [-128, 134], title: 'Looking out to Padmadurg', text: 'About 4 km to the north-west lies Padmadurg on Kasa island. Shivaji built it in 1676 to keep watch over Janjira, which the Marathas besieged again and again without taking it.', source: 'https://en.wikipedia.org/wiki/Padmadurg', r: 7, hTol: 3 },
  { id: 'causeway', at: [172, -46], title: 'Sambhaji\'s causeway, 1682', text: 'In January 1682 Sambhaji tried to fill the 800-yard, 30-foot-deep channel to the mainland with stones to build a causeway for his assault. The attempt was abandoned when Mughal attacks drew him away.', source: 'https://en.wikipedia.org/wiki/Siege_of_Janjira', r: 8, hTol: 4 },
];

// ---------------------------------------------------------------- the entrance frame
// The gate stands on the straight east curtain (trace points 23-24). Everything at the entrance is laid out in
// local coordinates: u along the wall (positive southwards), n outwards from the wall's centre line.
const AREA = WALL.reduce((a, p, i) => { const q = WALL[(i + 1) % WALL.length]; return a + p[0] * q[1] - q[0] * p[1]; }, 0) / 2;
const GA = WALL[23], GB = WALL[24];
const GT = (() => { const dx = GB[0] - GA[0], dy = GB[1] - GA[1], l = Math.hypot(dx, dy); return [dx / l, dy / l]; })();
const SG = AREA > 0 ? -1 : 1;
const GO = [-GT[1] * SG, GT[0] * SG];
const GF = (() => { const t = (GATE[0] - GA[0]) * GT[0] + (GATE[1] - GA[1]) * GT[1]; return [GA[0] + GT[0] * t, GA[1] + GT[1] * t]; })();
const LP = (u, n) => [GF[0] + GT[0] * u + GO[0] * n, GF[1] + GT[1] * u + GO[1] * n];
const LR = (u0, u1, n0, n1) => [LP(u0, n0), LP(u1, n0), LP(u1, n1), LP(u0, n1)];
const GYAW = Math.atan2(GT[1], GT[0]) * 180 / Math.PI;   // wall direction
const OYAW = Math.atan2(GO[1], GO[0]) * 180 / Math.PI;   // outward
// heights at the entrance
const G_FLOOR = 4.0, LAND_H = 0.6, PASS_TOP = 5.9, COURT_H = 8.1;
const TOWER = { u: 9.6, n: 4.6, r: 6.4 };
const LAND = [LP(-3.1, 9.4), LP(3.1, 9.4), LP(6.6, 14.6), LP(-6.6, 14.6)];
const DOCK = LP(-1.6, 16.8), STEP = LP(-1.6, 14.2);
const faceDeg = (dx, dy) => Math.atan2(dx, -dy) * 180 / Math.PI;
const FACE_OUT = faceDeg(GO[0], GO[1]), FACE_IN = faceDeg(-GO[0], -GO[1]);

// the sea gate frame (same convention: u along the wall, n outwards)
const DARYA_H = 6.1;
const DF = (() => {
  let best = null;
  for (let i = 0; i < WALL.length; i++) {
    const a = WALL[i], b = WALL[(i + 1) % WALL.length], dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy);
    const t = Math.max(0, Math.min(l, (DARYA[0] - a[0]) * dx / l + (DARYA[1] - a[1]) * dy / l));
    const px = a[0] + dx / l * t, py = a[1] + dy / l * t, d = Math.hypot(px - DARYA[0], py - DARYA[1]);
    if (!best || d < best.d) best = { d, x: px, y: py, t: [dx / l, dy / l] };
  }
  return { x: best.x, y: best.y, t: best.t, o: [-best.t[1] * SG, best.t[0] * SG] };
})();
const DP = (u, n) => [DF.x + DF.t[0] * u + DF.o[0] * n, DF.y + DF.t[1] * u + DF.o[1] * n];
const DR = (u0, u1, n0, n1) => [DP(u0, n0), DP(u1, n0), DP(u1, n1), DP(u0, n1)];

// ---------------------------------------------------------------- per-era casting
const ERA_NOTE_1760 = {
  gate: 'In wartime the doors were shut at dusk and every boat at the landing was challenged from the towers above.',
  ramparts: 'Every embrasure manned: gun crews sleep beside their pieces, with shot and powder stacked behind them.',
  shahi: 'Under siege the two cisterns were the garrison\'s only fresh water, so the tanks were guarded.',
  balekilla: 'The knoll is the last refuge: from its flagstaff the commander watches the boats offshore.',
  causeway: 'Seventy-odd years after Sambhaji\'s attempt the channel is again the front line.',
};

// ---------------------------------------------------------------- the battle scenario of c. 1760
const BATTLES = {
  '1760': [{
    playerSide: 'siddi', side: 'Defend (Siddis)',
    title: 'A landing at the Mahadarwaza',
    text: 'A Maratha storming party has come ashore from its gallivats at the landing stage and is making for the gate. Hold the steps and the gate court with the Siddi musketeers on the gate towers and in the court, and the spearmen behind them.',
    note: 'A scenario, not a record of one day. The Marathas attacked Janjira many times, under Sambhaji in 1682, under the Peshwas in the 1730s and again around 1760 (the attack shown on the indigenous map), and never took it. Arms and numbers are typical of those forces; the tower guns could not fire down onto the landing at their own feet, which is why the gate was flanked by musketry.',
    startToast: 'The Marathas are ashore',
    own: [
      { name: 'Siddi musketeers, north tower', kind: 'musketeer-siddi', arms: 'musket', n: 8, at: LP(-9.6, 4.6), h: BTOP, facing: OYAW, formation: 'open', retreat: LP(0, -30) },
      { name: 'Siddi musketeers, south tower', kind: 'musketeer-siddi', arms: 'musket', n: 8, at: LP(9.6, 4.6), h: BTOP, facing: OYAW, formation: 'open', retreat: LP(0, -30) },
      { name: 'Siddi musketeers, gate court', kind: 'musketeer-siddi', arms: 'musket', n: 12, at: LP(0, -11), facing: OYAW, retreat: LP(0, -30) },
      { name: 'Siddi spearmen', kind: 'guard-siddi', arms: 'spear', n: 12, at: LP(0, -22), facing: OYAW, formation: 'column', retreat: LP(0, -32) },
    ],
    enemy: [
      { name: 'Maratha musketeers', kind: 'musketeer-maratha', arms: 'musket', n: 14, at: LP(-2.5, 12), h: LAND_H, facing: OYAW + 180, retreat: LP(5.6, 27) },
      { name: 'Maratha storming party', kind: 'guard-maratha', arms: 'spear', n: 16, at: LP(5.6, 21), h: 1.05, facing: OYAW + 180, formation: 'column', retreat: LP(5.6, 27), morale: 78 },
      { name: 'Maratha musketeers, second wave', kind: 'musketeer-maratha', arms: 'musket', n: 10, at: LP(5.6, 26), h: 1.05, facing: OYAW + 180, retreat: LP(5.6, 27) },
    ],
    objective: LP(0, -12),
    objectivePoly: LR(-5.2, 5.2, -16.6, -6.6),
    wonTitle: 'The storming party is thrown back',
    won: 'The Marathas break and make for their boats. Janjira was never taken by assault.',
    lostTitle: 'The gate court is lost',
    lost: 'The Marathas are in the gate court. In fact no assault ever got this far: Janjira was never taken.',
  }, {
    playerSide: 'maratha', side: 'Assault (Marathas)',
    title: 'Storming the Mahadarwaza',
    text: 'Your boats are at the landing under the two great towers of the gate. Put men up the scaling ladders against both towers while the musketeers keep the defenders\' heads down, then take the gate court.',
    note: 'A scenario on the attack shown on the indigenous map of about 1760; the Marathas attacked Janjira repeatedly and never took it. Defenders on a tower top can throw a ladder down; the tower guns cannot fire down onto the landing at their own feet.',
    startToast: 'The boats are at the landing', ladders: [0, 1], climb: [[0, 1]], climbEnds: 'ESC_ENDS',
    own: [
      { name: 'Maratha storming party, north tower', kind: 'guard-maratha', arms: 'spear', n: 12, at: LP(-4.4, 12.6), h: LAND_H, facing: OYAW + 180, formation: 'column', retreat: LP(5.6, 27), morale: 78 },
      { name: 'Maratha storming party, south tower', kind: 'guard-maratha', arms: 'spear', n: 12, at: LP(4.4, 12.6), h: LAND_H, facing: OYAW + 180, formation: 'column', retreat: LP(5.6, 27), morale: 78 },
      { name: 'Maratha musketeers', kind: 'musketeer-maratha', arms: 'musket', n: 14, at: LP(5.6, 22), h: 1.05, facing: OYAW + 180, retreat: LP(5.6, 27) },
    ],
    enemy: [
      { name: 'Siddi musketeers, north tower', kind: 'musketeer-siddi', arms: 'musket', n: 8, at: LP(-9.6, 4.6), h: BTOP, facing: OYAW, formation: 'open', retreat: LP(0, -30), morale: 80 },
      { name: 'Siddi musketeers, south tower', kind: 'musketeer-siddi', arms: 'musket', n: 8, at: LP(9.6, 4.6), h: BTOP, facing: OYAW, formation: 'open', retreat: LP(0, -30), morale: 80 },
      { name: 'Siddi guard, gate court', kind: 'guard-siddi', arms: 'spear', n: 14, at: LP(0, -12), facing: OYAW, retreat: LP(0, -32), morale: 80 },
    ],
    holdPoly: LR(-5.2, 5.2, -16.6, -6.6),
    wonTitle: 'The gate court is taken',
    won: 'Your men hold the gate court of Janjira. No assault in history achieved this: the fort was never taken.',
    lostTitle: 'The assault fails',
    lost: 'The storming parties are thrown back to the boats, as every assault on Janjira was.',
  }],
};

export default {
  id: 'murud-janjira-hand', name: 'Murud-Janjira (hand level, kept for T2)', native: { text: 'मुरुड-जंजिरा', lang: 'mr', script: 'mr' },
  region: 'Raigad · Maharashtra', type: 'Island sea fort', coords: [18.2996, 72.9644],
  poiCount: POIS.length, groundName: 'Island', datum: 0, datumLabel: 'above high tide',
  units: { planScale: 1, vScale: 1 },
  bounds: [-270, -232, 275, 226], stride: 2, seed: 11,
  // Konkan coastal water: greenish and silty inshore, slate-teal in the channel
  water: { sea: 0, deep: '#2a5558', mid: '#3d6f6a', shallow: '#6f9a84', silt: '#8c9470' },
  apron: { h: -7.62 },
  defaultEra: '1774', ownFauna: true, battles: BATTLES,
  onBuilt(W) { for (const q of [].concat(BATTLES[W.era] || [])) if (q.climbEnds === 'ESC_ENDS') q.climbEnds = W.escEnds; },
  // grain landed by each boat from the mainland (the island grows only a fraction of what it eats)
  supply: { '1760': 1500, '1774': 900, '1933': 0 },
  // dark trap (basalt) ashlar laid in lime: big blocks, lighter pointing, weed-dark at the waterline
  masonry: { row: 0.62, len: 1.45, mortar: 0.03, mortarColor: '#8e897c', stain: '#26302a', paving: 1.1, rough: 0.7 },
  // no spray inside the sheltered recess of the landing
  surf: { width: 11, calm: 0.2, spray: { spacing: 12, minExp: 0.58, avoid: [LR(-14, 14, -2, 26)] } },
  view: { az: -38, el: 38, zoom: 64, introAt: [135, -2], introZoom: 380 },
  light: { sky: '#d9e3e3', sunAz: -120, sunEl: 50 },
  palette: {
    wall: '#5d5850', wallTop: '#6b665d', trim: '#8a857a', stone: '#5c5953', plaster: '#ddd6c4', plasterDark: '#b9ad92', roof: '#7a5a44',
    grass: '#6f8a3a', dry: '#a99a62', rock: '#6b6455', cliff: '#3d3b37', sand: '#bfae86', road: '#a59474', court: '#9b9282', paved: '#8e877a',
    seabed: '#4e6a63', water: '#4a7a78', tank: '#4e6a45', leaf: '#4f7a33', leafDry: '#8a8a45', flag: '#2f6b45', dome: '#e2dccb',
  },
  eraPalette: {
    '1760': { plaster: '#e2dccb', grass: '#7a8a42', dry: '#a99560', court: '#958a76' },
    '1774': { plaster: '#e6e0cf', grass: '#73903c' },
    '1933': { plaster: '#cfc5ad', grass: '#7a8a40', dry: '#b0a066' },
    'today': { plaster: '#c9bea4', grass: '#5f8034' },
  },
  eras: [
    { id: '1760', year: 'c. 1760', label: 'Maratha attack', short: 'Fort at war', lens: 'engraving',
      summary: 'The fort at war: every embrasure manned, the garrison under canvas, grain and powder stockpiled, Maratha boats offshore.',
      basis: 'The indigenous map of a Maratha attack on Janjira, c. 1760 (Raja Dinkar Kelkar Museum, reproduced in Sohoni 2020, fig. 3). The fort itself is drawn as in Dalrymple\'s survey of 1774 and the 1883 Gazetteer\'s account of its defences.',
      conjecture: 'The siege map is not online, so the attacking boats are placed generically. The garrison camp, grain stores, livestock pens, armoury stores and gun crews are reconstructed from how Deccan forts provisioned for a siege, not from a record of Janjira.',
      sources: ['JAN-07', 'JAN-18', 'JAN-19', 'JAN-03'] },
    { id: '1774', year: '1774', label: 'Dalrymple\'s survey', short: 'Siddi stronghold', lens: 'engraving',
      summary: 'The Siddi stronghold in its prime: the palace roofed, guns on every bastion, the fleet at anchor.',
      basis: 'Layout from the inset plan and sea view on Alexander Dalrymple\'s chart of 1774 (survey by A. Werner). Buildings follow the 1883 Gazetteer\'s account of the fort before the fire of 1860.',
      conjecture: 'No drawing of the interior survives from this date: building heights, roofs and colours are reconstructed. The palace footprint (40 × 36 m) is measured from a drone photograph; its four storeys follow Sohoni.',
      sources: ['JAN-03', 'JAN-05', 'JAN-06', 'JAN-19', 'JAN-18'] },
    { id: '1933', year: '1933', label: 'The Nawab\'s investiture', short: 'Investiture photographs', lens: 'albumen',
      summary: 'Seventy years after the fire of 1860: a roofless palace, rusting guns, and visitors come for the Nawab\'s investiture.',
      basis: 'British Library photographs of the 1930s: the island fort from the water, and the 9 November 1933 party inspecting the old guns during the Nawab of Janjira\'s investiture.',
      conjecture: 'The photographs are not online. The state of each building is inferred from the Gazetteer\'s account of the fire and from today\'s ruins.',
      sources: ['JAN-11', 'JAN-12', 'JAN-19'] },
    { id: 'today', year: 'Today', label: 'ASI monument', short: 'Monument', lens: 'none',
      summary: 'A protected monument reached by sailboat from Rajapuri, with ruins, big trees and a steady stream of visitors.',
      basis: 'Present-day photographs on Wikimedia Commons, Sohoni\'s architectural account (2020), Marathi fort-trekking descriptions and a drone photograph traced for the plan and the palace footprint.',
      sources: ['JAN-13', 'JAN-14', 'JAN-15', 'JAN-08', 'JAN-09', 'JAN-10', 'JAN-18', 'JAN-01'] },
  ],
  terrain: (era) => [
    { op: 'base', h: -7.5 },
    { op: 'noise', amp: 1.4, scale: 34 },
    // rocky foreshore just below high water, a few rocks breaking the surface
    { op: 'raise', poly: WALL, h: -0.9, edge: 18 },
    { op: 'noise', poly: WALL, amp: 1.3, scale: 7, edge: 14 },
    { op: 'grid', grid: T.grid, fill: WALL, fillPad: 2.5, grow: 8 },
    { op: 'edge', h: -7.6, w: 34 },
    // (ground colours resampled from the drone photograph are not used: its licence is not recorded)
    ...T.tanks.map((k) => ({ op: 'flatten', poly: k.ring, h: 4.6, edge: 1.2 })),
    // the entrance: sea bed in front of the towers, the gate threshold, the low end of the court behind the gate
    { op: 'dig', poly: LR(-9, 9, 3.4, 22), h: -2.6, edge: 3 },
    { op: 'flatten', poly: LR(-2.3, 2.3, -2.6, 3.6), h: G_FLOOR, edge: 0.4 },
    { op: 'flatten', poly: LR(-2.3, 2.3, -6.9, -2.6), h: G_FLOOR - 0.3, edge: 0.4 },
    { op: 'flatten', poly: LR(-5.1, 5.1, -12.2, -6.6), h: PASS_TOP - 0.3, edge: 0.6 },
    { op: 'flatten', poly: LR(-5.1, 5.1, -16.6, -12.2), h: COURT_H, edge: 0.8 },
    { op: 'flatten', poly: LR(-9, 9, -32, -17.4), h: COURT_H + 0.1, edge: 4 },
    // the Darya Darwaza: a stair cut down inside the wall to a postern 20 ft above the sea
    { op: 'flatten', poly: DR(-1.4, 1.4, -3, 3.2), h: DARYA_H, edge: 0.4 },
    { op: 'flatten', poly: DR(-1.4, 1.4, -11.2, -3), h: DARYA_H - 0.3, edge: 0.6 },
    // paths and courts
    { op: 'paint', path: [LP(0, -18), LP(0, -26), [90, -2], [62, 6], [45, 2]], w: 3.2, paint: 'road' },
    { op: 'paint', path: [[45, 2], [10, -10], [-30, 12]], w: 2.6, paint: 'road' },
    { op: 'paint', poly: LR(-9, 9, -31, -17.4), paint: era === 'today' ? 'court' : 'paved' },
    { op: 'paint', poly: rectPts(31, 1, 20, 17, 103), paint: era === 'today' || era === '1933' ? 'court' : 'paved' },
  ],
  build(W) {
    const era = W.era;
    const war = era === '1760';
    const old = era === '1774' || war;
    const btop = (x, y) => Math.max(BTOP, W.ground(x, y) + 2.0);
    // ---------------- walls: three coursed stages, round merlons with musket loops
    const wall = W.wall({ path: WALL, closed: true, top: (x, y) => Math.max(WTOP, W.ground(x, y) + 2.0), thick: 5, batter: 0.06,
      parapet: { h: 1.3, t: 0.8 }, merlon: { style: 'round', w: 1.05, gap: 0.75, h: 1.0, slit: true }, color: 'wall', courses: [3.9, 7.5], coping: true, spouts: { every: 15 } });
    // ---------------- guns: one per embrasure, by era
    const gunsFor = (i) => {
      if (old) return { pick: () => true, carriage: true, dynamic: true, arc: 40, balls: (k) => (war ? k % 2 === 0 : k % 3 === 0) };
      if (era === '1933') return { pick: (k) => (k + i) % 2 === 0, carriage: false, lying: (k) => (k + i) % 5 === 0, color: '#3a2e26' };
      return { pick: (k) => (k + i) % 3 === 0, carriage: false, lying: (k) => (k + i) % 2 === 0, color: '#4a3326' };
    };
    const bastPar = { h: 1.9, t: 0.95 };
    BAST.forEach((b, i) => {
      const frame = W.wallFrame(wall, W.wallS(wall, b.x, b.y));
      W.bastion({ at: [b.x, b.y], r: b.r, wall, snap: false, out: [frame.ox, frame.oy], top: btop(b.x, b.y), parapet: bastPar, merlon: { style: 'round', w: 1.05, gap: 0.8, h: 1.0 },
        embrasures: { spacing: b.r > 12 ? 6.5 : 6, w: 1.25, sill: 0.6, spring: 1.1, rise: 0.42 }, embrasureGuns: gunsFor(i), garrison: era === 'today' ? null : { name: `Bastion ${i + 1}`, cap: b.r > 12 ? 10 : 6 } });
    });
    // the two gate towers (dated by their inscriptions to 1700 and 1705), deep enough that the gate sits in a recess
    for (const sg of [-1, 1]) {
      const [tx, ty] = LP(sg * TOWER.u, TOWER.n);
      W.bastion({ at: [tx, ty], r: TOWER.r, wall, snap: false, out: GO, top: BTOP, parapet: bastPar, merlon: { style: 'round', w: 1.05, gap: 0.8, h: 1.0 },
        embrasures: { spacing: 5.2, w: 1.2, sill: 0.6, spring: 1.1, rise: 0.4 }, embrasureGuns: gunsFor(sg + 7), garrison: era === 'today' ? null : { name: sg < 0 ? 'North gate tower' : 'South gate tower', cap: 10 } });
    }
    // named guns
    W.cannon({ x: 206, y: -84, h: btop(206, -84) + 0.2, dir: 143, len: 7.2, r: 0.62, carriage: false, name: 'Kalal Bangadi' });
    W.cannon({ x: 132, y: -161, h: btop(132, -161) + 0.2, dir: 250, len: 5.6, r: 0.5, carriage: false, name: 'Chavri' });
    W.cannon({ x: 95, y: 139, h: btop(95, 139) + 0.2, dir: 80, len: 5.2, r: 0.48, carriage: false, name: 'Landa Kasam' });

    // ---------------- the Mahadarwaza and its landing
    W.gate({ wall, at: GATE, width: 3.6, spring: 3.7, rise: 1.9, floor: G_FLOOR, name: 'Main gate (Mahadarwaza)', towers: false, panel: '#ece8de', trim: '#8a857a', frameUp: 1.2, frameW: 0.7, doorAngle: war ? 8 : 100 });
    // flight of steps from the threshold down to the landing, between the towers
    W.stairs({ from: [...LP(0, 9.6), LAND_H], to: [...LP(0, 2.9), G_FLOOR], w: 4.2, color: 'stone', side: true, riser: 0.3 });
    W.platform({ poly: LAND, h: LAND_H, color: 'stone', tag: TAG.landing, bottom: -3 });
    W.zone(LAND, 'Landing');
    // the dock: a timber landing stage on piles for the larger boats, cargo on the quay, torch stands at the stair foot
    if (old) {
      W.pier({ from: LP(5.6, 14.3), to: LP(5.6, 28), w: 2.6, h: 1.05 });
      W.cargo({ x: LP(-4.6, 11.6)[0], y: LP(-4.6, 11.6)[1], h: LAND_H, n: war ? 6 : 9, r: 1.3 });
      if (war) { const [kx, ky] = LP(3.6, 11.2); W.kegs({ x: kx, y: ky, n: 4, rot: GYAW }); }
      else W.cargo({ x: LP(3.8, 11.2)[0], y: LP(3.8, 11.2)[1], h: LAND_H, n: 6, r: 1.0, rope: false });
      for (const sg of [-1, 1]) { const [tx, ty] = LP(sg * 2.7, 9.9); W.torchStand({ x: tx, y: ty, h: LAND_H, lit: war }); }
      // scaling ladders for the Maratha assault scenario: from the landing up the face of each gate tower (hidden until it starts)
      if (war) for (const sg of [1, -1]) {
        const [fx, fy] = LP(sg * 5.0, 12.4), [cx, cy] = LP(sg * TOWER.u, TOWER.n), dx = fx - cx, dy = fy - cy, dl = Math.hypot(dx, dy);
        W.ladder({ foot: [fx, fy, LAND_H], top: [cx + dx / dl * (TOWER.r - 0.5), cy + dy / dl * (TOWER.r - 0.5), BTOP + 1.3], hidden: true });
        (W.escEnds ||= []).push([cx + dx / dl * (TOWER.r - 2.6), cy + dy / dl * (TOWER.r - 2.6), BTOP]);
      }
      // small craft moored along the stage
      for (const [n, sd] of [[19, 1], [24, -1]]) { const [bx, by] = LP(5.6 + sd * 2.6, n); W.boat({ x: bx, y: by, dir: OYAW + 90, size: 0.62, sail: false, color: sd > 0 ? '#5a4030' : '#6a5038' }); }
    } else {
      W.cargo({ x: LP(-4.4, 11.8)[0], y: LP(-4.4, 11.8)[1], h: LAND_H, n: 4, r: 0.9 });
    }
    // the Konkan shore opposite: a sand beach with boats drawn up, and Rajapuri village under its coconut palms
    W.scenery({ poly: [[548, -700], [575, -700], [560, -120], [598, 120], [572, 300], [588, 900], [560, 900], [545, 300], [570, 120], [532, -120]], h0: -6, h1: 0.9, color: 'sand' });
    W.backdropSettlement({ poly: [[600, -190], [700, -190], [720, 60], [640, 110], [612, 0]], h: 2.5, count: era === 'today' ? 70 : old ? 34 : 50,
      roofs: old ? { thatch: 4, tile: 1 } : era === '1933' ? { tile: 4, thatch: 1 } : { tile: 3, flat: 2 }, palms: 160, seed: 12 });
    W.backdropSettlement({ poly: [[600, 160], [690, 160], [700, 420], [610, 420]], h: 2.5, count: 0, palms: 140, seed: 13 });
    for (const [bx, by, d] of [[556, -160, 95], [552, -200, 80], [549, -240, 100], [560, 210, 85], [558, 250, 92]]) W.boat({ x: bx, y: by, dir: d, size: 0.85, sail: false, color: '#5a4030' });
    // Rajapuri: the mainland jetty the ferry runs from
    W.scenery({ box: [565, -40, 46, 5.5, 0, -3, 1.6], color: 'stone' });
    for (const [bx, by] of [[552, -31], [560, -50], [575, -30]]) W.boat({ x: bx, y: by, dir: 180, size: 0.9, sail: era === 'today' });
    // mooring posts and iron rings on the seaward edge
    for (const u of [-5.6, -2.2, 2.2, 5.6]) { const [x, y] = LP(u, 14.0); W.mason.frustum(x, y, 0.32, 0.26, LAND_H - 0.2, LAND_H + 0.75, 8, W.col('stone')); W.mason.frustum(x, y, 0.36, 0.36, LAND_H + 0.72, LAND_H + 0.86, 8, W.col('stone')); W.nav.obstacle({ circle: [x, y, 0.4], bottom: 0, top: LAND_H + 0.9 }); }
    // carved panels on the tower faces looking into the recess: lion, elephant and the sharabha
    const relief = (sg) => {
      const RE = TOWER.r + 0.08 * (BTOP - 7.1);
      const n = TOWER.n + 2.6, a = Math.asin(Math.min(0.99, (n - TOWER.n) / RE));
      const u = sg * (TOWER.u - Math.cos(a) * RE);
      const [cx, cy] = LP(u, n);
      // face normal points from the tower centre through the panel
      const [tcx, tcy] = LP(sg * TOWER.u, TOWER.n); let nx = cx - tcx, ny = cy - tcy; const nl = Math.hypot(nx, ny); nx /= nl; ny /= nl;
      const tx = -ny, ty = nx;
      const z0 = 6.2, F = (s, v, d) => [cx + tx * s + nx * d, cy + ty * s + ny * d, z0 + v];
      const M = W.mason, light = W.col('#8d887d'), field = W.col('#4f4b45');
      // panel field and frame
      const box = (s0, s1, v0, v1, d0, d1, col) => {
        const P = (s, v, d) => { const p = F(s, v, d); return [p[0], p[2], -p[1]]; };
        const q = (a1, b1, c1, d1c, c) => M.quadAway(a1, b1, c1, d1c, c, P((s0 + s1) / 2, (v0 + v1) / 2, (d0 + d1) / 2 - 3));
        q(P(s0, v0, d1), P(s1, v0, d1), P(s1, v1, d1), P(s0, v1, d1), col);
        q(P(s0, v1, d0), P(s1, v1, d0), P(s1, v1, d1), P(s0, v1, d1), col);
        q(P(s0, v0, d0), P(s1, v0, d0), P(s1, v0, d1), P(s0, v0, d1), col);
        q(P(s0, v0, d0), P(s0, v1, d0), P(s0, v1, d1), P(s0, v0, d1), col);
        q(P(s1, v0, d0), P(s1, v1, d0), P(s1, v1, d1), P(s1, v0, d1), col);
      };
      box(-1.35, 1.35, -0.15, 1.75, -0.2, 0.08, W.col('#6c675e'));
      box(-1.18, 1.18, 0.02, 1.58, -0.2, 0.1, field);
      // low-relief silhouettes (raised 6 cm): a beast seizing elephants on one tower, a striding lion on the other
      const fig = sg < 0
        ? [[-1.0, 0.2], [-0.55, 0.2], [-0.5, 0.55], [-0.1, 0.6], [0.0, 0.2], [0.25, 0.2], [0.3, 0.75], [0.65, 1.0], [0.95, 1.35], [0.8, 1.45], [0.6, 1.3], [0.35, 1.25], [-0.2, 1.15], [-0.75, 1.05], [-1.05, 1.2], [-1.0, 0.95], [-0.8, 0.85]]
        : [[-1.0, 0.2], [-0.7, 0.2], [-0.65, 0.6], [0.35, 0.6], [0.45, 0.2], [0.75, 0.2], [0.8, 0.8], [1.0, 1.05], [0.85, 1.3], [0.55, 1.35], [0.4, 1.15], [-0.6, 1.1], [-0.95, 1.25], [-1.05, 1.05]];
      const tri = triangulateSimple(fig);
      for (const [i, j, k] of tri) {
        const A = F(fig[i][0], fig[i][1], 0.18), B = F(fig[j][0], fig[j][1], 0.18), Cc = F(fig[k][0], fig[k][1], 0.18);
        M.triAway([A[0], A[2], -A[1]], [B[0], B[2], -B[1]], [Cc[0], Cc[2], -Cc[1]], light, [cx - nx * 3, z0, -(cy - ny * 3)]);
      }
      for (let i = 0; i < fig.length; i++) {
        const p = fig[i], q = fig[(i + 1) % fig.length];
        const A = F(p[0], p[1], 0.1), B = F(q[0], q[1], 0.1), A2 = F(p[0], p[1], 0.18), B2 = F(q[0], q[1], 0.18);
        M.quadAway([A[0], A[2], -A[1]], [B[0], B[2], -B[1]], [B2[0], B2[2], -B2[1]], [A2[0], A2[2], -A2[1]], W.col('#6e6a62'), [cx, z0 + 0.7, -cy]);
      }
    };
    relief(-1); relief(1);

    // ---------------- behind the gate: vaulted passage, a walled court with steps, the inner gate
    {
      const M = W.mason, wc = W.col('wall');
      // the two masses either side of the passage, flush with the wall-walk on top
      for (const sg of [-1, 1]) W.platform({ poly: LR(sg * 1.8, sg * 5.6, -6.6, -2.4), h: WTOP, color: 'wall', tag: TAG.rampart });
      // vault over the passage (soffit at 9.4) with the walk on top
      const roof = LR(-1.8, 1.8, -6.6, -2.4);
      M.prism(roof, 9.4, WTOP, wc, { bottom: true });
      W.nav.obstacle({ poly: roof, bottom: 9.3, top: WTOP });
      W.nav.surface({ poly: roof, h: WTOP, tag: TAG.rampart });
      M.vault(...LP(0, -4.5), 4.2, 3.6, 8.2, OYAW, shade(wc, 0.7), 8, 1.2);
      // steps up through the passage (dark) and on up the court
      W.stairs({ from: [...LP(0, -2.6), G_FLOOR], to: [...LP(0, -6.7), PASS_TOP], w: 3.6, color: 'stone', tag: TAG.tunnel, riser: 0.33 });
      W.stairs({ from: [...LP(0, -6.6), PASS_TOP], to: [...LP(0, -12.2), COURT_H], w: 10, color: 'stone', riser: 0.31 });
      // guard niches in the passage walls
      for (const sg of [-1, 1]) for (const n of [-3.6, -5.4]) {
        const [x, y] = LP(sg * 1.77, n), tx = GO[0], ty = GO[1];
        const P = (s, v) => V(x + tx * s, y + ty * s, G_FLOOR + 0.9 + v);
        W.decal.quadAway(P(-0.55, 0), P(0.55, 0), P(0.55, 1.4), P(-0.55, 1.4), [0.06, 0.05, 0.05], V(...LP(0, n), 6));
        W.decal.triAway(P(-0.55, 1.4), P(0.55, 1.4), P(0, 1.9), [0.06, 0.05, 0.05], V(...LP(0, n), 6));
      }
      // court walls and the inner gate
      for (const sg of [-1, 1]) W.wall({ path: [LP(sg * 5.75, -6.5), LP(sg * 5.75, -16.6)], closed: false, outer: sg > 0 ? 'right' : 'left', top: WTOP, thick: 1.3, batter: 0.02, parapet: { h: 0.9, t: 0.45 }, merlon: { style: 'round', w: 0.8, gap: 0.6, h: 0.75 }, walk: false, color: 'wall', maxSeg: 2 });
      const inner = W.wall({ path: [LP(-6.4, -17.2), LP(6.4, -17.2)], closed: false, outer: 'left', top: 12.6, thick: 1.8, batter: 0.02, parapet: { h: 0.9, t: 0.45 }, merlon: { style: 'round', w: 0.8, gap: 0.6, h: 0.75 }, walk: false, color: 'wall', maxSeg: 2 });
      W.gate({ wall: inner, at: LP(0, -17.2), width: 3.2, spring: 2.6, rise: 1.4, floor: COURT_H, towers: false, name: 'Inner gate', frame: true, frameW: 0.5, frameUp: 0.5, doorAngle: 95, spikes: false });
      W.zone(LR(-5.2, 5.2, -16.6, -6.6), 'Gate court');
      W.zone(LR(-1.8, 1.8, -6.6, -2.4), 'Gate passage');
    }
    // ---------------- entrance court and the Pir Panchayatan
    W.zone(LR(-9, 9, -31, -17.6), 'Entrance court');
    {
      const [px, py] = LP(-6.2, -22.5);
      W.building({ rect: [px, py, 4.4, 4.4, GYAW], h: 3.3, color: 'plaster', roof: 'dome', domes: [{ x: px, y: py, r: 1.55, shape: 'half' }], windows: { style: 'arch', spacing: 3, w: 0.8, h: 1.4, rows: [0] }, kind: 'temple', cornice: true });
      const [fx, fy] = LP(-3.6, -20.6); W.flag({ x: fx, y: fy, h: W.ground(fx, fy), pole: 4.5, color: '#2f6b45', size: 0.9 });
    }

    // ---------------- darya darwaza: steps down to the western sea
    W.gate({ wall, at: DARYA, width: 2.2, spring: 2.4, rise: 1.2, floor: DARYA_H, towers: false, name: 'Darya Darwaza', frame: true, frameW: 0.5, doorAngle: 95 });
    {
      // stair down inside the wall, the semicircular platform outside, and a narrow flight to a boat step at the water
      W.stairs({ from: [...DP(0, -11), 10.6], to: [...DP(0, -2.9), DARYA_H], w: 2.4, color: 'stone', side: true });
      const semi = [DP(-5.8, 2.2)];
      for (let k = 0; k <= 12; k++) { const a = Math.PI * k / 12; semi.push(DP(-Math.cos(a) * 5.8, 2.6 + Math.sin(a) * 5.8)); }
      semi.push(DP(5.8, 2.2));
      W.platform({ poly: semi, h: DARYA_H, color: 'wall', tag: TAG.terrace, bottom: -6 });
      W.zone(semi, 'Darya Darwaza platform');
      // breast-wall round the curve, open where the flight to the water leaves it
      const arc = []; for (let k = 0; k <= 9; k++) { const t = Math.PI * k / 12; arc.push(DP(-Math.cos(t) * 5.55, 2.6 + Math.sin(t) * 5.55)); }
      W.wall({ path: arc, closed: false, outer: 'right', top: DARYA_H + 0.95, thick: 0.5, batter: 0, parapet: false, walk: false, color: 'wall', maxSeg: 1.5 });
      W.stairs({ from: [...DP(3.9, 7.9), DARYA_H], to: [...DP(3.9, 19.4), 0.5], w: 2.0, color: 'stone' });
      W.platform({ poly: DR(1.9, 5.9, 19.2, 22.6), h: 0.5, color: 'stone', tag: TAG.landing, bottom: -6 });
    }

    // ---------------- the two tanks
    T.tanks.forEach((k) => W.tank({ poly: k.ring, waterPoly: k.water, rim: k.rim, water: k.level, tiers: 4, color: 'stone' }));
    W.zone(T.tanks[0].ring, 'Shahi Talav'); W.zone(T.tanks[1].ring, 'Chirekhani Talav');

    // ---------------- the palace of Sidi Surul Khan
    // Footprint 40.1 x 35.8 m from the drone trace; four ranges round a court with a cistern.
    // Intact: three storeys of 4.1 m and a fourth, set-back storey on the west range (Sohoni: "at least four storeys").
    // Ruined: the shell stands about 12 m (trace: wall tops 22 m against ground at 10 m).
    const [PAL, KNOLL, ...REST] = T.rects;
    let PAL_POI = [PAL.x, PAL.y];
    {
      const r = PAL, wd = 8.6, c = Math.cos(r.rot * Math.PI / 180), s = Math.sin(r.rot * Math.PI / 180);
      const at = (a, b) => [r.x + c * a - s * b, r.y + s * a + c * b];
      const gw = 3.4; // east gateway
      const ranges = [
        { key: 'N', rect: [...at(r.w / 2 - wd / 2, 0), wd, r.d, r.rot] },
        { key: 'S', rect: [...at(-(r.w / 2 - wd / 2), 0), wd, r.d, r.rot] },
        { key: 'W', rect: [...at(0, r.d / 2 - wd / 2), r.w - 2 * wd, wd, r.rot] },
        { key: 'E1', rect: [...at((r.w - 2 * wd) / 4 + gw / 4, -(r.d / 2 - wd / 2)), (r.w - 2 * wd) / 2 - gw / 2, wd, r.rot] },
        { key: 'E2', rect: [...at(-((r.w - 2 * wd) / 4 + gw / 4), -(r.d / 2 - wd / 2)), (r.w - 2 * wd) / 2 - gw / 2, wd, r.rot] },
      ];
      const sh = 4.1;
      for (const R of ranges) {
        if (old) {
          W.building({ rect: R.rect, storeys: 3, storeyH: sh, color: 'plaster', roof: 'flat', merlon: 'round', kind: 'palace',
            windows: { style: 'arch', spacing: 2.5, w: 1.0, h: 1.9, groundW: 1.7, groundH: 2.6 }, jharokhas: R.key === 'W' || R.key === 'N' ? { every: 7.5, size: 1.8, rows: [2] } : undefined });
          if (R.key === 'W') {
            // the fourth storey: a pavilion range set back on the west wing
            const [x, y] = R.rect; const base = W.ground(x, y) - 0.3 + 3 * sh;
            W.building({ rect: [x, y, R.rect[2] * 0.62, wd * 0.62, r.rot], base, h: 3.6, color: 'plaster', roof: 'flat', merlon: 'round', kind: 'palace', windows: { style: 'arch', spacing: 2.2, w: 0.9, h: 1.7 }, chhatris: 'corners', chhatriSize: 1.6 });
          }
        } else {
          W.ruin({ rect: R.rect, h: era === '1933' ? 12.6 : 11.8, thick: 1.1, openWindows: true, mason: true, color: era === '1933' ? 'plasterDark' : 'stone', storeys: 3,
            doors: R.key === 'E1' || R.key === 'E2' ? [{ edge: 0, at: 0.5, w: 2.2 }] : [{ edge: 0, at: 0.5, w: 2.4 }, { edge: 2, at: 0.4, w: 2.2 }] });
        }
      }
      // court cistern
      const cist = rectPts(...at(-5, 0), 9, 7.5, r.rot), g = W.ground(...at(-5, 0));
      PAL_POI = at(5.5, 0);
      W.tank({ poly: cist, rim: g + 0.35, water: g - (era === 'today' ? 2.2 : 1.1), tiers: 3, color: 'stone' });
      W.zone(rectPts(r.x, r.y, r.w - 2 * wd, r.d - 2 * wd, r.rot), 'Palace courtyard');
    }
    // the knoll building (headquarters behind the citadel)
    if (old) W.building({ rect: [KNOLL.x, KNOLL.y, KNOLL.w, KNOLL.d, KNOLL.rot], storeys: 1, storeyH: 4.4, color: 'plaster', roof: 'flat', merlon: 'round', windows: { style: 'arch', spacing: 2.6 }, kind: 'building' });
    else W.ruin({ rect: [KNOLL.x, KNOLL.y, KNOLL.w, KNOLL.d, KNOLL.rot], h: 4.6, thick: 0.9, color: 'stone', mason: true, doors: [{ edge: 0, at: 0.5, w: 2.4 }, { edge: 2, at: 0.4, w: 2 }] });
    // mosque beside the smaller tank
    const MOSQ = REST.find((r) => Math.abs(r.x - 60.4) < 1 && Math.abs(r.y + 95.5) < 1);
    W.mosque({ x: MOSQ.x, y: MOSQ.y, w: 14, d: 10, rot: MOSQ.rot, h: 6.2, domes: 0, minarets: 2, minR: 0.65, minH: 11, color: old ? 'plaster' : 'plasterDark', court: { d: 9 } });
    // ranges of the east and north: barracks and stores; in wartime the granary, armoury and magazine are named
    const GRAN = REST.find((r) => Math.abs(r.x - 62) < 1 && Math.abs(r.y + 48.5) < 1);
    const MAG = REST.find((r) => Math.abs(r.x - 166.1) < 1);
    const ARM = REST.find((r) => Math.abs(r.x - 99.4) < 1);
    for (const r of REST) {
      if (r === MOSQ) continue;
      if (old) {
        if (r === MAG) {
          // powder magazine: low, thick-walled and vaulted, few openings
          W.building({ rect: [r.x, r.y, r.w * 0.8, r.d * 0.7, r.rot], h: 3.4, color: 'stone', mason: true, roof: 'vault', windows: false, kind: 'building' });
        } else {
          W.building({ rect: [r.x, r.y, r.w * 0.85, r.d * 0.85, r.rot], storeys: 1, storeyH: 3.8, color: 'plasterDark', roof: 'flat', merlon: 'round', windows: { style: 'arch', spacing: 2.8, groundW: 1.4, groundH: 2.2 }, kind: r === GRAN ? 'granary' : 'barracks' });
        }
      } else W.ruin({ rect: [r.x, r.y, r.w, r.d, r.rot], h: Math.max(1.8, Math.min(4.2, r.h * (era === '1933' ? 1.5 : 1.15))), thick: 0.7, mason: true, color: era === '1933' ? 'plasterDark' : 'stone', doors: [{ edge: 0, at: 0.3, w: 2.2 }, { edge: 2, at: 0.6, w: 2.4 }] });
    }
    if (war) {
      W.zone(rectPts(GRAN.x, GRAN.y, GRAN.w + 8, GRAN.d + 8, GRAN.rot), 'Granary');
      W.zone(rectPts(MAG.x, MAG.y, MAG.w + 6, MAG.d + 6, MAG.rot), 'Powder magazine');
      W.zone(rectPts(ARM.x, ARM.y, ARM.w + 8, ARM.d + 8, ARM.rot), 'Armoury');
    }
    // traced wall lines: terraces and the broken cross-walls
    // compound and terrace walls traced from the drone photograph: low rubble walls, broken where they have fallen
    for (const l of T.lines) {
      if (l.len < 24) continue;
      const h = Math.max(0.9, Math.min(1.8, l.h * 0.42));
      // in the ruined periods, leave gaps where the wall has come down
      const runs = [];
      if (old) runs.push(l.pts);
      else { let cur = [l.pts[0]]; for (let i = 1; i < l.pts.length; i++) { const gap = ((i * 7 + Math.round(l.len)) % 5) === 0; if (gap && cur.length > 1) { runs.push(cur); cur = [l.pts[i]]; } else cur.push(l.pts[i]); } if (cur.length > 1) runs.push(cur); }
      for (const pts of runs) W.wall({ path: pts, closed: false, h: old ? h : h * 0.7, thick: 0.7, outer: 'left', parapet: false, walk: false, color: 'stone', batter: 0.08, maxSeg: 3 });
    }
    // wall-walk stairs: spaced round the circuit, only where the run is clear of bastions, gates and buildings
    {
      const N = 18, L = wall.len, run = 13, off = 2.5 + 1.3 + 0.25;
      const away = (x, y, p, d) => Math.hypot(x - p[0], y - p[1]) > d;
      const ok = (x, y) => BAST.every((b) => Math.hypot(x - b.x, y - b.y) > b.r + 2.5) && away(x, y, GATE, 24) && away(x, y, DARYA, 8);
      for (let k = 0; k < N; k++) {
        let best = null;
        for (let s0 = (k + 0.1) * L / N; s0 < (k + 0.9) * L / N; s0 += 2) for (const dir of [1, -1]) {
          let score = Infinity;
          for (let u = -1; u <= run + 1 && score > 0; u += 1.5) {
            const f = W.wallFrame(wall, s0 - dir * u), x = f.x - f.ox * off, y = f.y - f.oy * off;
            const free = W.isFree(x, y, 1.6) ? 1 : -1;
            const bs = Math.min(...BAST.map((b) => Math.hypot(f.x - b.x, f.y - b.y) - b.r)) - 2.5;
            const g = W.ground(x, y), sl = Math.abs(g - W.ground(f.x - f.ox * 2, f.y - f.oy * 2));
            score = Math.min(score, free * 4, bs, 3 - sl, (u < run ? g - 5 : 9));
          }
          if (score > 0 && (!best || score > best.score)) best = { score, s: s0, dir };
        }
        if (best) { const f = W.wallFrame(wall, best.s); wallStairs(W, wall, { at: [f.x, f.y], dir: best.dir, run }); }
      }
    }

    // flag on the citadel knoll
    // flags: the Siddi green over the citadel, pennants on the gate towers (reconstructed; no period flag is recorded)
    W.flag({ x: -93, y: 79, h: W.ground(-93, 79), pole: 11, color: '#2f6b45', border: era === '1933' ? null : '#d9b44a', size: 2.2, noFlag: era === 'today' });
    if (era !== 'today') for (const sg of [-1, 1]) { const [fx, fy] = LP(sg * TOWER.u, TOWER.n); W.flag({ x: fx, y: fy, h: BTOP, pole: 6, color: '#2f6b45', shape: 'pennant', size: 1.2, base: false }); }
    W.zone(regularPoly(-93, 79, 12, 10), 'Bale killa');

    // ---------------- wartime: the garrison camp and its stores (laid out before the houses take the open ground)
    if (war) buildWarCamp(W, { GRAN, MAG, ARM });
    if (old) {
      // grain stores beside the granary: an open shed of sacks, grain drying on mats, sealed pits, the balance
      const gs = freeSpot(W, GRAN.x + 14, GRAN.y - 10, 12, 9); if (gs) W.grainShed({ x: gs[0], y: gs[1], w: 9, d: 5.5, rot: GRAN.rot });
      const gh = freeSpot(W, GRAN.x - 12, GRAN.y - 14, 12, 8);
      if (gh) { W.grainHeap({ x: gh[0] - 3, y: gh[1], r: 1.5 }); W.grainHeap({ x: gh[0] + 2, y: gh[1] + 1, r: 1.2, color: '#b58f4a' }); W.tula({ x: gh[0] + 4.5, y: gh[1] - 2.5 }); }
      const gp = freeSpot(W, GRAN.x, GRAN.y + 14, 10, 6); if (gp) for (let k = 0; k < 4; k++) W.grainPit({ x: gp[0] - 3.6 + k * 2.4, y: gp[1] });
      // horse lines: picketed horses with trough and hay, war horses saddled in wartime
      const hl = freeSpot(W, war ? 52 : 18, war ? -18 : -24, 22, 10);
      if (hl) W.picketLine({ x: hl[0], y: hl[1], len: 15, n: war ? 6 : 4, rot: 0, tack: false, coats: war ? ['horse', 'horse-war', 'horse-grey', 'horse-black', 'horse-war', 'horse-chestnut'] : ['horse-grey', 'horse', 'horse-chestnut', 'horse-black'] });
      // tools at every other operable gun
      W.onFinish.push((Wf) => Wf.guns.forEach((g, k) => { if (k % 2) return; const a = g.dir * Math.PI / 180; Wf.gunTools({ x: g.x - Math.cos(a) * 0.6 + Math.sin(a) * 1.7, y: g.y - Math.sin(a) * 0.6 - Math.cos(a) * 1.7, h: g.h, dir: g.dir }); }));
    }

    // ---------------- daily life of the garrison: training, a kitchen garden, the well
    if (old) {
      const tg = freeSpot(W, -40, -15, 34, 22);
      if (tg) {
        W.akhara({ x: tg[0] - 9, y: tg[1], r: 3.6 });
        W.npc({ kind: 'wrestler', circle: [tg[0] - 9, tg[1], 1.6], count: 2, speed: 0.6 });
        W.npc({ kind: 'villager', circle: [tg[0] - 9, tg[1], 5.5], count: 3 });
        W.mallakhamb({ x: tg[0] - 2, y: tg[1] + 6 });
        W.pells({ x: tg[0] - 3, y: tg[1] - 7, n: 4, rot: 0 });
        const line = W.butts({ x: tg[0] + 14, y: tg[1], rot: 0, n: 3, range: 16 });
        for (let k = 0; k < 3; k++) W.npc({ kind: 'archer-siddi', at: [line[0] - 0.8, line[1] - 3 + k * 3], face: 90, mode: 'idle' });
        W.zone(rectPts(tg[0], tg[1], 34, 22, 0), 'Training ground');
      }
      // no fields: the sources record tanks and cisterns but no cultivation on the island; it was victualled by boat
    }

    // ---------------- houses and quarters
    const quarter = inner(0.9);
    const houseOpts = { size: [5, 9], h: [1, 2], colors: ['plaster', 'plasterDark'], roof: old ? 'mix' : 'flat', roofColor: 'roof', rot: 0, spacing: 2.2, maxSlope: 1.8, ruin: !old, ruinShare: era === '1933' ? 0.75 : 1, ruinH: era === '1933' ? 0.75 : 0.5 };
    if (era !== 'today') W.houses(Object.assign({ poly: quarter, count: war ? 30 : old ? 46 : 34, seed: 5 }, houseOpts));

    // ---------------- vegetation: Konkan species. The garrison kept the island clear; after 1860 it ran wild.
    const grove = inner(0.96);
    if (old) {
      W.trees({ poly: grove, count: war ? 14 : 22, types: { palm: 4, tamarind: 1, mango: 1, neem: 1 }, s: [0.85, 1.25], minDist: 8, seed: 21, maxSlope: 2.4 });
      for (const [x, y] of [[66, 110], [-30, 120], [10, -60]]) { const q = freeSpot(W, x, y, 9, 9); if (q) W.tree({ x: q[0], y: q[1], type: 'banyan', s: 1.15 }); }
      W.groundCover({ poly: grove, spacing: 2.4, threshold: war ? 0.3 : 0.15, types: { grass: 8, flowers: 1 }, max: 2200, seed: 31 });
    } else {
      const wild = era === '1933';
      W.trees({ poly: grove, count: wild ? 85 : 70, types: { banyan: 1.2, peepal: 1, palm: 2.5, tamarind: 1, round: 1.5, screwpine: 1, bush: 3 }, s: [0.8, 1.35], minDist: 6.5, seed: 21, maxSlope: 2.6 });
      W.groundCover({ poly: grove, spacing: 1.75, threshold: wild ? -0.4 : -0.3, types: { grass: 6, bush: 0.7, flowers: 0.7, reed: wild ? 0.8 : 0.3 }, max: 3500, seed: 32 });
    }

    // ---------------- animals: fowl and goats about the houses, dogs and cats, horses, birds overhead
    W.birds({ x: 0, y: 0, h: 24, r: 150, n: 9, kind: 'gull', speed: 0.06 });
    W.birds({ x: -260, y: 60, h: 16, r: 60, n: 7, kind: 'gull', speed: 0.1 });
    W.birds({ x: 30, y: 40, h: 30, r: 45, n: 1, kind: 'kite', speed: 0.05 });
    W.birds({ x: -20, y: -40, h: 12, r: 35, n: 8, kind: 'crow', speed: 0.18 });
    const yard = [[-80, -30], [20, -30], [40, -70], [-60, -90]], northYard = [[-70, 62], [-10, 112], [26, 100], [4, 52]];
    if (era !== 'today') {
      W.npc({ kind: 'chicken', zone: yard, count: 6, speed: 0.6 }); W.npc({ kind: 'rooster', zone: yard, count: 2, speed: 0.6 });
      W.npc({ kind: 'chicken', zone: northYard, count: 4, speed: 0.6 }); W.npc({ kind: 'rooster', zone: northYard, count: 1, speed: 0.6 });
      W.npc({ kind: 'goat', zone: northYard, count: war ? 0 : 4, speed: 0.5 });
      // a hen coop with a cock and two hens already in it, and an empty fold for a flock
      const coop = freeSpot(W, -30, -45, 7, 6);
      if (coop) { const pl = rectPts(coop[0], coop[1], 6, 5, 8); W.pen({ poly: pl, gate: 0, kind: 'chicken', name: 'Hen coop' }); W.npc({ kind: 'chicken', at: [coop[0] - 1, coop[1]], count: 2 }); W.npc({ kind: 'rooster', at: [coop[0] + 1, coop[1] + 0.5] }); }
      const fold = freeSpot(W, -60, 100, 14, 11);
      if (fold) W.pen({ poly: rectPts(fold[0], fold[1], 13, 10, 0), gate: 0, kind: 'any', name: 'Sheepfold' });
      if (old) W.npc({ kind: 'sheep', zone: [[-120, 40], [-80, 40], [-80, 0], [-120, 0]], count: war ? 9 : 6, speed: 0.45 });
    }
    W.npc({ kind: 'dog', zone: era === 'today' ? [[60, 40], [120, 40], [120, -40], [60, -40]] : yard, count: era === 'today' ? 4 : 2, speed: 0.8 });
    W.npc({ kind: 'cat', zone: northYard, count: era === 'today' ? 3 : 2, speed: 0.5 });
    if (era === '1933') W.npc({ kind: 'horse-grey', at: [60, -12], face: 0, mode: 'idle' });


    // ---------------- mainland (Rajapuri) and sea traffic, outside the playable area
    W.scenery({ poly: [[560, -700], [1500, -700], [1500, 900], [600, 900], [585, 300], [610, 120], [570, -120]], h0: -6, h1: 2.5, color: 'grass' });
    for (const [x, y, r, h] of [[700, -260, 160, 60], [760, 140, 200, 80], [690, 520, 170, 55]]) W.scenery({ hill: { x, y, r, h }, color: 'grass', h0: 2 });
    const lap = [[255, -60], [255, 150], [100, 208], [-240, 205], [-258, -100], [-100, -214], [150, -214], [255, -130]];
    // the ferry from Rajapuri: out in the channel, round to the landing, alongside the steps
    const ferryPath = [[540, -40], [380, -30], [250, -14], LP(0, 44), LP(0, 26), LP(0, 19.5), DOCK];
    const ferry = { path: ferryPath, dock: { dir: GYAW }, step: [...STEP, LAND_H], speed: 3.4, dwell: war ? 46 : 40, away: 12 };
    if (war) {
      W.boat({ size: 1.45, color: '#4a3a2c', sailColor: '#b9ab8c', oars: 4, ferry });
      // Maratha gallivats standing off the island, and the garrison's guns answering them
      const gall = [[[-380, -40], [-330, 120], [-420, 60]], [[-150, -330], [60, -360], [-60, -300]], [[-260, 260], [-60, 330], [-180, 300]], [[330, -260], [420, -160], [380, -300]]];
      gall.forEach((p, i) => W.boat({ enemy: true, x: p[0][0], y: p[0][1], size: 1.9, color: '#5a3a26', sailColor: '#d9822b', flag: '#e07a1a', oars: 6, path: p, speed: 1.4 + i * 0.2 }));
      const firing = [[-206, 40, 205, [-345, 70]], [-120, -160, 235, [-60, -330]], [60, 186, 95, [-30, 320]], [220, -110, 330, [365, -210]], [176, -140, 300, [360, -250]], [-40, 186, 110, [-150, 310]]];
      firing.forEach(([x, y, dir, sp], i) => {
        const b = BAST.reduce((m, q) => (Math.hypot(q.x - x, q.y - y) < Math.hypot(m.x - x, m.y - y) ? q : m), BAST[0]);
        const a = Math.atan2(sp[1] - b.y, sp[0] - b.x);
        W.gunfire({ x: b.x + Math.cos(a) * b.r * 0.85, y: b.y + Math.sin(a) * b.r * 0.85, h: btop(b.x, b.y) + 1.1, dir: a * 180 / Math.PI, period: 13 + i * 2.3, phase: i * 3.1, splash: sp, flight: 1.6 + i * 0.15 });
      });
      // the besiegers' camp on the Rajapuri shore: tents and cooking smoke
      for (let i = 0; i < 26; i++) { const x = 600 + (i % 7) * 11 + (i % 2) * 4, y = -150 + Math.floor(i / 7) * 14 + (i % 3) * 3; W.scenery({ box: [x, y, 4.5, 3.2, 8, 2.4, 4.6], color: i % 5 === 0 ? '#c9b07a' : '#e2dac4' }); }
      [[612, -140], [640, -118], [668, -132], [626, -96]].forEach(([x, y]) => W.smoke({ x, y, h: 3, n: 20, life: 12, size: [2, 12], alpha: 0.32, rise: 2.2 }));
    } else if (old) {
      W.boat({ size: 1.5, color: '#7a5634', sailColor: '#efe6cf', ferry });
      W.boat({ x: 186, y: -16, dir: 200, size: 1.3 });
      W.boat({ x: 255, y: -60, dir: 90, size: 1.7, path: lap, speed: 3.2 });
      W.boat({ x: -240, y: 205, dir: 0, size: 1.4, path: lap.slice().reverse(), speed: 2.6 });
    } else if (era === '1933') {
      W.boat({ size: 1.3, color: '#3d4a52', sailColor: '#f2ead6', ferry });
      W.boat({ x: 200, y: -20, dir: 120, size: 1.1, path: [[200, -20], [240, 60], [240, -120]], speed: 1.8 });
    } else {
      W.boat({ size: 1.35, color: '#2f5d8a', sailColor: '#f2ead6', ferry });
      W.boat({ size: 1.3, color: '#8a3a2a', sailColor: '#f2ead6', ferry: Object.assign({}, ferry, { offset: 95 }) });
      for (let i = 0; i < 2; i++) W.boat({ x: 190, y: 24, dir: 180, size: 1.15, sailColor: '#f2ead6', path: [[176, 30 + i * 5], [235, 70 + i * 30], [235, -30 - i * 30]], speed: 2.4 + i * 0.4 });
      W.boat({ x: 196, y: 30, dir: 190, size: 1.15, sailColor: '#f2ead6' });
    }

    // ---------------- people
    const zoneN = [[-70, 62], [-10, 112], [26, 100], [4, 52]], zoneS = [[-80, -70], [20, -90], [42, -62], [-60, -30]];
    const inCourt = LR(-8, 8, -30, -19);
    const queue = [...LP(0, 11.2), LAND_H];
    const onBoat = (kind, group, count, ferryIdx = 0, zone = inCourt) => W.npc({ kind, ferry: ferryIdx, group, count, zone, queue, speed: 1.5 });
    const [g1x, g1y] = LP(-1.6, -1.2), [g2x, g2y] = LP(1.6, -1.2);
    if (war) {
      // garrison: a crew beside every third gun (they serve it once the game starts), musketeers on the walls, sentries at both gates
      W.onFinish.push((Wf) => {
        Wf.guns.forEach((g, k) => {
          if (k % 3) return;
          const ca = Math.cos(g.dir * Math.PI / 180), sa = Math.sin(g.dir * Math.PI / 180);
          for (const sd of [-1, 1]) Wf.npc({ kind: sd < 0 ? 'gunner-siddi' : 'musketeer-siddi', at: [g.x - ca * 1.4 - sa * sd, g.y - sa * 1.4 + ca * sd], h: g.h, face: faceDeg(ca, sa), mode: 'idle' });
        });
      });
      for (const [a, z, n] of [[0, 8, 2], [10, 18, 2], [20, 30, 3], [36, 46, 3], [46, 51, 2]]) W.npc({ kind: 'musketeer-siddi', patrol: patrol(a, z, W), count: n, speed: 1.1 });
      W.npc({ kind: 'guard-siddi', at: [g1x, g1y], face: FACE_OUT, mode: 'idle' }); W.npc({ kind: 'guard-siddi', at: [g2x, g2y], face: FACE_OUT, mode: 'idle' });
      W.npc({ kind: 'musketeer-siddi', at: LP(-1.4, -15.6), mode: 'idle' }); W.npc({ kind: 'musketeer-siddi', at: LP(1.4, -15.6), mode: 'idle' });
      W.npc({ kind: 'courtier', circle: [-93, 79, 8], count: 2 });
      onBoat('porter', 0, 5); onBoat('porter', 1, 5);
      W.npc({ kind: 'sailor', circle: [...LP(0, 11), 2.5], h: LAND_H, count: 2 });
    } else if (old) {
      W.npc({ kind: 'guard-siddi', patrol: patrol(20, 30, W), count: 2 });
      W.npc({ kind: 'guard-siddi', patrol: patrol(36, 46, W), count: 2 });
      W.npc({ kind: 'guard-siddi', patrol: patrol(2, 12, W), count: 1 });
      W.npc({ kind: 'guard-siddi', at: [g1x, g1y], face: FACE_OUT, mode: 'idle' }); W.npc({ kind: 'guard-siddi', at: [g2x, g2y], face: FACE_OUT, mode: 'idle' });
      onBoat('merchant', 0, 3); onBoat('villager', 0, 2); onBoat('sailor', 1, 3); onBoat('fisherwoman', 1, 2);
      W.npc({ kind: 'courtier', circle: [31, 1, 8], count: 2 });
      W.npc({ kind: 'villager', zone: zoneN, count: 3 }); W.npc({ kind: 'woman-red', zone: zoneN, count: 2 });
      W.npc({ kind: 'villager', zone: zoneS, count: 2 }); W.npc({ kind: 'woman-green', zone: zoneS, count: 2 });
      W.npc({ kind: 'woman-indigo', circle: [42, 122, 6], count: 1 });
    } else if (era === '1933') {
      const at = WALL[8];
      W.npc({ kind: 'officer', at: [at[0] + 1, at[1] + 1], h: WTOP + 0.1, face: 140, mode: 'idle' });
      W.npc({ kind: 'lady', at: [at[0] + 3, at[1] - 1], h: WTOP + 0.1, face: 150, mode: 'idle' });
      W.npc({ kind: 'officer', at: [at[0] - 1, at[1] + 3], h: WTOP + 0.1, face: 120, mode: 'idle' });
      W.npc({ kind: 'sepoy', at: [g1x, g1y], face: FACE_OUT, mode: 'idle' });
      W.npc({ kind: 'sepoy', patrol: patrol(20, 26, W), count: 1 });
      onBoat('villager', 0, 3); onBoat('courtier', 1, 2); onBoat('sepoy', 1, 1);
      W.npc({ kind: 'courtier', circle: [-40, 80, 18], count: 2 });
      W.npc({ kind: 'woman-red', zone: zoneS, count: 1 });
    } else {
      W.npc({ kind: 'tourist-a', circle: [40, 10, 40], count: 3 }); W.npc({ kind: 'tourist-b', circle: [-20, 0, 50], count: 3 });
      W.npc({ kind: 'tourist-d', circle: [-40, 40, 30], count: 3 });
      W.npc({ kind: 'student', circle: [60, 20, 20], count: 4, speed: 1.5 });
      W.npc({ kind: 'tourist-a', patrol: patrol(20, 28, W), count: 2 });
      W.npc({ kind: 'tourist-c', patrol: patrol(36, 44, W), count: 2 });
      W.npc({ kind: 'asi-guard', at: [g1x, g1y], face: FACE_OUT, mode: 'idle' });
      onBoat('tourist-a', 0, 3); onBoat('tourist-c', 0, 3); onBoat('tourist-b', 1, 3); onBoat('tourist-d', 1, 3);
      onBoat('tourist-c', 0, 4, 1); onBoat('student', 1, 4, 1);
      W.npc({ kind: 'boatman', circle: [...LP(0, 11), 2.5], h: LAND_H, count: 2 });
    }

    // ---------------- places
    const moved = { darya: [DP(0, 5.2), DARYA_H], gate: [LP(0, 6.2), 2.4], sharabha: [LP(0, 10.5), LAND_H], pir: [LP(-3.4, -21.5), null] };
    for (const p of POIS) {
      const note = war ? (ERA_NOTE_1760[p.id] || null) : (p.eraNote?.[era] || null);
      const q = Object.assign({}, p, { eraNote: note });
      if (moved[p.id]) { q.at = moved[p.id][0]; if (moved[p.id][1] != null) { q.h = moved[p.id][1]; q.hTol = 3; } }
      if (p.id === 'palace') q.at = PAL_POI;
      if (['kalal', 'chavri', 'ramparts', 'padmadurg', 'causeway'].includes(p.id)) q.h = btop(p.at[0], p.at[1]);
      W.poi(q);
    }
    W.spawn(...LP(0, 11.5), LAND_H, FACE_IN);
  },
};

// ---------------------------------------------------------------- the garrison camp (c. 1760)
function buildWarCamp(W, { GRAN, MAG, ARM }) {
  const at = (r, a, b) => { const c = Math.cos(r.rot * Math.PI / 180), s = Math.sin(r.rot * Math.PI / 180); return [r.x + c * a - s * b, r.y + s * a + c * b]; };
  // granary yard: sacks stacked along the front, grain bins in a row, a weighing shed
  for (let k = -1; k <= 1; k++) { const [x, y] = at(GRAN, k * 5.5, -(GRAN.d * 0.5 + 3.2)); W.sacks({ x, y, rot: GRAN.rot, cols: 4, rows: 2, layers: 3 }); }
  for (let k = 0; k < 4; k++) { const [x, y] = at(GRAN, GRAN.w * 0.5 + 3, -6 + k * 3.4); W.grainBin({ x, y, r: 1.15, h: 2.3 }); }
  { const [x, y] = at(GRAN, -GRAN.w * 0.5 - 4.5, -2); W.tent({ x, y, w: 5, d: 4, rot: GRAN.rot, style: 'shamiana', color: '#e7dcc0', band: '#2f6b45', h: 3.2 }); W.sacks({ x, y, rot: GRAN.rot, cols: 3, rows: 1, layers: 2 }); }
  // magazine: powder kegs and shot by the door, a sentry ground
  { const [x, y] = at(MAG, 0, -(MAG.d * 0.5 + 2.6)); W.kegs({ x, y, n: 6, rot: MAG.rot }); const [x2, y2] = at(MAG, MAG.w * 0.45 + 2, -3); W.shotPile({ x: x2, y: y2, n: 5, d: 0.32 }); const [x3, y3] = at(MAG, -MAG.w * 0.45 - 2, -3); W.shotPile({ x: x3, y: y3, n: 4, d: 0.32 }); }
  // armoury: racks of spears and matchlocks in front, shot and kegs
  for (let k = -1; k <= 1; k++) { const [x, y] = at(ARM, k * 4.5, -(ARM.d * 0.5 + 2.4)); W.armsRack({ x, y, len: 3.2, rot: ARM.rot }); }
  { const [x, y] = at(ARM, ARM.w * 0.5 + 2.5, 2); W.kegs({ x, y, n: 4, rot: ARM.rot }); }
  // the garrison under canvas: tent lines on the open ground of the north-east and south
  const avoid = [rectPts(31.1, 1.2, 46, 42, 103)];
  W._tents = [];
  W._tents.push(...W.tentLines({ poly: [[-70, -50], [10, -60], [40, -100], [-20, -120], [-110, -100], [-120, -70]], spacing: [7, 6.5], rot: 12, officer: 0.15, max: 26, seed: 3, avoid }));
  W._tents.push(...W.tentLines({ poly: [[55, 25], [115, 30], [112, 70], [60, 72]], spacing: [6.5, 6], rot: 8, officer: 0.1, max: 12, seed: 4, avoid }));
  W._tents.push(...W.tentLines({ poly: [[130, -40], [190, -80], [185, -125], [150, -120], [120, -70]], spacing: [6.5, 6], rot: -35, officer: 0.12, max: 12, seed: 6, avoid }));
  W.tentLines({ poly: [[-40, 20], [10, 25], [5, 60], [-45, 55]], spacing: [6.5, 6], rot: 0, officer: 0.2, max: 8, seed: 8, avoid });
  // arms and armour about the armoury and among the tents
  for (let k = 0; k < 3; k++) { const [x, y] = at(ARM, -ARM.w * 0.5 - 2.4, -4 + k * 3.5); if (W.isFree(x, y, 0.6)) W.armourStand({ x, y, rot: ARM.rot + 90 }); }
  { const [x, y] = at(ARM, 0, ARM.d * 0.5 + 3.2); if (W.isFree(x, y, 1.5)) W.armourHeap({ x, y, n: 8 }); }
  { const [x, y] = at(ARM, 5, -(ARM.d * 0.5 + 5)); if (W.isFree(x, y, 1)) W.shieldStack({ x, y, rot: ARM.rot, n: 6 }); }
  const tents = [...(W._tents || [])];
  tents.forEach(([x, y], i) => {
    if (i % 4 === 0 && W.isFree(x + 3, y, 0.8)) W.spearStack({ x: x + 3, y, n: 8 });
    else if (i % 4 === 2 && W.isFree(x, y - 3.5, 1.6)) W.armourHeap({ x, y: y - 3.5, n: 4 });
    else if (i % 7 === 5 && W.isFree(x - 3, y + 1, 0.6)) W.armourStand({ x: x - 3, y: y + 1, rot: 0 });
  });
  // cooking fires between the tent lines
  for (const [x, y] of [[-40, -88], [-78, -78], [12, -82], [86, 50], [160, -92], [-15, 40]]) if (W.isFree(x, y, 1.2)) W.cookfire({ x, y });
  // livestock: goats and cattle penned south of the knoll, horses picketed near the gate court, hay and troughs
  const pens = [[[-140, -20], [-112, -18], [-110, -42], [-138, -46]], [[-100, 15], [-72, 18], [-70, -6], [-98, -8]]];
  pens.forEach((pl, i) => {
    if (!pl.every(([x, y]) => W.isFree(x, y, 0.5))) return;
    W.pen({ poly: pl, gate: 1 });
    const cx = pl.reduce((a, p) => a + p[0] / 4, 0), cy = pl.reduce((a, p) => a + p[1] / 4, 0);
    W.trough({ x: cx, y: cy + 5, len: 3, rot: 5 });
    W.haystack({ x: pl[0][0] + 4, y: pl[0][1] - 4, r: 1.7 });
    const inner = pl.map(([x, y]) => [cx + (x - cx) * 0.8, cy + (y - cy) * 0.8]);
    W.npc({ kind: i ? 'cow' : 'goat', zone: inner, count: i ? 6 : 12, speed: 0.5 });
  });
  // water: pots by both tanks, carriers going between
  W.pots({ x: 60, y: 92, n: 12 }); W.pots({ x: 112, y: -72, n: 8 });
  W.npc({ kind: 'water-carrier', zone: [[40, 60], [100, 60], [110, -70], [60, -70]], count: 5 });
  W.npc({ kind: 'porter', zone: [[30, -30], [90, -30], [90, -70], [30, -70]], count: 5 });
  W.npc({ kind: 'villager', zone: [[-100, -60], [20, -60], [20, -110], [-100, -110]], count: 6 });
  W.npc({ kind: 'woman-red', zone: [[-100, -60], [20, -60], [20, -110], [-100, -110]], count: 3 });
  W.npc({ kind: 'musketeer-siddi', zone: [[-100, -60], [20, -60], [20, -110], [-100, -110]], count: 6 });
}

// a free, fairly level rectangle near (x, y), searching outwards; returns its centre or null
function freeSpot(W, x, y, w, d) {
  for (let r = 0; r < 60; r += 2.5) for (let k = 0; k < Math.max(1, Math.round(r * 1.5)); k++) {
    const a = k / Math.max(1, Math.round(r * 1.5)) * Math.PI * 2, cx = x + Math.cos(a) * r, cy = y + Math.sin(a) * r;
    const pts = [[cx, cy], [cx - w / 2, cy - d / 2], [cx + w / 2, cy - d / 2], [cx + w / 2, cy + d / 2], [cx - w / 2, cy + d / 2], [cx, cy - d / 2], [cx, cy + d / 2], [cx - w / 2, cy], [cx + w / 2, cy]];
    if (!pts.every(([px, py]) => W.isFree(px, py, 0.6) && W.waterLevelAt(px, py) < W.ground(px, py) - 0.3)) continue;
    const hs = pts.map(([px, py]) => W.ground(px, py));
    if (Math.max(...hs) - Math.min(...hs) > 1.4 || Math.min(...hs) < 2) continue;
    return [cx, cy];
  }
  return null;
}

// ear clipping for a small simple polygon
function triangulateSimple(pts) {
  const area = pts.reduce((a, p, i) => { const q = pts[(i + 1) % pts.length]; return a + p[0] * q[1] - q[0] * p[1]; }, 0);
  const idx = pts.map((_, i) => i); if (area < 0) idx.reverse();
  const out = []; let guard = 0;
  const inside = (p, a, b, c) => { const d = (u, v, w) => (w[0] - v[0]) * (u[1] - v[1]) - (u[0] - v[0]) * (w[1] - v[1]); const d1 = d(p, a, b), d2 = d(p, b, c), d3 = d(p, c, a); return !((d1 < 0 || d2 < 0 || d3 < 0) && (d1 > 0 || d2 > 0 || d3 > 0)); };
  while (idx.length > 3 && guard++ < 500) {
    let found = false;
    for (let i = 0; i < idx.length; i++) {
      const a = idx[(i - 1 + idx.length) % idx.length], b = idx[i], c = idx[(i + 1) % idx.length];
      const A = pts[a], B = pts[b], Cc = pts[c];
      if ((B[0] - A[0]) * (Cc[1] - A[1]) - (B[1] - A[1]) * (Cc[0] - A[0]) <= 0) continue;
      if (idx.some((k) => k !== a && k !== b && k !== c && inside(pts[k], A, B, Cc))) continue;
      out.push([a, b, c]); idx.splice(i, 1); found = true; break;
    }
    if (!found) break;
  }
  if (idx.length === 3) out.push(idx.slice());
  return out;
}
