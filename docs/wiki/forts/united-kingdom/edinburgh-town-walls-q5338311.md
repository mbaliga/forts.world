# Edinburgh town walls

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `edinburgh-town-walls-q5338311` |
| Coordinates | 55.94622, -3.19698 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.94622/-3.19698)) |
| Wikidata | [Q5338311](https://www.wikidata.org/wiki/Q5338311) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | City of Edinburgh |
| Wikipedia language editions | 3 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `location-only`, 380 elements (marker 96, road 1019, building 810, zone 36, cliff 55, wall 413, retaining-wall 22).

Evidence: documented 0, mapped 380, inferred 0, derived 0; heights documented 25, inferred 0, unknown 230.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20345391 historic=citywalls Q5338311 485 m from ledger point
- site is a site relation of 9 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (911 x 585 m)
- present-day buildings capped: kept the 30 nearest the outline centre of 810 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 40 longest of 1019 mapped (trace size budget); minor lanes are not drawn
- elements capped: kept the 380 nearest the ledger point of 692 mapped (trace size budget); the rest are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.94622/-3.19698) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=3; wikidata:Q5338311 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 11 elements); data/traces/edinburgh-town-walls-q5338311.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
