# Château de Durtal

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-durtal-q2240685` |
| Coordinates | 47.67047, -0.24467 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.67047/-0.24467)) |
| Wikidata | [Q2240685](https://www.wikidata.org/wiki/Q2240685) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Durtal |
| Designations | classified historical monument |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |
| OSM `website` | https://www.chateau-durtal.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 211 elements (outline 1, road 65, water 10, building 410, waterway 5, retaining-wall 2, zone 5, wall 3).

Evidence: documented 0, mapped 211, inferred 0, derived 0; heights documented 2, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/129015881 historic=castle Q2240685 25 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 410 mapped (trace size budget); the rest of the town is not drawn
- origin moved 26 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.67047/-0.24467) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q2240685 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 211 elements); data/traces/chateau-de-durtal-q2240685.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
