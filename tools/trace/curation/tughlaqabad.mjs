// Curation for Tughlaqabad Fort, South Delhi (batch-0 run, 2026-11-15). Evidence: docs/research/tughlaqabad-pass.md.
// Tier T1 (outline); no plan or survey was read in this run, so nothing is placed that OSM does not map. The outline is OSM way 102684251 (castle, city_wall tag, 143 vertices). The wall lines, a mapped baoli, city gates and roads within 40 m are kept; the dense modern housing around the fort is pruned.
import { levelInlandWaters } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'needs-plan';
export const HEADER = [
  'Tughlaqabad Fort, South Delhi. Auto-T1 trace with light curation, tier T1 (outline); T2 is blocked on a plan.',
  'Base: data/traces/tughlaqabad.trace.json (OSM ODbL; Terrarium z15, ~30 m SRTM-derived terrain, so scarps are smoothed).',
  'The outline is OSM way 102684251 (castle, city_wall tag, 143 vertices). The wall lines, a mapped baoli, city gates and roads within 40 m are kept; the dense modern housing around the fort is pruned.',
];

export default function curate(T, h) {
  h.byId('outline').name = 'Fort outline · mapped (OSM way 102684251)';
  try { levelInlandWaters(T, h); } catch (e) { console.error('tughlaqabad: levelInlandWaters skipped', e.message); }
  T.eras = [
    { id: 'today', year: 'Today', label: 'As mapped', short: 'Today', lens: 'none',
      summary: 'The site as OpenStreetMap maps it now, on Terrarium terrain.',
      basis: 'OSM ways and relations inside the window; Terrarium DEM.',
      conjecture: 'Heights are unknown (kerb-high). Missing: An ASI survey plan with the citadel, Vijay Mandal, the palace area, 52 gates and the causeway to the tomb of Ghiyath al-Din; wall heights; the lake level.',
      sources: [],
      facts: [] },
  ];
}
