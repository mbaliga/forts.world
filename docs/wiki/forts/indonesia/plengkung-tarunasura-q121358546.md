# Plengkung Tarunasura

> Indonesia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `plengkung-tarunasura-q121358546` |
| Coordinates | -7.80277, 110.3664 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-7.80277/110.3664)) |
| Wikidata | [Q121358546](https://www.wikidata.org/wiki/Q121358546) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Yogyakarta |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 285 elements (outline 1, marker 1, waterway 1, building 288, road 179, zone 7, wall 4, water 1).

Evidence: documented 0, mapped 285, inferred 0, derived 0; heights documented 60, inferred 0, unknown 64.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1266553557 historic=castle Q2551916 273 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 288 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 179 mapped (trace size budget); minor lanes are not drawn
- origin moved 276 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-7.80277/110.3664) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q121358546 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 285 elements); data/traces/plengkung-tarunasura-q121358546.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/indonesia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
