# Licences

forts.world mixes original work with open data. The root `LICENSE` (Apache License 2.0) covers the project's own
code and writing. Data and media that come from elsewhere keep their own licences, listed below; the Apache licence
does not relicense them. Attribution lines that must travel with the published site are collected in `NOTICE`.

## Project work: Apache-2.0

Everything not listed in the next section: the game and viewers (`src/`, `build*.mjs`), the pipelines and tools
(`tools/`), the pages in `web/` (their code), tests, the curation files (`tools/trace/curation/`), research notes and
docs (`docs/`), the ledger (`docs/fort-fidelity/ledger.csv`), `content/`, and `assets/characters/characters.json`.
Copyright 2026 Madhav Baliga (A System of Cells).

## Third-party data and media

| Where | What | Licence and attribution |
|---|---|---|
| `data/geometry/`, `data/traces/`, `src/levels/*.trace.js`, `data/world-raw/` (OSM extracts), `web/fort-search/data/`, the generated `web/forts-of-the-world/data/` | Outlines, walls, buildings, roads and water from OpenStreetMap, and the traces and scenes built on them | © OpenStreetMap contributors, [ODbL 1.0](https://opendatacommons.org/licenses/odbl/1-0/). These derived databases stay under ODbL; pages and scenes drawn from them are Produced Works and must credit OpenStreetMap. |
| Heights in the traces, `src/data/strategic-dem-grid.js`, `src/goa/terrain.json` | Mapzen Terrain Tiles (Terrarium) on AWS Open Data | Credit lines from [tilezen/joerd attribution](https://github.com/tilezen/joerd/blob/master/docs/attribution.md); for South Asia: SRTM and GMTED2010 courtesy of the U.S. Geological Survey, ETOPO1 U.S. NOAA. Full list in `NOTICE`. |
| `data/world/`, `data/sites.csv`, `data/sites-raw/`, the wiki in `docs/wiki/` | Site records merged from Wikidata, OpenStreetMap, the UNESCO World Heritage List, Smith & Newton 2024 and the project catalogue | Wikidata is [CC0](https://creativecommons.org/publicdomain/zero/1.0/); the OpenStreetMap rows are ODbL 1.0, so the merged tables are offered under ODbL 1.0 with these credits. The UNESCO extract (`data/sites-raw/unesco/in-region.json.gz`) holds only ids, names, coordinates, categories and inscription years, credited to the UNESCO World Heritage Centre; the raw list XML with UNESCO's descriptions is not kept. |
| `src/data/smith-newton-2024.json`, `data/third-party/smith-newton-2024/` | Fortification records from the supplementary workbook of Smith, M. L. & Newton, C. (2024), "Cartographies of warfare in the Indian subcontinent", *Journal of Big Data*, [doi:10.1186/s40537-024-00962-1](https://doi.org/10.1186/s40537-024-00962-1) | The article is [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The workbook is published with it and carries no separate statement, so it is treated as CC BY 4.0. Converted to JSON (`tools/import-smith-newton.py`). |
| `src/data/basemap.js`, `src/data/land.json`, the generated `web/home/data/land-110m.json` and `countries-110m.json` (from world-atlas, ISC) | Natural Earth borders, coastlines and rivers | Public domain. |
| `web/home/data/dem10.png`, `web/home/data/dem30.png` | Global relief at 10 and 30 arc-minutes, from "Earth topography 10 arc-minute grid" by Fatiando a Terra ([doi:10.5281/zenodo.5882203](https://doi.org/10.5281/zenodo.5882203)), itself resampled from ETOPO1 (U.S. NOAA, public domain) | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Repacked as lossless PNG (metres + 32768 in red and green); the 30′ grid is a 3×3 mean of the 10′ one. |
| The generated `web/home/data/sites.json` and `undated.json` | Site points from `data/world/` | As `data/world/`: Wikidata CC0, OpenStreetMap rows ODbL 1.0; the home page credits both. |
| `src/data/dem-janjira.js` | Copernicus DEM GLO-30 around Murud-Janjira | Produced using Copernicus WorldDEM-30 © DLR e.V. 2010-2014 and © Airbus Defence and Space GmbH 2014-2018, provided under COPERNICUS by the European Union and ESA. |
| `src/goa/terrain.json` (land cover) | ESA WorldCover 2021 | © ESA WorldCover project 2021, contains modified Copernicus Sentinel data (2021) processed by the ESA WorldCover consortium; [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). |
| `data/plans/` | Plans, maps and photographs used as tracing references | Each file's licence, author and source page are in its folder's `manifest.json` (or, where the download was retried, in `data/plans/search/<id>.json`). Most are public domain or CC0; three are CC BY 3.0 and two are CC BY-SA 4.0 (the Chittorgarh and Gwalior fort maps). They are reference material, not textures, and are never shipped in pages. |
| `web/home/img/people/` | Watercolour portraits of the time map's viewpoints, made for this project by Madhav Baliga with ChatGPT image generation (2026-11-27) | © 2026 Madhav Baliga, all rights reserved; not covered by the Apache licence. Ask before reusing them. |
| `web/fort-search/vendor/` | Leaflet | BSD-2-Clause, licence file alongside. |
| npm dependencies (not committed) | three.js (inlined into built pages), MapLibre GL JS (inlined into `south-asia-detail.html`), esbuild | MIT, BSD-3-Clause, MIT. |

Fonts are linked from Google Fonts (SIL Open Font Licence) and are not redistributed here.

## Kept out of this repository

These were part of the earlier IN-RTS experiment and stay there. Do not add them here.

| What | Why |
|---|---|
| 0 A.D. animal models and the three character bodies (`assets/fauna/`, `assets/characters/*.glb`) | CC BY-SA 3.0: share-alike would bind every page that embeds them. The game draws its own figures without them. |
| Historical borders from historical-basemaps (`src/data/atlas-data.js`) | GPL-3.0: bundling it would put the built page under the GPL. The file here is a stub; the atlas says borders are missing. |
| HydroRIVERS extract (`src/data/hydrorivers.js`) | The HydroSHEDS licence forbids distributing the data on its own, which a public repository does. The file here is a stub; Natural Earth rivers remain. |
| Janjira ground colours (`janjira.tint.js`) | Resampled pixels of a drone photograph whose licence was never recorded. |

## Adding material

- Textures and models: CC0 only (for example ambientCG, Poly Haven, Quaternius, Kenney), recorded in this file.
- No CC BY-SA or NC pixels in anything shipped, and nothing from Unsplash or Pexels.
- Do not trace OpenStreetMap into data released under another licence.
- Record the licence of every new image or dataset where it is stored (`manifest.json` for plans) and add a row above.
