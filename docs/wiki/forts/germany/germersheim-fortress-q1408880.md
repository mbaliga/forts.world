# Germersheim fortress

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `germersheim-fortress-q1408880` |
| Coordinates | 49.2186, 8.37167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.2186/8.37167)) |
| Wikidata | [Q1408880](https://www.wikidata.org/wiki/Q1408880) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Germersheim |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |
| OSM `castle_type` | fortress |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `location-only`, 340 elements (marker 16, road 431, waterway 19, zone 9, building 870, wall 23, water 2, retaining-wall 1).

Evidence: documented 0, mapped 340, inferred 0, derived 0; heights documented 0, inferred 0, unknown 144.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7483720 historic=fort Q1408880 46 m from ledger point
- site is a site relation of 18 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (736 x 850 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 870 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 431 mapped (trace size budget); minor lanes are not drawn
- origin moved 50 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.2186/8.37167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=4; wikidata:Q1408880 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 275 elements); data/traces/germersheim-fortress-q1408880.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
