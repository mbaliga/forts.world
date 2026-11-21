# Greifenstein Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `greifenstein-castle-q1012034` |
| Coordinates | 50.6204, 8.29471 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.6204/8.29471)) |
| Wikidata | [Q1012034](https://www.wikidata.org/wiki/Q1012034) (CC0) |
| Wikidata class | fortification |
| Types | rocca |
| Administrative area | Greifenstein |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 304 elements (outline 1, road 139, zone 6, wall 34, building 246, water 2, waterway 2).

Evidence: documented 0, mapped 304, inferred 0, derived 0; heights documented 9, inferred 0, unknown 145.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/773792805 historic=castle Q1012034 91 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 246 mapped (trace size budget); the rest of the town is not drawn
- origin moved 86 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.6204/8.29471) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; rocca; sitelinks=5; wikidata:Q1012034 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 304 elements); data/traces/greifenstein-castle-q1012034.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
