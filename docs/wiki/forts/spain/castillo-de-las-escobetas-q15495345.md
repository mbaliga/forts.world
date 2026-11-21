# Castillo de las Escobetas

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-las-escobetas-q15495345` |
| Coordinates | 37.17264, -1.82366 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.17264/-1.82366)) |
| Wikidata | [Q15495345](https://www.wikidata.org/wiki/Q15495345) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Garrucha |
| Designations | bien de interés cultural |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 329 elements (outline 1, coastline 1, road 77, building 200, wall 128, water 2).

Evidence: documented 0, mapped 329, inferred 0, derived 2; heights documented 116, inferred 0, unknown 132.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/562585471 historic=castle Q15495345 7 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 200 mapped (trace size budget); the rest of the town is not drawn
- origin moved 8 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":265,"medianInside":0,"medianOutside":8.5}
- sea-1: DEM check ok {"cells":158,"medianInside":0,"medianOutside":7.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.17264/-1.82366) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=7; wikidata:Q15495345 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 329 elements); data/traces/castillo-de-las-escobetas-q15495345.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
