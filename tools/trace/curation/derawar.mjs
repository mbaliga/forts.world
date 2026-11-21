// Curation for Derawar Fort, Bahawalpur, Punjab, Pakistan (batch-0 run, 2026-11-15). Evidence: docs/research/derawar-pass.md.
// Tier T1 (outline+walls); no plan or survey was read in this run, so nothing is placed that OSM does not map. The outline is OSM relation 21780524 (historic=fort, Q2474542, about 223 x 205 m). 13 wall lines, 10 paths, 11 buildings and one water body are kept.
import { levelInlandWaters } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'needs-plan';
export const HEADER = [
  'Derawar Fort, Bahawalpur, Punjab, Pakistan. Auto-T1 trace with light curation, tier T1 (outline+walls); T2 is blocked on a plan.',
  'Base: data/traces/derawar.trace.json (OSM ODbL; Terrarium z15, ~30 m SRTM-derived terrain, so scarps are smoothed).',
  'The outline is OSM relation 21780524 (historic=fort, Q2474542, about 223 x 205 m). 13 wall lines, 10 paths, 11 buildings and one water body are kept.',
];

export default function curate(T, h) {
  h.byId('outline').name = 'Fort outline · mapped (OSM relation 21780524)';
  { const m = h.byId('wall-5'); m.unreachableOk = true; m.unreachableNote = 'the Abbasi Mosque enclosure (OSM way 327008237) is a closed wall with no mapped gate, so its interior cannot be walked to; no gate is invented.'; }
  try { levelInlandWaters(T, h); } catch (e) { console.error('derawar: levelInlandWaters skipped', e.message); }
  T.eras = [
    { id: 'today', year: 'Today', label: 'As mapped', short: 'Today', lens: 'none',
      summary: 'The site as OpenStreetMap maps it now, on Terrarium terrain.',
      basis: 'OSM ways and relations inside the window; Terrarium DEM.',
      conjecture: 'Heights are unknown (kerb-high). Missing: A survey plan for the bastions (the fort is commonly described as having 40), the gate, the mosque and the Nawab palace, and wall heights.',
      sources: [],
      facts: [] },
  ];
}
