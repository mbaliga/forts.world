# Kumamoto

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kumamoto-q199889` |
| Coordinates | 32.803, 130.70786 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/32.803/130.70786)) |
| Wikidata | [Q199889](https://www.wikidata.org/wiki/Q199889) (CC0) |
| Wikidata class | fort |
| Types | fortified town\|city of Japan\|big city\|prefectural capital of Japan\|city for international conferences and tourism\|city designated by government ordinance |
| Administrative area | Kumamoto Prefecture |
| Inception | 1889 |
| Wikipedia language editions | 90 |
| OSM `historic` | castle |
| OSM `castle_type` | shriro |

## What the model contains

Tier **T1**, status `outline+walls`, 391 elements (outline 1, marker 32, road 220, waterway 3, water 6, building 276, wall 18, zone 19, retaining-wall 42).

Evidence: documented 0, mapped 391, inferred 0, derived 0; heights documented 1, inferred 0, unknown 179.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/375062710 historic=castle Q613355 404 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 276 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 220 mapped (trace size budget); minor lanes are not drawn
- origin moved 395 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/32.803/130.70786) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified town\|city of Japan\|big city\|prefectural capital of Japan\|city for international conferences and tourism\|city designated by government ordinance; sitelinks=90; wikidata:Q199889 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 391 elements); data/traces/kumamoto-q199889.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
