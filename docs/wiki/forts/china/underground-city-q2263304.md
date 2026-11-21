# Underground City

> China · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `underground-city-q2263304` |
| Coordinates | 39.8999, 116.406 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.8999/116.406)) |
| Wikidata | [Q2263304](https://www.wikidata.org/wiki/Q2263304) (CC0) |
| Wikidata class | fortification |
| Types | bunker |
| Administrative area | Beijing |
| Wikipedia language editions | 14 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 198 elements (outline 1, road 72, building 114, waterway 6, wall 1, water 3, zone 1).

Evidence: documented 0, mapped 198, inferred 0, derived 0; heights documented 4, inferred 0, unknown 111.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/687863871 historic=castle 1174 m from ledger point
- origin moved 1175 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.8999/116.406) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker; sitelinks=14; wikidata:Q2263304 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 198 elements); data/traces/underground-city-q2263304.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/china.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
