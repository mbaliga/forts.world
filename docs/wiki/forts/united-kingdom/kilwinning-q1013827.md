# Kilwinning

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kilwinning-q1013827` |
| Coordinates | 55.65, -4.7 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.65/-4.7)) |
| Wikidata | [Q1013827](https://www.wikidata.org/wiki/Q1013827) (CC0) |
| Wikidata class | fortification |
| Types | town\|small burgh |
| Administrative area | North Ayrshire |
| Wikipedia language editions | 26 |

## What the model contains

Tier **T1**, status `location-only`, 193 elements (road 58, zone 14, waterway 1, building 456).

Evidence: documented 0, mapped 193, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 456 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.65/-4.7) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; town\|small burgh; sitelinks=26; wikidata:Q1013827 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 193 elements); data/traces/kilwinning-q1013827.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
