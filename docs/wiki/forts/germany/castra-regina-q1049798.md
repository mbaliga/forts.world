# Castra Regina

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castra-regina-q1049798` |
| Coordinates | 49.02014, 12.09861 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.02014/12.09861)) |
| Wikidata | [Q1049798](https://www.wikidata.org/wiki/Q1049798) (CC0) |
| Wikidata class | fortification |
| Types | castrum\|archaeological site\|ancient Roman structure |
| Administrative area | Raetia |
| Inception | 0080 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 347 elements (outline 1, marker 48, road 164, waterway 4, building 305, wall 20, zone 2, water 2).

Evidence: documented 0, mapped 347, inferred 0, derived 0; heights documented 51, inferred 0, unknown 89.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1450089 historic=castle Q18560073 456 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 305 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 164 mapped (trace size budget); minor lanes are not drawn
- origin moved 457 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.02014/12.09861) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum\|archaeological site\|ancient Roman structure; sitelinks=7; wikidata:Q1049798 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 347 elements); data/traces/castra-regina-q1049798.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
