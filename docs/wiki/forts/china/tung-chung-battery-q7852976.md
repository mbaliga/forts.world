# Tung Chung Battery

> China · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tung-chung-battery-q7852976` |
| Coordinates | 22.28731, 113.93548 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/22.28731/113.93548)) |
| Wikidata | [Q7852976](https://www.wikidata.org/wiki/Q7852976) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Hong Kong |
| Designations | declared monument |
| Wikipedia language editions | 6 |

## What the model contains

Tier **T1**, status `location-only`, 63 elements (marker 2, coastline 2, road 40, waterway 1, building 15, cliff 1, water 2).

Evidence: documented 0, mapped 63, inferred 0, derived 2; heights documented 0, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":186,"medianInside":1.1,"medianOutside":10.9}
- sea-1: DEM check ok {"cells":7,"medianInside":2,"medianOutside":3.3}
- 17 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/22.28731/113.93548) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=6; wikidata:Q7852976 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 63 elements); data/traces/tung-chung-battery-q7852976.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/china.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
