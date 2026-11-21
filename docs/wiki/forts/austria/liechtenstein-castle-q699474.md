# Liechtenstein Castle

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `liechtenstein-castle-q699474` |
| Coordinates | 48.0927, 16.27036 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.0927/16.27036)) |
| Wikidata | [Q699474](https://www.wikidata.org/wiki/Q699474) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum |
| Administrative area | Maria Enzersdorf |
| Inception | 1136 |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 32 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `description` | Romanesque castle dating back to 1130. Family seat of the prince of Liechtenstein. Access via guided tour only. (Source: operator website) |
| OSM `website` | https://www.burgliechtenstein.eu/ |

## What the model contains

Tier **T1**, status `outline+walls`, 93 elements (outline 1, marker 2, road 54, building 27, wall 2, zone 5, cliff 2).

Evidence: documented 0, mapped 93, inferred 0, derived 0; heights documented 3, inferred 0, unknown 26.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1020587803 historic=castle Q699474 1 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.0927/16.27036) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum; sitelinks=32; wikidata:Q699474 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 93 elements); data/traces/liechtenstein-castle-q699474.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
