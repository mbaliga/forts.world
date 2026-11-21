# Hocheppan Castle

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hocheppan-castle-q1012369` |
| Coordinates | 46.49265, 11.24222 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.49265/11.24222)) |
| Wikidata | [Q1012369](https://www.wikidata.org/wiki/Q1012369) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Eppan an der Weinstraße |
| Inception | 1125 |
| Designations | Italian national heritage\|cultural heritage monument in South Tyrol |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `website` | http://hocheppan.it/ |

## What the model contains

Tier **T1**, status `outline+walls`, 80 elements (outline 1, road 48, wall 7, zone 1, building 15, water 1, cliff 4, waterway 3).

Evidence: documented 0, mapped 80, inferred 0, derived 0; heights documented 3, inferred 0, unknown 19.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3581774 historic=castle Q1012369 10 m from ledger point
- origin moved 11 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.49265/11.24222) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=5; wikidata:Q1012369 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 80 elements); data/traces/hocheppan-castle-q1012369.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
