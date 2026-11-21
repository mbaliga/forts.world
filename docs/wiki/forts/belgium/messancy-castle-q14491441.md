# Messancy Castle

> Belgium · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `messancy-castle-q14491441` |
| Coordinates | 49.5939, 5.82052 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.5939/5.82052)) |
| Wikidata | [Q14491441](https://www.wikidata.org/wiki/Q14491441) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Messancy |
| Designations | protected heritage property in Wallonia |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `location-only`, 171 elements (road 66, zone 14, building 87, waterway 3, water 1).

Evidence: documented 0, mapped 171, inferred 0, derived 0; heights documented 0, inferred 0, unknown 87.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3924351 historic=castle Q14491441 6 m from ledger point
- site is a site relation of 2 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (37 x 41 m)
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.5939/5.82052) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q14491441 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 170 elements); data/traces/messancy-castle-q14491441.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
