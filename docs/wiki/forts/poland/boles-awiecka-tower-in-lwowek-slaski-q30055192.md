# Bolesławiecka Tower in Lwówek Śląski

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `boles-awiecka-tower-in-lwowek-slaski-q30055192` |
| Coordinates | 51.1123, 15.58641 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.1123/15.58641)) |
| Wikidata | [Q30055192](https://www.wikidata.org/wiki/Q30055192) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Lwówek Śląski |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 3 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 213 elements (outline 1, marker 11, road 783, building 349, wall 42, water 5, waterway 9, zone 89, retaining-wall 5).

Evidence: documented 0, mapped 213, inferred 0, derived 0; heights documented 44, inferred 0, unknown 45.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/394373286 historic=citywalls 1 m from ledger point
- pruned to the outline plus 150 m: 1294 -> 631 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 198 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 360 mapped (trace size budget); minor lanes are not drawn
- origin moved 1 m from the ledger point to the outline centroid
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.1123/15.58641) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=3; wikidata:Q30055192 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 213 elements); data/traces/boles-awiecka-tower-in-lwowek-slaski-q30055192.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
