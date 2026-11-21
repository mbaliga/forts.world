# Yverdon-les-Bains Castle

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `yverdon-les-bains-castle-q683081` |
| Coordinates | 46.77823, 6.64153 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.77823/6.64153)) |
| Wikidata | [Q683081](https://www.wikidata.org/wiki/Q683081) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Yverdon-les-Bains |
| Inception | 1260 |
| Designations | class A Swiss cultural property of national significance |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://chateau.yverdon.ch/ |

## What the model contains

Tier **T1**, status `outline+walls`, 370 elements (outline 1, marker 1, road 324, waterway 4, water 2, building 337, zone 70, wall 17, retaining-wall 5).

Evidence: documented 0, mapped 370, inferred 0, derived 0; heights documented 51, inferred 0, unknown 91.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1167735 historic=castle Q683081 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 337 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 324 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.77823/6.64153) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=9; wikidata:Q683081 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 370 elements); data/traces/yverdon-les-bains-castle-q683081.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
