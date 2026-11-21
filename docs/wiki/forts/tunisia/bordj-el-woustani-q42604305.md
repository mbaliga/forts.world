# Bordj El Woustani

> Tunisia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bordj-el-woustani-q42604305` |
| Coordinates | 37.16906, 10.19169 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.16906/10.19169)) |
| Wikidata | [Q42604305](https://www.wikidata.org/wiki/Q42604305) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Ghar el-Melh |
| Designations | listed monument of Tunisia |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 60 elements (outline 1, road 51, wall 3, zone 2, coastline 1, water 2).

Evidence: documented 0, mapped 60, inferred 0, derived 2; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2314653 historic=castle 4 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":97,"medianInside":1,"medianOutside":8.1}
- sea-1: DEM check ok {"cells":125,"medianInside":-1.8,"medianOutside":8.4}
- 58 DEM cells below -3 m (bathymetry) clamped to -3 m
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.16906/10.19169) | 2026-11-17 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-17 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q42604305 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline+walls, 60 elements); data/traces/bordj-el-woustani-q42604305.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/tunisia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
