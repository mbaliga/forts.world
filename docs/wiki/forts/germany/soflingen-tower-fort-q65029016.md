# Söflingen tower Fort

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `soflingen-tower-fort-q65029016` |
| Coordinates | 48.40459, 9.95556 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.40459/9.95556)) |
| Wikidata | [Q65029016](https://www.wikidata.org/wiki/Q65029016) (CC0) |
| Wikidata class | fort |
| Types | fort\|defence work |
| Administrative area | Ulm |
| Inception | 1856 |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | http://www.festung-ulm.de/ |

## What the model contains

Tier **T1**, status `location-only`, 297 elements (road 538, waterway 7, building 374, wall 3, zone 17).

Evidence: documented 0, mapped 297, inferred 0, derived 0; heights documented 75, inferred 0, unknown 48.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/9584658 historic=castle Q50709 1972 m from ledger point
- site is a site relation of 62 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (4858 x 5351 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 374 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 538 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.40459/9.95556) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|defence work; sitelinks=1; wikidata:Q65029016 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 297 elements); data/traces/soflingen-tower-fort-q65029016.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
