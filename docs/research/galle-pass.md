# Galle Fort: research pass

Batch-0 run, 2026-11-15 (scheduled run). Site id `galle`. Tier reached **T1** (status `needs-plan`). Curation: `tools/trace/curation/galle.mjs`; trace: `src/levels/galle.trace.js`; level: `src/levels/galle-t1.js`. Standing rules: no invented heights, no invented gates, no constructed layer. The level is registered in `src/levels/alpha-x0.js`.

## Mapped (OpenStreetMap and terrain)
Outline is OSM relation 8386702 (World Heritage property, Q2507050). 376 elements: 5 wall lines, 3 coastline and 3 water polygons (sea derived from the coastline and checked against the DEM: median 1.5 m inside vs 10.9 m outside), 196 roads, 100 buildings (nearest the centre; 446 further footprints dropped for the 400-element trace budget), 50 markers. 33 mapped paths meet wall lines (candidate openings, not drawn).

Terrain is Terrarium z15 (about 30 m SRTM-derived, smoothed), so scarps, ditches and terraces are not resolved. Only one era, "today", is drawn: no earlier era was carried back because no dated source was read.

## Plans and images found
Strongest plan evidence of the run. Commons: Nationaal Archief / Atlas of Mutual Heritage "AMH-4546-NA Map of the fort at Gale", "AMH-6706-NA Map of the fort at Galle", "AMH-4543-NA", "AMH-7076-KB Map of the castle at Punto Gale"; BnF Gallica "Plan de Gale relatif au projet de 1787"; Royal Museums Greenwich Admiralty chart of 1800; "Gallle Dutch Fort map". The first two were queued in data/plans/REQUEST.csv. Licence and registration not yet done.

## Not done in this run
Written history (builders, sieges, dates) was not researched or cited: the sandbox web fetch was refused for unattended runs, and search returned links only. None of it is in the scene. No image was downloaded or used as a texture.

## Missing evidence for T2
Registering a Dutch plan to place the bastions by name, the gates and the Dutch-era layout; bastion heights; the pre-1663 Portuguese form. This is the best T2 candidate in the batch.

## Sources
- OpenStreetMap contributors (ODbL), fetched by the fetch-geometry Action.
- Terrarium terrain tiles per AWS Open Data.
- Wikimedia Commons search results in `data/plans/search/galle.json` (candidates only; licences not yet verified).
