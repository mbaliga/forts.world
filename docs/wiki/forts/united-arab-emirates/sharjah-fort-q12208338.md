# Sharjah Fort

> United Arab Emirates · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sharjah-fort-q12208338` |
| Coordinates | 25.3586, 55.3864 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/25.3586/55.3864)) |
| Wikidata | [Q12208338](https://www.wikidata.org/wiki/Q12208338) (CC0) |
| Wikidata class | fort |
| Types | fort\|national museum\|archaeological site |
| Administrative area | Emirate of Sharjah |
| Inception | 1997 |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 291 elements (outline 1, marker 9, road 124, coastline 2, building 143, wall 8, zone 4).

Evidence: documented 0, mapped 291, inferred 0, derived 0; heights documented 19, inferred 0, unknown 132.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19527091 historic=castle 8 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 10 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/25.3586/55.3864) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|national museum\|archaeological site; sitelinks=4; wikidata:Q12208338 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 291 elements); data/traces/sharjah-fort-q12208338.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-arab-emirates.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
