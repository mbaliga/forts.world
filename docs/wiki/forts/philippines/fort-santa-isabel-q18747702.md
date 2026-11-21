# Fort Santa Isabel

> Philippines · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-santa-isabel-q18747702` |
| Coordinates | 10.82828, 119.51777 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/10.82828/119.51777)) |
| Wikidata | [Q18747702](https://www.wikidata.org/wiki/Q18747702) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Taytay |
| Inception | 1667 |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 50 elements (outline 1, marker 1, road 15, water 4, building 24, wall 1, coastline 4).

Evidence: documented 0, mapped 50, inferred 0, derived 2; heights documented 0, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/204627267 historic=fort 7 m from ledger point
- origin moved 7 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":10,"medianInside":8.2,"medianOutside":0.6}
- sea-1: DEM check ok {"cells":177,"medianInside":-0.1,"medianOutside":1.2}
- 30 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/10.82828/119.51777) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q18747702 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 50 elements); data/traces/fort-santa-isabel-q18747702.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/philippines.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
