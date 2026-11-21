# Nagappattinam

> India · Tamil Nadu · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nagappattinam-sn2949` |
| Coordinates | 10.765914, 79.850083 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/10.765914/79.850083)) |
| Programme catalogue | confidence medium, significance rank 7090; sources smith-newton:r2949 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline-only`, 18 elements (outline 1, water 1, road 15, waterway 1).

Evidence: documented 0, mapped 18, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1308941991 historic=monument 1206 m from ledger point
- origin moved 1208 m from the ledger point to the outline centroid
- 150 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/10.765914/79.850083) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=medium; rank=7090; sources=1 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 18 elements); data/traces/nagappattinam-sn2949.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
