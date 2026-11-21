# Sombreffe Castle

> Belgium · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sombreffe-castle-q1090712` |
| Coordinates | 50.53102, 4.59654 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.53102/4.59654)) |
| Wikidata | [Q1090712](https://www.wikidata.org/wiki/Q1090712) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Sombreffe |
| Designations | Exceptional heritage property of Wallonia\|protected heritage property in Wallonia |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `location-only`, 84 elements (marker 2, road 14, wall 10, building 48, zone 9, waterway 1).

Evidence: documented 0, mapped 84, inferred 0, derived 0; heights documented 0, inferred 0, unknown 58.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8266839 historic=castle Q1090712 27 m from ledger point
- site is a site relation of 22 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (122 x 100 m)
- origin moved 31 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.53102/4.59654) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q1090712 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 80 elements); data/traces/sombreffe-castle-q1090712.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
