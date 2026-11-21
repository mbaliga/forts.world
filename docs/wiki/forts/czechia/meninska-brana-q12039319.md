# Měnínská brána

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `meninska-brana-q12039319` |
| Coordinates | 49.1943, 16.6127 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.1943/16.6127)) |
| Wikidata | [Q12039319](https://www.wikidata.org/wiki/Q12039319) (CC0) |
| Wikidata class | fortification |
| Types | house\|city gate |
| Administrative area | Brno-město |
| Inception | 1600 |
| Designations | part of cultural heritage site in the Czech Republic |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 374 elements (outline 1, marker 53, road 307, building 187, wall 23, retaining-wall 20, zone 5, waterway 1, water 1).

Evidence: documented 0, mapped 374, inferred 0, derived 0; heights documented 93, inferred 0, unknown 70.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/50172409 historic=castle Q11812132 416 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 187 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 307 mapped (trace size budget); minor lanes are not drawn
- origin moved 417 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.1943/16.6127) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; house\|city gate; sitelinks=3; wikidata:Q12039319 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 374 elements); data/traces/meninska-brana-q12039319.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
