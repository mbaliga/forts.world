# Burg Arras

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-arras-q1010850` |
| Coordinates | 50.0526, 7.10583 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.0526/7.10583)) |
| Wikidata | [Q1010850](https://www.wikidata.org/wiki/Q1010850) (CC0) |
| Wikidata class | ruin |
| Types | castle\|museum\|Kulturdenkmal\|castle ruin |
| Administrative area | Alf |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.arras.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 67 elements (outline 1, road 25, waterway 1, wall 8, building 29, water 1, zone 2).

Evidence: documented 0, mapped 67, inferred 0, derived 0; heights documented 1, inferred 0, unknown 36.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/4284883 historic=castle Q1010850 27 m from ledger point
- origin moved 28 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.0526/7.10583) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|museum\|Kulturdenkmal\|castle ruin; sitelinks=3; wikidata:Q1010850 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 67 elements); data/traces/burg-arras-q1010850.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
