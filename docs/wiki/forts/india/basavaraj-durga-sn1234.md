# Basavaraj Durga

> India · Karnataka · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `basavaraj-durga-sn1234` |
| Coordinates | 14.313997, 74.402312 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/14.313997/74.402312)) |
| Programme catalogue | confidence medium, significance rank 4920; sources smith-newton:r1234 |

## What the model contains

Tier **T1**, status `location-only`, 3 elements (coastline 1, water 2).

Evidence: documented 0, mapped 3, inferred 0, derived 2; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":157,"medianInside":17.5,"medianOutside":32.5}
- sea-1: DEM check failed {"cells":277,"medianInside":10.7,"medianOutside":35.2}
- 44 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/14.313997/74.402312) | 2026-11-16 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-16 |

## Ledger note

type=fort; confidence=medium; rank=4920; sources=1 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (location-only, 3 elements); data/traces/basavaraj-durga-sn1234.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
