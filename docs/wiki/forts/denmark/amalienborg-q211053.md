# Amalienborg

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `amalienborg-q211053` |
| Coordinates | 55.68398, 12.59314 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.68398/12.59314)) |
| Wikidata | [Q211053](https://www.wikidata.org/wiki/Q211053) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|royal palace\|museum building |
| Administrative area | Copenhagen Municipality |
| Inception | 1760 |
| Designations | monument on Kulturstyrelsen register\|Tentative World Heritage Site |
| Wikipedia language editions | 45 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 350 elements (outline 1, marker 19, road 233, building 300, zone 10, wall 28, water 7, retaining-wall 13, coastline 2).

Evidence: documented 0, mapped 350, inferred 0, derived 2; heights documented 44, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/378106484 historic=castle Q211053 7 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 300 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 233 mapped (trace size budget); minor lanes are not drawn
- origin moved 9 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":819,"medianInside":7.4,"medianOutside":4.9}
- sea-1: DEM check ok {"cells":144,"medianInside":3,"medianOutside":7.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.68398/12.59314) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|royal palace\|museum building; sitelinks=45; wikidata:Q211053 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 350 elements); data/traces/amalienborg-q211053.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
