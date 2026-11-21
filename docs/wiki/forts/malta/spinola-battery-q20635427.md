# Spinola Battery

> Malta · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `spinola-battery-q20635427` |
| Coordinates | 35.92106, 14.49283 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.92106/14.49283)) |
| Wikidata | [Q20635427](https://www.wikidata.org/wiki/Q20635427) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery\|former hospital |
| Administrative area | St. Julian's |
| Inception | 1889 |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 111 elements (marker 2, road 71, building 18, coastline 1, wall 7, zone 7, water 5).

Evidence: documented 0, mapped 111, inferred 0, derived 5; heights documented 4, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":19,"medianInside":10.5,"medianOutside":11.5}
- sea-1: DEM check failed {"cells":0,"medianInside":null,"medianOutside":11.3}
- sea-2: DEM check failed {"cells":396,"medianInside":11.8,"medianOutside":4.1}
- sea-3: DEM check ok {"cells":47,"medianInside":7.2,"medianOutside":11.6}
- sea-4: DEM check failed {"cells":400,"medianInside":11.7,"medianOutside":4}
- 10 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.92106/14.49283) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery\|former hospital; sitelinks=3; wikidata:Q20635427 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 111 elements); data/traces/spinola-battery-q20635427.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
