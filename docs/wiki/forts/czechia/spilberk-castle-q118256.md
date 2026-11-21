# Špilberk Castle

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `spilberk-castle-q118256` |
| Coordinates | 49.19444, 16.59889 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.19444/16.59889)) |
| Wikidata | [Q118256](https://www.wikidata.org/wiki/Q118256) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress |
| Administrative area | Brno-město |
| Inception | 1300 |
| Designations | national cultural monument of the Czech Republic\|cultural monument of the Czech Republic |
| Wikipedia language editions | 27 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | no |

## What the model contains

Tier **T1**, status `outline+walls`, 341 elements (outline 1, marker 21, road 311, building 192, wall 20, retaining-wall 13, zone 15, water 1).

Evidence: documented 0, mapped 341, inferred 0, derived 0; heights documented 80, inferred 0, unknown 73.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/613544870 historic=castle Q118256 52 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 192 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 311 mapped (trace size budget); minor lanes are not drawn
- origin moved 53 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.19444/16.59889) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress; sitelinks=27; wikidata:Q118256 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 341 elements); data/traces/spilberk-castle-q118256.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
