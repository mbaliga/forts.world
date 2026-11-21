# Castellare del Giglio

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castellare-del-giglio-q3662247` |
| Coordinates | 42.35667, 10.92472 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.35667/10.92472)) |
| Wikidata | [Q3662247](https://www.wikidata.org/wiki/Q3662247) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Giglio |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 139 elements (road 11, coastline 3, building 117, zone 6, water 2).

Evidence: documented 0, mapped 139, inferred 0, derived 2; heights documented 115, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":400,"medianInside":10.3,"medianOutside":0}
- sea-1: DEM check ok {"cells":130,"medianInside":0,"medianOutside":14.1}
- 5 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.35667/10.92472) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=1; wikidata:Q3662247 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 139 elements); data/traces/castellare-del-giglio-q3662247.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
