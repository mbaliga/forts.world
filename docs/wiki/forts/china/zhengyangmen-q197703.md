# Zhengyangmen

> China · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `zhengyangmen-q197703` |
| Coordinates | 39.89925, 116.39167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.89925/116.39167)) |
| Wikidata | [Q197703](https://www.wikidata.org/wiki/Q197703) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Dongcheng District |
| Designations | Major Historical and Cultural Site Protected at the National Level |
| Wikipedia language editions | 23 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 259 elements (outline 1, road 74, building 170, waterway 8, wall 1, water 4, zone 1).

Evidence: documented 0, mapped 259, inferred 0, derived 0; heights documented 5, inferred 0, unknown 166.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/687863871 historic=castle 1113 m from ledger point
- origin moved 1122 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.89925/116.39167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=23; wikidata:Q197703 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 259 elements); data/traces/zhengyangmen-q197703.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/china.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
