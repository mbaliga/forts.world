# Jōjō Castle

> Japan · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `jojo-castle-q532489` |
| Coordinates | 35.23944, 136.98444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.23944/136.98444)) |
| Wikidata | [Q532489](https://www.wikidata.org/wiki/Q532489) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Kasugai |
| Inception | 1218 |
| Wikipedia language editions | 7 |

## What the model contains

Tier **T1**, status `location-only`, 180 elements (road 44, waterway 16, building 635).

Evidence: documented 0, mapped 180, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 635 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.23944/136.98444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=7; wikidata:Q532489 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 180 elements); data/traces/jojo-castle-q532489.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
