# Cairo Citadel

> Egypt · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cairo-citadel-q1988240` |
| Coordinates | 30.0294, 31.2614 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/30.0294/31.2614)) |
| Wikidata | [Q1988240](https://www.wikidata.org/wiki/Q1988240) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Cairo Governorate |
| Inception | 1176 |
| Wikipedia language editions | 37 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 352 elements (outline 1, marker 1, road 645, building 81, zone 221, cliff 1, wall 35, retaining-wall 2).

Evidence: documented 0, mapped 352, inferred 0, derived 0; heights documented 0, inferred 0, unknown 92.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/24908286 historic=castle Q1988240 98 m from ledger point
- pruned to the outline plus 80 m: 987 -> 734 elements
- roads capped: kept the 80 longest of 462 mapped (trace size budget); minor lanes are not drawn
- origin moved 98 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/30.0294/31.2614) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=37; wikidata:Q1988240 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 381 elements); data/traces/cairo-citadel-q1988240.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/egypt.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
