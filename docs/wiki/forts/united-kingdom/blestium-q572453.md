# Blestium

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `blestium-q572453` |
| Coordinates | 51.809, -2.717 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.809/-2.717)) |
| Wikidata | [Q572453](https://www.wikidata.org/wiki/Q572453) (CC0) |
| Wikidata class | fortification |
| Types | archaeological site\|castrum |
| Administrative area | Monmouth |
| Inception | 0055 |
| Designations | National Monument of Wales |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 361 elements (outline 1, marker 9, road 85, waterway 2, building 256, zone 2, wall 5, water 1).

Evidence: documented 0, mapped 361, inferred 0, derived 0; heights documented 45, inferred 0, unknown 216.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/167782318 historic=castle Q525635 368 m from ledger point
- origin moved 368 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.809/-2.717) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological site\|castrum; sitelinks=9; wikidata:Q572453 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 361 elements); data/traces/blestium-q572453.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
