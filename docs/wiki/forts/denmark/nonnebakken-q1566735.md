# Nonnebakken

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nonnebakken-q1566735` |
| Coordinates | 55.39194, 10.38917 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.39194/10.38917)) |
| Wikidata | [Q1566735](https://www.wikidata.org/wiki/Q1566735) (CC0) |
| Wikidata class | fortification |
| Types | circular rampart |
| Administrative area | Odense Municipality |
| Designations | part of UNESCO World Heritage Site |
| UNESCO WHC id | 1660-003 |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 283 elements (outline 1, road 202, building 65, zone 5, wall 8, water 1, waterway 1).

Evidence: documented 0, mapped 283, inferred 0, derived 0; heights documented 23, inferred 0, unknown 50.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2068313 historic=castle Q3432878 815 m from ledger point
- origin moved 811 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.39194/10.38917) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; circular rampart; sitelinks=10; wikidata:Q1566735 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 283 elements); data/traces/nonnebakken-q1566735.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
