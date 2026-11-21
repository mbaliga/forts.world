# Haus zum Haus

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `haus-zum-haus-q1590934` |
| Coordinates | 51.3036, 6.84611 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.3036/6.84611)) |
| Wikidata | [Q1590934](https://www.wikidata.org/wiki/Q1590934) (CC0) |
| Wikidata class | castle |
| Types | water castle |
| Administrative area | Ratingen Mitte |
| Inception | 1276 |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 4 |
| OSM `historic` | ruins |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `location-only`, 286 elements (marker 2, road 174, building 405, zone 2, water 2, waterway 1, wall 9).

Evidence: documented 0, mapped 286, inferred 0, derived 0; heights documented 94, inferred 0, unknown 35.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/11303568 historic=ruins Q97353905 671 m from ledger point
- site is a site relation of 6 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (394 x 280 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 405 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 174 mapped (trace size budget); minor lanes are not drawn
- origin moved 716 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.3036/6.84611) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; water castle; sitelinks=4; wikidata:Q1590934 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 335 elements); data/traces/haus-zum-haus-q1590934.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
