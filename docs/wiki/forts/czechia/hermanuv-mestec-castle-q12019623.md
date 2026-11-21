# Heřmanův Městec Castle

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hermanuv-mestec-castle-q12019623` |
| Coordinates | 49.94541, 15.66904 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.94541/15.66904)) |
| Wikidata | [Q12019623](https://www.wikidata.org/wiki/Q12019623) (CC0) |
| Wikidata class | castle |
| Types | château\|fortified house |
| Administrative area | Heřmanův Městec |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 362 elements (outline 1, marker 5, road 177, building 237, zone 40, waterway 5, water 1, retaining-wall 6, wall 34).

Evidence: documented 0, mapped 362, inferred 0, derived 0; heights documented 60, inferred 0, unknown 100.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1057730957 historic=yes 161 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 237 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 177 mapped (trace size budget); minor lanes are not drawn
- origin moved 158 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.94541/15.66904) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; château\|fortified house; sitelinks=2; wikidata:Q12019623 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 362 elements); data/traces/hermanuv-mestec-castle-q12019623.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
