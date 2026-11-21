# Castello di San Nicola

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-di-san-nicola-q113556264` |
| Coordinates | 38.0155, 13.61611 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.0155/13.61611)) |
| Wikidata | [Q113556264](https://www.wikidata.org/wiki/Q113556264) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Trabia |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `location-only`, 94 elements (marker 2, road 39, coastline 2, retaining-wall 3, building 42, water 6).

Evidence: documented 0, mapped 94, inferred 0, derived 6; heights documented 1, inferred 0, unknown 44.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":128,"medianInside":0,"medianOutside":5.3}
- sea-1: DEM check failed {"cells":93,"medianInside":3.3,"medianOutside":0.5}
- sea-2: DEM check failed {"cells":400,"medianInside":3.3,"medianOutside":0}
- sea-3: DEM check failed {"cells":400,"medianInside":3.3,"medianOutside":0}
- sea-4: DEM check failed {"cells":400,"medianInside":3.3,"medianOutside":0}
- sea-5: DEM check failed {"cells":0,"medianInside":null,"medianOutside":2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.0155/13.61611) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=0; wikidata:Q113556264 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 94 elements); data/traces/castello-di-san-nicola-q113556264.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
