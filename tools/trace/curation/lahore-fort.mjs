// Curation for Lahore Fort (Shahi Qila), Lahore, Punjab, Pakistan (batch-0 run, 2026-11-15). Evidence: docs/research/lahore-fort-pass.md.
// Tier T1 (outline); no plan or survey was read in this run, so nothing is placed that OSM does not map. The outline is OSM way 105841051, about 490 x 534 m. Mapped castle_wall, picture wall, retaining walls, roads and building footprints inside the 30 m pruning band are kept.
import { levelInlandWaters } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'needs-plan';
export const HEADER = [
  'Lahore Fort (Shahi Qila), Lahore, Punjab, Pakistan. Auto-T1 trace with light curation, tier T1 (outline); T2 is blocked on a plan.',
  'Base: data/traces/lahore-fort.trace.json (OSM ODbL; Terrarium z15, ~30 m SRTM-derived terrain, so scarps are smoothed).',
  'The outline is OSM way 105841051, about 490 x 534 m. Mapped castle_wall, picture wall, retaining walls, roads and building footprints inside the 30 m pruning band are kept.',
];

export default function curate(T, h) {
  h.byId('outline').name = 'Fort outline · mapped (OSM way 105841051)';
  for (const id of ['marker-1', 'marker-5', 'marker-6']) { const m = h.byId(id); m.unreachableOk = true; m.unreachableNote = 'OSM node sits on or inside a mapped wall or building footprint, so the point cannot be walked to in the T1 scene.'; }
  try { levelInlandWaters(T, h); } catch (e) { console.error('lahore-fort: levelInlandWaters skipped', e.message); }
  T.eras = [
    { id: 'today', year: 'Today', label: 'As mapped', short: 'Today', lens: 'none',
      summary: 'The site as OpenStreetMap maps it now, on Terrarium terrain.',
      basis: 'OSM ways and relations inside the window; Terrarium DEM.',
      conjecture: 'Heights are unknown (kerb-high). Missing: A survey plan with the Alamgiri and Masti gates, the Diwan-i-Am, Moti Masjid, Sheesh Mahal and the Picture Wall dated by phase (Mughal, Sikh, British); wall heights.',
      sources: [],
      facts: [] },
  ];
}
