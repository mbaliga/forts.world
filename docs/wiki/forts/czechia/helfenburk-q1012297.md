# Helfenburk

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `helfenburk-q1012297` |
| Coordinates | 49.13611, 14.00639 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.13611/14.00639)) |
| Wikidata | [Q1012297](https://www.wikidata.org/wiki/Q1012297) (CC0) |
| Wikidata class | ruin |
| Types | castle\|castle ruin |
| Administrative area | Krajníčko |
| Inception | 1355 |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 17 elements (outline 1, marker 1, road 11, building 2, wall 2).

Evidence: documented 0, mapped 17, inferred 0, derived 0; heights documented 2, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/232655825 historic=castle Q1012297 24 m from ledger point
- origin moved 27 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.13611/14.00639) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|castle ruin; sitelinks=8; wikidata:Q1012297 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 17 elements); data/traces/helfenburk-q1012297.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
