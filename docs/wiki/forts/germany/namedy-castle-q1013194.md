# Namedy Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `namedy-castle-q1013194` |
| Coordinates | 50.4559, 7.35666 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.4559/7.35666)) |
| Wikidata | [Q1013194](https://www.wikidata.org/wiki/Q1013194) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Andernach |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://www.burg-namedy.com |

## What the model contains

Tier **T1**, status `outline+walls`, 145 elements (outline 1, road 30, waterway 8, building 90, zone 3, wall 12, water 1).

Evidence: documented 0, mapped 145, inferred 0, derived 0; heights documented 0, inferred 0, unknown 102.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/169148331 historic=castle Q1013194 13 m from ledger point
- origin moved 13 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.4559/7.35666) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=6; wikidata:Q1013194 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 145 elements); data/traces/namedy-castle-q1013194.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
