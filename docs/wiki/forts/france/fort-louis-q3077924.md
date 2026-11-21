# Fort Louis

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-louis-q3077924` |
| Coordinates | 18.0708, -63.0854 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/18.0708/-63.0854)) |
| Wikidata | [Q3077924](https://www.wikidata.org/wiki/Q3077924) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Saint-Martin |
| Inception | 1789 |
| Wikipedia language editions | 4 |

## What the model contains

Tier **T1**, status `location-only`, 220 elements (marker 10, road 48, coastline 6, building 147, wall 6, water 3).

Evidence: documented 0, mapped 220, inferred 0, derived 3; heights documented 1, inferred 0, unknown 152.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":40,"medianInside":3.5,"medianOutside":9.3}
- sea-1: DEM check ok {"cells":10,"medianInside":6.6,"medianOutside":8.8}
- sea-2: DEM check ok {"cells":51,"medianInside":4,"medianOutside":9.4}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/18.0708/-63.0854) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q3077924 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 220 elements); data/traces/fort-louis-q3077924.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
