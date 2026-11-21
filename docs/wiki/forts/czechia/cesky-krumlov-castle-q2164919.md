# Český Krumlov Castle

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cesky-krumlov-castle-q2164919` |
| Coordinates | 48.8125, 14.31528 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.8125/14.31528)) |
| Wikidata | [Q2164919](https://www.wikidata.org/wiki/Q2164919) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Český Krumlov |
| Inception | 1300 |
| Designations | national cultural monument of the Czech Republic |
| Wikipedia language editions | 29 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 240 elements (outline 1, marker 17, road 245, waterway 7, building 271, wall 67, cliff 6, zone 65, retaining-wall 10, water 2).

Evidence: documented 0, mapped 240, inferred 0, derived 0; heights documented 35, inferred 0, unknown 70.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/39231549 historic=castle 6 m from ledger point
- pruned to the outline plus 150 m: 691 -> 367 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 134 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 133 mapped (trace size budget); minor lanes are not drawn
- origin moved 7 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.8125/14.31528) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=29; wikidata:Q2164919 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 240 elements); data/traces/cesky-krumlov-castle-q2164919.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
