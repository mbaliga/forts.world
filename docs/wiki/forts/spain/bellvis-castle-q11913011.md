# Bellvís Castle

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bellvis-castle-q11913011` |
| Coordinates | 41.36885, 2.12432 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.36885/2.12432)) |
| Wikidata | [Q11913011](https://www.wikidata.org/wiki/Q11913011) (CC0) |
| Wikidata class | castle |
| Types | castle\|tower\|masia\|fortified house |
| Administrative area | La Torrassa |
| Inception | ~C10 |
| Designations | Cultural Asset of National Interest |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | tower |

## What the model contains

Tier **T1**, status `outline+walls`, 278 elements (outline 1, road 149, building 331, zone 6, wall 1, retaining-wall 1).

Evidence: documented 0, mapped 278, inferred 0, derived 0; heights documented 0, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/622702542 historic=castle Q11913011 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 331 mapped (trace size budget); the rest of the town is not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.36885/2.12432) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|tower\|masia\|fortified house; sitelinks=2; wikidata:Q11913011 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 278 elements); data/traces/bellvis-castle-q11913011.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
