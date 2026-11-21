# Bruchsal Palace

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bruchsal-palace-q880134` |
| Coordinates | 49.1289, 8.59814 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.1289/8.59814)) |
| Wikidata | [Q880134](https://www.wikidata.org/wiki/Q880134) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Bruchsal |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://www.schloss-bruchsal.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 338 elements (outline 1, marker 4, road 182, building 159, water 10, zone 34, wall 17, retaining-wall 2).

Evidence: documented 0, mapped 338, inferred 0, derived 0; heights documented 14, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/48446299 historic=castle Q880134 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 159 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 182 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.1289/8.59814) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=12; wikidata:Q880134 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 338 elements); data/traces/bruchsal-palace-q880134.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
