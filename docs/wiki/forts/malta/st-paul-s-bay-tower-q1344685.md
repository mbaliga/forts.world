# St. Paul's Bay Tower

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `st-paul-s-bay-tower-q1344685` |
| Coordinates | 35.94944, 14.40278 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.94944/14.40278)) |
| Wikidata | [Q1344685](https://www.wikidata.org/wiki/Q1344685) (CC0) |
| Wikidata class | fortification |
| Types | Wignacourt towers |
| Administrative area | St. Paul's Bay |
| Inception | 1610 |
| Designations | Grade 1 |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 72 elements (outline 1, road 43, zone 5, building 14, wall 6, coastline 1, water 2).

Evidence: documented 0, mapped 72, inferred 0, derived 2; heights documented 7, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/376190514 historic=castle Q20949686 437 m from ledger point
- origin moved 435 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":49,"medianInside":6.3,"medianOutside":20.4}
- sea-1: DEM check ok {"cells":185,"medianInside":3.8,"medianOutside":22}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.94944/14.40278) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; Wignacourt towers; sitelinks=7; wikidata:Q1344685 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 72 elements); data/traces/st-paul-s-bay-tower-q1344685.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
