# Château de Caylus

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-caylus-q58219663` |
| Coordinates | 44.23509, 1.77164 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.23509/1.77164)) |
| Wikidata | [Q58219663](https://www.wikidata.org/wiki/Q58219663) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Caylus |
| Inception | 1893 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 361 elements (outline 1, marker 3, zone 11, road 197, water 1, building 440, wall 34, cliff 1, retaining-wall 40).

Evidence: documented 0, mapped 361, inferred 0, derived 0; heights documented 1, inferred 0, unknown 193.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/191065325 historic=castle Q58219663 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 440 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 197 mapped (trace size budget); minor lanes are not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.23509/1.77164) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=1; wikidata:Q58219663 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 361 elements); data/traces/chateau-de-caylus-q58219663.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
