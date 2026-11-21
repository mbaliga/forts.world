# Hanover fortifications

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hanover-fortifications-q1423191` |
| Coordinates | 52.37175, 9.73134 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.37175/9.73134)) |
| Wikidata | [Q1423191](https://www.wikidata.org/wiki/Q1423191) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Hanover |
| Designations | architectural heritage monument |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 345 elements (outline 1, marker 31, road 353, building 165, waterway 9, zone 17, water 4, retaining-wall 4, wall 9).

Evidence: documented 0, mapped 345, inferred 0, derived 0; heights documented 95, inferred 0, unknown 38.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1170793 historic=castle Q319994 173 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 165 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 353 mapped (trace size budget); minor lanes are not drawn
- origin moved 173 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.37175/9.73134) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=2; wikidata:Q1423191 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 345 elements); data/traces/hanover-fortifications-q1423191.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
