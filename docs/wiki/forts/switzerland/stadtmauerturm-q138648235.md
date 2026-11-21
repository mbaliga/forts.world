# Stadtmauerturm

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtmauerturm-q138648235` |
| Coordinates | 47.55815, 7.58454 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.55815/7.58454)) |
| Wikidata | [Q138648235](https://www.wikidata.org/wiki/Q138648235) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Altstadt Grossbasel |
| Inception | 1400 |
| Designations | Swiss cultural property of cantonal or local significance |
| Wikipedia language editions | 1 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 320 elements (outline 1, marker 13, road 257, building 328, waterway 2, retaining-wall 5, wall 23, water 5, zone 1).

Evidence: documented 0, mapped 320, inferred 0, derived 0; heights documented 14, inferred 0, unknown 134.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/540271337 historic=building 455 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 328 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 257 mapped (trace size budget); minor lanes are not drawn
- origin moved 455 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.55815/7.58454) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q138648235 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 320 elements); data/traces/stadtmauerturm-q138648235.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
