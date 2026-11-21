# Castle and city walls of Chelva

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-and-city-walls-of-chelva-q5757807` |
| Coordinates | 39.7471, -0.99777 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.7471/-0.99777)) |
| Wikidata | [Q5757807](https://www.wikidata.org/wiki/Q5757807) (CC0) |
| Wikidata class | fort |
| Types | city fortifications |
| Administrative area | Chelva |
| Designations | Red List of Endangered Heritage item\|bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 303 elements (outline 1, road 84, building 1046, waterway 2, water 2, wall 225, zone 1).

Evidence: documented 0, mapped 303, inferred 0, derived 0; heights documented 0, inferred 0, unknown 235.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/545472804 historic=yes Q77787424 19 m from ledger point
- pruned to the outline plus 150 m: 1361 -> 1018 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 775 mapped (trace size budget); the rest of the town is not drawn
- origin moved 19 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.7471/-0.99777) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; city fortifications; sitelinks=3; wikidata:Q5757807 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 303 elements); data/traces/castle-and-city-walls-of-chelva-q5757807.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
