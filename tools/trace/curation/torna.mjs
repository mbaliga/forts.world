// Curation for Torna Fort, Pune district, Maharashtra (batch-0 run, 2026-11-15). Evidence: docs/research/torna-pass.md.
// Tier T1 (location-only); no plan or survey was read in this run, so nothing is placed that OSM does not map. No closed fort polygon is mapped, so the scene is location-only: 2 markers, 9 paths, 5 buildings and 4 water bodies in a 1.6 km window.
import { levelInlandWaters } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'needs-plan';
export const HEADER = [
  'Torna Fort, Pune district, Maharashtra. Auto-T1 trace with light curation, tier T1 (location-only); T2 is blocked on a plan.',
  'Base: data/traces/torna.trace.json (OSM ODbL; Terrarium z15, ~30 m SRTM-derived terrain, so scarps are smoothed).',
  'No closed fort polygon is mapped, so the scene is location-only: 2 markers, 9 paths, 5 buildings and 4 water bodies in a 1.6 km window.',
];

export default function curate(T, h) {
  try { levelInlandWaters(T, h); } catch (e) { console.error('torna: levelInlandWaters skipped', e.message); }
  T.eras = [
    { id: 'today', year: 'Today', label: 'As mapped', short: 'Today', lens: 'none',
      summary: 'The site as OpenStreetMap maps it now, on Terrarium terrain.',
      basis: 'OSM ways and relations inside the window; Terrarium DEM.',
      conjecture: 'Heights are unknown (kerb-high). Missing: Any plan or survey with the Budhla, Zunjar and Bini machis, the Konkan and Hirvya gates, the Mengai temple and cisterns; an OSM outline; wall heights.',
      sources: [],
      facts: [] },
  ];
}
