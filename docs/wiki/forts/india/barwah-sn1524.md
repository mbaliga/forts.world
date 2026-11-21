# Barwah

> India · Madhya Pradesh · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `barwah-sn1524` |
| Coordinates | 22.257104, 76.040861 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/22.257104/76.040861)) |
| Programme catalogue | confidence medium, significance rank 4913; sources smith-newton:r1524 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 24 elements (outline 1, waterway 2, water 1, road 20).

Evidence: documented 0, mapped 24, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/652076619 historic=fort 28 m from ledger point
- origin moved 41 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/22.257104/76.040861) | 2026-11-16 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-16 |

## Ledger note

type=fort; confidence=medium; rank=4913; sources=1 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline-only, 24 elements); data/traces/barwah-sn1524.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
