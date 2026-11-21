# Lucio Castle

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lucio-castle-q113557448` |
| Coordinates | 37.88842, 14.31433 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.88842/14.31433)) |
| Wikidata | [Q113557448](https://www.wikidata.org/wiki/Q113557448) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Castel di Lucio |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 250 elements (outline 1, road 145, building 505, wall 116, retaining-wall 28, zone 6, cliff 1).

Evidence: documented 0, mapped 250, inferred 0, derived 0; heights documented 0, inferred 0, unknown 162.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1132562978 historic=castle Q113557448 36 m from ledger point
- pruned to the outline plus 150 m: 802 -> 485 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 284 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 91 mapped (trace size budget); minor lanes are not drawn
- origin moved 36 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.88842/14.31433) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=0; wikidata:Q113557448 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 250 elements); data/traces/lucio-castle-q113557448.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
