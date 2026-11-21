# Dunguaire Castle

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dunguaire-castle-q1265826` |
| Coordinates | 53.14222, -8.92611 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.14222/-8.92611)) |
| Wikidata | [Q1265826](https://www.wikidata.org/wiki/Q1265826) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | County Galway |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 34 elements (outline 1, marker 1, road 15, coastline 4, wall 1, building 8, zone 3, water 1).

Evidence: documented 0, mapped 34, inferred 0, derived 1; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/110472519 historic=castle Q1265826 12 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":805,"medianInside":1.9,"medianOutside":4.5}
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.14222/-8.92611) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=12; wikidata:Q1265826 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 34 elements); data/traces/dunguaire-castle-q1265826.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
