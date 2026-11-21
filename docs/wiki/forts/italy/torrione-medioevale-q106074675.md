# Torrione Medioevale

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torrione-medioevale-q106074675` |
| Coordinates | 44.14077, 12.24188 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.14077/12.24188)) |
| Wikidata | [Q106074675](https://www.wikidata.org/wiki/Q106074675) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Cesena |
| Inception | 1550 |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 400 elements (outline 1, marker 1, road 153, zone 5, building 237, wall 2, retaining-wall 1).

Evidence: documented 0, mapped 400, inferred 0, derived 0; heights documented 0, inferred 0, unknown 240.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1083815 historic=castle Q1166106 503 m from ledger point
- origin moved 507 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.14077/12.24188) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q106074675 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 400 elements); data/traces/torrione-medioevale-q106074675.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
