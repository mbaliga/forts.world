# Rabenstein Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rabenstein-castle-q1013552` |
| Coordinates | 50.8331, 12.81826 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.8331/12.81826)) |
| Wikidata | [Q1013552](https://www.wikidata.org/wiki/Q1013552) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Chemnitz |
| Inception | 1170 |
| Designations | heritage monument in Saxony |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://www.kunstsammlungen-chemnitz.de/burg-rabenstein/ |

## What the model contains

Tier **T1**, status `outline+walls`, 169 elements (outline 1, marker 1, road 76, water 5, building 63, wall 4, waterway 8, cliff 1, zone 10).

Evidence: documented 0, mapped 169, inferred 0, derived 0; heights documented 2, inferred 0, unknown 65.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1004528881 historic=castle 3 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.8331/12.81826) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q1013552 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 169 elements); data/traces/rabenstein-castle-q1013552.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
