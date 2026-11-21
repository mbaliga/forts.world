// Curation for Murud-Janjira (batch 2, T2 where the 1771/1774 plan reaches). Evidence and conflicts: docs/research/murud-janjira-pass.md.
// Plan: inset "Gingerah Fort" on "Plan and view of Gingerah, commonly called Donda Rajapore" (A. Werner; publ. A. Dalrymple, 1771; BnF Gallica
// btv1b85931692 via Wikimedia Commons, public domain), data/plans/murud-janjira/. Registered to OSM by a similarity fit of the island silhouette
// alone (IoU 0.88; see registration notes in data/plans/murud-janjira/registration.json) and then checked against OSM features that were NOT in the fit.
import { carryOver } from './_common.mjs';

export const TIER = 'T2';
export const STATUS = 'plan-traced';
export const HEADER = [
  'Murud-Janjira, Raigad, Maharashtra. Hand-curated trace, tier T2 for the bastions, gates and two buildings (traced from the 1771 Werner/Dalrymple plan registered to OSM, +-15 m), T1 for the rest.',
  'Base: data/traces/murud-janjira.trace.json (OSM ODbL; Terrarium z15, ~30 m SRTM-derived). OSM already maps the perimeter wall line, both tanks, the palace and the citadel; the plan agrees with them (palace 3 m, citadel 9 m, tanks 12-15 m) although they were not used in the fit.',
  'Plan elements carry src plan:werner-dalrymple-1771#gingerah-fort, conf 0.5, and say +-15 m. The plan scale bar (1000 ft = 877 px) gives 0.3475 m/px, but the outline fit gives 0.265 m/px: the plan island is drawn about 24% large against the printed bar, so the fit is trusted and the discrepancy is recorded.',
  'The constructed (schematic) layer in `constructed[]` is drawn from written descriptions with assumed heights and is shown only in the `<era>~built` eras. Documented heights: none.',
];

// plan inset pixel (x right, y down; native crop of the Gallica scan at 2610,3337) -> OSM metres
const FIT = { s: 0.265, th: 269, dx: -17, dy: 8, cx: 512.218, cy: 878.995, ox: 0, oy: 0 };
const toOsm = ([px, py]) => { const r = FIT.th * Math.PI / 180, vx = (px - FIT.cx) * FIT.s, vy = -(py - FIT.cy) * FIT.s; return [+(vx * Math.cos(r) - vy * Math.sin(r) + FIT.ox + FIT.dx).toFixed(1), +(vx * Math.sin(r) + vy * Math.cos(r) + FIT.oy + FIT.dy).toFixed(1)]; };
const nearestOn = (p, path) => { let best = [1e9, null]; for (let i = 0; i < path.length - 1; i++) { const a = path[i], b = path[i + 1], dx = b[0] - a[0], dy = b[1] - a[1], t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy || 1))), q = [a[0] + dx * t, a[1] + dy * t], d = Math.hypot(p[0] - q[0], p[1] - q[1]); if (d < best[0]) best = [d, q]; } return best; };
const PLAN = 'plan:werner-dalrymple-1771#gingerah-fort';
const BAST = [[697, 205], [835, 298], [945, 405], [930, 655], [868, 895], [842, 1122], [752, 1268], [612, 1465], [512, 1493], [345, 1462], [165, 1340], [85, 1130], [65, 905], [95, 655], [225, 560], [365, 480], [510, 398], [582, 320]];

export default function curate(T, h) {
  h.remove('coastline-2');                               // 6 km mainland coast line, far outside the fort window
  const W = h.byId('outline-wall');
  W.name = 'Perimeter wall line · mapped (OSM way 330556777), elevation unknown';
  h.byId('building-5').name = 'Palace (Seddee\'s house, plan a) · mapped (OSM way 265621386)';
  h.byId('building-5').note = 'The plan\'s square courtyard house "a" lands 3 m from this footprint after registration that did not use it, and has a similar size (about 38 x 41 m on the plan).';
  h.byId('building-6').name = 'Citadel on the hill · mapped (OSM way 313374677)';
  h.byId('building-6').note = 'The plan\'s "large magazine on the hill" (d) lands 9 m from this footprint after registration that did not use it.';
  for (const id of ['water-3', 'water-4']) { const t = h.byId(id); t.name = 'Water tank · mapped'; t.note = 'Plan tanks "c" land 12-15 m from the two mapped tanks after registration that did not use them.'; }

  const planIds = [];
  BAST.forEach((p, i) => {
    const at = toOsm(p);
    h.add({ id: `plan-bastion-${i + 1}`, kind: 'bastion', at, r: 12.5, src: PLAN, ev: 'documented', conf: 0.5, name: `Bastion ${i + 1} of 18 read from the plan · position +-15 m`,
      note: 'Round bastion centre read from the 1771 plan and registered to OSM. Plan shows 18 here; Wikipedia and a travel source say 19, and the plan is hatched where small ones may be hidden. Radius 12.5 m is from the plan (about 25 m across; the travel source gives about 24 m).' });
    planIds.push(`plan-bastion-${i + 1}`);
  });
  const gates = [['east', 'Main gate (east, facing Rajapuri) · plan "e"', [470, 410]], ['west', 'Sea gate (Darya Darwaza, west) · plan "e"', [690, 1385]]];
  for (const [k, name, px] of gates) {
    const o = toOsm(px), [d, q] = nearestOn(o, W.path);
    h.add({ id: `plan-gate-${k}`, kind: 'gate', wall: 'outline-wall', at: [+q[0].toFixed(1), +q[1].toFixed(1)], src: PLAN, ev: 'documented', conf: 0.45, name: `${name} · position +-15 m`,
      note: `Plan legend: "e. The two gates". Registered position is ${d.toFixed(0)} m from the mapped wall and snapped to it. The east gate lands at the end of the mapped path 1043662036; the form and passage are not drawn on the plan, so a plain 3 m opening is cut.` });
    planIds.push(`plan-gate-${k}`);
  }
  const rect = (a, b) => [[a[0], a[1]], [b[0], a[1]], [b[0], b[1]], [a[0], b[1]]].map(toOsm);
  h.add({ id: 'plan-mosque', kind: 'building', poly: rect([685, 600], [750, 670]), use: 'mosque', src: PLAN, ev: 'documented', conf: 0.45, name: 'Mosque compound (plan b) · footprint from plan, +-15 m',
    note: 'Courtyard block lettered "b" on the plan. Position and size are read from the engraving and registered to OSM; the mosque building itself is not separated from its courtyard.' });
  h.add({ id: 'plan-magazine', kind: 'building', poly: rect([485, 1078], [555, 1150]), use: 'storage', src: PLAN, ev: 'documented', conf: 0.4, name: 'Large magazine on the hill (plan d) · footprint from plan, +-15 m',
    note: 'Rectangle lettered "d" inside the bastioned enclosure on the hill. Position and size are read from the engraving.', unreachableOk: true });
  planIds.push('plan-mosque', 'plan-magazine');

  const mapped = ['outline', 'outline-wall', 'coastline-1', 'sea-0', 'water-3', 'water-4', 'building-5', 'building-6', 'wall-7'];
  const keep = [...mapped, ...planIds];
  const restore = Object.fromEntries(planIds.map((id) => { const e = h.byId(id); return [id, { ev: 'documented', conf: e.conf, name: e.name, note: e.note }]; }));
  const plan1771 = ['outline', 'outline-wall', 'water-3', 'water-4', 'building-5', 'building-6'];   // corroborated by the plan within 15 m
  carryOver(T, '1733', keep, { note: 'present mapped line assumed unchanged since 1733; the plan dates from 1771' });
  carryOver(T, '1774', keep, { note: 'present mapped line assumed unchanged since 1771; the plan agrees with it to 15 m for the outline, tanks, palace and citadel', modify: { ...restore } });
  for (const id of plan1771) { const m = T.diffs['1774'].modify[id]; if (m) { m.ev = 'mapped'; m.conf = 0.6; m.name = m.name.replace(' · carried back, inferred', ' · mapped, matches 1771 plan'); } }

  // Constructed (schematic) layer: heights are assumptions with their rule.
  const palace = h.byId('building-5');
  // The plan's east gate lies 9 m from bastion 17's centre, inside its 12.5 m radius. The raised bastion would swallow the opening, so the schematic
  // gate is moved along the wall to clear it by 6 m (within the +-15 m registration error) and says so.
  const cGates = [];
  for (const g of ['plan-gate-east', 'plan-gate-west']) {
    const pg = h.byId(g), bs = BAST.map((p, i) => [toOsm(p), i + 1]).sort((a, b) => Math.hypot(a[0][0] - pg.at[0], a[0][1] - pg.at[1]) - Math.hypot(b[0][0] - pg.at[0], b[0][1] - pg.at[1]))[0];
    const clear = 12.5 + 6, d0 = Math.hypot(bs[0][0] - pg.at[0], bs[0][1] - pg.at[1]);
    if (d0 >= clear) continue;
    let best = null, bd = Infinity;
    for (let i = 0; i < W.path.length - 1; i++) for (let t = 0; t <= 1; t += 0.02) {
      const q = [W.path[i][0] + (W.path[i + 1][0] - W.path[i][0]) * t, W.path[i][1] + (W.path[i + 1][1] - W.path[i][1]) * t];
      if (Math.hypot(q[0] - bs[0][0], q[1] - bs[0][1]) < clear) continue;
      const d = Math.hypot(q[0] - pg.at[0], q[1] - pg.at[1]); if (d < bd) { bd = d; best = q; }
    }
    cGates.push({ id: `c-${g.slice(5)}`, kind: 'gate', wall: 'outline-wall', at: [+best[0].toFixed(1), +best[1].toFixed(1)], w: 4, replaces: [g], src: PLAN, ev: 'schematic', conf: 0.2,
      name: `${pg.name.split(' · ')[0]} · schematic opening, moved ${bd.toFixed(0)} m`,
      basis: `The plan gate lies ${d0.toFixed(0)} m from the centre of bastion ${bs[1]}, inside the raised bastion mass. In the constructed layer the opening is moved ${bd.toFixed(0)} m along the wall, within the plan's +-15 m registration error, so it is not buried. A 4 m opening is assumed; the plan draws no gate form.` });
  }
  T.constructed = [
    { id: 'c-wall', kind: 'wall', path: W.path, closed: true, stands_for: 'outline-wall', replaces: ['outline-wall'], thick: 3, src: W.src, ev: 'schematic', conf: 0.2,
      name: 'Perimeter wall · schematic, 14 m assumed', basis: 'Drawn on the mapped wall line. A travel source (anantamias.com) says the walls rise 45-50 ft (14-15 m) from the sea; no surveyed height was read, so 14 m is an illustrative assumption.',
      h: { v: 14, src: 'inferred', note: 'illustrative; 45-50 ft from one unverified travel page, not a survey' } },
    ...BAST.map((p, i) => ({ id: `c-bastion-${i + 1}`, kind: 'bastion', at: toOsm(p), r: 12.5, replaces: [`plan-bastion-${i + 1}`], src: PLAN, ev: 'schematic', conf: 0.2,
      name: `Bastion ${i + 1} · schematic, 15 m assumed`, basis: 'Raised on the plan\'s bastion position (about 25 m across on the plan; a travel source says about 80 ft); height is one metre above the assumed wall.',
      h: { v: 15, src: 'inferred', note: 'assumed wall 14 m plus 1 m; no bastion height read' } })),
    ...cGates,
    { id: 'c-palace', kind: 'building', poly: palace.poly, replaces: ['building-5'], src: PLAN, ev: 'schematic', conf: 0.2,
      name: 'Palace of Sidi Surul Khan · schematic mass, 16 m assumed', basis: 'Raised on the mapped palace footprint. Sohoni (via Wikipedia and a travel page) says it rose at least four storeys around a cistern; 4 storeys x 4 m is assumed.',
      h: { v: 16, src: 'inferred', note: 'assumed 4 storeys at 4 m; the 1860 fire destroyed the upper floors' } },
  ];

  T.eras = [
    { id: '1733', year: '1733', label: 'Bajirao at Rajpuri', short: '1733', lens: 'none',
      summary: 'Bajirao I camps at Rajpuri to reduce the island fort, which holds out behind its bastions and sea.',
      basis: 'The 1733 campaign is from Dighe (1944), summarised in docs/research/janjira-1733.md. The drawn fort is the 1771 plan\'s outline, bastions and gates carried back 38 years, marked inferred.',
      conjecture: 'No plan of 1733 was found. The plan of 1771 and the present OSM lines are carried back unchanged; the palace was built under Sidi Surul Khan after 1700 and the 1733 buildings are unknown.',
      sources: ['JAN-03', 'JAN-04', 'JAN-19', 'JAN-18'],
      facts: ['Bajirao I established himself at Rajpuri in 1733 for operations against Janjira; the attack depended on Angre\'s fleet, which did not come (Dighe 1944, via the 1733 note).', 'Sambhaji tried to fill the channel to the mainland in 1682 (Wikipedia).'] },
    { id: '1774', year: '1774', label: 'Dalrymple\'s plan', short: 'Siddi stronghold', lens: 'engraving',
      summary: 'The Siddi stronghold as drawn by A. Werner in 1771 and published by Dalrymple in 1774: 18 round bastions, two gates, two tanks, the palace, a mosque and the magazine on the hill.',
      basis: 'The inset "Gingerah Fort" on the plan, registered to OSM by fitting the island outline only. The plan\'s palace, citadel and two tanks fall within 3-15 m of the OSM features, which were not used in the fit.',
      conjecture: 'The plan is an engraving: positions are good to about 15 m, no heights are given, and about 80 small house blocks are not traced. The printed scale bar and the fitted scale differ by 24%; the fit is used. The sea approaches and soundings are not drawn.',
      sources: ['JAN-03', 'JAN-04', 'JAN-06', 'JAN-19'],
      facts: ['The plan\'s legend: a. The Seddee\'s house, b. The mosque, c. Two tanks, d. A large magazine on the hill, e. The two gates.', 'The plan shows 18 bastions; Wikipedia and a travel page say 19.', 'Imprint reads June 1771, A. Dalrymple; the BnF records date the two copies 1774 and 1784.'] },
    { id: 'today', year: 'Today', label: 'ASI monument', short: 'Monument', lens: 'none',
      summary: 'A protected monument reached by boat from Rajapuri, with the ruined palace, two tanks and the bastioned wall.',
      basis: 'The OSM wall line, tanks, palace and citadel, plus the bastions, gates, mosque and magazine traced from the 1771 plan.',
      conjecture: 'The plan elements are 1771 positions with the registration error above; whether each survives is not checked. Heights are unknown (kerb-high) in this evidence layer; see the constructed layer. The 1860 fire burnt more than half the buildings.',
      sources: ['JAN-03', 'JAN-04', 'JAN-19', 'JAN-21'],
      facts: ['A fire in 1860 burnt more than half the buildings in the fort and destroyed many state papers (hand level, Sohoni).', 'Only the OSM-mapped features are checked against today; the rest are plan positions.'] },
  ];
}
