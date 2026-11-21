# Valmiera Castle

> Latvia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `valmiera-castle-q12378888` |
| Coordinates | 57.53891, 25.4282 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.53891/25.4282)) |
| Wikidata | [Q12378888](https://www.wikidata.org/wiki/Q12378888) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Valmiera |
| Designations | archaeological monument of state importance in Latvia |
| Wikipedia language editions | 5 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 302 elements (outline 1, marker 1, road 338, building 61, waterway 2, zone 73, retaining-wall 5, wall 9).

Evidence: documented 0, mapped 302, inferred 0, derived 0; heights documented 2, inferred 0, unknown 73.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1123016776 historic=yes 316 m from ledger point
- roads capped: kept the 150 longest of 338 mapped (trace size budget); minor lanes are not drawn
- origin moved 315 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.53891/25.4282) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q12378888 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 302 elements); data/traces/valmiera-castle-q12378888.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/latvia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
