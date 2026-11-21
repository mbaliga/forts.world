# Odense Palace

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `odense-palace-q3432878` |
| Coordinates | 55.39902, 10.38656 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.39902/10.38656)) |
| Wikidata | [Q3432878](https://www.wikidata.org/wiki/Q3432878) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|building |
| Administrative area | Odense Municipality |
| Inception | 1280 |
| Designations | monument on Kulturstyrelsen register |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 283 elements (outline 1, road 202, building 65, zone 5, wall 8, water 1, waterway 1).

Evidence: documented 0, mapped 283, inferred 0, derived 0; heights documented 23, inferred 0, unknown 50.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2068313 historic=castle Q3432878 14 m from ledger point
- origin moved 15 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.39902/10.38656) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|building; sitelinks=7; wikidata:Q3432878 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 283 elements); data/traces/odense-palace-q3432878.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
