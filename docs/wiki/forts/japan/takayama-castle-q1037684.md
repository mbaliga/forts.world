# Takayama Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `takayama-castle-q1037684` |
| Coordinates | 36.13819, 137.26358 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.13819/137.26358)) |
| Wikidata | [Q1037684](https://www.wikidata.org/wiki/Q1037684) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Takayama |
| Inception | 1588 |
| Wikipedia language editions | 7 |
| OSM `historic` | yes |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 229 elements (outline 1, marker 8, road 83, waterway 3, building 380, water 1, wall 5, zone 7, retaining-wall 1).

Evidence: documented 0, mapped 229, inferred 0, derived 0; heights documented 0, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/240742820 historic=yes Q11669454 553 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 380 mapped (trace size budget); the rest of the town is not drawn
- origin moved 551 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.13819/137.26358) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=7; wikidata:Q1037684 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 229 elements); data/traces/takayama-castle-q1037684.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
