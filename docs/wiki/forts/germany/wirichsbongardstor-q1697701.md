# Wirichsbongardstor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wirichsbongardstor-q1697701` |
| Coordinates | 50.77111, 6.09083 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.77111/6.09083)) |
| Wikidata | [Q1697701](https://www.wikidata.org/wiki/Q1697701) (CC0) |
| Wikidata class | fortification |
| Types | windmill\|city gate\|destroyed building or structure |
| Administrative area | Aachen |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 294 elements (outline 1, marker 1, road 146, building 243, waterway 2, wall 20, zone 4).

Evidence: documented 0, mapped 294, inferred 0, derived 0; heights documented 70, inferred 0, unknown 70.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1551891512 historic=citywalls 429 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 243 mapped (trace size budget); the rest of the town is not drawn
- origin moved 429 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.77111/6.09083) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; windmill\|city gate\|destroyed building or structure; sitelinks=2; wikidata:Q1697701 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 294 elements); data/traces/wirichsbongardstor-q1697701.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
