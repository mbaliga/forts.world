# Nostitz Palace

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nostitz-palace-q12041087` |
| Coordinates | 50.08519, 14.40585 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.08519/14.40585)) |
| Wikidata | [Q12041087](https://www.wikidata.org/wiki/Q12041087) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Malá Strana |
| Inception | 1660 |
| Designations | national cultural monument of the Czech Republic\|cultural monument of the Czech Republic |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 358 elements (outline 1, marker 40, road 231, waterway 6, zone 10, building 124, wall 28, water 1, retaining-wall 2).

Evidence: documented 0, mapped 358, inferred 0, derived 0; heights documented 107, inferred 0, unknown 43.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/70483 historic=castle Q12041087 23 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 124 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 231 mapped (trace size budget); minor lanes are not drawn
- origin moved 25 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.08519/14.40585) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=5; wikidata:Q12041087 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 358 elements); data/traces/nostitz-palace-q12041087.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
