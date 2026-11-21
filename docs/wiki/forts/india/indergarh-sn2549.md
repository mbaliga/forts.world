# Indergarh

> India · Rajasthan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `indergarh-sn2549` |
| Coordinates | 25.726089, 76.192742 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/25.726089/76.192742)) |
| Programme catalogue | confidence medium, significance rank 6014; sources smith-newton:r2549 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 8 elements (outline 1, road 2, waterway 1, wall 4).

Evidence: documented 0, mapped 8, inferred 0, derived 0; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1081228020 historic=castle 58 m from ledger point
- origin moved 58 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/25.726089/76.192742) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=medium; rank=6014; sources=1 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 8 elements); data/traces/indergarh-sn2549.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
