# Peñafiel Castle

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `penafiel-castle-q1013495` |
| Coordinates | 41.59667, -4.11431 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.59667/-4.11431)) |
| Wikidata | [Q1013495](https://www.wikidata.org/wiki/Q1013495) (CC0) |
| Wikidata class | castle |
| Types | castle\|monument |
| Administrative area | Peñafiel |
| Designations | bien de interés cultural |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 83 elements (outline 1, waterway 1, wall 10, road 42, building 21, retaining-wall 2, water 2, zone 4).

Evidence: documented 0, mapped 83, inferred 0, derived 0; heights documented 1, inferred 0, unknown 32.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/11784401 historic=castle Q1013495 8 m from ledger point
- origin moved 8 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.59667/-4.11431) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|monument; sitelinks=13; wikidata:Q1013495 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 83 elements); data/traces/penafiel-castle-q1013495.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
