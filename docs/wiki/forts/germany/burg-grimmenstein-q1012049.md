# Burg Grimmenstein

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-grimmenstein-q1012049` |
| Coordinates | 50.9458, 10.7044 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.9458/10.7044)) |
| Wikidata | [Q1012049](https://www.wikidata.org/wiki/Q1012049) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Gotha |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline-only`, 363 elements (outline 1, marker 8, road 204, building 110, waterway 12, zone 69, water 4, retaining-wall 9).

Evidence: documented 0, mapped 363, inferred 0, derived 0; heights documented 68, inferred 0, unknown 51.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/27111 historic=castle Q875568 5 m from ledger point
- roads capped: kept the 150 longest of 204 mapped (trace size budget); minor lanes are not drawn
- origin moved 15 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.9458/10.7044) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q1012049 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 363 elements); data/traces/burg-grimmenstein-q1012049.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
