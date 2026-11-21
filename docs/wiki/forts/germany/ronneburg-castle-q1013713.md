# Ronneburg Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ronneburg-castle-q1013713` |
| Coordinates | 50.23859, 9.06119 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.23859/9.06119)) |
| Wikidata | [Q1013713](https://www.wikidata.org/wiki/Q1013713) (CC0) |
| Wikidata class | castle |
| Types | castle\|rocca |
| Administrative area | Ronneburg |
| Inception | 1200 |
| Designations | cultural heritage monument in Hesse |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | yes |
| OSM `website` | https://burg-ronneburg.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 99 elements (outline 1, road 62, zone 14, cliff 3, wall 1, retaining-wall 10, building 8).

Evidence: documented 0, mapped 99, inferred 0, derived 0; heights documented 0, inferred 0, unknown 19.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/68165 historic=castle Q1013713 34 m from ledger point
- origin moved 33 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.23859/9.06119) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|rocca; sitelinks=6; wikidata:Q1013713 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 99 elements); data/traces/ronneburg-castle-q1013713.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
