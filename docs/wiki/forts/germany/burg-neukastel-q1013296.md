# Burg Neukastel

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-neukastel-q1013296` |
| Coordinates | 49.1889, 8.01528 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.1889/8.01528)) |
| Wikidata | [Q1013296](https://www.wikidata.org/wiki/Q1013296) (CC0) |
| Wikidata class | castle |
| Types | rock castle |
| Administrative area | Rhineland-Palatinate |
| Inception | 1100 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 3 |
| OSM `historic` | archaeological_site |
| OSM `description` | Ruine der Wallfahrtskirche Unserer Lieben Frau vom Kaltenbronn |

## What the model contains

Tier **T1**, status `outline+walls`, 35 elements (outline 1, marker 3, road 20, building 2, wall 5, zone 4).

Evidence: documented 0, mapped 35, inferred 0, derived 0; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/77335628 historic=archaeological_site 557 m from ledger point
- origin moved 558 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.1889/8.01528) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; rock castle; sitelinks=3; wikidata:Q1013296 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 35 elements); data/traces/burg-neukastel-q1013296.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
