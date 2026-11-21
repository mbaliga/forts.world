# Fort St. Catherine

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-st-catherine-q8564779` |
| Coordinates | 32.3906, -64.6745 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/32.3906/-64.6745)) |
| Wikidata | [Q8564779](https://www.wikidata.org/wiki/Q8564779) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Bermuda |
| Designations | part of UNESCO World Heritage Site |
| UNESCO WHC id | 983-016 |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 41 elements (outline 1, marker 1, road 17, building 5, retaining-wall 1, wall 10, coastline 1, zone 4, water 1).

Evidence: documented 0, mapped 41, inferred 0, derived 1; heights documented 0, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/331550913 historic=fort 420 m from ledger point
- origin moved 423 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":76,"medianInside":5.3,"medianOutside":25.4}
- 5 DEM cells below -3 m (bathymetry) clamped to -3 m
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/32.3906/-64.6745) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q8564779 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 41 elements); data/traces/fort-st-catherine-q8564779.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
