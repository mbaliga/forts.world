# Victoria Lines

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `victoria-lines-q633017` |
| Coordinates | 35.93188, 14.4541 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.93188/14.4541)) |
| Wikidata | [Q633017](https://www.wikidata.org/wiki/Q633017) (CC0) |
| Wikidata class | fortification |
| Types | defense line |
| Administrative area | Northern Region |
| Inception | 1875 |
| Designations | Tentative World Heritage Site |
| Wikipedia language editions | 14 |
| OSM `historic` | fort |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 91 elements (outline 1, road 35, building 20, zone 6, wall 27, coastline 1).

Evidence: documented 0, mapped 91, inferred 0, derived 0; heights documented 0, inferred 0, unknown 48.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/59342418 historic=fort Q19348148 695 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 702 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.93188/14.4541) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defense line; sitelinks=14; wikidata:Q633017 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 91 elements); data/traces/victoria-lines-q633017.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
