# Daliborka

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `daliborka-q3506740` |
| Coordinates | 50.09236, 14.405 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.09236/14.405)) |
| Wikidata | [Q3506740](https://www.wikidata.org/wiki/Q3506740) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Hradčany |
| Designations | part of national cultural heritage site in the Czech Republic |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://www.lobkowicz.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 397 elements (outline 1, marker 25, road 340, waterway 3, building 98, zone 19, wall 40, retaining-wall 57, water 4).

Evidence: documented 0, mapped 397, inferred 0, derived 0; heights documented 70, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3367881 historic=castle Q2047086 77 m from ledger point
- roads capped: kept the 150 longest of 340 mapped (trace size budget); minor lanes are not drawn
- origin moved 75 m from the ledger point to the outline centroid
- 39 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.09236/14.405) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=9; wikidata:Q3506740 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 397 elements); data/traces/daliborka-q3506740.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
