# Royal Citadel

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `royal-citadel-q7373944` |
| Coordinates | 50.3649, -4.13805 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.3649/-4.13805)) |
| Wikidata | [Q7373944](https://www.wikidata.org/wiki/Q7373944) (CC0) |
| Wikidata class | fort |
| Types | fortification\|independent museum |
| Administrative area | City of Plymouth |
| Inception | 1592 |
| Designations | scheduled monument |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 308 elements (outline 1, marker 7, water 3, road 365, building 237, wall 10, zone 9, coastline 4, retaining-wall 4).

Evidence: documented 0, mapped 308, inferred 0, derived 1; heights documented 17, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2368840 historic=castle Q7373944 47 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 237 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 365 mapped (trace size budget); minor lanes are not drawn
- origin moved 47 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":390,"medianInside":1.2,"medianOutside":22.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.3649/-4.13805) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|independent museum; sitelinks=5; wikidata:Q7373944 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 308 elements); data/traces/royal-citadel-q7373944.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
