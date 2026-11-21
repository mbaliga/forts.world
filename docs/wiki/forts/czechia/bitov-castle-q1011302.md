# Bítov Castle

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bitov-castle-q1011302` |
| Coordinates | 48.9436, 15.7005 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.9436/15.7005)) |
| Wikidata | [Q1011302](https://www.wikidata.org/wiki/Q1011302) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Bítov |
| Inception | 2000 |
| Designations | national cultural monument of the Czech Republic\|cultural monument of the Czech Republic |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 93 elements (outline 1, road 43, building 23, wall 8, retaining-wall 7, waterway 1, zone 10).

Evidence: documented 0, mapped 93, inferred 0, derived 0; heights documented 3, inferred 0, unknown 35.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2356036 historic=castle Q1011302 42 m from ledger point
- origin moved 41 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.9436/15.7005) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=10; wikidata:Q1011302 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 93 elements); data/traces/bitov-castle-q1011302.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
