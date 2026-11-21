# Enceinte of Philippe-Auguste

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `enceinte-of-philippe-auguste-q22924492` |
| Coordinates | 48.85525, 2.33877 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.85525/2.33877)) |
| Wikidata | [Q22924492](https://www.wikidata.org/wiki/Q22924492) (CC0) |
| Wikidata class | fort |
| Types | compound (fortification) |
| Administrative area | 6th arrondissement of Paris |
| Designations | classified historical monument |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |
| OSM `website` | https://www.louvre.fr/ |

## What the model contains

Tier **T1**, status `outline+walls`, 193 elements (outline 1, marker 67, road 583, building 147, zone 12, wall 25, water 1, retaining-wall 22, waterway 11).

Evidence: documented 0, mapped 193, inferred 0, derived 0; heights documented 33, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3262297 historic=castle Q1075988 666 m from ledger point
- pruned to the outline plus 150 m: 869 -> 494 elements
- roads capped: kept the 80 longest of 381 mapped (trace size budget); minor lanes are not drawn
- origin moved 709 m from the ledger point to the centre of the mapped site
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.85525/2.33877) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; compound (fortification); sitelinks=1; wikidata:Q22924492 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 193 elements); data/traces/enceinte-of-philippe-auguste-q22924492.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
