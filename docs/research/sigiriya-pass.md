# Sigiriya: research pass

Batch-0 run, 2026-11-15 (scheduled run). Site id `sigiriya`. Tier reached **T1** (status `needs-plan`). Curation: `tools/trace/curation/sigiriya.mjs`; trace: `src/levels/sigiriya.trace.js`; level: `src/levels/sigiriya-t1.js`. Standing rules: no invented heights, no invented gates, no constructed layer. The level is registered in `src/levels/alpha-x0.js`.

## Mapped (OpenStreetMap and terrain)
Geometry: the first fetch (2026-11-11) failed, re-fetched by the Actions pipeline on 2026-11-15. Outline is OSM way 23810659 (archaeological_site, bare_rock, 23 vertices). 157 elements: 19 water bodies (the garden pools), a cliff line, Lion's Paw Terrace, 57 mostly modern buildings (hotels, ticket office, museum), 70 paths, 4 markers (Audience Hall, Lion's Paws, Apsara Paintings and others).

Terrain is Terrarium z15 (about 30 m SRTM-derived, smoothed), so scarps, ditches and terraces are not resolved. Only one era, "today", is drawn: no earlier era was carried back because no dated source was read.

## Plans and images found
Commons search returned a "plan view from top" file and many photos; none checked for a usable plan.

## Not done in this run
Written history (builders, sieges, dates) was not researched or cited: the sandbox web fetch was refused for unattended runs, and search returned links only. None of it is in the scene. No image was downloaded or used as a texture.

## Missing evidence for T2
A survey plan of the summit palace, the terraced and water gardens, the ramparts and moat, the Mirror Wall and gates; dated phases; a finer terrain model for the rock.

## Sources
- OpenStreetMap contributors (ODbL), fetched by the fetch-geometry Action.
- Terrarium terrain tiles per AWS Open Data.
- Wikimedia Commons search results in `data/plans/search/sigiriya.json` (candidates only; licences not yet verified).
