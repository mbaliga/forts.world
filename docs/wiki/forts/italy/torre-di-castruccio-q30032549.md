# Torre di Castruccio

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-di-castruccio-q30032549` |
| Coordinates | 44.04716, 10.0622 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.04716/10.0622)) |
| Wikidata | [Q30032549](https://www.wikidata.org/wiki/Q30032549) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|yes\|roundel |
| Administrative area | Carrara |
| Inception | 1320 |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `location-only`, 326 elements (marker 3, road 360, waterway 6, building 2119, water 1, zone 33, wall 7, retaining-wall 6).

Evidence: documented 0, mapped 326, inferred 0, derived 0; heights documented 0, inferred 0, unknown 133.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7920412 historic=yes 811 m from ledger point
- site is a route relation of 22 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (1752 x 1705 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 2119 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 360 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.04716/10.0622) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|yes\|roundel; sitelinks=2; wikidata:Q30032549 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 326 elements); data/traces/torre-di-castruccio-q30032549.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
