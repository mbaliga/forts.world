# Pathari

> India · Madhya Pradesh · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pathari-sn1738` |
| Coordinates | 23.934479, 78.218224 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/23.934479/78.218224)) |
| Programme catalogue | confidence medium, significance rank 7383; sources smith-newton:r1738 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 4 elements (outline 1, water 1, road 2).

Evidence: documented 0, mapped 4, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/718500554 historic=fort 28 m from ledger point
- origin moved 36 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/23.934479/78.218224) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=medium; rank=7383; sources=1 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 4 elements); data/traces/pathari-sn1738.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
