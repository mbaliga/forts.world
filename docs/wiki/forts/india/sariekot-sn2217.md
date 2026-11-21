# Sariekot

> India · Maharashtra · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sariekot-sn2217` |
| Coordinates | 16.085441, 73.462237 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/16.085441/73.462237)) |
| Programme catalogue | confidence medium, significance rank 7902; sources smith-newton:r2217 |

## What the model contains

Tier **T1**, status `location-only`, 26 elements (coastline 2, building 16, road 7, water 1).

Evidence: documented 0, mapped 26, inferred 0, derived 1; heights documented 0, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":359,"medianInside":2.5,"medianOutside":15.2}
- 5 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/16.085441/73.462237) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=medium; rank=7902; sources=1 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 26 elements); data/traces/sariekot-sn2217.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
