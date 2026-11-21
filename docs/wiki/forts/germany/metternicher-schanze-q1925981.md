# Metternicher Schanze

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `metternicher-schanze-q1925981` |
| Coordinates | 50.3725, 7.5864 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.3725/7.5864)) |
| Wikidata | [Q1925981](https://www.wikidata.org/wiki/Q1925981) (CC0) |
| Wikidata class | fortification |
| Types | sconce |
| Administrative area | Rhineland-Palatinate |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | https://www.feste-franz.org/ |

## What the model contains

Tier **T1**, status `location-only`, 336 elements (road 293, building 212, zone 37, wall 17, retaining-wall 12).

Evidence: documented 0, mapped 336, inferred 0, derived 0; heights documented 24, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20463945 historic=castle Q1408444 428 m from ledger point
- site is a site relation of 17 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (249 x 343 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 212 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 293 mapped (trace size budget); minor lanes are not drawn
- origin moved 404 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.3725/7.5864) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; sconce; sitelinks=1; wikidata:Q1925981 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 336 elements); data/traces/metternicher-schanze-q1925981.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
