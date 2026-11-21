# Bhaunari

> India · Uttar Pradesh · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bhaunari-sn3222` |
| Coordinates | 25.215393, 80.920284 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/25.215393/80.920284)) |
| Programme catalogue | confidence medium, significance rank 5050; sources smith-newton:r3222 |

## What the model contains

Tier **T1**, status `location-only`, 33 elements (road 8, building 425).

Evidence: documented 0, mapped 33, inferred 0, derived 0; heights documented 0, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 25 nearest the outline centre of 425 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/25.215393/80.920284) | 2026-11-17 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-17 |

## Ledger note

type=fort; confidence=medium; rank=5050; sources=1 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (location-only, 433 elements); data/traces/bhaunari-sn3222.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
