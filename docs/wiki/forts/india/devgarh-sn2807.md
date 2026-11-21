# Devgarh

> India · Rajasthan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `devgarh-sn2807` |
| Coordinates | 27.542394, 75.188426 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/27.542394/75.188426)) |
| Programme catalogue | confidence medium, significance rank 5465; sources smith-newton:r2807 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 5 elements (outline 1, road 2, zone 2).

Evidence: documented 0, mapped 5, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1226406540 historic=fort 45 m from ledger point
- origin moved 46 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/27.542394/75.188426) | 2026-11-17 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-17 |

## Ledger note

type=fort; confidence=medium; rank=5465; sources=1 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline-only, 5 elements); data/traces/devgarh-sn2807.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
