# Wawel Senator Tower

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wawel-senator-tower-q1297252` |
| Coordinates | 50.0539, 19.9367 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.0539/19.9367)) |
| Wikidata | [Q1297252](https://www.wikidata.org/wiki/Q1297252) (CC0) |
| Wikidata class | fort |
| Types | fortified tower\|architectural heritage monument |
| Administrative area | Kraków |
| Inception | 1500 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 7 |
| OSM `historic` | fortification |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 289 elements (outline 1, marker 59, road 291, building 88, wall 80, zone 108, retaining-wall 1).

Evidence: documented 0, mapped 289, inferred 0, derived 0; heights documented 54, inferred 0, unknown 44.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/295393288 historic=fortification 49 m from ledger point
- pruned to the outline plus 150 m: 628 -> 350 elements
- roads capped: kept the 80 longest of 142 mapped (trace size budget); minor lanes are not drawn
- origin moved 48 m from the ledger point to the outline centroid
- 52 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.0539/19.9367) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower\|architectural heritage monument; sitelinks=7; wikidata:Q1297252 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 289 elements); data/traces/wawel-senator-tower-q1297252.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
