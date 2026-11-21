# Akasaka Estate

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `akasaka-estate-q11635414` |
| Coordinates | 35.67675, 139.72697 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.67675/139.72697)) |
| Wikidata | [Q11635414](https://www.wikidata.org/wiki/Q11635414) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|estate\|imperial property\|territory\|Japanese Imperial Facilities |
| Administrative area | Moto-Akasaka |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline-only`, 316 elements (outline 1, marker 3, road 189, building 329, water 7, zone 33, retaining-wall 2).

Evidence: documented 0, mapped 316, inferred 0, derived 0; heights documented 0, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/558850354 historic=castle Q11635414 76 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 329 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 189 mapped (trace size budget); minor lanes are not drawn
- origin moved 74 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.67675/139.72697) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|estate\|imperial property\|territory\|Japanese Imperial Facilities; sitelinks=7; wikidata:Q11635414 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 316 elements); data/traces/akasaka-estate-q11635414.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
