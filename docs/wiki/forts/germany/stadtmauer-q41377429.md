# Stadtmauer

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtmauer-q41377429` |
| Coordinates | 49.88285, 10.15849 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.88285/10.15849)) |
| Wikidata | [Q41377429](https://www.wikidata.org/wiki/Q41377429) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Eisenheim |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `location-only`, 183 elements (marker 2, road 44, building 443, wall 5, zone 10, waterway 2).

Evidence: documented 0, mapped 183, inferred 0, derived 0; heights documented 0, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 443 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.88285/10.15849) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q41377429 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 183 elements); data/traces/stadtmauer-q41377429.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
