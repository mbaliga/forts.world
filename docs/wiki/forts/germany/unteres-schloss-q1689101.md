# Unteres Schloss

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `unteres-schloss-q1689101` |
| Coordinates | 50.65598, 12.20003 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.65598/12.20003)) |
| Wikidata | [Q1689101](https://www.wikidata.org/wiki/Q1689101) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|building |
| Administrative area | Greiz |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 331 elements (outline 1, marker 1, waterway 7, road 369, building 273, water 2, wall 31, retaining-wall 6, zone 13).

Evidence: documented 0, mapped 331, inferred 0, derived 0; heights documented 1, inferred 0, unknown 156.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2363176 historic=castle Q1689101 8 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 273 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 369 mapped (trace size budget); minor lanes are not drawn
- origin moved 12 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.65598/12.20003) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|building; sitelinks=5; wikidata:Q1689101 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 331 elements); data/traces/unteres-schloss-q1689101.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
