# Castillo de La Calahorra

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-la-calahorra-q1049198` |
| Coordinates | 37.18334, -3.06541 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.18334/-3.06541)) |
| Wikidata | [Q1049198](https://www.wikidata.org/wiki/Q1049198) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | La Calahorra |
| Inception | 1500 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://elcastillodelacalahorra.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 255 elements (outline 1, road 48, wall 2, waterway 1, building 202, zone 1).

Evidence: documented 0, mapped 255, inferred 0, derived 0; heights documented 199, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/21638987 historic=castle Q1049198 16 m from ledger point
- origin moved 16 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.18334/-3.06541) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=13; wikidata:Q1049198 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 255 elements); data/traces/castillo-de-la-calahorra-q1049198.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
