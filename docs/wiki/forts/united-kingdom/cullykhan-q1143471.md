# Cullykhan

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cullykhan-q1143471` |
| Coordinates | 57.68544, -2.27452 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.68544/-2.27452)) |
| Wikidata | [Q1143471](https://www.wikidata.org/wiki/Q1143471) (CC0) |
| Wikidata class | castle |
| Types | castle\|promontory fort\|archaeological site\|artillery battery |
| Administrative area | Aberdeenshire |
| Designations | scheduled monument |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 9 elements (road 3, coastline 1, zone 3, water 2).

Evidence: documented 0, mapped 9, inferred 0, derived 2; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":33,"medianInside":6,"medianOutside":17.8}
- sea-1: DEM check ok {"cells":61,"medianInside":3,"medianOutside":19.5}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.68544/-2.27452) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|promontory fort\|archaeological site\|artillery battery; sitelinks=3; wikidata:Q1143471 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 9 elements); data/traces/cullykhan-q1143471.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
