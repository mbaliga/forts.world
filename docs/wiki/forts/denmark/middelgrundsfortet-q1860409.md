# Middelgrundsfortet

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `middelgrundsfortet-q1860409` |
| Coordinates | 55.72028, 12.66583 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.72028/12.66583)) |
| Wikidata | [Q1860409](https://www.wikidata.org/wiki/Q1860409) (CC0) |
| Wikidata class | fort |
| Types | artificial island\|ancient monument\|sea fort |
| Administrative area | Copenhagen Municipality |
| Designations | protected ancient monument in Denmark |
| Wikipedia language editions | 10 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 140 elements (outline 1, coastline 1, road 63, wall 30, building 33, zone 10, water 2).

Evidence: documented 0, mapped 140, inferred 0, derived 2; heights documented 0, inferred 0, unknown 63.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/569127513 historic=yes 90 m from ledger point
- origin moved 89 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":1594,"medianInside":-9,"medianOutside":-10}
- sea-1: DEM check failed {"cells":1130,"medianInside":-9,"medianOutside":-9}
- 6561 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.72028/12.66583) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; artificial island\|ancient monument\|sea fort; sitelinks=10; wikidata:Q1860409 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 140 elements); data/traces/middelgrundsfortet-q1860409.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
