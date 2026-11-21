# Genovevaburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `genovevaburg-q1502536` |
| Coordinates | 50.3261, 7.22127 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.3261/7.22127)) |
| Wikidata | [Q1502536](https://www.wikidata.org/wiki/Q1502536) (CC0) |
| Wikidata class | ruin |
| Types | castle\|castle ruin |
| Administrative area | Rhineland-Palatinate |
| Inception | 1201 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 315 elements (outline 1, marker 4, road 214, building 408, wall 15, retaining-wall 13, zone 5, waterway 7).

Evidence: documented 0, mapped 315, inferred 0, derived 0; heights documented 7, inferred 0, unknown 141.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/651995501 historic=castle Q1502536 98 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 408 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 214 mapped (trace size budget); minor lanes are not drawn
- origin moved 99 m from the ledger point to the outline centroid
- 21 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.3261/7.22127) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|castle ruin; sitelinks=10; wikidata:Q1502536 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 315 elements); data/traces/genovevaburg-q1502536.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
