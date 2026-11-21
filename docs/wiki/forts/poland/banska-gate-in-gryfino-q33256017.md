# Bańska Gate in Gryfino

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `banska-gate-in-gryfino-q33256017` |
| Coordinates | 53.25051, 14.48911 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.25051/14.48911)) |
| Wikidata | [Q33256017](https://www.wikidata.org/wiki/Q33256017) (CC0) |
| Wikidata class | fortification |
| Types | gate\|city gate |
| Inception | 1400 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 360 elements (outline 1, waterway 1, road 204, wall 4, building 124, zone 26).

Evidence: documented 0, mapped 360, inferred 0, derived 0; heights documented 121, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/350100587 historic=castle Q33256046 570 m from ledger point
- origin moved 571 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.25051/14.48911) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gate\|city gate; sitelinks=2; wikidata:Q33256017 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 360 elements); data/traces/banska-gate-in-gryfino-q33256017.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
