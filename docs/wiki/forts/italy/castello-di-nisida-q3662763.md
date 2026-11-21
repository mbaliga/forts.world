# Castello di Nisida

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-di-nisida-q3662763` |
| Coordinates | 40.79701, 14.16096 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.79701/14.16096)) |
| Wikidata | [Q3662763](https://www.wikidata.org/wiki/Q3662763) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Naples |
| Wikipedia language editions | 4 |

## What the model contains

Tier **T1**, status `location-only`, 32 elements (road 6, building 12, wall 8, cliff 2, coastline 2, water 2).

Evidence: documented 0, mapped 32, inferred 0, derived 2; heights documented 0, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":163,"medianInside":0,"medianOutside":53.8}
- sea-1: DEM check ok {"cells":5,"medianInside":-2.5,"medianOutside":16.4}
- 73 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.79701/14.16096) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q3662763 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 32 elements); data/traces/castello-di-nisida-q3662763.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
