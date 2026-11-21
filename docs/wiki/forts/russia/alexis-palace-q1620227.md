# Alexis Palace

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `alexis-palace-q1620227` |
| Coordinates | 59.92805, 30.28343 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.92805/30.28343)) |
| Wikidata | [Q1620227](https://www.wikidata.org/wiki/Q1620227) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|music venue |
| Administrative area | Saint Petersburg |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://www.spdm.ru/alekseevskiy-dvorec |

## What the model contains

Tier **T1**, status `outline+walls`, 321 elements (outline 1, marker 2, waterway 6, road 190, retaining-wall 14, building 61, wall 20, zone 27).

Evidence: documented 0, mapped 321, inferred 0, derived 0; heights documented 26, inferred 0, unknown 69.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/99698297 historic=castle Q1620227 14 m from ledger point
- origin moved 14 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.92805/30.28343) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|music venue; sitelinks=9; wikidata:Q1620227 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 321 elements); data/traces/alexis-palace-q1620227.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
