# Bezesten of Larissa

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bezesten-of-larissa-q58427271` |
| Coordinates | 39.64146, 22.41582 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.64146/22.41582)) |
| Wikidata | [Q58427271](https://www.wikidata.org/wiki/Q58427271) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|Bedesten |
| Administrative area | Larissa Regional Unit |
| Inception | 1484  |
| Wikipedia language editions | 7 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 285 elements (outline 1, marker 11, waterway 1, road 110, building 283, zone 28, wall 6, retaining-wall 7, water 1).

Evidence: documented 0, mapped 285, inferred 0, derived 0; heights documented 5, inferred 0, unknown 128.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/396037214 historic=archaeological_site 7 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 283 mapped (trace size budget); the rest of the town is not drawn
- origin moved 4 m from the ledger point to the outline centroid
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.64146/22.41582) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|Bedesten; sitelinks=7; wikidata:Q58427271 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 285 elements); data/traces/bezesten-of-larissa-q58427271.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
