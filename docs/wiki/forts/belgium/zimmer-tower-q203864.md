# Zimmer Tower

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `zimmer-tower-q203864` |
| Coordinates | 51.12917, 4.56972 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.12917/4.56972)) |
| Wikidata | [Q203864](https://www.wikidata.org/wiki/Q203864) (CC0) |
| Wikidata class | fort |
| Types | fortified clock tower |
| Administrative area | Lier |
| Inception | 1425 |
| Designations | beschermd monument |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 253 elements (outline 1, marker 3, road 117, water 2, waterway 2, building 616, zone 5, wall 3).

Evidence: documented 0, mapped 253, inferred 0, derived 0; heights documented 5, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/140232122 historic=castle 89 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 616 mapped (trace size budget); the rest of the town is not drawn
- origin moved 89 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.12917/4.56972) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified clock tower; sitelinks=11; wikidata:Q203864 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 253 elements); data/traces/zimmer-tower-q203864.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
