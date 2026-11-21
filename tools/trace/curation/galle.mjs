// Curation for Galle Fort, Southern Province, Sri Lanka (batch-0 run, 2026-11-15). Evidence: docs/research/galle-pass.md.
// Tier T1 (outline); no plan or survey was read in this run, so nothing is placed that OSM does not map. The outline is OSM relation 8386702 (the World Heritage property). The coast, bastion wall lines, roads and the 150 building footprints nearest the centre are drawn; 396 further footprints are dropped for the size budget.
import { levelInlandWaters } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'needs-plan';
export const HEADER = [
  'Galle Fort, Southern Province, Sri Lanka. Auto-T1 trace with light curation, tier T1 (outline); T2 is blocked on a plan.',
  'Base: data/traces/galle.trace.json (OSM ODbL; Terrarium z15, ~30 m SRTM-derived terrain, so scarps are smoothed).',
  'The outline is OSM relation 8386702 (the World Heritage property). The coast, bastion wall lines, roads and the 150 building footprints nearest the centre are drawn; 396 further footprints are dropped for the size budget.',
];

export default function curate(T, h) {
  h.byId('outline').name = 'Fort outline · mapped (OSM relation 8386702)';
  try { levelInlandWaters(T, h); } catch (e) { console.error('galle: levelInlandWaters skipped', e.message); }
  T.eras = [
    { id: 'today', year: 'Today', label: 'As mapped', short: 'Today', lens: 'none',
      summary: 'The site as OpenStreetMap maps it now, on Terrarium terrain.',
      basis: 'OSM ways and relations inside the window; Terrarium DEM.',
      conjecture: 'Heights are unknown (kerb-high). Missing: The Dutch plans (Nationaal Archief / Atlas of Mutual Heritage) to place the 14 bastions by name and the VOC gates; bastion heights; the pre-1663 Portuguese layout.',
      sources: [],
      facts: [] },
  ];
}
