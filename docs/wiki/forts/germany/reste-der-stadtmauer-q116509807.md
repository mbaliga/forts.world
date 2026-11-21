# Reste der Stadtmauer

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `reste-der-stadtmauer-q116509807` |
| Coordinates | 50.23046, 8.6115 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.23046/8.6115)) |
| Wikidata | [Q116509807](https://www.wikidata.org/wiki/Q116509807) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Bad Homburg vor der Höhe |
| Designations | cultural heritage monument in Hesse |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 297 elements (outline 1, road 165, building 215, waterway 10, wall 2, zone 12, water 1, retaining-wall 1).

Evidence: documented 0, mapped 297, inferred 0, derived 0; heights documented 18, inferred 0, unknown 105.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3690311 historic=castle Q880310 297 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 215 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 165 mapped (trace size budget); minor lanes are not drawn
- origin moved 306 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.23046/8.6115) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q116509807 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 297 elements); data/traces/reste-der-stadtmauer-q116509807.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
