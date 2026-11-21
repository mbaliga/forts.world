# Hexenturm (Murrhardt)

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hexenturm-murrhardt-q136563701` |
| Coordinates | 48.97873, 9.5783 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.97873/9.5783)) |
| Wikidata | [Q136563701](https://www.wikidata.org/wiki/Q136563701) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Murrhardt |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 288 elements (marker 2, road 213, water 1, waterway 7, building 262, zone 4, wall 4).

Evidence: documented 0, mapped 288, inferred 0, derived 0; heights documented 1, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 262 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 213 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.97873/9.5783) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q136563701 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 288 elements); data/traces/hexenturm-murrhardt-q136563701.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
