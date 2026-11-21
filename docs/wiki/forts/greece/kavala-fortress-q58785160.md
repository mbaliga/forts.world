# Kavala Fortress

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kavala-fortress-q58785160` |
| Coordinates | 40.93417, 24.41528 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.93417/24.41528)) |
| Wikidata | [Q58785160](https://www.wikidata.org/wiki/Q58785160) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress |
| Administrative area | Kavala Municipality |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.castle-kavala.gr/ |

## What the model contains

Tier **T1**, status `outline+walls`, 202 elements (outline 1, marker 3, coastline 1, road 102, wall 10, zone 4, building 73, retaining-wall 5, cliff 1, water 2).

Evidence: documented 0, mapped 202, inferred 0, derived 2; heights documented 4, inferred 0, unknown 84.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1442403524 historic=castle Q58785160 34 m from ledger point
- origin moved 31 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":34,"medianInside":0.2,"medianOutside":23.8}
- sea-1: DEM check ok {"cells":21,"medianInside":0,"medianOutside":23.4}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.93417/24.41528) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress; sitelinks=6; wikidata:Q58785160 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 202 elements); data/traces/kavala-fortress-q58785160.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
