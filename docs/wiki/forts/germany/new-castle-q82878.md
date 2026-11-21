# New Castle

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `new-castle-q82878` |
| Coordinates | 48.76472, 11.43056 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.76472/11.43056)) |
| Wikidata | [Q82878](https://www.wikidata.org/wiki/Q82878) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Ingolstadt |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `location-only`, 315 elements (marker 17, waterway 1, road 245, building 141, wall 23, zone 4).

Evidence: documented 0, mapped 315, inferred 0, derived 0; heights documented 22, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6180405 historic=castle Q82878 19 m from ledger point
- site is a site relation of 11 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (123 x 116 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 141 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 245 mapped (trace size budget); minor lanes are not drawn
- origin moved 22 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.76472/11.43056) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=6; wikidata:Q82878 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 360 elements); data/traces/new-castle-q82878.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
