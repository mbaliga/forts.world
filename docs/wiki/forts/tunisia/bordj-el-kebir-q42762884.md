# Bordj el Kebir

> Tunisia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bordj-el-kebir-q42762884` |
| Coordinates | 35.50526, 11.07631 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.50526/11.07631)) |
| Wikidata | [Q42762884](https://www.wikidata.org/wiki/Q42762884) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Mahdia |
| Designations | listed monument of Tunisia |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 292 elements (outline 1, marker 2, zone 1, road 47, wall 43, coastline 1, building 195, retaining-wall 1, water 1).

Evidence: documented 0, mapped 292, inferred 0, derived 1; heights documented 0, inferred 0, unknown 239.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/17410001 historic=castle 6 m from ledger point
- origin moved 9 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":357,"medianInside":3.3,"medianOutside":9}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.50526/11.07631) | 2026-11-17 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-17 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q42762884 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline+walls, 292 elements); data/traces/bordj-el-kebir-q42762884.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/tunisia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
