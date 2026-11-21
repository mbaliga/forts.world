# Darbar Gadh

> India · Gujarat · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `darbar-gadh-sn651` |
| Coordinates | 23.254594, 69.668835 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/23.254594/69.668835)) |
| Programme catalogue | confidence medium, significance rank 5399; sources smith-newton:r651 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 84 elements (outline 1, marker 1, road 68, wall 2, water 1, building 10, waterway 1).

Evidence: documented 0, mapped 84, inferred 0, derived 0; heights documented 0, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/839355457 historic=castle 14 m from ledger point
- origin moved 16 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/23.254594/69.668835) | 2026-11-17 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-17 |

## Ledger note

type=fort; confidence=medium; rank=5399; sources=1 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline+walls, 84 elements); data/traces/darbar-gadh-sn651.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
