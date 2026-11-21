# Château de Compiègne

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-compiegne-q516697` |
| Coordinates | 49.41929, 2.83096 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.41929/2.83096)) |
| Wikidata | [Q516697](https://www.wikidata.org/wiki/Q516697) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|château\|art museum\|national museum |
| Administrative area | Compiègne |
| Inception | 1788 |
| Designations | classified historical monument |
| Wikipedia language editions | 18 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 318 elements (outline 1, marker 4, road 177, building 367, water 2, waterway 1, wall 30, zone 9, retaining-wall 1).

Evidence: documented 0, mapped 318, inferred 0, derived 0; heights documented 7, inferred 0, unknown 144.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/194640 historic=castle Q516697 17 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 367 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 177 mapped (trace size budget); minor lanes are not drawn
- origin moved 21 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.41929/2.83096) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|château\|art museum\|national museum; sitelinks=18; wikidata:Q516697 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 318 elements); data/traces/chateau-de-compiegne-q516697.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
