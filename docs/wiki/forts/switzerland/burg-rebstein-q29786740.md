# Burg Rebstein

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-rebstein-q29786740` |
| Coordinates | 47.39854, 9.58097 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.39854/9.58097)) |
| Wikidata | [Q29786740](https://www.wikidata.org/wiki/Q29786740) (CC0) |
| Wikidata class | castle |
| Types | castle\|built structure\|manor house |
| Administrative area | Rebstein |
| Designations | class B Swiss cultural property of regional significance |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 286 elements (outline 1, road 214, zone 7, waterway 4, building 192, wall 4).

Evidence: documented 0, mapped 286, inferred 0, derived 0; heights documented 5, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/192165575 historic=castle Q29786740 10 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 192 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 214 mapped (trace size budget); minor lanes are not drawn
- origin moved 11 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.39854/9.58097) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|built structure\|manor house; sitelinks=1; wikidata:Q29786740 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 286 elements); data/traces/burg-rebstein-q29786740.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
