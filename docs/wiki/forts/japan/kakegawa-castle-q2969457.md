# Kakegawa Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kakegawa-castle-q2969457` |
| Coordinates | 34.77542, 138.01473 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.77542/138.01473)) |
| Wikidata | [Q2969457](https://www.wikidata.org/wiki/Q2969457) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Kakegawa |
| Inception | 1469 |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 361 elements (outline 1, marker 16, waterway 2, road 180, building 264, water 4, zone 19, retaining-wall 19, wall 29, cliff 1).

Evidence: documented 0, mapped 361, inferred 0, derived 0; heights documented 46, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1380973301 historic=castle 10 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 264 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 180 mapped (trace size budget); minor lanes are not drawn
- origin moved 11 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.77542/138.01473) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=11; wikidata:Q2969457 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 361 elements); data/traces/kakegawa-castle-q2969457.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
