# Nirmal

> India · Telangana · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nirmal-sn3057` |
| Coordinates | 19.102634, 78.345698 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/19.102634/78.345698)) |
| Programme catalogue | confidence medium, significance rank 7238; sources smith-newton:r3057 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 147 elements (outline 1, road 25, building 897, zone 1).

Evidence: documented 0, mapped 147, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1225517857 historic=fort 36 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 897 mapped (trace size budget); the rest of the town is not drawn
- origin moved 38 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/19.102634/78.345698) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=medium; rank=7238; sources=1 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 147 elements); data/traces/nirmal-sn3057.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
