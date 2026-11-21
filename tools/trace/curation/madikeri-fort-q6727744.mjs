// Curation for Madikeri Fort (alpha-U batch, 2026-11-14). Evidence and conflicts: docs/research/madikeri-pass.md.
// No plan or survey was read. The OSM outline (relation 6432140, 3.4 ha) and two wall lines tagged barrier=city_wall are drawn as mapped. Wikipedia gives no wall, gate or size figures.
// The fort is inside the town of Madikeri: the roads, shops and houses are present-day context and are kept out of the historic era.
import { carryOver } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'needs-plan';
export const HEADER = [
  'Madikeri Fort (Mercara), Kodagu, Karnataka. Hand-curated trace, tier T1 (OSM-mapped; no plan or survey was found, so T2 is blocked).',
  'Base: data/traces/madikeri-fort-q6727744.trace.json (OSM ODbL; Terrarium z15, ~30 m SRTM-derived: the fort stands on a ridge in the town and its slopes are smoothed).',
  'The outline is OSM relation 6432140; the two wall lines are ways 92384881 and 92384893. The Omkareshwara Temple compound wall (way 92384943) is a temple wall, not a fort wall, and is kept in the present-day era only.',
  'The palace, the two stone elephants at the north-east entry and the gates named by Wikipedia have no mapped position and are not drawn.',
];

export default function curate(T, h) {
  h.byId('outline').name = 'Fort outline · mapped (OSM relation 6432140)';
  h.byId('wall-13').name = 'Fort wall line · mapped (OSM way 92384881), height unknown';
  h.byId('wall-14').name = 'Fort wall line · mapped (OSM way 92384893), height unknown';
  h.byId('wall-19').name = 'Omkareshwara Temple compound wall · mapped (OSM way 92384943), not a fort wall';
  h.byId('building-32').name = 'Madikeri Museum · mapped footprint (OSM way 100575735), in an old church';
  h.byId('building-38').name = 'Omkareshwara Temple · mapped footprint (OSM way 406477730)';
  h.byId('building-39').name = 'Sri Ambika Upahar (restaurant) · mapped footprint (OSM way 515737011)';
  h.byId('building-33').name = 'Kodava Samaja Shopping Complex · mapped footprint (OSM way 100576513)';
  const c = h.ground(0, 0);
  console.error(`madikeri: DEM ground at the outline centroid ${Number.isFinite(c) ? c.toFixed(1) : 'n/a'} m`);

  const keep = ['outline', 'wall-13', 'wall-14'];
  carryOver(T, '1812', keep, { note: 'the present mapped outline and wall lines are assumed to match the fort whose palace Linga Rajendra II renovated in 1812-14 (Wikipedia, citing the Karnataka State Gazetteer 1965); no plan of that date was found' });

  T.eras = [
    { id: '1812', year: '1812', label: 'Palace renovation', short: '1812', lens: 'none',
      summary: 'Madikeri Fort when Linga Rajendra II renovated its palace (1812-14), shown as the present mapped outline and two wall lines carried back.',
      basis: 'Wikipedia: built in the second half of the 17th century by Mudduraja; Tipu Sultan rebuilt it in granite and named it Jaffarabad (uncited); Dodda Vira Rajendra took the fort in 1790; Linga Rajendra II renovated the palace in 1812-14 (cited to the Karnataka State Gazetteer, 1965).',
      conjecture: 'No plan or dated image was found. The palace now used as the Deputy Commissioner\'s office is not identified among the mapped buildings, and the town roads, the 1859 church and the 1820s temple (not read here) are left out of this era.',
      sources: [],
      facts: ['Wikipedia: the British made additions in 1834 (uncited); St Mark\'s Church was built in 1859 by East India Company soldiers (cited to Penny, 1922) and now houses the Madikeri Fort Museum.', 'Wikipedia gives two stone elephant statues at the north-east entry; no wall, gate or size figure is given.'] },
    { id: 'today', year: 'Today', label: 'Fort in the town', short: 'In town', lens: 'none',
      summary: 'The fort inside Madikeri town, with the mapped outline, two wall lines, the museum in the old church, the Omkareshwara Temple, shops and the town roads.',
      basis: 'The OSM outline and wall lines, 13 buildings, a stream, a memorial marker and the roads in and around the fort.',
      conjecture: 'Heights are unknown (kerb-high); the terrain is smoothed SRTM. The outline is 202 x 259 m, 3.4 ha; no written size was found to compare.',
      sources: [],
      facts: ['OSM tags the museum building as a church used as a museum (note: "museum in an old church"); Wikipedia says the church was taken over by the Karnataka government in 1971 (the citation given cannot support that date).', 'Wikipedia: the palace built by Mudduraja is now the Madikeri Deputy Commissioner\'s office.'] },
  ];
}
