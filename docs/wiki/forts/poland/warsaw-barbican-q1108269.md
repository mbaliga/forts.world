# Warsaw Barbican

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `warsaw-barbican-q1108269` |
| Coordinates | 52.25057, 21.01013 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.25057/21.01013)) |
| Wikidata | [Q1108269](https://www.wikidata.org/wiki/Q1108269) (CC0) |
| Wikidata class | fort |
| Types | fortification\|architectural heritage monument |
| Administrative area | Warsaw |
| Inception | 1548 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 17 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 210 elements (outline 1, marker 41, waterway 1, road 411, building 230, wall 81, zone 61, retaining-wall 9).

Evidence: documented 0, mapped 210, inferred 0, derived 0; heights documented 60, inferred 0, unknown 39.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/38091396 historic=citywalls 35 m from ledger point
- pruned to the outline plus 80 m: 835 -> 252 elements
- roads capped: kept the 80 longest of 123 mapped (trace size budget); minor lanes are not drawn
- origin moved 35 m from the ledger point to the outline centroid
- 58 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.25057/21.01013) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|architectural heritage monument; sitelinks=17; wikidata:Q1108269 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 315 elements); data/traces/warsaw-barbican-q1108269.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
