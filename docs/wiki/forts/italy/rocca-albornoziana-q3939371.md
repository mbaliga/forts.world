# Rocca Albornoziana

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rocca-albornoziana-q3939371` |
| Coordinates | 42.73431, 12.74189 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.73431/12.74189)) |
| Wikidata | [Q3939371](https://www.wikidata.org/wiki/Q3939371) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|historical park museum |
| Administrative area | Spoleto |
| Inception | 1363 |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | https://www.iluoghidelsilenzio.it/rocca-albornoziana-spoleto-pg/ |

## What the model contains

Tier **T1**, status `outline+walls`, 174 elements (outline 1, marker 7, road 74, building 35, wall 26, retaining-wall 15, waterway 2, zone 12, water 2).

Evidence: documented 0, mapped 174, inferred 0, derived 0; heights documented 2, inferred 0, unknown 74.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6426252 historic=castle Q3939371 29 m from ledger point
- origin moved 31 m from the ledger point to the centre of the mapped site
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.73431/12.74189) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|historical park museum; sitelinks=3; wikidata:Q3939371 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 174 elements); data/traces/rocca-albornoziana-q3939371.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
