# Three Towers Gate

> Luxembourg · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `three-towers-gate-q13102363` |
| Coordinates | 49.61253, 6.13339 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.61253/6.13339)) |
| Wikidata | [Q13102363](https://www.wikidata.org/wiki/Q13102363) (CC0) |
| Wikidata class | fortification |
| Types | gate tower |
| Administrative area | Luxembourg |
| Inception | 1050 |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 370 elements (outline 1, marker 8, road 288, building 301, wall 31, water 3, zone 15, retaining-wall 34, cliff 6, waterway 2).

Evidence: documented 0, mapped 370, inferred 0, derived 0; heights documented 13, inferred 0, unknown 172.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/9653074 historic=castle Q1205254 166 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 301 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 288 mapped (trace size budget); minor lanes are not drawn
- origin moved 166 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.61253/6.13339) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gate tower; sitelinks=3; wikidata:Q13102363 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 370 elements); data/traces/three-towers-gate-q13102363.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/luxembourg.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
