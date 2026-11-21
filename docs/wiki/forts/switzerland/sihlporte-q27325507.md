# Sihlporte

> Switzerland · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sihlporte-q27325507` |
| Coordinates | 47.37267, 8.53453 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.37267/8.53453)) |
| Wikidata | [Q27325507](https://www.wikidata.org/wiki/Q27325507) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|square |
| Administrative area | Zurich |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 335 elements (marker 3, waterway 3, road 455, building 136, water 4, zone 11, wall 31, retaining-wall 13).

Evidence: documented 0, mapped 335, inferred 0, derived 0; heights documented 58, inferred 0, unknown 106.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 136 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 455 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.37267/8.53453) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|square; sitelinks=2; wikidata:Q27325507 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 335 elements); data/traces/sihlporte-q27325507.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
