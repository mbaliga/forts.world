# Martinstor

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `martinstor-q22692959` |
| Coordinates | 47.68775, 9.83361 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.68775/9.83361)) |
| Wikidata | [Q22692959](https://www.wikidata.org/wiki/Q22692959) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Wangen im Allgäu |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 297 elements (marker 3, road 286, water 2, waterway 8, building 262, wall 11, zone 2, retaining-wall 1).

Evidence: documented 0, mapped 297, inferred 0, derived 0; heights documented 5, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 262 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 286 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.68775/9.83361) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=3; wikidata:Q22692959 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 297 elements); data/traces/martinstor-q22692959.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
