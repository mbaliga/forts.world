# Nebojša Tower

> Serbia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nebojsa-tower-q1669926` |
| Coordinates | 44.82728, 20.44789 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.82728/20.44789)) |
| Wikidata | [Q1669926](https://www.wikidata.org/wiki/Q1669926) (CC0) |
| Wikidata class | fort |
| Types | tower\|museum\|fortification\|dungeon |
| Administrative area | Belgrade |
| Wikipedia language editions | 7 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 235 elements (outline 1, marker 10, waterway 1, road 116, building 17, wall 54, zone 30, cliff 2, retaining-wall 3).

Evidence: documented 0, mapped 235, inferred 0, derived 0; heights documented 4, inferred 0, unknown 71.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/709316512 historic=citywalls 142 m from ledger point
- origin moved 144 m from the ledger point to the outline centroid
- 20 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.82728/20.44789) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; tower\|museum\|fortification\|dungeon; sitelinks=7; wikidata:Q1669926 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 235 elements); data/traces/nebojsa-tower-q1669926.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/serbia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
