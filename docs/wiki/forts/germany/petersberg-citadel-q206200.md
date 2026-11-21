# Petersberg Citadel

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `petersberg-citadel-q206200` |
| Coordinates | 50.9786, 11.0183 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.9786/11.0183)) |
| Wikidata | [Q206200](https://www.wikidata.org/wiki/Q206200) (CC0) |
| Wikidata class | fort |
| Types | citadel |
| Administrative area | Erfurt |
| Inception | 1665 |
| Designations | Heritage monument in Thuringia |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | citadel |
| OSM `heritage` | 4 |
| OSM `description` | Historische Ausdehnung der Festungsanlage nach einer Planzeichnung von 1868. |

## What the model contains

Tier **T1**, status `outline+walls`, 362 elements (outline 1, marker 17, road 846, zone 73, building 583, water 2, waterway 6, wall 77, retaining-wall 87, cliff 1).

Evidence: documented 0, mapped 362, inferred 0, derived 0; heights documented 79, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/28468056 historic=castle Q206200 54 m from ledger point
- pruned to the outline plus 150 m: 1693 -> 1228 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 303 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 703 mapped (trace size budget); minor lanes are not drawn
- origin moved 51 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.9786/11.0183) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel; sitelinks=10; wikidata:Q206200 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 362 elements); data/traces/petersberg-citadel-q206200.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
