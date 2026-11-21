# Tour de Nesle

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-de-nesle-q1937108` |
| Coordinates | 48.8575, 2.33722 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.8575/2.33722)) |
| Wikidata | [Q1937108](https://www.wikidata.org/wiki/Q1937108) (CC0) |
| Wikidata class | fort |
| Types | fortified tower\|destroyed building or structure |
| Administrative area | Paris |
| Inception | 1200 |
| Wikipedia language editions | 14 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |
| OSM `website` | https://www.louvre.fr/ |

## What the model contains

Tier **T1**, status `outline+walls`, 266 elements (outline 1, marker 88, road 1219, building 301, zone 23, wall 32, water 1, retaining-wall 40, waterway 13).

Evidence: documented 0, mapped 266, inferred 0, derived 0; heights documented 55, inferred 0, unknown 54.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3262297 historic=castle Q1075988 397 m from ledger point
- pruned to the outline plus 150 m: 1718 -> 1106 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 91 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 889 mapped (trace size budget); minor lanes are not drawn
- origin moved 435 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.8575/2.33722) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower\|destroyed building or structure; sitelinks=14; wikidata:Q1937108 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 266 elements); data/traces/tour-de-nesle-q1937108.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
