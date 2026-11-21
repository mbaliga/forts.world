// Curation for Vellore Fort, Tamil Nadu (batch-0 run, 2026-11-15). Evidence: docs/research/vellore-pass.md.
// Tier T1 (outline); no plan or survey was read in this run, so nothing is placed that OSM does not map. The outline is OSM way 557512110 (273 vertices). Walls, roads, two waterways (the moat line) and building footprints are kept.
import { levelInlandWaters } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'needs-plan';
export const HEADER = [
  'Vellore Fort, Tamil Nadu. Auto-T1 trace with light curation, tier T1 (outline); T2 is blocked on a plan.',
  'Base: data/traces/vellore.trace.json (OSM ODbL; Terrarium z15, ~30 m SRTM-derived terrain, so scarps are smoothed).',
  'The outline is OSM way 557512110 (273 vertices). Walls, roads, two waterways (the moat line) and building footprints are kept.',
];

export default function curate(T, h) {
  h.byId('outline').name = 'Fort outline · mapped (OSM way 557512110)';
  try { levelInlandWaters(T, h); } catch (e) { console.error('vellore: levelInlandWaters skipped', e.message); }
  T.eras = [
    { id: 'today', year: 'Today', label: 'As mapped', short: 'Today', lens: 'none',
      summary: 'The site as OpenStreetMap maps it now, on Terrarium terrain.',
      basis: 'OSM ways and relations inside the window; Terrarium DEM.',
      conjecture: 'Heights are unknown (kerb-high). Missing: A survey plan or historic view for the bastions, the gate and drawbridge, the Jalakandeswarar temple, church and mosque phases, and moat width; wall heights.',
      sources: [],
      facts: [] },
  ];
}
