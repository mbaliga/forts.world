# U-Boot-Bunker Kilian

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `u-boot-bunker-kilian-q2466126` |
| Coordinates | 54.33556, 10.17 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.33556/10.17)) |
| Wikidata | [Q2466126](https://www.wikidata.org/wiki/Q2466126) (CC0) |
| Wikidata class | fortification |
| Types | bunker\|submarine base |
| Administrative area | Kiel |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 44 elements (coastline 1, building 4, road 35, wall 1, waterway 1, water 2).

Evidence: documented 0, mapped 44, inferred 0, derived 2; heights documented 1, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":27,"medianInside":4,"medianOutside":4}
- sea-1: DEM check failed {"cells":125,"medianInside":4,"medianOutside":4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.33556/10.17) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker\|submarine base; sitelinks=3; wikidata:Q2466126 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 44 elements); data/traces/u-boot-bunker-kilian-q2466126.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
