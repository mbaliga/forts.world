# Nyon Castle

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nyon-castle-q1094121` |
| Coordinates | 46.382, 6.24066 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.382/6.24066)) |
| Wikidata | [Q1094121](https://www.wikidata.org/wiki/Q1094121) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Nyon |
| Designations | class A Swiss cultural property of national significance |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `website` | https://www.chateaudenyon.ch/ |

## What the model contains

Tier **T1**, status `outline+walls`, 264 elements (outline 1, marker 1, road 135, zone 1, building 326, wall 6).

Evidence: documented 0, mapped 264, inferred 0, derived 0; heights documented 119, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6895149 historic=castle Q1094121 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 326 mapped (trace size budget); the rest of the town is not drawn
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.382/6.24066) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=7; wikidata:Q1094121 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 264 elements); data/traces/nyon-castle-q1094121.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
