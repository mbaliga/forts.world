# U-Boot-Bunker Hornisse

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `u-boot-bunker-hornisse-q634946` |
| Coordinates | 53.1171, 8.7344 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.1171/8.7344)) |
| Wikidata | [Q634946](https://www.wikidata.org/wiki/Q634946) (CC0) |
| Wikidata class | fortification |
| Types | submarine pen |
| Administrative area | Häfen |
| Wikipedia language editions | 4 |

## What the model contains

Tier **T1**, status `location-only`, 39 elements (water 7, building 13, coastline 2, road 14, waterway 2, wall 1).

Evidence: documented 0, mapped 39, inferred 0, derived 2; heights documented 1, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":48,"medianInside":3.8,"medianOutside":2.7}
- sea-1: DEM check ok {"cells":74,"medianInside":-2,"medianOutside":3.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.1171/8.7344) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; submarine pen; sitelinks=4; wikidata:Q634946 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 39 elements); data/traces/u-boot-bunker-hornisse-q634946.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
