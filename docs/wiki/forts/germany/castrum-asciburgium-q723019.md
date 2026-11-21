# Castrum Asciburgium

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castrum-asciburgium-q723019` |
| Coordinates | 51.4317, 6.67 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.4317/6.67)) |
| Wikidata | [Q723019](https://www.wikidata.org/wiki/Q723019) (CC0) |
| Wikidata class | fortification |
| Types | archaeological site\|castrum\|ancient Roman structure |
| Administrative area | Moers |
| Designations | part of UNESCO World Heritage Site\|Kulturdenkmal |
| UNESCO WHC id | 1631-068 |
| Wikipedia language editions | 4 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 339 elements (outline 1, road 27, building 274, waterway 3, zone 31, water 1, wall 2).

Evidence: documented 0, mapped 339, inferred 0, derived 0; heights documented 61, inferred 0, unknown 215.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1275569693 historic=ruins 60 m from ledger point
- origin moved 61 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.4317/6.67) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological site\|castrum\|ancient Roman structure; sitelinks=4; wikidata:Q723019 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 339 elements); data/traces/castrum-asciburgium-q723019.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
