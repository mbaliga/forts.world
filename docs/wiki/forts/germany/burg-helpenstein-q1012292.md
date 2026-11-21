# Burg Helpenstein

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-helpenstein-q1012292` |
| Coordinates | 51.1462, 6.66136 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.1462/6.66136)) |
| Wikidata | [Q1012292](https://www.wikidata.org/wiki/Q1012292) (CC0) |
| Wikidata class | castle |
| Types | castle\|deserted castle site |
| Administrative area | Neuss |
| Designations | Bodendenkmal |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `location-only`, 358 elements (marker 2, road 165, waterway 18, building 290, zone 57, wall 3, water 8).

Evidence: documented 0, mapped 358, inferred 0, derived 0; heights documented 1, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/551400 historic=yes Q1463780 36038 m from ledger point
- site is a route relation of 215 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (34356 x 71303 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 290 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 165 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.1462/6.66136) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|deserted castle site; sitelinks=1; wikidata:Q1012292 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 358 elements); data/traces/burg-helpenstein-q1012292.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
