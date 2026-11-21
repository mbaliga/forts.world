# Tercer Recinto Fortificado

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tercer-recinto-fortificado-q34567036` |
| Coordinates | 35.29443, -2.93597 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.29443/-2.93597)) |
| Wikidata | [Q34567036](https://www.wikidata.org/wiki/Q34567036) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Melilla |
| Designations | Historic Ensemble\|bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 231 elements (outline 1, marker 5, road 134, building 61, coastline 2, wall 13, cliff 2, retaining-wall 6, zone 5, water 2).

Evidence: documented 0, mapped 231, inferred 0, derived 2; heights documented 5, inferred 0, unknown 75.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/819553582 historic=castle 6 m from ledger point
- origin moved 7 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":4,"medianInside":0.9,"medianOutside":9.8}
- sea-1: DEM check ok {"cells":33,"medianInside":5.5,"medianOutside":10.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.29443/-2.93597) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=3; wikidata:Q34567036 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 231 elements); data/traces/tercer-recinto-fortificado-q34567036.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
