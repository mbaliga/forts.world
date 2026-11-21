# Porta Milano

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-milano-q105948079` |
| Coordinates | 45.19222, 9.15667 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.19222/9.15667)) |
| Wikidata | [Q105948079](https://www.wikidata.org/wiki/Q105948079) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Pavia |
| Inception | 1819 |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 314 elements (outline 1, marker 2, road 183, waterway 1, building 248, water 2, zone 28, wall 10).

Evidence: documented 0, mapped 314, inferred 0, derived 0; heights documented 119, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/616948975 historic=castle Q3183228 251 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 248 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 183 mapped (trace size budget); minor lanes are not drawn
- origin moved 252 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.19222/9.15667) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q105948079 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 314 elements); data/traces/porta-milano-q105948079.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
