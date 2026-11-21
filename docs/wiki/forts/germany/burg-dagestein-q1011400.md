# Burg Dagestein

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-dagestein-q1011400` |
| Coordinates | 49.61343, 11.80917 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.61343/11.80917)) |
| Wikidata | [Q1011400](https://www.wikidata.org/wiki/Q1011400) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site |
| Administrative area | Vilseck |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 204 elements (outline 1, marker 2, road 37, waterway 3, building 154, wall 2, water 5).

Evidence: documented 0, mapped 204, inferred 0, derived 0; heights documented 2, inferred 0, unknown 154.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/890844267 historic=castle 31 m from ledger point
- origin moved 31 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.61343/11.80917) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site; sitelinks=3; wikidata:Q1011400 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 204 elements); data/traces/burg-dagestein-q1011400.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
