# Redoubt Duijnhoop

> South Africa · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `redoubt-duijnhoop-q7306199` |
| Coordinates | -33.925, 18.425 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-33.925/18.425)) |
| Wikidata | [Q7306199](https://www.wikidata.org/wiki/Q7306199) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Inception | 1654 |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | https://www.castleofgoodhope.co.za/ |

## What the model contains

Tier **T1**, status `outline+walls`, 271 elements (outline 1, marker 1, road 303, building 64, water 2, wall 16, zone 24, retaining-wall 13).

Evidence: documented 0, mapped 271, inferred 0, derived 0; heights documented 83, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/57263 historic=castle Q1049562 261 m from ledger point
- roads capped: kept the 150 longest of 303 mapped (trace size budget); minor lanes are not drawn
- origin moved 255 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-33.925/18.425) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q7306199 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 271 elements); data/traces/redoubt-duijnhoop-q7306199.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/south-africa.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
