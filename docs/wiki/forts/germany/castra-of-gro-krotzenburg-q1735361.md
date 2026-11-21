# Castra of Großkrotzenburg

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castra-of-gro-krotzenburg-q1735361` |
| Coordinates | 50.07986, 8.97988 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.07986/8.97988)) |
| Wikidata | [Q1735361](https://www.wikidata.org/wiki/Q1735361) (CC0) |
| Wikidata class | fortification |
| Types | castrum\|built structure\|archaeological site\|ancient Roman structure |
| Administrative area | Großkrotzenburg |
| Designations | cultural heritage monument in Hesse |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `location-only`, 269 elements (marker 61, road 75, building 943, zone 7, water 2, wall 3, waterway 1).

Evidence: documented 0, mapped 269, inferred 0, derived 0; heights documented 0, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7920089 historic=yes 68 m from ledger point
- site is a site relation of 10 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (258 x 188 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 943 mapped (trace size budget); the rest of the town is not drawn
- origin moved 75 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.07986/8.97988) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum\|built structure\|archaeological site\|ancient Roman structure; sitelinks=3; wikidata:Q1735361 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 269 elements); data/traces/castra-of-gro-krotzenburg-q1735361.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
