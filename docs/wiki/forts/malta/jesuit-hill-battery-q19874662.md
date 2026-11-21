# Jesuit Hill Battery

> Malta · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `jesuit-hill-battery-q19874662` |
| Coordinates | 35.88261, 14.49803 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.88261/14.49803)) |
| Wikidata | [Q19874662](https://www.wikidata.org/wiki/Q19874662) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Marsa |
| Inception | 1799 |
| Wikipedia language editions | 4 |

## What the model contains

Tier **T1**, status `location-only`, 79 elements (marker 1, road 30, building 29, wall 12, coastline 1, zone 4, water 2).

Evidence: documented 0, mapped 79, inferred 0, derived 2; heights documented 1, inferred 0, unknown 40.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":37,"medianInside":2.3,"medianOutside":9.6}
- sea-1: DEM check ok {"cells":33,"medianInside":6.6,"medianOutside":9.8}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.88261/14.49803) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=4; wikidata:Q19874662 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 79 elements); data/traces/jesuit-hill-battery-q19874662.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
