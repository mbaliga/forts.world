# Chagres and Fort San Lorenzo

> Panama · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chagres-and-fort-san-lorenzo-q1034179` |
| Coordinates | 9.32259, -80.00242 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/9.32259/-80.00242)) |
| Wikidata | [Q1034179](https://www.wikidata.org/wiki/Q1034179) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Chagres District |
| Inception | 1590 |
| Designations | part of UNESCO World Heritage Site |
| UNESCO WHC id | 135-002 |
| Wikipedia language editions | 18 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 47 elements (outline 1, marker 21, road 9, building 7, cliff 2, waterway 1, wall 1, coastline 4, water 1).

Evidence: documented 0, mapped 47, inferred 0, derived 1; heights documented 0, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2733011 historic=castle Q1034179 24 m from ledger point
- origin moved 28 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":403,"medianInside":3.6,"medianOutside":18.5}
- 214 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/9.32259/-80.00242) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=18; wikidata:Q1034179 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 47 elements); data/traces/chagres-and-fort-san-lorenzo-q1034179.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/panama.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
