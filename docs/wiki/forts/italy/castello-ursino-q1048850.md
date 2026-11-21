# Castello Ursino

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-ursino-q1048850` |
| Coordinates | 37.49897, 15.08439 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.49897/15.08439)) |
| Wikidata | [Q1048850](https://www.wikidata.org/wiki/Q1048850) (CC0) |
| Wikidata class | castle |
| Types | castle\|Category:Hohenstaufen castles in Southern Italy |
| Administrative area | Catania |
| Inception | 1239 |
| Designations | Italian national heritage |
| Wikipedia language editions | 17 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 286 elements (outline 1, marker 3, road 122, zone 3, building 582, wall 35, cliff 1, water 1).

Evidence: documented 0, mapped 286, inferred 0, derived 0; heights documented 10, inferred 0, unknown 145.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6142636 historic=castle Q1048850 20 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 582 mapped (trace size budget); the rest of the town is not drawn
- origin moved 20 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.49897/15.08439) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|Category:Hohenstaufen castles in Southern Italy; sitelinks=17; wikidata:Q1048850 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 286 elements); data/traces/castello-ursino-q1048850.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
