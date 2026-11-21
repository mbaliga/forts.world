# Eresburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `eresburg-q1350036` |
| Coordinates | 51.4503, 8.85278 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.4503/8.85278)) |
| Wikidata | [Q1350036](https://www.wikidata.org/wiki/Q1350036) (CC0) |
| Wikidata class | fort |
| Types | hillfort |
| Administrative area | Marsberg |
| Wikipedia language editions | 7 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 170 elements (outline 1, marker 2, road 44, waterway 1, building 382, zone 2).

Evidence: documented 0, mapped 170, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/249822902 historic=yes 159 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 382 mapped (trace size budget); the rest of the town is not drawn
- origin moved 159 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.4503/8.85278) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; hillfort; sitelinks=7; wikidata:Q1350036 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 170 elements); data/traces/eresburg-q1350036.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
