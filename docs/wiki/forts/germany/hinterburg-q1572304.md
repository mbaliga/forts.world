# Hinterburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hinterburg-q1572304` |
| Coordinates | 49.4096, 8.8274 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.4096/8.8274)) |
| Wikidata | [Q1572304](https://www.wikidata.org/wiki/Q1572304) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Neckarsteinach |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 127 elements (outline 1, marker 3, road 74, water 1, waterway 2, building 22, zone 2, wall 21, retaining-wall 1).

Evidence: documented 0, mapped 127, inferred 0, derived 0; heights documented 0, inferred 0, unknown 44.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/107957636 historic=castle Q1572304 16 m from ledger point
- origin moved 21 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.4096/8.8274) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q1572304 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 127 elements); data/traces/hinterburg-q1572304.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
