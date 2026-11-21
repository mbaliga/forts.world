# Castra of Lorch

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castra-of-lorch-q1433981` |
| Coordinates | 48.7981, 9.68855 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.7981/9.68855)) |
| Wikidata | [Q1433981](https://www.wikidata.org/wiki/Q1433981) (CC0) |
| Wikidata class | fortification |
| Types | castrum\|archaeological site\|ancient Roman structure |
| Administrative area | Germania Superior |
| Designations | part of UNESCO World Heritage Site\|Kulturdenkmal |
| UNESCO WHC id | 430ter-368 |
| Wikipedia language editions | 4 |
| OSM `historic` | archaeological_site |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 262 elements (outline 1, marker 1, road 127, building 442, waterway 8, wall 5).

Evidence: documented 0, mapped 262, inferred 0, derived 0; heights documented 0, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/572831032 historic=archaeological_site Q1433981 23 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 442 mapped (trace size budget); the rest of the town is not drawn
- origin moved 6 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.7981/9.68855) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum\|archaeological site\|ancient Roman structure; sitelinks=4; wikidata:Q1433981 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 262 elements); data/traces/castra-of-lorch-q1433981.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
