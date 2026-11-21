// Curation for Chittorgarh (batch 2, OSM-rich; the 2010 ASI guide board used to validate the mapping and to add what OSM lacks).
// Evidence and conflicts: docs/research/chittorgarh-pass.md.
// Board: "Guide map of Chittaurgarh", Archaeological Survey of India, Jaipur Circle, 2010 (surveyors V.K. Uppal and Vivek Nigam); photograph by
// Amitbanerjee0143, Wikimedia Commons "Chittorgarh Fort Map.jpg", CC BY-SA 4.0, data/plans/chittorgarh/. It is a relief board photographed nearly head-on.
// Registered to OSM by a similarity fit on 12 named tanks (blue regions on the board against OSM tank centroids): 1.94 m/px, rotation -89.7 deg (north is left),
// rms 20 m, leave-one-out median 20 m. Features not in the fit (palace, temple and haveli footprints) land within 3-16 m of their OSM buildings.
// Everything this file adds from the board is +-30 m. Nothing on the board gives a height, a wall thickness or a gate form.
import { carryOver, levelInlandWaters } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'needs-plan';
export const HEADER = [
  'Chittorgarh, Rajasthan. OSM already maps the outline, the rampart ring, many gates, tanks and monuments; the 2010 ASI guide board was registered to it (rms 20 m) and checks it.',
  'Added from the board (+-30 m, documented): three tanks that OSM lacks and the Kirti Stambh position. Promoted from OSM nodes (mapped): named Pols within 30 m of a mapped wall become gates.',
  'The constructed (schematic) layer in `constructed[]` is drawn from written dimensions with assumed heights and is shown only in the `<era>~built` eras. Documented heights: none.',
  'Short steps and footpath lines (41) are not carried, to stay inside the trace size budget. Terrain: Terrarium z15 sampled every 20 m over a rectangle round the outline (a 180 m mesa; the DEM is ~30 m so scarps are smoothed).',
];

// board pixels (native 2560x1920 image; x right, y down) -> OSM local metres. similarity fit, see data/plans/chittorgarh/registration.json
const PM = [1020.25, -1311.3333], OM = [-167.8596, 982.269], Z = [0.010178, -1.937529];
const toOsm = ([px, py]) => {
  const ax = px - PM[0], ay = -py - PM[1];
  return [+((Z[0] * ax - Z[1] * ay) + OM[0]).toFixed(1), +((Z[0] * ay + Z[1] * ax) + OM[1]).toFixed(1)];
};
const PLAN = 'plan:asi-guide-board-2010#guide-map';
const TANKS_PX = {
  'plan-tank-1': ['Tank (lettered "TANK" on the board)', [[1422,1305],[1417,1318],[1425,1365],[1473,1370],[1518,1367],[1517,1357],[1494,1352],[1493,1334],[1489,1330],[1481,1345],[1427,1343],[1428,1324],[1471,1324],[1474,1303],[1470,1296],[1432,1296]]],
  'plan-surhadia-tank': ['Surhadia Tank (as lettered; reading uncertain)', [[1579,1197],[1559,1174],[1541,1167],[1531,1167],[1533,1181],[1519,1190],[1497,1185],[1485,1187],[1484,1199],[1454,1196],[1447,1254],[1484,1256],[1496,1245],[1534,1238],[1542,1226],[1576,1215]]],
  'plan-mrigvan-pond': ['Pond in the Mrigvan forest sanctuary (board)', [[2228,1197],[2227,1210],[2233,1222],[2260,1220],[2260,1197],[2243,1191]]],
};
const KIRTI_PX = [798, 1113], KIRTI_HALF_PX = 7;

const distSeg = (p, a, b) => { const dx = b[0] - a[0], dy = b[1] - a[1], t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy || 1))); const q = [a[0] + dx * t, a[1] + dy * t]; return [Math.hypot(p[0] - q[0], p[1] - q[1]), q]; };

export default function curate(T, h) {
  console.error(`${T.id}: derived a surface level for ${levelInlandWaters(T, h)} inland water bodies`);
  const ring = h.byOsm('way/549769775');                                  // the closed rampart ring, 1095 vertices
  const walls = h.all('wall');
  const rename = (osm, id, name) => { const e = h.byOsm(osm); h.rename(e, id, name); return e; };

  // --- size budget: steps and footpaths (41 short lines, painted ground only) are dropped; roads, tracks and service roads stay
  const dropped = h.all('road').filter((r) => ['steps', 'path'].includes(r.highway)); h.remove(...dropped.map((r) => r.id));
  console.error(`chittorgarh: dropped ${dropped.length} steps/path lines to stay inside the 250 KB trace budget`);
  // --- gates: named or unnamed OSM city_gate nodes within 30 m of a mapped wall become gates (mapped evidence, no invented gate)
  const gateIds = [], leftAsMarkers = [];
  let n = 0;
  for (const m of h.all('marker').filter((x) => x.osmTags?.historic === 'city_gate')) {
    let best = [1e9, null, null];
    for (const w of walls) for (let i = 0; i < w.path.length - 1; i++) { const [d, q] = distSeg(m.at, w.path[i], w.path[i + 1]); if (d < best[0]) best = [d, q, w]; }
    if (best[0] > 30) { leftAsMarkers.push(`${m.name || 'gate'} (${best[0].toFixed(0)} m from any wall)`); continue; }
    const id = `gate-${++n}`, nm = m.name ? `${m.name} · mapped gate` : 'Gate · mapped, unnamed';
    h.add({ id, kind: 'gate', wall: best[2].id, at: [+best[1][0].toFixed(1), +best[1][1].toFixed(1)], src: m.src, ev: 'mapped', conf: 0.6, name: nm, osmTags: m.osmTags,
      note: `OpenStreetMap node tagged historic=city_gate, ${best[0].toFixed(0)} m from the mapped wall and snapped to it. The form and passage are not mapped, so a plain 3 m opening is cut; it is not a claim about the real gate.` });
    h.remove(m.id); gateIds.push(id);
  }
  console.error(`chittorgarh: ${gateIds.length} gates from OSM nodes; left as markers: ${leftAsMarkers.join('; ') || 'none'}`);

  // --- board validation printed for the pass document (features not in the fit)
  const check = (osm, px, label) => { const e = h.byOsm(osm), c = e.poly.reduce((a, p) => [a[0] + p[0] / e.poly.length, a[1] + p[1] / e.poly.length], [0, 0]), b = toOsm(px); console.error(`chittorgarh: board ${label} lands ${Math.hypot(b[0] - c[0], b[1] - c[1]).toFixed(0)} m from OSM ${e.name || osm}`); };
  check('way/562433361', [815, 1410], 'Kumbha Palace'); check('way/549769779', [1520, 1330], 'Padmini Palace'); check('way/549936875', [1408, 1392], 'Kalika Mata Temple');

  // --- plan elements: tanks OSM lacks, and the Kirti Stambh symbol
  const planIds = [];
  const tankKeep = h.all('water').filter((w) => !String(w.src).startsWith('derived:'));
  for (const [id, [name, px]] of Object.entries(TANKS_PX)) {
    const poly = px.map(toOsm), c = poly.reduce((a, p) => [a[0] + p[0] / poly.length, a[1] + p[1] / poly.length], [0, 0]);
    const near = Math.min(...tankKeep.map((w) => { const q = w.poly.reduce((a, p) => [a[0] + p[0] / w.poly.length, a[1] + p[1] / w.poly.length], [0, 0]); return Math.hypot(q[0] - c[0], q[1] - c[1]); }));
    console.error(`chittorgarh: ${id} centre is ${near.toFixed(0)} m from the nearest OSM water`);
    h.add({ id, kind: 'tank', poly, src: PLAN, ev: 'documented', conf: 0.4, name: `${name} · board, +-30 m`,
      note: `Blue region on the 2010 ASI guide board, registered to OSM (rms 20 m). No OSM water lies within ${Math.floor(near / 10) * 10} m of its centre, so it is not confirmed; extent and depth unknown.` });
    planIds.push(id);
  }
  const kc = toOsm(KIRTI_PX), kh = KIRTI_HALF_PX * 1.94;
  h.add({ id: 'plan-kirti-stambh', kind: 'building', poly: [[kc[0] - kh, kc[1] - kh], [kc[0] + kh, kc[1] - kh], [kc[0] + kh, kc[1] + kh], [kc[0] - kh, kc[1] + kh]].map((p) => p.map((v) => +v.toFixed(1))), use: 'tower',
    src: PLAN, ev: 'documented', conf: 0.3, name: 'Kirti Stambh (Tower of Fame) · board symbol, +-30 m',
    note: 'The small white square lettered "Kirti Stambh" on the board. The square is the board\'s symbol, about 27 m across, not a surveyed footprint; OSM has no feature here.' });
  planIds.push('plan-kirti-stambh');

  // names for OSM features the board also labels (the board only confirms them; nothing is changed)
  const tankIds = tankKeep.map((w) => w.id);
  const monuments = [h.byOsm('way/562433361').id, h.byOsm('way/549936875').id, h.byOsm('way/1549061397').id];
  const mapped = ['outline', ...walls.map((w) => w.id), ...tankIds, ...gateIds, ...monuments];
  const keep = [...mapped, ...planIds];
  const padmini = T.elements.find((e) => e.src === 'osm:way/668345492');  // Padmini's Palace footprint lies inside a mapped water polygon
  if (padmini) { padmini.unreachableOk = true; padmini.unreachableNote = 'the mapped footprint lies inside a mapped water polygon (OSM way 549591132), so it is in the pond; no causeway is mapped.'; }
  const w220 = T.elements.find((e) => e.src === 'osm:way/782236562');   // a 105 m wall segment whose carried-back marker landed on ground the nav cannot reach; keep the wall, drop its marker
  carryOver(T, '1568', keep, { modify: w220 ? { [w220.id]: { name: null } } : {}, note: 'the present mapped line (and the 2010 board) assumed to show what stood at the 1568 siege; no dated plan was found. Other monuments are left out because their dates were not established' });

  // --- constructed (schematic) layer
  const vs = h.byOsm('way/1549061397'), vsc = vs.poly.reduce((a, p) => [a[0] + p[0] / vs.poly.length, a[1] + p[1] / vs.poly.length], [0, 0]).map((v) => +v.toFixed(1));
  T.constructed = [
    { id: 'c-rampart', kind: 'wall', path: ring.path, closed: true, stands_for: ring.id, replaces: [ring.id], thick: 3, src: ring.src, ev: 'schematic', conf: 0.2,
      name: 'Rampart ring · schematic, 8 m high and 3 m thick assumed', basis: 'Drawn on the mapped 1095-vertex wall line (OSM way 549769775). No source read in this pass gives the rampart height or thickness; 8 m and 3 m are illustrative. Britannica gives the circumference as about 8 miles (13 km) and the fort as about 700 acres (280 ha), which the ring does not match exactly (see the pass document).',
      h: { v: 8, src: 'inferred', note: 'illustrative; no wall height read' } },
    { id: 'c-vijay-stambh', kind: 'tower', at: vsc, r: 5, src: 'osm:way/1549061397', ev: 'schematic', conf: 0.3,
      name: 'Vijay Stambh (Tower of Victory) · schematic, 37 m assumed', basis: 'Raised on the mapped "Victory Tower" area. The earlier hand level of this fort cites Wikipedia (Vijaya Stambha) for a nine-storey tower of about 37 m, completed around 1448; this pass did not re-read that page (Britannica gives no height). The 5 m radius is an assumed base.',
      h: { v: 37, src: 'inferred', note: 'about 37 m, nine storeys, from the earlier hand level\'s Wikipedia citation; not re-checked' } },
    { id: 'c-kirti-stambh', kind: 'tower', at: kc, r: 4, replaces: ['plan-kirti-stambh'], src: PLAN, ev: 'schematic', conf: 0.2,
      name: 'Kirti Stambh (Tower of Fame) · schematic, 24 m assumed', basis: 'Raised on the board symbol. The catalogue entry CHI-24 (an ASI inventory entry, link only, not re-read here) gives 24 m and six storeys; the 4 m radius is assumed.',
      h: { v: 24, src: 'inferred', note: '24 m, six storeys, from catalogue CHI-24; not re-checked' } },
  ];

  T.eras = [
    { id: '1568', year: '1568', label: 'Akbar\'s siege', short: '1568', lens: 'none',
      summary: 'The mesa fort when Akbar took it in 1568, shown as the present rampart, gates, tanks and a few monuments, all carried back.',
      basis: 'Britannica: sieges by Alauddin Khalji (1303), Bahadur Shah of Gujarat (1534-35) and Akbar (1567-68, captured 1568). The drawn fort is today\'s mapped line, carried back, marked inferred.',
      conjecture: 'No dated plan of Chittorgarh was found. Walls, gates and tanks are carried back unchanged; only Rana Kumbha\'s palace, the Victory Tower and Kalika Mata temple are kept of the buildings, and even their 1568 state is not established.',
      sources: ['CHI-01', 'CHI-19'],
      facts: ['Alauddin Khalji besieged the fort in 1303, Bahadur Shah of Gujarat in 1534-35 and Akbar in 1567-68, taking it in 1568 (Britannica).', 'Britannica dates the Tower of Fame to the 12th century and the Tower of Victory to the 15th; no height is given there.'] },
    { id: 'today', year: 'Today', label: 'ASI monument', short: 'Monument', lens: 'none',
      summary: 'A World Heritage hill fort (Hill Forts of Rajasthan, 2013) on a mesa about 180 m above the plain, with palaces, temples, tanks and a living ascent road.',
      basis: 'OSM outline, rampart, gates, tanks, monuments and roads, checked against the 2010 ASI guide board, plus three tanks and the Kirti Stambh symbol from the board.',
      conjecture: 'Board elements are +-30 m. Heights are unknown (kerb-high) in this evidence layer; see the constructed layer. The dimensions in written sources (13 km circumference, 280 ha) do not match the mapped ring (see the pass document).',
      sources: ['CHI-01', 'CHI-18', 'CHI-22'],
      facts: ['Inscribed on the World Heritage list in 2013 with other Rajasthan hill forts (Britannica).', 'The fort rises about 180 m above the surrounding plain (Britannica, approximate); the DEM here gives a 180 m range.'] },
  ];
}
