# Te Kararoa

> New Zealand · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `te-kararoa-q79307818` |
| Coordinates | -38.37823, 178.3369 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-38.37823/178.3369)) |
| Wikidata | [Q79307818](https://www.wikidata.org/wiki/Q79307818) (CC0) |
| Wikidata class | fortification |
| Types | pā |
| Administrative area | Gisborne District |
| Designations | Heritage New Zealand Category 2 historic place listing |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `location-only`, 8 elements (coastline 2, cliff 2, zone 1, road 1, water 2).

Evidence: documented 0, mapped 8, inferred 0, derived 2; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":385,"medianInside":10.4,"medianOutside":2.5}
- sea-1: DEM check ok {"cells":257,"medianInside":7.1,"medianOutside":20.2}
- 10 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-38.37823/178.3369) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; pā; sitelinks=0; wikidata:Q79307818 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 8 elements); data/traces/te-kararoa-q79307818.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/new-zealand.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
