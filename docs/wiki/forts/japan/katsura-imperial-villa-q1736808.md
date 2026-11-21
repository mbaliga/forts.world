# Katsura Imperial Villa

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `katsura-imperial-villa-q1736808` |
| Coordinates | 34.98406, 135.7102 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.98406/135.7102)) |
| Wikidata | [Q1736808](https://www.wikidata.org/wiki/Q1736808) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|detached palace\|royal villa\|Japanese Imperial Facilities |
| Administrative area | Nishikyō Ward |
| Inception | 1616 |
| Designations | Important Cultural Property of Japan |
| Wikipedia language editions | 18 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline-only`, 320 elements (outline 1, road 161, waterway 25, building 550, zone 24).

Evidence: documented 0, mapped 320, inferred 0, derived 0; heights documented 10, inferred 0, unknown 110.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1230302126 historic=castle Q1736808 23 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 550 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 161 mapped (trace size budget); minor lanes are not drawn
- origin moved 23 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.98406/135.7102) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|detached palace\|royal villa\|Japanese Imperial Facilities; sitelinks=18; wikidata:Q1736808 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 320 elements); data/traces/katsura-imperial-villa-q1736808.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
