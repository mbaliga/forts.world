# Bagenal's Castle

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bagenal-s-castle-q30970510` |
| Coordinates | 54.173, -6.336 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.173/-6.336)) |
| Wikidata | [Q30970510](https://www.wikidata.org/wiki/Q30970510) (CC0) |
| Wikidata class | fort |
| Types | fortified house |
| Administrative area | County Down |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 340 elements (outline 1, marker 3, road 231, building 185, retaining-wall 1, zone 25, waterway 2, water 2, wall 36).

Evidence: documented 0, mapped 340, inferred 0, derived 0; heights documented 40, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/113526328 historic=castle Q30970510 10 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 185 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 231 mapped (trace size budget); minor lanes are not drawn
- origin moved 12 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.173/-6.336) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified house; sitelinks=3; wikidata:Q30970510 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 340 elements); data/traces/bagenal-s-castle-q30970510.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
