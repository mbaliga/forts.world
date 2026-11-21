# Della Grazie Battery

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `della-grazie-battery-q2674465` |
| Coordinates | 35.88583, 14.54944 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.88583/14.54944)) |
| Wikidata | [Q2674465](https://www.wikidata.org/wiki/Q2674465) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Xgħajra |
| Inception | 1888 |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 182 elements (outline 1, marker 5, road 96, building 38, zone 11, coastline 1, wall 26, water 3).

Evidence: documented 0, mapped 182, inferred 0, derived 1; heights documented 12, inferred 0, unknown 53.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/18248987 historic=fort Q2674465 24 m from ledger point
- origin moved 25 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":13,"medianInside":2.9,"medianOutside":23.2}
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.88583/14.54944) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=4; wikidata:Q2674465 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 182 elements); data/traces/della-grazie-battery-q2674465.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
