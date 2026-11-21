# Argentoratum

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `argentoratum-q2361353` |
| Coordinates | 48.5827, 7.751 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.5827/7.751)) |
| Wikidata | [Q2361353](https://www.wikidata.org/wiki/Q2361353) (CC0) |
| Wikidata class | fortification |
| Types | castrum\|archaeological site |
| Administrative area | Strasbourg |
| Inception | -0011 |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 323 elements (outline 1, marker 5, road 184, building 344, wall 39, water 4, waterway 2, zone 2).

Evidence: documented 0, mapped 323, inferred 0, derived 0; heights documented 47, inferred 0, unknown 112.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/15806990 historic=castle Q1561438 195 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 344 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 184 mapped (trace size budget); minor lanes are not drawn
- origin moved 194 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.5827/7.751) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum\|archaeological site; sitelinks=11; wikidata:Q2361353 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 323 elements); data/traces/argentoratum-q2361353.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
