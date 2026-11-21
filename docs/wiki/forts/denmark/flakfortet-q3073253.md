# Flakfortet

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `flakfortet-q3073253` |
| Coordinates | 55.70361, 12.73139 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.70361/12.73139)) |
| Wikidata | [Q3073253](https://www.wikidata.org/wiki/Q3073253) (CC0) |
| Wikidata class | fort |
| Types | artificial island\|sea fort |
| Administrative area | Copenhagen Municipality |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | https://flakfortet.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 56 elements (outline 1, road 42, wall 2, building 11).

Evidence: documented 0, mapped 56, inferred 0, derived 0; heights documented 0, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/4218311 historic=castle Q3073253 28 m from ledger point
- origin moved 25 m from the ledger point to the outline centroid
- 16641 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.70361/12.73139) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; artificial island\|sea fort; sitelinks=9; wikidata:Q3073253 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 56 elements); data/traces/flakfortet-q3073253.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
