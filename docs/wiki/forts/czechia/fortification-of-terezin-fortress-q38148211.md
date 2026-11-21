# Fortification of Terezín Fortress

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortification-of-terezin-fortress-q38148211` |
| Coordinates | 50.50921, 14.14668 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.50921/14.14668)) |
| Wikidata | [Q38148211](https://www.wikidata.org/wiki/Q38148211) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Terezín |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 329 elements (outline 1, marker 7, road 127, building 198, wall 51, waterway 12, retaining-wall 8, zone 3).

Evidence: documented 0, mapped 329, inferred 0, derived 0; heights documented 68, inferred 0, unknown 111.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13797148 historic=fort 94 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 198 mapped (trace size budget); the rest of the town is not drawn
- origin moved 93 m from the ledger point to the centre of the mapped site
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.50921/14.14668) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=1; wikidata:Q38148211 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 329 elements); data/traces/fortification-of-terezin-fortress-q38148211.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
