# Forte das Cinco Ribeiras

> Portugal · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-das-cinco-ribeiras-q5472535` |
| Coordinates | 38.67556, -27.32889 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.67556/-27.32889)) |
| Wikidata | [Q5472535](https://www.wikidata.org/wiki/Q5472535) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Azores |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 107 elements (road 5, coastline 4, building 14, zone 16, wall 62, water 3, waterway 1, cliff 2).

Evidence: documented 0, mapped 107, inferred 0, derived 2; heights documented 62, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":400,"medianInside":0,"medianOutside":21}
- sea-1: DEM check ok {"cells":243,"medianInside":0,"medianOutside":8.6}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.67556/-27.32889) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q5472535 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 107 elements); data/traces/forte-das-cinco-ribeiras-q5472535.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
