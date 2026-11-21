# Schösserturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schosserturm-q130621702` |
| Coordinates | 51.04829, 14.08403 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.04829/14.08403)) |
| Wikidata | [Q130621702](https://www.wikidata.org/wiki/Q130621702) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Stolpen |
| Inception | 1500 |
| Designations | heritage monument in Saxony |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `heritage` | 4 |
| OSM `description` | Schösserturm |

## What the model contains

Tier **T1**, status `outline+walls`, 371 elements (outline 1, marker 20, road 224, building 262, zone 33, wall 25, waterway 1, water 3, retaining-wall 15, cliff 3).

Evidence: documented 0, mapped 371, inferred 0, derived 0; heights documented 22, inferred 0, unknown 138.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/61586003 historic=yes Q130621702 0 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 262 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 224 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.04829/14.08403) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q130621702 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 371 elements); data/traces/schosserturm-q130621702.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
