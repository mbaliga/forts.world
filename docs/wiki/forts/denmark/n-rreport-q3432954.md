# Nørreport

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `n-rreport-q3432954` |
| Coordinates | 55.6838, 12.5713 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.6838/12.5713)) |
| Wikidata | [Q3432954](https://www.wikidata.org/wiki/Q3432954) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Copenhagen Municipality |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://www.kongernessamling.dk/rosenborg/ |

## What the model contains

Tier **T1**, status `outline+walls`, 293 elements (outline 1, marker 2, road 195, zone 55, water 4, building 26, wall 10).

Evidence: documented 0, mapped 293, inferred 0, derived 0; heights documented 2, inferred 0, unknown 34.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/25524592 historic=castle Q206101 439 m from ledger point
- origin moved 439 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.6838/12.5713) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=4; wikidata:Q3432954 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 293 elements); data/traces/n-rreport-q3432954.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
