# Peníscola city walls

> Spain · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `peniscola-city-walls-q117215655` |
| Coordinates | 40.35848, 0.40588 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.35848/0.40588)) |
| Wikidata | [Q117215655](https://www.wikidata.org/wiki/Q117215655) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Peníscola |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `location-only`, 320 elements (marker 6, coastline 4, road 266, water 6, building 365, wall 26, zone 3, cliff 3, retaining-wall 2).

Evidence: documented 0, mapped 320, inferred 0, derived 3; heights documented 1, inferred 0, unknown 147.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/21942718 historic=citywalls 85 m from ledger point
- site is a site relation of 23 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (227 x 387 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 365 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 266 mapped (trace size budget); minor lanes are not drawn
- origin moved 99 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":7,"medianInside":0,"medianOutside":0}
- sea-1: DEM check failed {"cells":104,"medianInside":0,"medianOutside":0}
- sea-2: DEM check ok {"cells":644,"medianInside":0,"medianOutside":4.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.35848/0.40588) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q117215655 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 302 elements); data/traces/peniscola-city-walls-q117215655.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
