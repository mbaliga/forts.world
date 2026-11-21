# Bytów Castle

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bytow-castle-q9386613` |
| Coordinates | 54.16861, 17.49167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.16861/17.49167)) |
| Wikidata | [Q9386613](https://www.wikidata.org/wiki/Q9386613) (CC0) |
| Wikidata class | castle |
| Types | Ordensburg |
| Inception | 1383 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | http://zamekbytowski.pl/ |

## What the model contains

Tier **T1**, status `outline-only`, 341 elements (outline 1, marker 3, road 156, building 171, waterway 1, zone 9).

Evidence: documented 0, mapped 341, inferred 0, derived 0; heights documented 12, inferred 0, unknown 159.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3937262 historic=castle Q9386613 11 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.16861/17.49167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Ordensburg; sitelinks=12; wikidata:Q9386613 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 341 elements); data/traces/bytow-castle-q9386613.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
