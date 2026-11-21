# City walls of Laon

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-laon-q20706506` |
| Coordinates | 49.5564, 3.61694 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.5564/3.61694)) |
| Wikidata | [Q20706506](https://www.wikidata.org/wiki/Q20706506) (CC0) |
| Wikidata class | fortification |
| Types | rampart |
| Administrative area | Laon |
| Designations | monument historique inscrit |
| Wikipedia language editions | 3 |
| OSM `historic` | citywalls |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `location-only`, 301 elements (marker 1, road 160, building 352, water 2, wall 6, zone 18, retaining-wall 4).

Evidence: documented 0, mapped 301, inferred 0, derived 0; heights documented 2, inferred 0, unknown 128.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3997971 historic=citywalls Q20706506 815 m from ledger point
- site is a site relation of 16 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (2103 x 1202 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 352 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 160 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.5564/3.61694) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; rampart; sitelinks=3; wikidata:Q20706506 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 301 elements); data/traces/city-walls-of-laon-q20706506.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
