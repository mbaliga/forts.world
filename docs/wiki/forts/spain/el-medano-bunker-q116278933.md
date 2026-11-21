# El Médano bunker

> Spain · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `el-medano-bunker-q116278933` |
| Coordinates | 28.04474, -16.53339 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/28.04474/-16.53339)) |
| Wikidata | [Q116278933](https://www.wikidata.org/wiki/Q116278933) (CC0) |
| Wikidata class | fortification |
| Types | bunker |
| Administrative area | El Médano |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 75 elements (road 36, building 26, coastline 1, wall 10, water 2).

Evidence: documented 0, mapped 75, inferred 0, derived 2; heights documented 18, inferred 0, unknown 18.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":6,"medianInside":-0.2,"medianOutside":0.2}
- sea-1: DEM check ok {"cells":183,"medianInside":0,"medianOutside":5.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/28.04474/-16.53339) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker; sitelinks=1; wikidata:Q116278933 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 75 elements); data/traces/el-medano-bunker-q116278933.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
