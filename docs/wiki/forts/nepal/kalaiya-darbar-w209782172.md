# Kalaiya Darbar

> Nepal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kalaiya-darbar-w209782172` |
| Coordinates | 27.026366, 84.998957 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/27.026366/84.998957)) |
| Programme catalogue | confidence medium, significance rank 6207; sources osm:w209782172 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 167 elements (outline 1, road 42, waterway 2, zone 1, water 1, building 498).

Evidence: documented 0, mapped 167, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/209782172 historic=castle 8 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 498 mapped (trace size budget); the rest of the town is not drawn
- origin moved 11 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/27.026366/84.998957) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=medium; rank=6207; sources=1 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 167 elements); data/traces/kalaiya-darbar-w209782172.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/nepal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
