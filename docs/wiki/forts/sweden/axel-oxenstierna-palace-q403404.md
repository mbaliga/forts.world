# Axel Oxenstierna Palace

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `axel-oxenstierna-palace-q403404` |
| Coordinates | 59.32593, 18.06962 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.32593/18.06962)) |
| Wikidata | [Q403404](https://www.wikidata.org/wiki/Q403404) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|architectural landmark |
| Administrative area | Stockholm Municipality |
| Inception | 1668 |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 306 elements (outline 1, marker 8, road 251, building 197, wall 12, coastline 3, retaining-wall 8, waterway 1, water 2, zone 1).

Evidence: documented 0, mapped 306, inferred 0, derived 1; heights documented 89, inferred 0, unknown 51.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/170363224 historic=castle Q403404 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 197 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 251 mapped (trace size budget); minor lanes are not drawn
- sea-0: DEM check failed {"cells":0,"medianInside":null,"medianOutside":22.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.32593/18.06962) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|architectural landmark; sitelinks=8; wikidata:Q403404 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 306 elements); data/traces/axel-oxenstierna-palace-q403404.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
