# Concangis

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `concangis-q5158253` |
| Coordinates | 54.8561, -1.57185 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.8561/-1.57185)) |
| Wikidata | [Q5158253](https://www.wikidata.org/wiki/Q5158253) (CC0) |
| Wikidata class | fortification |
| Types | castrum |
| Administrative area | County Durham |
| Designations | scheduled monument |
| Wikipedia language editions | 5 |

## What the model contains

Tier **T1**, status `location-only`, 289 elements (marker 2, waterway 2, road 194, building 203, zone 5, retaining-wall 1, water 1, wall 8).

Evidence: documented 0, mapped 289, inferred 0, derived 0; heights documented 39, inferred 0, unknown 90.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 203 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 194 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.8561/-1.57185) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum; sitelinks=5; wikidata:Q5158253 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 289 elements); data/traces/concangis-q5158253.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
