# Peñón de Vélez de la Gomera

> Spain · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `penon-de-velez-de-la-gomera-q191146` |
| Coordinates | 35.17222, -4.29972 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.17222/-4.29972)) |
| Wikidata | [Q191146](https://www.wikidata.org/wiki/Q191146) (CC0) |
| Wikidata class | fortification |
| Types | island\|peninsula\|peñón |
| Administrative area | Melilla |
| Wikipedia language editions | 53 |

## What the model contains

Tier **T1**, status `location-only`, 75 elements (marker 1, coastline 2, building 24, wall 6, retaining-wall 14, road 16, cliff 6, zone 5, water 1).

Evidence: documented 0, mapped 75, inferred 0, derived 1; heights documented 0, inferred 0, unknown 44.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":299,"medianInside":4.7,"medianOutside":6.9}
- 50 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.17222/-4.29972) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; island\|peninsula\|peñón; sitelinks=53; wikidata:Q191146 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 75 elements); data/traces/penon-de-velez-de-la-gomera-q191146.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
