# Tour d'Arles

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-d-arles-q22940174` |
| Coordinates | 44.16079, 1.5364 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.16079/1.5364)) |
| Wikidata | [Q22940174](https://www.wikidata.org/wiki/Q22940174) (CC0) |
| Wikidata class | fortification |
| Types | tower house |
| Administrative area | Caussade |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 255 elements (marker 1, road 125, building 595, waterway 4, retaining-wall 3, wall 2).

Evidence: documented 0, mapped 255, inferred 0, derived 0; heights documented 2, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 595 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.16079/1.5364) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house; sitelinks=2; wikidata:Q22940174 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 255 elements); data/traces/tour-d-arles-q22940174.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
