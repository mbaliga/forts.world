# Herborn Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `herborn-castle-q2241524` |
| Coordinates | 50.68176, 8.30117 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.68176/8.30117)) |
| Wikidata | [Q2241524](https://www.wikidata.org/wiki/Q2241524) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Herborn |
| Inception | ~1270 |
| Designations | cultural heritage monument in Hesse |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 324 elements (outline 1, marker 11, road 222, building 366, wall 20, waterway 1, retaining-wall 15, zone 6).

Evidence: documented 0, mapped 324, inferred 0, derived 0; heights documented 35, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1310916547 historic=castle Q2241524 14 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 366 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 222 mapped (trace size budget); minor lanes are not drawn
- origin moved 14 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.68176/8.30117) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=3; wikidata:Q2241524 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 324 elements); data/traces/herborn-castle-q2241524.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
