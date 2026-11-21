# Moti Daman Fort

> India · Dadra and Nagar Haveli and Daman and Diu · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `moti-daman` |
| Coordinates | 20.407901, 72.833408 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/20.407901/72.833408)) |
| Programme catalogue | confidence medium, significance rank 3195; sources catalogue:moti-daman;smith-newton:r3662 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 27 elements (outline 1, coastline 1, road 18, water 1, waterway 1, wall 2, building 3).

Evidence: documented 0, mapped 27, inferred 0, derived 0; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/354322919 historic=building 628 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 623 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/20.407901/72.833408) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

coords from smith-newton (was 20.413,72.833) \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 27 elements); data/traces/moti-daman.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
