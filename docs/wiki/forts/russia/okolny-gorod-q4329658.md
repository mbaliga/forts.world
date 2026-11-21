# Okolny Gorod

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `okolny-gorod-q4329658` |
| Coordinates | 58.52099, 31.27579 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.52099/31.27579)) |
| Wikidata | [Q4329658](https://www.wikidata.org/wiki/Q4329658) (CC0) |
| Wikidata class | fort |
| Types | fortification\|architectural landmark |
| Administrative area | Veliky Novgorod |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | kremlin |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 291 elements (outline 1, marker 11, road 319, waterway 6, building 101, cliff 2, zone 12, wall 8).

Evidence: documented 0, mapped 291, inferred 0, derived 0; heights documented 20, inferred 0, unknown 89.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/26333895 historic=castle Q1277545 31 m from ledger point
- roads capped: kept the 150 longest of 319 mapped (trace size budget); minor lanes are not drawn
- origin moved 31 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.52099/31.27579) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|architectural landmark; sitelinks=2; wikidata:Q4329658 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 291 elements); data/traces/okolny-gorod-q4329658.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
