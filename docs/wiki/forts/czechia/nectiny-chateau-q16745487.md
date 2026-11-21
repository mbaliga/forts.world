# Nečtiny Chateau

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nectiny-chateau-q16745487` |
| Coordinates | 49.95904, 13.1598 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.95904/13.1598)) |
| Wikidata | [Q16745487](https://www.wikidata.org/wiki/Q16745487) (CC0) |
| Wikidata class | castle |
| Types | château\|fortified house |
| Administrative area | Hrad Nečtiny |
| Inception | 1700 |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 88 elements (outline 1, marker 5, road 37, waterway 6, building 33, zone 4, wall 2).

Evidence: documented 0, mapped 88, inferred 0, derived 0; heights documented 11, inferred 0, unknown 24.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/318883173 historic=castle Q16745487 16 m from ledger point
- origin moved 16 m from the ledger point to the centre of the mapped site
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.95904/13.1598) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; château\|fortified house; sitelinks=2; wikidata:Q16745487 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 88 elements); data/traces/nectiny-chateau-q16745487.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
