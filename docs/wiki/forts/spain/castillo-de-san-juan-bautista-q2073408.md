# Castillo de San Juan Bautista

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-san-juan-bautista-q2073408` |
| Coordinates | 28.45556, -16.2525 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/28.45556/-16.2525)) |
| Wikidata | [Q2073408](https://www.wikidata.org/wiki/Q2073408) (CC0) |
| Wikidata class | castle |
| Types | castle\|monument |
| Administrative area | Santa Cruz de Tenerife |
| Inception | 1641 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 14 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 163 elements (outline 1, road 99, building 9, coastline 14, wall 6, water 3, retaining-wall 31).

Evidence: documented 0, mapped 163, inferred 0, derived 1; heights documented 18, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/14950682 historic=castle Q2073408 16 m from ledger point
- island ring (847 m2) cut out of sea-0
- origin moved 17 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":434,"medianInside":0,"medianOutside":10.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/28.45556/-16.2525) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|monument; sitelinks=14; wikidata:Q2073408 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 163 elements); data/traces/castillo-de-san-juan-bautista-q2073408.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
