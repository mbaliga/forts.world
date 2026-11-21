# Burg Grimburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-grimburg-q1012048` |
| Coordinates | 49.6056, 6.875 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.6056/6.875)) |
| Wikidata | [Q1012048](https://www.wikidata.org/wiki/Q1012048) (CC0) |
| Wikidata class | castle |
| Types | castle\|Kulturdenkmal |
| Administrative area | Grimburg |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 70 elements (outline 1, road 41, waterway 2, zone 5, wall 10, building 11).

Evidence: documented 0, mapped 70, inferred 0, derived 0; heights documented 0, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/111446555 historic=castle Q1012048 31 m from ledger point
- origin moved 35 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.6056/6.875) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|Kulturdenkmal; sitelinks=3; wikidata:Q1012048 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 70 elements); data/traces/burg-grimburg-q1012048.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
