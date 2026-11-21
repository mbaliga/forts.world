# Peebles

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `peebles-q1011507` |
| Coordinates | 55.65194, -3.18889 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.65194/-3.18889)) |
| Wikidata | [Q1011507](https://www.wikidata.org/wiki/Q1011507) (CC0) |
| Wikidata class | fortification |
| Types | town\|small burgh |
| Administrative area | Scottish Borders |
| Wikipedia language editions | 23 |
| OSM `historic` | building |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 251 elements (outline 1, marker 1, road 149, building 268, wall 208, water 2, zone 43, waterway 4, retaining-wall 16).

Evidence: documented 0, mapped 251, inferred 0, derived 0; heights documented 2, inferred 0, unknown 166.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/771663090 historic=building Q77772871 186 m from ledger point
- pruned to the outline plus 150 m: 692 -> 313 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 122 mapped (trace size budget); the rest of the town is not drawn
- origin moved 187 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.65194/-3.18889) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; town\|small burgh; sitelinks=23; wikidata:Q1011507 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 251 elements); data/traces/peebles-q1011507.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
