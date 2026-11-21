# Fattegad

> India · Maharashtra · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fattegad-sn2127` |
| Coordinates | 17.812512, 73.089577 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/17.812512/73.089577)) |
| Programme catalogue | confidence medium, significance rank 5621; sources smith-newton:r2127 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 6 elements (outline 1, coastline 1, road 3, water 1).

Evidence: documented 0, mapped 6, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/925343385 historic=fort 373 m from ledger point
- origin moved 375 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1511,"medianInside":2.4,"medianOutside":9.7}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/17.812512/73.089577) | 2026-11-17 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-17 |

## Ledger note

type=fort; confidence=medium; rank=5621; sources=1 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline-only, 6 elements); data/traces/fattegad-sn2127.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
