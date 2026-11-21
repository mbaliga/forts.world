# Stadtmauer

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtmauer-q98455816` |
| Coordinates | 49.791, 9.93312 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.791/9.93312)) |
| Wikidata | [Q98455816](https://www.wikidata.org/wiki/Q98455816) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Würzburg |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | yes |
| OSM `heritage` | 4 |
| OSM `description` | Die baudenkmalgeschützten Teile der noch erhaltenen Stadtmauer (inklusive der zugehörigen baudenkmalgeschützten Türme) |

## What the model contains

Tier **T1**, status `location-only`, 380 elements (marker 214, road 1400, building 1001, retaining-wall 24, wall 113, water 3, waterway 3, zone 27).

Evidence: documented 0, mapped 380, inferred 0, derived 0; heights documented 25, inferred 0, unknown 107.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/14080756 historic=yes Q98455816 112 m from ledger point
- site is a site relation of 25 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (867 x 1341 m)
- present-day buildings capped: kept the 30 nearest the outline centre of 1001 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 40 longest of 1400 mapped (trace size budget); minor lanes are not drawn
- elements capped: kept the 380 nearest the ledger point of 454 mapped (trace size budget); the rest are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.791/9.93312) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q98455816 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 380 elements); data/traces/stadtmauer-q98455816.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
