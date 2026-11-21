# Gefechtsturm Arenbergpark

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gefechtsturm-arenbergpark-q60658830` |
| Coordinates | 48.19867, 16.39285 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.19867/16.39285)) |
| Wikidata | [Q60658830](https://www.wikidata.org/wiki/Q60658830) (CC0) |
| Wikidata class | fortification |
| Types | flak tower\|high-rise bunker |
| Administrative area | Landstraße |
| Inception | 1943 |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 304 elements (outline 1, road 261, building 106, waterway 1, zone 28, retaining-wall 3, wall 15).

Evidence: documented 0, mapped 304, inferred 0, derived 0; heights documented 84, inferred 0, unknown 40.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/34293896 historic=castle Q15830511 397 m from ledger point
- roads capped: kept the 150 longest of 261 mapped (trace size budget); minor lanes are not drawn
- origin moved 397 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.19867/16.39285) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; flak tower\|high-rise bunker; sitelinks=1; wikidata:Q60658830 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 304 elements); data/traces/gefechtsturm-arenbergpark-q60658830.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
