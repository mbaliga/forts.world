# Nidau Castle

> Switzerland · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nidau-castle-q254290` |
| Coordinates | 47.12778, 7.24 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.12778/7.24)) |
| Wikidata | [Q254290](https://www.wikidata.org/wiki/Q254290) (CC0) |
| Wikidata class | castle |
| Types | castle\|built structure\|rampart |
| Administrative area | Nidau |
| Designations | class A Swiss cultural property of national significance |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `location-only`, 290 elements (road 156, waterway 4, building 129, water 1).

Evidence: documented 0, mapped 290, inferred 0, derived 0; heights documented 47, inferred 0, unknown 82.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/21188283 historic=castle Q254290 18 m from ledger point
- site is a site relation of 4 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (73 x 78 m)
- origin moved 15 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.12778/7.24) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|built structure\|rampart; sitelinks=4; wikidata:Q254290 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 282 elements); data/traces/nidau-castle-q254290.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
