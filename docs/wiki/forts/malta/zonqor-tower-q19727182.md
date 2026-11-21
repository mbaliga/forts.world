# Żonqor Tower

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `zonqor-tower-q19727182` |
| Coordinates | 35.86756, 14.57411 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.86756/14.57411)) |
| Wikidata | [Q19727182](https://www.wikidata.org/wiki/Q19727182) (CC0) |
| Wikidata class | fortification |
| Types | coastal tower |
| Administrative area | Marsaskala |
| Inception | 1650 |
| Wikipedia language editions | 6 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 41 elements (outline 1, wall 11, road 13, zone 3, building 8, coastline 3, water 2).

Evidence: documented 0, mapped 41, inferred 0, derived 2; heights documented 2, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/907683188 historic=fort 716 m from ledger point
- origin moved 718 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":55,"medianInside":0,"medianOutside":7.1}
- sea-1: DEM check ok {"cells":42,"medianInside":0.3,"medianOutside":6.1}
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.86756/14.57411) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal tower; sitelinks=6; wikidata:Q19727182 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 41 elements); data/traces/zonqor-tower-q19727182.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
