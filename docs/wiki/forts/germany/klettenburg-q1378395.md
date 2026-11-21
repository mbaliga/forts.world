# Klettenburg

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `klettenburg-q1378395` |
| Coordinates | 50.1532, 8.62484 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.1532/8.62484)) |
| Wikidata | [Q1378395](https://www.wikidata.org/wiki/Q1378395) (CC0) |
| Wikidata class | castle |
| Types | castle\|deserted castle site |
| Administrative area | Frankfurt |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 280 elements (marker 1, road 155, waterway 4, water 1, building 260, zone 3, wall 1).

Evidence: documented 0, mapped 280, inferred 0, derived 0; heights documented 54, inferred 0, unknown 67.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 260 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 155 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.1532/8.62484) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|deserted castle site; sitelinks=1; wikidata:Q1378395 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 280 elements); data/traces/klettenburg-q1378395.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
