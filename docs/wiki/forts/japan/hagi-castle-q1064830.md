# Hagi Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hagi-castle-q1064830` |
| Coordinates | 34.41759, 131.38248 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.41759/131.38248)) |
| Wikidata | [Q1064830](https://www.wikidata.org/wiki/Q1064830) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Hagi |
| Inception | 1608 |
| Designations | part of UNESCO World Heritage Site\|Historic Site of Japan |
| UNESCO WHC id | 1484-004 |
| Wikipedia language editions | 17 |
| OSM `historic` | tomb |

## What the model contains

Tier **T1**, status `outline-only`, 290 elements (outline 1, road 41, coastline 1, building 239, zone 3, retaining-wall 5).

Evidence: documented 0, mapped 290, inferred 0, derived 0; heights documented 0, inferred 0, unknown 244.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/493152954 historic=tomb 389 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 389 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.41759/131.38248) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=17; wikidata:Q1064830 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 290 elements); data/traces/hagi-castle-q1064830.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
