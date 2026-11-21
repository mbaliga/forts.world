# Alamo Mission

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `alamo-mission-q2636724` |
| Coordinates | 29.42583, -98.48611 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/29.42583/-98.48611)) |
| Wikidata | [Q2636724](https://www.wikidata.org/wiki/Q2636724) (CC0) |
| Wikidata class | fort |
| Types | fortification\|mission station |
| Inception | 1718 |
| Designations | part of UNESCO World Heritage Site\|National Register of Historic Places listed place\|Recorded Texas Historic Landmark\|National Register of Historic Places contributing property\|National Historic Landmark |
| UNESCO WHC id | 1466-005 |
| Wikipedia language editions | 29 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 269 elements (outline 1, marker 14, road 301, waterway 7, building 79, wall 9, water 4, zone 5).

Evidence: documented 0, mapped 269, inferred 0, derived 0; heights documented 2, inferred 0, unknown 86.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1563876593 historic=yes Q2636724 47 m from ledger point
- roads capped: kept the 150 longest of 301 mapped (trace size budget); minor lanes are not drawn
- origin moved 53 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/29.42583/-98.48611) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|mission station; sitelinks=29; wikidata:Q2636724 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 269 elements); data/traces/alamo-mission-q2636724.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
