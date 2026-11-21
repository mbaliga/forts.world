# Palais de l'Isle

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palais-de-l-isle-q1406850` |
| Coordinates | 45.89858, 6.12683 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.89858/6.12683)) |
| Wikidata | [Q1406850](https://www.wikidata.org/wiki/Q1406850) (CC0) |
| Wikidata class | fort |
| Types | prison\|fortified house\|administrative building |
| Administrative area | Annecy |
| Designations | classified historical monument |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 311 elements (outline 1, marker 5, road 219, building 287, water 6, wall 6, waterway 21, retaining-wall 1, zone 1).

Evidence: documented 0, mapped 311, inferred 0, derived 0; heights documented 9, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/37205550 historic=castle Q1406850 12 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 287 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 219 mapped (trace size budget); minor lanes are not drawn
- origin moved 13 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.89858/6.12683) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; prison\|fortified house\|administrative building; sitelinks=8; wikidata:Q1406850 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 311 elements); data/traces/palais-de-l-isle-q1406850.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
