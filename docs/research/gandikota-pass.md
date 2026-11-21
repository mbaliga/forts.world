# Gandikota Fort: research pass

Alpha-U batch, 2026-11-14. Site id `gandikota`. Tier reached **T1** (status `needs-plan`). Curation: `tools/trace/curation/gandikota.mjs`; trace: `src/levels/gandikota.trace.js`. No plan, survey drawing or dated image was found, so nothing here is traced from a plan and no constructed layer is drawn. Standing rules: no invented heights, no invented gates, present-day roads and buildings on the "today" view.

## Mapped (OpenStreetMap and terrain)
- OSM has no closed fort outline. The auto-T1 builder took the Rani Mahal ruin (way 1501113060, 29 x 35 m) as "the outline"; that was wrong for the fort, so the curation demotes it to a ruin zone and the scene has no outline element.
- Eleven city_wall ways are drawn as separate wall lines (they do not close: 16 dangling endpoints, no closed way). Mapped as well: the Jama Masjid (and its 149 x 118 m compound), the Madhavaraya and Ranganayakulu temples and compounds, the Old ibadat khana, King house, Gun Foundry, a 199 x 187 m ruined wall enclosure (ruins=wall), a Buddhist stupa ruin, four ponds, the Penna river and farmland.
- Terrain: Terrarium z15 sampled every 8 m over a 1.8 km square (a build option, data/traces/build-options.json), about 30 m SRTM-derived, 315 m at the window centre. The Penna gorge is smoothed. The river and ponds are given a derived surface level (labelled derived).

## Documented in text (Wikipedia, not placed unless stated)
- Wikipedia: on the right bank of the Penna, about 15 km from Jammalamadugu; a sand fort was first built in 1123 by a Kakatiya Raja, a subordinate of Ahavamalla Someswara I; the Madhavaraya and Ranganatha temples are in ruins; the Jama Masjid has two minarets; a large vaulted granary is used as watchman's quarters.
- Wikipedia: the gorge between the Erramala hills and the river is "a mere 100 m" wide (uncited).

## Inferred
- None: with no dated extent in the source there is no carried-back era; the scene has the "today" era only.

## Conflicts and doubts
- The builder is a Kakatiya Raja in the text and a Kalyani Chalukya subordinate (Kaka Raja) in the infobox. The "101 towers" and Pemmasani Ramalinga Nayudu appear in the infobox only.
- The ledger point is 593 m from the fort centre of the mapped features; the build moved the origin to the Rani Mahal and the 1.8 km window covers the whole mapped enclosure.

## Missing evidence for T2
- A plan of the fort circuit (the ASI or Andhra Pradesh archaeology department): the full wall line, the towers, the gates, the granary, magazine and wells; dates for the extent of the fort. OSM "Entrance" ways lie at the temple and mosque compounds, not on a fort wall, so no gate is placed.

## Sources
- [Wikipedia: Gandikota](https://en.wikipedia.org/wiki/Gandikota) (read 2026-11-14)
- [OSM way 1501113060](https://www.openstreetmap.org/way/1501113060), [node 4523313979](https://www.openstreetmap.org/node/4523313979)
- OpenStreetMap contributors (ODbL); Terrarium terrain tiles per AWS Open Data.
