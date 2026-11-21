# Vendôme Tower

> Malta · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vendome-tower-q19828344` |
| Coordinates | 35.83719, 14.54431 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.83719/14.54431)) |
| Wikidata | [Q19828344](https://www.wikidata.org/wiki/Q19828344) (CC0) |
| Wikidata class | fortification |
| Types | tour-reduit |
| Administrative area | Marsaxlokk |
| Inception | 1715 |
| Wikipedia language editions | 5 |

## What the model contains

Tier **T1**, status `location-only`, 79 elements (coastline 1, road 54, building 13, wall 7, zone 1, water 3).

Evidence: documented 0, mapped 79, inferred 0, derived 3; heights documented 1, inferred 0, unknown 19.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":5,"medianInside":0,"medianOutside":4.9}
- sea-1: DEM check ok {"cells":133,"medianInside":0,"medianOutside":7.8}
- sea-2: DEM check failed {"cells":400,"medianInside":5.3,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.83719/14.54431) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tour-reduit; sitelinks=5; wikidata:Q19828344 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 79 elements); data/traces/vendome-tower-q19828344.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
