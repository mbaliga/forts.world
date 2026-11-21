# Bischöfliche Burg Bruchsal

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bischofliche-burg-bruchsal-q866236` |
| Coordinates | 49.1247, 8.59942 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.1247/8.59942)) |
| Wikidata | [Q866236](https://www.wikidata.org/wiki/Q866236) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Bruchsal |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://www.schloss-bruchsal.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 338 elements (outline 1, marker 4, road 182, building 158, water 10, zone 34, wall 17, retaining-wall 2).

Evidence: documented 0, mapped 338, inferred 0, derived 0; heights documented 14, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/48446299 historic=castle Q880134 479 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 158 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 182 mapped (trace size budget); minor lanes are not drawn
- origin moved 478 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.1247/8.59942) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q866236 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 338 elements); data/traces/bischofliche-burg-bruchsal-q866236.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
