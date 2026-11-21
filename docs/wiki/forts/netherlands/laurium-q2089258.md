# Laurium

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `laurium-q2089258` |
| Coordinates | 52.08606, 4.88395 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.08606/4.88395)) |
| Wikidata | [Q2089258](https://www.wikidata.org/wiki/Q2089258) (CC0) |
| Wikidata class | fortification |
| Types | castellum |
| Administrative area | Germania Inferior |
| Designations | part of UNESCO World Heritage Site |
| UNESCO WHC id | 1631-013 |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 284 elements (outline 1, marker 9, road 601, zone 115, water 20, waterway 8, building 2050, retaining-wall 4, wall 5).

Evidence: documented 0, mapped 284, inferred 0, derived 0; heights documented 0, inferred 0, unknown 69.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/952158379 historic=castle 120 m from ledger point
- pruned to the outline plus 150 m: 2813 -> 2728 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 2002 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 582 mapped (trace size budget); minor lanes are not drawn
- origin moved 121 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.08606/4.88395) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castellum; sitelinks=5; wikidata:Q2089258 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 284 elements); data/traces/laurium-q2089258.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
