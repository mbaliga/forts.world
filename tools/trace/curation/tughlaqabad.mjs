// Curation for Tughlaqabad Fort, South Delhi. Evidence: docs/research/tughlaqabad-pass.md.
// ASI inventories the city, palace area and citadel; it describes 10–15 m rubble walls with bastions and gates. The mapped OSM outline is retained; no gate positions are inferred from road intersections.
import { levelInlandWaters, bastionRing } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'outline+schematic';
export const HEADER = [
  'Tughlaqabad Fort, South Delhi. T1 mapped trace plus a separate constructed view using the ASI inventory and historical wall-height description.',
  'Base: data/traces/tughlaqabad.trace.json (OSM ODbL; Terrarium z15, ~30 m SRTM-derived terrain, so scarps are smoothed).',
  'The outline is OSM way 102684251 (castle, city_wall tag, 143 vertices). Mapped wall lines, a baoli, waterways and roads remain. The tinted constructed view raises the mapped perimeter and adds schematic bastions; road crossings are not treated as gates.',
  'ASI describes Tughluqabad as roughly octagonal, with a 6.5 km perimeter and 10–15 m rubble walls with bastions and gates at intervals. The older Delhi District gazetteer describes the southern wall at 40 ft with a 7 ft parapet and another 15 ft wall behind it. These are textual sources, not registered sections.',
];

export default function curate(T, h) {
  T.sources.push(
    { id: 'TUG-01', kind: 'asi-inventory', title: 'ASI inventory: Walls, gateways, bastions and internal buildings of Tughluqabad Fort', url: 'https://ignca.gov.in/Asi_data/87960.pdf', licence: 'reference only' },
    { id: 'TUG-02', kind: 'gazetteer', title: 'Delhi District Gazetteer: description of Tughlaqabad Fort', url: 'https://ignca.gov.in/Asi_data/30582.pdf', licence: 'reference only' },
    { id: 'TUG-03', kind: 'architectural-description', title: 'Tughlaqabad in the Delhi architectural style', url: 'https://ignca.gov.in/Asi_data/18429.pdf', licence: 'reference only' },
  );
  h.byId('outline').name = 'Fort outline · mapped (OSM way 102684251)';
  try { levelInlandWaters(T, h); } catch (e) { console.error('tughlaqabad: levelInlandWaters skipped', e.message); }
  const W = h.byId('outline-wall');
  const wallHeight = 12.5; // midpoint of the ASI inventory's 10–15 m description; not a surveyed local height.
  const wallBasis = 'The ASI protected-monument inventory describes the fort as roughly octagonal, with a 6.5 km perimeter and rubble walls 10–15 m high, with bastions and gates at intervals. The path follows the mapped OSM perimeter; 12.5 m is the midpoint of the written height range, not a site-specific survey.';
  T.constructed = [
    { id: 'c-main-wall', kind: 'wall', path: W.path, closed: true, stands_for: W.id, replaces: [W.id], thick: 5, batter: 0.2, merlon: false, src: W.src, ev: 'schematic', conf: 0.3, eras: ['today'],
      name: 'Outer city wall · schematic, 12.5 m assumed', basis: wallBasis,
      h: { v: wallHeight, src: 'inferred', note: 'midpoint of the ASI inventory range of 10–15 m; actual height varies and is not surveyed here' } },
    ...bastionRing({ path: W.path, spacing: 240, r: 10, h: wallHeight, hNote: 'same 10–15 m wall range applied illustratively; individual bastion heights are not measured', src: W.src,
      eras: ['today'], idPrefix: 'c-bastion',
      basis: 'The ASI inventory describes rubble walls with bastions at intervals, and the historical architectural description notes large round bastions. Their exact spacing and profiles are not traced here; this even spacing is schematic.' }),
  ];
  T.eras = [
    { id: 'today', year: 'Today', label: 'As mapped', short: 'Today', lens: 'none',
      summary: 'The mapped city-fort outline, waterways and internal walls, with a separately tinted wall reconstruction.',
      basis: 'OSM geometry and Terrarium DEM. The ASI protected-monument inventory describes the citadel, palace area, city, scarped rock and 10–15 m high rubble walls with bastions and gates at intervals.',
      conjecture: 'The 12.5 m curtain and regularly spaced bastions are schematic. The historical source documents taller southern defensive tiers, but they are not mapped onto local segments without registration. No gate is reconstructed; road crossings are not treated as openings. Terrarium terrain smooths scarps and ditches.',
      sources: [],
      facts: [] },
  ];
}
