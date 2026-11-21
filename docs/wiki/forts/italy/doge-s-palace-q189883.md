# Doge's Palace

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `doge-s-palace-q189883` |
| Coordinates | 45.43421, 12.34034 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.43421/12.34034)) |
| Wikidata | [Q189883](https://www.wikidata.org/wiki/Q189883) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|art museum\|museum of a public entity |
| Administrative area | Venice |
| Inception | 1340 |
| Designations | Italian national heritage |
| Wikipedia language editions | 60 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 384 elements (outline 1, marker 27, road 490, building 308, wall 49, waterway 16, zone 7, water 13, retaining-wall 1).

Evidence: documented 0, mapped 384, inferred 0, derived 0; heights documented 59, inferred 0, unknown 111.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/138803915 historic=castle Q189883 11 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 308 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 490 mapped (trace size budget); minor lanes are not drawn
- origin moved 11 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.43421/12.34034) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|art museum\|museum of a public entity; sitelinks=60; wikidata:Q189883 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 384 elements); data/traces/doge-s-palace-q189883.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
