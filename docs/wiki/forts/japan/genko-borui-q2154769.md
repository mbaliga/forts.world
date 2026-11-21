# Genkō Bōrui

> Japan · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `genko-borui-q2154769` |
| Coordinates | 33.58556, 130.30833 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.58556/130.30833)) |
| Wikidata | [Q2154769](https://www.wikidata.org/wiki/Q2154769) (CC0) |
| Wikidata class | fortification |
| Types | bōrui |
| Administrative area | Fukuoka |
| Designations | Historic Site of Japan |
| Wikipedia language editions | 7 |

## What the model contains

Tier **T1**, status `location-only`, 62 elements (road 10, coastline 1, waterway 1, building 48, wall 1, water 1).

Evidence: documented 0, mapped 62, inferred 0, derived 1; heights documented 47, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":148,"medianInside":0.9,"medianOutside":6.2}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.58556/130.30833) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bōrui; sitelinks=7; wikidata:Q2154769 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 62 elements); data/traces/genko-borui-q2154769.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
