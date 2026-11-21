# Castell dels Cruïlles

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castell-dels-cruilles-q5645133` |
| Coordinates | 39.5441, -0.38556 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.5441/-0.38556)) |
| Wikidata | [Q5645133](https://www.wikidata.org/wiki/Q5645133) (CC0) |
| Wikidata class | castle |
| Types | castle\|monument |
| Administrative area | Alfara del Patriarca |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 265 elements (outline 1, road 187, building 537, wall 194, zone 1, waterway 1).

Evidence: documented 0, mapped 265, inferred 0, derived 0; heights documented 0, inferred 0, unknown 184.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/910928891 historic=castle Q5645133 18 m from ledger point
- pruned to the outline plus 150 m: 921 -> 533 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 328 mapped (trace size budget); the rest of the town is not drawn
- origin moved 17 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.5441/-0.38556) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|monument; sitelinks=3; wikidata:Q5645133 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 265 elements); data/traces/castell-dels-cruilles-q5645133.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
