// Curation for Ranthambore Fort, Sawai Madhopur district, Rajasthan (batch-0 run, 2026-11-15). Evidence: docs/research/ranthambore-pass.md.
// Tier T1 (outline); no plan or survey was read in this run, so nothing is placed that OSM does not map. The outline is OSM way 254041053 (tagged barrier=city_wall, 252 vertices), the wall circuit on the plateau, with two mapped city gates, small walls, buildings and tanks. The default site match was a tomb, so build options select the wall way.
import { levelInlandWaters } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'needs-plan';
export const HEADER = [
  'Ranthambore Fort, Sawai Madhopur district, Rajasthan. Auto-T1 trace with light curation, tier T1 (outline); T2 is blocked on a plan.',
  'Base: data/traces/ranthambore.trace.json (OSM ODbL; Terrarium z15, ~30 m SRTM-derived terrain, so scarps are smoothed).',
  'The outline is OSM way 254041053 (tagged barrier=city_wall, 252 vertices), the wall circuit on the plateau, with two mapped city gates, small walls, buildings and tanks. The default site match was a tomb, so build options select the wall way.',
];

export default function curate(T, h) {
  h.byId('outline').name = 'Fort outline · mapped (OSM way 254041053)';
  try { levelInlandWaters(T, h); } catch (e) { console.error('ranthambore: levelInlandWaters skipped', e.message); }
  T.eras = [
    { id: 'today', year: 'Today', label: 'As mapped', short: 'Today', lens: 'none',
      summary: 'The site as OpenStreetMap maps it now, on Terrarium terrain.',
      basis: 'OSM ways and relations inside the window; Terrarium DEM.',
      conjecture: 'Heights are unknown (kerb-high). Missing: A plan naming the gates (Navlakha, Hathi Pol, Ganesh Pol, Andheri), the Hammir Mahal, the Ganesh temple and the Padmala talao; wall heights; a finer DEM for the escarpment.',
      sources: [],
      facts: [] },
  ];
}
