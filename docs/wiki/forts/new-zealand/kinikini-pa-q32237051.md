# Kinikini Pa

> New Zealand · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kinikini-pa-q32237051` |
| Coordinates | -39.15681, 177.83406 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-39.15681/177.83406)) |
| Wikidata | [Q32237051](https://www.wikidata.org/wiki/Q32237051) (CC0) |
| Wikidata class | fortification |
| Types | pā\|historic site |
| Administrative area | Hawke's Bay Region |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 18 elements (marker 1, road 4, coastline 1, cliff 1, zone 1, building 5, waterway 3, water 2).

Evidence: documented 0, mapped 18, inferred 0, derived 2; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":0,"medianInside":null,"medianOutside":19.7}
- sea-1: DEM check ok {"cells":104,"medianInside":4.5,"medianOutside":27.1}
- 7 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-39.15681/177.83406) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; pā\|historic site; sitelinks=1; wikidata:Q32237051 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 18 elements); data/traces/kinikini-pa-q32237051.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/new-zealand.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
