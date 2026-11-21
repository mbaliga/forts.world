# Gabrosentum Roman Fort

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gabrosentum-roman-fort-q17642694` |
| Coordinates | 54.5727, -3.57592 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.5727/-3.57592)) |
| Wikidata | [Q17642694](https://www.wikidata.org/wiki/Q17642694) (CC0) |
| Wikidata class | fortification |
| Types | castrum |
| Administrative area | Parton |
| Designations | part of UNESCO World Heritage Site\|scheduled monument |
| UNESCO WHC id | 430ter-033 |
| Wikipedia language editions | 2 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline+walls`, 72 elements (outline 1, road 46, zone 7, wall 5, building 10, coastline 1, retaining-wall 1, water 1).

Evidence: documented 0, mapped 72, inferred 0, derived 1; heights documented 2, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/333042913 historic=monument 449 m from ledger point
- origin moved 450 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":120,"medianInside":0.9,"medianOutside":8.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.5727/-3.57592) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum; sitelinks=2; wikidata:Q17642694 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 72 elements); data/traces/gabrosentum-roman-fort-q17642694.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
