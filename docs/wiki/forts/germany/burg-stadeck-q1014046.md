# Burg Stadeck

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-stadeck-q1014046` |
| Coordinates | 49.91131, 8.13578 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.91131/8.13578)) |
| Wikidata | [Q1014046](https://www.wikidata.org/wiki/Q1014046) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Inception | 1276 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 221 elements (outline 1, road 82, waterway 5, zone 6, building 401, wall 4, retaining-wall 3).

Evidence: documented 0, mapped 221, inferred 0, derived 0; heights documented 8, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1139722974 historic=castle Q1014046 28 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 401 mapped (trace size budget); the rest of the town is not drawn
- origin moved 29 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.91131/8.13578) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q1014046 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 221 elements); data/traces/burg-stadeck-q1014046.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
