# Muslim Walls of Madrid

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `muslim-walls-of-madrid-q3827251` |
| Coordinates | 40.41493, -3.71457 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.41493/-3.71457)) |
| Wikidata | [Q3827251](https://www.wikidata.org/wiki/Q3827251) (CC0) |
| Wikidata class | fortification |
| Types | monument\|city walls |
| Administrative area | Madrid |
| Inception | 0855 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 326 elements (outline 1, marker 24, road 191, retaining-wall 11, wall 15, zone 1, building 80, water 3).

Evidence: documented 0, mapped 326, inferred 0, derived 0; heights documented 23, inferred 0, unknown 83.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/9226297 historic=castle 136 m from ledger point
- origin moved 140 m from the ledger point to the outline centroid
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.41493/-3.71457) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; monument\|city walls; sitelinks=8; wikidata:Q3827251 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 326 elements); data/traces/muslim-walls-of-madrid-q3827251.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
