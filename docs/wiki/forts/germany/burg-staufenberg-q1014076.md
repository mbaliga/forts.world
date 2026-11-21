# Burg Staufenberg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-staufenberg-q1014076` |
| Coordinates | 48.501, 8.0273 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.501/8.0273)) |
| Wikidata | [Q1014076](https://www.wikidata.org/wiki/Q1014076) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Durbach |
| Inception | 1000 |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `barrier` | wall |
| OSM `website` | https://www.schloss-staufenberg.de/de/schloss-staufenberg/ |

## What the model contains

Tier **T1**, status `outline+walls`, 72 elements (outline 1, road 47, building 13, zone 4, wall 4, water 2).

Evidence: documented 0, mapped 72, inferred 0, derived 0; heights documented 1, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/788311227 historic=castle Q1014076 35 m from ledger point
- origin moved 37 m from the ledger point to the outline centroid
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.501/8.0273) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q1014076 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 72 elements); data/traces/burg-staufenberg-q1014076.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
