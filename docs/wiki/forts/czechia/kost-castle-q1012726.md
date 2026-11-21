# Kost Castle

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kost-castle-q1012726` |
| Coordinates | 50.49028, 15.135 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.49028/15.135)) |
| Wikidata | [Q1012726](https://www.wikidata.org/wiki/Q1012726) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Podkost |
| Inception | 1300 |
| Designations | national cultural monument of the Czech Republic |
| Wikipedia language editions | 17 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 128 elements (outline 1, marker 4, road 46, zone 5, water 2, building 33, wall 11, waterway 9, cliff 13, retaining-wall 4).

Evidence: documented 0, mapped 128, inferred 0, derived 0; heights documented 3, inferred 0, unknown 45.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13795155 historic=castle Q1012726 14 m from ledger point
- origin moved 14 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.49028/15.135) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=17; wikidata:Q1012726 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 128 elements); data/traces/kost-castle-q1012726.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
