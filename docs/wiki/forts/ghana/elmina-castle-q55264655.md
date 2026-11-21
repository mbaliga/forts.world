# Elmina Castle

> Ghana · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `elmina-castle-q55264655` |
| Coordinates | 5.08275, -1.34807 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/5.08275/-1.34807)) |
| Wikidata | [Q55264655](https://www.wikidata.org/wiki/Q55264655) (CC0) |
| Wikidata class | castle |
| Types | castle\|fort\|factory\|cultural heritage |
| Administrative area | Central Region |
| Inception | 1482 |
| Designations | part of UNESCO World Heritage Site\|Heritage of Portuguese Influence\|Ghana’s material cultural heritage |
| UNESCO WHC id | 34-011 |
| Wikipedia language editions | 35 |
| OSM `historic` | castle |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 97 elements (outline 1, coastline 2, road 17, building 71, wall 1, waterway 1, zone 1, water 3).

Evidence: documented 0, mapped 97, inferred 0, derived 3; heights documented 0, inferred 0, unknown 72.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/136939031 historic=castle Q1438772 3 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":613,"medianInside":1.1,"medianOutside":2.9}
- sea-1: DEM check ok {"cells":256,"medianInside":-0.4,"medianOutside":2.1}
- sea-2: DEM check ok {"cells":112,"medianInside":1.3,"medianOutside":1.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/5.08275/-1.34807) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fort\|factory\|cultural heritage; sitelinks=35; wikidata:Q55264655 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 97 elements); data/traces/elmina-castle-q55264655.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ghana.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
