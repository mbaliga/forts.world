# Château de Péronne

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-peronne-q18624184` |
| Coordinates | 49.9291, 2.93197 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.9291/2.93197)) |
| Wikidata | [Q18624184](https://www.wikidata.org/wiki/Q18624184) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Péronne |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |
| OSM `website` | https://www.historial.fr/ |

## What the model contains

Tier **T1**, status `outline+walls`, 238 elements (outline 1, marker 1, road 112, building 512, wall 3, waterway 1).

Evidence: documented 0, mapped 238, inferred 0, derived 0; heights documented 3, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2599224 historic=castle Q1620783 17 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 512 mapped (trace size budget); the rest of the town is not drawn
- origin moved 11 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.9291/2.93197) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q18624184 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 238 elements); data/traces/chateau-de-peronne-q18624184.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
