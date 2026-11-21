# Enceinte of Philippe-Auguste

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `enceinte-of-philippe-auguste-q22921179` |
| Coordinates | 48.8641, 2.3486 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.8641/2.3486)) |
| Wikidata | [Q22921179](https://www.wikidata.org/wiki/Q22921179) (CC0) |
| Wikidata class | fort |
| Types | compound (fortification) |
| Administrative area | 2nd arrondissement of Paris |
| Designations | classified historical monument |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 287 elements (outline 1, marker 9, road 447, water 2, building 294, wall 1, zone 4).

Evidence: documented 0, mapped 287, inferred 0, derived 0; heights documented 96, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/627785923 historic=yes 347 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 294 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 447 mapped (trace size budget); minor lanes are not drawn
- origin moved 347 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.8641/2.3486) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; compound (fortification); sitelinks=1; wikidata:Q22921179 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 287 elements); data/traces/enceinte-of-philippe-auguste-q22921179.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
