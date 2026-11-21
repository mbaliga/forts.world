# Palác Thurn-Taxisů

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palac-thurn-taxisu-q12043612` |
| Coordinates | 50.08974, 14.40883 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.08974/14.40883)) |
| Wikidata | [Q12043612](https://www.wikidata.org/wiki/Q12043612) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Malá Strana |
| Inception | 1726 |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 229 elements (outline 1, marker 36, road 372, building 78, waterway 4, wall 41, water 9, zone 71, retaining-wall 15).

Evidence: documented 0, mapped 229, inferred 0, derived 0; heights documented 38, inferred 0, unknown 26.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/60015 historic=castle Q12043612 7 m from ledger point
- pruned to the outline plus 150 m: 627 -> 392 elements
- roads capped: kept the 80 longest of 243 mapped (trace size budget); minor lanes are not drawn
- origin moved 11 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.08974/14.40883) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=3; wikidata:Q12043612 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 229 elements); data/traces/palac-thurn-taxisu-q12043612.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
