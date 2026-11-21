# Burg Dreieichenhain

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-dreieichenhain-q1012242` |
| Coordinates | 50.0014, 8.71639 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.0014/8.71639)) |
| Wikidata | [Q1012242](https://www.wikidata.org/wiki/Q1012242) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Dreieich |
| Designations | cultural heritage monument in Hesse |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 289 elements (outline 1, marker 12, water 5, road 130, building 406, waterway 3, zone 4, wall 13, retaining-wall 1).

Evidence: documented 0, mapped 289, inferred 0, derived 0; heights documented 8, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/230900838 historic=castle 22 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 406 mapped (trace size budget); the rest of the town is not drawn
- origin moved 22 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.0014/8.71639) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q1012242 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 289 elements); data/traces/burg-dreieichenhain-q1012242.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
