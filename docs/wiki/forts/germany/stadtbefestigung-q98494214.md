# Stadtbefestigung

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtbefestigung-q98494214` |
| Coordinates | 49.70747, 9.40109 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.70747/9.40109)) |
| Wikidata | [Q98494214](https://www.wikidata.org/wiki/Q98494214) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Neunkirchen |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `location-only`, 159 elements (marker 3, road 30, building 365, wall 3, zone 3).

Evidence: documented 0, mapped 159, inferred 0, derived 0; heights documented 5, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 365 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.70747/9.40109) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q98494214 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 159 elements); data/traces/stadtbefestigung-q98494214.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
