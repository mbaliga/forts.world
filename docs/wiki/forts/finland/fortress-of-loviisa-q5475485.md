# Fortress of Loviisa

> Finland · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortress-of-loviisa-q5475485` |
| Coordinates | 60.46222, 26.23806 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.46222/26.23806)) |
| Wikidata | [Q5475485](https://www.wikidata.org/wiki/Q5475485) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Loviisa |
| Designations | Cultural Heritage Site of National Significance |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `location-only`, 308 elements (road 196, waterway 15, wall 2, building 226, water 8, zone 13).

Evidence: documented 0, mapped 308, inferred 0, derived 0; heights documented 0, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13181581 historic=castle 23 m from ledger point
- site is a site relation of 3 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (944 x 507 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 226 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 196 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.46222/26.23806) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=5; wikidata:Q5475485 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 101 elements); data/traces/fortress-of-loviisa-q5475485.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/finland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
