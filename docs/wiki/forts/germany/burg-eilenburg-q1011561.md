# Burg Eilenburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-eilenburg-q1011561` |
| Coordinates | 51.4588, 12.6232 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.4588/12.6232)) |
| Wikidata | [Q1011561](https://www.wikidata.org/wiki/Q1011561) (CC0) |
| Wikidata class | castle |
| Types | castle\|Kulturdenkmal |
| Administrative area | Eilenburg |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 318 elements (outline 1, marker 2, road 202, building 281, waterway 4, wall 12, zone 19, water 3, retaining-wall 7).

Evidence: documented 0, mapped 318, inferred 0, derived 0; heights documented 6, inferred 0, unknown 133.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/949705345 historic=castle Q1011561 42 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 281 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 202 mapped (trace size budget); minor lanes are not drawn
- origin moved 41 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.4588/12.6232) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|Kulturdenkmal; sitelinks=4; wikidata:Q1011561 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 318 elements); data/traces/burg-eilenburg-q1011561.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
