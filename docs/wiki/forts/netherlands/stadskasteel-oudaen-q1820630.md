# Stadskasteel Oudaen

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadskasteel-oudaen-q1820630` |
| Coordinates | 52.09275, 5.11664 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.09275/5.11664)) |
| Wikidata | [Q1820630](https://www.wikidata.org/wiki/Q1820630) (CC0) |
| Wikidata class | castle |
| Types | castle\|tower house |
| Administrative area | Utrecht |
| Inception | 1270 |
| Designations | Rijksmonument |
| Wikipedia language editions | 2 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 292 elements (outline 1, marker 2, road 319, building 499, water 6, wall 1, waterway 7, retaining-wall 1, zone 4).

Evidence: documented 0, mapped 292, inferred 0, derived 0; heights documented 6, inferred 0, unknown 116.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/460183879 historic=building 68 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 499 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 319 mapped (trace size budget); minor lanes are not drawn
- origin moved 69 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.09275/5.11664) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|tower house; sitelinks=2; wikidata:Q1820630 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 292 elements); data/traces/stadskasteel-oudaen-q1820630.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
