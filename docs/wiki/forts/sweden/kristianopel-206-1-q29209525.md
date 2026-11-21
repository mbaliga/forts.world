# Kristianopel 206:1

> Sweden · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kristianopel-206-1-q29209525` |
| Coordinates | 56.25299, 16.04323 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.25299/16.04323)) |
| Wikidata | [Q29209525](https://www.wikidata.org/wiki/Q29209525) (CC0) |
| Wikidata class | fortification |
| Types | ancient monument\|city walls |
| Administrative area | Karlskrona Municipality |
| Designations | monument in Fornminnesregistret |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 43 elements (coastline 5, wall 8, road 20, building 7, water 3).

Evidence: documented 0, mapped 43, inferred 0, derived 3; heights documented 0, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":208,"medianInside":-2,"medianOutside":-0.1}
- sea-1: DEM check failed {"cells":0,"medianInside":null,"medianOutside":-1.3}
- sea-2: DEM check ok {"cells":29,"medianInside":-2,"medianOutside":-1.2}
- 16 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.25299/16.04323) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; ancient monument\|city walls; sitelinks=1; wikidata:Q29209525 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 43 elements); data/traces/kristianopel-206-1-q29209525.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
