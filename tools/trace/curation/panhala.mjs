// Curation for Panhala Fort, Kolhapur district, Maharashtra (batch-0 run, 2026-11-15). Evidence: docs/research/panhala-pass.md.
// Tier T1 (outline); no plan or survey was read in this run, so nothing is placed that OSM does not map. The outline is OSM way 120880303 (36 vertices). Mapped markers (Teen Darwaza, Sajja Kothi, North Gate), roads and six buildings are kept; no wall line is mapped, so the scene is outline-only.
import { levelInlandWaters } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'needs-plan';
export const HEADER = [
  'Panhala Fort, Kolhapur district, Maharashtra. Auto-T1 trace with light curation, tier T1 (outline); T2 is blocked on a plan.',
  'Base: data/traces/panhala.trace.json (OSM ODbL; Terrarium z15, ~30 m SRTM-derived terrain, so scarps are smoothed).',
  'The outline is OSM way 120880303 (36 vertices). Mapped markers (Teen Darwaza, Sajja Kothi, North Gate), roads and six buildings are kept; no wall line is mapped, so the scene is outline-only.',
];

export default function curate(T, h) {
  h.byId('outline').name = 'Fort outline · mapped (OSM way 120880303)';
  try { levelInlandWaters(T, h); } catch (e) { console.error('panhala: levelInlandWaters skipped', e.message); }
  T.eras = [
    { id: 'today', year: 'Today', label: 'As mapped', short: 'Today', lens: 'none',
      summary: 'The site as OpenStreetMap maps it now, on Terrarium terrain.',
      basis: 'OSM ways and relations inside the window; Terrarium DEM.',
      conjecture: 'Heights are unknown (kerb-high). Missing: A plan with the wall circuit, Teen Darwaza, Char Darwaza, Andher Bavdi, granaries and the Pavangad outwork; wall heights; the 1660 siege lines.',
      sources: [],
      facts: [] },
  ];
}
