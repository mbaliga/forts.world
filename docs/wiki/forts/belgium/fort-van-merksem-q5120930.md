# Fort van Merksem

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-van-merksem-q5120930` |
| Coordinates | 51.26333, 4.4575 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.26333/4.4575)) |
| Wikidata | [Q5120930](https://www.wikidata.org/wiki/Q5120930) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Antwerp |
| Designations | beschermd monument |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 279 elements (outline 1, marker 1, water 1, road 155, zone 6, building 420).

Evidence: documented 0, mapped 279, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/956146301 historic=fort Q5120930 20 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 420 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 155 mapped (trace size budget); minor lanes are not drawn
- origin moved 21 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.26333/4.4575) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q5120930 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 279 elements); data/traces/fort-van-merksem-q5120930.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
