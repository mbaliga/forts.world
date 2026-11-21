// Curation for Fatehpur Sikri, Agra district, Uttar Pradesh (daily run 2026-11-17, queue #2). Evidence and gaps: docs/research/fatehpur-sikri-pass.md.
// Plan: "Fathpur-Sikri, General Plan of the City" (V. A. Smith, Akbar the Great Mogul, 1917, Commons File:General Plan of Fatehpur Sikri City India 1917.jpg, 'No restrictions'),
// data/plans/fatehpur-sikri/General_Plan_of_Fatehpur_Sikri_City_India_1917.jpg, registered to the OSM frame by data/plans/fatehpur-sikri/registration.json (one similarity fit, 8 control points).
import { levelInlandWaters, carryOver } from './_common.mjs';

export const TIER = 'T2';
export const STATUS = 'outline+walls';
export const HEADER = [
  'Fatehpur Sikri, Agra district, Uttar Pradesh. Hand-curated trace, tier T2 (partial): the Jami Masjid / Salim Chishti court, Kashmir Serai, the Mint caravanserai and ten numbered palace sites placed from the 1917 plan registered to OSM (about +-30 m); everything else is mapped (T1).',
  'Base: data/traces/fatehpur-sikri.trace.json (OSM ODbL; Terrarium z15, ~30 m SRTM-derived terrain). The plan wall circuit and all plan gates except two fall outside the +-900 m terrain window and are not placed.',
  'Plan elements carry src plan:smith-1917#fatehpur-sikri-city and conf 0.25-0.35. No wall height was read from a source, so there is no constructed layer and all heights stay unknown (kerb-high).',
];

// plan pixel in ORIGINAL 2896x1632 image (px right, py down) -> OSM metres: z = px - i*py ; o = a*z + b   (data/plans/fatehpur-sikri/registration.json)
const A = [1.13015, 0.87695], B = [-1934.85, 23.71];
const toOsm = (p) => { const re = A[0] * p[0] + A[1] * p[1], im = A[1] * p[0] - A[0] * p[1]; return [+(re + B[0]).toFixed(1), +(im + B[1]).toFixed(1)]; };
const PLAN = 'plan:smith-1917#fatehpur-sikri-city';

export default function curate(T, h) {
  try { levelInlandWaters(T, h); } catch (e) { console.error('fatehpur-sikri: levelInlandWaters skipped', e.message); }
  const rect = (x0, y0, x1, y1) => [[x0, y0], [x1, y0], [x1, y1], [x0, y1]];
  const planIds = [];
  const blocks = [
    ['kashmir-serai', 'Kashmir Serai (plan no. 2, walled square)', rect(1415, 475, 1495, 545), 'caravanserai'],
    ['mint', 'Mint / caravanserai (plan no. 6, walled square)', rect(1747, 610, 1853, 712), 'caravanserai'],
  ];
  for (const [k, name, poly, use] of blocks) {
    h.add({ id: `plan-${k}`, kind: 'building', poly: poly.map(toOsm), use, src: PLAN, ev: 'documented', conf: 0.3, name: `${name} · footprint from plan, +-35 m`,
      note: 'Outline read off the 1917 plan (printed as a solid black square) and registered to OSM; the plan shows no courtyard, gate or height, and its scale reads about 7% off its printed bar.' });
    planIds.push(`plan-${k}`);
  }
  const marks = [
    ['jami-masjid', 'Jami Masjid with Salim Chishti tomb (plan no. 1)', [1318, 680]], ['panch-mahal', 'Panch Mahal (plan no. 4)', [1605, 640]],
    ['jodh-bai', "Jodh Bai's Palace (plan no. 7)", [1515, 677]], ['sultana', "Sultana's Apartment (plan no. 8)", [1635, 678]], ['treasury', 'Treasury (plan no. 10)', [1790, 735]],
    ['naubat-khana', 'Naubat Khana (plan no. 11)', [1955, 740]], ['baradari-12', 'Baradari (plan no. 12)', [2075, 640]], ['daftar-khana', 'Daftar Khana (plan no. 22)', [1565, 740]],
    ['stables', 'Stables (plan no. 15)', [1490, 640]], ['abul-fazl', "Abul Fazl's House (plan no. 16)", [1385, 652]],
  ];
  for (const [k, name, px] of marks) {
    h.add({ id: `plan-mark-${k}`, kind: 'marker', at: toOsm(px), src: PLAN, ev: 'documented', conf: 0.25, name: `${name} · label position, +-40 m`,
      note: 'Only the numbered legend position is placed; at 1917 plan scale the building is a few pixels across and has no separable footprint. Some labels fall inside mapped OSM buildings; no door is invented.' });
    planIds.push(`plan-mark-${k}`);
  }
  for (const id of planIds.filter((i) => i.startsWith('plan-mark-'))) { const m = h.byId(id); m.unreachableOk = true; m.unreachableNote = 'plan label position may fall inside a mapped building or wall with no mapped entrance; no door is invented.'; }
  for (const id of planIds.filter((i) => !i.startsWith('plan-mark-'))) { const m = h.byId(id); m.unreachableOk = true; m.unreachableNote = 'walled square read from the plan; no gate is shown on the plan, so none is cut and the interior cannot be walked to.'; }

  const mapped = T.elements.filter((e) => e.ev === 'mapped').map((e) => e.id);
  const keep = [...mapped, ...planIds];
  const restore = Object.fromEntries(planIds.map((id) => { const e = h.byId(id); return [id, { ev: 'documented', conf: e.conf, name: e.name, note: e.note }]; }));
  carryOver(T, '1917', keep, { note: 'present mapped line assumed unchanged since 1917; the 1917 plan shows the same wall circuit and palace layout', modify: restore });

  T.eras = [
    { id: '1917', year: '1917', label: 'Smith general plan', short: 'Smith 1917', lens: 'none',
      summary: 'The palace-city as drawn on the 1917 general plan: Jami Masjid court, Kashmir Serai and the Mint caravanserai as black squares, the palace group with its numbered buildings, the walled city and gates beyond the window.',
      basis: 'Two caravanserai footprints and ten numbered sites are registered from the plan (Commons, no restrictions); the mapped wall fragments and buildings are carried back.',
      conjecture: 'The plan is a small book plate: registration is good to about 30 m at the palace core and worse towards the edge, the scale reads about 7% off its printed bar, and no heights, gate forms or courtyard detail are shown. The wall circuit and seven of the nine named gates fall outside the terrain window and are not placed.',
      sources: [], facts: ['Plan legend numbers 1-26 (Salim Chishti\'s Tomb to Tomb and Masjid); named gates: Ajmir, Chor, Tehra, Gwalior (Dholpur), Chodanpol, Birbal, Agra, Lal and Delhi.', 'Printed note on the plate: scale of feet, 0-4000.'] },
    { id: 'today', year: 'Today', label: 'As mapped', short: 'Today', lens: 'none',
      summary: 'The site as OpenStreetMap maps it now, with the plan-registered blocks and markers shown on top.',
      basis: 'OSM ways and relations inside the window; Terrarium DEM; the 1917 plan elements, not checked against present ground.',
      conjecture: 'Heights are unknown (kerb-high). Terrain is ~30 m DEM so scarps are smoothed. Missing: a measured ASI survey of the palace group, the wall circuit inside the window with dated gates, and sourced wall heights.',
      sources: [], facts: [] },
  ];
}
