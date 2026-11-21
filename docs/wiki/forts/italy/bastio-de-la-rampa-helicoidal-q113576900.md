# Bastió de la Rampa Helicoïdal

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bastio-de-la-rampa-helicoidal-q113576900` |
| Coordinates | 43.72151, 12.6361 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.72151/12.6361)) |
| Wikidata | [Q113576900](https://www.wikidata.org/wiki/Q113576900) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Urbino |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 330 elements (outline 1, marker 37, wall 19, road 188, building 265, zone 3).

Evidence: documented 0, mapped 330, inferred 0, derived 0; heights documented 30, inferred 0, unknown 109.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1794516 historic=castle Q1267721 295 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 265 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 188 mapped (trace size budget); minor lanes are not drawn
- origin moved 295 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.72151/12.6361) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q113576900 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 330 elements); data/traces/bastio-de-la-rampa-helicoidal-q113576900.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
