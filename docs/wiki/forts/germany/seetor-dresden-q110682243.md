# Seetor, Dresden

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `seetor-dresden-q110682243` |
| Coordinates | 51.04755, 13.73675 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.04755/13.73675)) |
| Wikidata | [Q110682243](https://www.wikidata.org/wiki/Q110682243) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|destroyed building or structure |
| Administrative area | Dresden |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 271 elements (outline 1, marker 17, road 336, building 27, zone 41, wall 24, water 6, retaining-wall 5).

Evidence: documented 0, mapped 271, inferred 0, derived 0; heights documented 24, inferred 0, unknown 32.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5671 historic=castle Q267390 492 m from ledger point
- roads capped: kept the 150 longest of 336 mapped (trace size budget); minor lanes are not drawn
- origin moved 498 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.04755/13.73675) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|destroyed building or structure; sitelinks=1; wikidata:Q110682243 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 271 elements); data/traces/seetor-dresden-q110682243.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
