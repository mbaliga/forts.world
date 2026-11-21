# Burghausen Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burghausen-castle-q258217` |
| Coordinates | 48.15611, 12.82889 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.15611/12.82889)) |
| Wikidata | [Q258217](https://www.wikidata.org/wiki/Q258217) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Burghausen |
| Inception | 1051 |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 19 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 376 elements (outline 1, road 254, building 368, waterway 5, zone 39, wall 51, retaining-wall 9, water 1).

Evidence: documented 0, mapped 376, inferred 0, derived 0; heights documented 55, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/68741063 historic=castle Q258217 393 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 368 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 254 mapped (trace size budget); minor lanes are not drawn
- origin moved 394 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.15611/12.82889) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=19; wikidata:Q258217 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 376 elements); data/traces/burghausen-castle-q258217.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
