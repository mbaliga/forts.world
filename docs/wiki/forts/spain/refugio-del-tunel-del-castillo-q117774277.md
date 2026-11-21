# Refugio del túnel del Castillo

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `refugio-del-tunel-del-castillo-q117774277` |
| Coordinates | 38.8425, 0.10639 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.8425/0.10639)) |
| Wikidata | [Q117774277](https://www.wikidata.org/wiki/Q117774277) (CC0) |
| Wikidata class | fortification |
| Types | air-raid shelter |
| Administrative area | Dénia |
| Designations | Property of Local Relevance |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 357 elements (outline 1, marker 5, road 262, building 1127, wall 71, coastline 1, zone 5, retaining-wall 1, cliff 1, water 1).

Evidence: documented 0, mapped 357, inferred 0, derived 1; heights documented 3, inferred 0, unknown 190.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/202285121 historic=citywalls 81 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 1127 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 262 mapped (trace size budget); minor lanes are not drawn
- origin moved 81 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":10,"medianInside":0,"medianOutside":12.4}
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.8425/0.10639) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; air-raid shelter; sitelinks=1; wikidata:Q117774277 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 357 elements); data/traces/refugio-del-tunel-del-castillo-q117774277.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
