# Gstättentor

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gstattentor-q64487781` |
| Coordinates | 47.80035, 13.0395 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.80035/13.0395)) |
| Wikidata | [Q64487781](https://www.wikidata.org/wiki/Q64487781) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Salzburg |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 1 |
| OSM `historic` | building |
| OSM `description` | Das Tor war vor 1300 eines der drei Haupttore der Stadt im Mittelalter. |

## What the model contains

Tier **T1**, status `outline+walls`, 347 elements (outline 1, marker 19, road 299, building 149, wall 15, zone 32, waterway 7, cliff 3).

Evidence: documented 0, mapped 347, inferred 0, derived 0; heights documented 98, inferred 0, unknown 37.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/64055643 historic=building 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 149 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 299 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.80035/13.0395) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q64487781 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 347 elements); data/traces/gstattentor-q64487781.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
