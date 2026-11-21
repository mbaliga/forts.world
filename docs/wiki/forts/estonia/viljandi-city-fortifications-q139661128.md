# Viljandi city fortifications

> Estonia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `viljandi-city-fortifications-q139661128` |
| Coordinates | 58.36461, 25.59757 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.36461/25.59757)) |
| Wikidata | [Q139661128](https://www.wikidata.org/wiki/Q139661128) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Viljandi City |
| Designations | architectural monument |
| Wikipedia language editions | 0 |
| OSM `historic` | citywalls |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 360 elements (outline 1, marker 6, road 411, building 219, zone 57, wall 23, water 1, retaining-wall 2).

Evidence: documented 0, mapped 360, inferred 0, derived 0; heights documented 125, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/412920869 historic=citywalls 28 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 219 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 411 mapped (trace size budget); minor lanes are not drawn
- origin moved 29 m from the ledger point to the outline centroid
- 19 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.36461/25.59757) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=0; wikidata:Q139661128 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 360 elements); data/traces/viljandi-city-fortifications-q139661128.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/estonia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
