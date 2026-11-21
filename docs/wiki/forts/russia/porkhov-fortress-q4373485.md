# Porkhov Fortress

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porkhov-fortress-q4373485` |
| Coordinates | 57.7648, 29.56246 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.7648/29.56246)) |
| Wikidata | [Q4373485](https://www.wikidata.org/wiki/Q4373485) (CC0) |
| Wikidata class | fort |
| Types | fortification\|architectural landmark |
| Administrative area | Porkhov |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | kremlin |

## What the model contains

Tier **T1**, status `outline+walls`, 161 elements (outline 1, marker 8, road 51, waterway 1, building 95, wall 5).

Evidence: documented 0, mapped 161, inferred 0, derived 0; heights documented 32, inferred 0, unknown 68.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/11479505 historic=castle Q4373485 5 m from ledger point
- origin moved 8 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.7648/29.56246) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|architectural landmark; sitelinks=6; wikidata:Q4373485 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 161 elements); data/traces/porkhov-fortress-q4373485.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
