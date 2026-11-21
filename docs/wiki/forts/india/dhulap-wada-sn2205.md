# Dhulap Wada

> India · Maharashtra · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dhulap-wada-sn2205` |
| Coordinates | 16.555572, 73.332846 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/16.555572/73.332846)) |
| Wikidata | [Q3827850](https://www.wikidata.org/wiki/Q3827850) (CC0) |
| Wikidata class | fort |
| Types | sea fort |
| Administrative area | Ratnagiri district |
| Designations | part of UNESCO World Heritage Site\|Monument of National Importance |
| Wikipedia language editions | 7 |
| Programme catalogue | confidence medium, significance rank 5514; sources smith-newton:r2205 |
| OSM `historic` | fort |
| OSM `heritage` | https://whc.unesco.org/en/list/1739 |

## What the model contains

Tier **T1**, status `outline+walls`, 19 elements (outline 1, marker 1, road 3, wall 9, coastline 3, building 1, water 1).

Evidence: documented 0, mapped 19, inferred 0, derived 1; heights documented 0, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/9158821 historic=fort Q3827850 549 m from ledger point
- origin moved 550 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":2040,"medianInside":1.4,"medianOutside":6}
- 407 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/16.555572/73.332846) | 2026-11-17 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-17 |

## Ledger note

type=fort; confidence=medium; rank=5514; sources=1 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline+walls, 19 elements); data/traces/dhulap-wada-sn2205.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
