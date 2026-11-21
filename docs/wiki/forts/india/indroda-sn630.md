# Indroda

> India · Gujarat · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `indroda-sn630` |
| Coordinates | 23.199029, 72.65922 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/23.199029/72.65922)) |
| Programme catalogue | confidence medium, significance rank 6020; sources smith-newton:r630 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 14 elements (outline 1, water 1, road 8, waterway 1, zone 2, wall 1).

Evidence: documented 0, mapped 14, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/997954236 historic=ruins 58 m from ledger point
- origin moved 59 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/23.199029/72.65922) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=medium; rank=6020; sources=1 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 14 elements); data/traces/indroda-sn630.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
