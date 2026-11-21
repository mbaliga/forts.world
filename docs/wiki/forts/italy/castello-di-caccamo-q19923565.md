# Castello di Caccamo

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-di-caccamo-q19923565` |
| Coordinates | 37.93198, 13.66012 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.93198/13.66012)) |
| Wikidata | [Q19923565](https://www.wikidata.org/wiki/Q19923565) (CC0) |
| Wikidata class | castle |
| Types | castle\|historical park museum\|military museum building\|museum of a public entity |
| Administrative area | Caccamo |
| Designations | Italian national heritage |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 318 elements (outline 1, marker 1, road 178, building 905, retaining-wall 16, cliff 3, waterway 1, wall 25, zone 1).

Evidence: documented 0, mapped 318, inferred 0, derived 0; heights documented 1, inferred 0, unknown 160.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/427186840 historic=castle Q19923565 37 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 905 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 178 mapped (trace size budget); minor lanes are not drawn
- origin moved 37 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.93198/13.66012) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|historical park museum\|military museum building\|museum of a public entity; sitelinks=4; wikidata:Q19923565 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 318 elements); data/traces/castello-di-caccamo-q19923565.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
