# Batería de San Felipe

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bateria-de-san-felipe-q33060633` |
| Coordinates | 35.29342, -2.93425 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.29342/-2.93425)) |
| Wikidata | [Q33060633](https://www.wikidata.org/wiki/Q33060633) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Melilla |
| Designations | Historic Ensemble\|bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 235 elements (outline 1, marker 5, road 126, building 71, coastline 2, wall 13, retaining-wall 7, cliff 3, zone 5, water 2).

Evidence: documented 0, mapped 235, inferred 0, derived 2; heights documented 5, inferred 0, unknown 86.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/579982424 historic=castle 153 m from ledger point
- origin moved 152 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":10,"medianInside":1.1,"medianOutside":8.4}
- sea-1: DEM check ok {"cells":29,"medianInside":5.6,"medianOutside":9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.29342/-2.93425) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=1; wikidata:Q33060633 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 235 elements); data/traces/bateria-de-san-felipe-q33060633.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
