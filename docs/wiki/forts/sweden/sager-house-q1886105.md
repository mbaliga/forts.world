# Sager House

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sager-house-q1886105` |
| Coordinates | 59.32876, 18.06728 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.32876/18.06728)) |
| Wikidata | [Q1886105](https://www.wikidata.org/wiki/Q1886105) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|residenz\|architectural ensemble |
| Administrative area | Stockholm Municipality |
| Inception | 1894 |
| Designations | governmental listed building complex |
| Wikipedia language editions | 19 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |
| OSM `description` | Official residence of Swedish prime minister |

## What the model contains

Tier **T1**, status `outline+walls`, 286 elements (outline 1, road 210, coastline 8, building 41, waterway 3, wall 7, retaining-wall 4, water 3, zone 9).

Evidence: documented 0, mapped 286, inferred 0, derived 2; heights documented 37, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/141844590 historic=castle Q1886105 2 m from ledger point
- origin moved 1 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":1,"medianInside":15.3,"medianOutside":20.1}
- sea-1: DEM check failed {"cells":13,"medianInside":11,"medianOutside":20.3}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.32876/18.06728) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|residenz\|architectural ensemble; sitelinks=19; wikidata:Q1886105 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 286 elements); data/traces/sager-house-q1886105.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
