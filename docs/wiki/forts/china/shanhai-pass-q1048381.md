# Shanhai Pass

> China · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `shanhai-pass-q1048381` |
| Coordinates | 40.00916, 119.75357 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.00916/119.75357)) |
| Wikidata | [Q1048381](https://www.wikidata.org/wiki/Q1048381) (CC0) |
| Wikidata class | castle |
| Types | city gate\|castle\|Chinese AAAAA-rated tourist attraction\|cultural heritage of China |
| Administrative area | Shanhaiguan District |
| Inception | 1381 |
| Designations | part of UNESCO World Heritage Site\|Major Historical and Cultural Site Protected at the National Level |
| UNESCO WHC id | 438-002 |
| Wikipedia language editions | 43 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 143 elements (outline 1, road 114, building 23, wall 3, waterway 1).

Evidence: documented 0, mapped 143, inferred 0, derived 0; heights documented 0, inferred 0, unknown 27.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/247336978 historic=citywalls 202 m from ledger point
- origin moved 204 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.00916/119.75357) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; city gate\|castle\|Chinese AAAAA-rated tourist attraction\|cultural heritage of China; sitelinks=43; wikidata:Q1048381 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 143 elements); data/traces/shanhai-pass-q1048381.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/china.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
