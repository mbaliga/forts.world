# Sandsfoot Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sandsfoot-castle-q1164888` |
| Coordinates | 50.5954, -2.46099 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.5954/-2.46099)) |
| Wikidata | [Q1164888](https://www.wikidata.org/wiki/Q1164888) (CC0) |
| Wikidata class | castle |
| Types | castle\|fort |
| Administrative area | Weymouth |
| Designations | Grade II* listed building\|scheduled monument |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 99 elements (outline 1, road 43, coastline 1, building 53, water 1).

Evidence: documented 0, mapped 99, inferred 0, derived 1; heights documented 0, inferred 0, unknown 53.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/210280965 historic=castle Q1164888 22 m from ledger point
- origin moved 23 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":938,"medianInside":-0.8,"medianOutside":16.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.5954/-2.46099) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fort; sitelinks=7; wikidata:Q1164888 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 99 elements); data/traces/sandsfoot-castle-q1164888.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
