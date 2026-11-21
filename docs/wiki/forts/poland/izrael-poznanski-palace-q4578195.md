# Izrael Poznański Palace

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `izrael-poznanski-palace-q4578195` |
| Coordinates | 51.77928, 19.45096 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.77928/19.45096)) |
| Wikidata | [Q4578195](https://www.wikidata.org/wiki/Q4578195) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Bałuty-Centrum |
| Designations | immovable monument in Poland\|Historical monument of Poland |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | Pałac Izraela Poznańskiego w Łodzi wzniesiony w XX wieku |
| OSM `website` | https://muzeum-lodz.pl/ |

## What the model contains

Tier **T1**, status `outline+walls`, 265 elements (outline 1, marker 2, road 459, building 93, wall 41, zone 115, water 4, waterway 1, retaining-wall 3).

Evidence: documented 0, mapped 265, inferred 0, derived 0; heights documented 50, inferred 0, unknown 30.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/37550695 historic=castle Q4578195 19 m from ledger point
- pruned to the outline plus 150 m: 719 -> 482 elements
- roads capped: kept the 80 longest of 297 mapped (trace size budget); minor lanes are not drawn
- origin moved 20 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.77928/19.45096) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=12; wikidata:Q4578195 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 265 elements); data/traces/izrael-poznanski-palace-q4578195.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
