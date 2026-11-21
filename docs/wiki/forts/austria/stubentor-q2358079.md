# Stubentor

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stubentor-q2358079` |
| Coordinates | 48.20767, 16.37922 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.20767/16.37922)) |
| Wikidata | [Q2358079](https://www.wikidata.org/wiki/Q2358079) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Vienna |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 3 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 361 elements (outline 1, marker 14, road 484, waterway 4, building 102, water 3, zone 75, retaining-wall 3, wall 9).

Evidence: documented 0, mapped 361, inferred 0, derived 0; heights documented 88, inferred 0, unknown 26.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2742809 historic=archaeological_site Q2358079 4 m from ledger point
- roads capped: kept the 150 longest of 484 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.20767/16.37922) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=3; wikidata:Q2358079 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 361 elements); data/traces/stubentor-q2358079.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
