# Steiner Tor

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `steiner-tor-q2340516` |
| Coordinates | 48.40985, 15.5965 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.40985/15.5965)) |
| Wikidata | [Q2340516](https://www.wikidata.org/wiki/Q2340516) (CC0) |
| Wikidata class | fortification |
| Types | gate tower\|city gate |
| Administrative area | Krems |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive;stately |

## What the model contains

Tier **T1**, status `outline+walls`, 334 elements (outline 1, marker 4, road 327, building 398, waterway 1, wall 36, retaining-wall 14, water 2, zone 6).

Evidence: documented 0, mapped 334, inferred 0, derived 0; heights documented 19, inferred 0, unknown 151.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/280017384 historic=castle Q1540600 448 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 398 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 327 mapped (trace size budget); minor lanes are not drawn
- origin moved 449 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.40985/15.5965) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gate tower\|city gate; sitelinks=5; wikidata:Q2340516 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 334 elements); data/traces/steiner-tor-q2340516.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
