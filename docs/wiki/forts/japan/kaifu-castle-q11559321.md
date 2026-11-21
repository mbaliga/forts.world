# Kaifu Castle

> Japan · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kaifu-castle-q11559321` |
| Coordinates | 33.59444, 134.35794 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.59444/134.35794)) |
| Wikidata | [Q11559321](https://www.wikidata.org/wiki/Q11559321) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 46 elements (road 27, waterway 4, coastline 1, building 10, water 4).

Evidence: documented 0, mapped 46, inferred 0, derived 3; heights documented 0, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":387,"medianInside":3.9,"medianOutside":0.1}
- sea-1: DEM check failed {"cells":4,"medianInside":5.4,"medianOutside":3.5}
- sea-2: DEM check failed {"cells":30,"medianInside":5,"medianOutside":3.5}
- 75 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.59444/134.35794) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=1; wikidata:Q11559321 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 46 elements); data/traces/kaifu-castle-q11559321.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
