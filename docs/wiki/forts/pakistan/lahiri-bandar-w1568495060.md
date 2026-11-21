# Lahiri Bandar

> Pakistan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lahiri-bandar-w1568495060` |
| Coordinates | 24.629787, 67.37079 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/24.629787/67.37079)) |
| Programme catalogue | confidence medium, significance rank 6646; sources osm:w1568495060;osm:r21669303 |
| OSM `historic` | fort |
| OSM `ruins` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 7 elements (outline 1, coastline 2, wall 2, zone 1, water 1).

Evidence: documented 0, mapped 7, inferred 0, derived 1; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/21669303 historic=fort 100 m from ledger point
- origin moved 100 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":135,"medianInside":0.6,"medianOutside":2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/24.629787/67.37079) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=medium; rank=6646; sources=2 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 7 elements); data/traces/lahiri-bandar-w1568495060.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/pakistan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
