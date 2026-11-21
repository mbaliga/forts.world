# Wawel defensive walls

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wawel-defensive-walls-q30162250` |
| Coordinates | 50.05393, 19.93564 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.05393/19.93564)) |
| Wikidata | [Q30162250](https://www.wikidata.org/wiki/Q30162250) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall |
| Administrative area | Kraków |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 1 |
| OSM `historic` | fortification |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 289 elements (outline 1, marker 60, road 292, building 88, wall 80, zone 107, retaining-wall 1).

Evidence: documented 0, mapped 289, inferred 0, derived 0; heights documented 55, inferred 0, unknown 44.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/399397434 historic=fortification 30 m from ledger point
- pruned to the outline plus 150 m: 629 -> 347 elements
- roads capped: kept the 80 longest of 139 mapped (trace size budget); minor lanes are not drawn
- origin moved 30 m from the ledger point to the outline centroid
- 47 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.05393/19.93564) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall; sitelinks=1; wikidata:Q30162250 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 289 elements); data/traces/wawel-defensive-walls-q30162250.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
