# Fort St Angelo

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-st-angelo-q2207146` |
| Coordinates | 35.89243, 14.51774 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.89243/14.51774)) |
| Wikidata | [Q2207146](https://www.wikidata.org/wiki/Q2207146) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Birgu |
| Inception | 1691 |
| Designations | Grade 1 |
| Wikipedia language editions | 23 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 71 elements (outline 1, marker 1, road 28, wall 19, building 16, coastline 3, zone 2, water 1).

Evidence: documented 0, mapped 71, inferred 0, derived 1; heights documented 2, inferred 0, unknown 33.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/275735479 historic=castle 27 m from ledger point
- origin moved 27 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":1143,"medianInside":0,"medianOutside":0}
- 22 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.89243/14.51774) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=23; wikidata:Q2207146 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 71 elements); data/traces/fort-st-angelo-q2207146.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
