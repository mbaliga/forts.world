# Palace of São João Novo

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palace-of-sao-joao-novo-q7128888` |
| Coordinates | 41.14251, -8.61773 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.14251/-8.61773)) |
| Wikidata | [Q7128888](https://www.wikidata.org/wiki/Q7128888) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|cultural heritage\|manor house |
| Administrative area | Cedofeita, Santo Ildefonso, Sé, Miragaia, São Nicolau e Vitória |
| Inception | 1700 |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 262 elements (outline 1, marker 5, road 201, wall 87, building 466, retaining-wall 29, zone 44, water 1, waterway 2).

Evidence: documented 0, mapped 262, inferred 0, derived 0; heights documented 0, inferred 0, unknown 140.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/211297740 historic=castle Q7128888 6 m from ledger point
- pruned to the outline plus 150 m: 836 -> 595 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 360 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 113 mapped (trace size budget); minor lanes are not drawn
- origin moved 7 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.14251/-8.61773) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|cultural heritage\|manor house; sitelinks=5; wikidata:Q7128888 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 262 elements); data/traces/palace-of-sao-joao-novo-q7128888.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
