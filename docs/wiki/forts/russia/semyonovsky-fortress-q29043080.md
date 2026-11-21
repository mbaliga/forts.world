# Semyonovsky Fortress

> Russia · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `semyonovsky-fortress-q29043080` |
| Coordinates | 47.13833, 38.49389 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.13833/38.49389)) |
| Wikidata | [Q29043080](https://www.wikidata.org/wiki/Q29043080) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Rostov Oblast |
| Wikipedia language editions | 8 |

## What the model contains

Tier **T1**, status `location-only`, 11 elements (coastline 2, road 7, cliff 1, water 1).

Evidence: documented 0, mapped 11, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":105,"medianInside":0.6,"medianOutside":7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.13833/38.49389) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=8; wikidata:Q29043080 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 11 elements); data/traces/semyonovsky-fortress-q29043080.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
