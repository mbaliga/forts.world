# Alcázar de Colón

> Dominican Republic · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `alcazar-de-colon-q668772` |
| Coordinates | 18.4775, -69.88275 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/18.4775/-69.88275)) |
| Wikidata | [Q668772](https://www.wikidata.org/wiki/Q668772) (CC0) |
| Wikidata class | fort |
| Types | museum\|fort |
| Inception | 1511 |
| Designations | part of UNESCO World Heritage Site |
| Wikipedia language editions | 19 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 134 elements (outline 1, marker 7, road 59, building 59, wall 4, zone 2, water 1, waterway 1).

Evidence: documented 0, mapped 134, inferred 0, derived 0; heights documented 2, inferred 0, unknown 61.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/221169027 historic=castle Q668772 5 m from ledger point
- origin moved 9 m from the ledger point to the outline centroid
- 314 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/18.4775/-69.88275) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; museum\|fort; sitelinks=19; wikidata:Q668772 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 134 elements); data/traces/alcazar-de-colon-q668772.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/dominican-republic.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
