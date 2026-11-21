# Mateus Palace

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mateus-palace-q1410441` |
| Coordinates | 41.29684, -7.71248 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.29684/-7.71248)) |
| Wikidata | [Q1410441](https://www.wikidata.org/wiki/Q1410441) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|cultural heritage |
| Administrative area | Mateus |
| Inception | 1745 |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |
| OSM `website` | https://www.casademateus.pt/ |

## What the model contains

Tier **T1**, status `outline+walls`, 186 elements (outline 1, marker 11, road 69, wall 37, building 59, waterway 1, zone 8).

Evidence: documented 0, mapped 186, inferred 0, derived 0; heights documented 0, inferred 0, unknown 96.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2001027 historic=castle Q1410441 5 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.29684/-7.71248) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|cultural heritage; sitelinks=13; wikidata:Q1410441 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 186 elements); data/traces/mateus-palace-q1410441.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
