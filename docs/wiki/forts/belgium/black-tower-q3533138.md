# Black Tower

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `black-tower-q3533138` |
| Coordinates | 50.8508, 4.34972 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.8508/4.34972)) |
| Wikidata | [Q3533138](https://www.wikidata.org/wiki/Q3533138) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Brussels |
| Designations | protected monument |
| Wikipedia language editions | 5 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 292 elements (outline 1, marker 4, road 382, building 475, water 4, wall 10, zone 1, waterway 2).

Evidence: documented 0, mapped 292, inferred 0, derived 0; heights documented 8, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/244850819 historic=yes 180 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 475 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 382 mapped (trace size budget); minor lanes are not drawn
- origin moved 179 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.8508/4.34972) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=5; wikidata:Q3533138 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 292 elements); data/traces/black-tower-q3533138.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
