# Skallö Redoubt

> Sweden · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `skallo-redoubt-q29413293` |
| Coordinates | 56.67785, 16.40315 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.67785/16.40315)) |
| Wikidata | [Q29413293](https://www.wikidata.org/wiki/Q29413293) (CC0) |
| Wikidata class | fortification |
| Types | sconce |
| Administrative area | Kalmar Municipality |
| Designations | monument in Fornminnesregistret |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 8 elements (coastline 5, road 1, water 2).

Evidence: documented 0, mapped 8, inferred 0, derived 2; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":4,"medianInside":0.6,"medianOutside":-2}
- sea-1: DEM check failed {"cells":399,"medianInside":-2,"medianOutside":-3}
- 13 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.67785/16.40315) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; sconce; sitelinks=1; wikidata:Q29413293 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 8 elements); data/traces/skallo-redoubt-q29413293.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
