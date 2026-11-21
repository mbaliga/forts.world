# Castello Sforzesco (Vigevano)

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-sforzesco-vigevano-q3662375` |
| Coordinates | 45.31613, 8.85746 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.31613/8.85746)) |
| Wikidata | [Q3662375](https://www.wikidata.org/wiki/Q3662375) (CC0) |
| Wikidata class | castle |
| Types | castle\|historical park museum\|military museum building |
| Administrative area | Vigevano |
| Designations | Italian national heritage |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `location-only`, 263 elements (marker 4, road 124, zone 6, waterway 6, building 414, water 3).

Evidence: documented 0, mapped 263, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2692527 historic=castle Q3662375 9 m from ledger point
- site is a site relation of 7 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (279 x 198 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 414 mapped (trace size budget); the rest of the town is not drawn
- origin moved 26 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.31613/8.85746) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|historical park museum\|military museum building; sitelinks=6; wikidata:Q3662375 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 269 elements); data/traces/castello-sforzesco-vigevano-q3662375.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
