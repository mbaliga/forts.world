# Korlai Fort: research pass

Alpha-U batch, 2026-11-14. Site id `korlai`. Tier reached **T1** (status `needs-plan`). Curation: `tools/trace/curation/korlai.mjs`; trace: `src/levels/korlai.trace.js`. No plan, survey drawing or dated image was found, so nothing here is traced from a plan and no constructed layer is drawn. Standing rules: no invented heights, no invented gates, present-day roads and buildings on the "today" view.

## Mapped (OpenStreetMap and terrain)
- OSM way 279967536 (historic=fort and barrier=city_wall, source=Survey, Wikidata Q6432353) is a strip along the ridge: 735 x 84 m at its widest, 19,180 m2 (4.7 acres), about 26 m wide on average. Wikipedia gives 2,828 ft (862 m) long and 89 ft (27 m) average breadth: the breadth agrees, the written length is 15% more, so part of the fort may lie outside the mapped line.
- The coast is OSM way 19799065 (clipped at the south edge); the sea is derived from it and passed the DEM check; 1,219 DEM cells below -3 m (bathymetry) are clamped. Five buildings and three paths are mapped. The terrain grid reads 61 m at the outline centroid.

## Documented in text (Wikipedia, not placed unless stated)
- Wikipedia: an inscription says Dom Filipe Mascarenhas ordered the castle in November 1646 and it was finished in May 1680; the Marathas took it in 1739 or 1740; the East India Company held it from 1818 (infobox, uncited).
- Wikipedia (uncited unless noted): 11 gates (4 outer, 7 inner), 7 saint-named bastions, a drawbridge and ditch, 305 battlements, a Santa Cruz cistern at the north point, a hilltop cistern with three one-foot mouths (cited to Gunaji, 2005), a hilltop church of 1630 (cited to D'Souza, 2008).

## Inferred
- The 1680 era is the mapped outline, wall line and coast carried back; the sea in it is derived.

## Conflicts and doubts
- The page says the Portuguese built the fort in 1521 and demolished it in 1594, and also that it was ordered in 1646 and finished in 1680; these cannot all hold, and the 1521 and 1594 claims are uncited.
- The infobox says Portugal held the fort until 1739, the text gives the Treaty of Poona of 18 September 1740. The wall height "5' 3" high" is uncited and implausibly low and is not used.
- An earlier pass (docs/research/korlai-mapped-ridge-pass.md) reports a 1955, 12.7 m lighthouse from the DGLL ledger; it was not re-read here and is not drawn. The old scene in chaul-estuary.js is kept.

## Missing evidence for T2
- A Portuguese or modern survey plan of the ridge fort: the positions of the gates, the seven bastions, the cisterns, the church and the lower outwork; wall heights; a finer terrain model for the 27 m-wide ridge.

## Sources
- [Wikipedia: Korlai Fort](https://en.wikipedia.org/wiki/Korlai_Fort) (read 2026-11-14)
- [OSM way 279967536](https://www.openstreetmap.org/way/279967536), [way 19799065](https://www.openstreetmap.org/way/19799065)
- OpenStreetMap contributors (ODbL); Terrarium terrain tiles per AWS Open Data.
