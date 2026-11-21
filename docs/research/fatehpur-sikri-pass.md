# Fatehpur Sikri: research pass

Batch-0 run, 2026-11-15 (scheduled run). Site id `fatehpur-sikri`. Tier reached **T1 (location-only)** (status `needs-plan`). Curation: `tools/trace/curation/fatehpur-sikri.mjs`; trace: `src/levels/fatehpur-sikri.trace.js`; level: `src/levels/fatehpur-sikri-t1.js`. Standing rules: no invented heights, no invented gates, no constructed layer. The level is registered in `src/levels/alpha-x0.js`.

## Mapped (OpenStreetMap and terrain)
No closed fort or city-wall polygon is mapped. The default site match was the Jama Masjid relation 6761058 (437 m from the ledger point), which is a mosque, so it was not used as an outline (skipSite). Drawn: 10 wall fragments, 79 roads, 17 buildings, 5 water bodies and a cliff line in a 1.8 km window.

Terrain is Terrarium z15 (about 30 m SRTM-derived, smoothed), so scarps, ditches and terraces are not resolved. Only one era, "today", is drawn: no earlier era was carried back because no dated source was read.

## Plans and images found
Commons candidates (search 2026-11-15): "General Plan of Fatehpur Sikri City India 1917" and "General plan of buildings Fatehpur Sikri 1917" (ASI, likely public domain, licence not yet checked), "Plan of Fatehpur Sikri India", "Map of Fatehpur Sikri". The 1917 general plan was queued in data/plans/REQUEST.csv. ASI annual reports 1909-10 are also on Commons.

## Not done in this run
Written history (builders, sieges, dates) was not researched or cited: the sandbox web fetch was refused for unattended runs, and search returned links only. None of it is in the scene. No image was downloaded or used as a texture.

## Missing evidence for T2
A georeferenced plan of the palace-city to place the Buland Darwaza, Diwan-i-Am, Diwan-i-Khas, Jama Masjid, Panch Mahal and the wall circuit with its gates; a closed OSM wall circuit.

## Sources
- OpenStreetMap contributors (ODbL), fetched by the fetch-geometry Action.
- Terrarium terrain tiles per AWS Open Data.
- Wikimedia Commons search results in `data/plans/search/fatehpur-sikri.json` (candidates only; licences not yet verified).

## 2026-11-17 daily run: T2 (partial)
Documented (plan): Smith, "Fathpur-Sikri, General Plan of the City", in Akbar the Great Mogul (Oxford 1917), Commons File:General Plan of Fatehpur Sikri City India 1917.jpg (licence "No restrictions", data/plans/fatehpur-sikri/). Registered to the OSM frame by a free similarity fit over 8 control points (data/plans/fatehpur-sikri/registration.json): residuals 3-25 m, fitted rotation 37.8 degrees against about 38 degrees for the printed north arrow, fitted scale 1.43 m/px against 1.33 m/px from the printed bar (7% over). Two control points (the Gwalior and Tehra gates) are matched by guess to two unnamed OSM monument nodes on the wall, so the fit is less independent than it looks.
Placed: Kashmir Serai (plan 2) and Mint caravanserai (plan 6) as footprints (+-35 m); ten numbered sites (Jami Masjid, Panch Mahal, Jodh Bai, Sultana's Apartment, Treasury, Naubat Khana, Baradari, Daftar Khana, Stables, Abul Fazl's House) as label markers (+-40 m). Eras 1917 and today.
Not placed: the plan wall circuit and the Delhi, Lal, Agra, Birbal, Chodanpol, Ajmir and Chor gates all fall outside the +-900 m terrain window (computed positions 940-1700 m out); no gate is cut and no wall height is stated. No constructed layer because no sourced height was read.
Missing: wider geometry/DEM window (about 2.5 km) to place the circuit and gates; ASI measured drawings of the palace group; heights; dated phases.
Not used: CC BY-SA sketches of the Jami Masjid (Commons, G41rn8).
