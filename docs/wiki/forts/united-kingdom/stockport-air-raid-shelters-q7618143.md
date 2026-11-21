# Stockport Air Raid Shelters

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stockport-air-raid-shelters-q7618143` |
| Coordinates | 53.4098, -2.1608 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.4098/-2.1608)) |
| Wikidata | [Q7618143](https://www.wikidata.org/wiki/Q7618143) (CC0) |
| Wikidata class | fortification |
| Types | air-raid shelter\|local authority museum\|military museum |
| Administrative area | Stockport |
| Wikipedia language editions | 2 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 311 elements (outline 1, water 1, road 359, building 137, retaining-wall 7, waterway 3, zone 22, wall 7).

Evidence: documented 0, mapped 311, inferred 0, derived 0; heights documented 12, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/977383978 historic=building 177 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 137 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 359 mapped (trace size budget); minor lanes are not drawn
- origin moved 179 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.4098/-2.1608) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; air-raid shelter\|local authority museum\|military museum; sitelinks=2; wikidata:Q7618143 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 311 elements); data/traces/stockport-air-raid-shelters-q7618143.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
