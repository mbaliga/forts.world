# Harliburg

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `harliburg-q1585519` |
| Coordinates | 51.96, 10.5719 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.96/10.5719)) |
| Wikidata | [Q1585519](https://www.wikidata.org/wiki/Q1585519) (CC0) |
| Wikidata class | castle |
| Types | castle\|deserted castle site |
| Administrative area | Vienenburg |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `location-only`, 183 elements (marker 1, road 107, water 2, zone 10, building 60, waterway 3).

Evidence: documented 0, mapped 183, inferred 0, derived 0; heights documented 2, inferred 0, unknown 58.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13573308 historic=yes Q803398 7697 m from ledger point
- site is a route relation of 27 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (16042 x 3547 m)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.96/10.5719) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|deserted castle site; sitelinks=3; wikidata:Q1585519 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 183 elements); data/traces/harliburg-q1585519.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
