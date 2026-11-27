# Matmata troglodyte village (pit dwellings): fort-fidelity pass

Date of pass: 2026-11-27. Branch `dev`. Trace: `src/levels/matmata-troglodyte-village.trace.js` (from `data/traces/matmata-troglodyte-village.trace.json` plus
`tools/trace/curation/matmata-troglodyte-village.mjs`). Level: `src/levels/matmata-troglodyte-village.js` (`makeT1`, name "Matmata").
Raw geometry (`data/geometry/matmata-troglodyte-village/`) had not arrived when this pass was written; the pass uses the auto trace, which already holds the OSM shapes and the Terrarium grid.
Separate row: `matmata-kalaa-n11034987883` (ruins above the village, 1.4 km east, outside this window; a single OSM node and 4 buildings, nothing known of its form; not curated here).

This is not a fort. Each house is a sunken courtyard (a pit) with rooms cut into its walls and a sloping tunnel in. The scene draws the pits as holes and, in the constructed layer, a lining and an entrance ramp. Rooms are not drawn.

## Two layers

- **Documented layer** (eras `1948`, `1976`, `today`): OSM roads, buildings, walls, zones and wadis; the 26 OSM pit rims drawn as sunken courtyards **8 m deep, flagged inferred**; the Hotel Sidi Driss pit 2 coordinate as a marker. Nothing else is invented.
- **Constructed layer** (`<era>~built`): per pit a schematic lining wall (8 m) at the courtyard edge, a schematic entrance opening and an open-cut entrance ramp; three lateral tunnels between the candidate hotel pits (1976, today).

## Documented

| Fact | Value | Source | Strength |
|---|---|---|---|
| Courtyard | circular or square, 5-10 m across, no deeper than 9 m | Fabrizi 2023 (MAT-01) | description |
| Courtyard | about 9 m across, about 9 m deep; ramp-like tunnel entrance | Habitatio BME (MAT-02) | description |
| Pit | "diameter of several metres, 7 to 9 m deep"; sloping access passage dug from the hillside, sometimes very long and vaulted; cavities on two levels; the visited house had three main rooms and alcoves by the tunnel | Bulletin Soc. royale belge d'anthropologie 59 (1948) pp. 188-196 (MAT-06) | 1948 field description, read through a summarising fetch of OCR text |
| Dwellings and people | OCR reads "70C" dwellings (probably 700) and 4,000-5,000 people | MAT-06 | uncertain OCR |
| Levels | lower floor sleeping rooms, kitchen, stables; upper floor storage; access by a cut stair, ladder or graded tunnel | MAT-01 | description |
| Complex houses | several pits joined by trench-like passages | Wikipedia (MAT-03) | description |
| Floods | 22 days of rain in 1969 collapsed many; most rebuilt underground, few families moved to the new surface town | MAT-03 | description |
| Hotel Sidi Driss | founded 1968; five pits, four lateral tunnels (built late 1960s); main entrance a surface-level passage to the middle pit 3 | MAT-04 (Galaxy Tours) | fan-site research, one source |
| Pit 2 position | 33.542564 N, 9.967038 E = local (103.7, -123.8) m | MAT-04 | one published coordinate, accuracy not stated |
| 1976 shoot | set construction from mid-February 1976; dining room (pit 2, cave 9) filmed 1 April 1976; kitchen built at Elstree on the pit 1-2 tunnel and steps | MAT-04 | single source |
| Exterior | the Lars homestead exterior was a separate three-pit set on the Chott el-Djerid, about 265 km west | MAT-04, MAT-05 | |
| Last new house | dug in the 1970s; only a few men still know how | MAT-07, MAT-05 | |

## Mapped (OpenStreetMap, ODbL)

26 closed `natural=cliff` + `building=yes` rings are the pit rims (OSM maps no depth). Roads, 201 buildings, 74 walls, a cemetery zone, 3 waterways. Terrain: Terrarium z15 (~30 m).
Budget: roads and waterways simplified to 3 m, building rings to 0.7 m (Douglas-Peucker), coordinates to 0.1 m; the pit rim is stored on each pit with every second vertex. The unsimplified geometry is in `data/traces/`.

## Which pits are placed from sources, which are assumed

- **Placed from a source, plan position:** all 26 pit rims (OSM). Equivalent diameters are 8-19 m, larger than the 5-10 m of the descriptions; the mapped ring probably includes the rim spoil or a lip. The floor is drawn out to the mapped rim.
- **Placed from a published coordinate:** Hotel Sidi Driss pit 2, 25 m from the OSM rim way/186702924.
- **Assumed:** which mapped rims are the other four hotel pits. The four rims within 100 m of the coordinate (way/186702924, 186702925, 211662114, 211662118) are called candidates; no fifth is found within 100 m (the next rim is 162 m away). The linking order (west to east) is assumed.
- **Assumed on every pit:** depth (8 m, midpoint of 7-9 m), flat floor, entrance heading (lowest DEM side clear of other pits and mapped buildings), tunnel length (4 m per metre of rise, 22-46 m) and width (3 m).

## Inferred

- **Eras.** The 26 rims are carried back to 1948 and 1976 unchanged, flagged inferred. Many pits were rebuilt or collapsed after 1969, so which of them existed in 1948 is not known. No plan, survey or aerial photograph of any date was found.
- **Era "1948"** stands in for the brief's "early 20th century before the floods": the only pre-1969 description read is dated 1948; nothing earlier was read.
- **Depth.** Every pit 8 m (inferred). The DEM is about 30 m, so the floor level is approximate by several metres.

## Not drawn (and why)

Rooms and their two levels, interior stairs, vaulted ceilings, alcoves, door and window openings, courtyard trees, cisterns, the Star Wars 1976 set dressing and the 2000 additions: no dimensions or plans were found and the renderer cannot carve rooms or roof a tunnel. The fifth hotel pit and its fourth tunnel. Kalaa Matmata above the village. The new town (Matmata Nouvelle) is outside the evidence.

## Conflicts

- **Diameter.** 5-10 m (MAT-01), 9 m (MAT-02) against 8-19 m equivalent diameters of the mapped rims.
- **Depth.** "no deeper than 9 m" (MAT-01), 9 m (MAT-02), 7-9 m (MAT-06): consistent; 8 m is drawn.
- **When the village became known.** Wikipedia says it was not generally known until 1969 and Atlas Obscura says until the 1960s; the 1948 Belgian bulletin describes it 20 years earlier.
- **Star Wars films.** Wikipedia credits Hotel Sidi Driss with Episode IV (1976) and Episode II (2002); Lonely Planet lists Episode IV, The Phantom Menace and Attack of the Clones; MAT-04 gives 2000 for the Episode II shoot.
- **Name.** Sidi Driss (Lonely Planet, Atlas Obscura) against Sidi Idriss (Wikipedia, MAT-04).
- **Bulletin OCR.** The "70C" dwelling count and the visited house's room count come from garbled text; read as probable, not certain.

## Sources (nothing copied)

MAT-01 Fabrizi, SOCKS 2023; MAT-02 Habitatio BME; MAT-03 Wikipedia Matmata; MAT-04 Galaxy Tours, Hotel Sidi Idriss; MAT-05 Atlas Obscura; MAT-06 Bulletin Soc. royale belge d'anthropologie et de prehistoire 59 (1948); MAT-07 Al Jazeera 2018; MAT-08 Lonely Planet Hotel Sidi Driss; MAT-09 thermal study, Journal of Architecture and Urbanism (VGTU). URLs are in the trace `sources`.
A fetch of the Atlas Obscura Hotel Sidi Driss page was refused by the session's permission classifier and was not retried.
No reference photographs were looked at (the fetch tool returns text); the screenshots are checked against the written descriptions only.

## Renderer support a true sunken courtyard needs (proposal, not implemented)

1. A `pit` element kind in `src/levels/t1.js` (the trace schema already has it, but `t1.js` ignores it): a polygon dug to a depth with near-vertical, textured walls and a flat floor, instead of the `ditch` ring used here.
2. Vertical-wall terrain: the ground grid is a heightfield on a 2-3 m stride, so a 9 m pit has stair-stepped walls; a pit needs a mesh patch with real vertical faces (or a finer local grid).
3. Roofed passages: a `tunnel` primitive (vaulted, with a floor path and a ceiling mesh) for the entrance ramps and the lateral tunnels; the open cuts here stand in for it.
4. Carved rooms: a `cave-room` primitive, a box or vault cut into a pit wall with a door opening in the wall and a collision volume behind it, on one or two levels.
5. Under-ground navigation: the nav grid must allow walkable surfaces below the heightfield (rooms under the rim soil, about 7 m of cover).
6. A low rim parapet and spoil mound primitive, and wall texture for clay-gypsum.

## Clipped to the raw OSM window (2026-11-27)

The auto trace covered about 1.7 km but the raw fetch (`data/geometry/matmata-troglodyte-village/osm.json`, radius 700 m) holds only the inner part, so 47 elements cited OSM ways that cannot be checked against it. The curation now drops them: 12 roads and 3 waterways crossing or beyond the window edge, 25 outer buildings, 3 walls, 1 zone, and 4 pit rims (ways 1236957017, 1237775968, 1237775969, 1237775972, at 709-749 m from the origin). Every pit rim inside the raw window (22) and the Hotel Sidi Driss marker are kept; the four pits dropped are not among the candidate hotel pits. The pit count is therefore 22, not 26, in the drawn scene. The unclipped auto trace (`data/traces/`) still lists the dropped elements; re-fetching the geometry with a larger radius would restore them with checkable ids.
Catalogue: MAT-03 to MAT-09 added to `src/data/source-catalogue.js` from the URLs recorded in the curation file.
