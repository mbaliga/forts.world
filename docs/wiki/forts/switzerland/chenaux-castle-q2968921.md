# Chenaux Castle

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chenaux-castle-q2968921` |
| Coordinates | 46.8515, 6.84886 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.8515/6.84886)) |
| Wikidata | [Q2968921](https://www.wikidata.org/wiki/Q2968921) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|château |
| Administrative area | Estavayer |
| Designations | class A Swiss cultural property of national significance |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://fribourg.ch/en/estavayer-payerne/architecture-and-monuments/castle-of-chenaux/ |

## What the model contains

Tier **T1**, status `outline+walls`, 355 elements (outline 1, road 127, building 212, wall 8, zone 7).

Evidence: documented 0, mapped 355, inferred 0, derived 0; heights documented 1, inferred 0, unknown 219.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/240173767 historic=castle Q2968921 14 m from ledger point
- origin moved 14 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.8515/6.84886) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|château; sitelinks=8; wikidata:Q2968921 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 355 elements); data/traces/chenaux-castle-q2968921.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
