# Burg Querfurt

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-querfurt-q1013543` |
| Coordinates | 51.3769, 11.5939 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.3769/11.5939)) |
| Wikidata | [Q1013543](https://www.wikidata.org/wiki/Q1013543) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Querfurt |
| Designations | heritage monument in Saxony-Anhalt |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 355 elements (outline 1, marker 8, road 171, waterway 1, zone 29, water 1, building 264, retaining-wall 18, wall 27).

Evidence: documented 0, mapped 355, inferred 0, derived 0; heights documented 9, inferred 0, unknown 156.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1564856003 historic=castle Q1013543 15 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 264 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 171 mapped (trace size budget); minor lanes are not drawn
- origin moved 14 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.3769/11.5939) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q1013543 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 355 elements); data/traces/burg-querfurt-q1013543.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
