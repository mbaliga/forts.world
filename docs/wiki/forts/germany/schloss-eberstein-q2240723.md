# Schloss Eberstein

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-eberstein-q2240723` |
| Coordinates | 48.74956, 8.3436 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.74956/8.3436)) |
| Wikidata | [Q2240723](https://www.wikidata.org/wiki/Q2240723) (CC0) |
| Wikidata class | castle |
| Types | restaurant\|vineyard\|château\|spur castle |
| Administrative area | Gernsbach |
| Designations | cultural heritage monument of special significance in Baden-Württemberg |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `location-only`, 105 elements (marker 1, road 67, waterway 2, building 20, wall 7, retaining-wall 5, zone 2, cliff 1).

Evidence: documented 0, mapped 105, inferred 0, derived 0; heights documented 1, inferred 0, unknown 31.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2832381 historic=castle Q2240723 25 m from ledger point
- site is a site relation of 13 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (88 x 54 m)
- origin moved 27 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.74956/8.3436) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; restaurant\|vineyard\|château\|spur castle; sitelinks=4; wikidata:Q2240723 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 110 elements); data/traces/schloss-eberstein-q2240723.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
