# castellum

> Tunisia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castellum-q42764927` |
| Coordinates | 33.21614, 9.80049 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.21614/9.80049)) |
| Wikidata | [Q42764927](https://www.wikidata.org/wiki/Q42764927) (CC0) |
| Wikidata class | fortification |
| Types | castellum |
| Administrative area | Medenine Governorate |
| Designations | listed monument of Tunisia |
| Wikipedia language editions | 0 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 5 elements (outline 1, road 2, wall 1, waterway 1).

Evidence: documented 0, mapped 5, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/187314379 historic=ruins Q1053530 15 m from ledger point
- origin moved 14 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.21614/9.80049) | 2026-11-17 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-17 |

## Ledger note

world; type=fortification; castellum; sitelinks=0; wikidata:Q42764927 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline+walls, 5 elements); data/traces/castellum-q42764927.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/tunisia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
