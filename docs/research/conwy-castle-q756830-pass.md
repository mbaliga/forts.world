# Conwy Castle: fort-fidelity pass (world-fort curation, mapped T1 plus schematic constructed layer)

Date of pass: 2026-11-27. Branch `dev`. Trace: `src/levels/conwy-castle-q756830.trace.js` (from `data/traces/conwy-castle-q756830.trace.json` plus
`tools/trace/curation/conwy-castle-q756830.mjs`). Level: `src/levels/conwy-castle-q756830.js` (`makeT1`), not yet registered in `src/levels/index.js`.

**Status: `needs-plan`, tier T1 for position.** No plan, survey drawing or dated image was found open or read, so there is no registration step and no T2 claim.
What makes this fort unusually rich is OpenStreetMap: the castle is mapped in detail with height tags. The constructed layer is built on those mapped lines.
`data/geometry/conwy-castle-q756830/` had not arrived when the pass was written; the curation works from the OSM shapes already in the auto trace.

## Documented (written sources; secondary, none a survey)

| Fact | Value | Source |
|---|---|---|
| Foundation | Edward I took Aberconwy March 1283; ditch begun within days; outer walls and towers 1283-84, interiors 1284-86; complete by 1287 (infobox 1283-89, World History Encyclopedia 1283-92) | Wikipedia, WHE |
| Builder | Master James of St George (architect, master mason); Sir John Bonvillars controlled the work | Wikipedia |
| Cost | about 15,000 pounds, castle and town walls together | Wikipedia, WHE |
| Plan | rectangular; larger outer ward west, smaller near-square inner ward east, cross wall between, drawbridge and gate at the cross wall over a rock-cut ditch (filled in the 16th century) | Wikipedia, Castles of Wales, Gatehouse Gazetteer |
| Towers | eight drum towers, about 70 ft (21 m) tall. Six round the outer ward (one at each corner, one mid-north, one mid-south); the Stockhouse and Bakehouse Towers are shared by both wards | Wikipedia, Gatehouse Gazetteer |
| Tower names | Kitchen Tower (mid north, outer ward), Prison Tower (mid south, dungeon in its base), NW and SW towers (a pair, two superimposed newel stairs each), Stockhouse, Bakehouse, King's Tower (royal rooms), Chapel Tower (NE, round rib-vaulted chapel with apsidal sanctuary on the first floor) | Cadw listing text, Castles of Wales |
| Outer ward | Great Hall (south range, central facet, fireplace against the Prison Tower, bow-shaped, about 125 ft / 38 m per Castles of Wales, up to 30 m per WHE); kitchens and stables on the north (footings only); constable's tower; service range with kitchen, brewhouse, bakehouse; barracks for 15 crossbowmen | Cadw, Wikipedia, WHE |
| Inner ward | royal apartments ranged against the walls, principal rooms on the first floor over heated basements, floors now gone; granary; private chapel in the Chapel Tower | Cadw, Wikipedia, WHE |
| Barbicans | west barbican at the main entrance: almost straight wall with 3 turrets, drawbridge and portcullis, long stepped ramp, earliest surviving stone machicolations in Britain. East barbican: faceted wall, 3 turrets, entered from the Water Gate, perhaps a garden | Gatehouse Gazetteer, Castles of Wales, Wikipedia |
| Gates | main west gate (pointed arch, portcullis slots, flanked by round turrets); Water Gate; middle gate with a small square gatehouse; east gate into the inner ward with draw-bar sockets | Gatehouse Gazetteer |
| Well | 91 ft (28 m) per Wikipedia and Cadw; 21.7 m originally per WHE | conflict, small |
| Finish | originally white plaster | Wikipedia, Castles of Wales |
| Later | 1294-95 siege by Madog ap Llywelyn; Richard II 1399; Glyn Dwr 1401; sold to Edward Conway 1627 for 100 pounds; Mytton took it Nov 1646; slighted 1655; stripped 1665; road bridge 1826, rail bridge 1848, restoration from 1865, Ministry of Works lease 1953, new road bridge 1958, World Heritage Site 1986 | Wikipedia |
| Town walls | about 1.3 km, 21 D-shaped gap-backed towers (4 east, 9 west, 8 south), three twin-towered gates (Upper, Mill, Lower), walls at least 6 m on the outer face, towers up to 15 m, built 1283-87, spur wall to the river ending in a round tower that no longer survives; Telford cut two new gateways in 1826, the railway breached the wall 1846-48 | Wikipedia, Cadw SAM CN014 |

## Conflicts

- **Tower height.** Wikipedia and Castles of Wales: about 70 ft (21 m). OSM tags the tower rings 26 m, the tower footprints 25 m, the curtains 18 m. Neither is a survey; the OSM tag is kept as the mapped value and the conflict is on every tower card.
- **Where the King's Tower is.** OSM puts it at the south-east corner of the inner ward; the Cadw listing text says "SW king's tower". The Cadw text also calls the NE tower the chapel tower and the NW and SW towers a pair, so SW here reads as a slip. OSM position kept.
- **Well depth, castle span.** 91 ft against 21.7 m; 1283-87/89 against 1283-92. Small, noted.
- **Tower count on the town wall by side.** Wikipedia counts 21 (4 east, 9 west, 8 south); only a few lie inside the window.

## Mapped (OpenStreetMap, ODbL)

- The castle outline (way 52467063, 114 vertices, about 124 x 63 m).
- Both ward curtains as closed lines (outer 240020770, inner 240020750, tagged 18 m) with the exterior faces as separate two-point lines (ways 240032817-23, 240032498).
- The eight towers as circle rings (tagged 26 m) and four of them also as named footprints (Chapel, King's, Bakehouse, Stockhouse Towers, 25 m); four small round newel-stair turrets tagged 30 m.
- The west barbican line, the east barbican closed line and its interior footprint, the Granary (named), five Great Hall footing lines, a north-range footing line, a 4 m square at the cross wall, interior lines in the inner ward.
- The town walls as one closed way (150098557, 565 vertices) tracing both faces; roughly 394 vertices lie outside the 424 m window. Clipped to two runs here.
- 116 buildings, 150 roads, the Telford and railway bridge elements, the River Conwy and Afon Gyffin lines, three coastline ways.
- Terrain: Terrarium z15 at 5 m stride, about 30 m SRTM-derived; 6 to 12 m around the castle. It cannot show the rock-cut ditch.

## Problems found in the auto trace (fixed in the curation)

- **Sea polygons.** The pipeline's two derived sea polygons both failed the DEM check (the SRTM-derived tiles read the tidal flats as land). `sea-1` filled the whole window and dug it to -3 m, so every scene came up flooded; it is dropped. `sea-0` has the correct water side (read from the coastline way directions: heading west along the south coast and then north up the castle's east bank, with water on the right) but its closing edge ran through the east-bank land, so it is detoured along coastline way 2977893. Still doubtful: the DEM cannot confirm it.
- **Town wall ring** leaves the grid; clipped to the window.
- **Memorial markers** on the east bank sit where the DEM reads 23 m; marked not reachable.

## Inferred (flagged in the trace)

- **Era 1287.** The mapped castle and town-wall lines carried back unchanged; the castle walls were slighted in 1655, so today's heights are not 1287 measurements.
- **Identifications from position**: the Great Hall, north range, cross-wall gatehouse, east-barbican garden and stair turrets are read from where the mapped lines sit, not from labels.
- **Constructed layer (era `1287~built`, all `ev: schematic`, all with an assumed height and its rule):** 2 curtains (18 m, merlons), 8 towers (26 m, merlons), west barbican wall and 3 turrets (9 m and 12 m), east barbican wall and 3 turrets (8 m and 11 m), 5 gates (main west gate, barbican entrance, middle gate cut through both cross-wall lines, east gate), Great Hall (12 m), north service range (6 m), Granary (8 m), inner ward south range (10 m), two town-wall runs (7 m) and 6 town-wall towers (12 m).

## Not drawn, and why

- The rock-cut ditch, the stepped ramp to the west barbican, the Water Gate, the spur wall and quay, the outer-ward chapel, the constable's tower and the postern: no position in any source read, no plan found.
- The inner ward's room layout (hall, presence chamber, privy rooms): the sources name them but do not place them.
- Roofs, floors, windows, the white plaster, the conical roof of the Chapel Tower: not evidenced in position or form.
- The town's three gates and 21 towers beyond the window; the town's 1287 buildings.
- Heights are all assumptions in the constructed layer; the only sourced heights are OSM tags and the Cadw "at least 6 m" for the town wall.

## To reach T2

A measured plan or survey of the castle (Cadw, RCAHMW or Coflein drawings, or the Edwardian castles survey literature), a dated view (for example 18th-century prints) to date the roofs and the ditch, and geometry from the fetch-geometry run to replace the pipeline's derived coastline.

## Sources

Wikipedia "Conwy Castle" and "Conwy town walls"; Cadw listing text for Conwy Castle (listed building 3250) and Cadw scheduled-monument full report CN014 (id 3413); Gatehouse Gazetteer (Conwy Castle, sites 95 and 96); Castles of Wales (castlewales.com, Conwy and Conwy town walls); World History Encyclopedia "Conwy Castle"; OpenStreetMap contributors (ODbL); Terrarium tiles. All were read through WebFetch from WebSearch results; none was read in full as a primary survey.
