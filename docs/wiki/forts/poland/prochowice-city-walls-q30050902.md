# Prochowice City Walls

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `prochowice-city-walls-q30050902` |
| Coordinates | 51.2742, 16.36188 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.2742/16.36188)) |
| Wikidata | [Q30050902](https://www.wikidata.org/wiki/Q30050902) (CC0) |
| Wikidata class | fortification |
| Types | architectural heritage monument\|city walls |
| Administrative area | Prochowice |
| Inception | 1400 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 186 elements (outline 1, road 60, waterway 7, building 104, water 3, zone 9, wall 2).

Evidence: documented 0, mapped 186, inferred 0, derived 0; heights documented 12, inferred 0, unknown 94.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1567455529 historic=castle Q9386709 140 m from ledger point
- origin moved 141 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.2742/16.36188) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; architectural heritage monument\|city walls; sitelinks=1; wikidata:Q30050902 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 186 elements); data/traces/prochowice-city-walls-q30050902.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
