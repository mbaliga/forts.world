# Kirriemuir

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kirriemuir-q1011603` |
| Coordinates | 56.67362, -3.00503 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.67362/-3.00503)) |
| Wikidata | [Q1011603](https://www.wikidata.org/wiki/Q1011603) (CC0) |
| Wikidata class | fortification |
| Types | town\|small burgh |
| Administrative area | Angus |
| Wikipedia language editions | 23 |

## What the model contains

Tier **T1**, status `location-only`, 325 elements (marker 8, road 195, building 348, zone 17, waterway 1, retaining-wall 4, wall 25).

Evidence: documented 0, mapped 325, inferred 0, derived 0; heights documented 4, inferred 0, unknown 145.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 348 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 195 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.67362/-3.00503) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; town\|small burgh; sitelinks=23; wikidata:Q1011603 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 325 elements); data/traces/kirriemuir-q1011603.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
