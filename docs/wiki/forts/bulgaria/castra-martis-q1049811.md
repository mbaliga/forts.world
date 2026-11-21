# Castra Martis

> Bulgaria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castra-martis-q1049811` |
| Coordinates | 43.88889, 22.52222 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.88889/22.52222)) |
| Wikidata | [Q1049811](https://www.wikidata.org/wiki/Q1049811) (CC0) |
| Wikidata class | fortification |
| Types | castrum\|ancient Roman structure |
| Wikipedia language editions | 8 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 58 elements (outline 1, marker 2, road 34, building 20, wall 1).

Evidence: documented 0, mapped 58, inferred 0, derived 0; heights documented 0, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/603766101 historic=ruins 242 m from ledger point
- origin moved 246 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.88889/22.52222) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum\|ancient Roman structure; sitelinks=8; wikidata:Q1049811 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 58 elements); data/traces/castra-martis-q1049811.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bulgaria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
