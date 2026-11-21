# Sources and licences

Every dataset, service, tool and reference the fort collection draws on. "Ships" means the data is copied into this repo or into models built from it. "Consulted" means we read it for facts or plans and did not copy its content. This is a working inventory, not legal advice; where a licence needs checking it says so.

## 1. Data that ships in the repo

| Source | What we take | Licence | Where it lives | Notes |
|---|---|---|---|---|
| [Wikidata](https://www.wikidata.org) | Site list, Q-ids, coordinates, classes, inception, heritage designations, UNESCO ids, sitelink counts | CC0 | `data/world/`, `data/sites.csv`, trace `wikidata`, `data/world-raw/enrich/` | Fetched with SPARQL by `tools/world/fetch-world.mjs` and `tools/fetch-sites.mjs`: by class (fortification, castle, fort and their subclasses; plus brochs and ringforts in `wikidata-extra/`, underground cities, cliff dwellings and talaiots in `wikidata-extra2/`, and 21 World Heritage records whose label or description calls them fortified but whose class is not a fortification, such as Hedeby, Old Sana'a, Harar Jugol and Brimstone Hill, in `wikidata-extra3/`), then two enrichment lookups of the 20,547 items that OSM castle, fort, ruin and archaeological-fortification objects tag but the class pull missed (18,434 of them have a sitelink, heritage designation or World Heritage id and count as notable). |
| [QLever](https://qlever.cs.uni-freiburg.de) (University of Freiburg) | Fast id lists for the Wikidata class pull | Service; returns Wikidata (CC0) | not stored separately | Used where the Wikidata Query Service timed out on subclass queries for large countries. |
| [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors | Outlines, walls, buildings, roads, waterways, coastline, cliffs, pit rims (closed `natural=cliff` rings), tags (`historic`, `castle_type`, `fortification_type`, `archaeological_site`, `heritage`, `ruins`) | ODbL 1.0 | `data/geometry/<id>/osm.json` (only for tracked sites), `data/world-raw/osm/` (country extracts: castles, forts, named or fortified ruins, and archaeological fortifications such as hillforts and ringforts), trace elements marked `osm:` | Attribution required. The merged world table mixes CC0 and ODbL rows; the `notable` and `osm` columns say which. Do not copy OSM rows into a CC0 dataset. OSM tags hillforts `historic=archaeological_site` + `archaeological_site=fortification` (the older `site_type=fortification` is also read); that pass gave 32,069 objects. Ruins are kept only when their `ruins` tag, name or classes say fortification (a multilingual word list in `tools/world/build-world.mjs`); the 50,443 left out are listed in `data/world/dropped-ruins.csv.gz`, and ledger rows that came from them are marked `excluded`. A `type=site` relation is a group of a site's parts, not an outline: the builder draws no outline for it unless one part spans most of the group. The site outline is a closed `historic=*` way or relation near the site (castle walls included), or an area that carries the site's own Wikidata id even without a `historic` tag (a keep mapped as `building=yes`); where there is neither, the model is terrain and mapped surroundings only (`location-only`). |
| [Terrarium terrain tiles](https://registry.opendata.aws/terrain-tiles/) (Mapzen/Tilezen on AWS Open Data) | Ground height at about 30 m, as `heights` grids in each trace | Mixed open terrain sources; follow the dataset's attribution page | `data/traces/*.trace.json` (raw tiles are not committed) | The mosaic draws on SRTM, GMTED2010 and ETOPO1 among others; datum and resolution vary by place. Heights are inferred ground, never wall heights. |
| [HydroSHEDS / HydroRIVERS](https://www.hydrosheds.org) | River network for the South Asia strategic map | HydroSHEDS licence: use inside an application, no distribution of the data on its own | not in forts.world (stub in `src/data/hydrorivers.js`) | Left in IN-RTS on 2026-11-21: a public repository would distribute it on its own. See `LICENSES.md`. |
| Smith & Newton 2024, Supplementary Material 1 (workbook) | South Asian fort dataset used as a catalogue source (`smith-newton:` ids in `data/sites.csv`) | CC BY 4.0 (the article's licence; the workbook carries no separate statement) | `src/data/smith-newton-2024.json`, `data/third-party/smith-newton-2024/` | Checked 2026-11-21 on the article page (doi:10.1186/s40537-024-00962-1). The original workbook is the authority; we only read it. Its licence is taken from the article's. |
| [UNESCO World Heritage List](https://whc.unesco.org/en/list/) | Site ids and names | UNESCO terms; ids and names only | `whc_id` column | No UNESCO text or images are copied. |
| Wikipedia lists of ASI monuments | Candidate names for Indian protected monuments | CC BY-SA | `data/sites-raw/` extracts | Names only; verify before republishing any wording. |
| [Wikimedia Commons](https://commons.wikimedia.org) | Historic plans and photos used as tracing references | Per file; recorded in `data/plans/` registers | `data/plans/<id>/` | Only files with a recorded licence are used. Photos are references, not texture sources. |
| [Natural Earth](https://www.naturalearthdata.com) land and country boundaries (1:110m, 1:50m, 1:10m), via the [world-atlas](https://github.com/topojson/world-atlas) 2.0.2 package | Coastlines and borders for the Forts of the World page | Public domain (world-atlas packaging: ISC) | Built into the page bundle by `tools/world/build-atlas.mjs`; not committed | No attribution required; credited on the page anyway. |


## 2. Services we call (data comes back under the licences above)

- Overpass API mirrors: `overpass.openstreetmap.fr` (the one that works from this sandbox), `maps.mail.ru/osm/tools/overpass` (overflow mirror used by `tools/model-pool.mjs`), `overpass-api.de`, `overpass.private.coffee`, `overpass.kumi.systems`.
- Wikidata Query Service (`query.wikidata.org`) and `wikidata.org/w/api.php`.
- AWS S3 Terrarium tiles (`s3.amazonaws.com/elevation-tiles-prod`).
- OpenTopoData SRTM 30 m query service (`api.opentopodata.org`), used for spot checks.
- GeoNames (`geonames.org`) for place-name cross-checks where noted in research passes.

## 3. References consulted (facts only, nothing copied)

Plans, surveys and descriptions are cited per site in `docs/research/*-pass.md` and `data/plans/*`. The main publishers are:

- Archaeological Survey of India (`asi.nic.in`, regional circles such as `asijodhpurcircle.in`) and National Monuments Authority (`nma.gov.in`).
- IGNCA (`ignca.gov.in`), National Virtual Library of India repository (`cslrepository.nvli.in`), Directorate of Archaeology and Museums Pakistan (`doam.gov.pk`).
- State gazetteers and tourism departments: Maharashtra, Rajasthan, Goa, Kerala, Karnataka, Madhya Pradesh, plus district sites (`*.nic.in`).
- Directorate General of Lighthouses and Lightships (`dgll.nic.in`), Census of India, Survey of India, MRSAC.
- Internet Archive and Google Books for out-of-copyright plans and gazetteers; Pahar and Granth Sanjeevani for scanned books; museum sites (for example `mehrangarh.org`).
- Academic papers cited by DOI in each research pass.
- Matmata pit dwellings (Tunisia): Mariabruna Fabrizi, "Matmata: underground dwellings for an extreme climate", SOCKS, 2023 ([link](https://socks-studio.com/2023/03/26/matmata-underground-dwellings-for-an-extreme-climate/), catalogue MAT-01) and Habitatio, Budapest University of Technology and Economics ([link](https://habitatio.epitesz.bme.hu/en/?p=4758), MAT-02), cited only for the typical pit size and depth that the schematic 7 m pit depth stands in for.

Rule: a plan scan is used only if its licence is recorded; a figure from a copyrighted book is cited for its numbers, never redrawn pixel for pixel.

## 4. Visual assets and units

| Asset | Licence | Status |
|---|---|---|
| 0 A.D. art (unit meshes, textures) | CC BY-SA 3.0 (code is GPL) | Not in forts.world: the models and character bodies stayed in IN-RTS on 2026-11-21 and the game draws its own figures. A CC0 body kit is still to be made. |
| Planned CC0 sources: Quaternius, Kenney, KayKit (per pack), Smithsonian Open Access 3D, Sketchfab CC0 filter, Poly Haven, ambientCG | CC0 (confirm per file) | Not yet integrated; a per-file manifest is the next step. |
| Public-domain paintings and prints | Public domain | Colour and costume reference only. |

Shipped textures must be CC0. No CC BY-SA, CC BY-NC, Unsplash or Pexels pixels.

## 5. Tools and libraries

three.js (MIT; GLTFExporter in the export tools, r128 from cdnjs in the Forts of the World page's 3D viewer), glTF-Transform and meshoptimizer (MIT), Leaflet (BSD-2-Clause), topojson-client (ISC), Playwright (Apache-2.0), plus the Node.js and Python scripts in `tools/`. Page typefaces: Archivo and IBM Plex Mono (SIL Open Font License), served by Google Fonts.

## 5a. The Forts of the World page

`tools/world/build-atlas.mjs` turns the world table, the ledger and every trace (automatic and hand-curated) into a static bundle: a core list of notable and programme sites, one file per 30-degree cell of map-only OpenStreetMap markers, 48 buckets of record details, compact 3D model shards, and the Natural Earth basemap. Every file except `meta.json` is stored as base64 of gzipped JSON (`.txt`), which keeps all 78,052 models (about 233 MB in all) inside one artifact version; the page unpacks them with the browser's DecompressionStream. The page source is `web/forts-of-the-world/index.html`. The bundle mixes Wikidata (CC0) and OpenStreetMap (ODbL) rows, so it carries the ODbL attribution on every view. The South Asian gazetteer also lists temples, tombs, palaces, stepwells and monasteries for the game; those rows appear on the page only when a Wikidata or OpenStreetMap fortification record stands for them. 3D models in the page are simplified from the traces (terrain resampled to at most 33 points a side, footprints rounded to 1 m, at most 180 buildings, 80 roads and 40 waterways per site); pits are cut into the terrain with a schematic 7 m depth unless one is mapped. The traces in `data/traces/` stay the record. The first ten forts also link to `ten-forts.html`, their hand-built, walkable reconstructions from the game (built by `tools/world/build-reconstructions.mjs`): walls, roofs and colours there are reconstructed from plans, views and photographs and labelled as such. That page leaves out the 0 A.D. models (CC BY-SA 3.0), the Janjira ground colours taken from a drone photograph whose licence is not recorded, and the strategic-map datasets (historical borders under GPL-3.0, HydroRIVERS, the Smith & Newton workbook).

## 6. Provenance inside every model

Each `data/traces/<id>.trace.json` carries its own `sources` list (title, licence, URL, fetch time) and an `evidence` block counting documented, mapped, inferred and derived elements. The per-fort wiki pages print that list verbatim.
