# Burg Neuwolfstein

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-neuwolfstein-q1013247` |
| Coordinates | 49.5857, 7.60483 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.5857/7.60483)) |
| Wikidata | [Q1013247](https://www.wikidata.org/wiki/Q1013247) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Wolfstein |
| Inception | 1300 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 338 elements (outline 1, road 74, waterway 7, building 249, zone 5, wall 2).

Evidence: documented 0, mapped 338, inferred 0, derived 0; heights documented 2, inferred 0, unknown 249.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/474663036 historic=castle Q1013247 19 m from ledger point
- origin moved 18 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.5857/7.60483) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q1013247 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 338 elements); data/traces/burg-neuwolfstein-q1013247.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
