# Alcazaba

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `alcazaba-q5664093` |
| Coordinates | 37.29905, -3.13737 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.29905/-3.13737)) |
| Wikidata | [Q5664093](https://www.wikidata.org/wiki/Q5664093) (CC0) |
| Wikidata class | fort |
| Types | alcazaba\|hydraulic structure |
| Administrative area | Guadix |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 172 elements (outline 1, road 153, wall 5, building 11, waterway 1, water 1).

Evidence: documented 0, mapped 172, inferred 0, derived 0; heights documented 1, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/620842024 historic=castle Q5664093 50 m from ledger point
- origin moved 51 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.29905/-3.13737) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; alcazaba\|hydraulic structure; sitelinks=3; wikidata:Q5664093 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 172 elements); data/traces/alcazaba-q5664093.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
