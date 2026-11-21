# Bremen city wall remain

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bremen-city-wall-remain-q41734878` |
| Coordinates | 53.07282, 8.81161 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.07282/8.81161)) |
| Wikidata | [Q41734878](https://www.wikidata.org/wiki/Q41734878) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Mitte |
| Designations | protected cultural heritage monument in Bremen (state) |
| Wikipedia language editions | 0 |
| OSM `historic` | archaeological_site |
| OSM `heritage` | 4 |
| OSM `description` | Rest der Stadtmauer, Untergeschoss eines Ringturms |
| OSM `website` | https://www.denkmalpflege.bremen.de/sixcms/detail.php?template=20_denkmal_wrapper_d&obj=00000874 |

## What the model contains

Tier **T1**, status `outline+walls`, 314 elements (outline 1, marker 8, road 250, water 4, wall 4, building 219, zone 16, retaining-wall 3, waterway 5, coastline 3).

Evidence: documented 0, mapped 314, inferred 0, derived 1; heights documented 72, inferred 0, unknown 55.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/538776424 historic=archaeological_site 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 219 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 250 mapped (trace size budget); minor lanes are not drawn
- origin moved 1 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":34,"medianInside":-1.3,"medianOutside":14.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.07282/8.81161) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q41734878 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 314 elements); data/traces/bremen-city-wall-remain-q41734878.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
