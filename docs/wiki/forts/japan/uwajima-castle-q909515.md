# Uwajima Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `uwajima-castle-q909515` |
| Coordinates | 33.2195, 132.565 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.2195/132.565)) |
| Wikidata | [Q909515](https://www.wikidata.org/wiki/Q909515) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle\|hirayamajiro\|umijiro |
| Administrative area | Uwajima |
| Inception | 1601 |
| Designations | Historic Site of Japan\|Important Cultural Property of Japan |
| Wikipedia language editions | 14 |
| OSM `historic` | castle |
| OSM `castle_type` | shiro |

## What the model contains

Tier **T1**, status `outline+walls`, 308 elements (outline 1, marker 8, road 237, water 4, building 1084, retaining-wall 14, wall 2, zone 6, waterway 3).

Evidence: documented 0, mapped 308, inferred 0, derived 0; heights documented 2, inferred 0, unknown 134.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1339048111 historic=castle Q909515 60 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 1084 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 237 mapped (trace size budget); minor lanes are not drawn
- origin moved 60 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.2195/132.565) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle\|hirayamajiro\|umijiro; sitelinks=14; wikidata:Q909515 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 308 elements); data/traces/uwajima-castle-q909515.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
