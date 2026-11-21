// Curation for Chandragiri Fort, Kasaragod (alpha-U batch, 2026-11-14). Evidence and conflicts: docs/research/chandragiri-pass.md.
// This is the Kerala fort on the Chandragiri (Payaswini) river, not the Andhra Pradesh Chandragiri that the old scene in pennar-chandragiri.js shows.
// No plan or survey was read. The OSM outline (way 799197980, tagged ruins=yes) has an area of 31,111 m2 (7.69 acres), within 1% of Wikipedia's "approximately 7.76 acres" for the boundary: an independent check on the outline, not a survey.
import { carryOver } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'needs-plan';
export const HEADER = [
  'Chandragiri Fort, Kasaragod, Kerala. Hand-curated trace, tier T1 (OSM-mapped; no plan or survey was found, so T2 is blocked).',
  'Base: data/traces/chandragiri-fort-q3520635.trace.json (OSM ODbL; Terrarium z15, ~30 m SRTM-derived: the 46 m hill and the river bank are smoothed).',
  'The outline is OSM way 799197980. The river, the sea at the confluence and the trench Wikipedia describes are not mapped in this window, so no water is drawn; the eight bastions, the east and west entrances and the north-east tunnel have no mapped position and are not drawn.',
  'Houses, a school, a club and the roads around the fort are present-day context.',
];

export default function curate(T, h) {
  T.name = 'Chandragiri Fort (Kasaragod)';   // distinct from the Andhra Pradesh Chandragiri
  h.byId('outline').name = 'Fort outline · mapped (OSM way 799197980), ruins=yes';
  h.byId('zone-5').name = 'Farmland · mapped (OSM way 799834101)';
  h.byId('building-12').name = 'House "ameer kallatra" · mapped footprint (OSM way 801366740)';
  h.byId('building-14').name = 'Club "fortkochu" · mapped footprint (OSM way 801366742)';
  h.byId('building-22').name = 'Kalanad Old GLPS (school) · mapped footprint (OSM way 833938903)';
  const c = h.ground(0, 0);
  console.error(`chandragiri: DEM ground at the outline centroid ${Number.isFinite(c) ? c.toFixed(1) : 'n/a'} m (Wikipedia gives 46 m)`);

  carryOver(T, 'nayak', ['outline'], { note: 'the present mapped outline is assumed to match the fort Shivappa Nayak built in the 17th century (Wikipedia); no plan of that date was found' });

  T.eras = [
    { id: 'nayak', year: '17th c.', label: 'Keladi Nayak fort', short: '17th c.', lens: 'none',
      summary: 'The river fort at the Chandragiri estuary in the 17th century, built by Shivappa Nayak of the Keladi Nayakas according to Wikipedia, shown as the mapped outline carried back.',
      basis: 'Wikipedia: built in the 17th century by Shivappa Nayak; the Keladi Nayakas administered the region and later declared independence; the river marked the boundary between Tulunadu and Kolathunadu. The page gives no year. Only the OSM outline is drawn.',
      conjecture: 'No plan or dated image was found. Wikipedia describes laterite walls (some damaged by cannon fire), eight bastions with gun holes (main bastion on the north), entrances east and west across a trench, and a tunnel at the north-east corner; none has a mapped position, so none is drawn.',
      sources: [],
      facts: ['Wikipedia: about 46 m (150 ft) above sea level; "about seven acres" in the lead and "approximately 7.76 acres" for the boundary (the page does not reconcile them); the building covers roughly 5 acres.', 'The mapped outline is 204 x 237 m, 31,111 m2 (7.69 acres), within 1% of the written 7.76 acres.'] },
    { id: 'today', year: 'Today', label: 'Protected ruin', short: 'Ruin', lens: 'none',
      summary: 'The ruined fort above the Chandragiri river mouth near Kasaragod, with the mapped outline, nearby houses, a school, a club and the coast road.',
      basis: 'The OSM outline, 16 buildings, farmland, a fort marker and four roads.',
      conjecture: 'Heights are unknown (kerb-high); the terrain grid is smoothed SRTM. The river and the sea are not mapped in this window.',
      sources: [],
      facts: ['Wikipedia: managed by the Kerala State Department of Archaeology with the Department of Tourism; excavations found stone and iron cannonballs, iron tools and pottery.', 'Wikipedia: distances of 59 km south of Mangalore and 87 km north of Kannur are uncited.'] },
  ];
}
