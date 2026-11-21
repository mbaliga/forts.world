# Borj El Kastil

> Tunisia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `borj-el-kastil-q42765184` |
| Coordinates | 33.6835, 10.97393 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.6835/10.97393)) |
| Wikidata | [Q42765184](https://www.wikidata.org/wiki/Q42765184) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Midoun |
| Designations | listed monument of Tunisia |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 11 elements (outline 1, coastline 1, road 7, building 1, water 1).

Evidence: documented 0, mapped 11, inferred 0, derived 1; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/245254039 historic=ruins Q42765184 6 m from ledger point
- origin moved 1 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":877,"medianInside":0,"medianOutside":-2}
- 42 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.6835/10.97393) | 2026-11-17 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-17 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q42765184 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline-only, 11 elements); data/traces/borj-el-kastil-q42765184.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/tunisia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
