# Kronborg Castle

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kronborg-castle-q189358` |
| Coordinates | 56.03861, 12.62194 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.03861/12.62194)) |
| Wikidata | [Q189358](https://www.wikidata.org/wiki/Q189358) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum\|palace\|fort |
| Administrative area | Helsingør Municipality |
| Inception | 1585 |
| Designations | monument on Kulturstyrelsen register\|World Heritage Site |
| UNESCO WHC id | 696 |
| Wikipedia language editions | 55 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 106 elements (outline 1, marker 22, water 5, road 43, building 27, coastline 2, wall 2, zone 4).

Evidence: documented 0, mapped 106, inferred 0, derived 4; heights documented 1, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1588209 historic=castle Q189358 50 m from ledger point
- origin moved 33 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":50,"medianInside":4.2,"medianOutside":3.6}
- sea-1: DEM check ok {"cells":100,"medianInside":2.8,"medianOutside":3.8}
- sea-2: DEM check ok {"cells":348,"medianInside":0.9,"medianOutside":4.3}
- sea-3: DEM check failed {"cells":1572,"medianInside":3.9,"medianOutside":1}
- 414 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.03861/12.62194) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum\|palace\|fort; sitelinks=55; wikidata:Q189358 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 106 elements); data/traces/kronborg-castle-q189358.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
