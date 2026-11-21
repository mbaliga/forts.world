# Punta Coda Battery

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `punta-coda-battery-q113577550` |
| Coordinates | 41.18892, 9.43433 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.18892/9.43433)) |
| Wikidata | [Q113577550](https://www.wikidata.org/wiki/Q113577550) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | La Maddalena |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `location-only`, 20 elements (coastline 3, road 1, building 13, water 3).

Evidence: documented 0, mapped 20, inferred 0, derived 3; heights documented 0, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- island ring (1480 m2) cut out of sea-1
- sea-0: DEM check ok {"cells":1,"medianInside":-0.4,"medianOutside":0}
- sea-1: DEM check ok {"cells":210,"medianInside":0,"medianOutside":6.8}
- sea-2: DEM check failed {"cells":2,"medianInside":0.7,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.18892/9.43433) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=0; wikidata:Q113577550 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 20 elements); data/traces/punta-coda-battery-q113577550.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
