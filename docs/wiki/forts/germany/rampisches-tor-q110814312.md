# Rampisches Tor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rampisches-tor-q110814312` |
| Coordinates | 51.051, 13.745 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.051/13.745)) |
| Wikidata | [Q110814312](https://www.wikidata.org/wiki/Q110814312) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|destroyed building or structure |
| Administrative area | Dresden |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 4 |
| OSM `website` | https://www.kurlaender-palais.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 249 elements (outline 1, marker 6, road 323, waterway 2, building 39, water 3, wall 7, zone 34, retaining-wall 7).

Evidence: documented 0, mapped 249, inferred 0, derived 0; heights documented 24, inferred 0, unknown 29.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3302402 historic=castle Q1462191 24 m from ledger point
- roads capped: kept the 150 longest of 323 mapped (trace size budget); minor lanes are not drawn
- origin moved 32 m from the ledger point to the centre of the mapped site
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.051/13.745) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|destroyed building or structure; sitelinks=1; wikidata:Q110814312 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 249 elements); data/traces/rampisches-tor-q110814312.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
