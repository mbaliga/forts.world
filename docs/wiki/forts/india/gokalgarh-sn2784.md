# Gokalgarh

> India · Rajasthan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gokalgarh-sn2784` |
| Coordinates | 25.524665, 73.917421 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/25.524665/73.917421)) |
| Programme catalogue | confidence medium, significance rank 5775; sources smith-newton:r2784 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 22 elements (outline 1, road 17, wall 3, building 1).

Evidence: documented 0, mapped 22, inferred 0, derived 0; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/240349142 historic=castle 1059 m from ledger point
- origin moved 1055 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/25.524665/73.917421) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=medium; rank=5775; sources=1 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 22 elements); data/traces/gokalgarh-sn2784.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
