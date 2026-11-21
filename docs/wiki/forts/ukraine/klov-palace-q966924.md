# Klov Palace

> Ukraine · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `klov-palace-q966924` |
| Coordinates | 50.44202, 30.53258 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.44202/30.53258)) |
| Wikidata | [Q966924](https://www.wikidata.org/wiki/Q966924) (CC0) |
| Wikidata class | castle |
| Types | castle\|building\|architectural heritage monument |
| Administrative area | Kyiv |
| Designations | architectural heritage monument |
| Wikipedia language editions | 15 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 94 elements (outline 1, marker 9, road 54, building 18, retaining-wall 1, wall 7, zone 3, water 1).

Evidence: documented 0, mapped 94, inferred 0, derived 0; heights documented 17, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/15053407 historic=castle Q732489 791 m from ledger point
- origin moved 788 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.44202/30.53258) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|building\|architectural heritage monument; sitelinks=15; wikidata:Q966924 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 94 elements); data/traces/klov-palace-q966924.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ukraine.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
