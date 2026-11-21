# Ramparts of Vervins

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ramparts-of-vervins-q3424635` |
| Coordinates | 49.835, 3.90582 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.835/3.90582)) |
| Wikidata | [Q3424635](https://www.wikidata.org/wiki/Q3424635) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Vervins |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 185 elements (road 62, building 425, wall 2, zone 1).

Evidence: documented 0, mapped 185, inferred 0, derived 0; heights documented 1, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 425 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.835/3.90582) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=2; wikidata:Q3424635 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 185 elements); data/traces/ramparts-of-vervins-q3424635.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
