# Ripalda street air raid shelter

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ripalda-street-air-raid-shelter-q90700974` |
| Coordinates | 39.47833, -0.38 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.47833/-0.38)) |
| Wikidata | [Q90700974](https://www.wikidata.org/wiki/Q90700974) (CC0) |
| Wikidata class | fortification |
| Types | air-raid shelter |
| Administrative area | El Carme |
| Inception | 1937 |
| Designations | BIE\|Property of Local Relevance |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |

## What the model contains

Tier **T1**, status `outline+walls`, 364 elements (outline 1, marker 5, road 226, building 451, zone 5, water 1, wall 82).

Evidence: documented 0, mapped 364, inferred 0, derived 0; heights documented 51, inferred 0, unknown 151.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/11162129 historic=castle 214 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 451 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 226 mapped (trace size budget); minor lanes are not drawn
- origin moved 214 m from the ledger point to the outline centroid
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.47833/-0.38) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; air-raid shelter; sitelinks=1; wikidata:Q90700974 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 364 elements); data/traces/ripalda-street-air-raid-shelter-q90700974.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
