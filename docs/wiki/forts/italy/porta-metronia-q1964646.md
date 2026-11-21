# Porta Metronia

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-metronia-q1964646` |
| Coordinates | 41.8824, 12.4986 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.8824/12.4986)) |
| Wikidata | [Q1964646](https://www.wikidata.org/wiki/Q1964646) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Rome |
| Inception | 0271 |
| Wikipedia language editions | 16 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 293 elements (outline 1, marker 1, road 210, building 58, wall 12, zone 11).

Evidence: documented 0, mapped 293, inferred 0, derived 0; heights documented 7, inferred 0, unknown 63.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1446578234 historic=citywalls 18 m from ledger point
- origin moved 18 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.8824/12.4986) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=16; wikidata:Q1964646 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 293 elements); data/traces/porta-metronia-q1964646.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
