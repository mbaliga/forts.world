# Pervaya Bezymyannaya Tower

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pervaya-bezymyannaya-tower-q7218098` |
| Coordinates | 55.7495, 37.61897 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.7495/37.61897)) |
| Wikidata | [Q7218098](https://www.wikidata.org/wiki/Q7218098) (CC0) |
| Wikidata class | fort |
| Types | fortified tower\|architectural landmark |
| Administrative area | Tverskoy District |
| Inception | 1480 |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | kremlin |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 376 elements (outline 1, marker 21, road 1021, building 101, waterway 7, retaining-wall 21, wall 27, zone 47, water 1).

Evidence: documented 0, mapped 376, inferred 0, derived 0; heights documented 55, inferred 0, unknown 94.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1360641 historic=castle Q133274 192 m from ledger point
- roads capped: kept the 150 longest of 1021 mapped (trace size budget); minor lanes are not drawn
- origin moved 181 m from the ledger point to the outline centroid
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.7495/37.61897) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower\|architectural landmark; sitelinks=5; wikidata:Q7218098 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 376 elements); data/traces/pervaya-bezymyannaya-tower-q7218098.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
