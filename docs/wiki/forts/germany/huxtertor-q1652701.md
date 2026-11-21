# Hüxtertor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `huxtertor-q1652701` |
| Coordinates | 53.86483, 10.695 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.86483/10.695)) |
| Wikidata | [Q1652701](https://www.wikidata.org/wiki/Q1652701) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|destroyed building or structure |
| Administrative area | Lübeck's Old City |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 266 elements (outline 1, marker 17, road 120, building 320, waterway 2, wall 5, water 1).

Evidence: documented 0, mapped 266, inferred 0, derived 0; heights documented 52, inferred 0, unknown 73.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/139886757 historic=castle Q2243060 665 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 320 mapped (trace size budget); the rest of the town is not drawn
- origin moved 664 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.86483/10.695) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|destroyed building or structure; sitelinks=1; wikidata:Q1652701 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 266 elements); data/traces/huxtertor-q1652701.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
