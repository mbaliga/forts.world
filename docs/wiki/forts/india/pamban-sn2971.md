# Pamban

> India · Tamil Nadu · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pamban-sn2971` |
| Coordinates | 9.279354, 79.214025 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/9.279354/79.214025)) |
| Programme catalogue | confidence medium, significance rank 7318; sources smith-newton:r2971 |

## What the model contains

Tier **T1**, status `location-only`, 134 elements (road 12, coastline 2, building 393).

Evidence: documented 0, mapped 134, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 393 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/9.279354/79.214025) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=medium; rank=7318; sources=1 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 134 elements); data/traces/pamban-sn2971.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
