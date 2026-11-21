# Udine Castle

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `udine-castle-q1153749` |
| Coordinates | 46.06475, 13.23568 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.06475/13.23568)) |
| Wikidata | [Q1153749](https://www.wikidata.org/wiki/Q1153749) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Udine |
| Designations | Italian national heritage |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 312 elements (outline 1, marker 19, road 347, building 115, waterway 1, zone 9, water 1, wall 13, retaining-wall 3).

Evidence: documented 0, mapped 312, inferred 0, derived 0; heights documented 108, inferred 0, unknown 23.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/36132365 historic=castle Q1153749 50 m from ledger point
- roads capped: kept the 150 longest of 347 mapped (trace size budget); minor lanes are not drawn
- origin moved 48 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.06475/13.23568) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=6; wikidata:Q1153749 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 312 elements); data/traces/udine-castle-q1153749.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
