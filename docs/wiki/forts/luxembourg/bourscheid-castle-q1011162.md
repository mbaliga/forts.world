# Bourscheid Castle

> Luxembourg · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bourscheid-castle-q1011162` |
| Coordinates | 49.90536, 6.07967 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.90536/6.07967)) |
| Wikidata | [Q1011162](https://www.wikidata.org/wiki/Q1011162) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Bourscheid |
| Inception | 1001 |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `description` | Bourscheid Castle. A big medieval castle on top of a hill with many towers and a splendid view of the surrounding nature. |
| OSM `barrier` | city_wall |
| OSM `website` | castle-bourscheid.lu |

## What the model contains

Tier **T1**, status `outline+walls`, 138 elements (outline 1, zone 15, waterway 2, road 58, wall 18, building 12, retaining-wall 9, cliff 22).

Evidence: documented 0, mapped 138, inferred 0, derived 0; heights documented 0, inferred 0, unknown 40.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/448046857 historic=castle Q1011162 40 m from ledger point
- origin moved 40 m from the ledger point to the outline centroid
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.90536/6.07967) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=10; wikidata:Q1011162 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 138 elements); data/traces/bourscheid-castle-q1011162.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/luxembourg.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
