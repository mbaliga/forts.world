// Curation for Mehrangarh Fort, Jodhpur, Rajasthan (batch-0 run, 2026-11-15). Evidence: docs/research/mehrangarh-pass.md.
// Tier T1 (outline); no plan or survey was read in this run, so nothing is placed that OSM does not map. The outline is OSM way 31725311. Walls, roads, tanks and the 69 building footprints in the 40 m band are kept; the city below is cut off.
import { levelInlandWaters } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'needs-plan';
export const HEADER = [
  'Mehrangarh Fort, Jodhpur, Rajasthan. Auto-T1 trace with light curation, tier T1 (outline); T2 is blocked on a plan.',
  'Base: data/traces/mehrangarh.trace.json (OSM ODbL; Terrarium z15, ~30 m SRTM-derived terrain, so scarps are smoothed).',
  'The outline is OSM way 31725311. Walls, roads, tanks and the 69 building footprints in the 40 m band are kept; the city below is cut off.',
];

export default function curate(T, h) {
  h.byId('outline').name = 'Fort outline · mapped (OSM way 31725311)';
  try { levelInlandWaters(T, h); } catch (e) { console.error('mehrangarh: levelInlandWaters skipped', e.message); }
  T.eras = [
    { id: 'today', year: 'Today', label: 'As mapped', short: 'Today', lens: 'none',
      summary: 'The site as OpenStreetMap maps it now, on Terrarium terrain.',
      basis: 'OSM ways and relations inside the window; Terrarium DEM.',
      conjecture: 'Heights are unknown (kerb-high). Missing: A plan of the gate sequence (Jayapol, Fatehpol, Lohapol, Dedh Kamgra), palace courts (Moti Mahal, Phool Mahal) and the Rao Jodha construction phase; wall heights; the hand-built scene already in the repo is kept beside this one.',
      sources: [],
      facts: [] },
  ];
}
