# Burg Stade

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-stade-q107361121` |
| Coordinates | 53.60319, 9.47674 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.60319/9.47674)) |
| Wikidata | [Q107361121](https://www.wikidata.org/wiki/Q107361121) (CC0) |
| Wikidata class | fort |
| Types | hillfort |
| Administrative area | Stade |
| Wikipedia language editions | 1 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 295 elements (outline 1, marker 1, road 150, building 324, water 9, waterway 11, zone 1, wall 2).

Evidence: documented 0, mapped 295, inferred 0, derived 0; heights documented 8, inferred 0, unknown 114.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/230293230 historic=building 210 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 324 mapped (trace size budget); the rest of the town is not drawn
- origin moved 209 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.60319/9.47674) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; hillfort; sitelinks=1; wikidata:Q107361121 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 295 elements); data/traces/burg-stade-q107361121.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
