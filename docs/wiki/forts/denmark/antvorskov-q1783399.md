# Antvorskov

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `antvorskov-q1783399` |
| Coordinates | 55.39111, 11.36278 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.39111/11.36278)) |
| Wikidata | [Q1783399](https://www.wikidata.org/wiki/Q1783399) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Slagelse Municipality |
| Inception | 1170 |
| Designations | protected ancient monument in Denmark |
| Wikipedia language editions | 8 |
| OSM `historic` | ruins |
| OSM `ruins` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 129 elements (outline 1, marker 1, road 66, water 1, zone 7, building 50, wall 1, retaining-wall 2).

Evidence: documented 0, mapped 129, inferred 0, derived 0; heights documented 0, inferred 0, unknown 53.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/600694391 historic=ruins Q1783399 25 m from ledger point
- origin moved 28 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.39111/11.36278) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=8; wikidata:Q1783399 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 129 elements); data/traces/antvorskov-q1783399.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
