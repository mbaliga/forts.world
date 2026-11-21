# Arco de San Gil

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `arco-de-san-gil-q64152043` |
| Coordinates | 42.34367, -3.70266 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.34367/-3.70266)) |
| Wikidata | [Q64152043](https://www.wikidata.org/wiki/Q64152043) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Burgos |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `castle_type` | fortress |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 236 elements (outline 1, marker 13, road 354, wall 89, building 235, retaining-wall 45, zone 4, water 2, waterway 1).

Evidence: documented 0, mapped 236, inferred 0, derived 0; heights documented 31, inferred 0, unknown 116.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/60260505 historic=citywalls Q26738930 223 m from ledger point
- pruned to the outline plus 150 m: 744 -> 432 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 146 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 191 mapped (trace size budget); minor lanes are not drawn
- origin moved 223 m from the ledger point to the outline centroid
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.34367/-3.70266) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q64152043 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 236 elements); data/traces/arco-de-san-gil-q64152043.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
