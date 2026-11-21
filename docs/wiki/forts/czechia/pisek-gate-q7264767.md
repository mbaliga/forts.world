# Písek Gate

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pisek-gate-q7264767` |
| Coordinates | 50.095, 14.40556 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.095/14.40556)) |
| Wikidata | [Q7264767](https://www.wikidata.org/wiki/Q7264767) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|event venue |
| Administrative area | Hradčany |
| Inception | 1721 |
| Designations | part of cultural heritage site in the Czech Republic |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://www.lobkowicz.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 396 elements (outline 1, marker 25, road 340, building 98, zone 19, wall 40, waterway 2, retaining-wall 57, water 4).

Evidence: documented 0, mapped 396, inferred 0, derived 0; heights documented 70, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3367881 historic=castle Q2047086 374 m from ledger point
- roads capped: kept the 150 longest of 340 mapped (trace size budget); minor lanes are not drawn
- origin moved 371 m from the ledger point to the outline centroid
- 39 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.095/14.40556) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|event venue; sitelinks=9; wikidata:Q7264767 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 396 elements); data/traces/pisek-gate-q7264767.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
