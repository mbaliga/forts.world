# Mehrangarh: research pass

Batch-0 run, 2026-11-15 (scheduled run). Site id `mehrangarh`. Tier reached **T1** (status `needs-plan`). Curation: `tools/trace/curation/mehrangarh.mjs`; trace: `src/levels/mehrangarh.trace.js`; level: `src/levels/mehrangarh-t1.js`. Standing rules: no invented heights, no invented gates, no constructed layer. The level is registered in `src/levels/alpha-x0.js`.

## Mapped (OpenStreetMap and terrain)
Outline is OSM way 31725311 (Q1483099). 130 elements: 9 wall lines, 5 water bodies, 6 markers, 69 buildings within 40 m, 41 paths. The city buildings below the cliff are cut off. The older hand-built scene stays in the repo and is replaced only in the level registry.

Terrain is Terrarium z15 (about 30 m SRTM-derived, smoothed), so scarps, ditches and terraces are not resolved. Only one era, "today", is drawn: no earlier era was carried back because no dated source was read.

## Plans and images found
Commons search returned gazetteers and photos only; no plan.

## Not done in this run
Written history (builders, sieges, dates) was not researched or cited: the sandbox web fetch was refused for unattended runs, and search returned links only. None of it is in the scene. No image was downloaded or used as a texture.

## Missing evidence for T2
A plan of the gate sequence (Jayapol, Fatehpol, Lohapol), the palace courts and phases; wall heights.

## Sources
- OpenStreetMap contributors (ODbL), fetched by the fetch-geometry Action.
- Terrarium terrain tiles per AWS Open Data.
- Wikimedia Commons search results in `data/plans/search/mehrangarh.json` (candidates only; licences not yet verified).
