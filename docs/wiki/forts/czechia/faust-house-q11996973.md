# Faust House

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `faust-house-q11996973` |
| Coordinates | 50.07314, 14.41899 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.07314/14.41899)) |
| Wikidata | [Q11996973](https://www.wikidata.org/wiki/Q11996973) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | New Town |
| Inception | 1726 |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 295 elements (outline 1, marker 22, road 276, waterway 1, building 91, wall 15, retaining-wall 8, zone 6, water 1).

Evidence: documented 0, mapped 295, inferred 0, derived 0; heights documented 67, inferred 0, unknown 47.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/36943185 historic=castle Q11996973 11 m from ledger point
- roads capped: kept the 150 longest of 276 mapped (trace size budget); minor lanes are not drawn
- origin moved 12 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.07314/14.41899) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=7; wikidata:Q11996973 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 295 elements); data/traces/faust-house-q11996973.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
