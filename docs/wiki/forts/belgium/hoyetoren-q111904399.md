# Hoyetoren

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hoyetoren-q111904399` |
| Coordinates | 51.04564, 3.73739 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.04564/3.73739)) |
| Wikidata | [Q111904399](https://www.wikidata.org/wiki/Q111904399) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Ghent |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 4 |
| OSM `description` | Herenhuis in empirestijl |

## What the model contains

Tier **T1**, status `outline+walls`, 265 elements (outline 1, road 65, building 357, waterway 4, water 3, wall 7, zone 65).

Evidence: documented 0, mapped 265, inferred 0, derived 0; heights documented 1, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/247728813 historic=castle 558 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 357 mapped (trace size budget); the rest of the town is not drawn
- origin moved 558 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.04564/3.73739) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q111904399 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 265 elements); data/traces/hoyetoren-q111904399.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
