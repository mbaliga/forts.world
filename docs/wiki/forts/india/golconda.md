# Golconda

> India · Telangana · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `golconda` |
| Coordinates | 17.383, 78.401 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/17.383/78.401)) |
| Wikidata | [Q4141623](https://www.wikidata.org/wiki/Q4141623) (CC0) |
| Programme catalogue | confidence high, significance rank 271; sources catalogue:golconda;wikidata:Q17986822;smith-newton:r54 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 283 elements (outline 1, wall 5, road 158, cliff 1, zone 3, building 666, water 3).

Evidence: documented 0, mapped 283, inferred 0, derived 0; heights documented 0, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/9128913 historic=fort Q4141623 129 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 666 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 158 mapped (trace size budget); minor lanes are not drawn
- origin moved 129 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/17.383/78.401) | 2026-11-14 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-14 |

## Ledger note

2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 283 elements); data/traces/golconda.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
