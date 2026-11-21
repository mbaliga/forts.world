# Aragonese Castle

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `aragonese-castle-q1048809` |
| Coordinates | 40.73162, 13.96493 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.73162/13.96493)) |
| Wikidata | [Q1048809](https://www.wikidata.org/wiki/Q1048809) (CC0) |
| Wikidata class | castle |
| Types | castle\|military museum building |
| Administrative area | Ischia |
| Inception | 1442 |
| Designations | Italian national heritage |
| Wikipedia language editions | 20 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `location-only`, 276 elements (marker 1, road 133, coastline 4, building 32, wall 57, zone 14, retaining-wall 32, cliff 2, water 1).

Evidence: documented 0, mapped 276, inferred 0, derived 1; heights documented 7, inferred 0, unknown 114.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5975734 historic=castle Q1048809 36 m from ledger point
- site is a site relation of 33 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (260 x 263 m)
- island ring (69984 m2) cut out of sea-0
- origin moved 61 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":660,"medianInside":0,"medianOutside":19.9}
- 63 DEM cells below -3 m (bathymetry) clamped to -3 m
- 20 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.73162/13.96493) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|military museum building; sitelinks=20; wikidata:Q1048809 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 269 elements); data/traces/aragonese-castle-q1048809.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
