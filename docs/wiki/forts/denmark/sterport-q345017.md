# Østerport

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sterport-q345017` |
| Coordinates | 55.6806, 12.5858 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.6806/12.5858)) |
| Wikidata | [Q345017](https://www.wikidata.org/wiki/Q345017) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|destroyed building or structure |
| Administrative area | Copenhagen Municipality |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 337 elements (outline 1, marker 19, road 194, building 249, zone 8, wall 21, water 6, retaining-wall 11, coastline 1).

Evidence: documented 0, mapped 337, inferred 0, derived 1; heights documented 41, inferred 0, unknown 111.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/378106484 historic=castle Q211053 587 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 249 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 194 mapped (trace size budget); minor lanes are not drawn
- origin moved 585 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":819,"medianInside":7.4,"medianOutside":4.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.6806/12.5858) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|destroyed building or structure; sitelinks=4; wikidata:Q345017 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 337 elements); data/traces/sterport-q345017.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
