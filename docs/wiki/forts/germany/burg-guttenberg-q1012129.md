# Burg Guttenberg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-guttenberg-q1012129` |
| Coordinates | 49.2806, 9.13444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.2806/9.13444)) |
| Wikidata | [Q1012129](https://www.wikidata.org/wiki/Q1012129) (CC0) |
| Wikidata class | castle |
| Types | castle\|dwelling place |
| Administrative area | Haßmersheim |
| Designations | cultural heritage monument in Baden-Württemberg |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | http://www.burg-guttenberg.de/de/burgmuseum/museum |

## What the model contains

Tier **T1**, status `outline+walls`, 146 elements (outline 1, road 53, waterway 2, building 78, water 1, wall 4, zone 7).

Evidence: documented 0, mapped 146, inferred 0, derived 0; heights documented 1, inferred 0, unknown 81.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/143752268 historic=castle Q1012129 26 m from ledger point
- origin moved 26 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.2806/9.13444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|dwelling place; sitelinks=6; wikidata:Q1012129 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 146 elements); data/traces/burg-guttenberg-q1012129.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
