# Wehrturm Cleve

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wehrturm-cleve-q117359972` |
| Coordinates | 52.12363, 11.63513 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.12363/11.63513)) |
| Wikidata | [Q117359972](https://www.wikidata.org/wiki/Q117359972) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Magdeburg |
| Designations | heritage monument in Saxony-Anhalt |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `location-only`, 312 elements (marker 47, road 819, building 310, zone 53, waterway 3, wall 60, retaining-wall 8, water 1).

Evidence: documented 0, mapped 312, inferred 0, derived 0; heights documented 43, inferred 0, unknown 85.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/194991 historic=castle Q1408941 861 m from ledger point
- site is a site relation of 51 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (4978 x 8093 m)
- present-day buildings capped: kept the 60 nearest the outline centre of 310 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 819 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.12363/11.63513) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q117359972 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 312 elements); data/traces/wehrturm-cleve-q117359972.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
