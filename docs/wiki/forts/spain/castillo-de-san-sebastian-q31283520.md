# Castillo de San Sebastián

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-san-sebastian-q31283520` |
| Coordinates | 42.23689, -8.72663 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.23689/-8.72663)) |
| Wikidata | [Q31283520](https://www.wikidata.org/wiki/Q31283520) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Vigo |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 320 elements (outline 1, marker 10, coastline 1, road 224, building 63, zone 8, wall 10, water 3).

Evidence: documented 0, mapped 320, inferred 0, derived 0; heights documented 8, inferred 0, unknown 65.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/302242173 historic=castle Q20547833 581 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 584 m from the ledger point to the outline centroid
- 19 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.23689/-8.72663) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q31283520 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 320 elements); data/traces/castillo-de-san-sebastian-q31283520.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
