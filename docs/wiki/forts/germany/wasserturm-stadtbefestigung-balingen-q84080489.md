# Wasserturm Stadtbefestigung Balingen

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wasserturm-stadtbefestigung-balingen-q84080489` |
| Coordinates | 48.27094, 8.85156 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.27094/8.85156)) |
| Wikidata | [Q84080489](https://www.wikidata.org/wiki/Q84080489) (CC0) |
| Wikidata class | fort |
| Types | fortified tower\|city fortifications |
| Administrative area | Balingen |
| Designations | cultural heritage monument in Baden-Württemberg |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 309 elements (outline 1, road 200, waterway 10, building 277, water 1, zone 14, wall 13).

Evidence: documented 0, mapped 309, inferred 0, derived 0; heights documented 6, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/135713650 historic=castle Q218621 20 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 277 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 200 mapped (trace size budget); minor lanes are not drawn
- origin moved 19 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.27094/8.85156) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower\|city fortifications; sitelinks=2; wikidata:Q84080489 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 309 elements); data/traces/wasserturm-stadtbefestigung-balingen-q84080489.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
