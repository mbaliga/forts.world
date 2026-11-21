# Derbent Fortress

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `derbent-fortress-q4158660` |
| Coordinates | 42.05265, 48.27497 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.05265/48.27497)) |
| Wikidata | [Q4158660](https://www.wikidata.org/wiki/Q4158660) (CC0) |
| Wikidata class | fort |
| Types | architectural landmark\|fort\|monument |
| Administrative area | Derbent |
| Designations | World Heritage Site\|federal cultural heritage site in Russia |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 339 elements (outline 1, marker 11, road 134, wall 17, building 220, zone 39, retaining-wall 17).

Evidence: documented 0, mapped 339, inferred 0, derived 0; heights documented 2, inferred 0, unknown 152.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19337633 historic=castle Q2263092 59 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 220 mapped (trace size budget); the rest of the town is not drawn
- origin moved 59 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.05265/48.27497) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; architectural landmark\|fort\|monument; sitelinks=7; wikidata:Q4158660 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 339 elements); data/traces/derbent-fortress-q4158660.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
