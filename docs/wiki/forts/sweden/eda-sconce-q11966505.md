# Eda Sconce

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `eda-sconce-q11966505` |
| Coordinates | 59.81982, 12.32226 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.81982/12.32226)) |
| Wikidata | [Q11966505](https://www.wikidata.org/wiki/Q11966505) (CC0) |
| Wikidata class | fortification |
| Types | sconce |
| Administrative area | Eda Municipality |
| Designations | monument in Fornminnesregistret |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `heritage` | yes |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 18 elements (outline 1, marker 4, road 6, building 6).

Evidence: documented 0, mapped 18, inferred 0, derived 0; heights documented 5, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/448687922 historic=fort Q11966505 10 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.81982/12.32226) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; sconce; sitelinks=3; wikidata:Q11966505 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 18 elements); data/traces/eda-sconce-q11966505.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
