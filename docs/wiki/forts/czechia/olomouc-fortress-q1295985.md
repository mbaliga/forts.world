# Olomouc Fortress

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `olomouc-fortress-q1295985` |
| Coordinates | 49.59404, 17.25493 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.59404/17.25493)) |
| Wikidata | [Q1295985](https://www.wikidata.org/wiki/Q1295985) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Olomouc |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 390 elements (outline 1, marker 43, road 256, building 413, zone 8, waterway 1, wall 59, retaining-wall 7, water 1).

Evidence: documented 0, mapped 390, inferred 0, derived 0; heights documented 81, inferred 0, unknown 105.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/52937563 historic=castle Q31852396 153 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 413 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 256 mapped (trace size budget); minor lanes are not drawn
- origin moved 152 m from the ledger point to the outline centroid
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.59404/17.25493) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=7; wikidata:Q1295985 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 390 elements); data/traces/olomouc-fortress-q1295985.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
