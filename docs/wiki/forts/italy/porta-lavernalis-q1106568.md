# Porta Lavernalis

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-lavernalis-q1106568` |
| Coordinates | 41.88, 12.47953 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.88/12.47953)) |
| Wikidata | [Q1106568](https://www.wikidata.org/wiki/Q1106568) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Rome |
| Wikipedia language editions | 9 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `location-only`, 376 elements (marker 18, road 992, zone 31, building 406, wall 41, retaining-wall 14, waterway 1, water 1).

Evidence: documented 0, mapped 376, inferred 0, derived 0; heights documented 17, inferred 0, unknown 158.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20347404 historic=citywalls Q3867314 1752 m from ledger point
- site is a site relation of 146 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (5128 x 4429 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 406 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 992 mapped (trace size budget); minor lanes are not drawn
- 17 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.88/12.47953) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=9; wikidata:Q1106568 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 2 elements); data/traces/porta-lavernalis-q1106568.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
