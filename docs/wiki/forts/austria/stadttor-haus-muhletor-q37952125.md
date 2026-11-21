# Stadttor, Haus Mühletor

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadttor-haus-muhletor-q37952125` |
| Coordinates | 47.15464, 9.81937 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.15464/9.81937)) |
| Wikidata | [Q37952125](https://www.wikidata.org/wiki/Q37952125) (CC0) |
| Wikidata class | fortification |
| Types | mill\|city gate |
| Administrative area | Bludenz |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 282 elements (outline 1, marker 1, road 266, waterway 1, building 225, cliff 1, retaining-wall 2, wall 6).

Evidence: documented 0, mapped 282, inferred 0, derived 0; heights documented 7, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/130550351 historic=castle Q2241150 332 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 225 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 266 mapped (trace size budget); minor lanes are not drawn
- origin moved 331 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.15464/9.81937) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; mill\|city gate; sitelinks=1; wikidata:Q37952125 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 282 elements); data/traces/stadttor-haus-muhletor-q37952125.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
