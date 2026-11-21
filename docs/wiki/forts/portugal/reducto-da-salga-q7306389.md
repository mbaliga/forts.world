# Reducto da Salga

> Portugal · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `reducto-da-salga-q7306389` |
| Coordinates | 38.64556, -27.09444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.64556/-27.09444)) |
| Wikidata | [Q7306389](https://www.wikidata.org/wiki/Q7306389) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Azores |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 22 elements (road 3, building 10, coastline 3, retaining-wall 1, zone 3, water 2).

Evidence: documented 0, mapped 22, inferred 0, derived 2; heights documented 0, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":247,"medianInside":0,"medianOutside":18.4}
- sea-1: DEM check failed {"cells":0,"medianInside":null,"medianOutside":0}
- 14 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.64556/-27.09444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q7306389 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 22 elements); data/traces/reducto-da-salga-q7306389.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
