# Westpoort

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `westpoort-q2097675` |
| Coordinates | 50.98029, 2.74563 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.98029/2.74563)) |
| Wikidata | [Q2097675](https://www.wikidata.org/wiki/Q2097675) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Lo-Reninge |
| Designations | beschermd monument |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 322 elements (outline 1, marker 3, road 60, building 232, wall 4, water 5, waterway 3, zone 14).

Evidence: documented 0, mapped 322, inferred 0, derived 0; heights documented 10, inferred 0, unknown 226.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/114235292 historic=yes Q2284767 312 m from ledger point
- origin moved 312 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.98029/2.74563) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q2097675 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 322 elements); data/traces/westpoort-q2097675.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
