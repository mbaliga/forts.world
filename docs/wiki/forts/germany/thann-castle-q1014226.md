# Thann Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `thann-castle-q1014226` |
| Coordinates | 49.355, 11.3162 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.355/11.3162)) |
| Wikidata | [Q1014226](https://www.wikidata.org/wiki/Q1014226) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Burgthann |
| Inception | 1200 |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 190 elements (outline 1, road 51, water 2, building 123, wall 2, retaining-wall 1, waterway 1, zone 9).

Evidence: documented 0, mapped 190, inferred 0, derived 0; heights documented 8, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/27504075 historic=castle Q1014226 6 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.355/11.3162) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=5; wikidata:Q1014226 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 190 elements); data/traces/thann-castle-q1014226.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
