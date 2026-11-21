# Porta Collina

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-collina-q2104863` |
| Coordinates | 41.90722, 12.49889 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.90722/12.49889)) |
| Wikidata | [Q2104863](https://www.wikidata.org/wiki/Q2104863) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|destroyed building or structure |
| Administrative area | Rome |
| Inception | -0600 |
| Wikipedia language editions | 20 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 343 elements (outline 1, marker 1, road 233, building 101, zone 6, wall 1).

Evidence: documented 0, mapped 343, inferred 0, derived 0; heights documented 17, inferred 0, unknown 85.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/781934077 historic=citywalls Q281330 389 m from ledger point
- origin moved 389 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.90722/12.49889) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|destroyed building or structure; sitelinks=20; wikidata:Q2104863 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 343 elements); data/traces/porta-collina-q2104863.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
