# Asti City Walls

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `asti-city-walls-q3327997` |
| Coordinates | 44.9009, 8.20704 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.9009/8.20704)) |
| Wikidata | [Q3327997](https://www.wikidata.org/wiki/Q3327997) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Asti |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 251 elements (outline 1, marker 5, road 101, building 300, wall 21, zone 3).

Evidence: documented 0, mapped 251, inferred 0, derived 0; heights documented 77, inferred 0, unknown 64.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/405884089 historic=castle 474 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 300 mapped (trace size budget); the rest of the town is not drawn
- origin moved 474 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.9009/8.20704) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=4; wikidata:Q3327997 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 251 elements); data/traces/asti-city-walls-q3327997.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
