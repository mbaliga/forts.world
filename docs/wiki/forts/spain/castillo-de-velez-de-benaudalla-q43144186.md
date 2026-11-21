# Castillo de Vélez de Benaudalla

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-velez-de-benaudalla-q43144186` |
| Coordinates | 36.83304, -3.51396 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.83304/-3.51396)) |
| Wikidata | [Q43144186](https://www.wikidata.org/wiki/Q43144186) (CC0) |
| Wikidata class | castle |
| Types | castle\|monument |
| Administrative area | Vélez de Benaudalla |
| Designations | bien de interés cultural |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 297 elements (outline 1, road 140, building 592, water 1, waterway 1, wall 30, zone 4).

Evidence: documented 0, mapped 297, inferred 0, derived 0; heights documented 120, inferred 0, unknown 30.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/498911478 historic=castle Q43144186 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 592 mapped (trace size budget); the rest of the town is not drawn
- origin moved 1 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.83304/-3.51396) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|monument; sitelinks=0; wikidata:Q43144186 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 297 elements); data/traces/castillo-de-velez-de-benaudalla-q43144186.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
