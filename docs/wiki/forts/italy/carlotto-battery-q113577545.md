# Carlotto Battery

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `carlotto-battery-q113577545` |
| Coordinates | 41.22951, 9.37701 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.22951/9.37701)) |
| Wikidata | [Q113577545](https://www.wikidata.org/wiki/Q113577545) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | La Maddalena |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `location-only`, 39 elements (road 23, coastline 2, building 9, zone 3, water 2).

Evidence: documented 0, mapped 39, inferred 0, derived 2; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":101,"medianInside":0,"medianOutside":4}
- sea-1: DEM check ok {"cells":14,"medianInside":-0.1,"medianOutside":3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.22951/9.37701) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=0; wikidata:Q113577545 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 39 elements); data/traces/carlotto-battery-q113577545.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
