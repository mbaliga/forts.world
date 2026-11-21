# Brady's Castle

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `brady-s-castle-q116732897` |
| Coordinates | 52.52519, -7.13786 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.52519/-7.13786)) |
| Wikidata | [Q116732897](https://www.wikidata.org/wiki/Q116732897) (CC0) |
| Wikidata class | fortification |
| Types | tower house |
| Administrative area | County Kilkenny |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | towerhouse |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 331 elements (outline 1, marker 4, road 129, building 239, zone 8, waterway 11, wall 58).

Evidence: documented 0, mapped 331, inferred 0, derived 0; heights documented 60, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/697576265 historic=castle Q116732897 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 239 mapped (trace size budget); the rest of the town is not drawn
- origin moved 1 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.52519/-7.13786) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house; sitelinks=1; wikidata:Q116732897 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 331 elements); data/traces/brady-s-castle-q116732897.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
