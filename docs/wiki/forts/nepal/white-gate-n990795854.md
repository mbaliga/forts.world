# White Gate

> Nepal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `white-gate-n990795854` |
| Coordinates | 27.672359, 85.427328 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/27.672359/85.427328)) |
| Programme catalogue | confidence medium, significance rank 8627; sources osm:n990795854 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 173 elements (outline 1, marker 4, waterway 1, road 45, building 1140, water 2).

Evidence: documented 0, mapped 173, inferred 0, derived 0; heights documented 2, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1160157268 historic=yes 159 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 1140 mapped (trace size budget); the rest of the town is not drawn
- origin moved 162 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/27.672359/85.427328) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=medium; rank=8627; sources=1 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 173 elements); data/traces/white-gate-n990795854.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/nepal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
