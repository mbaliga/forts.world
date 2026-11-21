# Castra Napoca

> Romania · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castra-napoca-q2368758` |
| Coordinates | 46.7667, 23.5833 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.7667/23.5833)) |
| Wikidata | [Q2368758](https://www.wikidata.org/wiki/Q2368758) (CC0) |
| Wikidata class | fortification |
| Types | castrum\|ancient Roman structure |
| Designations | Historic Monument |
| Wikipedia language editions | 5 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `location-only`, 323 elements (marker 17, road 547, building 691, waterway 4, zone 20, wall 12).

Evidence: documented 0, mapped 323, inferred 0, derived 0; heights documented 11, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20281676 historic=citywalls 657 m from ledger point
- site is a site relation of 10 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (936 x 442 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 691 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 547 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.7667/23.5833) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum\|ancient Roman structure; sitelinks=5; wikidata:Q2368758 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 299 elements); data/traces/castra-napoca-q2368758.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/romania.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
