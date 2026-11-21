# Burg Enger

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-enger-q1011626` |
| Coordinates | 52.1385, 8.55833 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.1385/8.55833)) |
| Wikidata | [Q1011626](https://www.wikidata.org/wiki/Q1011626) (CC0) |
| Wikidata class | castle |
| Types | castle\|deserted castle site |
| Administrative area | Enger |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 287 elements (marker 6, road 161, waterway 2, building 275, zone 9).

Evidence: documented 0, mapped 287, inferred 0, derived 0; heights documented 4, inferred 0, unknown 116.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 275 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 161 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.1385/8.55833) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|deserted castle site; sitelinks=2; wikidata:Q1011626 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 287 elements); data/traces/burg-enger-q1011626.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
