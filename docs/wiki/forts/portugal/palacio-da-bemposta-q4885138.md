# Palácio da Bemposta

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-da-bemposta-q4885138` |
| Coordinates | 38.72346, -9.13829 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.72346/-9.13829)) |
| Wikidata | [Q4885138](https://www.wikidata.org/wiki/Q4885138) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|cultural heritage |
| Administrative area | Arroios |
| Designations | Included in protected site |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | Da autoria de João Antunes,a construção do Paço da Bemposta destinado a residência de D. Catarina de Bragança,mulher de Carlos II de Inglaterra e filha de D. João IV,remontam ao final do séc. XVII.Profundamente afectado pelo Terramoto de 1755... |

## What the model contains

Tier **T1**, status `outline+walls`, 319 elements (outline 1, marker 3, road 161, building 331, retaining-wall 8, zone 10, wall 25, water 1, waterway 1).

Evidence: documented 0, mapped 319, inferred 0, derived 0; heights documented 22, inferred 0, unknown 131.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19438496 historic=castle Q4885138 21 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 331 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 161 mapped (trace size budget); minor lanes are not drawn
- origin moved 17 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.72346/-9.13829) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|cultural heritage; sitelinks=9; wikidata:Q4885138 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 319 elements); data/traces/palacio-da-bemposta-q4885138.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
