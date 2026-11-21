# Entrenchment IS-V-6

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `entrenchment-is-v-6-q48843019` |
| Coordinates | 50.09583, 19.98472 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.09583/19.98472)) |
| Wikidata | [Q48843019](https://www.wikidata.org/wiki/Q48843019) (CC0) |
| Wikidata class | fortification |
| Types | sconce |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | sconce |

## What the model contains

Tier **T1**, status `outline+walls`, 226 elements (outline 1, road 163, building 41, wall 2, retaining-wall 11, zone 7, waterway 1).

Evidence: documented 0, mapped 226, inferred 0, derived 0; heights documented 30, inferred 0, unknown 24.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/301824574 historic=archaeological_site Q48843019 14 m from ledger point
- origin moved 14 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.09583/19.98472) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; sconce; sitelinks=2; wikidata:Q48843019 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 226 elements); data/traces/entrenchment-is-v-6-q48843019.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
