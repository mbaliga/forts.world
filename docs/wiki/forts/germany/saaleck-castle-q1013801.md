# Saaleck Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `saaleck-castle-q1013801` |
| Coordinates | 51.10972, 11.70139 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.10972/11.70139)) |
| Wikidata | [Q1013801](https://www.wikidata.org/wiki/Q1013801) (CC0) |
| Wikidata class | ruin |
| Types | castle\|ruins\|hill castle |
| Administrative area | Naumburg |
| Inception | 1200 |
| Designations | heritage monument in Saxony-Anhalt |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 4 |
| OSM `ruins` | yes |
| OSM `website` | https://www.burg-saaleck.info/ |

## What the model contains

Tier **T1**, status `outline+walls`, 214 elements (outline 1, road 60, building 125, waterway 2, water 2, zone 5, wall 15, retaining-wall 2, cliff 2).

Evidence: documented 0, mapped 214, inferred 0, derived 0; heights documented 3, inferred 0, unknown 139.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/168342777 historic=castle Q1013801 16 m from ledger point
- origin moved 19 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.10972/11.70139) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|ruins\|hill castle; sitelinks=5; wikidata:Q1013801 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 214 elements); data/traces/saaleck-castle-q1013801.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
