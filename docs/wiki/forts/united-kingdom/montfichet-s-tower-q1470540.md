# Montfichet's Tower

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `montfichet-s-tower-q1470540` |
| Coordinates | 51.5136, -0.10139 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.5136/-0.10139)) |
| Wikidata | [Q1470540](https://www.wikidata.org/wiki/Q1470540) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Wikipedia language editions | 5 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `location-only`, 381 elements (marker 48, road 2205, building 440, wall 139, zone 31, waterway 6, retaining-wall 12, water 5).

Evidence: documented 0, mapped 381, inferred 0, derived 0; heights documented 75, inferred 0, unknown 136.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/10164871 historic=citywalls Q60308 752 m from ledger point
- site is a site relation of 22 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (1832 x 1208 m)
- present-day buildings capped: kept the 60 nearest the outline centre of 440 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 2205 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.5136/-0.10139) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q1470540 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 312 elements); data/traces/montfichet-s-tower-q1470540.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
