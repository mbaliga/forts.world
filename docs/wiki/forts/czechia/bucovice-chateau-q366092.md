# Bučovice Chateau

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bucovice-chateau-q366092` |
| Coordinates | 49.14922, 17.00128 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.14922/17.00128)) |
| Wikidata | [Q366092](https://www.wikidata.org/wiki/Q366092) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Inception | 1575 |
| Designations | national cultural monument of the Czech Republic |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `website` | https://www.zamek-bucovice.cz/ |

## What the model contains

Tier **T1**, status `outline+walls`, 269 elements (outline 1, marker 2, road 130, water 2, zone 13, building 111, waterway 1, wall 9).

Evidence: documented 0, mapped 269, inferred 0, derived 0; heights documented 86, inferred 0, unknown 34.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/452883 historic=castle Q366092 3 m from ledger point
- origin moved 7 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.14922/17.00128) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=6; wikidata:Q366092 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 269 elements); data/traces/bucovice-chateau-q366092.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
