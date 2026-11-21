# Torreón de Lozoya

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torreon-de-lozoya-q42912722` |
| Coordinates | 40.94861, -4.12108 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.94861/-4.12108)) |
| Wikidata | [Q42912722](https://www.wikidata.org/wiki/Q42912722) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|tower\|museum |
| Administrative area | Segovia |
| Inception | befor |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 336 elements (outline 1, marker 22, road 205, waterway 6, wall 26, retaining-wall 4, building 303, zone 7).

Evidence: documented 0, mapped 336, inferred 0, derived 0; heights documented 1, inferred 0, unknown 149.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1243980115 historic=castle Q42912722 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 303 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 205 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.94861/-4.12108) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|tower\|museum; sitelinks=3; wikidata:Q42912722 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 336 elements); data/traces/torreon-de-lozoya-q42912722.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
