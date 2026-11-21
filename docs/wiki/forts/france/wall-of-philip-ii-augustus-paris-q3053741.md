# Wall of Philip II Augustus, Paris

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wall-of-philip-ii-augustus-paris-q3053741` |
| Coordinates | 48.86197, 2.34047 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.86197/2.34047)) |
| Wikidata | [Q3053741](https://www.wikidata.org/wiki/Q3053741) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall\|city walls\|destroyed building or structure |
| Administrative area | Paris |
| Designations | classified historical monument |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |
| OSM `website` | https://www.louvre.fr/ |

## What the model contains

Tier **T1**, status `outline+walls`, 265 elements (outline 1, marker 77, road 1395, building 290, zone 24, wall 21, water 2, retaining-wall 35, waterway 11).

Evidence: documented 0, mapped 265, inferred 0, derived 0; heights documented 52, inferred 0, unknown 55.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3262297 historic=castle Q1075988 316 m from ledger point
- pruned to the outline plus 150 m: 1856 -> 1238 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 140 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 973 mapped (trace size budget); minor lanes are not drawn
- origin moved 394 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.86197/2.34047) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall\|city walls\|destroyed building or structure; sitelinks=11; wikidata:Q3053741 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 265 elements); data/traces/wall-of-philip-ii-augustus-paris-q3053741.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
