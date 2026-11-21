# Grimskärs skans

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `grimskars-skans-q30313052` |
| Coordinates | 56.65222, 16.37019 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.65222/16.37019)) |
| Wikidata | [Q30313052](https://www.wikidata.org/wiki/Q30313052) (CC0) |
| Wikidata class | fortification |
| Types | sconce |
| Administrative area | Kalmar Municipality |
| Inception | 1623 |
| Designations | governmental listed building complex |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline-only`, 2 elements (outline 1, coastline 1).

Evidence: documented 0, mapped 2, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/961316392 historic=castle 7 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 10 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.65222/16.37019) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; sconce; sitelinks=1; wikidata:Q30313052 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 2 elements); data/traces/grimskars-skans-q30313052.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
