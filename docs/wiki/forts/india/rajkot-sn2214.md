# Rajkot

> India · Maharashtra · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rajkot-sn2214` |
| Coordinates | 16.054165, 73.458136 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/16.054165/73.458136)) |
| Programme catalogue | confidence medium, significance rank 7614; sources smith-newton:r2214 |

## What the model contains

Tier **T1**, status `location-only`, 4 elements (coastline 2, water 2).

Evidence: documented 0, mapped 4, inferred 0, derived 2; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":65,"medianInside":2.8,"medianOutside":3}
- sea-1: DEM check ok {"cells":899,"medianInside":0.9,"medianOutside":6.2}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/16.054165/73.458136) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=medium; rank=7614; sources=1 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 4 elements); data/traces/rajkot-sn2214.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
