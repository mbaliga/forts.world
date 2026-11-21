# Fort McHenry

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-mchenry-q1438634` |
| Coordinates | 39.26333, -76.58 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.26333/-76.58)) |
| Wikidata | [Q1438634](https://www.wikidata.org/wiki/Q1438634) (CC0) |
| Wikidata class | fort |
| Types | star fort\|historic site |
| Administrative area | Baltimore |
| Inception | 1776 |
| Wikipedia language editions | 17 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 102 elements (outline 1, marker 20, road 51, building 15, zone 7, coastline 2, wall 3, waterway 1, water 2).

Evidence: documented 0, mapped 102, inferred 0, derived 2; heights documented 0, inferred 0, unknown 18.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1220301007 historic=fort Q1438634 14 m from ledger point
- origin moved 13 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":68,"medianInside":0.3,"medianOutside":5.1}
- sea-1: DEM check ok {"cells":93,"medianInside":0.3,"medianOutside":5.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.26333/-76.58) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; star fort\|historic site; sitelinks=17; wikidata:Q1438634 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 102 elements); data/traces/fort-mchenry-q1438634.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
