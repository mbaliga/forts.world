# Piast Castle (Legnica)

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `piast-castle-legnica-q9386545` |
| Coordinates | 51.21123, 16.16279 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.21123/16.16279)) |
| Wikidata | [Q9386545](https://www.wikidata.org/wiki/Q9386545) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Legnica |
| Inception | 1300 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 340 elements (outline 1, marker 6, road 285, building 188, zone 56, waterway 1, retaining-wall 1, wall 5).

Evidence: documented 0, mapped 340, inferred 0, derived 0; heights documented 7, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1329684946 historic=castle Q9386545 95 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 188 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 285 mapped (trace size budget); minor lanes are not drawn
- origin moved 95 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.21123/16.16279) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=10; wikidata:Q9386545 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 340 elements); data/traces/piast-castle-legnica-q9386545.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
