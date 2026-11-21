# Calicut

> India · Kerala · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `calicut-sn1281` |
| Coordinates | 11.259447, 75.784439 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/11.259447/75.784439)) |
| Programme catalogue | confidence medium, significance rank 5196; sources smith-newton:r1281 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline-only`, 64 elements (outline 1, road 37, water 1, building 22, zone 3).

Evidence: documented 0, mapped 64, inferred 0, derived 0; heights documented 1, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1335584339 historic=building 775 m from ledger point
- origin moved 775 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/11.259447/75.784439) | 2026-11-17 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-17 |

## Ledger note

type=fort; confidence=medium; rank=5196; sources=1 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline-only, 64 elements); data/traces/calicut-sn1281.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
