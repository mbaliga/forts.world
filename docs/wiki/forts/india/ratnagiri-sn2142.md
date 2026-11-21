# Ratnagiri

> India · Maharashtra · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ratnagiri-sn2142` |
| Coordinates | 16.996482, 73.2704 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/16.996482/73.2704)) |
| Wikidata | [Q38251357](https://www.wikidata.org/wiki/Q38251357) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Ratnagiri district |
| Wikipedia language editions | 4 |
| Programme catalogue | confidence medium, significance rank 7719; sources smith-newton:r2142 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 11 elements (outline 1, road 5, coastline 1, wall 1, building 2, water 1).

Evidence: documented 0, mapped 11, inferred 0, derived 1; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/40263918 historic=fort Q38251357 12 m from ledger point
- origin moved 14 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1213,"medianInside":4.5,"medianOutside":21.8}
- 29 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/16.996482/73.2704) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=medium; rank=7719; sources=1 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 11 elements); data/traces/ratnagiri-sn2142.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
