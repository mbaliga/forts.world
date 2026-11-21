# Amingad

> India · Karnataka · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `amingad-sn895` |
| Coordinates | 16.060106, 75.950669 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/16.060106/75.950669)) |
| Programme catalogue | confidence medium, significance rank 4622; sources smith-newton:r895 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 10 elements (outline 1, road 3, wall 4, zone 2).

Evidence: documented 0, mapped 10, inferred 0, derived 0; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/505839868 historic=archaeological_site 63 m from ledger point
- origin moved 61 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/16.060106/75.950669) | 2026-11-16 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-16 |

## Ledger note

type=fort; confidence=medium; rank=4622; sources=1 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline+walls, 10 elements); data/traces/amingad-sn895.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
