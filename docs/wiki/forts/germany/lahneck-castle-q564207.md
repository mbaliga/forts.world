# Lahneck Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lahneck-castle-q564207` |
| Coordinates | 50.3063, 7.61246 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.3063/7.61246)) |
| Wikidata | [Q564207](https://www.wikidata.org/wiki/Q564207) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum |
| Administrative area | Oberlahnstein |
| Inception | 1226 |
| Designations | part of UNESCO World Heritage Site\|Kulturdenkmal |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 4 |
| OSM `website` | http://www.burg-lahneck.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 152 elements (outline 1, marker 1, road 77, water 2, building 40, waterway 8, wall 9, zone 13, retaining-wall 1).

Evidence: documented 0, mapped 152, inferred 0, derived 0; heights documented 2, inferred 0, unknown 48.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/625618169 historic=castle Q564207 38 m from ledger point
- origin moved 39 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.3063/7.61246) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum; sitelinks=10; wikidata:Q564207 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 152 elements); data/traces/lahneck-castle-q564207.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
