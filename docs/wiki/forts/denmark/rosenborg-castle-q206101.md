# Rosenborg Castle

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rosenborg-castle-q206101` |
| Coordinates | 55.68569, 12.57743 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.68569/12.57743)) |
| Wikidata | [Q206101](https://www.wikidata.org/wiki/Q206101) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|museum |
| Administrative area | Copenhagen Municipality |
| Inception | 1606 |
| Designations | monument on Kulturstyrelsen register |
| Wikipedia language editions | 38 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://www.kongernessamling.dk/rosenborg/ |

## What the model contains

Tier **T1**, status `outline+walls`, 289 elements (outline 1, marker 2, road 191, zone 55, water 4, building 26, wall 10).

Evidence: documented 0, mapped 289, inferred 0, derived 0; heights documented 2, inferred 0, unknown 34.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/25524592 historic=castle Q206101 1 m from ledger point

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.68569/12.57743) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|museum; sitelinks=38; wikidata:Q206101 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 289 elements); data/traces/rosenborg-castle-q206101.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
