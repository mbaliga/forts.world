# Bolaman Castle

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bolaman-castle-q4938906` |
| Coordinates | 41.0367, 37.5911 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.0367/37.5911)) |
| Wikidata | [Q4938906](https://www.wikidata.org/wiki/Q4938906) (CC0) |
| Wikidata class | castle |
| Types | castle\|ethnographic museum |
| Administrative area | Fatsa |
| Inception | 2009 |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 26 elements (outline 1, coastline 1, waterway 1, building 14, road 7, water 2).

Evidence: documented 0, mapped 26, inferred 0, derived 2; heights documented 1, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/813552549 historic=fort Q4938906 37 m from ledger point
- origin moved 39 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":62,"medianInside":0,"medianOutside":0.2}
- sea-1: DEM check ok {"cells":103,"medianInside":0,"medianOutside":2.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.0367/37.5911) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|ethnographic museum; sitelinks=4; wikidata:Q4938906 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 26 elements); data/traces/bolaman-castle-q4938906.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
