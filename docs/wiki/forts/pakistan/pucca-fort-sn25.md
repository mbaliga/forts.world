# Pucca Fort

> Pakistan · Sindh · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pucca-fort-sn25` |
| Coordinates | 25.384713, 68.372459 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/25.384713/68.372459)) |
| Programme catalogue | confidence medium, significance rank 7486; sources smith-newton:r25 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 190 elements (outline 1, marker 1, road 150, building 35, wall 2, cliff 1).

Evidence: documented 0, mapped 190, inferred 0, derived 0; heights documented 2, inferred 0, unknown 35.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1028606760 historic=fort 90 m from ledger point
- origin moved 95 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/25.384713/68.372459) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=medium; rank=7486; sources=1 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 190 elements); data/traces/pucca-fort-sn25.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/pakistan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
