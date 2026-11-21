# St. Florian's Gate

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `st-florian-s-gate-q1363724` |
| Coordinates | 50.06472, 19.94139 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.06472/19.94139)) |
| Wikidata | [Q1363724](https://www.wikidata.org/wiki/Q1363724) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|architectural heritage monument |
| Administrative area | Kraków Old Town |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 20 |
| OSM `historic` | fortification |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 149 elements (outline 1, marker 21, road 309, zone 88, building 210, wall 55, retaining-wall 2).

Evidence: documented 0, mapped 149, inferred 0, derived 0; heights documented 36, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/25247417 historic=fortification 14 m from ledger point
- pruned to the outline plus 80 m: 686 -> 148 elements
- origin moved 14 m from the ledger point to the outline centroid
- 72 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.06472/19.94139) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|architectural heritage monument; sitelinks=20; wikidata:Q1363724 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 288 elements); data/traces/st-florian-s-gate-q1363724.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
