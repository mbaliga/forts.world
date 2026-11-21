# Burg Eselsberg

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-eselsberg-q20815295` |
| Coordinates | 48.97481, 8.9595 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.97481/8.9595)) |
| Wikidata | [Q20815295](https://www.wikidata.org/wiki/Q20815295) (CC0) |
| Wikidata class | castle |
| Types | abandoned village\|deserted castle site |
| Administrative area | Vaihingen an der Enz |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `location-only`, 79 elements (marker 1, road 57, waterway 11, water 1, building 5, retaining-wall 1, zone 3).

Evidence: documented 0, mapped 79, inferred 0, derived 0; heights documented 3, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3446252 historic=castle Q20815295 14 m from ledger point
- site is a site relation of 6 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (198 x 140 m)
- origin moved 24 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.97481/8.9595) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; abandoned village\|deserted castle site; sitelinks=2; wikidata:Q20815295 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 79 elements); data/traces/burg-eselsberg-q20815295.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
