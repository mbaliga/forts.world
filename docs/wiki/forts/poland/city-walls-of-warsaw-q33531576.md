# City walls of Warsaw

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-warsaw-q33531576` |
| Coordinates | 52.24978, 21.00953 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.24978/21.00953)) |
| Wikidata | [Q33531576](https://www.wikidata.org/wiki/Q33531576) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Śródmieście |
| Inception | 1300 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 5 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 232 elements (outline 1, marker 51, waterway 1, road 379, building 209, wall 54, zone 65, retaining-wall 4).

Evidence: documented 0, mapped 232, inferred 0, derived 0; heights documented 55, inferred 0, unknown 44.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1569435303 historic=citywalls 13 m from ledger point
- pruned to the outline plus 150 m: 764 -> 385 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 109 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 185 mapped (trace size budget); minor lanes are not drawn
- origin moved 13 m from the ledger point to the outline centroid
- 19 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.24978/21.00953) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=5; wikidata:Q33531576 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 232 elements); data/traces/city-walls-of-warsaw-q33531576.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
