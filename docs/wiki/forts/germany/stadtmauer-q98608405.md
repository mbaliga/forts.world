# Stadtmauer

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtmauer-q98608405` |
| Coordinates | 49.5984, 11.00616 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.5984/11.00616)) |
| Wikidata | [Q98608405](https://www.wikidata.org/wiki/Q98608405) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Erlangen |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `location-only`, 380 elements (marker 81, road 1194, building 1221, zone 115, water 11, wall 111, waterway 3, retaining-wall 4).

Evidence: documented 0, mapped 380, inferred 0, derived 0; heights documented 18, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3351203 historic=yes 151 m from ledger point
- site is a site relation of 28 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (889 x 1017 m)
- present-day buildings capped: kept the 30 nearest the outline centre of 1221 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 40 longest of 1194 mapped (trace size budget); minor lanes are not drawn
- elements capped: kept the 380 nearest the ledger point of 395 mapped (trace size budget); the rest are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.5984/11.00616) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q98608405 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 380 elements); data/traces/stadtmauer-q98608405.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
