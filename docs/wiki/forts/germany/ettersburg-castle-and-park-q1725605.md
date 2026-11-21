# Ettersburg Castle and Park

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ettersburg-castle-and-park-q1725605` |
| Coordinates | 51.03241, 11.27402 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.03241/11.27402)) |
| Wikidata | [Q1725605](https://www.wikidata.org/wiki/Q1725605) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|English garden\|château\|hunting lodge |
| Administrative area | Ettersburg |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `location-only`, 129 elements (marker 2, road 53, zone 4, building 64, waterway 5, wall 1).

Evidence: documented 0, mapped 129, inferred 0, derived 0; heights documented 1, inferred 0, unknown 64.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2742364 historic=castle Q1725605 5 m from ledger point
- site is a site relation of 2 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (61 x 73 m)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.03241/11.27402) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|English garden\|château\|hunting lodge; sitelinks=8; wikidata:Q1725605 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 132 elements); data/traces/ettersburg-castle-and-park-q1725605.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
