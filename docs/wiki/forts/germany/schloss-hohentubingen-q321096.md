# Schloss Hohentübingen

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-hohentubingen-q321096` |
| Coordinates | 48.51949, 9.05079 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.51949/9.05079)) |
| Wikidata | [Q321096](https://www.wikidata.org/wiki/Q321096) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Tübingen |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 240 elements (outline 1, marker 23, road 661, building 727, zone 38, waterway 79, retaining-wall 33, wall 47, water 7).

Evidence: documented 0, mapped 240, inferred 0, derived 0; heights documented 68, inferred 0, unknown 50.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19602 historic=castle Q321096 20 m from ledger point
- pruned to the outline plus 150 m: 1616 -> 885 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 389 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 396 mapped (trace size budget); minor lanes are not drawn
- origin moved 9 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.51949/9.05079) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=8; wikidata:Q321096 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 240 elements); data/traces/schloss-hohentubingen-q321096.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
