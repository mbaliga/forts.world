# Mniszech Palace in Warsaw

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mniszech-palace-in-warsaw-q1941258` |
| Coordinates | 52.24372, 21.00372 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.24372/21.00372)) |
| Wikidata | [Q1941258](https://www.wikidata.org/wiki/Q1941258) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|architectural heritage monument |
| Administrative area | Warsaw |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 233 elements (outline 1, marker 26, zone 135, road 487, building 71, wall 35, retaining-wall 1).

Evidence: documented 0, mapped 233, inferred 0, derived 0; heights documented 17, inferred 0, unknown 52.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/29388104 historic=castle Q1941258 7 m from ledger point
- pruned to the outline plus 150 m: 756 -> 437 elements
- roads capped: kept the 80 longest of 284 mapped (trace size budget); minor lanes are not drawn
- origin moved 8 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.24372/21.00372) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|architectural heritage monument; sitelinks=4; wikidata:Q1941258 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 233 elements); data/traces/mniszech-palace-in-warsaw-q1941258.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
