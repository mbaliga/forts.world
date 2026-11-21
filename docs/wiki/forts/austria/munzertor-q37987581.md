# Münzertor

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `munzertor-q37987581` |
| Coordinates | 47.27931, 11.50742 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.27931/11.50742)) |
| Wikidata | [Q37987581](https://www.wikidata.org/wiki/Q37987581) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Hall in Tirol |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `website` | http://www.muenze-hall.at/de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 386 elements (outline 1, marker 6, road 139, building 223, waterway 9, zone 3, water 2, wall 3).

Evidence: documented 0, mapped 386, inferred 0, derived 0; heights documented 11, inferred 0, unknown 215.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1635120 historic=castle Q5678774 26 m from ledger point
- origin moved 24 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.27931/11.50742) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q37987581 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 386 elements); data/traces/munzertor-q37987581.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
