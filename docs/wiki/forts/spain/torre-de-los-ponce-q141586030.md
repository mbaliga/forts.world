# Torre de los Ponce

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-los-ponce-q141586030` |
| Coordinates | 42.59801, -5.56596 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.59801/-5.56596)) |
| Wikidata | [Q141586030](https://www.wikidata.org/wiki/Q141586030) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | León |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |

## What the model contains

Tier **T1**, status `outline+walls`, 280 elements (outline 1, marker 4, road 124, building 365, wall 19, retaining-wall 1, zone 9, water 2).

Evidence: documented 0, mapped 280, inferred 0, derived 0; heights documented 72, inferred 0, unknown 68.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/706067191 historic=castle Q106664533 189 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 365 mapped (trace size budget); the rest of the town is not drawn
- origin moved 189 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.59801/-5.56596) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q141586030 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 280 elements); data/traces/torre-de-los-ponce-q141586030.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
