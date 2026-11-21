# Walls of Prague New Town

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `walls-of-prague-new-town-q38036791` |
| Coordinates | 50.08419, 14.42369 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.08419/14.42369)) |
| Wikidata | [Q38036791](https://www.wikidata.org/wiki/Q38036791) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | New Town |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 302 elements (outline 1, marker 25, road 279, building 185, wall 3, zone 3).

Evidence: documented 0, mapped 302, inferred 0, derived 0; heights documented 105, inferred 0, unknown 18.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5012259 historic=castle Q10856746 98 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 185 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 279 mapped (trace size budget); minor lanes are not drawn
- origin moved 96 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.08419/14.42369) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=1; wikidata:Q38036791 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 302 elements); data/traces/walls-of-prague-new-town-q38036791.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
