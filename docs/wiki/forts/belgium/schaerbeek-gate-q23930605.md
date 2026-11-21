# Schaerbeek Gate

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schaerbeek-gate-q23930605` |
| Coordinates | 50.85278, 4.36444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.85278/4.36444)) |
| Wikidata | [Q23930605](https://www.wikidata.org/wiki/Q23930605) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|destroyed building or structure |
| Administrative area | Brussels |
| Wikipedia language editions | 4 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 280 elements (outline 1, road 243, building 604, zone 4, retaining-wall 2, wall 3).

Evidence: documented 0, mapped 280, inferred 0, derived 0; heights documented 7, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/239863542 historic=building 404 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 604 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 243 mapped (trace size budget); minor lanes are not drawn
- origin moved 405 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.85278/4.36444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|destroyed building or structure; sitelinks=4; wikidata:Q23930605 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 280 elements); data/traces/schaerbeek-gate-q23930605.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
