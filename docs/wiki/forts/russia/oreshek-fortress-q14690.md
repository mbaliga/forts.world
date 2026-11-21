# Oreshek Fortress

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `oreshek-fortress-q14690` |
| Coordinates | 59.95383, 31.03887 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.95383/31.03887)) |
| Wikidata | [Q14690](https://www.wikidata.org/wiki/Q14690) (CC0) |
| Wikidata class | fort |
| Types | fortress\|fixed construction\|architectural landmark |
| Administrative area | Shlisselburg |
| Inception | 1323 |
| Designations | part of UNESCO World Heritage Site\|federal cultural heritage site in Russia |
| UNESCO WHC id | 540-005 |
| Wikipedia language editions | 20 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | http://museum.ru/M255 |

## What the model contains

Tier **T1**, status `outline+walls`, 116 elements (outline 1, marker 14, building 26, road 62, waterway 7, wall 3, zone 3).

Evidence: documented 0, mapped 116, inferred 0, derived 0; heights documented 0, inferred 0, unknown 29.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1732012 historic=castle 31 m from ledger point
- origin moved 32 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.95383/31.03887) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|fixed construction\|architectural landmark; sitelinks=20; wikidata:Q14690 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 116 elements); data/traces/oreshek-fortress-q14690.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
