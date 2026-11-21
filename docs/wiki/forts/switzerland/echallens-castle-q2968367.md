# Échallens Castle

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `echallens-castle-q2968367` |
| Coordinates | 46.64162, 6.63035 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.64162/6.63035)) |
| Wikidata | [Q2968367](https://www.wikidata.org/wiki/Q2968367) (CC0) |
| Wikidata class | castle |
| Types | castle\|built structure |
| Administrative area | Echallens |
| Designations | class B Swiss cultural property of regional significance |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 232 elements (outline 1, marker 1, road 303, building 109, zone 93, waterway 2, retaining-wall 29, wall 19).

Evidence: documented 0, mapped 232, inferred 0, derived 0; heights documented 1, inferred 0, unknown 96.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/91520224 historic=castle Q2968367 31 m from ledger point
- pruned to the outline plus 150 m: 557 -> 403 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 81 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 230 mapped (trace size budget); minor lanes are not drawn
- origin moved 31 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.64162/6.63035) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|built structure; sitelinks=2; wikidata:Q2968367 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 232 elements); data/traces/echallens-castle-q2968367.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
