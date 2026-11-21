# Umerkot

> Pakistan · Sindh · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `umerkot` |
| Coordinates | 25.363612, 69.733946 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/25.363612/69.733946)) |
| Programme catalogue | confidence medium, significance rank 3209; sources catalogue:umerkot;smith-newton:r23 |
| OSM `historic` | castle_wall |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 58 elements (outline 1, marker 1, road 44, wall 6, building 5).

Evidence: documented 0, mapped 58, inferred 0, derived 0; heights documented 6, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20971284 historic=castle_wall 86 m from ledger point
- origin moved 56 m from the ledger point to the centre of the mapped site
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/25.363612/69.733946) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

coords from smith-newton (was 25.36,69.74) \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 33 elements); data/traces/umerkot.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned historic=castle_wall (OSM relation 20971284, the fort's wall ring); auto-T1 rebuilt (outline+walls, 58 elements). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/pakistan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
