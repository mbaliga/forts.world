# Burgstall Grünberg

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burgstall-grunberg-q1015759` |
| Coordinates | 50.5926, 8.95947 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.5926/8.95947)) |
| Wikidata | [Q1015759](https://www.wikidata.org/wiki/Q1015759) (CC0) |
| Wikidata class | castle |
| Types | castle\|deserted castle site |
| Administrative area | Grünberg |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 301 elements (marker 7, road 267, building 359, zone 12, wall 11, water 1).

Evidence: documented 0, mapped 301, inferred 0, derived 0; heights documented 0, inferred 0, unknown 131.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 359 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 267 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.5926/8.95947) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|deserted castle site; sitelinks=1; wikidata:Q1015759 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 301 elements); data/traces/burgstall-grunberg-q1015759.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
