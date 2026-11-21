# Neues Tor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `neues-tor-q1265296` |
| Coordinates | 52.5284, 13.3787 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.5284/13.3787)) |
| Wikidata | [Q1265296](https://www.wikidata.org/wiki/Q1265296) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|destroyed building or structure |
| Administrative area | Bezirk Mitte |
| Inception | 1836 |
| Wikipedia language editions | 2 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 311 elements (outline 1, road 361, building 146, water 2, zone 28, wall 3, retaining-wall 2, waterway 5).

Evidence: documented 0, mapped 311, inferred 0, derived 0; heights documented 105, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3290885 historic=building 252 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 146 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 361 mapped (trace size budget); minor lanes are not drawn
- origin moved 250 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.5284/13.3787) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|destroyed building or structure; sitelinks=2; wikidata:Q1265296 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 311 elements); data/traces/neues-tor-q1265296.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
