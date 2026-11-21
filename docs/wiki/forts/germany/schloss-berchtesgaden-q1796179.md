# Schloss Berchtesgaden

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-berchtesgaden-q1796179` |
| Coordinates | 47.63333, 13.00356 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.63333/13.00356)) |
| Wikidata | [Q1796179](https://www.wikidata.org/wiki/Q1796179) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Berchtesgaden |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://schloss-berchtesgaden.de/de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 349 elements (outline 1, marker 6, road 190, zone 45, building 251, waterway 4, water 1, wall 13, retaining-wall 9).

Evidence: documented 0, mapped 349, inferred 0, derived 0; heights documented 6, inferred 0, unknown 136.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20044120 historic=castle Q1796179 23 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 251 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 190 mapped (trace size budget); minor lanes are not drawn
- origin moved 25 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.63333/13.00356) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=4; wikidata:Q1796179 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 349 elements); data/traces/schloss-berchtesgaden-q1796179.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
