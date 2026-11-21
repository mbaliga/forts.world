# Frederiksberg Palace

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `frederiksberg-palace-q665954` |
| Coordinates | 55.67183, 12.52527 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.67183/12.52527)) |
| Wikidata | [Q665954](https://www.wikidata.org/wiki/Q665954) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Frederiksberg Municipality |
| Inception | 1738 |
| Designations | monument on Kulturstyrelsen register |
| Wikipedia language editions | 20 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 212 elements (outline 1, road 125, zone 36, building 39, water 8, waterway 1, wall 1, retaining-wall 1).

Evidence: documented 0, mapped 212, inferred 0, derived 0; heights documented 1, inferred 0, unknown 40.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/55955 historic=castle Q665954 17 m from ledger point
- origin moved 16 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.67183/12.52527) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=20; wikidata:Q665954 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 212 elements); data/traces/frederiksberg-palace-q665954.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
