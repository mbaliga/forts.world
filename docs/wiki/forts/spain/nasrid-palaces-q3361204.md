# Nasrid palaces

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nasrid-palaces-q3361204` |
| Coordinates | 37.17726, -3.58966 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.17726/-3.58966)) |
| Wikidata | [Q3361204](https://www.wikidata.org/wiki/Q3361204) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|architectural ensemble |
| Administrative area | Granada |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 391 elements (outline 1, marker 11, road 327, building 114, water 10, wall 22, zone 64, waterway 9, retaining-wall 8, cliff 2).

Evidence: documented 0, mapped 391, inferred 0, derived 0; heights documented 79, inferred 0, unknown 65.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/279110939 historic=castle Q3361204 9 m from ledger point
- roads capped: kept the 150 longest of 327 mapped (trace size budget); minor lanes are not drawn
- origin moved 10 m from the ledger point to the outline centroid
- 15 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.17726/-3.58966) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|architectural ensemble; sitelinks=4; wikidata:Q3361204 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 391 elements); data/traces/nasrid-palaces-q3361204.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
