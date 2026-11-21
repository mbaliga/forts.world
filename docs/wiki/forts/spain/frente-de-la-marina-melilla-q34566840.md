# Frente de la Marina, Melilla

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `frente-de-la-marina-melilla-q34566840` |
| Coordinates | 35.2931, -2.93379 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.2931/-2.93379)) |
| Wikidata | [Q34566840](https://www.wikidata.org/wiki/Q34566840) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall |
| Administrative area | Melilla |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 235 elements (outline 1, marker 5, road 126, building 71, coastline 2, wall 13, retaining-wall 7, cliff 3, zone 5, water 2).

Evidence: documented 0, mapped 235, inferred 0, derived 2; heights documented 5, inferred 0, unknown 86.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/579982424 historic=castle 208 m from ledger point
- origin moved 206 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":10,"medianInside":1.1,"medianOutside":8.4}
- sea-1: DEM check ok {"cells":29,"medianInside":5.6,"medianOutside":9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.2931/-2.93379) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall; sitelinks=3; wikidata:Q34566840 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 235 elements); data/traces/frente-de-la-marina-melilla-q34566840.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
