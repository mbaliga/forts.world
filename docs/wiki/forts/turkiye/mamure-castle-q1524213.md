# Mamure Castle

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mamure-castle-q1524213` |
| Coordinates | 36.08083, 32.89444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.08083/32.89444)) |
| Wikidata | [Q1524213](https://www.wikidata.org/wiki/Q1524213) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site |
| Administrative area | Anamur district |
| Designations | Tentative World Heritage Site |
| Wikipedia language editions | 14 |
| OSM `historic` | ruins |
| OSM `website` | https://kulturenvanteri.com/tr/harita/#16.9/36.082213/32.893848 |

## What the model contains

Tier **T1**, status `outline+walls`, 38 elements (outline 1, marker 1, coastline 1, wall 7, road 10, building 13, waterway 1, zone 3, water 1).

Evidence: documented 0, mapped 38, inferred 0, derived 1; heights documented 0, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1338658894 historic=ruins 162 m from ledger point
- origin moved 163 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":293,"medianInside":0,"medianOutside":5.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.08083/32.89444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site; sitelinks=14; wikidata:Q1524213 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 38 elements); data/traces/mamure-castle-q1524213.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
