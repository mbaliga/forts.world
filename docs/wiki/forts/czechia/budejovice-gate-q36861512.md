# Budějovice Gate

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `budejovice-gate-q36861512` |
| Coordinates | 48.81477, 14.31715 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.81477/14.31715)) |
| Wikidata | [Q36861512](https://www.wikidata.org/wiki/Q36861512) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Vnitřní Město |
| Inception | 1602 |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 232 elements (outline 1, marker 15, road 220, building 268, waterway 7, wall 60, cliff 5, zone 58, retaining-wall 9, water 2).

Evidence: documented 0, mapped 232, inferred 0, derived 0; heights documented 33, inferred 0, unknown 66.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/760005062 historic=castle 239 m from ledger point
- pruned to the outline plus 150 m: 645 -> 345 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 134 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 119 mapped (trace size budget); minor lanes are not drawn
- origin moved 240 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.81477/14.31715) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=3; wikidata:Q36861512 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 232 elements); data/traces/budejovice-gate-q36861512.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
