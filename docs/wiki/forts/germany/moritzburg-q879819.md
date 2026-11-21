# Moritzburg

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `moritzburg-q879819` |
| Coordinates | 51.48611, 11.96333 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.48611/11.96333)) |
| Wikidata | [Q879819](https://www.wikidata.org/wiki/Q879819) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum\|collection\|museum building |
| Administrative area | Halle (Saale) |
| Inception | 2000 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `location-only`, 309 elements (marker 8, road 187, wall 6, water 3, building 204, retaining-wall 5, waterway 2, zone 15).

Evidence: documented 0, mapped 309, inferred 0, derived 0; heights documented 95, inferred 0, unknown 36.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5414555 historic=castle Q879819 56 m from ledger point
- site is a site relation of 7 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (121 x 110 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 204 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 187 mapped (trace size budget); minor lanes are not drawn
- origin moved 50 m from the ledger point to the centre of the mapped site
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.48611/11.96333) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum\|collection\|museum building; sitelinks=13; wikidata:Q879819 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 327 elements); data/traces/moritzburg-q879819.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
