# Lahore Fort: research pass

Batch-0 run, 2026-11-15 (scheduled run). Site id `lahore-fort`. Tier reached **T1** (status `needs-plan`). Curation: `tools/trace/curation/lahore-fort.mjs`; trace: `src/levels/lahore-fort.trace.js`; level: `src/levels/lahore-fort-t1.js`. Standing rules: no invented heights, no invented gates, no constructed layer. The level is registered in `src/levels/alpha-x0.js`.

## Mapped (OpenStreetMap and terrain)
Outline is OSM way 105841051 (castle, about 490 x 534 m, Q613720). The first auto build picked a building (Sheesh Mahal) as the site, so build options select this way. 293 elements: 20 wall lines, 18 retaining walls, 173 building footprints, 11 markers (Diwan-i-Aam, Sehdari, Kala Burj, Lal Burj, Sikh Burj, Masti Gate, Akbar's Palace and others), 15 water bodies. Three markers (Diwan-i-Aam, Kala Burj, Lal Burj) sit on a wall or footprint and are flagged unreachableOk.

Terrain is Terrarium z15 (about 30 m SRTM-derived, smoothed), so scarps, ditches and terraces are not resolved. Only one era, "today", is drawn: no earlier era was carried back because no dated source was read.

## Plans and images found
Commons candidate: "Plan map of the citadel of Lahore, by C. J. Hill (F10-25)" (licence and date not yet checked; queued in data/plans/REQUEST.csv). Also ASI annual reports 1904-05 and vol. 14 on Commons.

## Not done in this run
Written history (builders, sieges, dates) was not researched or cited: the sandbox web fetch was refused for unattended runs, and search returned links only. None of it is in the scene. No image was downloaded or used as a texture.

## Missing evidence for T2
A survey plan dated by phase (Mughal, Sikh, British) to place the Alamgiri and Masti gates, Diwan-i-Aam, Moti Masjid, Sheesh Mahal and Picture Wall; wall heights.

## Sources
- OpenStreetMap contributors (ODbL), fetched by the fetch-geometry Action.
- Terrarium terrain tiles per AWS Open Data.
- Wikimedia Commons search results in `data/plans/search/lahore-fort.json` (candidates only; licences not yet verified).
