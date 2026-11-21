# Stadtbefestigung Feldkirch

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtbefestigung-feldkirch-q126909959` |
| Coordinates | 47.23794, 9.59458 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.23794/9.59458)) |
| Wikidata | [Q126909959](https://www.wikidata.org/wiki/Q126909959) (CC0) |
| Wikidata class | fort |
| Types | city fortifications |
| Administrative area | Feldkirch |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 306 elements (outline 1, marker 2, road 292, waterway 2, building 278, wall 14, retaining-wall 2, zone 14, cliff 1).

Evidence: documented 0, mapped 306, inferred 0, derived 0; heights documented 57, inferred 0, unknown 79.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1697460 historic=castle Q1319014 179 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 278 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 292 mapped (trace size budget); minor lanes are not drawn
- origin moved 180 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.23794/9.59458) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; city fortifications; sitelinks=1; wikidata:Q126909959 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 306 elements); data/traces/stadtbefestigung-feldkirch-q126909959.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
