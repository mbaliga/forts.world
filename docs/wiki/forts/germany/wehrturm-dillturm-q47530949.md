# Wehrturm (Dillturm)

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wehrturm-dillturm-q47530949` |
| Coordinates | 50.74051, 8.28666 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.74051/8.28666)) |
| Wikidata | [Q47530949](https://www.wikidata.org/wiki/Q47530949) (CC0) |
| Wikidata class | fortification |
| Types | defensive tower |
| Administrative area | Dillenburg |
| Designations | cultural heritage monument in Hesse |
| Wikipedia language editions | 0 |
| OSM `historic` | yes |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 277 elements (outline 1, marker 2, road 171, waterway 1, zone 1, building 466, retaining-wall 1, wall 1).

Evidence: documented 0, mapped 277, inferred 0, derived 0; heights documented 3, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1202457554 historic=yes Q47530949 0 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 466 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 171 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.74051/8.28666) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive tower; sitelinks=0; wikidata:Q47530949 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 277 elements); data/traces/wehrturm-dillturm-q47530949.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
