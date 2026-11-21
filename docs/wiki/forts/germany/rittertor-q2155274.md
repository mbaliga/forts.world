# Rittertor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rittertor-q2155274` |
| Coordinates | 51.5763, 10.94688 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.5763/10.94688)) |
| Wikidata | [Q2155274](https://www.wikidata.org/wiki/Q2155274) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Südharz |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 267 elements (outline 1, marker 3, road 109, building 273, waterway 8, wall 9, retaining-wall 12, water 2, zone 3).

Evidence: documented 0, mapped 267, inferred 0, derived 0; heights documented 0, inferred 0, unknown 141.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/240707354 historic=castle 498 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 273 mapped (trace size budget); the rest of the town is not drawn
- origin moved 499 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.5763/10.94688) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q2155274 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 267 elements); data/traces/rittertor-q2155274.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
