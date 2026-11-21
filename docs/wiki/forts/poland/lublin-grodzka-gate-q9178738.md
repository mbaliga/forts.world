# Lublin Grodzka Gate

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lublin-grodzka-gate-q9178738` |
| Coordinates | 51.24974, 22.57007 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.24974/22.57007)) |
| Wikidata | [Q9178738](https://www.wikidata.org/wiki/Q9178738) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|architectural heritage monument |
| Administrative area | Lublin |
| Inception | 1342 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 325 elements (outline 1, marker 15, road 328, waterway 4, building 75, retaining-wall 4, zone 51, wall 16, cliff 9).

Evidence: documented 0, mapped 325, inferred 0, derived 0; heights documented 46, inferred 0, unknown 49.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/48500136 historic=castle Q2604117 167 m from ledger point
- roads capped: kept the 150 longest of 328 mapped (trace size budget); minor lanes are not drawn
- origin moved 167 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.24974/22.57007) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|architectural heritage monument; sitelinks=8; wikidata:Q9178738 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 325 elements); data/traces/lublin-grodzka-gate-q9178738.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
