# Ravadinovo Castle

> Bulgaria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ravadinovo-castle-q65160623` |
| Coordinates | 42.38917, 27.67194 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.38917/27.67194)) |
| Wikidata | [Q65160623](https://www.wikidata.org/wiki/Q65160623) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Burgas |
| Inception | 1997 |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 34 elements (outline 1, road 17, wall 1, water 2, building 11, zone 1, waterway 1).

Evidence: documented 0, mapped 34, inferred 0, derived 0; heights documented 1, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/353235068 historic=castle Q65160623 23 m from ledger point
- origin moved 24 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.38917/27.67194) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q65160623 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 34 elements); data/traces/ravadinovo-castle-q65160623.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bulgaria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
