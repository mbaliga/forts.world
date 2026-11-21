# Cibali Police Station

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cibali-police-station-q133504485` |
| Coordinates | 41.02629, 28.95859 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.02629/28.95859)) |
| Wikidata | [Q133504485](https://www.wikidata.org/wiki/Q133504485) (CC0) |
| Wikidata class | fortification |
| Types | public building\|historic building\|outpost |
| Administrative area | Fatih |
| Wikipedia language editions | 2 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 202 elements (outline 1, road 77, coastline 2, building 391, wall 1, water 1).

Evidence: documented 0, mapped 202, inferred 0, derived 1; heights documented 0, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1198409150 historic=building Q121466582 106 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 391 mapped (trace size budget); the rest of the town is not drawn
- origin moved 106 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":43,"medianInside":0,"medianOutside":10.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.02629/28.95859) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; public building\|historic building\|outpost; sitelinks=2; wikidata:Q133504485 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 202 elements); data/traces/cibali-police-station-q133504485.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
