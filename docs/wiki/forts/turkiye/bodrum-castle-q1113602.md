# Bodrum Castle

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bodrum-castle-q1113602` |
| Coordinates | 37.03167, 27.42944 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.03167/27.42944)) |
| Wikidata | [Q1113602](https://www.wikidata.org/wiki/Q1113602) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Bodrum |
| Inception | 1522 |
| Designations | Tentative World Heritage Site |
| Wikipedia language editions | 29 |
| OSM `historic` | castle |
| OSM `castle_type` | castle |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 148 elements (outline 1, marker 2, road 45, building 93, wall 2, coastline 2, water 2).

Evidence: documented 0, mapped 148, inferred 0, derived 2; heights documented 1, inferred 0, unknown 95.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/29094795 historic=castle Q1113602 42 m from ledger point
- origin moved 40 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":578,"medianInside":0,"medianOutside":0.1}
- sea-1: DEM check ok {"cells":1410,"medianInside":0,"medianOutside":4.5}
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.03167/27.42944) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=29; wikidata:Q1113602 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 148 elements); data/traces/bodrum-castle-q1113602.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
