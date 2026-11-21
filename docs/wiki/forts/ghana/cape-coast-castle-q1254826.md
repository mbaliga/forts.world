# Cape Coast Castle

> Ghana · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cape-coast-castle-q1254826` |
| Coordinates | 5.10358, -1.24125 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/5.10358/-1.24125)) |
| Wikidata | [Q1254826](https://www.wikidata.org/wiki/Q1254826) (CC0) |
| Wikidata class | castle |
| Types | castle\|factory\|slave market |
| Administrative area | Central Region |
| Inception | 1653 |
| Designations | Ghana’s material cultural heritage\|part of UNESCO World Heritage Site |
| UNESCO WHC id | 34-002 |
| Wikipedia language editions | 21 |
| OSM `historic` | castle |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 251 elements (outline 1, road 23, building 222, coastline 2, wall 1, water 2).

Evidence: documented 0, mapped 251, inferred 0, derived 2; heights documented 0, inferred 0, unknown 223.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/216864117 historic=castle Q1254826 33 m from ledger point
- origin moved 35 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":836,"medianInside":1,"medianOutside":9.6}
- sea-1: DEM check ok {"cells":173,"medianInside":1.4,"medianOutside":3.9}
- 29 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/5.10358/-1.24125) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|factory\|slave market; sitelinks=21; wikidata:Q1254826 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 251 elements); data/traces/cape-coast-castle-q1254826.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ghana.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
