# Ten Forts of India — handoff for a conversation with web access (after R22)

This brief is for continuing the project in a conversation that can reach online sources. Everything that could be done without sources has been done; what remains is research, data acquisition and verification, plus a few large engineering items. Read sections 1–3 before starting; sections 4–6 are the work, in priority order.

## 1. What exists

The game is one self-contained web page (`Ten-Forts-Revised-R21.html`, about 8.3 MB) built from the source in `Ten-Forts-R21-source.zip`. It runs offline except for its fonts.

| Area | State |
| --- | --- |
| Twenty playable forts, 51 periods | The first ten (Murud-Janjira, Sindhudurg, Golconda, Gwalior, Chittorgarh, Kumbhalgarh, Mehrangarh, Jaisalmer, Daulatabad, Gingee), hand-built; ten more from the fort generator, the rest of the UNESCO Maratha Military Landscapes (Raigad, Rajgad, Pratapgad, Shivneri, Lohagad, Salher, Panhala, Khanderi, Suvarnadurg, Vijaydurg), each with a historic period and today |
| Battles | Company-level real-time battles; Janjira c. 1760 (defend as Siddis, or assault as Marathas with ladders), Gwalior 1780 night escalade |
| Campaign | Turn-based (a week a turn) on real coastlines with hex movement: regions A–B (Konkan and Deccan, 41 sites), C (Goa–Kanara–Malabar, 20), D (eastern Deccan and Tamil coast, 21); food, men, ships, seasons, sieges, economy, enemy AI; assaults at playable forts are fought in real time and losses carry back |
| Map of forts | 138 forts across India, Pakistan, Afghanistan, Bangladesh, Nepal, Bhutan, Sri Lanka, in sets and campaign regions A–F |
| Atlas | Subcontinent / Asia / World at 27 dates (500 BCE–2010) from historical-basemaps, plus 7 key dates for South Asia shown as inferred zones of control; linked both ways with the campaign |
| Life in the forts | Seasons, weather, day and night, farming, herds, stores and rations, markets, wild animals, garrisons in every building |

## 2. How to build and test

From the `source/` folder (Node 18+; Python 3 with Playwright for the browser tests):

1. `npm install` (three.js, esbuild, gltf-transform).
2. `node build.mjs` builds `dist/index.html`; `node build.mjs --level src/levels/<fort>.js` builds one fort.
3. `node tools/smoke.mjs` must report 51 periods with "unreachable places: none".
4. `python3 tools/sim.py <fort> <era> <test>` steps the game headlessly. Tests that must pass: `murud-janjira 1760 battle-orders`, `murud-janjira 1760 assault`, `gwalior 1780 siege2`, `murud-janjira 1774 tame coop campaign2 regions`, `kumbhalgarh 1458 odds`.
5. `CHANGES.md` records every revision; keep adding to it.

## 3. The evidence model (keep it)

Every fact carries a grade, and the game shows it:

| Grade | Meaning |
| --- | --- |
| measured | from a survey or dataset, with its source |
| documented | stated in a historical or heritage source (UNESCO, ASI, state archaeology, gazetteers, standard histories) |
| inferred | reasoned from general knowledge or practice; positions from memory (about ±2 km) |
| unknown | not known |

Rules: never upgrade a fact without a source; record the source in the row; keep reconstructions labelled in the game. Current totals (export in 4.1): about 434 facts, of which 1 measured, about 50 documented, the rest inferred.

## 4. Research and data tasks (need web access)

### 4.1 Verify positions and ownership dates (highest priority)

- Export: `node tools/export-evidence.mjs > checklist.csv` (columns: region, id, name, field, value, ev, source, verified_lat, verified_lon, notes). Fields are `position` or `phase:N` (an ownership phase of a campaign site).
- For each row: find the fort's or town's position (OpenStreetMap, Wikidata, ASI or state archaeology pages, UNESCO nomination maps), fill `verified_lat`/`verified_lon` to 4 decimals, set `ev` to `measured` or `documented`, and put the source (URL or citation) in `source`. For phases, confirm or correct the dates and owner in `notes` and set `ev` and `source`.
- Import: `node tools/import-evidence.mjs checklist.csv` writes `src/data/verified.js`, applied on every start. Rows without a source or with `ev` inferred are ignored by design.
- Priorities: the 12 UNESCO Maratha Military Landscapes components (Salher, Shivneri, Lohagad, Khanderi, Raigad, Rajgad, Pratapgad, Suvarnadurg, Panhala, Vijaydurg, Sindhudurg, Gingee), then all campaign sites, then the catalogue.
- Dates needing particular care (coarse or uncertain): Janjira's founding phases (wooden fort, stone fort c. 1567); Padmadurg, Underi and Kolaba dates; Sindhudurg 1765–66 (Company capture); everything between 1689 and 1818 for Raigad, the Sahyadri forts and Konkan ports; Chapora 1683; Mirjan's attribution; St Angelo 1772–90; Gooty 1740–75; Kondapalli 1766; Pondicherry 1765–1954 (it changed hands several times); Thirumayam 1687.
- Suggested sources: UNESCO World Heritage nomination dossier for the Maratha Military Landscapes of India (2025, includes maps); Archaeological Survey of India monument pages; Maharashtra State Archaeology; the Bombay Presidency district gazetteers (Kolaba, Ratnagiri, Poona, Satara, Kolhapur, Ahmadnagar) and the Imperial Gazetteer of India (1909), both online via DSAL (dsal.uchicago.edu); Grant Duff, *History of the Mahrattas*; Sarkar, *Shivaji and His Times*.

### 4.2 Elevation for every fort and every campaign region

- Source: Copernicus DEM GLO-30 (free, https://registry.opendata.aws/copernicus-dem/; tiles named `Copernicus_DSM_COG_10_N18_00_E072_00_DEM.tif`). It is surface elevation (includes buildings and trees), not bathymetry.
- Per fort: extract a grid like `src/data/dem-janjira.js` (format: `{ origin: [lat, lon], radius: 1000, step: 20, n: 101, heights: [...row-major, metres, 0 for sea or no data], source, url, note }`), centred on the verified position. Do this for the ten playable forts first.
- Per campaign region: a coarser grid (about 1 km) over the region boxes in `src/game/campaign.js` (`CAMPAIGN_REGIONS[...].bb`), so hex terrain (lowland, ghats, plateau) can come from elevation and slope instead of the current inferred distance-inland bands (`buildWorld()` in `campaign.js`). Mark terrain `measured` once done.
- Use: the levels' terrain is defined in each `src/levels/<fort>.js` (`terrain(era)` ops); a DEM can drive a heightfield op, or validate the existing modelled terrain. Keep provenance in comments.

### 4.3 Fort footprints, walls and plans

- First priority: the ten generated forts (`src/levels/maratha.js`). Their outlines are noisy ellipses and their gate angles and building positions are guesses. Replace each sheet's `size`, `hill`, `gates`, `buildings`, `temples`, `tanks` and place positions with surveyed values (the UNESCO nomination dossier has plans of all twelve components), or add a traced `outline: [[x, y], ...]` option to `gen.js` in place of the ellipse.

- For each playable fort, get a plan: ASI or state archaeology plans, the UNESCO nomination dossier (for the Maratha components), measured drawings in published works, OpenStreetMap ways (`historic=citywalls`, `barrier=wall`, `building`, `historic=fort`), or traced drone and satellite imagery where the licence allows.
- Deliver as GeoJSON in WGS84 with a `source` and `ev` per feature (walls, bastions, gates, major buildings, tanks). The levels currently use traced data for Janjira (`src/levels/janjira.trace.js`, `janjira.tint.js`) and modelled data elsewhere; a converter from GeoJSON to each level's local metres (x east, y north, origin at the fort's position) is needed (see `tools/osm2level.mjs` for the projection used).
- Water access per fort (sea landing, river, tanks, wells, cisterns) with sources; the campaign uses `water` on each site.

### 4.4 Real street plans and the full list of forts (OpenStreetMap)

- Town layouts: `node tools/osm2level.mjs --query <lat> <lon> <radius_m>` prints an Overpass query; run it at overpass-turbo.eu or the Overpass API, export GeoJSON, then `node tools/osm2level.mjs export.geojson <level-id> <lat> <lon>` writes `src/levels/<id>.osm.js`; call `W.applyOSM(OSM)` in the level's `build()`. Start with Jodhpur below Mehrangarh (26.2980, 73.0185, 1500 m) and the town round Golconda (17.3833, 78.4011). Check the street plan aligns with the level's coordinates before importing.
- All forts: `node tools/osm2forts.mjs --query` prints the Overpass query for every fort tagged in OpenStreetMap across South Asia; `node tools/osm2forts.mjs export.geojson` writes `src/data/forts-osm.js` (shown as grey dots on the map of forts). Then sort them into sets and regions.
- Credit "© OpenStreetMap contributors" (ODbL) in SOURCES and the game's Sources panel. Do not use Google Maps data.

### 4.5 Historical borders at the seven key dates

- Replace the inferred zones in `src/data/keydates.js` (1526, 1605, 1674, 1761, 1799, 1857, 1947) with traced polygons: set `poly: [[lon, lat], ...]` and `ev: 'documented'` (and a `source`) on each power; the atlas draws a polygon in place of its zone (the drawing for `poly` still needs adding in `src/game/atlas.js` `zonesImage()` and render; currently only zones are drawn).
- Sources to look for: Joseph Schwartzberg, *A Historical Atlas of South Asia* (DSAL hosts it online); Irfan Habib, *An Atlas of the Mughal Empire*; the Imperial Gazetteer atlas (1909) for 1857 and after; Survey of India maps for 1947; check licences before tracing.
- Consider more dates where the subcontinent changes fast (1565, 1687, 1707, 1739, 1765, 1818, 1849).
- The world layer is historical-basemaps (GPL-3.0); its README points to Atlas Pi (atlaspi.it), a REST API of historical polities with cited sources and per-record confidence. It may be a better-sourced alternative for some dates; check its licence and terms.

### 4.6 Ownership and events, 1689–1818, and battle scenarios

- Fill the gaps in each campaign site's phases (Mughal conquests after 1689, the Maratha recovery, the Angre and Peshwa periods, the Anglo-Maratha wars, Mysore's conquests and losses, the Carnatic wars).
- Recorded sieges that the forts' periods already depict, ready to become battle scenarios with sourced forces, positions and outcomes: Golconda 1687 (Aurangzeb; the gate opened by treachery), Chittorgarh 1567–68 (Akbar; mines and the jauhar), Daulatabad 1633, Gingee 1690–98 and 1761, Sinhagad 1670 (Tanaji's escalade), Arcot 1751, Srirangapatna 1799. Each scenario is data in the level file (see the `BATTLES` object in `src/levels/janjira.js` and `W.def.battles` in `gwalior.js`).

### 4.7 Fact-check the "Learn more" notes and the lore

- 40 notes in `src/game/lore.js` and site notes in the data files were written from memory. Check each against a source, correct it, and add a citation field.

### 4.8 Dress, arms and people by period and region

- The characters are palettes over one canonical body (`assets/characters/CHARACTER_KIT.md`, `characters.json`). For each army and period (Siddi, Maratha, Rajput, Mughal, Deccani, Company sepoys, Portuguese, Dutch, French, Nayaka, Mysore), gather visual references (Company paintings, Rajput and Deccani miniatures, museum arms collections) and set palettes, turbans and arms with sources.

### 4.9 Licensing review (before any public release)

- historical-basemaps (atlas borders): GPL-3.0. 0 A.D. models and character bodies: CC BY-SA 3.0, which is not formally compatible with GPL-3.0. Natural Earth: public domain. Copernicus DEM: free with attribution. OpenStreetMap: ODbL.
- Decide: keep the atlas data and the 0 A.D. assets as separately licensed parts, replace one (for example, Atlas Pi or self-traced borders for the atlas), or seek advice. `CREDITS.md` records the current position.

## 5. Engineering tasks (no web needed, larger)

1. A much larger playable map around each fort: keep the fort at full detail, add a coarse outer region several kilometres across (from the DEMs in 4.2), with fields, villages, roads and rivers; armies crossing both; distant companies drawn as blocks (level of detail).
2. Enemy AI that scales walls and assaults forts in real time (so the defence scenarios can be attacked by the computer).
3. Campaign regions E (Sri Lanka) and F (the northern approaches), as data files like `south.js`, plus their starting scenarios.
4. Campaign and atlas date sync (moving the atlas slider could optionally move a sandbox campaign), and polygon drawing for documented key-date polities (4.5).
5. Formation marching, guns moving with companies, ladders carried by companies.
6. Regenerate the downloadable 3D models and plans for every fort (`tools/export.mjs`), which were last regenerated for Janjira in R6.

## 6. Known limits to keep in mind

- Most positions and many ownership dates are inferred; the game labels them so, but they are not yet verified.
- Campaign terrain is inferred from distance inland; economy figures (population, harvests, trade) are inferred.
- The key-date zones are reconstructions from each power's seats, not borders.
- The world atlas is world-scale and simplifies the subcontinent's smaller states heavily.
- Performance was tested only on a software renderer; check frame rates on real hardware, especially Mehrangarh and the campaign's region D (16,000 hexes).

## 7. Where things live (source tree)

| Path | What |
| --- | --- |
| `src/core/` | world builder, walls, bastions, buildings, props, camps, terrain, pathfinding, ground detail, fields, towns |
| `src/game/` | app, scene, people, figures, characters, fauna, play, battle, encounter, farm, climate, chrome, audio, lore, campaign, atlas, fortmap |
| `src/levels/` | one file per hand-built fort; `kit.js` helpers; `gen.js` the fort generator; `maratha.js` its ten data sheets |
| `src/data/forts.js` | the catalogue (138 forts, sets, regions, UNESCO list) |
| `src/data/konkan.js`, `south.js` | campaign regions A–B, C, D (sites, phases, routes, seasons, economy) |
| `src/data/keydates.js` | seven key dates (inferred zones) |
| `src/data/atlas-data.js`, `basemap.js` | historical-basemaps (27 dates) and Natural Earth (India's view) |
| `src/data/dem-janjira.js` | Copernicus GLO-30 round Janjira (from the R16 build) |
| `src/data/verified.js` | verified facts (written by `tools/import-evidence.mjs`) |
| `assets/fauna/`, `assets/characters/` | 0 A.D. animals and character bodies (CC BY-SA 3.0) |
| `tools/` | build, smoke, sim, shoot, export, osm2level, osm2forts, export-evidence, import-evidence |
