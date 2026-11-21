# Ranthambore Fort: research pass

Batch-0 run, 2026-11-15 (scheduled run). Site id `ranthambore`. Tier reached **T1** (status `needs-plan`). Curation: `tools/trace/curation/ranthambore.mjs`; trace: `src/levels/ranthambore.trace.js`; level: `src/levels/ranthambore-t1.js`. Standing rules: no invented heights, no invented gates, no constructed layer. The level is registered in `src/levels/alpha-x0.js`.

## Mapped (OpenStreetMap and terrain)
Outline is OSM way 254041053 (barrier=city_wall, 252 vertices); the default match was a tomb 266 m away, so build options select the wall way. Drawn: 8 wall lines, 2 mapped city gates (as markers), 6 tanks, 24 buildings, 17 paths. The terrain grid is 201 x 201 cells at about 10 m stride over about 2 km.

Terrain is Terrarium z15 (about 30 m SRTM-derived, smoothed), so scarps, ditches and terraces are not resolved. Only one era, "today", is drawn: no earlier era was carried back because no dated source was read.

## Plans and images found
Commons search returned only photos (Battis Khambha Chhatri) and no plan or survey.

## Not done in this run
Written history (builders, sieges, dates) was not researched or cited: the sandbox web fetch was refused for unattended runs, and search returned links only. None of it is in the scene. No image was downloaded or used as a texture.

## Missing evidence for T2
A plan naming the gates (Navlakha, Hathi Pol, Ganesh Pol, Andheri), the Hammir Mahal, Ganesh temple and Padmala talao; wall heights; finer terrain for the escarpment.

## Sources
- OpenStreetMap contributors (ODbL), fetched by the fetch-geometry Action.
- Terrarium terrain tiles per AWS Open Data.
- Wikimedia Commons search results in `data/plans/search/ranthambore.json` (candidates only; licences not yet verified).
