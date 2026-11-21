# Strahlenburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `strahlenburg-q2352985` |
| Coordinates | 49.475, 8.66917 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.475/8.66917)) |
| Wikidata | [Q2352985](https://www.wikidata.org/wiki/Q2352985) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Schriesheim |
| Inception | 1235 |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 245 elements (outline 1, marker 2, road 85, building 142, wall 10, zone 2, waterway 2, retaining-wall 1).

Evidence: documented 0, mapped 245, inferred 0, derived 0; heights documented 10, inferred 0, unknown 143.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/17280796 historic=castle Q2352985 22 m from ledger point
- origin moved 13 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.475/8.66917) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q2352985 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 245 elements); data/traces/strahlenburg-q2352985.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
