# Kajborg

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kajborg-q1721836` |
| Coordinates | 54.8546, 9.991 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.8546/9.991)) |
| Wikidata | [Q1721836](https://www.wikidata.org/wiki/Q1721836) (CC0) |
| Wikidata class | fort |
| Types | hillfort |
| Administrative area | Sønderborg Municipality |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 34 elements (outline 1, road 14, building 5, zone 5, coastline 4, waterway 3, water 2).

Evidence: documented 0, mapped 34, inferred 0, derived 2; heights documented 2, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/462644944 historic=archaeological_site Q1721836 2 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":29,"medianInside":-6,"medianOutside":0.4}
- sea-1: DEM check ok {"cells":145,"medianInside":-6,"medianOutside":0.7}
- 591 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.8546/9.991) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; hillfort; sitelinks=2; wikidata:Q1721836 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 34 elements); data/traces/kajborg-q1721836.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
