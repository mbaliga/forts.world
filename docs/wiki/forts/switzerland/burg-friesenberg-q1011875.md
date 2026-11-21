# Burg Friesenberg

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-friesenberg-q1011875` |
| Coordinates | 47.3582, 8.49403 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.3582/8.49403)) |
| Wikidata | [Q1011875](https://www.wikidata.org/wiki/Q1011875) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Zurich |
| Designations | class B Swiss cultural property of regional significance |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 88 elements (outline 1, marker 1, road 61, waterway 6, wall 7, cliff 4, zone 6, water 1).

Evidence: documented 0, mapped 88, inferred 0, derived 0; heights documented 0, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1460597623 historic=ruins 10 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.3582/8.49403) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=2; wikidata:Q1011875 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 88 elements); data/traces/burg-friesenberg-q1011875.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
