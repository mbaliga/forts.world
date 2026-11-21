# Château des ducs de Bretagne

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-des-ducs-de-bretagne-q1289258` |
| Coordinates | 47.21614, -1.54914 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.21614/-1.54914)) |
| Wikidata | [Q1289258](https://www.wikidata.org/wiki/Q1289258) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Nantes |
| Inception | 1207 |
| Designations | classified historical monument |
| Wikipedia language editions | 20 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `website` | https://www.chateaunantes.fr |

## What the model contains

Tier **T1**, status `outline+walls`, 327 elements (outline 1, marker 28, road 459, building 303, waterway 2, water 2, zone 45, retaining-wall 39, wall 87).

Evidence: documented 0, mapped 327, inferred 0, derived 0; heights documented 29, inferred 0, unknown 153.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6808838 historic=castle Q1289258 21 m from ledger point
- pruned to the outline plus 150 m: 966 -> 702 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 170 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 345 mapped (trace size budget); minor lanes are not drawn
- origin moved 21 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.21614/-1.54914) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=20; wikidata:Q1289258 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 327 elements); data/traces/chateau-des-ducs-de-bretagne-q1289258.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
