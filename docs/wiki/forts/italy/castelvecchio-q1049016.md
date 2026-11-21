# Castelvecchio

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castelvecchio-q1049016` |
| Coordinates | 45.43957, 10.9881 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.43957/10.9881)) |
| Wikidata | [Q1049016](https://www.wikidata.org/wiki/Q1049016) (CC0) |
| Wikidata class | castle |
| Types | castle\|military school\|museum building |
| Administrative area | Verona |
| Inception | 1356 |
| Designations | Italian national heritage |
| Wikipedia language editions | 16 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 277 elements (outline 1, marker 1, road 200, waterway 1, water 1, building 354, wall 2, retaining-wall 1).

Evidence: documented 0, mapped 277, inferred 0, derived 0; heights documented 41, inferred 0, unknown 82.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/24896022 historic=castle Q1049016 52 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 354 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 200 mapped (trace size budget); minor lanes are not drawn
- origin moved 47 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.43957/10.9881) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|military school\|museum building; sitelinks=16; wikidata:Q1049016 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 277 elements); data/traces/castelvecchio-q1049016.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
