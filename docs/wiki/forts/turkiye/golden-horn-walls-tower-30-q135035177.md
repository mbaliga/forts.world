# Golden Horn Walls, Tower 30

> Türkiye · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `golden-horn-walls-tower-30-q135035177` |
| Coordinates | 41.0311, 28.94968 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.0311/28.94968)) |
| Wikidata | [Q135035177](https://www.wikidata.org/wiki/Q135035177) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall\|historic building |
| Administrative area | Fatih |
| Wikipedia language editions | 1 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `location-only`, 216 elements (road 90, building 536, coastline 1, zone 4, water 1).

Evidence: documented 0, mapped 216, inferred 0, derived 1; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20383954 historic=building Q135430338 23 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 536 mapped (trace size budget); the rest of the town is not drawn
- sea-0: DEM check ok {"cells":68,"medianInside":0,"medianOutside":8.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.0311/28.94968) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall\|historic building; sitelinks=1; wikidata:Q135035177 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 216 elements); data/traces/golden-horn-walls-tower-30-q135035177.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
