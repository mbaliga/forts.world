# Hermann Castle

> Estonia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hermann-castle-q660001` |
| Coordinates | 59.37583, 28.20139 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.37583/28.20139)) |
| Wikidata | [Q660001](https://www.wikidata.org/wiki/Q660001) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Narva City |
| Designations | architectural monument |
| Wikipedia language editions | 40 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 218 elements (outline 1, marker 4, road 122, waterway 1, zone 27, building 28, cliff 5, wall 28, retaining-wall 2).

Evidence: documented 0, mapped 218, inferred 0, derived 0; heights documented 32, inferred 0, unknown 26.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5434281 historic=castle 19 m from ledger point
- origin moved 25 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.37583/28.20139) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=40; wikidata:Q660001 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 218 elements); data/traces/hermann-castle-q660001.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/estonia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
