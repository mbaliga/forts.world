# Taschenbergpalais Dresden

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `taschenbergpalais-dresden-q267390` |
| Coordinates | 51.0519, 13.73577 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.0519/13.73577)) |
| Wikidata | [Q267390](https://www.wikidata.org/wiki/Q267390) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace hotel |
| Administrative area | Dresden |
| Inception | 1995 |
| Designations | heritage monument in Saxony |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 288 elements (outline 1, marker 17, road 369, waterway 1, building 27, zone 44, wall 28, water 8, retaining-wall 12).

Evidence: documented 0, mapped 288, inferred 0, derived 0; heights documented 24, inferred 0, unknown 43.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5671 historic=castle Q267390 5 m from ledger point
- roads capped: kept the 150 longest of 369 mapped (trace size budget); minor lanes are not drawn
- origin moved 11 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.0519/13.73577) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace hotel; sitelinks=10; wikidata:Q267390 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 288 elements); data/traces/taschenbergpalais-dresden-q267390.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
