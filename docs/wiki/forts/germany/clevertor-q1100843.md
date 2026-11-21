# Clevertor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `clevertor-q1100843` |
| Coordinates | 52.3744, 9.7289 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.3744/9.7289)) |
| Wikidata | [Q1100843](https://www.wikidata.org/wiki/Q1100843) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|destroyed building or structure |
| Administrative area | Hanover |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 336 elements (outline 1, marker 29, road 324, building 158, waterway 8, zone 11, water 4, retaining-wall 4, wall 9).

Evidence: documented 0, mapped 336, inferred 0, derived 0; heights documented 95, inferred 0, unknown 38.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1170793 historic=castle Q319994 510 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 158 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 324 mapped (trace size budget); minor lanes are not drawn
- origin moved 509 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.3744/9.7289) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|destroyed building or structure; sitelinks=2; wikidata:Q1100843 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 336 elements); data/traces/clevertor-q1100843.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
