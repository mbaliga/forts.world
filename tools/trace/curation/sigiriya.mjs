// Curation for Sigiriya, Matale district, Sri Lanka (batch-0 run, 2026-11-15). Evidence: docs/research/sigiriya-pass.md.
// Tier T1 (outline): OSM way 23810659 (archaeological_site, bare_rock) plus mapped garden water bodies, Lion's Paw Terrace, a cliff line, roads and modern buildings. No plan was read in this run.
import { levelInlandWaters } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'needs-plan';
export const HEADER = [
  'Sigiriya, Matale district, Sri Lanka. Auto-T1 trace with light curation, tier T1 (outline); T2 is blocked on a plan.',
  'Base: data/traces/sigiriya.trace.json (OSM ODbL; Terrarium z15, ~30 m SRTM-derived terrain, so the rock face is smoothed).',
  'Modern tourist buildings and roads are as mapped now; the palace, gardens and moat of the 5th-century complex are not placed beyond mapped water bodies.',
];

export default function curate(T, h) {
  h.byId('outline').name = 'Site outline · mapped (OSM way 23810659)';
  try { levelInlandWaters(T, h); } catch (e) { console.error('sigiriya: levelInlandWaters skipped', e.message); }
  T.eras = [
    { id: 'today', year: 'Today', label: 'As mapped', short: 'Today', lens: 'none',
      summary: 'The site as OpenStreetMap maps it now, on Terrarium terrain.',
      basis: 'OSM ways and relations inside the window; Terrarium DEM.',
      conjecture: 'Heights are unknown (kerb-high) and the 30 m DEM cannot resolve the rock face. Missing: a survey plan of the palace summit, the terraced and water gardens, boulder gardens, ramparts and moat; the Mirror Wall and gate positions; dated phases.',
      sources: [],
      facts: [] },
  ];
}
