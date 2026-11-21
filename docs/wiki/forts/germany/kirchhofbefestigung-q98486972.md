# Kirchhofbefestigung

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kirchhofbefestigung-q98486972` |
| Coordinates | 49.99461, 9.5768 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.99461/9.5768)) |
| Wikidata | [Q98486972](https://www.wikidata.org/wiki/Q98486972) (CC0) |
| Wikidata class | fort |
| Types | churchyard fortification |
| Administrative area | Lohr am Main |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | yes |
| OSM `description` | Lohrer Schloss, auch Kurmainzer Schloss genannt |
| OSM `website` | https://spessartmuseum.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 314 elements (outline 1, marker 4, road 196, building 306, water 1, waterway 13, zone 3, wall 22).

Evidence: documented 0, mapped 314, inferred 0, derived 0; heights documented 23, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/267484080 historic=castle Q1321731 305 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 306 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 196 mapped (trace size budget); minor lanes are not drawn
- origin moved 305 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.99461/9.5768) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; churchyard fortification; sitelinks=0; wikidata:Q98486972 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 314 elements); data/traces/kirchhofbefestigung-q98486972.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
