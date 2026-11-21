# Fort Verdala

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-verdala-q20203047` |
| Coordinates | 35.88086, 14.52403 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.88086/14.52403)) |
| Wikidata | [Q20203047](https://www.wikidata.org/wiki/Q20203047) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Cospicua |
| Inception | 1852 |
| Designations | Grade 1 |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 313 elements (outline 1, marker 3, road 219, wall 214, building 599, retaining-wall 2, water 1, coastline 1, zone 7).

Evidence: documented 0, mapped 313, inferred 0, derived 0; heights documented 60, inferred 0, unknown 164.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/548755011 historic=fort 20 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- pruned to the outline plus 150 m: 1047 -> 719 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 400 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 146 mapped (trace size budget); minor lanes are not drawn
- origin moved 22 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.88086/14.52403) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q20203047 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 313 elements); data/traces/fort-verdala-q20203047.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
