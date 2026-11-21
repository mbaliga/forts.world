# Muralla de Santiago de Compostela

> Spain · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `muralla-de-santiago-de-compostela-q2513091` |
| Coordinates | 42.88083, -8.54444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.88083/-8.54444)) |
| Wikidata | [Q2513091](https://www.wikidata.org/wiki/Q2513091) (CC0) |
| Wikidata class | fort |
| Types | fortification\|city walls |
| Administrative area | Santiago de Compostela |
| Inception | 1100 |
| Wikipedia language editions | 5 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `location-only`, 371 elements (marker 55, road 1048, building 1701, zone 45, waterway 8, wall 150, retaining-wall 40, water 3).

Evidence: documented 0, mapped 371, inferred 0, derived 0; heights documented 33, inferred 0, unknown 187.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/21535639 historic=citywalls Q2513091 235 m from ledger point
- site is a site relation of 18 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (496 x 702 m)
- present-day buildings capped: kept the 30 nearest the outline centre of 1701 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 40 longest of 1048 mapped (trace size budget); minor lanes are not drawn
- origin moved 119 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.88083/-8.54444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|city walls; sitelinks=5; wikidata:Q2513091 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 309 elements); data/traces/muralla-de-santiago-de-compostela-q2513091.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
