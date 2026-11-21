# Lascaris War Rooms

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lascaris-war-rooms-q1648164` |
| Coordinates | 35.8945, 14.51105 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.8945/14.51105)) |
| Wikidata | [Q1648164](https://www.wikidata.org/wiki/Q1648164) (CC0) |
| Wikidata class | fortification |
| Types | command center\|bunker |
| Administrative area | Valletta |
| Inception | 1940 |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 327 elements (outline 1, marker 27, road 181, retaining-wall 3, building 72, wall 29, zone 9, coastline 2, water 3).

Evidence: documented 0, mapped 327, inferred 0, derived 1; heights documented 6, inferred 0, unknown 98.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1433725558 historic=fort 125 m from ledger point
- origin moved 127 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":109,"medianInside":0,"medianOutside":33.7}
- 12 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.8945/14.51105) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; command center\|bunker; sitelinks=5; wikidata:Q1648164 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 327 elements); data/traces/lascaris-war-rooms-q1648164.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
