# Shahapur

> India · Karnataka · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `shahapur-sn1261` |
| Coordinates | 16.691937, 76.828875 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/16.691937/76.828875)) |
| Programme catalogue | confidence medium, significance rank 7969; sources smith-newton:r1261 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 3 elements (outline 1, wall 1, water 1).

Evidence: documented 0, mapped 3, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/824386809 historic=fort 390 m from ledger point
- origin moved 410 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/16.691937/76.828875) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=medium; rank=7969; sources=1 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 3 elements); data/traces/shahapur-sn1261.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
