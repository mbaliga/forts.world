# Blarney Castle

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `blarney-castle-q881739` |
| Coordinates | 51.92889, -8.57083 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.92889/-8.57083)) |
| Wikidata | [Q881739](https://www.wikidata.org/wiki/Q881739) (CC0) |
| Wikidata class | castle |
| Types | castle\|tower house |
| Administrative area | Blarney |
| Inception | 1446 |
| Wikipedia language editions | 23 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 110 elements (outline 1, marker 2, road 70, waterway 9, wall 5, building 9, zone 14).

Evidence: documented 0, mapped 110, inferred 0, derived 0; heights documented 2, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/128989454 historic=castle Q881739 18 m from ledger point
- origin moved 17 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.92889/-8.57083) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|tower house; sitelinks=23; wikidata:Q881739 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 110 elements); data/traces/blarney-castle-q881739.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
