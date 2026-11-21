# Castell de Miravet

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castell-de-miravet-q2969908` |
| Coordinates | 41.0356, 0.59361 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.0356/0.59361)) |
| Wikidata | [Q2969908](https://www.wikidata.org/wiki/Q2969908) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Miravet |
| Designations | bien de interés cultural\|Cultural Asset of National Interest |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://patrimoni.gencat.cat/ca/monuments/monuments/castell-de-miravet#tab0 |

## What the model contains

Tier **T1**, status `outline+walls`, 46 elements (outline 1, waterway 1, road 34, cliff 3, wall 6, building 1).

Evidence: documented 0, mapped 46, inferred 0, derived 0; heights documented 1, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/184441324 historic=castle Q2969908 42 m from ledger point
- origin moved 41 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.0356/0.59361) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=8; wikidata:Q2969908 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 46 elements); data/traces/castell-de-miravet-q2969908.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
