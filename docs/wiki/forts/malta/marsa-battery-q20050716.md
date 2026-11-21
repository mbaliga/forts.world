# Marsa Battery

> Malta · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `marsa-battery-q20050716` |
| Coordinates | 35.88169, 14.50072 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.88169/14.50072)) |
| Wikidata | [Q20050716](https://www.wikidata.org/wiki/Q20050716) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Marsa |
| Inception | 1798 |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 28 elements (road 8, building 10, wall 4, coastline 2, zone 1, water 3).

Evidence: documented 0, mapped 28, inferred 0, derived 3; heights documented 1, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":400,"medianInside":0.6,"medianOutside":0}
- sea-1: DEM check failed {"cells":398,"medianInside":0.6,"medianOutside":0}
- sea-2: DEM check ok {"cells":268,"medianInside":0.1,"medianOutside":3.4}
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.88169/14.50072) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=3; wikidata:Q20050716 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 28 elements); data/traces/marsa-battery-q20050716.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
