# Weavers Tower in Chojnów

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `weavers-tower-in-chojnow-q30049998` |
| Coordinates | 51.27324, 15.93258 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.27324/15.93258)) |
| Wikidata | [Q30049998](https://www.wikidata.org/wiki/Q30049998) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Chojnów |
| Inception | 1400 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 2 |
| OSM `historic` | fortification |

## What the model contains

Tier **T1**, status `outline+walls`, 205 elements (outline 1, road 378, building 356, zone 90, wall 38, water 1, retaining-wall 4, waterway 1).

Evidence: documented 0, mapped 205, inferred 0, derived 0; heights documented 6, inferred 0, unknown 79.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/339142483 historic=fortification Q30049998 2 m from ledger point
- pruned to the outline plus 150 m: 869 -> 455 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 210 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 180 mapped (trace size budget); minor lanes are not drawn
- origin moved 1 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.27324/15.93258) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=2; wikidata:Q30049998 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 205 elements); data/traces/weavers-tower-in-chojnow-q30049998.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
