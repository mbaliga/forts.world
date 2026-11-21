# Citadel of Erbil

> Iraq · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `citadel-of-erbil-q206236` |
| Coordinates | 36.191, 44.009 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.191/44.009)) |
| Wikidata | [Q206236](https://www.wikidata.org/wiki/Q206236) (CC0) |
| Wikidata class | fort |
| Types | citadel\|tell |
| Administrative area | Erbil |
| Designations | World Heritage Site |
| UNESCO WHC id | 1437 |
| Wikipedia language editions | 35 |
| OSM `historic` | castle |
| OSM `castle_type` | citadel |
| OSM `heritage` | 1 |
| OSM `barrier` | wall |
| OSM `website` | http://www.erbilcitadel.org/ |

## What the model contains

Tier **T1**, status `outline+walls`, 285 elements (outline 1, marker 1, road 337, building 579, water 2, zone 9, wall 1).

Evidence: documented 0, mapped 285, inferred 0, derived 0; heights documented 1, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/34133277 historic=castle Q206236 67 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 579 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 337 mapped (trace size budget); minor lanes are not drawn
- origin moved 65 m from the ledger point to the outline centroid
- 21609 DEM cells below -3 m (bathymetry) clamped to -3 m
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.191/44.009) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel\|tell; sitelinks=35; wikidata:Q206236 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 285 elements); data/traces/citadel-of-erbil-q206236.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/iraq.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
