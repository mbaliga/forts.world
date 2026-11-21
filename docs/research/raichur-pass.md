# Raichur Fort: research pass (mapped-evidence check)

Alpha-U batch, 2026-11-15. Site id `raichur`. Tier unchanged: the existing plan-informed two-enclosure scene (`src/levels/raichur-doab.js`, from the Nizam Archaeological Department 1929-30 plan) stays the registered level. **No T1 level replaces it**, because the OSM data that landed is a single gate and two lines, which would be a regression. Status `needs-georef`.

## Mapped (OpenStreetMap, fetched 2026-11-14 at 2.2 km)
- OSM way 217880889 is tagged historic=castle, name "Raichur Fort East Gate", name:en "Makka Darawaja": a gate precinct of 2,484 m2 (101 x 41 m min rectangle), 79 m from the corrected ledger point. It is the only closed fort-tagged feature.
- OSM way 902210397 (barrier=city_wall) is a 947 m wall line; way 902210398 (waterway=ditch, note "This may be a historic moat?") runs 1.9 km. One 15 x 11 m building and 14 roads (Station Road etc.) are mapped.
- The first request used wrong coordinates (2.6 km east) and failed; the ledger point was corrected to the reference point in `raichur-doab.js`.

## Documented in text (Wikipedia: Raichur Fort)
- Built in 1294 by the Kakatiya dynasty (an inscription says Raja Vithala on the order of Gona Gannaya Reddivaru, minister of Rudramma Devi; cited); earlier Chalukya fortifications (uncited); expanded by the Bahmanis (cited to Michell 1999); Krishnadevaraya built the north entrance (uncited); 95 granite balls and a 13th-century cannon found in March 2011 at the north-west wall (cited to The Hindu). The page names no wall length, height or gate other than the unnamed north entrance and does not mention the Makka Darwaza.

## Inferred
- Nothing new is drawn. The wall line and the East Gate are candidate control points for georeferencing the 1929-30 plan; this is not done here.

## Conflicts and doubts
- The OSM ditch is tagged as a possible moat by its mapper only. Whether the wall way is the outer or inner circuit is not stated.

## Missing evidence for T2
- Georeferencing of the Yazdani plan to the mapped East Gate and wall line, then the circuit gates and bastions from the plan.

## Sources
- [Wikipedia: Raichur Fort](https://en.wikipedia.org/wiki/Raichur_Fort) (read 2026-11-15)
- [OSM way 217880889](https://www.openstreetmap.org/way/217880889); [way 902210397](https://www.openstreetmap.org/way/902210397); [way 902210398](https://www.openstreetmap.org/way/902210398)
- OpenStreetMap contributors (ODbL); Terrarium terrain tiles per AWS Open Data.
