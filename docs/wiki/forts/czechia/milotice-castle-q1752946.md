# Milotice Castle

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `milotice-castle-q1752946` |
| Coordinates | 48.9595, 17.1379 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.9595/17.1379)) |
| Wikidata | [Q1752946](https://www.wikidata.org/wiki/Q1752946) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Milotice |
| Inception | 1800 |
| Designations | national cultural monument of the Czech Republic\|cultural monument of the Czech Republic |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://www.zamek-milotice.cz/ |

## What the model contains

Tier **T1**, status `outline+walls`, 145 elements (outline 1, marker 1, building 24, waterway 8, road 93, zone 16, wall 2).

Evidence: documented 0, mapped 145, inferred 0, derived 0; heights documented 9, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1715972 historic=castle Q1752946 2 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.9595/17.1379) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=9; wikidata:Q1752946 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 145 elements); data/traces/milotice-castle-q1752946.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
