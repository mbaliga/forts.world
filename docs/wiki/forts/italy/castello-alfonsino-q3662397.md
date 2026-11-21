# Castello alfonsino

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-alfonsino-q3662397` |
| Coordinates | 40.65655, 17.96814 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.65655/17.96814)) |
| Wikidata | [Q3662397](https://www.wikidata.org/wiki/Q3662397) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Brindisi |
| Inception | 1481 |
| Designations | Italian national heritage |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `description` | il castello è stato riaperto al pubblico. |

## What the model contains

Tier **T1**, status `outline+walls`, 10 elements (outline 1, coastline 1, road 1, wall 2, building 3, water 2).

Evidence: documented 0, mapped 10, inferred 0, derived 2; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6279079 historic=castle Q3662397 114 m from ledger point
- origin moved 112 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":226,"medianInside":0,"medianOutside":0}
- sea-1: DEM check failed {"cells":125,"medianInside":0,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.65655/17.96814) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q3662397 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 10 elements); data/traces/castello-alfonsino-q3662397.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
