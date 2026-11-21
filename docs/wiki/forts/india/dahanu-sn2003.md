# Dahanu

> India · Maharashtra · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dahanu-sn2003` |
| Coordinates | 19.972585, 72.720505 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/19.972585/72.720505)) |
| Programme catalogue | confidence medium, significance rank 5374; sources smith-newton:r2003 |

## What the model contains

Tier **T1**, status `location-only`, 64 elements (marker 1, coastline 1, road 22, waterway 1, building 39).

Evidence: documented 0, mapped 64, inferred 0, derived 0; heights documented 0, inferred 0, unknown 39.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/19.972585/72.720505) | 2026-11-17 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-17 |

## Ledger note

type=fort; confidence=medium; rank=5374; sources=1 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (location-only, 64 elements); data/traces/dahanu-sn2003.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
