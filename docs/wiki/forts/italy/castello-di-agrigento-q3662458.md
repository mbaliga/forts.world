# Castello di Agrigento

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-di-agrigento-q3662458` |
| Coordinates | 37.31396, 13.57861 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.31396/13.57861)) |
| Wikidata | [Q3662458](https://www.wikidata.org/wiki/Q3662458) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Agrigento |
| Inception | 1087 |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 267 elements (outline 1, marker 17, road 165, building 763, retaining-wall 41, wall 138).

Evidence: documented 0, mapped 267, inferred 0, derived 0; heights documented 0, inferred 0, unknown 178.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/417199359 historic=castle Q3662458 10 m from ledger point
- pruned to the outline plus 150 m: 1125 -> 678 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 454 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 97 mapped (trace size budget); minor lanes are not drawn
- origin moved 9 m from the ledger point to the centre of the mapped site
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.31396/13.57861) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q3662458 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 267 elements); data/traces/castello-di-agrigento-q3662458.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
