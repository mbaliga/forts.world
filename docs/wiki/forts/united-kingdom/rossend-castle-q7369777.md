# Rossend Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rossend-castle-q7369777` |
| Coordinates | 56.0587, -3.24019 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.0587/-3.24019)) |
| Wikidata | [Q7369777](https://www.wikidata.org/wiki/Q7369777) (CC0) |
| Wikidata class | fortification |
| Types | tower house |
| Administrative area | Fife |
| Designations | category B listed building |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |

## What the model contains

Tier **T1**, status `outline+walls`, 165 elements (outline 1, marker 2, coastline 2, road 66, water 1, building 71, wall 17, zone 5).

Evidence: documented 0, mapped 165, inferred 0, derived 0; heights documented 57, inferred 0, unknown 31.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/384433923 historic=castle Q7369777 3 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.0587/-3.24019) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house; sitelinks=6; wikidata:Q7369777 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 165 elements); data/traces/rossend-castle-q7369777.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
