# El Qoseir Fort

> Egypt · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `el-qoseir-fort-q68171278` |
| Coordinates | 26.1052, 34.2832 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/26.1052/34.2832)) |
| Wikidata | [Q68171278](https://www.wikidata.org/wiki/Q68171278) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | El-Quseir |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 190 elements (outline 1, coastline 1, building 4, road 182, wall 1, water 1).

Evidence: documented 0, mapped 190, inferred 0, derived 1; heights documented 1, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/93340007 historic=fort 25 m from ledger point
- origin moved 24 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":3,"medianInside":7.4,"medianOutside":13.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/26.1052/34.2832) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=4; wikidata:Q68171278 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 190 elements); data/traces/el-qoseir-fort-q68171278.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/egypt.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
