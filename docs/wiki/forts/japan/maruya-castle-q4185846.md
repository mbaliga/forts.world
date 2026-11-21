# Maruya Castle

> Japan · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `maruya-castle-q4185846` |
| Coordinates | 34.1944, 132.67797 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.1944/132.67797)) |
| Wikidata | [Q4185846](https://www.wikidata.org/wiki/Q4185846) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Hiroshima Prefecture |
| Inception | 1351 |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 31 elements (road 14, coastline 4, building 9, water 4).

Evidence: documented 0, mapped 31, inferred 0, derived 2; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":77,"medianInside":2.3,"medianOutside":3.7}
- sea-1: DEM check ok {"cells":114,"medianInside":1.3,"medianOutside":4.4}
- 9 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.1944/132.67797) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q4185846 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 31 elements); data/traces/maruya-castle-q4185846.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
