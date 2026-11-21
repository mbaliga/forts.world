# Eppingen Lines

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `eppingen-lines-q1347604` |
| Coordinates | 48.9044, 8.7825 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.9044/8.7825)) |
| Wikidata | [Q1347604](https://www.wikidata.org/wiki/Q1347604) (CC0) |
| Wikidata class | fortification |
| Types | defense line |
| Administrative area | Baden-Württemberg |
| Inception | 1695 |
| Wikipedia language editions | 3 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `location-only`, 269 elements (marker 8, road 84, retaining-wall 3, waterway 4, building 168, zone 2).

Evidence: documented 0, mapped 269, inferred 0, derived 0; heights documented 0, inferred 0, unknown 171.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/122481 historic=archaeological_site 12499 m from ledger point
- site is a collection relation of 92 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (15175 x 29706 m)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.9044/8.7825) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defense line; sitelinks=3; wikidata:Q1347604 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 269 elements); data/traces/eppingen-lines-q1347604.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
