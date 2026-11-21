# Fischertor Augsburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fischertor-augsburg-q1420163` |
| Coordinates | 48.37726, 10.89393 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.37726/10.89393)) |
| Wikidata | [Q1420163](https://www.wikidata.org/wiki/Q1420163) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Augsburg |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 356 elements (outline 1, marker 1, road 178, wall 19, building 131, zone 15, waterway 5, water 3, retaining-wall 2).

Evidence: documented 0, mapped 356, inferred 0, derived 0; heights documented 59, inferred 0, unknown 94.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/133835910 historic=citywalls Q1875506 295 m from ledger point
- origin moved 295 m from the ledger point to the centre of the mapped site
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.37726/10.89393) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q1420163 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 356 elements); data/traces/fischertor-augsburg-q1420163.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
