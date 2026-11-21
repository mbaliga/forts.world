# Bondgate Tower

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bondgate-tower-q17527366` |
| Coordinates | 55.4126, -1.70374 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.4126/-1.70374)) |
| Wikidata | [Q17527366](https://www.wikidata.org/wiki/Q17527366) (CC0) |
| Wikidata class | fortification |
| Types | gate tower |
| Administrative area | Alnwick |
| Designations | Grade I listed building\|scheduled monument |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.alnwickcastle.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 365 elements (outline 1, marker 18, road 181, building 227, wall 51, water 2, waterway 1, zone 17, retaining-wall 5).

Evidence: documented 0, mapped 365, inferred 0, derived 0; heights documented 0, inferred 0, unknown 176.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/129877528 historic=castle Q1320427 391 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 227 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 181 mapped (trace size budget); minor lanes are not drawn
- origin moved 390 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.4126/-1.70374) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gate tower; sitelinks=3; wikidata:Q17527366 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 365 elements); data/traces/bondgate-tower-q17527366.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
