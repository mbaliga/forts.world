# Zwingergraben

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `zwingergraben-q112874932` |
| Coordinates | 51.05303, 13.73237 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.05303/13.73237)) |
| Wikidata | [Q112874932](https://www.wikidata.org/wiki/Q112874932) (CC0) |
| Wikidata class | fortification |
| Types | moat\|artificial pond |
| Administrative area | Dresden |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 329 elements (outline 1, marker 8, road 445, waterway 1, water 8, building 46, zone 51, wall 33, retaining-wall 31).

Evidence: documented 0, mapped 329, inferred 0, derived 0; heights documented 36, inferred 0, unknown 74.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/4283218 historic=castle Q155107 121 m from ledger point
- roads capped: kept the 150 longest of 445 mapped (trace size budget); minor lanes are not drawn
- origin moved 136 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.05303/13.73237) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; moat\|artificial pond; sitelinks=2; wikidata:Q112874932 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 329 elements); data/traces/zwingergraben-q112874932.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
