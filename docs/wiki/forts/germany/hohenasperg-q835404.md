# Hohenasperg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hohenasperg-q835404` |
| Coordinates | 48.9103, 9.13833 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.9103/9.13833)) |
| Wikidata | [Q835404](https://www.wikidata.org/wiki/Q835404) (CC0) |
| Wikidata class | fort |
| Types | prison\|fortress\|psychiatric hospital\|internment Camp for Romani people |
| Administrative area | Ludwigsburg District |
| Inception | 1535 |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 345 elements (outline 1, marker 6, road 153, building 287, zone 33, wall 34, water 1).

Evidence: documented 0, mapped 345, inferred 0, derived 0; heights documented 4, inferred 0, unknown 150.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/122591310 historic=castle Q835404 40 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 287 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 153 mapped (trace size budget); minor lanes are not drawn
- origin moved 40 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.9103/9.13833) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; prison\|fortress\|psychiatric hospital\|internment Camp for Romani people; sitelinks=11; wikidata:Q835404 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 345 elements); data/traces/hohenasperg-q835404.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
