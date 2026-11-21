# Lublin Rybna Gate

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lublin-rybna-gate-q9178820` |
| Coordinates | 51.2482, 22.56785 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.2482/22.56785)) |
| Wikidata | [Q9178820](https://www.wikidata.org/wiki/Q9178820) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Lublin |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://teatrnn.pl/lublin-fotografia/palac-paweczkowskiego-dawny-kosciol-i-klasztor-trynitarzy/ |

## What the model contains

Tier **T1**, status `outline+walls`, 371 elements (outline 1, marker 37, road 283, waterway 1, building 251, retaining-wall 4, zone 28, wall 28, cliff 2).

Evidence: documented 0, mapped 371, inferred 0, derived 0; heights documented 85, inferred 0, unknown 67.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6477272 historic=castle 116 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 251 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 283 mapped (trace size budget); minor lanes are not drawn
- origin moved 114 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.2482/22.56785) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=5; wikidata:Q9178820 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 371 elements); data/traces/lublin-rybna-gate-q9178820.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
