# Gadwal

> India · Telangana · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gadwal-sn3030` |
| Coordinates | 16.236436, 77.800426 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/16.236436/77.800426)) |
| Programme catalogue | confidence medium, significance rank 5653; sources smith-newton:r3030 |

## What the model contains

Tier **T1**, status `location-only`, 48 elements (road 22, waterway 1, building 381).

Evidence: documented 0, mapped 48, inferred 0, derived 0; heights documented 0, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 25 nearest the outline centre of 381 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/16.236436/77.800426) | 2026-11-17 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-17 |

## Ledger note

type=fort; confidence=medium; rank=5653; sources=1 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (location-only, 404 elements); data/traces/gadwal-sn3030.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
