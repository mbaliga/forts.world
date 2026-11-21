# Tour Grise

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-grise-q22950889` |
| Coordinates | 48.7357, 0.9306 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.7357/0.9306)) |
| Wikidata | [Q22950889](https://www.wikidata.org/wiki/Q22950889) (CC0) |
| Wikidata class | fortification |
| Types | keep |
| Administrative area | Verneuil-sur-Avre |
| Designations | classified historical monument |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 205 elements (road 63, building 349, water 11, waterway 11).

Evidence: documented 0, mapped 205, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 349 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.7357/0.9306) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; keep; sitelinks=1; wikidata:Q22950889 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 205 elements); data/traces/tour-grise-q22950889.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
