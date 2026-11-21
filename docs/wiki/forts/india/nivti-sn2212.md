# Nivti

> India · Maharashtra · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nivti-sn2212` |
| Coordinates | 15.938851, 73.511274 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/15.938851/73.511274)) |
| Programme catalogue | confidence medium, significance rank 7244; sources smith-newton:r2212 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 5 elements (outline 1, coastline 2, road 1, water 1).

Evidence: documented 0, mapped 5, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/439990884 historic=archaeological_site 46 m from ledger point
- origin moved 43 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":934,"medianInside":4.2,"medianOutside":30.6}
- 35 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/15.938851/73.511274) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=medium; rank=7244; sources=1 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 5 elements); data/traces/nivti-sn2212.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
