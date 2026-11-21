# Tower of the Złotoryja Gate

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tower-of-the-z-otoryja-gate-q48844774` |
| Coordinates | 51.10964, 15.58969 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.10964/15.58969)) |
| Wikidata | [Q48844774](https://www.wikidata.org/wiki/Q48844774) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Lwówek Śląski |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 265 elements (outline 1, marker 10, road 530, building 390, water 3, wall 60, zone 87, retaining-wall 4, waterway 4).

Evidence: documented 0, mapped 265, inferred 0, derived 0; heights documented 52, inferred 0, unknown 57.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1225621466 historic=citywalls 79 m from ledger point
- pruned to the outline plus 150 m: 1089 -> 645 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 209 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 312 mapped (trace size budget); minor lanes are not drawn
- origin moved 77 m from the ledger point to the outline centroid
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.10964/15.58969) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q48844774 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 265 elements); data/traces/tower-of-the-z-otoryja-gate-q48844774.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
