# Vijaygad

> India · Maharashtra · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vijaygad-sn2146` |
| Coordinates | 17.303828, 73.240954 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/17.303828/73.240954)) |
| Programme catalogue | confidence medium, significance rank 8578; sources smith-newton:r2146 |

## What the model contains

Tier **T1**, status `location-only`, 4 elements (marker 1, coastline 1, road 1, water 1).

Evidence: documented 0, mapped 4, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":276,"medianInside":10.2,"medianOutside":57.3}
- 36 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/17.303828/73.240954) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=medium; rank=8578; sources=1 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 4 elements); data/traces/vijaygad-sn2146.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
