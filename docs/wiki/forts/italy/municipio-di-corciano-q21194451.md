# Municipio di Corciano

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `municipio-di-corciano-q21194451` |
| Coordinates | 43.12837, 12.28621 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.12837/12.28621)) |
| Wikidata | [Q21194451](https://www.wikidata.org/wiki/Q21194451) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|palace\|city hall |
| Administrative area | Corciano |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 301 elements (outline 1, road 95, building 192, zone 2, wall 10, retaining-wall 1).

Evidence: documented 0, mapped 301, inferred 0, derived 0; heights documented 2, inferred 0, unknown 201.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/221853069 historic=castle Q21194451 5 m from ledger point
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.12837/12.28621) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|palace\|city hall; sitelinks=2; wikidata:Q21194451 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 301 elements); data/traces/municipio-di-corciano-q21194451.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
