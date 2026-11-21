# Castillo de Albocácer

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-albocacer-q4889674` |
| Coordinates | 40.35644, 0.02542 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.35644/0.02542)) |
| Wikidata | [Q4889674](https://www.wikidata.org/wiki/Q4889674) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Albocàsser |
| Wikipedia language editions | 3 |
| OSM `historic` | tomb |

## What the model contains

Tier **T1**, status `outline+walls`, 51 elements (outline 1, road 18, zone 1, waterway 3, building 23, wall 5).

Evidence: documented 0, mapped 51, inferred 0, derived 0; heights documented 0, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1346494132 historic=tomb 563 m from ledger point
- origin moved 563 m from the ledger point to the outline centroid
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.35644/0.02542) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q4889674 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 51 elements); data/traces/castillo-de-albocacer-q4889674.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
