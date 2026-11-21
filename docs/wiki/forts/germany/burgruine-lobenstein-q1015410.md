# Burgruine Lobenstein

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burgruine-lobenstein-q1015410` |
| Coordinates | 50.446, 11.6406 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.446/11.6406)) |
| Wikidata | [Q1015410](https://www.wikidata.org/wiki/Q1015410) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Bad Lobenstein |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline-only`, 222 elements (outline 1, road 86, water 1, building 349, waterway 12, zone 1, cliff 1).

Evidence: documented 0, mapped 222, inferred 0, derived 0; heights documented 1, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/28985159 historic=castle Q1015410 32 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 349 mapped (trace size budget); the rest of the town is not drawn
- origin moved 30 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.446/11.6406) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=3; wikidata:Q1015410 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 222 elements); data/traces/burgruine-lobenstein-q1015410.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
