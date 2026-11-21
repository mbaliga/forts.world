# Windeck Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `windeck-castle-q1014623` |
| Coordinates | 49.5461, 8.67722 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.5461/8.67722)) |
| Wikidata | [Q1014623](https://www.wikidata.org/wiki/Q1014623) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Weinheim |
| Inception | 1110 |
| Designations | cultural heritage monument in Baden-Württemberg |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 112 elements (outline 1, marker 1, road 55, building 39, wall 14, waterway 2).

Evidence: documented 0, mapped 112, inferred 0, derived 0; heights documented 6, inferred 0, unknown 47.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/326732268 historic=castle Q1014623 27 m from ledger point
- origin moved 28 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.5461/8.67722) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=6; wikidata:Q1014623 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 112 elements); data/traces/windeck-castle-q1014623.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
