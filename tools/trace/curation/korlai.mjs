// Curation for Korlai Fort (alpha-U batch, 2026-11-14). Evidence and conflicts: docs/research/korlai-pass.md.
// No plan or survey was read. The mapped outline is a narrow strip along the ridge, 735 x 84 m at its widest (19,180 m2, so about 26 m wide on average). Wikipedia gives "2,828 feet long" (862 m) and an average breadth of "eighty-nine feet" (27 m): the breadth agrees, the length is about 15% longer than the mapped strip. The outline is drawn as mapped.
// The old scene (src/levels/chaul-estuary.js, kept) was a generic hill; the earlier pass removed its 1610 era because modern outlines do not establish that form.
import { carryOver } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'needs-plan';
export const HEADER = [
  'Korlai Fort (Korlai headland, Raigad district, Maharashtra). Hand-curated trace, tier T1 (OSM-mapped; no plan or survey was found, so T2 is blocked).',
  'Base: data/traces/korlai.trace.json (OSM ODbL; Terrarium z15, ~30 m SRTM-derived: the narrow ridge is smoothed and cells below -3 m are clamped, so the sea floor is schematic).',
  'The outline and wall line are OSM way 279967536 (tagged historic=fort and barrier=city_wall, source=Survey). The sea is derived from the coast (way 19799065), which is clipped at the south edge.',
  'Gates, bastions, cisterns and the church are described in Wikipedia and the Gazetteer but have no plan position, so none is drawn.',
];

export default function curate(T, h) {
  h.byId('outline').name = 'Fort outline · mapped (OSM way 279967536)';
  h.byId('outline-wall').name = 'Perimeter wall line · mapped (OSM way 279967536), height unknown';
  const bn = [['building-5', '1497882973'], ['building-6', '1497882974'], ['building-7', '1497882975'], ['building-8', '1497882976'], ['building-9', '1497882977']];
  for (const [id, way] of bn) h.byId(id).name = `Building · mapped (OSM way ${way}), use not tagged`;
  const c = h.ground(0, 0);
  console.error(`korlai: DEM ground at the outline centroid ${Number.isFinite(c) ? c.toFixed(1) : 'n/a'} m`);

  const keep = ['outline', 'outline-wall', 'coastline-1', 'sea-0'];
  carryOver(T, '1680', keep, { note: 'the present mapped outline, wall line and coast are assumed unchanged since the Portuguese castle was finished (1680 per the inscription Wikipedia reports); no plan of that date was found' });

  T.eras = [
    { id: '1680', year: '1680', label: 'Portuguese castle', short: '1680', lens: 'none',
      summary: 'The Portuguese castle of Korlai as the inscription Wikipedia reports dates its completion (May 1680), shown as the present mapped outline and wall line carried back.',
      basis: 'Wikipedia: an inscription says the castle was ordered by Dom Filipe Mascarenhas in November 1646 and finished in May 1680. The same page also says the Portuguese built it in 1521 and demolished it in 1594; these cannot all hold, and none is cited. The drawn fort is today\'s mapped line, marked inferred.',
      conjecture: 'No plan or dated image was found. Wikipedia gives 2,828 ft x 89 ft, 11 gates (4 outer, 7 inner), 7 saint-named bastions, a drawbridge, a ditch and a hilltop church (1630); none has a plan position, so none is drawn. The written length (862 m) is about 15% more than the mapped strip (735 m), so part of the fort may lie outside the mapped line.',
      sources: [],
      facts: ['Wikipedia: the Marathas took the fort in 1739 (text and infobox) or after the Treaty of Poona of 18 September 1740; the East India Company held it from 1818 (infobox, uncited).', 'Wikipedia: a hilltop cistern with three mouths each one foot wide is cited to Gunaji (2005); the Santa Cruz cistern at the north point is uncited.'] },
    { id: 'today', year: 'Today', label: 'Headland ruin', short: 'Ruin', lens: 'none',
      summary: 'A ruined fort on the Korlai headland across the creek from Revdanda, with the mapped outline, wall line, five buildings and three paths.',
      basis: 'The OSM outline and wall line, five unnamed buildings, three paths and the coast with the sea derived from it.',
      conjecture: 'Heights are unknown (kerb-high). A 1955 lighthouse is reported in an earlier pass (docs/research/korlai-mapped-ridge-pass.md, DGLL ledger) but was not re-read here, so it is not drawn. One mapped path meets the wall line and could be an opening; no gate is mapped.',
      sources: [],
      facts: ['The mapped outline is a strip 735 x 84 m at its widest, 19,180 m2 (about 26 m wide on average); Wikipedia gives 2,828 ft (862 m) long and 89 ft (27 m) average breadth, uncited. The breadth agrees, the length is 15% more.', 'Wikipedia gives a wall height of "5\' 3" high", uncited and implausibly low for a fortress wall; it is not used.'] },
  ];
}
