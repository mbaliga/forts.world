# Vorbunker

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vorbunker-q7941770` |
| Coordinates | 52.5128, 13.3818 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.5128/13.3818)) |
| Wikidata | [Q7941770](https://www.wikidata.org/wiki/Q7941770) (CC0) |
| Wikidata class | fortification |
| Types | bunker |
| Administrative area | Berlin |
| Inception | 1936 |
| Wikipedia language editions | 11 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline+walls`, 305 elements (outline 1, marker 3, road 344, building 2651, wall 6, zone 22, water 1, retaining-wall 2).

Evidence: documented 0, mapped 305, inferred 0, derived 0; heights documented 121, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/172234733 historic=monument Q160700 236 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 2651 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 344 mapped (trace size budget); minor lanes are not drawn
- origin moved 233 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.5128/13.3818) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker; sitelinks=11; wikidata:Q7941770 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 305 elements); data/traces/vorbunker-q7941770.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
