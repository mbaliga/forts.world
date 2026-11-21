// Curation for the Red Fort (Lal Qila), Delhi (daily run 2026-11-16, queue #15). Evidence and gaps: docs/research/red-fort-pass.md.
// Plan: "Sketch plan of Delhi fort, showing the arrangement of the buildings now demolished" (Gordon Sanderson, Superintendent, Muhammadan and British
// Monuments, Northern Circle, 1912; copied from Fergusson; Commons File:Sketch plan of Delhi fort.jpg, public domain), data/plans/red-fort-q45957/Sketch_plan_of_Delhi_fort.jpg,
// registered to the OSM frame by data/plans/red-fort-q45957/registration.json (one similarity fit, plan rotated 91 degrees: plan top is east).
import { carryOver } from './_common.mjs';

export const TIER = 'T2';
export const STATUS = 'outline+walls';
export const HEADER = [
  'Red Fort, Delhi. Hand-curated trace, tier T2 (partial): two gates with barbicans, the Diwan-i-Amm, Diwan-i-Khas, Rang Mahal, Mumtaz Mahal, Moti Masjid and other palace blocks, the Hayat Bakhsh and Mehtab gardens and three corner burjs placed from the Sanderson sketch plan registered to OSM (about +-30 m); everything else is mapped (T1).',
  'Base: data/traces/red-fort-q45957.trace.json (OSM ODbL; Terrarium z15, ~30 m SRTM-derived terrain; rebuilt with a +-800 m window because the 450 m default cut off the north half). The plan wall and the mapped wall coincide to about 10-30 m.',
  'Plan elements carry src plan:sanderson-1912#delhi-fort and conf 0.25-0.4. Wall heights (18 m river side, 33 m city side) are from Wikipedia (secondary) and appear only in the schematic constructed layer.',
];

// plan pixel on the 2000-px-wide rendering (original 4645 px / 2.3225) -> OSM metres: o = a*(px - i*py) + b
const A = [-0.00837438, -0.48349175], B = [360.2912, 527.8006];
const toOsm = (p) => { const re = A[0] * p[0] + A[1] * p[1], im = A[1] * p[0] - A[0] * p[1]; return [+(re + B[0]).toFixed(1), +(im + B[1]).toFixed(1)]; };
const nearestOn = (p, path) => { let best = [1e9, null]; for (let i = 0; i < path.length - 1; i++) { const a = path[i], b = path[i + 1], dx = b[0] - a[0], dy = b[1] - a[1], t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy || 1))), q = [a[0] + dx * t, a[1] + dy * t], d = Math.hypot(p[0] - q[0], p[1] - q[1]); if (d < best[0]) best = [d, q]; } return best; };
const PLAN = 'plan:sanderson-1912#delhi-fort';
const WALLS = ['wall-168', 'wall-178', 'wall-326', 'wall-432'];

export default function curate(T, h) {
  const wallEls = WALLS.map((id) => h.byId(id));
  const snap = (o) => { let best = [1e9, null, null]; for (const w of wallEls) { const [d, q] = nearestOn(o, w.path); if (d < best[0]) best = [d, q, w.id]; } return best; };

  const gates = [['lahore', 'Lahore Gate (plan no. 2, west)', [920, 1215]], ['delhi', 'Delhi Gate (plan no. 3, south)', [1620, 865]]];
  const planIds = [];
  for (const [id, name, px] of gates) {
    let o = toOsm(px), [dist, q, wid] = snap(o);
    if (id === 'lahore') { q = [-203.5, 141]; wid = 'wall-432'; dist = Math.hypot(o[0] - q[0], o[1] - q[1]); }
    h.add({ id: `plan-gate-${id}`, kind: 'gate', wall: wid, at: [+q[0].toFixed(1), +q[1].toFixed(1)], src: PLAN, ev: 'documented', conf: 0.35, name: `${name} · position +-30 m`,
      note: `Plan position registered to OSM (${dist.toFixed(0)} m from the nearest mapped wall fragment; wall ${wid}) and snapped to it (Lahore Gate: placed in the 44 m gap in the mapped west wall between the ends of wall-168 and wall-432, which is the passage between the barbican arms). The plan gives the barbican footprint, not the gate passage, so a plain 3 m opening is cut.` });
    planIds.push(`plan-gate-${id}`);
  }
  const rect = (x0, y0, x1, y1) => [[x0, y0], [x1, y0], [x1, y1], [x0, y1]];
  const blocks = [
    ['lahore-barbican', 'Lahore Gate barbican (plan no. 1)', rect(840, 1215, 1040, 1340), 'gate'],
    ['delhi-barbican', 'Delhi Gate barbican (plan no. 1)', rect(1625, 740, 1730, 935), 'gate'],
    ['diwan-i-amm', 'Diwan-i-Amm hall (plan no. 6)', rect(850, 385, 1010, 470), 'hall'],
    ['diwan-i-amm-court', 'Diwan-i-Amm court (plan no. 6)', rect(742, 390, 1118, 655), 'court'],
    ['naubat-khana', 'Naubat Khana gate (plan no. 5)', rect(890, 650, 960, 715), 'gate'],
    ['chatta-chowk', 'Chhatta Chowk arcaded street (plan no. 22)', rect(890, 955, 975, 1195), 'street'],
    ['rang-mahal', 'Rang Mahal (plan no. 10)', rect(860, 125, 1040, 355), 'palace'],
    ['mumtaz-mahal', 'Mumtaz Mahal (plan no. 8)', rect(1115, 140, 1235, 260), 'palace'],
    ['diwan-i-khas', 'Diwan-i-Khass (plan no. 13)', rect(585, 130, 745, 215), 'hall'],
    ['hammam', 'Hammam (plan no. 14)', rect(505, 130, 575, 200), 'bath'],
    ['moti-masjid', 'Moti Masjid (plan no. 15)', rect(500, 215, 580, 300), 'mosque'],
    ['moti-mahal', 'Moti Mahal (plan no. 16)', rect(290, 130, 380, 215), 'palace'],
    ['hayat-bakhsh', 'Hayat Bakhsh garden (plan no. 18)', rect(165, 205, 500, 545), 'garden'],
    ['mehtab-bagh', 'Mehtab Bagh (plan no. 20)', rect(165, 545, 500, 765), 'garden'],
  ];
  for (const [k, name, poly, use] of blocks) {
    h.add({ id: `plan-${k}`, kind: 'building', poly: poly.map(toOsm), use, src: PLAN, ev: 'documented', conf: 0.3, name: `${name} · footprint from plan, +-30 m`,
      note: 'Block outline read off the Sanderson sketch plan (copied from Fergusson; the plan shows the arrangement including buildings since demolished) and registered to OSM. Garden blocks are drawn as outlines of enclosures, not as planting. No heights on the plan.' });
    planIds.push(`plan-${k}`);
  }
  const burjs = [['shah-burj', 'Shah Burj (plan no. 17)', [150, 108]], ['musamman-burj', 'Musamman Burj (plan no. 11)', [820, 100]], ['asad-burj', 'Asad Burj (plan no. 7)', [1500, 130]]];
  for (const [k, name, px] of burjs) {
    h.add({ id: `plan-mark-${k}`, kind: 'marker', at: toOsm(px), src: PLAN, ev: 'documented', conf: 0.3, name: `${name} · position +-30 m`,
      note: 'Corner or river-front burj at its drawn position; the plan gives no height. Asad Burj and Shah Burj are also control points of the registration.' });
    planIds.push(`plan-mark-${k}`);
  }
  const sealed = (id, why) => { const m = h.byId(id); m.unreachableOk = true; m.unreachableNote = why; };
  for (const k of ['shah-burj', 'musamman-burj', 'asad-burj']) sealed(`plan-mark-${k}`, 'the burj stands on the wall line, which is solid in the schematic layer; no stair or door is mapped, so none is invented.');
  sealed('plan-lahore-barbican', 'the plan footprint overlaps the mapped barbican wall ring (OSM way 320353009 area), whose interior has no mapped opening; no door is invented.');
  sealed('plan-diwan-i-amm', 'the registered hall footprint overlaps a mapped OSM building or enclosure with no mapped entrance, so it cannot be walked to; no door is invented.');
  for (const id of ['building-56', 'marker-2', 'marker-3']) sealed(id, 'mapped OSM element that falls inside or against a closed mapped wall with no mapped opening; no gate is invented.');
  // Blocks that fall inside mapped sealed enclosures or modern buildings cannot all be walked into; the smoke test decides which, see unreachable list in the research pass.

  const mapped = ['outline', ...WALLS, 'wall-170', 'wall-182'].filter((id) => T.elements.some((e) => e.id === id));
  const keep = [...mapped, ...planIds];
  const restore = Object.fromEntries(planIds.map((id) => { const e = h.byId(id); return [id, { ev: 'documented', conf: e.conf, name: e.name, note: e.note }]; }));
  carryOver(T, '1912', keep, { note: 'present mapped wall assumed unchanged since the 1912 plan; the plan shows the same circuit', modify: restore });

  T.constructed = WALLS.map((id) => {
    const w = h.byId(id), east = w.path.reduce((s, p) => s + p[0], 0) / w.path.length > 150 || id === 'wall-326';
    const hv = east ? 18 : 33;
    return { id: `c-${id}`, kind: 'wall', path: w.path, closed: !!w.closed, stands_for: id, replaces: [id], thick: 6, src: w.src, ev: 'schematic', conf: 0.2,
      name: `Fort wall ${id} · schematic, ${hv} m assumed`, basis: `Drawn on the mapped wall fragment. Wikipedia (secondary) gives the walls as 18 m on the river side and 33 m on the city side; this fragment is taken as ${east ? 'river-facing (east/north)' : 'city-facing (west/south)'}, and the thickness is an assumption.`,
      h: { v: hv, src: 'inferred', note: `${hv} m from Wikipedia (secondary), assigned by facing; no survey section was read` } };
  });

  T.eras = [
    { id: '1912', year: '1912', label: 'Sanderson sketch plan', short: 'Plan 1912', lens: 'none',
      summary: 'The fort as recorded on the 1912 sketch plan, which also shows the arrangement of buildings later demolished: Lahore and Delhi gates with barbicans, the Diwan-i-Amm court, the river-front palaces and the Hayat Bakhsh and Mehtab gardens.',
      basis: 'Gate barbicans, halls, palaces, gardens and the three burjs are registered from the plan (public domain); the mapped wall circuit is carried back.',
      conjecture: 'The plan is a redrawn sketch (copied from Fergusson), registered to about 30 m, with no heights or gate passages; it covers the palace area, not the whole northern end, so the north part of the fort has no plan content. It depicts buildings demolished after 1857 together with those standing in 1912.',
      sources: [], facts: ['Reference list 1-22 on the plan: barbicans, Lahore Gate, Delhi Gate, Naubat Khana, Diwan-i-Amm, Asad Burj, Mumtaz Mahal, Rang Mahal, Musamman Burj, Diwan-i-Khass, Hammam, Moti Masjid, Moti Mahal, Shah Burj, Hayat Bakhsh, Sawan and Bhadon pavilions, Mehtab Bagh, Nahr-i-Bahisht, Chatta Chauk.', 'Wikipedia: commissioned 12 May 1638, completed 6 April 1648; Lahori Gate faces Lahore; Delhi Gate is the southern public entrance.'] },
    { id: 'today', year: 'Today', label: 'Monument', short: 'Monument', lens: 'none',
      summary: 'A protected monument: OSM wall fragments, buildings and roads, with the plan-registered gates, halls and gardens on top.',
      basis: 'OSM wall fragments, buildings, markers and roads, plus the plan elements.',
      conjecture: 'Plan elements are 1912 positions with about 30 m registration error; several drawn buildings no longer exist (the plan says so) and are not separated from those that do. Heights are unknown (kerb-high) on the documented layer; Wikipedia gives walls 18 m (river side) to 33 m (city side), shown only in the schematic layer. Terrain is ~30 m DEM.',
      sources: [], facts: ['Wikipedia: 2.41 km of defensive walls.'] },
  ];
}
