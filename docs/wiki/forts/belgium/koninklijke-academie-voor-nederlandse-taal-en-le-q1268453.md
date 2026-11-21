# Koninklijke Academie voor Nederlandse Taal- en Letterkunde

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `koninklijke-academie-voor-nederlandse-taal-en-le-q1268453` |
| Coordinates | 51.05535, 3.7281 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.05535/3.7281)) |
| Wikidata | [Q1268453](https://www.wikidata.org/wiki/Q1268453) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|language regulator |
| Administrative area | Ghent |
| Inception | 1886 |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 353 elements (outline 1, marker 5, road 155, building 580, water 2, zone 68, waterway 4, wall 3).

Evidence: documented 0, mapped 353, inferred 0, derived 0; heights documented 16, inferred 0, unknown 107.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/501467405 historic=castle Q1268453 7 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 580 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 155 mapped (trace size budget); minor lanes are not drawn
- origin moved 7 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.05535/3.7281) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|language regulator; sitelinks=11; wikidata:Q1268453 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 353 elements); data/traces/koninklijke-academie-voor-nederlandse-taal-en-le-q1268453.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
