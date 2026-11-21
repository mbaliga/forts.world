# Redoubt Point

> Sweden · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `redoubt-point-q29348476` |
| Coordinates | 57.44072, 18.11838 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.44072/18.11838)) |
| Wikidata | [Q29348476](https://www.wikidata.org/wiki/Q29348476) (CC0) |
| Wikidata class | fortification |
| Types | sconce |
| Administrative area | Region Gotland |
| Designations | monument in Fornminnesregistret |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `location-only`, 8 elements (coastline 1, road 1, building 5, water 1).

Evidence: documented 0, mapped 8, inferred 0, derived 1; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":259,"medianInside":-2,"medianOutside":2.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.44072/18.11838) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; sconce; sitelinks=0; wikidata:Q29348476 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 8 elements); data/traces/redoubt-point-q29348476.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
