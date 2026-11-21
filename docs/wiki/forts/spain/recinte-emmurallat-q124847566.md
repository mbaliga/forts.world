# Recinte emmurallat

> Spain · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `recinte-emmurallat-q124847566` |
| Coordinates | 41.3645, 1.7529 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.3645/1.7529)) |
| Wikidata | [Q124847566](https://www.wikidata.org/wiki/Q124847566) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Sant Cugat Sesgarrigues |
| Designations | Cultural Asset part of the cultural heritage of Catalonia |
| Wikipedia language editions | 0 |
| OSM `historic` | yes |
| OSM `website` | https://camiramaderdemarina.cat/ |

## What the model contains

Tier **T1**, status `location-only`, 59 elements (road 71, zone 1, building 18).

Evidence: documented 0, mapped 59, inferred 0, derived 0; heights documented 0, inferred 0, unknown 18.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/15557473 historic=yes Q51881900 54476 m from ledger point
- site is a route relation of 1423 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (45939 x 139262 m)
- roads capped: kept the 40 longest of 71 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.3645/1.7529) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q124847566 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 59 elements); data/traces/recinte-emmurallat-q124847566.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
