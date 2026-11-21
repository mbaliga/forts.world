# Alimina defences

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `alimina-defences-q36589975` |
| Coordinates | 35.88756, -5.31298 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.88756/-5.31298)) |
| Wikidata | [Q36589975](https://www.wikidata.org/wiki/Q36589975) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Ceuta |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 259 elements (outline 1, marker 10, road 126, coastline 4, building 65, wall 15, zone 35, water 3).

Evidence: documented 0, mapped 259, inferred 0, derived 3; heights documented 0, inferred 0, unknown 80.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/819502647 historic=castle 495 m from ledger point
- origin moved 496 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":417,"medianInside":3.6,"medianOutside":8}
- sea-1: DEM check ok {"cells":19,"medianInside":1,"medianOutside":6.2}
- sea-2: DEM check ok {"cells":523,"medianInside":5.8,"medianOutside":6.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.88756/-5.31298) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=1; wikidata:Q36589975 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 259 elements); data/traces/alimina-defences-q36589975.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
