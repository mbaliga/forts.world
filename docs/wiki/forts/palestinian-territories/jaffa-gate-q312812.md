# Jaffa Gate

> Palestinian Territories · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `jaffa-gate-q312812` |
| Coordinates | 31.77653, 35.22769 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/31.77653/35.22769)) |
| Wikidata | [Q312812](https://www.wikidata.org/wiki/Q312812) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Jerusalem |
| Inception | 1538 |
| Wikipedia language editions | 35 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | yes |
| OSM `website` | https://tod.org.il/ |

## What the model contains

Tier **T1**, status `outline+walls`, 306 elements (outline 1, marker 6, road 191, zone 11, building 314, wall 15, retaining-wall 1, waterway 1, water 1).

Evidence: documented 0, mapped 306, inferred 0, derived 0; heights documented 4, inferred 0, unknown 132.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/136164 historic=castle Q1177765 64 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 314 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 191 mapped (trace size budget); minor lanes are not drawn
- origin moved 67 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/31.77653/35.22769) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=35; wikidata:Q312812 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 306 elements); data/traces/jaffa-gate-q312812.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/palestinian-territories.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
