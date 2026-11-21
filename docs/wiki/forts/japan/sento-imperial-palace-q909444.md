# Sentō Imperial Palace

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sento-imperial-palace-q909444` |
| Coordinates | 35.02164, 135.76565 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.02164/135.76565)) |
| Wikidata | [Q909444](https://www.wikidata.org/wiki/Q909444) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 329 elements (outline 1, marker 22, water 3, road 155, building 219, zone 11, waterway 1, retaining-wall 5, wall 16).

Evidence: documented 0, mapped 329, inferred 0, derived 0; heights documented 9, inferred 0, unknown 132.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/551409599 historic=castle Q909444 103 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 219 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 155 mapped (trace size budget); minor lanes are not drawn
- origin moved 103 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.02164/135.76565) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace; sitelinks=12; wikidata:Q909444 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 329 elements); data/traces/sento-imperial-palace-q909444.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
