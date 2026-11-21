# City walls of Saint-Martin-de-Ré

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-saint-martin-de-re-q64830883` |
| Coordinates | 46.20306, -1.36722 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.20306/-1.36722)) |
| Wikidata | [Q64830883](https://www.wikidata.org/wiki/Q64830883) (CC0) |
| Wikidata class | fortification |
| Types | enceinte |
| Administrative area | Saint-Martin-de-Ré |
| Designations | part of UNESCO World Heritage Site |
| UNESCO WHC id | 1283-010 |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `location-only`, 380 elements (marker 5, road 389, coastline 3, wall 90, retaining-wall 7, building 2239, water 4, waterway 1).

Evidence: documented 0, mapped 380, inferred 0, derived 3; heights documented 0, inferred 0, unknown 217.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/308616 historic=castle Q2879086 297 m from ledger point
- site is a site relation of 35 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (1655 x 1087 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 2239 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 389 mapped (trace size budget); minor lanes are not drawn
- sea-0: DEM check ok {"cells":32,"medianInside":0.1,"medianOutside":9.7}
- sea-1: DEM check ok {"cells":64,"medianInside":2.7,"medianOutside":9.9}
- sea-2: DEM check ok {"cells":100,"medianInside":0,"medianOutside":10}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.20306/-1.36722) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; enceinte; sitelinks=2; wikidata:Q64830883 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 380 elements); data/traces/city-walls-of-saint-martin-de-re-q64830883.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
