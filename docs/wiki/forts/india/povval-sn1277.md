# Povval

> India · Kerala · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `povval-sn1277` |
| Coordinates | 12.512012, 75.077228 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/12.512012/75.077228)) |
| Programme catalogue | confidence medium, significance rank 7473; sources smith-newton:r1277 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 46 elements (outline 1, road 13, building 32).

Evidence: documented 0, mapped 46, inferred 0, derived 0; heights documented 0, inferred 0, unknown 32.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/851779812 historic=fort 19 m from ledger point
- origin moved 20 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/12.512012/75.077228) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=medium; rank=7473; sources=1 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 46 elements); data/traces/povval-sn1277.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
