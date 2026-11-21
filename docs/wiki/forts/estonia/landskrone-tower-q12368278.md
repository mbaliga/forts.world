# Landskrone Tower

> Estonia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `landskrone-tower-q12368278` |
| Coordinates | 59.43635, 24.73791 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.43635/24.73791)) |
| Wikidata | [Q12368278](https://www.wikidata.org/wiki/Q12368278) (CC0) |
| Wikidata class | fortification |
| Types | defensive tower |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 339 elements (outline 1, marker 6, road 265, water 1, wall 51, building 107, retaining-wall 12, cliff 1, zone 10).

Evidence: documented 0, mapped 339, inferred 0, derived 0; heights documented 94, inferred 0, unknown 76.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3502552 historic=castle Q859010 65 m from ledger point
- roads capped: kept the 150 longest of 265 mapped (trace size budget); minor lanes are not drawn
- origin moved 66 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.43635/24.73791) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive tower; sitelinks=4; wikidata:Q12368278 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 339 elements); data/traces/landskrone-tower-q12368278.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/estonia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
