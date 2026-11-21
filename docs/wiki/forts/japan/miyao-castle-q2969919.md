# Miyao Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `miyao-castle-q2969919` |
| Coordinates | 34.30055, 132.32242 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.30055/132.32242)) |
| Wikidata | [Q2969919](https://www.wikidata.org/wiki/Q2969919) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Hatsukaichi |
| Wikipedia language editions | 6 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 273 elements (outline 1, marker 18, road 106, waterway 4, coastline 2, building 389, wall 7, retaining-wall 8, water 3, zone 4).

Evidence: documented 0, mapped 273, inferred 0, derived 2; heights documented 8, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/519764171 historic=building 343 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 389 mapped (trace size budget); the rest of the town is not drawn
- origin moved 343 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":48,"medianInside":2.6,"medianOutside":12.3}
- sea-1: DEM check ok {"cells":28,"medianInside":6,"medianOutside":11.8}
- 31 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.30055/132.32242) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=6; wikidata:Q2969919 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 273 elements); data/traces/miyao-castle-q2969919.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
