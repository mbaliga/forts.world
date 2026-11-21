# Manětín Castle

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `manetin-castle-q1104565` |
| Coordinates | 49.9913, 13.23222 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.9913/13.23222)) |
| Wikidata | [Q1104565](https://www.wikidata.org/wiki/Q1104565) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Manětín |
| Inception | 1500 |
| Designations | cultural monument of the Czech Republic\|national cultural monument of the Czech Republic |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://www.zamek-manetin.cz/ |

## What the model contains

Tier **T1**, status `outline+walls`, 333 elements (outline 1, marker 11, road 66, water 1, waterway 5, building 234, zone 10, wall 1, retaining-wall 4).

Evidence: documented 0, mapped 333, inferred 0, derived 0; heights documented 104, inferred 0, unknown 135.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/14651140 historic=castle Q1104565 13 m from ledger point
- origin moved 14 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.9913/13.23222) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=4; wikidata:Q1104565 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 333 elements); data/traces/manetin-castle-q1104565.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
