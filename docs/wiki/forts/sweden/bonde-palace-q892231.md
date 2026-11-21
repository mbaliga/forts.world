# Bonde Palace

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bonde-palace-q892231` |
| Coordinates | 59.32626, 18.06644 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.32626/18.06644)) |
| Wikidata | [Q892231](https://www.wikidata.org/wiki/Q892231) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|palace\|architectural ensemble\|architectural landmark |
| Administrative area | Stockholm Municipality |
| Inception | 1673 |
| Designations | governmental listed building complex |
| Wikipedia language editions | 14 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 380 elements (outline 1, marker 6, road 232, building 111, waterway 3, wall 16, coastline 1, retaining-wall 5, water 1, zone 4).

Evidence: documented 0, mapped 380, inferred 0, derived 0; heights documented 84, inferred 0, unknown 48.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/16095343 historic=castle Q892231 0 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 2 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.32626/18.06644) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|palace\|architectural ensemble\|architectural landmark; sitelinks=14; wikidata:Q892231 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 380 elements); data/traces/bonde-palace-q892231.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
