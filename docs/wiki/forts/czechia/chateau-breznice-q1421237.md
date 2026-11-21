# Chateau Březnice

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-breznice-q1421237` |
| Coordinates | 49.55755, 13.95606 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.55755/13.95606)) |
| Wikidata | [Q1421237](https://www.wikidata.org/wiki/Q1421237) (CC0) |
| Wikidata class | castle |
| Types | castle\|château\|fortified house |
| Inception | 1300 |
| Designations | national cultural monument of the Czech Republic\|cultural monument of the Czech Republic |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `website` | https://www.zamek-breznice.cz/ |

## What the model contains

Tier **T1**, status `outline+walls`, 206 elements (outline 1, marker 11, road 57, water 5, building 117, wall 4, waterway 11).

Evidence: documented 0, mapped 206, inferred 0, derived 0; heights documented 49, inferred 0, unknown 72.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1624979 historic=castle Q1421237 10 m from ledger point
- origin moved 15 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.55755/13.95606) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château\|fortified house; sitelinks=8; wikidata:Q1421237 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 206 elements); data/traces/chateau-breznice-q1421237.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
