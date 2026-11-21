# Jiayuguan

> China · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `jiayuguan-q1193122` |
| Coordinates | 39.80219, 98.21738 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.80219/98.21738)) |
| Wikidata | [Q1193122](https://www.wikidata.org/wiki/Q1193122) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|mountain pass\|Chinese AAAAA-rated tourist attraction\|cultural heritage of China |
| Administrative area | Jiayuguan City |
| Designations | part of UNESCO World Heritage Site\|Major Historical and Cultural Site Protected at the National Level |
| UNESCO WHC id | 438-003 |
| Wikipedia language editions | 29 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 118 elements (outline 1, marker 1, road 65, wall 21, building 29, zone 1).

Evidence: documented 0, mapped 118, inferred 0, derived 0; heights documented 1, inferred 0, unknown 49.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/98947100 historic=castle Q1193122 31 m from ledger point
- origin moved 34 m from the ledger point to the outline centroid
- 74 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.80219/98.21738) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|mountain pass\|Chinese AAAAA-rated tourist attraction\|cultural heritage of China; sitelinks=29; wikidata:Q1193122 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 118 elements); data/traces/jiayuguan-q1193122.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/china.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
