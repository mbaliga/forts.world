# Bielsko-Biała Museum and Castle

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bielsko-bia-a-museum-and-castle-q1667897` |
| Coordinates | 49.82167, 19.04456 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.82167/19.04456)) |
| Wikidata | [Q1667897](https://www.wikidata.org/wiki/Q1667897) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|museum |
| Administrative area | Bielsko-Biała |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 314 elements (outline 1, marker 6, road 205, water 1, building 301, wall 9, retaining-wall 3, zone 22, waterway 2).

Evidence: documented 0, mapped 314, inferred 0, derived 0; heights documented 23, inferred 0, unknown 109.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/661339521 historic=castle Q1667897 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 301 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 205 mapped (trace size budget); minor lanes are not drawn
- origin moved 5 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.82167/19.04456) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|museum; sitelinks=12; wikidata:Q1667897 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 314 elements); data/traces/bielsko-bia-a-museum-and-castle-q1667897.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
