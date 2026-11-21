# Valvoi

> India · Goa · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `valvoi-sn591` |
| Coordinates | 15.497405, 74.012524 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/15.497405/74.012524)) |
| Programme catalogue | confidence medium, significance rank 8540; sources smith-newton:r591 |

## What the model contains

Tier **T1**, status `location-only`, 7 elements (waterway 1, water 1, road 4, zone 1).

Evidence: documented 0, mapped 7, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- 20 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/15.497405/74.012524) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=medium; rank=8540; sources=1 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 7 elements); data/traces/valvoi-sn591.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
