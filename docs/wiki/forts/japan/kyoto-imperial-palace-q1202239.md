# Kyoto Imperial Palace

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kyoto-imperial-palace-q1202239` |
| Coordinates | 35.02526, 135.76235 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.02526/135.76235)) |
| Wikidata | [Q1202239](https://www.wikidata.org/wiki/Q1202239) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|gosho\|royal palace\|Japanese Imperial Facilities |
| Administrative area | Kamigyō-ku |
| Inception | 1337 |
| Wikipedia language editions | 33 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 316 elements (outline 1, marker 13, road 254, building 453, zone 17, water 3, wall 10, waterway 2).

Evidence: documented 0, mapped 316, inferred 0, derived 0; heights documented 4, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/554879249 historic=castle Q1202239 26 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 453 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 254 mapped (trace size budget); minor lanes are not drawn
- origin moved 33 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.02526/135.76235) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|gosho\|royal palace\|Japanese Imperial Facilities; sitelinks=33; wikidata:Q1202239 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 316 elements); data/traces/kyoto-imperial-palace-q1202239.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
