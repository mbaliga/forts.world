# Nagoa

> India · Dadra and Nagar Haveli and Daman and Diu · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nagoa-sn3663` |
| Coordinates | 20.70776, 70.915847 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/20.70776/70.915847)) |
| Programme catalogue | confidence medium, significance rank 7102; sources smith-newton:r3663 |

## What the model contains

Tier **T1**, status `location-only`, 36 elements (coastline 1, road 8, building 25, water 2).

Evidence: documented 0, mapped 36, inferred 0, derived 1; heights documented 0, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":496,"medianInside":2.8,"medianOutside":9.6}
- 8 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/20.70776/70.915847) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=medium; rank=7102; sources=1 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 36 elements); data/traces/nagoa-sn3663.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
