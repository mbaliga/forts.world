# Catherine Palace

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `catherine-palace-q2854543` |
| Coordinates | 59.71606, 30.39529 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.71606/30.39529)) |
| Wikidata | [Q2854543](https://www.wikidata.org/wiki/Q2854543) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Pushkin |
| Inception | 1717 |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 57 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | Дворец неоднократно перестраивался в течении XVII века. Современный вид получил после перестройки выполненной Б. Растрелли в 1750-х годах |
| OSM `website` | https://tzar.ru/museums/palaces/c_atherine |

## What the model contains

Tier **T1**, status `outline+walls`, 381 elements (outline 1, marker 43, retaining-wall 9, road 335, building 45, waterway 56, zone 68, wall 9).

Evidence: documented 0, mapped 381, inferred 0, derived 0; heights documented 54, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/17546726 historic=castle Q2854543 20 m from ledger point
- roads capped: kept the 150 longest of 335 mapped (trace size budget); minor lanes are not drawn
- origin moved 20 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.71606/30.39529) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=57; wikidata:Q2854543 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 381 elements); data/traces/catherine-palace-q2854543.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
