# Terezín Fortress

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `terezin-fortress-q64676248` |
| Coordinates | 50.51083, 14.15111 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.51083/14.15111)) |
| Wikidata | [Q64676248](https://www.wikidata.org/wiki/Q64676248) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Terezín |
| Designations | Tentative World Heritage Site\|part of national cultural heritage site in the Czech Republic |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 248 elements (outline 1, marker 12, road 239, zone 4, water 4, building 387, wall 78, waterway 32, retaining-wall 9).

Evidence: documented 0, mapped 248, inferred 0, derived 0; heights documented 28, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13991951 historic=castle Q64676248 131 m from ledger point
- pruned to the outline plus 150 m: 766 -> 734 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 387 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 239 mapped (trace size budget); minor lanes are not drawn
- origin moved 123 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.51083/14.15111) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=1; wikidata:Q64676248 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 248 elements); data/traces/terezin-fortress-q64676248.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
