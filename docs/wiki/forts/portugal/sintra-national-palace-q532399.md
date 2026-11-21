# Sintra National Palace

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sintra-national-palace-q532399` |
| Coordinates | 38.79776, -9.39081 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.79776/-9.39081)) |
| Wikidata | [Q532399](https://www.wikidata.org/wiki/Q532399) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|cultural heritage |
| Administrative area | Sintra (Santa Maria e São Miguel, São Martinho e São Pedro de Penaferrim) |
| Inception | 1400 |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 26 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 277 elements (outline 1, marker 5, road 185, building 197, retaining-wall 83, wall 60, water 38, zone 3, waterway 5).

Evidence: documented 0, mapped 277, inferred 0, derived 0; heights documented 1, inferred 0, unknown 163.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/18734112 historic=castle Q532399 4 m from ledger point
- pruned to the outline plus 150 m: 577 -> 412 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 129 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 146 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.79776/-9.39081) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|cultural heritage; sitelinks=26; wikidata:Q532399 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 277 elements); data/traces/sintra-national-palace-q532399.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
