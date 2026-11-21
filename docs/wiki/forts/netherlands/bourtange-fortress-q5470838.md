# Bourtange Fortress

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bourtange-fortress-q5470838` |
| Coordinates | 53.00667, 7.19252 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.00667/7.19252)) |
| Wikidata | [Q5470838](https://www.wikidata.org/wiki/Q5470838) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|fortress |
| Administrative area | Bourtange |
| Inception | 1593 |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline-only`, 380 elements (outline 1, marker 23, road 245, building 216, zone 78, water 4, waterway 4).

Evidence: documented 0, mapped 380, inferred 0, derived 0; heights documented 42, inferred 0, unknown 78.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/222272320 historic=castle Q5470838 31 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 216 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 245 mapped (trace size budget); minor lanes are not drawn
- origin moved 30 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.00667/7.19252) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|fortress; sitelinks=11; wikidata:Q5470838 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 380 elements); data/traces/bourtange-fortress-q5470838.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
