# Dover Western Heights

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dover-western-heights-q5302536` |
| Coordinates | 51.119, 1.30102 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.119/1.30102)) |
| Wikidata | [Q5302536](https://www.wikidata.org/wiki/Q5302536) (CC0) |
| Wikidata class | fort |
| Types | nature reserve\|fort |
| Administrative area | Dover |
| Inception | 1779 |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 148 elements (outline 1, marker 1, road 53, building 74, retaining-wall 7, zone 9, wall 1, coastline 1).

Evidence: documented 0, mapped 148, inferred 0, derived 0; heights documented 0, inferred 0, unknown 83.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/93046910 historic=castle 340 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 348 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.119/1.30102) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; nature reserve\|fort; sitelinks=3; wikidata:Q5302536 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 148 elements); data/traces/dover-western-heights-q5302536.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
