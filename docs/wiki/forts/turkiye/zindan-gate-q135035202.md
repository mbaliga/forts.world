# Zindan Gate

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `zindan-gate-q135035202` |
| Coordinates | 41.0187, 28.96878 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.0187/28.96878)) |
| Wikidata | [Q135035202](https://www.wikidata.org/wiki/Q135035202) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall\|historic building |
| Administrative area | Fatih |
| Wikipedia language editions | 1 |
| OSM `historic` | tomb |

## What the model contains

Tier **T1**, status `outline-only`, 271 elements (outline 1, marker 1, building 118, road 134, coastline 2, zone 14, water 1).

Evidence: documented 0, mapped 271, inferred 0, derived 1; heights documented 3, inferred 0, unknown 115.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/438658753 historic=tomb 21 m from ledger point
- origin moved 21 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":138,"medianInside":0,"medianOutside":4.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.0187/28.96878) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall\|historic building; sitelinks=1; wikidata:Q135035202 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 271 elements); data/traces/zindan-gate-q135035202.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
