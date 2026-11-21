# Krak des Chevaliers

> Syria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `krak-des-chevaliers-q177549` |
| Coordinates | 34.75694, 36.29472 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.75694/36.29472)) |
| Wikidata | [Q177549](https://www.wikidata.org/wiki/Q177549) (CC0) |
| Wikidata class | castle |
| Types | concentric castle\|crusader castle |
| Administrative area | Syria |
| Inception | 1031 |
| Designations | part of UNESCO World Heritage Site |
| UNESCO WHC id | 1229-001 |
| Wikipedia language editions | 77 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 19 elements (outline 1, road 12, wall 1, building 4).

Evidence: documented 0, mapped 19, inferred 0, derived 0; heights documented 1, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/226877188 historic=castle Q177549 13 m from ledger point
- origin moved 13 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.75694/36.29472) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; concentric castle\|crusader castle; sitelinks=77; wikidata:Q177549 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 19 elements); data/traces/krak-des-chevaliers-q177549.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/syria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
