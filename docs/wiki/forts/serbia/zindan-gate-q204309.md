# Zindan Gate

> Serbia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `zindan-gate-q204309` |
| Coordinates | 44.82517, 20.45133 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.82517/20.45133)) |
| Wikidata | [Q204309](https://www.wikidata.org/wiki/Q204309) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Inception | 1500 |
| Wikipedia language editions | 6 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 195 elements (outline 1, marker 62, waterway 1, road 197, building 25, wall 83, retaining-wall 4, zone 77, cliff 3, water 1).

Evidence: documented 0, mapped 195, inferred 0, derived 0; heights documented 4, inferred 0, unknown 55.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/51070079 historic=citywalls 140 m from ledger point
- pruned to the outline plus 150 m: 454 -> 210 elements
- roads capped: kept the 80 longest of 96 mapped (trace size budget); minor lanes are not drawn
- origin moved 138 m from the ledger point to the outline centroid
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.82517/20.45133) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=6; wikidata:Q204309 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 195 elements); data/traces/zindan-gate-q204309.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/serbia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
