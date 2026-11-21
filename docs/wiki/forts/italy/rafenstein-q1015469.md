# Rafenstein

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rafenstein-q1015469` |
| Coordinates | 46.526, 11.35717 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.526/11.35717)) |
| Wikidata | [Q1015469](https://www.wikidata.org/wiki/Q1015469) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Bolzano |
| Designations | Italian national heritage\|cultural heritage monument in South Tyrol |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 44 elements (outline 1, marker 1, road 14, building 6, waterway 3, zone 6, wall 12, cliff 1).

Evidence: documented 0, mapped 44, inferred 0, derived 0; heights documented 0, inferred 0, unknown 18.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/196707808 historic=castle Q1015469 9 m from ledger point
- origin moved 9 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.526/11.35717) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=4; wikidata:Q1015469 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 44 elements); data/traces/rafenstein-q1015469.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
