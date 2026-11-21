# London Wall

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `london-wall-q60308` |
| Coordinates | 51.5175, -0.09694 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.5175/-0.09694)) |
| Wikidata | [Q60308](https://www.wikidata.org/wiki/Q60308) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | City of London |
| Wikipedia language editions | 34 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `location-only`, 380 elements (marker 64, road 2378, building 681, water 6, wall 182, zone 32, retaining-wall 56, waterway 20).

Evidence: documented 0, mapped 380, inferred 0, derived 0; heights documented 34, inferred 0, unknown 207.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/10164871 historic=citywalls Q60308 441 m from ledger point
- site is a site relation of 22 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (1832 x 1208 m)
- present-day buildings capped: kept the 30 nearest the outline centre of 681 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 40 longest of 2378 mapped (trace size budget); minor lanes are not drawn
- elements capped: kept the 380 nearest the ledger point of 430 mapped (trace size budget); the rest are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.5175/-0.09694) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=34; wikidata:Q60308 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 366 elements); data/traces/london-wall-q60308.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
