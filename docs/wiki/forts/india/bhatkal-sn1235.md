# Bhatkal

> India · Karnataka · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bhatkal-sn1235` |
| Coordinates | 13.966251, 74.533136 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/13.966251/74.533136)) |
| Programme catalogue | confidence medium, significance rank 5049; sources smith-newton:r1235 |

## What the model contains

Tier **T1**, status `location-only`, 14 elements (road 3, water 2, coastline 1, waterway 1, wall 1, building 6).

Evidence: documented 0, mapped 14, inferred 0, derived 1; heights documented 2, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":586,"medianInside":7,"medianOutside":13.2}
- 9 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/13.966251/74.533136) | 2026-11-17 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-17 |

## Ledger note

type=fort; confidence=medium; rank=5049; sources=1 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (location-only, 14 elements); data/traces/bhatkal-sn1235.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
