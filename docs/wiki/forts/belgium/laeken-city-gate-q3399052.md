# Laeken city gate

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `laeken-city-gate-q3399052` |
| Coordinates | 50.85597, 4.35503 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.85597/4.35503)) |
| Wikidata | [Q3399052](https://www.wikidata.org/wiki/Q3399052) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|destroyed building or structure |
| Administrative area | Brussels |
| Wikipedia language editions | 4 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline-only`, 275 elements (outline 1, road 342, building 205, zone 3, waterway 1).

Evidence: documented 0, mapped 275, inferred 0, derived 0; heights documented 30, inferred 0, unknown 90.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/119630808 historic=monument Q3323413 459 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 205 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 342 mapped (trace size budget); minor lanes are not drawn
- origin moved 459 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.85597/4.35503) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|destroyed building or structure; sitelinks=4; wikidata:Q3399052 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 275 elements); data/traces/laeken-city-gate-q3399052.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
