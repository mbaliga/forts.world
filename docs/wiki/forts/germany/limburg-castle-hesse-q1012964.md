# Limburg Castle (Hesse)

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `limburg-castle-hesse-q1012964` |
| Coordinates | 50.3883, 8.0677 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.3883/8.0677)) |
| Wikidata | [Q1012964](https://www.wikidata.org/wiki/Q1012964) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Limburg an der Lahn |
| Designations | cultural heritage monument in Hesse |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 285 elements (outline 1, marker 2, road 124, waterway 11, building 273, zone 7, retaining-wall 2, wall 13, cliff 1, water 4).

Evidence: documented 0, mapped 285, inferred 0, derived 0; heights documented 33, inferred 0, unknown 102.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/23960704 historic=castle Q1012964 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 273 mapped (trace size budget); the rest of the town is not drawn
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.3883/8.0677) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q1012964 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 285 elements); data/traces/limburg-castle-hesse-q1012964.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
