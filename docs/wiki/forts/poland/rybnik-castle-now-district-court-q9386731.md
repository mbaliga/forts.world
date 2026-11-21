# Rybnik Castle, now District Court

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rybnik-castle-now-district-court-q9386731` |
| Coordinates | 50.09295, 18.54043 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.09295/18.54043)) |
| Wikidata | [Q9386731](https://www.wikidata.org/wiki/Q9386731) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|palace\|courthouse |
| Administrative area | Rybnik |
| Inception | 1161 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 377 elements (outline 1, marker 3, road 319, waterway 1, building 155, zone 85, wall 16, water 1).

Evidence: documented 0, mapped 377, inferred 0, derived 0; heights documented 12, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/105738665 historic=castle Q9386731 10 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 155 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 319 mapped (trace size budget); minor lanes are not drawn
- origin moved 10 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.09295/18.54043) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|palace\|courthouse; sitelinks=4; wikidata:Q9386731 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 377 elements); data/traces/rybnik-castle-now-district-court-q9386731.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
