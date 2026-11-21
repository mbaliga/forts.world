# Mathane

> India · Maharashtra · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mathane-sn2285` |
| Coordinates | 19.550064, 72.72416 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/19.550064/72.72416)) |
| Programme catalogue | confidence medium, significance rank 6916; sources smith-newton:r2285 |

## What the model contains

Tier **T1**, status `location-only`, 3 elements (coastline 1, road 1, water 1).

Evidence: documented 0, mapped 3, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":19,"medianInside":1.4,"medianOutside":10.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/19.550064/72.72416) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=medium; rank=6916; sources=1 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 3 elements); data/traces/mathane-sn2285.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
