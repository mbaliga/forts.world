# Luftschutzstollen Altstadt

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `luftschutzstollen-altstadt-q1875801` |
| Coordinates | 51.3736, 7.69639 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.3736/7.69639)) |
| Wikidata | [Q1875801](https://www.wikidata.org/wiki/Q1875801) (CC0) |
| Wikidata class | fortification |
| Types | air raid shelter adit |
| Administrative area | Iserlohn |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 309 elements (marker 7, road 414, building 300, cliff 1, waterway 6, zone 17, wall 8).

Evidence: documented 0, mapped 309, inferred 0, derived 0; heights documented 67, inferred 0, unknown 61.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 300 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 414 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.3736/7.69639) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; air raid shelter adit; sitelinks=2; wikidata:Q1875801 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 309 elements); data/traces/luftschutzstollen-altstadt-q1875801.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
