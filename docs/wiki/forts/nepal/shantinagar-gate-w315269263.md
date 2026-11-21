# Shantinagar Gate

> Nepal · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `shantinagar-gate-w315269263` |
| Coordinates | 27.687037, 85.342684 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/27.687037/85.342684)) |
| Programme catalogue | confidence medium, significance rank 8001; sources osm:w315269263 |

## What the model contains

Tier **T1**, status `location-only`, 196 elements (road 72, wall 1, building 486, zone 1, water 1, waterway 1).

Evidence: documented 0, mapped 196, inferred 0, derived 0; heights documented 6, inferred 0, unknown 115.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 486 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/27.687037/85.342684) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=medium; rank=8001; sources=1 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 196 elements); data/traces/shantinagar-gate-w315269263.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/nepal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
