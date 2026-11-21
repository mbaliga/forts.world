# Tughlaqabad Fort: research pass

Batch-0 run, 2026-11-15 (scheduled run). Site id `tughlaqabad`. Tier reached **T1** (status `needs-plan`). Curation: `tools/trace/curation/tughlaqabad.mjs`; trace: `src/levels/tughlaqabad.trace.js`; level: `src/levels/tughlaqabad-t1.js`. Standing rules: no invented heights, no invented gates, no constructed layer. The level is registered in `src/levels/alpha-x0.js`.

## Mapped (OpenStreetMap and terrain)
Outline is OSM way 102684251 (castle, Q2511605; the default match was the palace ruins way, 215 m away). 50 elements after pruning to 40 m of the outline: 11 wall lines, 163 paths, 2 markers, a baoli, a waterway and a water body. Modern housing around the fort is dropped.

Terrain is Terrarium z15 (about 30 m SRTM-derived, smoothed), so scarps, ditches and terraces are not resolved. Only one era, "today", is drawn: no earlier era was carried back because no dated source was read.

## Plans and images found
Commons search returned ASI report volumes, a photo of an underground passage and unrelated images; no plan.

## Not done in this run
Written history (builders, sieges, dates) was not researched or cited: the sandbox web fetch was refused for unattended runs, and search returned links only. None of it is in the scene. No image was downloaded or used as a texture.

## Missing evidence for T2
An ASI plan with the citadel, Vijay Mandal, palace area, gates and the causeway to the tomb; wall heights.

## Sources
- OpenStreetMap contributors (ODbL), fetched by the fetch-geometry Action.
- Terrarium terrain tiles per AWS Open Data.
- Wikimedia Commons search results in `data/plans/search/tughlaqabad.json` (candidates only; licences not yet verified).
