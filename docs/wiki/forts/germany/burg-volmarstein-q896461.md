# Burg Volmarstein

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-volmarstein-q896461` |
| Coordinates | 51.3743, 7.38264 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.3743/7.38264)) |
| Wikidata | [Q896461](https://www.wikidata.org/wiki/Q896461) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Volmarstein |
| Inception | 1100 |
| Designations | architectural heritage monument |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 8 |

## What the model contains

Tier **T1**, status `location-only`, 203 elements (marker 1, road 79, zone 5, building 98, retaining-wall 9, waterway 4, wall 1, water 1, cliff 5).

Evidence: documented 0, mapped 203, inferred 0, derived 0; heights documented 2, inferred 0, unknown 106.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7146981 historic=castle Q896461 35 m from ledger point
- site is a site relation of 4 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (20 x 69 m)
- origin moved 21 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.3743/7.38264) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q896461 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 216 elements); data/traces/burg-volmarstein-q896461.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
