# Jiefangmen

> China · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `jiefangmen-q15900163` |
| Coordinates | 34.27765, 108.95814 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.27765/108.95814)) |
| Wikidata | [Q15900163](https://www.wikidata.org/wiki/Q15900163) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Jiefangmen Subdistrict |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 53 elements (outline 1, zone 1, road 40, building 6, wall 4).

Evidence: documented 0, mapped 53, inferred 0, derived 0; heights documented 2, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/821515169 historic=citywalls 599 m from ledger point
- origin moved 601 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.27765/108.95814) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q15900163 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 53 elements); data/traces/jiefangmen-q15900163.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/china.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
