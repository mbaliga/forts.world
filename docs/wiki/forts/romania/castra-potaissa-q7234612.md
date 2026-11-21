# Castra Potaissa

> Romania · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castra-potaissa-q7234612` |
| Coordinates | 46.5705, 23.7724 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.5705/23.7724)) |
| Wikidata | [Q7234612](https://www.wikidata.org/wiki/Q7234612) (CC0) |
| Wikidata class | fortification |
| Types | castrum |
| Administrative area | Cluj County |
| Designations | Historic Monument |
| Wikipedia language editions | 6 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 53 elements (outline 1, zone 1, waterway 1, road 11, building 37, wall 1).

Evidence: documented 0, mapped 53, inferred 0, derived 0; heights documented 0, inferred 0, unknown 39.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/21822427 historic=citywalls 54 m from ledger point
- origin moved 209 m from the ledger point to the outline centroid
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.5705/23.7724) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum; sitelinks=6; wikidata:Q7234612 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 53 elements); data/traces/castra-potaissa-q7234612.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/romania.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
