# Daudnagar

> India · Bihar · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `daudnagar-sn450` |
| Coordinates | 25.03637, 84.393534 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/25.03637/84.393534)) |
| Programme catalogue | confidence medium, significance rank 5415; sources smith-newton:r450 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 38 elements (outline 1, road 29, wall 3, building 5).

Evidence: documented 0, mapped 38, inferred 0, derived 0; heights documented 0, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1428752624 historic=fort 8 m from ledger point
- origin moved 7 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/25.03637/84.393534) | 2026-11-17 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-17 |

## Ledger note

type=fort; confidence=medium; rank=5415; sources=1 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline+walls, 38 elements); data/traces/daudnagar-sn450.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
