# Castle of Tarifa

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-tarifa-q5050417` |
| Coordinates | 36.0117, -5.60268 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.0117/-5.60268)) |
| Wikidata | [Q5050417](https://www.wikidata.org/wiki/Q5050417) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Tarifa |
| Designations | bien de interés cultural |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | no |

## What the model contains

Tier **T1**, status `outline+walls`, 360 elements (outline 1, marker 12, road 310, building 263, zone 23, wall 40, retaining-wall 5, water 5, coastline 4).

Evidence: documented 0, mapped 360, inferred 0, derived 3; heights documented 113, inferred 0, unknown 52.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/15611058 historic=castle 10 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 263 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 310 mapped (trace size budget); minor lanes are not drawn
- origin moved 11 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":15,"medianInside":-0.2,"medianOutside":11}
- sea-1: DEM check ok {"cells":143,"medianInside":1.5,"medianOutside":12.1}
- sea-2: DEM check ok {"cells":77,"medianInside":0,"medianOutside":11.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.0117/-5.60268) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=9; wikidata:Q5050417 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 360 elements); data/traces/castle-of-tarifa-q5050417.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
