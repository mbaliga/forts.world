# Yodo Castle

> Japan · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `yodo-castle-q11559695` |
| Coordinates | 34.90505, 135.7177 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.90505/135.7177)) |
| Wikidata | [Q11559695](https://www.wikidata.org/wiki/Q11559695) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Kyoto |
| Wikipedia language editions | 5 |
| OSM `historic` | yes |
| OSM `description` | 大阪高麗橋～髭茶屋追分・東海道分岐まで |

## What the model contains

Tier **T1**, status `location-only`, 362 elements (marker 42, water 4, road 412, waterway 13, building 2012, zone 8, wall 5, retaining-wall 20).

Evidence: documented 0, mapped 362, inferred 0, derived 0; heights documented 11, inferred 0, unknown 134.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/4544900 historic=yes Q11374737 8252 m from ledger point
- site is a route relation of 373 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (29767 x 33553 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 2012 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 412 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.90505/135.7177) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=5; wikidata:Q11559695 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 1 elements); data/traces/yodo-castle-q11559695.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
