# Fort Banks

> Australia · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-banks-q5470772` |
| Coordinates | -33.9947, 151.25 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-33.9947/151.25)) |
| Wikidata | [Q5470772](https://www.wikidata.org/wiki/Q5470772) (CC0) |
| Wikidata class | fort |
| Types | fort\|military installation |
| Administrative area | New South Wales |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 24 elements (marker 1, road 10, coastline 2, cliff 1, building 6, zone 1, wall 1, water 2).

Evidence: documented 0, mapped 24, inferred 0, derived 2; heights documented 1, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":51,"medianInside":4.9,"medianOutside":29.9}
- sea-1: DEM check failed {"cells":0,"medianInside":null,"medianOutside":28.6}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-33.9947/151.25) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|military installation; sitelinks=3; wikidata:Q5470772 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 24 elements); data/traces/fort-banks-q5470772.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/australia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
