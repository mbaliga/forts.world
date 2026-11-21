# Palácio da Bolsa

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-da-bolsa-q1371109` |
| Coordinates | 41.14132, -8.61586 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.14132/-8.61586)) |
| Wikidata | [Q1371109](https://www.wikidata.org/wiki/Q1371109) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|cultural heritage\|former town hall |
| Administrative area | Cedofeita, Santo Ildefonso, Sé, Miragaia, São Nicolau e Vitória |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 21 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 386 elements (outline 1, marker 1, road 304, building 464, wall 57, retaining-wall 31, zone 22, water 1, waterway 3).

Evidence: documented 0, mapped 386, inferred 0, derived 0; heights documented 55, inferred 0, unknown 153.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5424595 historic=castle Q1371109 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 464 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 304 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the outline centroid
- 51 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.14132/-8.61586) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|cultural heritage\|former town hall; sitelinks=21; wikidata:Q1371109 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 386 elements); data/traces/palacio-da-bolsa-q1371109.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
