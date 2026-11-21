# East Small Keep

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `east-small-keep-q107020436` |
| Coordinates | 34.83956, 134.6941 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.83956/134.6941)) |
| Wikidata | [Q107020436](https://www.wikidata.org/wiki/Q107020436) (CC0) |
| Wikidata class | fortification |
| Types | tenshu |
| Administrative area | Himeji |
| Designations | Important Cultural Property of Japan\|National Treasure of Japan |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | shiro |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 257 elements (outline 1, marker 26, road 158, building 129, zone 15, water 6, retaining-wall 54, wall 39, waterway 1).

Evidence: documented 0, mapped 257, inferred 0, derived 0; heights documented 0, inferred 0, unknown 142.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/23707900 historic=castle Q188754 25 m from ledger point
- pruned to the outline plus 150 m: 429 -> 292 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 69 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 106 mapped (trace size budget); minor lanes are not drawn
- origin moved 26 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.83956/134.6941) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tenshu; sitelinks=1; wikidata:Q107020436 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 257 elements); data/traces/east-small-keep-q107020436.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
