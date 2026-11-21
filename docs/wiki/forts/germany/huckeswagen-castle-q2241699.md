# Hückeswagen Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `huckeswagen-castle-q2241699` |
| Coordinates | 51.1513, 7.34111 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.1513/7.34111)) |
| Wikidata | [Q2241699](https://www.wikidata.org/wiki/Q2241699) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Hückeswagen |
| Inception | 1198 |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 8 |

## What the model contains

Tier **T1**, status `outline+walls`, 297 elements (outline 1, marker 5, road 235, waterway 6, building 197, wall 10, zone 3, water 2).

Evidence: documented 0, mapped 297, inferred 0, derived 0; heights documented 15, inferred 0, unknown 115.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/35031976 historic=castle Q2241699 55 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 197 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 235 mapped (trace size budget); minor lanes are not drawn
- origin moved 53 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.1513/7.34111) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q2241699 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 297 elements); data/traces/huckeswagen-castle-q2241699.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
