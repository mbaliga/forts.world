# Forchtenstein Castle

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forchtenstein-castle-q877030` |
| Coordinates | 47.70974, 16.33169 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.70974/16.33169)) |
| Wikidata | [Q877030](https://www.wikidata.org/wiki/Q877030) (CC0) |
| Wikidata class | castle |
| Types | castle\|military museum\|art museum |
| Administrative area | Forchtenstein |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 22 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `website` | https://www.burg-forchtenstein.at |

## What the model contains

Tier **T1**, status `outline+walls`, 155 elements (outline 1, marker 2, road 64, building 47, waterway 7, zone 19, water 1, wall 4, cliff 10).

Evidence: documented 0, mapped 155, inferred 0, derived 0; heights documented 1, inferred 0, unknown 50.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/69810081 historic=castle Q877030 10 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.70974/16.33169) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|military museum\|art museum; sitelinks=22; wikidata:Q877030 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 155 elements); data/traces/forchtenstein-castle-q877030.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
