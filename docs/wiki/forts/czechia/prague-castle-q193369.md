# Prague Castle

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `prague-castle-q193369` |
| Coordinates | 50.09, 14.4 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.09/14.4)) |
| Wikidata | [Q193369](https://www.wikidata.org/wiki/Q193369) (CC0) |
| Wikidata class | castle |
| Types | castle\|château\|hillfort |
| Administrative area | Hradčany |
| Inception | 0900 |
| Designations | part of national cultural heritage site in the Czech Republic\|national cultural monument of the Czech Republic |
| Wikipedia language editions | 66 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 359 elements (outline 1, marker 32, road 226, building 129, wall 35, water 4, retaining-wall 15, zone 2).

Evidence: documented 0, mapped 359, inferred 0, derived 0; heights documented 96, inferred 0, unknown 74.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2432481 historic=castle Q12043618 114 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 129 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 226 mapped (trace size budget); minor lanes are not drawn
- origin moved 113 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.09/14.4) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château\|hillfort; sitelinks=66; wikidata:Q193369 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 359 elements); data/traces/prague-castle-q193369.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
