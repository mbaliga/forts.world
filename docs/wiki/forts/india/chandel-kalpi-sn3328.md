# Chandel / Kalpi

> India · Uttar Pradesh · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chandel-kalpi-sn3328` |
| Coordinates | 26.13103, 79.747069 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/26.13103/79.747069)) |
| Programme catalogue | confidence medium, significance rank 5241; sources smith-newton:r3328 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 14 elements (outline 1, water 1, waterway 1, road 11).

Evidence: documented 0, mapped 14, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/666188124 historic=ruins 230 m from ledger point
- origin moved 234 m from the ledger point to the outline centroid
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/26.13103/79.747069) | 2026-11-17 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-17 |

## Ledger note

type=fort; confidence=medium; rank=5241; sources=1 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline-only, 14 elements); data/traces/chandel-kalpi-sn3328.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
