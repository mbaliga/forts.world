# Äusseres Aarbergertor

> Switzerland · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ausseres-aarbergertor-q258184` |
| Coordinates | 46.95092, 7.44068 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.95092/7.44068)) |
| Wikidata | [Q258184](https://www.wikidata.org/wiki/Q258184) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Canton of Berne |
| Wikipedia language editions | 1 |
| OSM `historic` | building |
| OSM `heritage` | 3 |
| OSM `website` | https://www.progr.ch/ |

## What the model contains

Tier **T1**, status `location-only`, 308 elements (marker 3, road 207, water 9, building 211, wall 8, retaining-wall 13, zone 3, waterway 2).

Evidence: documented 0, mapped 308, inferred 0, derived 0; heights documented 6, inferred 0, unknown 135.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/4657071 historic=building Q2112124 239 m from ledger point
- site is a site relation of 1 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (56 x 76 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 211 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 207 mapped (trace size budget); minor lanes are not drawn
- origin moved 241 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.95092/7.44068) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q258184 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 309 elements); data/traces/ausseres-aarbergertor-q258184.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
