# Jiankou

> China · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `jiankou-q1688894` |
| Coordinates | 40.45436, 116.46448 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.45436/116.46448)) |
| Wikidata | [Q1688894](https://www.wikidata.org/wiki/Q1688894) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Bohai |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 11 elements (outline 1, wall 1, road 9).

Evidence: documented 0, mapped 11, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/486599597 historic=castle 17 m from ledger point
- origin moved 16 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.45436/116.46448) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=9; wikidata:Q1688894 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 11 elements); data/traces/jiankou-q1688894.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/china.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
