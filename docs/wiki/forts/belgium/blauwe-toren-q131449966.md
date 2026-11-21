# Blauwe Toren

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `blauwe-toren-q131449966` |
| Coordinates | 51.21275, 4.40918 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.21275/4.40918)) |
| Wikidata | [Q131449966](https://www.wikidata.org/wiki/Q131449966) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Antwerp |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 4 |
| OSM `description` | Herenhuis |

## What the model contains

Tier **T1**, status `outline+walls`, 214 elements (outline 1, marker 5, road 72, zone 1, building 525, wall 14, retaining-wall 1).

Evidence: documented 0, mapped 214, inferred 0, derived 0; heights documented 17, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/12835745 historic=castle 470 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 525 mapped (trace size budget); the rest of the town is not drawn
- origin moved 471 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.21275/4.40918) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q131449966 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 214 elements); data/traces/blauwe-toren-q131449966.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
