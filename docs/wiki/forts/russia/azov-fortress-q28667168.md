# Azov Fortress

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `azov-fortress-q28667168` |
| Coordinates | 47.11596, 39.42158 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.11596/39.42158)) |
| Wikidata | [Q28667168](https://www.wikidata.org/wiki/Q28667168) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Azov |
| Inception | 1475 |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 15 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 201 elements (outline 1, marker 6, road 48, building 131, wall 2, waterway 2, zone 9, retaining-wall 2).

Evidence: documented 0, mapped 201, inferred 0, derived 0; heights documented 38, inferred 0, unknown 97.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1249290051 historic=castle 18 m from ledger point
- origin moved 17 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.11596/39.42158) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=15; wikidata:Q28667168 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 201 elements); data/traces/azov-fortress-q28667168.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
