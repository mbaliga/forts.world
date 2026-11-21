# Wielopolski Palace in Krakow

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wielopolski-palace-in-krakow-q11814878` |
| Coordinates | 50.05853, 19.93691 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.05853/19.93691)) |
| Wikidata | [Q11814878](https://www.wikidata.org/wiki/Q11814878) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|architectural heritage monument |
| Administrative area | Kraków |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 289 elements (outline 1, marker 48, road 343, building 194, zone 67, wall 106).

Evidence: documented 0, mapped 289, inferred 0, derived 0; heights documented 47, inferred 0, unknown 89.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8027535 historic=castle Q11814878 9 m from ledger point
- pruned to the outline plus 150 m: 759 -> 600 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 166 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 285 mapped (trace size budget); minor lanes are not drawn
- origin moved 10 m from the ledger point to the outline centroid
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.05853/19.93691) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|architectural heritage monument; sitelinks=6; wikidata:Q11814878 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 289 elements); data/traces/wielopolski-palace-in-krakow-q11814878.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
