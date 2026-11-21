# Türkenturm

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `turkenturm-q117353838` |
| Coordinates | 52.12695, 11.63042 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.12695/11.63042)) |
| Wikidata | [Q117353838](https://www.wikidata.org/wiki/Q117353838) (CC0) |
| Wikidata class | fort |
| Types | fortified tower\|destroyed building or structure |
| Administrative area | Magdeburg |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `location-only`, 343 elements (marker 93, building 263, road 1021, zone 45, waterway 1, wall 43, retaining-wall 20, water 1).

Evidence: documented 0, mapped 343, inferred 0, derived 0; heights documented 51, inferred 0, unknown 72.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/194991 historic=castle Q1408941 407 m from ledger point
- site is a site relation of 51 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (4978 x 8093 m)
- present-day buildings capped: kept the 60 nearest the outline centre of 263 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 1021 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.12695/11.63042) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower\|destroyed building or structure; sitelinks=1; wikidata:Q117353838 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 343 elements); data/traces/turkenturm-q117353838.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
