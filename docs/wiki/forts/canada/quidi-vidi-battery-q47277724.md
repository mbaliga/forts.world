# Quidi Vidi Battery

> Canada · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `quidi-vidi-battery-q47277724` |
| Coordinates | 47.58039, -52.67481 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.58039/-52.67481)) |
| Wikidata | [Q47277724](https://www.wikidata.org/wiki/Q47277724) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | St. John's |
| Designations | provincial historic site |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `location-only`, 95 elements (road 35, building 34, coastline 3, zone 17, cliff 3, water 3).

Evidence: documented 0, mapped 95, inferred 0, derived 3; heights documented 1, inferred 0, unknown 33.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":112,"medianInside":0.1,"medianOutside":24.1}
- sea-1: DEM check failed {"cells":400,"medianInside":17,"medianOutside":11.6}
- sea-2: DEM check failed {"cells":343,"medianInside":20.4,"medianOutside":7.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.58039/-52.67481) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=0; wikidata:Q47277724 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 95 elements); data/traces/quidi-vidi-battery-q47277724.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/canada.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
