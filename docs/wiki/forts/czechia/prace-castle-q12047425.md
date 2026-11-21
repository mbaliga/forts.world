# Práče Castle

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `prace-castle-q12047425` |
| Coordinates | 50.05287, 14.50756 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.05287/14.50756)) |
| Wikidata | [Q12047425](https://www.wikidata.org/wiki/Q12047425) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Prague 10 |
| Inception | 1700 |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 291 elements (outline 1, marker 1, road 181, waterway 3, building 78, water 1, zone 23, wall 2, retaining-wall 1).

Evidence: documented 0, mapped 291, inferred 0, derived 0; heights documented 40, inferred 0, unknown 41.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/61697892 historic=castle Q12047425 16 m from ledger point
- origin moved 16 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.05287/14.50756) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=2; wikidata:Q12047425 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 291 elements); data/traces/prace-castle-q12047425.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
