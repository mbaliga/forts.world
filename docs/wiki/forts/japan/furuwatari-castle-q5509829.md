# Furuwatari Castle

> Japan · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `furuwatari-castle-q5509829` |
| Coordinates | 35.15225, 136.90196 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.15225/136.90196)) |
| Wikidata | [Q5509829](https://www.wikidata.org/wiki/Q5509829) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Naka-ku |
| Inception | 1534 |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 227 elements (marker 2, road 103, wall 1, building 357, water 1).

Evidence: documented 0, mapped 227, inferred 0, derived 0; heights documented 1, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 357 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.15225/136.90196) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=3; wikidata:Q5509829 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 227 elements); data/traces/furuwatari-castle-q5509829.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
