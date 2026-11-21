# Borj El Kebir

> Tunisia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `borj-el-kebir-q893447` |
| Coordinates | 33.88389, 10.86028 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.88389/10.86028)) |
| Wikidata | [Q893447](https://www.wikidata.org/wiki/Q893447) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Houmt Souk |
| Designations | listed monument of Tunisia |
| Wikipedia language editions | 12 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 363 elements (outline 1, road 88, building 228, wall 45, coastline 1).

Evidence: documented 0, mapped 363, inferred 0, derived 0; heights documented 2, inferred 0, unknown 271.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2447358 historic=building 701 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 702 m from the ledger point to the outline centroid
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.88389/10.86028) | 2026-11-17 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-17 |

## Ledger note

world; type=fort; fort; sitelinks=12; wikidata:Q893447 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline+walls, 363 elements); data/traces/borj-el-kebir-q893447.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/tunisia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
