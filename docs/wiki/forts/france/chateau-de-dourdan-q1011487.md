# Château de Dourdan

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-dourdan-q1011487` |
| Coordinates | 48.53, 2.01083 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.53/2.01083)) |
| Wikidata | [Q1011487](https://www.wikidata.org/wiki/Q1011487) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Dourdan |
| Inception | 1220 |
| Designations | classified historical monument |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `website` | http://www.mairie-dourdan.fr/culture-et-patrimoine/chateau-musee |

## What the model contains

Tier **T1**, status `outline+walls`, 305 elements (outline 1, marker 9, road 229, building 672, water 3, zone 9, retaining-wall 2, waterway 3, wall 8).

Evidence: documented 0, mapped 305, inferred 0, derived 0; heights documented 6, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3484376 historic=castle Q1011487 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 672 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 229 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.53/2.01083) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q1011487 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 305 elements); data/traces/chateau-de-dourdan-q1011487.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
