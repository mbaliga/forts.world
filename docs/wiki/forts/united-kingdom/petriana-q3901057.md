# Petriana

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `petriana-q3901057` |
| Coordinates | 54.905, -2.942 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.905/-2.942)) |
| Wikidata | [Q3901057](https://www.wikidata.org/wiki/Q3901057) (CC0) |
| Wikidata class | fortification |
| Types | castrum |
| Wikipedia language editions | 5 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 61 elements (outline 1, road 20, waterway 1, water 2, building 24, wall 1, zone 12).

Evidence: documented 0, mapped 61, inferred 0, derived 0; heights documented 0, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1111499721 historic=ruins 592 m from ledger point
- origin moved 592 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.905/-2.942) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum; sitelinks=5; wikidata:Q3901057 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 61 elements); data/traces/petriana-q3901057.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
