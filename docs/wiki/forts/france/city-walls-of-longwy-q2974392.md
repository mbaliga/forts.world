# city walls of Longwy

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-longwy-q2974392` |
| Coordinates | 49.52404, 5.76314 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.52404/5.76314)) |
| Wikidata | [Q2974392](https://www.wikidata.org/wiki/Q2974392) (CC0) |
| Wikidata class | fort |
| Types | citadel |
| Administrative area | Longwy |
| Inception | 1679 |
| Designations | monument selected by the mission to identify immovable heritage in danger (2018)\|part of UNESCO World Heritage Site\|classified historical monument |
| UNESCO WHC id | 1283-006 |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 295 elements (outline 1, marker 2, building 889, road 290, wall 11, zone 3, retaining-wall 8).

Evidence: documented 0, mapped 295, inferred 0, derived 0; heights documented 0, inferred 0, unknown 139.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/12452831 historic=fort 155 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 889 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 290 mapped (trace size budget); minor lanes are not drawn
- origin moved 120 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.52404/5.76314) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel; sitelinks=4; wikidata:Q2974392 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 295 elements); data/traces/city-walls-of-longwy-q2974392.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
