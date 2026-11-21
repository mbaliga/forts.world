# Ensemble Burgfriedenstraße

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ensemble-burgfriedenstra-e-q41288261` |
| Coordinates | 48.354, 10.8783 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.354/10.8783)) |
| Wikidata | [Q41288261](https://www.wikidata.org/wiki/Q41288261) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Augsburg |
| Designations | heritage monument ensemble in Bavaria |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `location-only`, 309 elements (road 252, waterway 2, zone 19, building 190, water 2, wall 5, retaining-wall 11).

Evidence: documented 0, mapped 309, inferred 0, derived 0; heights documented 50, inferred 0, unknown 86.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 190 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 252 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.354/10.8783) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=0; wikidata:Q41288261 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 309 elements); data/traces/ensemble-burgfriedenstra-e-q41288261.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
