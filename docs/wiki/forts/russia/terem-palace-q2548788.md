# Terem Palace

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `terem-palace-q2548788` |
| Coordinates | 55.75058, 37.61563 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.75058/37.61563)) |
| Wikidata | [Q2548788](https://www.wikidata.org/wiki/Q2548788) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|building\|architectural landmark |
| Administrative area | Tverskoy District |
| Inception | 1635 |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 25 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 381 elements (outline 1, marker 8, road 316, building 19, waterway 2, retaining-wall 2, wall 13, zone 20).

Evidence: documented 0, mapped 381, inferred 0, derived 0; heights documented 16, inferred 0, unknown 18.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/225033 historic=castle Q1370087 14 m from ledger point
- origin moved 21 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.75058/37.61563) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|building\|architectural landmark; sitelinks=25; wikidata:Q2548788 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 381 elements); data/traces/terem-palace-q2548788.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
