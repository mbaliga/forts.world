# Arco della Pace

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `arco-della-pace-q55753990` |
| Coordinates | 45.1653, 9.58352 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.1653/9.58352)) |
| Wikidata | [Q55753990](https://www.wikidata.org/wiki/Q55753990) (CC0) |
| Wikidata class | fortification |
| Types | triumphal arch\|city gate |
| Administrative area | Ospedaletto Lodigiano |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | city_gate |

## What the model contains

Tier **T1**, status `outline+walls`, 223 elements (outline 1, road 44, water 2, waterway 10, wall 5, building 159, zone 2).

Evidence: documented 0, mapped 223, inferred 0, derived 0; heights documented 156, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/616275617 historic=city_gate Q55753990 6 m from ledger point
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.1653/9.58352) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; triumphal arch\|city gate; sitelinks=0; wikidata:Q55753990 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 227 elements); data/traces/arco-della-pace-q55753990.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 223 elements; outline osm:way/616275617 historic=city_gate Q55753990 6 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
