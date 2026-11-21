# Loket Castle

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `loket-castle-q1013039` |
| Coordinates | 50.18697, 12.75444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.18697/12.75444)) |
| Wikidata | [Q1013039](https://www.wikidata.org/wiki/Q1013039) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Loket |
| Inception | 1300 |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 19 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.hradloket.cz/ |

## What the model contains

Tier **T1**, status `outline+walls`, 350 elements (outline 1, marker 14, road 195, building 169, wall 35, retaining-wall 16, zone 10, water 3, waterway 1).

Evidence: documented 0, mapped 350, inferred 0, derived 0; heights documented 94, inferred 0, unknown 77.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/319032 historic=castle Q1013039 24 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 169 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 195 mapped (trace size budget); minor lanes are not drawn
- origin moved 23 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.18697/12.75444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=19; wikidata:Q1013039 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 350 elements); data/traces/loket-castle-q1013039.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
