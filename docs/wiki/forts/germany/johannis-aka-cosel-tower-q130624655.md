# Johannis (aka Cosel) Tower

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `johannis-aka-cosel-tower-q130624655` |
| Coordinates | 51.04807, 14.08433 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.04807/14.08433)) |
| Wikidata | [Q130624655](https://www.wikidata.org/wiki/Q130624655) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Stolpen |
| Inception | 1600 |
| Designations | heritage monument in Saxony |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 4 |
| OSM `website` | https://www.burg-stolpen.org |

## What the model contains

Tier **T1**, status `outline+walls`, 380 elements (outline 1, marker 22, road 279, building 348, zone 37, wall 27, waterway 1, water 3, retaining-wall 16, cliff 3).

Evidence: documented 0, mapped 380, inferred 0, derived 0; heights documented 22, inferred 0, unknown 141.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13255313 historic=castle Q314460 37 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 348 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 279 mapped (trace size budget); minor lanes are not drawn
- origin moved 36 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.04807/14.08433) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q130624655 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 380 elements); data/traces/johannis-aka-cosel-tower-q130624655.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
