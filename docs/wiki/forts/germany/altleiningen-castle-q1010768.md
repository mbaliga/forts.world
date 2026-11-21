# Altleiningen Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `altleiningen-castle-q1010768` |
| Coordinates | 49.5116, 8.08253 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.5116/8.08253)) |
| Wikidata | [Q1010768](https://www.wikidata.org/wiki/Q1010768) (CC0) |
| Wikidata class | ruin |
| Types | castle\|castle ruin\|Kulturdenkmal |
| Administrative area | Altleiningen |
| Designations | cultural heritage monument in Rhineland-Palatinate |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 118 elements (outline 1, road 48, waterway 3, building 50, zone 8, wall 3, water 2, cliff 3).

Evidence: documented 0, mapped 118, inferred 0, derived 0; heights documented 1, inferred 0, unknown 52.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/17219291 historic=castle Q1010768 21 m from ledger point
- origin moved 24 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.5116/8.08253) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|castle ruin\|Kulturdenkmal; sitelinks=5; wikidata:Q1010768 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 118 elements); data/traces/altleiningen-castle-q1010768.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
