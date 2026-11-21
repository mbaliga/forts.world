# Panaji

> India · Goa · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `panaji-sn580` |
| Coordinates | 15.500778, 73.830006 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/15.500778/73.830006)) |
| Programme catalogue | confidence medium, significance rank 7322; sources smith-newton:r580 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 166 elements (outline 1, marker 1, road 104, water 2, waterway 2, building 50, zone 1, retaining-wall 4, wall 1).

Evidence: documented 0, mapped 166, inferred 0, derived 0; heights documented 7, inferred 0, unknown 48.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/430463948 historic=yes 412 m from ledger point
- origin moved 410 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/15.500778/73.830006) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=medium; rank=7322; sources=1 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 166 elements); data/traces/panaji-sn580.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
