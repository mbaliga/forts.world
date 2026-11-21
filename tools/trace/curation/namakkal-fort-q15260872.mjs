// Curation for Namakkal Fort (alpha-U batch, 2026-11-14). Evidence and conflicts: docs/research/namakkal-pass.md.
// The OSM outline (way 402592136, "Namakkal Rockfort") is the rock itself, about 82 x 166 m. The ledger point was 1.2 km away in the town; the builder moved the origin to the outline centroid.
// No plan or survey was read. Wikipedia gives a rock height of 75 m and about 1.5 acres on top (both uncited); neither is used as an element height.
import { carryOver, levelInlandWaters } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'needs-plan';
export const HEADER = [
  'Namakkal Fort (Namakkal Rockfort, Namakkal, Tamil Nadu). Hand-curated trace, tier T1 (OSM-mapped; no plan or survey was found, so T2 is blocked).',
  'Base: data/traces/namakkal-fort-q15260872.trace.json (OSM ODbL; Terrarium z15, ~30 m SRTM-derived: the single 75 m rock is smoothed to a broad rise).',
  'The outline is the rock only; the walls on its slopes, the gate and the cave temples have no mapped position and are not drawn. The surrounding town (roads, houses, a temple, a pond) is the present-day context.',
];

export default function curate(T, h) {
  console.error(`${T.id}: derived a surface level for ${levelInlandWaters(T, h)} inland water bodies`);
  h.byId('outline').name = 'Rock fort outline · mapped (OSM way 402592136), the rock only';
  h.byId('zone-7').name = 'Bare rock · mapped (OSM way 339333406)';
  h.byId('water-21').name = 'Pond · mapped (OSM way 894317992), not identified as a fort tank';
  h.byId('building-13').name = 'Mariamman Temple · mapped footprint (OSM way 345487883)';
  h.byId('building-25').name = 'Hindu place of worship · mapped footprint (OSM way 1558044698), deity not tagged';
  h.byId('building-12').name = 'PWD Office · mapped footprint (OSM way 344561181)';
  const c = h.ground(0, 0);
  console.error(`namakkal: DEM ground at the outline centroid ${Number.isFinite(c) ? c.toFixed(1) : 'n/a'} m (Wikipedia gives a 75 m rock)`);

  carryOver(T, 'nayak', ['outline', 'zone-7'], { note: 'the rock and its bare-rock area are assumed unchanged since the 17th-century fort; no plan of that date was found, and the page names two different builders' });

  T.eras = [
    { id: 'nayak', year: '17th c.', label: 'Nayak fort', short: '17th c.', lens: 'none',
      summary: 'The rock fort in the 17th century, built in the reign of Thirumalai Nayak of Madurai according to Wikipedia, shown as the mapped rock outline carried back.',
      basis: 'Wikipedia: built in the 17th century under Thirumalai Nayak (cited to the Tamil Nadu government portal); another sentence says it was reported to have been built by Ramachandra Nayakar, a poligar of Sendamangalam (uncited). Only the rock is drawn.',
      conjecture: 'No plan or dated image was found. The walls, the gate and the temples are not drawn because none has a mapped position. The builder conflict is not resolved here.',
      sources: [],
      facts: ['Wikipedia: the walls are of well-cut blocks of the same stone as the hill; about 1.5 acres on top; the rock is "75 m (246 ft) tall" (uncited). The mapped outline is 162 x 81 m, 8,255 m2 (2.0 acres), larger than the written top area because it follows the rock, not the summit.', 'Wikipedia: the British captured the fort in 1768 (uncited) and it was held by Hyder Ali and Tipu Sultan in turn; the East India Company got it under the Treaty of Srirangapatnam (undated).'] },
    { id: 'today', year: 'Today', label: 'Rock fort in the town', short: 'Rock fort', lens: 'none',
      summary: 'The Namakkal rock fort inside the town, with the mapped rock outline, bare rock, a pond, ten buildings and the town roads.',
      basis: 'The OSM rock outline, bare-rock area, roads, a pond, the Mariamman Temple and one other mapped place of worship, a PWD office and unnamed buildings.',
      conjecture: 'Heights are unknown (kerb-high); the 75 m rock is only a smoothed rise in the terrain. The Narasimha temple, the mosque and the Hanuman shrine in Wikipedia are not identified among the mapped buildings.',
      sources: [],
      facts: ['Wikipedia: a Narasimha temple and an unnamed mosque lie inside the fort; the 8 ft Hanuman image faces the Narasimha image (legend, cited to a district archive).', 'Wikipedia: the Kamalalayam tank at the foot is associated with the fort; the mapped pond is not tied to it.'] },
  ];
}
