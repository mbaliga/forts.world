# Yusupov Palace on Moika

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `yusupov-palace-on-moika-q2991838` |
| Coordinates | 59.92926, 30.29918 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.92926/30.29918)) |
| Wikidata | [Q2991838](https://www.wikidata.org/wiki/Q2991838) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|cultural heritage\|palace\|historic house museum |
| Administrative area | Saint Petersburg |
| Inception | 1770 |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 25 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://yusupov-palace.ru/ |

## What the model contains

Tier **T1**, status `outline+walls`, 287 elements (outline 1, marker 4, road 277, building 72, waterway 2, wall 5, retaining-wall 14, zone 39).

Evidence: documented 0, mapped 287, inferred 0, derived 0; heights documented 52, inferred 0, unknown 39.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/123243367 historic=castle Q2991838 25 m from ledger point
- roads capped: kept the 150 longest of 277 mapped (trace size budget); minor lanes are not drawn
- origin moved 23 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.92926/30.29918) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|cultural heritage\|palace\|historic house museum; sitelinks=25; wikidata:Q2991838 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 287 elements); data/traces/yusupov-palace-on-moika-q2991838.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
