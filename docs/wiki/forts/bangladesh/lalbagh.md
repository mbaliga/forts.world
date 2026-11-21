# Lalbagh Fort, Dhaka

> Bangladesh · Dhaka · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lalbagh` |
| Coordinates | 23.719, 90.388 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/23.719/90.388)) |
| Wikidata | [Q1801226](https://www.wikidata.org/wiki/Q1801226) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Dhaka |
| Designations | Tentative World Heritage Site |
| Wikipedia language editions | 32 |
| Programme catalogue | confidence high, significance rank 260; sources catalogue:lalbagh;wikidata:Q1801226;smith-newton:r3748 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 237 elements (outline 1, marker 1, road 85, building 1330, zone 27, water 1, wall 2).

Evidence: documented 0, mapped 237, inferred 0, derived 0; heights documented 1, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8665449 historic=fort Q1801226 21 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 1330 mapped (trace size budget); the rest of the town is not drawn
- origin moved 84 m from the ledger point to the centre of the mapped site
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/23.719/90.388) | 2026-11-14 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-14 |

## Ledger note

Alpha-X batch (2026-11-14): geometry requested. \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 237 elements); data/traces/lalbagh.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bangladesh.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
