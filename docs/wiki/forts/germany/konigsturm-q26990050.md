# Königsturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `konigsturm-q26990050` |
| Coordinates | 48.7989, 9.80068 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.7989/9.80068)) |
| Wikidata | [Q26990050](https://www.wikidata.org/wiki/Q26990050) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Schwäbisch Gmünd |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 287 elements (outline 1, road 312, zone 6, building 346, wall 3, waterway 6, water 1).

Evidence: documented 0, mapped 287, inferred 0, derived 0; heights documented 2, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/91920452 historic=citywalls Q110284955 327 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 346 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 312 mapped (trace size budget); minor lanes are not drawn
- origin moved 327 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.7989/9.80068) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=2; wikidata:Q26990050 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 287 elements); data/traces/konigsturm-q26990050.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
