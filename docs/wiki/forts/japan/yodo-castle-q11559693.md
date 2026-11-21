# Yodo Castle

> Japan · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `yodo-castle-q11559693` |
| Coordinates | 34.91006, 135.71911 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.91006/135.71911)) |
| Wikidata | [Q11559693](https://www.wikidata.org/wiki/Q11559693) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Kyoto |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `description` | 大阪高麗橋～髭茶屋追分・東海道分岐まで |

## What the model contains

Tier **T1**, status `location-only`, 331 elements (marker 19, water 2, road 271, waterway 21, zone 11, building 1793, wall 7, retaining-wall 1).

Evidence: documented 0, mapped 331, inferred 0, derived 0; heights documented 3, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/4544900 historic=yes Q11374737 8791 m from ledger point
- site is a route relation of 373 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (29765 x 33553 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 1793 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 271 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.91006/135.71911) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=2; wikidata:Q11559693 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 331 elements); data/traces/yodo-castle-q11559693.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
