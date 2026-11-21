# Porta Latina

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-latina-q1720229` |
| Coordinates | 41.8765, 12.5025 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.8765/12.5025)) |
| Wikidata | [Q1720229](https://www.wikidata.org/wiki/Q1720229) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Rome |
| Inception | 0410 |
| Wikipedia language editions | 18 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 352 elements (outline 1, marker 2, road 635, building 296, zone 13, wall 66).

Evidence: documented 0, mapped 352, inferred 0, derived 0; heights documented 10, inferred 0, unknown 176.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/732751928 historic=citywalls 353 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 296 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 635 mapped (trace size budget); minor lanes are not drawn
- origin moved 356 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.8765/12.5025) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=18; wikidata:Q1720229 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 352 elements); data/traces/porta-latina-q1720229.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
