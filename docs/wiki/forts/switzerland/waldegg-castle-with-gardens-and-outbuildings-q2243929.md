# Waldegg Castle with gardens and outbuildings

> Switzerland · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `waldegg-castle-with-gardens-and-outbuildings-q2243929` |
| Coordinates | 47.22324, 7.54804 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.22324/7.54804)) |
| Wikidata | [Q2243929](https://www.wikidata.org/wiki/Q2243929) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Feldbrunnen-St. Niklaus |
| Designations | class A Swiss cultural property of national significance |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://schloss-waldegg.so.ch/ |

## What the model contains

Tier **T1**, status `location-only`, 123 elements (road 63, building 44, retaining-wall 1, wall 5, zone 8, water 2).

Evidence: documented 0, mapped 123, inferred 0, derived 0; heights documented 0, inferred 0, unknown 50.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/9603251 historic=castle Q2243929 17 m from ledger point
- site is a site relation of 9 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (140 x 132 m)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.22324/7.54804) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=5; wikidata:Q2243929 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 75 elements); data/traces/waldegg-castle-with-gardens-and-outbuildings-q2243929.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
