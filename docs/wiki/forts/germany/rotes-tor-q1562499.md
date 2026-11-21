# Rotes Tor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rotes-tor-q1562499` |
| Coordinates | 48.3599, 10.903 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.3599/10.903)) |
| Wikidata | [Q1562499](https://www.wikidata.org/wiki/Q1562499) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Augsburg |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 320 elements (outline 1, marker 1, road 396, building 190, waterway 5, wall 27, zone 11, water 1, retaining-wall 4).

Evidence: documented 0, mapped 320, inferred 0, derived 0; heights documented 71, inferred 0, unknown 80.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/70187982 historic=castle Q205540 652 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 190 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 396 mapped (trace size budget); minor lanes are not drawn
- origin moved 652 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.3599/10.903) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=4; wikidata:Q1562499 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 320 elements); data/traces/rotes-tor-q1562499.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
