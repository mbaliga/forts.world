# Wildenburg

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wildenburg-q1660724` |
| Coordinates | 50.6574, 6.60039 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.6574/6.60039)) |
| Wikidata | [Q1660724](https://www.wikidata.org/wiki/Q1660724) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Zülpich |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 265 elements (marker 1, road 59, waterway 11, zone 38, building 353, wall 36).

Evidence: documented 0, mapped 265, inferred 0, derived 0; heights documented 129, inferred 0, unknown 27.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 353 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.6574/6.60039) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q1660724 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 265 elements); data/traces/wildenburg-q1660724.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
