# Castillo

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-q97630987` |
| Coordinates | 38.2992, -2.64972 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.2992/-2.64972)) |
| Wikidata | [Q97630987](https://www.wikidata.org/wiki/Q97630987) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Segura de la Sierra |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 98 elements (outline 1, marker 1, road 56, building 25, wall 5, water 1, retaining-wall 4, zone 5).

Evidence: documented 0, mapped 98, inferred 0, derived 0; heights documented 15, inferred 0, unknown 19.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/9610191 historic=castle Q97630987 13 m from ledger point
- origin moved 16 m from the ledger point to the outline centroid
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.2992/-2.64972) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q97630987 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 98 elements); data/traces/castillo-q97630987.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
