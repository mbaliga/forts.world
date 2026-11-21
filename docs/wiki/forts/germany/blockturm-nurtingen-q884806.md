# Blockturm Nürtingen

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `blockturm-nurtingen-q884806` |
| Coordinates | 48.62529, 9.33854 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.62529/9.33854)) |
| Wikidata | [Q884806](https://www.wikidata.org/wiki/Q884806) (CC0) |
| Wikidata class | fort |
| Types | prison\|fortified tower |
| Administrative area | Nürtingen |
| Inception | 1500 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 2 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 305 elements (outline 1, marker 2, road 258, building 320, waterway 2, retaining-wall 2, zone 21, wall 6, water 1).

Evidence: documented 0, mapped 305, inferred 0, derived 0; heights documented 18, inferred 0, unknown 110.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/241949024 historic=building Q884806 0 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 320 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 258 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.62529/9.33854) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; prison\|fortified tower; sitelinks=2; wikidata:Q884806 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 305 elements); data/traces/blockturm-nurtingen-q884806.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
