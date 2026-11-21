# Royal Walls

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `royal-walls-q4997137` |
| Coordinates | 35.88861, -5.31889 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.88861/-5.31889)) |
| Wikidata | [Q4997137](https://www.wikidata.org/wiki/Q4997137) (CC0) |
| Wikidata class | fort |
| Types | fortification\|Historic Ensemble\|city walls |
| Administrative area | Ceuta |
| Designations | Heritage of Portuguese Influence\|bien de interés cultural |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 284 elements (outline 1, marker 9, road 138, coastline 4, building 84, wall 15, zone 31, water 2).

Evidence: documented 0, mapped 284, inferred 0, derived 2; heights documented 0, inferred 0, unknown 99.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/819502646 historic=castle Q4997137 51 m from ledger point
- origin moved 46 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":795,"medianInside":6.8,"medianOutside":9.2}
- sea-1: DEM check failed {"cells":1648,"medianInside":8.7,"medianOutside":7.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.88861/-5.31889) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|Historic Ensemble\|city walls; sitelinks=12; wikidata:Q4997137 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 284 elements); data/traces/royal-walls-q4997137.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
