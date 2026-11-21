# Porta Viminale

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-viminale-q1516087` |
| Coordinates | 41.9025, 12.50111 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.9025/12.50111)) |
| Wikidata | [Q1516087](https://www.wikidata.org/wiki/Q1516087) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Rome |
| Inception | -0600 |
| Wikipedia language editions | 14 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 386 elements (outline 1, road 234, building 143, zone 3, wall 4, retaining-wall 1).

Evidence: documented 0, mapped 386, inferred 0, derived 0; heights documented 118, inferred 0, unknown 30.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/105281824 historic=citywalls 518 m from ledger point
- origin moved 517 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.9025/12.50111) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=14; wikidata:Q1516087 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 386 elements); data/traces/porta-viminale-q1516087.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
