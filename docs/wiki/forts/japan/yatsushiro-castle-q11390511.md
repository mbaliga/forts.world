# Yatsushiro Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `yatsushiro-castle-q11390511` |
| Coordinates | 32.50746, 130.59989 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/32.50746/130.59989)) |
| Wikidata | [Q11390511](https://www.wikidata.org/wiki/Q11390511) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Yatsushiro |
| Inception | 1622 |
| Designations | Historic Site of Japan |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 375 elements (outline 1, marker 13, waterway 1, road 108, building 221, retaining-wall 26, water 1, wall 2, zone 2).

Evidence: documented 0, mapped 375, inferred 0, derived 0; heights documented 0, inferred 0, unknown 249.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/158829859 historic=castle Q11390511 30 m from ledger point
- origin moved 24 m from the ledger point to the outline centroid
- 6 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/32.50746/130.59989) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=5; wikidata:Q11390511 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 375 elements); data/traces/yatsushiro-castle-q11390511.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
