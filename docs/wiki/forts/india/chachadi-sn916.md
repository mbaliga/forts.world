# Chachadi

> India · Karnataka · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chachadi-sn916` |
| Coordinates | 15.92256, 74.858463 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/15.92256/74.858463)) |
| Programme catalogue | confidence medium, significance rank 5205; sources smith-newton:r916 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 40 elements (outline 1, road 31, building 8).

Evidence: documented 0, mapped 40, inferred 0, derived 0; heights documented 0, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1019349505 historic=fort 33 m from ledger point
- origin moved 43 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/15.92256/74.858463) | 2026-11-17 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-17 |

## Ledger note

type=fort; confidence=medium; rank=5205; sources=1 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline-only, 40 elements); data/traces/chachadi-sn916.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
