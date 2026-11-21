# Kuivasaari

> Finland · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kuivasaari-q3351825` |
| Coordinates | 60.1, 25.01667 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.1/25.01667)) |
| Wikidata | [Q3351825](https://www.wikidata.org/wiki/Q3351825) (CC0) |
| Wikidata class | fortification |
| Types | island\|artillery battery |
| Administrative area | Helsinki |
| Wikipedia language editions | 9 |

## What the model contains

Tier **T1**, status `location-only`, 41 elements (marker 3, building 8, road 4, coastline 3, zone 11, cliff 6, wall 4, water 2).

Evidence: documented 0, mapped 41, inferred 0, derived 2; heights documented 0, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":400,"medianInside":20.1,"medianOutside":17}
- sea-1: DEM check failed {"cells":188,"medianInside":16.8,"medianOutside":23.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.1/25.01667) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; island\|artillery battery; sitelinks=9; wikidata:Q3351825 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 41 elements); data/traces/kuivasaari-q3351825.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/finland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
