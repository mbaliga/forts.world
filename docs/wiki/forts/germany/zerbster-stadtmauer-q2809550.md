# Zerbster Stadtmauer

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `zerbster-stadtmauer-q2809550` |
| Coordinates | 51.9671, 12.0781 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.9671/12.0781)) |
| Wikidata | [Q2809550](https://www.wikidata.org/wiki/Q2809550) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Zerbst |
| Designations | heritage monument in Saxony-Anhalt |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 163 elements (outline 1, marker 1, road 61, building 94, wall 2, waterway 1, zone 3).

Evidence: documented 0, mapped 163, inferred 0, derived 0; heights documented 30, inferred 0, unknown 66.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/320743264 historic=citywalls 324 m from ledger point
- origin moved 324 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.9671/12.0781) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=2; wikidata:Q2809550 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 163 elements); data/traces/zerbster-stadtmauer-q2809550.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
