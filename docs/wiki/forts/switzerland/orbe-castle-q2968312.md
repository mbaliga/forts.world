# Orbe Castle

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `orbe-castle-q2968312` |
| Coordinates | 46.72592, 6.53273 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.72592/6.53273)) |
| Wikidata | [Q2968312](https://www.wikidata.org/wiki/Q2968312) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Orbe |
| Designations | class A Swiss cultural property of national significance |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `description` | Château médiéval avec donjon circulaire (vers 1230) et une tour carrée, construit par Amédée III de Montfaucon, passe à Louis de Chalon en 1396, détruit par les Confédérés en 1475. (Source: Burgenverein.ch) |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 303 elements (outline 1, marker 1, road 161, wall 24, waterway 1, building 217, water 2, zone 4).

Evidence: documented 0, mapped 303, inferred 0, derived 0; heights documented 0, inferred 0, unknown 144.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/231422834 historic=castle Q2968312 28 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 217 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 161 mapped (trace size budget); minor lanes are not drawn
- origin moved 29 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.72592/6.53273) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q2968312 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 303 elements); data/traces/orbe-castle-q2968312.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
