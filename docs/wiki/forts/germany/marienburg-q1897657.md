# Marienburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `marienburg-q1897657` |
| Coordinates | 52.1142, 9.98222 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.1142/9.98222)) |
| Wikidata | [Q1897657](https://www.wikidata.org/wiki/Q1897657) (CC0) |
| Wikidata class | castle |
| Types | water castle |
| Administrative area | Hildesheim |
| Inception | 1346 |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline-only`, 82 elements (outline 1, road 41, zone 8, waterway 4, building 28).

Evidence: documented 0, mapped 82, inferred 0, derived 0; heights documented 3, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/772944641 historic=castle Q1897657 25 m from ledger point
- origin moved 25 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.1142/9.98222) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; water castle; sitelinks=4; wikidata:Q1897657 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 82 elements); data/traces/marienburg-q1897657.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
