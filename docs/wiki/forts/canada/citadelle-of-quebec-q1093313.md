# Citadelle of Quebec

> Canada · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `citadelle-of-quebec-q1093313` |
| Coordinates | 46.8074, -71.2071 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.8074/-71.2071)) |
| Wikidata | [Q1093313](https://www.wikidata.org/wiki/Q1093313) (CC0) |
| Wikidata class | fort |
| Types | citadel\|military museum |
| Administrative area | La Cité-Limoilou |
| Designations | national historic site of Canada\|classified federal heritage building of Canada |
| Wikipedia language editions | 15 |
| OSM `historic` | castle |
| OSM `castle_type` | citadel |
| OSM `website` | https://www.lacitadelle.qc.ca/ |

## What the model contains

Tier **T1**, status `outline+walls`, 399 elements (outline 1, marker 64, road 389, retaining-wall 18, building 294, zone 9, waterway 1, wall 32, cliff 4).

Evidence: documented 0, mapped 399, inferred 0, derived 0; heights documented 37, inferred 0, unknown 133.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5877711 historic=castle Q1093313 27 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 294 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 389 mapped (trace size budget); minor lanes are not drawn
- origin moved 47 m from the ledger point to the outline centroid
- 14 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.8074/-71.2071) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel\|military museum; sitelinks=15; wikidata:Q1093313 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 399 elements); data/traces/citadelle-of-quebec-q1093313.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/canada.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
