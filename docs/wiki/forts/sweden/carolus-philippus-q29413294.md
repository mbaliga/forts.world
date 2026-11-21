# Carolus Philippus

> Sweden · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `carolus-philippus-q29413294` |
| Coordinates | 56.66665, 16.37133 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.66665/16.37133)) |
| Wikidata | [Q29413294](https://www.wikidata.org/wiki/Q29413294) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Kalmar Municipality |
| Designations | monument in Fornminnesregistret |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 140 elements (coastline 4, road 51, zone 3, building 72, wall 5, water 5).

Evidence: documented 0, mapped 140, inferred 0, derived 5; heights documented 0, inferred 0, unknown 77.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":400,"medianInside":1.1,"medianOutside":1}
- sea-1: DEM check failed {"cells":389,"medianInside":1.3,"medianOutside":0.9}
- sea-2: DEM check ok {"cells":246,"medianInside":-1,"medianOutside":3}
- sea-3: DEM check ok {"cells":389,"medianInside":1,"medianOutside":1.1}
- sea-4: DEM check failed {"cells":0,"medianInside":null,"medianOutside":1.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.66665/16.37133) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=1; wikidata:Q29413294 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 140 elements); data/traces/carolus-philippus-q29413294.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
