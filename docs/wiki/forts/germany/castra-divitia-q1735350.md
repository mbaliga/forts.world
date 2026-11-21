# Castra Divitia

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castra-divitia-q1735350` |
| Coordinates | 50.93724, 6.9736 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.93724/6.9736)) |
| Wikidata | [Q1735350](https://www.wikidata.org/wiki/Q1735350) (CC0) |
| Wikidata class | fortification |
| Types | archaeological site\|castrum\|ancient Roman structure |
| Administrative area | Cologne |
| Designations | part of UNESCO World Heritage Site |
| UNESCO WHC id | 1631-077 |
| Wikipedia language editions | 5 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 387 elements (outline 1, marker 2, road 233, building 99, zone 21, wall 13, retaining-wall 16, water 1, waterway 1).

Evidence: documented 0, mapped 387, inferred 0, derived 0; heights documented 94, inferred 0, unknown 34.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19428405 historic=archaeological_site 230 m from ledger point
- origin moved 227 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.93724/6.9736) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological site\|castrum\|ancient Roman structure; sitelinks=5; wikidata:Q1735350 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 387 elements); data/traces/castra-divitia-q1735350.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
