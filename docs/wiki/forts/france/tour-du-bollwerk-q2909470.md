# Tour du Bollwerk

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-du-bollwerk-q2909470` |
| Coordinates | 47.74858, 7.34211 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.74858/7.34211)) |
| Wikidata | [Q2909470](https://www.wikidata.org/wiki/Q2909470) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Mulhouse |
| Inception | 1300 |
| Designations | classified historical monument |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 302 elements (outline 1, marker 1, road 249, building 346, water 1, waterway 1, wall 10, zone 18).

Evidence: documented 0, mapped 302, inferred 0, derived 0; heights documented 5, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/45831173 historic=castle Q2909470 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 346 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 249 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.74858/7.34211) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=5; wikidata:Q2909470 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 302 elements); data/traces/tour-du-bollwerk-q2909470.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
