# Wohnturm

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wohnturm-q41352802` |
| Coordinates | 49.81724, 10.35326 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.81724/10.35326)) |
| Wikidata | [Q41352802](https://www.wikidata.org/wiki/Q41352802) (CC0) |
| Wikidata class | fortification |
| Types | tower house |
| Administrative area | Prichsenstadt |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 223 elements (road 71, water 4, building 311, waterway 5, wall 19, zone 4).

Evidence: documented 0, mapped 223, inferred 0, derived 0; heights documented 5, inferred 0, unknown 134.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 311 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.81724/10.35326) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house; sitelinks=1; wikidata:Q41352802 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 223 elements); data/traces/wohnturm-q41352802.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
