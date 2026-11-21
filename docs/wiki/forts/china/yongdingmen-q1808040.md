# Yongdingmen

> China · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `yongdingmen-q1808040` |
| Coordinates | 39.87097, 116.393 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.87097/116.393)) |
| Wikidata | [Q1808040](https://www.wikidata.org/wiki/Q1808040) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|architectural landmark |
| Wikipedia language editions | 15 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 50 elements (outline 1, zone 2, road 10, wall 3, building 34).

Evidence: documented 0, mapped 50, inferred 0, derived 0; heights documented 0, inferred 0, unknown 37.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/43925069 historic=yes 631 m from ledger point
- origin moved 631 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.87097/116.393) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|architectural landmark; sitelinks=15; wikidata:Q1808040 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 50 elements); data/traces/yongdingmen-q1808040.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/china.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
