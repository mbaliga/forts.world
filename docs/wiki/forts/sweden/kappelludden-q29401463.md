# Kappelludden

> Sweden · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kappelludden-q29401463` |
| Coordinates | 56.81805, 16.83992 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.81805/16.83992)) |
| Wikidata | [Q29401463](https://www.wikidata.org/wiki/Q29401463) (CC0) |
| Wikidata class | fortification |
| Types | bunker |
| Administrative area | Borgholm Municipality |
| Designations | monument in Fornminnesregistret |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `location-only`, 23 elements (marker 1, coastline 3, road 4, zone 3, building 11, water 1).

Evidence: documented 0, mapped 23, inferred 0, derived 1; heights documented 0, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":213,"medianInside":-3,"medianOutside":0.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.81805/16.83992) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker; sitelinks=0; wikidata:Q29401463 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 23 elements); data/traces/kappelludden-q29401463.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
