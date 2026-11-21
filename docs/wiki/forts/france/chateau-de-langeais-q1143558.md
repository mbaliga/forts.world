# Château de Langeais

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-langeais-q1143558` |
| Coordinates | 47.32411, 0.40512 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.32411/0.40512)) |
| Wikidata | [Q1143558](https://www.wikidata.org/wiki/Q1143558) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|château |
| Administrative area | Langeais |
| Designations | classified historical monument |
| Wikipedia language editions | 25 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 292 elements (outline 1, waterway 29, road 128, building 422, zone 9, water 1, wall 4).

Evidence: documented 0, mapped 292, inferred 0, derived 0; heights documented 3, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/68954900 historic=castle Q1143558 108 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 422 mapped (trace size budget); the rest of the town is not drawn
- origin moved 108 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.32411/0.40512) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|château; sitelinks=25; wikidata:Q1143558 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 292 elements); data/traces/chateau-de-langeais-q1143558.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
