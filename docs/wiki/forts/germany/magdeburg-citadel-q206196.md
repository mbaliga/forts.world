# Magdeburg citadel

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `magdeburg-citadel-q206196` |
| Coordinates | 52.1271, 11.6445 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.1271/11.6445)) |
| Wikidata | [Q206196](https://www.wikidata.org/wiki/Q206196) (CC0) |
| Wikidata class | fort |
| Types | citadel |
| Administrative area | Magdeburg |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `location-only`, 373 elements (marker 41, building 99, road 536, waterway 6, zone 55, water 6, wall 12, retaining-wall 4).

Evidence: documented 0, mapped 373, inferred 0, derived 0; heights documented 48, inferred 0, unknown 67.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/194991 historic=castle Q1408941 1355 m from ledger point
- site is a site relation of 51 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (4978 x 8093 m)
- roads capped: kept the 150 longest of 536 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.1271/11.6445) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel; sitelinks=3; wikidata:Q206196 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 373 elements); data/traces/magdeburg-citadel-q206196.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
