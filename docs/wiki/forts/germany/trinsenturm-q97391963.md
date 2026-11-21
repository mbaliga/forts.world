# Trinsenturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `trinsenturm-q97391963` |
| Coordinates | 51.2982, 6.84743 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.2982/6.84743)) |
| Wikidata | [Q97391963](https://www.wikidata.org/wiki/Q97391963) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Ratingen Mitte |
| Inception | 1480 |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 1 |
| OSM `historic` | monastery |
| OSM `heritage` | 8 |

## What the model contains

Tier **T1**, status `outline+walls`, 299 elements (outline 1, marker 8, road 165, building 399, waterway 1, wall 16, zone 3).

Evidence: documented 0, mapped 299, inferred 0, derived 0; heights documented 90, inferred 0, unknown 46.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2000169 historic=monastery Q1611478 106 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 399 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 165 mapped (trace size budget); minor lanes are not drawn
- origin moved 106 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.2982/6.84743) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q97391963 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 299 elements); data/traces/trinsenturm-q97391963.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
