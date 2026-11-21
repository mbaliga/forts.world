# Visborg

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `visborg-q340350` |
| Coordinates | 57.63542, 18.28611 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.63542/18.28611)) |
| Wikidata | [Q340350](https://www.wikidata.org/wiki/Q340350) (CC0) |
| Wikidata class | ruin |
| Types | ancient monument\|castle ruin |
| Administrative area | Region Gotland |
| Inception | 1500 |
| Designations | monument in Fornminnesregistret |
| Wikipedia language editions | 6 |
| OSM `historic` | archaeological_site |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 112 elements (outline 1, marker 1, road 41, building 55, coastline 1, wall 9, retaining-wall 2, water 1).

Evidence: documented 0, mapped 112, inferred 0, derived 1; heights documented 13, inferred 0, unknown 54.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/14377275 historic=archaeological_site Q1474383 898 m from ledger point
- origin moved 1155 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":24,"medianInside":4.7,"medianOutside":25.1}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.63542/18.28611) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ancient monument\|castle ruin; sitelinks=6; wikidata:Q340350 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 112 elements); data/traces/visborg-q340350.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
