# Castillo de Cojímar

> Cuba · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-cojimar-q65121823` |
| Coordinates | 23.1673, -82.2946 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/23.1673/-82.2946)) |
| Wikidata | [Q65121823](https://www.wikidata.org/wiki/Q65121823) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Havana Province |
| Designations | part of UNESCO World Heritage Site |
| UNESCO WHC id | 204-008 |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 182 elements (marker 1, road 34, building 140, coastline 2, zone 3, retaining-wall 1, water 1).

Evidence: documented 0, mapped 182, inferred 0, derived 1; heights documented 0, inferred 0, unknown 141.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":221,"medianInside":1.5,"medianOutside":6.7}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/23.1673/-82.2946) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q65121823 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 182 elements); data/traces/castillo-de-cojimar-q65121823.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/cuba.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
