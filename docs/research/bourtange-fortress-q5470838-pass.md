# Fort Bourtange (Vesting Bourtange), Groningen, Netherlands: research pass

Ledger id `bourtange-fortress-q5470838` (Wikidata Q5470838). Pass of 2026-11-27. Curation: `tools/trace/curation/bourtange-fortress-q5470838.mjs`; level `src/levels/bourtange-fortress-q5470838.js`.

## What was and was not available

- Auto T1 trace (`data/traces/bourtange-fortress-q5470838.trace.json`): OSM outline way 222272320 (62 vertices, castle/fortress, wikidata Q5470838), 120 buildings (9 named), 78 grass areas, 150 paths, 23 markers (cannons, guardhouses, "Nieuwe Kruithuis" powder house, "Het houten paard"), canal and ditch water, the "Natte Horizon" moat-tagged water (way 183840649), and a 10 m DEM grid (5-6 m above datum at the fort).
- Raw geometry `data/geometry/bourtange-fortress-q5470838/osm.json` had not arrived when this pass first ran; it arrived the same day and was re-checked (section "Re-check against the raw OSM dump" below).
- No plan image was read. WebSearch listed a Rijksmuseum print (RP-P-2019-2471), a Covens and Mortier map, Atlas van Loon 1649 and a Merian engraving; none was opened, and no pixels are shipped.

## Documented (written sources read)

| Date | Fact | Source |
|---|---|---|
| 1580 | Redoubt (schans) begun on Diederik Sonoy's orders (Willem of Orange); a pentagon marked out, not built for lack of money | DBNL monument text; burgenwelt.org page |
| 1593 | Completed on a radial plan with five bastions, designed by Adriaen Antonisz. van Alkmaar; a low earth rampart with a ditch in front, built for Willem Lodewijk of Nassau | DBNL; burgenwelt; Wikipedia |
| 1606-07 | Crownwork "Schuitendiep" (burgenwelt 1606; DBNL c. 1607 with two ravelins and a counterscarp); garrison church 1607 | DBNL; burgenwelt |
| 1619 | Main rampart widened and raised; a windmill stood on the site by 1619 | burgenwelt; trek.zone |
| c. 1645 | Two hornworks facing east; the pentagonal market square and radial streets "probably" from about now | DBNL |
| 1665-66, 1672 | Sieges by Münster ("Bommen Berend") withstood; palisades repaired 1665 | DBNL; Wikipedia; burgenwelt |
| 1738-42 | Expansion to the largest extent, designed by Pieter de la Rive: two more ravelins, a new eastern counterscarp, glacis running into a "natte horizon" | DBNL |
| 1851 | Decommissioned (Eems First Line); walls and gates razed, much of the moat filled | DBNL; forten.nl |
| 1960-92 | Decision (1960) to restore to the 1740-50 state; only an outer-moat remnant and one bastion visible in 1966; main reconstruction 1972-82 (1967-92 in other sources) | DBNL; Wikipedia |
| 1980 | Present mill is a replica of the Ter Haar mill, on the miller's bastion beside a small horse mill | trek.zone |

Village houses (DBNL, Marktplein): Commandeurslogement no. 4, Majoorslogement no. 6 (1647 anchors, restored 1954), Kapiteinslogement no. 8 (1647), Kapiteinslogement Markt 5-7 (1661 anchors, military bakery), Reformed church no. 2a (1869, replacing the 1607 church; oldest gravestone 1613). The Vriesse or Munsterse Poort is the entrance to the village (forten.nl). None of these houses can be tied to a mapped footprint, because the OSM tags are not in the base trace.

Conflicts: start date 1580 vs 1593; "ravelins on the east side 1739-42" (burgenwelt, via a low-weight AI-written page) vs "two ravelins c. 1607 and two in 1738-42" (DBNL): which ravelin is which is not stated anywhere read. The 1672 troop numbers differ between sections of the AI-written page and are not used. No dimension of the fort, a wall or a bastion height was found in any source.

## Re-check against the raw OSM dump (2026-11-27)

Dump: 1145 elements within 1000 m. What it maps, and what it does not:
- **No wall, rampart, bastion, moat polygon or ditch of the fort is mapped as such.** The only fortification tags are `historic=castle` on the outline (way 222272320), `historic=archaeological_site` "Redoute Bakoven" (way 491934754, outside the window), and `defensive_works=ravelin` on two grass areas.
- **The earthworks appear as grass areas** (`landuse=grass`, source 3dShapes): way 103148857 (west half of the inner star, 106 vertices, 16,161 m2) and way 103149304 (east half, 59 vertices, 10,307 m2), cut by the north and south gate axes; further grass areas (ways 103149332, 103148791, 103148877, 103148577 ...) fill the outer works between the star and the outline. All of these were already in the base trace as `zone` elements; the trace builder had not kept the `defensive_works` tag.
- **Two ravelins are tagged**: way 103148537 (west, outside the W-NW curtain, 3,409 m2) and way 103149336 (east, outside the east curtain, about 110 m from it, 2,469 m2). The other two ravelins (and any crownwork or hornwork) are not tagged.
- **Moats are not mapped as water.** They are the unmapped gaps between the grass areas. Water in the dump is the Natte Horizon (way 183840649, `water=moat`, outside the star), canals and ditches outside the star.

What changed in the curation:
| Item | Before | Now |
|---|---|---|
| NE and SE bastion tips | placed by pentagon symmetry, marked inferred | mapped vertices of way 103149304 (116.88, 67.07) and (107.8, -128.41), 4 m and 5 m from the symmetry guesses; tip markers are now `mapped` |
| NW, W, SW tips | measured vertices of way 103148857 | unchanged (vertices 78, 68, 59) |
| West rampart (SW, W and NW bastions and the faces between) | schematic angular bastions and curtains on the fitted pentagon | `c-rampart-west` is drawn on vertices 59 to 78 of way 103148857 (1742 and today only; 1593 keeps the straight-sided pentagon because the mapped outline is the restored 1742 form) |
| NE, SE bastions, the north, east and south curtains | schematic on the pentagon | unchanged (schematic, now on the mapped tips) |
| West and east ravelins | arrowheads from outline spikes | the mapped polygons of ways 103148537 and 103149336, closed schematic banks 3.5 m high; no moat drawn round them (edges not mapped); the north, south and SW-W ravelins stay schematic on outline spikes |
| Documented layer | no earthwork | the four grass areas above are named and carried into 1742 (inferred); the two ravelin polygons are named "Ravelin ... mapped" |
| Moats, gates, bridges, buildings | schematic | unchanged |

Findings that limit the change: (1) the east grass area's edge is indented about 30 m behind the line between the NE and SE tips, with another grass area (way 103148877) outside it, so the east curtain is not drawn on a mapped edge; (2) the grass edge is a boundary of mown grass, not a surveyed toe or crest, so the mapped rampart line is good to a few metres but its height, width and slope are assumed; (3) which of the four ravelins the two tagged polygons are, and their dates, are not stated anywhere read.

## Fitted geometry (derived from mapped data, not from a plan; superseded where the re-check above says so)

The mapped grass area way/103148857 has three obvious bastion points: NW (-63.9, 138.0), W (-187.1, -17.5), SW (-79.7, -180.3). They are consecutive corners of a regular pentagon: circumcentre (-19.5, -23.8) m, radius 167.7 m, side about 197 m (angular steps 72.5 and 71.2 degrees). The NE and SE corners (121, 68) and (112, -129) follow from the symmetry. Supporting checks: the pentagon's curtain midpoints sit 6 to 10 m from the mapped guardhouse nodes (26, 97) north (Friesche Poort axis) and (7.5, -142) south (Munsterse Poort axis); the mapped mill (-50, 80) lies on the NW bastion, which agrees with the "miller's bastion". The regularity is a fit, not a measurement of NE and SE.

The mapped outline's spikes lie on the outward axes of four of the five curtains (70, 142, 285 and 4 degrees from the centre; the fifth side, SW-W, has a notch and no spike). They are taken as the four ravelins' counterscarp tips.

## Inferred / schematic (constructed layer only)

Everything below carries `ev: 'schematic'`, a basis and an assumed height with its rule.

- Earth rampart: 4.5 m high, 10 m wide (1742, today); 2.5 m and 7 m in 1593 ("low earthen rampart"). No height was read; the 1619 raising is the only support.
- Angular bastions: tip angle about 84 degrees, 48 m faces, curtain 28 m inside the pentagon side. Typical Dutch form on the fitted corners, not surveyed.
- Four ravelins (1742 era only): arrowhead 76 m wide, apex on the outline spike pulled back 28 m, 3.5 m high.
- Moats: 30 m (1742) and 24 m (1593 ditch) bands round the bastions, 24 m round the ravelins; widths are illustrations. Levels are derived from the DEM.
- Gates at the two curtain midpoints (Friesche north, Munsterse south) with earth causeways across the moat and an opening at each gated ravelin's apex. In 1593 the same positions are assumed; no source places the first entrance. No bridge was read in any source.
- 22 raised building masses on the mapped footprints (the named ones plus those over 120 square metres), 5.5 m to the eaves with a hipped roof; the mill 11 m, the horse mill 5 m.

## Not drawn, and why

The east hornworks (c. 1645), the crownwork Schuitendiep, the eastern counterscarp and the glacis profile (no plan; they merge into the mapped outline), the 1607 church and the Marktplein houses (no tags in the base trace), palisades, covered-way parapets, gun platforms, the wet-horizon level (24 ha, 31 cm below summer level, from the AI-written page only), the Ruiten Aa sluice (1631) and any other dated work between 1593 and 1742 other than the ones listed. T2 needs a plan: the 1742 Pieter de la Rive plan, Atlas van Loon 1649, or the ledger's Commons search results.
