// Curation for Gwalior Fort (batch 1, first T2 attempt). Evidence and conflicts: docs/research/gwalior-pass.md.
// Plan: Cunningham's "Gwalior" map (Gwalior State Gazetteer 1908), data/plans/gwalior/Map_of_Gwalior_Fort.jpg, registered to the OSM
// frame by data/plans/gwalior/registration.json (two local similarity fits, blended between plan y 800 and 1100).
import { carryOver } from './_common.mjs';

export const TIER = 'T2';
export const STATUS = 'outline+walls';
export const HEADER = [
  'Gwalior Fort, Madhya Pradesh. Hand-curated trace, tier T2 for the gates and palace blocks (traced from the Cunningham 1908 plan, registered to OSM, +-50-100 m), T1 for everything else.',
  'Base: data/traces/gwalior.trace.json (OSM ODbL; Terrarium z15, ~30 m SRTM-derived; whole fort, bounds +-1470 m, pruned to the fort and its immediate edge).',
  'Plan elements carry src plan:cunningham-1908#gwalior and conf 0.3-0.4. The registration is two local fits (south: Suraj Kund, Gangola Talao; north: Man Mandir, Johar Talao) because the sketch is straightened; gates are snapped to the mapped scarp wall.',
  'The constructed (schematic) layer in `constructed[]` is drawn from written descriptions with assumed heights, shown only in the `<era>~built` eras. Documented heights: none; every mapped wall and building is a kerb-high plan line.',
];

// registration (data/plans/gwalior/registration.json); plan pixels (x, y down) -> OSM metres
const FIT = {
  north: { a: [1.139528, -0.335054], b: [-449.7508, 1871.2001] },
  south: { a: [1.294021, 0.054578], b: [-1103.6457, 1517.706] },
};
const cmul = (a, b) => [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
const apply = (f, p) => { const z = cmul(f.a, [p[0], -p[1]]); return [z[0] + f.b[0], z[1] + f.b[1]]; };
const toOsm = (p) => { const w = Math.min(1, Math.max(0, (p[1] - 800) / 300)), n = apply(FIT.north, p), s = apply(FIT.south, p); return [+(n[0] * (1 - w) + s[0] * w).toFixed(1), +(n[1] * (1 - w) + s[1] * w).toFixed(1)]; };
const nearestOn = (p, path) => { let best = [1e9, null]; for (let i = 0; i < path.length - 1; i++) { const a = path[i], b = path[i + 1], dx = b[0] - a[0], dy = b[1] - a[1], t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy || 1))), q = [a[0] + dx * t, a[1] + dy * t], d = Math.hypot(p[0] - q[0], p[1] - q[1]); if (d < best[0]) best = [d, q]; } return best; };
const inPoly = (x, y, poly) => { let c = false; for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) { const [xi, yi] = poly[i], [xj, yj] = poly[j]; if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) c = !c; } return c; };
const PLAN = 'plan:cunningham-1908#gwalior';

export default function curate(T, h) {
  const outline = h.byId('outline').poly;
  const d2 = (p) => { let m = 1e9; for (let i = 0; i < outline.length; i++) { const a = outline[i], b = outline[(i + 1) % outline.length], dx = b[0] - a[0], dy = b[1] - a[1], t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy || 1))); m = Math.min(m, Math.hypot(p[0] - a[0] - dx * t, p[1] - a[1] - dy * t)); } return m; };
  const pts = (e) => e.poly || e.path || [e.at];
  // Prune the city: keep what lies inside the OSM outline, or (roads, buildings, walls, water) within 25 m of it. Waterways, far zones and
  // the far tomb marker go. The outline itself is kept as the generous mapped property outline.
  const drop = [];
  for (const e of T.elements) {
    if (e.id === 'outline') continue;
    const P = pts(e), inside = P.some((p) => inPoly(p[0], p[1], outline)), near = Math.min(...P.map(d2)) < 25;
    const keep = e.kind === 'marker' ? inside : (e.kind === 'waterway' || e.id.startsWith('sea') ? false : inside || near);
    if (!keep) drop.push(e.id);
  }
  h.remove(...drop);

  const W = h.byId('wall-1549'); W.name = 'Scarp wall line · mapped (OSM way 1500161570), elevation unknown'; W.closed = true;
  h.byId('marker-3').name = 'Man Singh Palace (Man Mandir)';

  // Plan elements: gates snapped to the mapped wall, palace blocks as footprints.
  const gates = [['gate-1', 'Alamgiri Gate (plan no. 1)', [1053, 333]], ['gate-2', 'Hindola Gate (plan no. 2)', [1043, 373]], ['gate-3', 'Bhairon Gate (plan no. 3)', [1035, 423]],
    ['gate-4', 'Ganes Gate (plan no. 4)', [1013, 530]], ['gate-5', 'Lakshman Gate (plan no. 5)', [1027, 587]], ['gate-6', 'Hathiya Gate (plan no. 6)', [910, 753]],
    ['gate-7', 'Hawa Gate (plan no. 7)', [853, 757]], ['gate-dondha', 'Dondha Gate (plan label)', [660, 580]]];
  const planIds = [];
  for (const [id, name, px] of gates) {
    const o = toOsm(px), [dist, q] = nearestOn(o, W.path);
    h.add({ id: `plan-${id}`, kind: 'gate', wall: 'wall-1549', at: [+q[0].toFixed(1), +q[1].toFixed(1)], src: PLAN, ev: 'documented', conf: 0.3, name: `${name} · position +-80 m`,
      note: `Plan position registered to OSM (${dist.toFixed(0)} m from the mapped scarp wall) and snapped to the wall. The gate form, width and passage are not on the plan, so a plain 3 m opening is cut; real position is uncertain by about 80 m.` });
    planIds.push(`plan-${id}`);
  }
  const rect = (x0, y0, x1, y1) => [[x0, y0], [x1, y0], [x1, y1], [x0, y1]];
  const blocks = [['A', 'Shah Jahani palace (plan A)', rect(863, 433, 927, 483)], ['B', 'Jahangiri palace (plan B)', rect(863, 483, 927, 530)], ['C', 'Karan Mandir (plan C)', rect(838, 517, 860, 560)],
    ['D', 'Vikramaditya palace (plan D)', rect(857, 530, 927, 617)], ['E', 'Man Mandir (plan E)', rect(863, 617, 910, 730)], ['F', 'Gujari Mahal (plan F)', [[927, 357], [977, 317], [1017, 363], [970, 393]]]];
  for (const [k, name, poly] of blocks) {
    h.add({ id: `plan-palace-${k}`, kind: 'building', poly: poly.map(toOsm), use: 'palace', src: PLAN, ev: 'documented', conf: 0.35, name: `${name} · footprint from plan, +-60 m`,
      note: 'Block outline read off the Cunningham plan and registered to OSM; outline shape and position are approximate, interior and height are not shown on the plan.' });
    planIds.push(`plan-palace-${k}`);
  }

  // Historic eras: documented plan elements are the 1860s state; carried back they are inferred. Roads and modern buildings are dropped.
  const mapped = ['outline', 'wall-1549', 'marker-1', 'marker-3', 'marker-4', 'marker-5', 'water-1528', 'water-1530', 'water-1531', 'water-1532', 'water-1482'].filter((id) => T.elements.some((e) => e.id === id));
  const keep = [...mapped, ...planIds];
  const restore = Object.fromEntries(planIds.map((id) => { const e = h.byId(id); return [id, { ev: 'documented', conf: e.conf, name: e.name, note: e.note }]; }));
  carryOver(T, '1780', keep, { note: 'present mapped line assumed unchanged since 1780; the plan itself dates from the 1860s' });
  carryOver(T, '1868', keep, { note: 'present mapped line assumed unchanged since 1868', modify: restore });

  // Constructed (schematic) layer: raised from the plan footprints and a few written descriptions. All heights are assumptions with their rule.
  const rule3 = 'assumed three storeys at 4 m; no source read gives this palace\'s height';
  T.constructed = [
    { id: 'c-wall', kind: 'wall', path: W.path, closed: true, stands_for: 'wall-1549', replaces: ['wall-1549'], thick: 2.4, src: W.src, ev: 'schematic', conf: 0.2,
      name: 'Scarp wall · schematic, 8 m assumed', basis: 'Drawn on the mapped scarp wall line. The sources read give no wall height (Wikipedia gives only 11 m for the fort above the terrain); 8 m is an illustrative assumption.',
      h: { v: 8, src: 'inferred', note: 'illustrative; Wikipedia 11 m is the fort above terrain, not a wall height' } },
    ...blocks.map(([k, name, poly]) => ({ id: `c-palace-${k}`, kind: 'building', poly: poly.map(toOsm), replaces: k === 'E' ? [`plan-palace-E`, 'marker-3'] : [`plan-palace-${k}`], src: PLAN, ev: 'schematic', conf: 0.2,
      name: `${name.replace(/ \(plan .\)/, '')} · schematic mass, ${k === 'F' ? 10 : 12} m assumed`, basis: `Raised on the plan footprint (Cunningham 1908), which names the palace; ${rule3}.`,
      h: { v: k === 'F' ? 10 : 12, src: 'inferred', note: k === 'F' ? 'assumed two to three storeys; no height read' : rule3 } })),
    { id: 'c-teli', kind: 'building', at: T.elements.find((e) => e.id === 'marker-4').at, w: 18, d: 12, rot: 0, src: 'osm:node/1109061982', ev: 'schematic', conf: 0.2,
      name: 'Teli ka Mandir · schematic tower, 25 m', basis: 'Wikipedia describes Teli ka Mandir as a masonry tower of 25 m with a barrel-vaulted roof; the 18 x 12 m base and its orientation are assumed, the position is the OSM monument node.',
      h: { v: 25, src: 'inferred', note: '25 m from Wikipedia (secondary); base footprint assumed' } },
  ];
  const g6 = h.byId('plan-gate-6').at;
  for (const [i, dx] of [[1, -6], [2, 6]]) T.constructed.push({ id: `c-hathiya-tower-${i}`, kind: 'tower', at: [+(g6[0] + dx).toFixed(1), g6[1]], r: 3.5, src: PLAN, ev: 'schematic', conf: 0.15,
    name: `Hathiya Gate tower ${i} · schematic, 10 m assumed`, basis: 'Wikipedia says the Hathi Pol has cylindrical towers topped with cupola domes; taking plan gate no. 6 (Hathiya) as that gate is an assumption, and the tower positions flank the snapped gate by 6 m.',
    h: { v: 10, src: 'inferred', note: 'illustrative height; no figure read' } });

  T.eras = [
    { id: '1780', year: '1780', label: 'Popham\'s escalade', short: 'Night escalade', lens: 'none',
      summary: 'Before dawn on 3-4 August 1780 Company troops under Captain Popham escalade the rock; the fort then passes to the Rana of Gohad.',
      basis: 'The date is from Wikipedia; the plan of the 1860s marks "P. Popham\'s Escalade" by the Gargaj gate on the south-west. Mapped lines and the plan\'s gates and palaces are carried back.',
      conjecture: 'No plan of 1780 was found. Everything drawn is the present mapped scarp wall and tanks plus the 1860s plan\'s gates and palaces carried back and marked inferred. The place of the escalade is not drawn.',
      sources: ['GWA-28', 'GWA-29', 'GWA-30', 'GWA-08', 'GWA-09', 'GWA-10'],
      facts: ['Popham\'s escalade: 3 August 1780 (Wikipedia; the hand level gave 4 August), marked "P" on the plan near the Gargaj gate at the south-west; not placed.', 'Gohad Rana restored 1780; Scindia recaptured about 1784 (Wikipedia).'] },
    { id: '1868', year: '1868', label: 'Cunningham\'s survey era', short: 'British garrison', lens: 'none',
      summary: 'A British garrison holds the rock after 1858; Cunningham\'s survey of 1862-65 records the gates, palaces and tanks as drawn on his plan.',
      basis: 'Gates 1-7, the Dondha gate and palace blocks A-F are read from Cunningham\'s plan (published in the 1908 Gazetteer, public domain) and registered to OSM; the plan dates from his 1862-65 reports.',
      conjecture: 'The plan is a straightened sketch about 6% stretched: positions are good to about 35 m near the tanks and 50-100 m in the north, so gates are snapped to the mapped wall and flagged. The wall height, gate form and palace heights are not on the plan.',
      sources: ['GWA-28', 'GWA-29', 'GWA-30', 'GWA-16', 'GWA-17', 'GWA-18'],
      facts: ['British takeover June 1858; handed to the Scindias 1886 (Wikipedia).', 'Teli ka Mandir refurbished 1881-83, after this date (Wikipedia).', 'The plan also shows the Sas-bhar temples, Dhobi, Ram and Chedi tals, the Urwahi and rock-cut statue groups, Badalgarh and Gen. White\'s breach: not yet traced.'] },
    { id: 'today', year: 'Today', label: 'Monument and school', short: 'Monument', lens: 'none',
      summary: 'A protected monument with the Scindia School on the plateau; roads, buildings and markers are the present OpenStreetMap.',
      basis: 'The OSM scarp wall, tanks, markers, buildings and roads inside the fort, plus the gates and palace blocks traced from the 1860s plan.',
      conjecture: 'The plan elements are 1860s positions with the registration error above; whether each survives is not checked. Heights are unknown (kerb-high) in this evidence layer; see the constructed layer for illustrated heights. Terrain is ~30 m DEM.',
      sources: ['GWA-28', 'GWA-29', 'GWA-30', 'GWA-22', 'GWA-24', 'GWA-25'],
      facts: ['Scindia School founded 1897 on the fort (Wikipedia).', 'Wikipedia lists Alamgiri, Ganesh, Chaturbhuj, Urvai, Laxman, Badal and Hathi Pol as the seven gateways; the plan numbers seven different names, and the match between the lists is not established.'] },
  ];
}
