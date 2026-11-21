# Citadel of Jaca

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `citadel-of-jaca-q206245` |
| Coordinates | 42.57247, -0.55228 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.57247/-0.55228)) |
| Wikidata | [Q206245](https://www.wikidata.org/wiki/Q206245) (CC0) |
| Wikidata class | fort |
| Types | star fort\|Monument (Spain)\|tourist destination\|citadel |
| Administrative area | Jaca |
| Inception | 1592 |
| Designations | bien de interés cultural\|part of UNESCO World Heritage Site |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | citadel |
| OSM `heritage` | 2 |
| OSM `website` | https://ciudadeladejaca.es/ |

## What the model contains

Tier **T1**, status `outline+walls`, 371 elements (outline 1, marker 7, road 205, wall 20, building 428, zone 70, retaining-wall 2, waterway 1).

Evidence: documented 0, mapped 371, inferred 0, derived 0; heights documented 116, inferred 0, unknown 26.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1109637055 historic=castle Q206245 14 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 428 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 205 mapped (trace size budget); minor lanes are not drawn
- origin moved 11 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.57247/-0.55228) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; star fort\|Monument (Spain)\|tourist destination\|citadel; sitelinks=10; wikidata:Q206245 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 371 elements); data/traces/citadel-of-jaca-q206245.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
