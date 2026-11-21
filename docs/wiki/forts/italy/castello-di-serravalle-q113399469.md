# Castello di Serravalle

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-di-serravalle-q113399469` |
| Coordinates | 46.00067, 12.28877 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.00067/12.28877)) |
| Wikidata | [Q113399469](https://www.wikidata.org/wiki/Q113399469) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Vittorio Veneto |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 260 elements (outline 1, marker 4, road 213, building 227, zone 9, retaining-wall 38, wall 64, waterway 27, cliff 6, water 4).

Evidence: documented 0, mapped 260, inferred 0, derived 0; heights documented 1, inferred 0, unknown 157.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1486535500 historic=castle 13 m from ledger point
- pruned to the outline plus 150 m: 593 -> 489 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 171 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 198 mapped (trace size budget); minor lanes are not drawn
- origin moved 13 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.00067/12.28877) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q113399469 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 260 elements); data/traces/castello-di-serravalle-q113399469.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
