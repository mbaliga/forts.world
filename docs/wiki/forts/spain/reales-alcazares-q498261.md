# Reales Alcázares

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `reales-alcazares-q498261` |
| Coordinates | 37.38443, -5.99119 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.38443/-5.99119)) |
| Wikidata | [Q498261](https://www.wikidata.org/wiki/Q498261) (CC0) |
| Wikidata class | castle |
| Types | palace\|alcázar\|grave\|hydraulic structure |
| Administrative area | Seville |
| Inception | 1364 |
| Designations | part of UNESCO World Heritage Site\|bien de interés cultural |
| UNESCO WHC id | 383bis-002 |
| Wikipedia language editions | 46 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 342 elements (outline 1, marker 12, road 240, zone 16, water 13, building 289, wall 29, waterway 1).

Evidence: documented 0, mapped 342, inferred 0, derived 0; heights documented 45, inferred 0, unknown 104.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/444313067 historic=citywalls 39 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 289 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 240 mapped (trace size budget); minor lanes are not drawn
- origin moved 39 m from the ledger point to the outline centroid
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.38443/-5.99119) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; palace\|alcázar\|grave\|hydraulic structure; sitelinks=46; wikidata:Q498261 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 342 elements); data/traces/reales-alcazares-q498261.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
