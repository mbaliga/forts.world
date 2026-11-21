# Xth Pavilion of the Citadel Warsaw

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `xth-pavilion-of-the-citadel-warsaw-q1136879` |
| Coordinates | 52.26667, 21.00028 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.26667/21.00028)) |
| Wikidata | [Q1136879](https://www.wikidata.org/wiki/Q1136879) (CC0) |
| Wikidata class | fort |
| Types | citadel\|architectural heritage monument\|history museum |
| Administrative area | Warsaw |
| Inception | 1828 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 6 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 329 elements (outline 1, marker 30, road 333, waterway 4, building 68, wall 5, zone 145, retaining-wall 8, water 1).

Evidence: documented 0, mapped 329, inferred 0, derived 0; heights documented 59, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/31102888 historic=fort Q206212 425 m from ledger point
- pruned to the outline plus 150 m: 595 -> 581 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 68 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 324 mapped (trace size budget); minor lanes are not drawn
- origin moved 423 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.26667/21.00028) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel\|architectural heritage monument\|history museum; sitelinks=6; wikidata:Q1136879 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 329 elements); data/traces/xth-pavilion-of-the-citadel-warsaw-q1136879.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
