# Slawenburg Lübben

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `slawenburg-lubben-q2293886` |
| Coordinates | 51.9355, 13.8971 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.9355/13.8971)) |
| Wikidata | [Q2293886](https://www.wikidata.org/wiki/Q2293886) (CC0) |
| Wikidata class | castle |
| Types | castle\|deserted castle site |
| Administrative area | Lübben (Spreewald) |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `location-only`, 321 elements (marker 1, road 229, waterway 19, water 12, building 127, zone 16, wall 3).

Evidence: documented 0, mapped 321, inferred 0, derived 0; heights documented 21, inferred 0, unknown 102.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2598352 historic=castle Q2242315 518 m from ledger point
- site is a site relation of 6 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (56 x 44 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 127 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 229 mapped (trace size budget); minor lanes are not drawn
- origin moved 525 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.9355/13.8971) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|deserted castle site; sitelinks=1; wikidata:Q2293886 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 321 elements); data/traces/slawenburg-lubben-q2293886.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
