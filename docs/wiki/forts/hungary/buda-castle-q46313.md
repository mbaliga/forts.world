# Buda Castle

> Hungary · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `buda-castle-q46313` |
| Coordinates | 47.49611, 19.03972 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.49611/19.03972)) |
| Wikidata | [Q46313](https://www.wikidata.org/wiki/Q46313) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace |
| Administrative area | Budapest District I |
| Inception | 1244 |
| Designations | World Heritage Site |
| UNESCO WHC id | 400-001 |
| Wikipedia language editions | 48 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 356 elements (outline 1, marker 30, road 481, wall 69, building 56, zone 14, retaining-wall 27, waterway 9).

Evidence: documented 0, mapped 356, inferred 0, derived 0; heights documented 50, inferred 0, unknown 102.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6486918 historic=castle Q46313 34 m from ledger point
- roads capped: kept the 150 longest of 481 mapped (trace size budget); minor lanes are not drawn
- origin moved 20 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.49611/19.03972) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace; sitelinks=48; wikidata:Q46313 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 356 elements); data/traces/buda-castle-q46313.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/hungary.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
